import type { TimelineItem } from "../components/features/timeline/types";

export const timelineData: TimelineItem[] = [
  {
    id: "new-blog",
    title: "新版博客 Cotaspace",
    description:
      "使用 Astro 重新构建的博客，使用了 Mizuki 模板。虽然看起来比较预制，而且实际上也是预制的。",
    type: "project",
    startDate: "2026-07-09",
    // endDate: "",
    location: "",
    organization: "",
    skills: [],
    achievements: [
      "成功部署了 Astro 与 Mizuki 模板",
      "迁移了所有内容",
      "实现了旧版博客的同时存档",
    ],
    icon: "material-symbols:code",
    color: "#8080FF",
    featured: true,
  },
  {
    id: "old-blog",
    title: "旧版博客 Tascota Gateway",
    description:
      "使用现学的简单 HTML、CSS 和 JavaScript 手搓的博客。由于技术力有限，甚至有种千禧年风格。",
    type: "project",
    startDate: "2024-08-04",
    endDate: "2026-07-09",
    location: "",
    organization: "",
    skills: [],
    achievements: [
      "装载了自己的碎碎念",
      "有一个 AI 协助构建的随机名言生成器",
      "借助 mdBook 构建了部分文字内容",
    ],
    icon: "material-symbols:code",
    color: "#8080FF",
    featured: true,
  },
];
