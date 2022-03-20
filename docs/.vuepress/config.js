module.exports = {
  head: [
    [
      'link', // 设置 favicon.ico，注意图片放在 public 文件夹下
      {rel: 'icon', href: '/assets/img/logo.png'}
    ],
    [
      'script', // js 文件
      {src: '/assets/js/sakura.js'}
    ]
  ],
  title: 'wangxinleo.cn',
  base: '/',
  shouldPrefetch: () => false,
  description: '前端工程师 | node工程师 | Linux爱好者 | github爱好者',
  themeConfig: {
    logo: '/assets/img/logo.png',
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'wangxinleo/wangxinleo-index',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: 'Github',

    // 以下为可选的编辑链接选项

    // 假如你的文档仓库和项目本身不在一个仓库：
    // docsRepo: 'vuejs/vuepress',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'source_code',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '帮coco改善此页面！',
    nav: [
      {text: '关于我', link: '/'},
      // { text: '我的博客', link: '/blog/' },
      // { text: '我的项目', link: '/vue-blog/' },
    ],
    sidebar: {
      '/blog/': [
        {
          title: '前言',
          collapsable: false,
          children: [
            {title: 'items01', path: '/blog/'}
          ]
        }
      ],
    },
  },
  plugins: [
    ['@vuepress/search', {
      searchMaxSuggestions: 10
    }]
  ]

}