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
                  buildHookId: '6115c38bdcb64a65a4be3107',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-15vhzdho',
                  apiId: '552e3b35-c290-403d-ad12-a2285d41fad8'
                },
                {
                  buildHookId: '6115c38c4cb89262d001581d',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-dvrsqis8',
                  apiId: '356834cd-aa4a-422a-a8c0-145aec803a86'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/yodacom/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-dvrsqis8.netlify.app', category: 'apps'}
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
