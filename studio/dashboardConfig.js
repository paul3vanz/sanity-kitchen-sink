export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '63232bc2c8938e47f7e9d557',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-rhje1wm4',
                  apiId: '3f6ca16f-55ee-4d3f-9257-d4f54663a28f'
                },
                {
                  buildHookId: '63232bc2521a3a487e9284a1',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-94sjenui',
                  apiId: '5b691fb1-0315-429c-9d92-bedafa1da7d3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/paul3vanz/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-94sjenui.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
