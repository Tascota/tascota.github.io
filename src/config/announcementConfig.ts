import type { AnnouncementConfig } from "../types/config";

// 公告栏配置
export const announcementConfig: AnnouncementConfig = {
  title: "v2.2.1 - 2026-09-19", // 公告标题，填空使用i18n字符串Key.announcement
  content: "添加了一张新画作。", // 公告内容
  closable: false, // 允许用户关闭公告
  link: {
    enable: true, // 启用链接
    text: "Old Version", // 链接文本
    url: "/old/index.html", // 链接 URL
    external: true, // 内部链接
  },
};
