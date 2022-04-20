
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','826'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','662'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','4a7'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','1ed'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','6ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','727'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','4ab'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog','eb0'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','204'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post','0c1'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post','d1c'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post','a40'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags','98e'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus','ca9'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook','179'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello','d49'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola','235'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome','f54'),
    exact: true
  },
  {
    path: '/index-old',
    component: ComponentCreator('/index-old','f52'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','d03'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/','05c'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/','ab5'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/challenges/intro',
        component: ComponentCreator('/challenges/intro','de7'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/challenges/task-1/answer',
        component: ComponentCreator('/challenges/task-1/answer','fc4'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/challenges/task-1/assignment',
        component: ComponentCreator('/challenges/task-1/assignment','fbc'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/community/discord-bot',
        component: ComponentCreator('/community/discord-bot','c00'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/community/docs',
        component: ComponentCreator('/community/docs','bb3'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/guides/analytics-seo/analytics',
        component: ComponentCreator('/guides/analytics-seo/analytics','53c'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/guides/analytics-seo/meta',
        component: ComponentCreator('/guides/analytics-seo/meta','647'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/guides/analytics-seo/performance',
        component: ComponentCreator('/guides/analytics-seo/performance','e57'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/guides/design/accessibility',
        component: ComponentCreator('/guides/design/accessibility','753'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/guides/design/libraries',
        component: ComponentCreator('/guides/design/libraries','214'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/guides/design/resources',
        component: ComponentCreator('/guides/design/resources','130'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/guides/html-css/libraries',
        component: ComponentCreator('/guides/html-css/libraries','536'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/guides/html-css/resources',
        component: ComponentCreator('/guides/html-css/resources','70c'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/guides/html-css/tips-tricks',
        component: ComponentCreator('/guides/html-css/tips-tricks','db9'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/guides/javascript/libraries',
        component: ComponentCreator('/guides/javascript/libraries','0d2'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/guides/javascript/resources',
        component: ComponentCreator('/guides/javascript/resources','76c'),
        exact: true,
        sidebar: "guidesSidebar"
      },
      {
        path: '/guides/javascript/tips-tricks',
        component: ComponentCreator('/guides/javascript/tips-tricks','4f3'),
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
