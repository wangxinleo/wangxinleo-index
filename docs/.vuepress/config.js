module.exports = {
  title: 'Hello, I\'m wangxinleo!',
  base: '/blog/',
  shouldPrefetch: () => false,
  description: '前端工程师 | node工程师 | Linux爱好者 | github爱好者',
  themeConfig: {
    // logo: '/assets/img/logo.png',
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'wangxinleo/wecode-blog',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: 'Github',

    // 以下为可选的编辑链接选项

    // 假如你的文档仓库和项目本身不在一个仓库：
    // docsRepo: 'vuejs/vuepress',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'ebook-sourcecode',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '帮coco改善此页面！',
    nav: [
      { text: '关于我', link: '/' },
      // { text: '我的博客', link: '/vue-blog/' },
      // { text: '我的项目', link: '/vue-blog/' },
    ],
    sidebar: {
      '/blog/': [
        {
          title: '前言',
          collapsable: false,
          children: [
            '/blog/0.md'
          ]
        }, {
          title: '第一部分 Vue快速入门',
          collapsable: false,
          children: [
            '/blog/1.md',
            '/blog/2.md',
            '/blog/3.md',
            '/blog/4.md',
            '/blog/5.md',
            '/blog/6.md',
            '/blog/7.md',
            '/blog/8.md',
          ]
        }, {
          title: '第二部分 Vue的正确使用方式',
          collapsable: false,
          children: [
            '/blog/9.md',
            '/blog/10.md',
            '/blog/11.md',
            '/blog/12.md',
            '/blog/13.md',
            '/blog/14.md',
            '/blog/15.md',
            '/blog/16.md',
          ]
        }, {
          title: '后记',
          collapsable: false,
          children: [
            '/blog/99.md',
          ]
        }
      ],
    },
    // 自定义属性
    navTitle: 'wangxinleo',
  }
}