module.exports = {
  plugins: [
    {
      resolve: 'gatsby-theme-portfolio-minimal',
      options: {
        siteUrl: 'https://wearemahsaamini.com/', // Used for sitemap generation
        manifestSettings: {
          favicon: './content/images/favicon.png', // Path is relative to the root
          siteName: 'We are Mahsa Amini', // Used in manifest.json
          shortName: 'We are Mahsa Amini', // Used in manifest.json
          startUrl: '/', // Used in manifest.json
          backgroundColor: '#FFFFFF', // Used in manifest.json
          themeColor: '#000000', // Used in manifest.json
          display: 'minimal-ui', // Used in manifest.json
        },
        contentDirectory: './content',
        blogSettings: {
          path: '/blog', // Defines the slug for the blog listing page
          usePathPrefixForArticles: false, // Default true (i.e. path will be /blog/first-article)
        },
        // googleAnalytics: {
        //     trackingId: "UA-XXXXXX-X",
        //     anonymize: true, // Default true
        //     environments: ["production", "development"] // Default ["production"]
        // }
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'G-CQZBB58JSJ',
        anonymize: true,
      },
    },
  ],
};
