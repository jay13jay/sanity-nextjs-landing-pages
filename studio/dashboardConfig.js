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
                  buildHookId: '616489a69fd57200aa2e1e08',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-extik6z2',
                  apiId: 'ef0a40c3-6ccc-481b-af23-e41dab40a161'
                },
                {
                  buildHookId: '616489a66dbbf600b9e0ed04',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-79ghk65i',
                  apiId: '8bf8c259-7fc7-4448-be9d-39605268ada9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jay13jay/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-79ghk65i.netlify.app', category: 'apps'}
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
