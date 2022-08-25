module.exports = {
  port: 3004,
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
  description: '前端工程师 | node工程师 | Linux爱好者 | Github爱好者',
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
    editLinkText: '写得太烂了? 帮帮孩子!',
    nav: [
      {text: '关于我', link: '/'},
      { text: '归档', link: '/blog/' },
      { text: '小声bibi', link: '/bibi/' },
    ],
    sidebar: {
      '/blog/': [
        {
          title: '前言',
          path: '/blog/'
        },
        {
          title: '知识分享',
          collapsable: true,
          children: [
            {title: '前端', path: '/blog/technologySharing/'},
            {title: '网络', path: '/blog/technologySharing/'}
          ]
        },
        {
          title: '团队管理',
          collapsable: true,
          children: [
            {
              title: '前端业务团队如何进行技术建设',
              sidebarDepth: 2,
              path: '/blog/specification/management.md'
            }
          ]
        },
        // {
        //   title: '事故复盘',
        //   collapsable: true,
        //   children: [
        //     {title: 'items01', path: '/blog/'}
        //   ]
        // },
        // {
        //   title: '问题排查',
        //   collapsable: true,
        //   children: [
        //     {title: 'items01', path: '/blog/'}
        //   ]
        // },
        {
          title: '业务总结',
          collapsable: true,
          children: [
            {
              title: '团队Git规范',
              sidebarDepth: 2,
              path: '/blog/business/commit.md'
            },
          ]
        },
      ],
      '/bibi/': ['']
    },
  },
  plugins: [
    ['@vuepress/search', {
      searchMaxSuggestions: 10
    }]
  ]

}