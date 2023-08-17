import social_media from "./social_media";
export default {
  usefull_links: {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  community: {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      {
        name: "Github",
        link: "https://github.com/appseed",
      },
      {
        name: "Themeforest",
        link: "https://themeforest.com",
      },
      {
        name: "Wordpress",
        link: "https://wordpress.com",
      },
    ],
  },
  followus: {
    title: "Follow us",
    links: Object.values(social_media),
  },
  Legal: {
    title: "Legal & Licenses",
    links: [
      { name: "Privacy Policy", link: "privacy-policy" },
      { name: "Terms & Conditions", link: "term-and-conditions" },
      { name: "License", link: "license" },
    ],
  },
};
