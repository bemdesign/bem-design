module.exports = {
  block: 'page',
  title: 'BEM Illustrations',
  favicon: '/favicon.ico',
  head: [
      { elem: 'meta', attrs: { name: 'description', content: '' } },
      { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
      { elem: 'css', url: 'illustrations.min.css' },
      { elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
  ],
  mix: {
      block: 'theme',
      mods: { color: 'default', space: 'default', size: 'default' }
  },
  scripts: [{ elem: 'js', url: 'illustrations.min.js' }],
  mods: { theme: 'islands' },
  content: [
    {
      block: 'demo',
      mix: [
        { block: 'b-page', elem: 'content' },
        { block: 'theme' }
      ],
      params: {
        menusection: 'tools',
        pagename: 'illustrations',
      },
      content : [
        {
          elem: 'content',
          content: [
            {
              block: 'text',
              mods: { size: 'xxxl', weight: 'bold' },
              mix: { block: 'decorator', mods: { 'indent-b': 'xl' } },
              content: 'Иллюстрации'
            },
            {
              block : 'illustration-list',
              content : [
                {
                  block : 'illustration-item',
                  content : [
                    {
                      elem : 'view',
                      content : [
                        {
                          block : 'illustration',
                          mods : { 'persone' : 'm-primary'}
                        }
                      ]
                    },
                    {
                      elem : 'name',
                      content : [
                        {
                          block: 'text',
                          mods: { size: 'm', view: 'primary', weight: 'bold' },
                          content: "mods: { persone: 'm-primary' }"
                        }
                      ]
                    }
                  ]
                },

              ]
            }
          ]
        }
      ]
    },

  ]
};
