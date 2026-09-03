import type { AnnouncementConfig } from "../types/config";

// 公告栏配置
export const announcementConfig: AnnouncementConfig = {
  title: "v2.2.0 - 2026-09-04", // 公告标题，填空使用i18n字符串Key.announcement
  content:
    "修补了一些博文发布时的缺漏，增加了一篇博文，并调整了部分站点布局。启用了相册功能。本博客内容的版权协议更新为 CC BY-NC 4.0。", // 公告内容
  closable: false, // 允许用户关闭公告
  link: {
    enable: true, // 启用链接
    text: "Old Version", // 链接文本
    url: "/old/index.html", // 链接 URL
    external: true, // 内部链接
  },
};
