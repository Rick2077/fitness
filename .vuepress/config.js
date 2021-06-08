module.exports = {
    title: 'Fitness',
    description: `A Project talk about fitness.`,
    themeConfig: {
    displayAllHeaders: true,
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Guide', link: '/guides/' },
      ],
      sidebar: [
          '/',
          '/b',
          '/c',
      ],
    },
    dest: 'public',
    serviceWorker: true,
    plugins: [
        [
          'vuepress-plugin-right-anchor',
          {
            showDepth: 2,
            ignore: [
              '/',
              // 更多...
            ],
            expand: {
              default: true,
              trigger: 'hover'
            },
            customClass: 'your-customClass',
            disableGlobalUI: false,
          }
        ]
    ]
}