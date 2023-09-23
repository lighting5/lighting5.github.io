import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";

export default defineUserConfig({
  title: "码无止境 Code is Life",
  description: "在无止境的编程代码世界里遨游，用代码改变我们的生活",
  theme: recoTheme({
    style: "@vuepress-reco/style-default",
    logo: "/logo.png",
    author: "码无止境",
    authorAvatar: "/logo.png",
    lastUpdatedText: "",
    navbar: [
      { text: "首页", link: "/" },
      { text: "前端", link: "/categories/qianduan/1/" },
      // { text: "后端", link: "/categories/houduan/1/" },
      // { text: "游戏", link: "/categories/youxi/1/" },
      { text: "工具", link: "/categories/tools/1/" },
    ],
  }),
});
