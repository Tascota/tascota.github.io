import type { AnnouncementConfig } from "../types/config";

// 公告栏配置
export const announcementConfig: AnnouncementConfig = {
  title: "v2.0.0", // 公告标题，填空使用i18n字符串Key.announcement
  content:
    "使用了 Astro 重新构建博客。由于时间精力有限，2026-07-08 之前的内容可能与现在的内容在样式上并未完全统一。部分内容未迁移到新版本中。", // 公告内容
  closable: true, // 允许用户关闭公告
  link: {
    enable: true, // 启用链接
    text: "Old Version", // 链接文本
    url: "/old/index.html", // 链接 URL
    external: true, // 内部链接
  },
};
