/**
 * 运行时语言切换：扫描 DOM 中带翻译标记的文本与属性，替换为当前语言。
 * 首次加载、Swup 换页、动态插入内容时都会重新扫描。
 */
import {
	getI18nLang,
	normalizeLang,
	setI18nLang,
	type SiteLanguage,
	translateMarkedText,
} from "../i18n/translation";

const STORAGE_KEY = "siteLang";
const SKIPPED_TAGS = new Set(["SCRIPT", "STYLE"]);

function getStoredLanguage(): SiteLanguage | null {
	try {
		return normalizeLang(localStorage.getItem(STORAGE_KEY));
	} catch {
		return null;
	}
}

function setStoredLanguage(lang: SiteLanguage): void {
	try {
		localStorage.setItem(STORAGE_KEY, lang);
	} catch {
		// localStorage 不可用时只在当前页面生效
	}
}

export function getCurrentLanguage(): SiteLanguage {
	return getStoredLanguage() ?? getI18nLang();
}

function shouldSkip(element: Element): boolean {
	return SKIPPED_TAGS.has(element.tagName);
}

function translateText(node: Text): void {
	const translated = translateMarkedText(node.data);
	if (translated !== node.data) {
		node.data = translated;
	}
}

function translateAttributes(element: Element): void {
	for (const attribute of Array.from(element.attributes)) {
		const translated = translateMarkedText(attribute.value);
		if (translated !== attribute.value) {
			element.setAttribute(attribute.name, translated);
		}
	}
}

export function applyI18n(root: ParentNode = document): void {
	if (root instanceof Element) {
		if (shouldSkip(root)) return;
		translateAttributes(root);
	}

	const walker = document.createTreeWalker(root as Node, NodeFilter.SHOW_TEXT, {
		acceptNode(node: Node): number {
			const parent = (node as Text).parentElement;
			return parent && shouldSkip(parent)
				? NodeFilter.FILTER_REJECT
				: NodeFilter.FILTER_ACCEPT;
		},
	});
	let node = walker.nextNode();
	while (node) {
		translateText(node as Text);
		node = walker.nextNode();
	}

	for (const element of root.querySelectorAll("*")) {
		if (!shouldSkip(element)) {
			translateAttributes(element);
		}
	}
}

function syncHtmlLang(): void {
	document.documentElement.lang = getI18nLang().replace("_", "-");
}

export function setLanguage(lang: SiteLanguage): void {
	setI18nLang(lang);
	setStoredLanguage(lang);
	syncHtmlLang();
	applyI18n(document);
}

let scheduled = false;
const pendingRoots: Node[] = [];

function flushAddedNodes(): void {
	scheduled = false;
	const roots = pendingRoots.splice(0);
	for (const root of roots) {
		if (root.nodeType === Node.TEXT_NODE) {
			translateText(root as Text);
		} else if (root.nodeType === Node.ELEMENT_NODE) {
			applyI18n(root as Element);
		}
	}
}

function observeDynamicContent(): void {
	if (!document.body) return;
	const observer = new MutationObserver((mutations) => {
		for (const mutation of mutations) {
			for (const node of mutation.addedNodes) {
				pendingRoots.push(node);
			}
		}
		if (scheduled || pendingRoots.length === 0) return;
		scheduled = true;
		requestAnimationFrame(flushAddedNodes);
	});
	observer.observe(document.body, { childList: true, subtree: true });
}

function init(): void {
	const stored = getStoredLanguage();
	if (stored) {
		setI18nLang(stored);
	}
	syncHtmlLang();
	applyI18n(document);
	observeDynamicContent();
}

if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", init, { once: true });
} else {
	init();
}

// Swup 只替换 main 内容；换页后再整体扫描一次，确保脚本生成的内容也被翻译
document.addEventListener("swup:page:view", () => {
	applyI18n(document);
});
