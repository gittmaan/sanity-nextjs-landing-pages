export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '6148dbf71c206d0b18f5d37e',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-3snwnwat',
                  apiId: '927f2b1f-590c-4d74-9de4-d180a9b63a99'
                },
                {
                  buildHookId: '6148dbf7362bc616b89ef4f9',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ruuv2moi',
                  apiId: '2cfa095f-0960-47c2-821e-cbcd3e5ecc35'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gittmaan/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ruuv2moi.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
