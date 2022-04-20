
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docs/blog',
    component: ComponentCreator('/docs/blog','6fc'),
    exact: true
  },
  {
    path: '/docs/blog/archive',
    component: ComponentCreator('/docs/blog/archive','9bf'),
    exact: true
  },
  {
    path: '/docs/blog/first-blog-post',
    component: ComponentCreator('/docs/blog/first-blog-post','a1d'),
    exact: true
  },
  {
    path: '/docs/blog/long-blog-post',
    component: ComponentCreator('/docs/blog/long-blog-post','1e3'),
    exact: true
  },
  {
    path: '/docs/blog/mdx-blog-post',
    component: ComponentCreator('/docs/blog/mdx-blog-post','4f4'),
    exact: true
  },
  {
    path: '/docs/blog/tags',
    component: ComponentCreator('/docs/blog/tags','3db'),
    exact: true
  },
  {
    path: '/docs/blog/tags/docusaurus',
    component: ComponentCreator('/docs/blog/tags/docusaurus','5b2'),
    exact: true
  },
  {
    path: '/docs/blog/tags/facebook',
    component: ComponentCreator('/docs/blog/tags/facebook','ed2'),
    exact: true
  },
  {
    path: '/docs/blog/tags/hello',
    component: ComponentCreator('/docs/blog/tags/hello','395'),
    exact: true
  },
  {
    path: '/docs/blog/tags/hola',
    component: ComponentCreator('/docs/blog/tags/hola','a96'),
    exact: true
  },
  {
    path: '/docs/blog/welcome',
    component: ComponentCreator('/docs/blog/welcome','6df'),
    exact: true
  },
  {
    path: '/docs/markdown-page',
    component: ComponentCreator('/docs/markdown-page','53b'),
    exact: true
  },
  {
    path: '/docs/',
    component: ComponentCreator('/docs/','841'),
    exact: true
  },
  {
    path: '/docs/',
    component: ComponentCreator('/docs/','dc7'),
    routes: [
      {
        path: '/docs/challenges/intro',
        component: ComponentCreator('/docs/challenges/intro','84b'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/docs/challenges/task-1/answer',
        component: ComponentCreator('/docs/challenges/task-1/answer','5e4'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/docs/challenges/task-1/assignment',
        component: ComponentCreator('/docs/challenges/task-1/assignment','a84'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/docs/community/discord-bot',
        component: ComponentCreator('/docs/community/discord-bot','5f0'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/docs/community/docs',
        component: ComponentCreator('/docs/community/docs','b46'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/docs/guides/analytics-seo/analytics',
        component: ComponentCreator('/docs/guides/analytics-seo/analytics','9c1'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/docs/guides/analytics-seo/meta',
        component: ComponentCreator('/docs/guides/analytics-seo/meta','31a'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/docs/guides/analytics-seo/performance',
        component: ComponentCreator('/docs/guides/analytics-seo/performance','308'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/docs/guides/design/accessibility',
        component: ComponentCreator('/docs/guides/design/accessibility','c42'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/docs/guides/design/libraries',
        component: ComponentCreator('/docs/guides/design/libraries','a46'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/docs/guides/design/resources',
        component: ComponentCreator('/docs/guides/design/resources','3b4'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/docs/guides/html-css/libraries',
        component: ComponentCreator('/docs/guides/html-css/libraries','12a'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/docs/guides/html-css/resources',
        component: ComponentCreator('/docs/guides/html-css/resources','c46'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/docs/guides/html-css/tips-tricks',
        component: ComponentCreator('/docs/guides/html-css/tips-tricks','9d0'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/docs/guides/javascript/libraries',
        component: ComponentCreator('/docs/guides/javascript/libraries','b99'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/docs/guides/javascript/resources',
        component: ComponentCreator('/docs/guides/javascript/resources','a86'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/docs/guides/javascript/tips-tricks',
        component: ComponentCreator('/docs/guides/javascript/tips-tricks','c9b'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro','67a'),
        exact: true,
        sidebar: "guidesSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
