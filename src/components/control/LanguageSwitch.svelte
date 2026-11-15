<script lang="ts">
import Icon from "@iconify/svelte";
import { onMount } from "svelte";

import { type SiteLanguage, SUPPORTED_LANGUAGES } from "../../i18n/translation";
import { getCurrentLanguage, setLanguage } from "../../scripts/i18n-client";
import { panelManager } from "../../utils/panel-manager.js";

let { variant = "dropdown" }: { variant?: "dropdown" | "inline" } = $props();

let current = $state<SiteLanguage>("zh_CN");
let isOpen = $state(false);
let container = $state<HTMLDivElement>();

function selectLanguage(lang: SiteLanguage) {
	setLanguage(lang);
	current = lang;

	if (variant === "dropdown") {
		isOpen = false;
		void panelManager.togglePanel("language-panel", false);
	} else {
		void panelManager.togglePanel("nav-menu-panel", false);
	}
}

async function toggleDropdown() {
	isOpen = await panelManager.togglePanel("language-panel");
}

onMount(() => {
	current = getCurrentLanguage();

	const handleClickOutside = (event: MouseEvent) => {
		if (!isOpen) return;
		const target = event.target;
		if (!(target instanceof Node) || container?.contains(target)) return;
		isOpen = false;
		void panelManager.togglePanel("language-panel", false);
	};

	document.addEventListener("click", handleClickOutside);
	return () => {
		document.removeEventListener("click", handleClickOutside);
	};
});
</script>

{#if variant === "inline"}
	<div class="flex flex-col">
		{#each SUPPORTED_LANGUAGES as lang}
			<button
				type="button"
				class="group flex justify-between items-center py-2 pl-6 pr-1 rounded-lg gap-4 w-full text-left
					hover:bg-[var(--btn-plain-bg-hover)] active:bg-[var(--btn-plain-bg-active)] transition"
				aria-pressed={current === lang.code}
				onclick={() => selectLanguage(lang.code)}
			>
				<span class="transition text-black/60 dark:text-white/60 font-medium">
					{lang.label}
				</span>
				{#if current === lang.code}
					<Icon
						icon="material-symbols:check"
						class="text-[1.1rem] text-(--primary)"
					/>
				{/if}
			</button>
		{/each}
	</div>
{:else}
	<div class="relative hidden md:block" bind:this={container}>
		<button
			type="button"
			aria-label="Language"
			aria-haspopup="true"
			aria-expanded={isOpen}
			class="btn-plain scale-animation rounded-lg h-11 w-11 active:scale-90"
			id="language-switch"
			onclick={toggleDropdown}
		>
			<Icon icon="material-symbols:translate" class="text-[1.25rem]" />
		</button>
		<div
			id="language-panel"
			class="float-panel float-panel-closed absolute right-0 w-44 px-2 py-2"
		>
			{#each SUPPORTED_LANGUAGES as lang}
				<button
					type="button"
					class="group flex justify-between items-center py-2 pl-3 pr-1 rounded-lg gap-4 w-full text-left
						hover:bg-[var(--btn-plain-bg-hover)] active:bg-[var(--btn-plain-bg-active)] transition"
					aria-pressed={current === lang.code}
					onclick={() => selectLanguage(lang.code)}
				>
					<span
						class="transition text-black/75 dark:text-white/75 font-bold"
					>
						{lang.label}
					</span>
					{#if current === lang.code}
						<Icon
							icon="material-symbols:check"
							class="text-[1.1rem] text-(--primary)"
						/>
					{/if}
				</button>
			{/each}
		</div>
	</div>
{/if}

<style>
	#language-panel {
		top: calc(100% + 0.5rem);
		transform-origin: top right;
	}
</style>
