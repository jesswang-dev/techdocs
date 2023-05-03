/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* See https://docusaurus.io/docs/api/docusaurus-config for all the possible 
site configuration options for v2. */

const siteConfig = {
  title: 'Accord Project' /* title for your website */,
  // taglineLead: 'Open Source', /* v2 do not have this proeprty in config file*/
  tagline:'Documentation',
  url: 'https://docs.accordproject.org' /* your website url */,
  baseUrl: '/' /* base url for your project */,
  favicon: 'img/favicon.png',
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'techdocs',
  organizationName: 'accordproject',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  //Migration to Docusaurus 2, split each functionality (blog, docs, pages) into plugins for modularity
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          //Docs folder path relative to website dir.
          path: '../docs',
          //Sidebars file relastive to website dir.
          sidebarPath: require.resolve('./sidebars.json')
        },
        // theme: {
        //   customCss:[require.resolve('./src/css/custom.css')]
        // }
      }
    ]
  ],
  themeConfig: {
    navbar: {
      title: 'Accord Project',
      logo: {
        alt: 'Accord Project Logo',
        src: 'img/A-MARK-ACCORDPROJECT-ONELINE-white.svg',
      },
      items: [
        { to: 'docs/accordproject', label: 'Documentation' },
        { href: 'https://studio.accordproject.org', label: 'Try Online!' },
        { href: 'https://github.com/accordproject', label: 'GitHub' },
        { type: 'search' }
      ]
    },
    footer: {
      logo: {
        alt: 'Accord Icon',
        src: 'img/accord_icon_white.png'
      },
      copyright: `Copyright © 2018-' ${new Date().getFullYear()} Accord Project, LLC.`,

    },
    image: 'img/docusaurus.png',
    docsSideNavCollapsible: true,
    algolia: {
      appId: '',
      apiKey: '1679802ddfc315329d6b5f4616b30e51',
      indexName: 'accordproject_api',
      algoliaOptions: {} // Optional, if provided by Algolia
    },

  },
  // For no header links in the top nav bar -> headerLinks: [],
  //Deprecated, moved to themeConfig - navbar - items
  // headerLinks: [
  //   { doc: 'accordproject', label: 'Documentation' },
  //   { href: "https://studio.accordproject.org", label: "Try Online!"},
  //   { href: "https://github.com/accordproject", label: "GitHub" },
  //   { search: true },
  // ],

  // If you have users set above, you add it here:
  //users,

  /* path to images for header/footer */
  /*headerIcon, footerIcon and colors options has been deprecated by v2. added to other config options
  headerIcon moved to themeConfig - navbar - logo - src
  footerIcon moved to themeConfig - footer
  favicon still stay at the level, moved up to keep the format consistent */
  // headerIcon: 'img/A-MARK-ACCORDPROJECT-ONELINE-white.svg',
  // footerIcon: 'img/accord_icon_white.png',
  // favicon: 'img/favicon.png',

  /* colors has been deprecated,  */
  /* colors for website */
  // colors: {
  //   primaryColor: '#1b2540',
  //   secondaryColor: '#19C6C6',
  // },

  /* custom fonts for website */
  /*fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },*/

  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  /*Moved to themeConfig */
  // copyright:
  //   'Copyright © 2018-' +
  //   new Date().getFullYear() +
  //   ' Accord Project, LLC.',


  /* Docusaurus 2 has removed highlight, now they are using Prism 
  https://prismjs.com/ */

  // highlight: {
  //   theme: 'ir-black',
  //   hljs: function(hljs) {
  //       // highlighting for Ergo logic
  //       hljs.registerLanguage('ergo', function(hljs) {
  //       var ERGO_KEYWORDS = {
  //           keyword: 'namespace import define function transaction concept event asset ' +
  //               'participant enum extends contract over clause throws emits state call ' +
  //               'enforce if then else let foreach return in where throw '+
  //               'constant match set emit with or and ',
  //           literal: 'true false unit none',
  //           built_in: 'flatten now dateTimeIsSame dateTimeIsBefore dateTimeIsAfter ' +
  //               'dateTimeDiffDays dateTimeDiffSeconds min max average '
  //         };

  //       var TYPE = {
  //         className: 'type',
  //         begin: '\\b[A-Z]([\\w\']*|{)',
  //         relevance: 0
  //       };
  //       var BLOCK_COMMENT = hljs.COMMENT(
  //         '/\\*',
  //         '\\*/',
  //         {
  //           contains: ['self']
  //         }
  //       );
  //       var SUBST = {
  //         className: 'subst',
  //         begin: /\\\(/, end: '\\)',
  //         keywords: ERGO_KEYWORDS,
  //         contains: [] // assigned later
  //       };
  //       var NUMBERS = {
  //           className: 'number',
  //           begin: '\\b([\\d_]+(\\.[\\deE_]+)?|0x[a-fA-F0-9_]+(\\.[a-fA-F0-9p_]+)?|0b[01_]+|0o[0-7_]+)\\b',
  //           relevance: 0
  //       };
  //       var TAGS = {
  //           className: 'template-variable',
  //           begin: '\{\{\%|\%\}\}',
  //           relevance: 0
  //       };
  //       var QUOTE_STRING_MODE = hljs.inherit(hljs.QUOTE_STRING_MODE, {
  //         contains: [SUBST, hljs.BACKSLASH_ESCAPE]
  //       });
  //       SUBST.contains = [NUMBERS];

  //       return {
  //         keywords: ERGO_KEYWORDS,
  //         contains: [
  //           QUOTE_STRING_MODE,
  //           hljs.C_LINE_COMMENT_MODE,
  //           BLOCK_COMMENT,
  //           TYPE,
  //           NUMBERS,
  //           TAGS
  //         ]
  //       };
  //       });
  //       // highlighting for template grammar
  //       hljs.registerLanguage('tem', function(hljs) {
  //           var BUILT_INS = {'keyword': 'foreach with if else ulist olist kind as clause'};
  //           var QUOTE_STRING_MODE = hljs.inherit(hljs.QUOTE_STRING_MODE, {
  //               contains: [hljs.BACKSLASH_ESCAPE]
  //           });
  //           var IDENT = {
  //               className: 'template-tag',
  //               begin: '[a-zA-Z\.-]+',
  //               keywords: BUILT_INS
  //           };
  //           return {
  //               aliases: ['tem.md'],
  //               case_insensitive: true,
  //               subLanguage: 'markdown',
  //               contains: [
  //                   hljs.COMMENT('{{!(--)?', '(--)?}}'),
  //                   QUOTE_STRING_MODE,
  //                   {
  //                       begin: /\{\{\%/, end: /\%\}\}/,
  //                       subLanguage: 'ergo',
  //                       relevance: 0
  //                   },
  //                   {
  //                       className: 'template-variable',
  //                       begin: /\{\{[#\/]?/, end: /\}\}/,
  //                       contains: [IDENT,QUOTE_STRING_MODE]
  //                   }
  //               ]
  //           };
  //       });
  //   }
  // },
  //algolia DocSearch API Keys, now moved to themeConfig
  // algolia: {
  //   apiKey: '1679802ddfc315329d6b5f4616b30e51',
  //   indexName: 'accordproject_api',
  //   algoliaOptions: {} // Optional, if provided by Algolia
  // },

  // Add custom scripts here that would be placed in <script> tags
  scripts: [
    'https://buttons.github.io/buttons.js',
    'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
    '/js/code-block-buttons.js',
  ],
  //stylesheets: ['/css/code-block-buttons.css','/css/docusaurus-admonitions.css'],

  /* v2 - markdownPlugins - We use MDX in v2 instead of Remarkable. 
  Your Markdown plugins have to be converted to Remark/Rehype plugins.*/
  // markdownPlugins: [
  //   // Highlight admonitions.
  //   require('remarkable-admonitions')({ icon: 'svg-inline' })
  // ],

  /* v2 - Turned on by default in v2 */
  /* On page navigation for the current documentation page */
  // onPageNav: 'separate',


  /* v2 - site meta info docsSideNavCollapsible moved under themeConfig */
  /* Collapsible categories in the side navigation.*/
  // docsSideNavCollapsible: true,

  /* v2 - site meta info ogImage, twitterImage moved under themeConfig */
  /* Open Graph and Twitter card images */
  // ogImage: 'img/docusaurus.png',
  // twitterImage: 'img/docusaurus.png',

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  // repoUrl: 'https://github.com/accordproject/cicero',
};

module.exports = siteConfig;

/* Legacy Codebase */
/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: 'Clause Inc.',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/accord_logo.png'.
    image: 'img/clause-logo-sm.png',
    infoLink: 'http://clause.io',
    pinned: true,
  },
  {
      caption: 'ContractPen',
      // You will need to prepend the image path with your baseUrl
      // if it is not '/', like: '/test-site/img/accord_logo.png'.
      image: 'img/contractpen-logo-sm.png',
      infoLink: 'https://contractpen.com',
      pinned: true,
  },
  {
    caption: 'REIV SmartVicForms',
    image: 'https://smartvicforms.com.au/assets/Logo/reiv-smartVicforms%20logo-Full%20Colour.svg',
    infoLink: 'https://smartvicforms.com.au',
    pinned: true,
  },
  {
    caption: 'beNEXT',
    image: 'https://smartvicforms.com.au/assets/Logo/beNext_orange-darkgreen-logo.svg',
    infoLink: 'https://www.benext.io',
    pinned: true,
  },
];
