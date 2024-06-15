import giftArena from "../assets/giftArena.png";
import myGram from "../assets/myGram.png";
export const projects = [
  {
    id: 1,
    name: "MyGram",
    tagline: "A social media platform where you can connect with your friends",
    description:
      "Leveraged React, Reducers, Context API, Router, Tailwind CSS, and JavaScript to build a dynamic social platform. Implemented robust functionalities including user profiles, search, follow/unfollow, and post CRUD operations.",
    techStack: ["react", "tailwind", "javascript"],
    link: {
      live: "https://my-gram-social.netlify.app/",
      github: "https://github.com/jugeshraghav/mygram",
    },
    image: myGram,
  },
  {
    id: 2,
    name: "GiftArena",
    tagline:
      "An e-commerce Website where you can explore gifts for your loved ones.",
    description:
      "Developed a fully responsive React e-commerce platform with frontend authentication, cart/wishlist management (add/edit/delete), order history, and advanced search/sort functionalities, boosting user experience and potential sales.",
    techStack: ["react", "tailwind", "javascript"],
    link: {
      live: "https://gift-arena.netlify.app/",
      github: "https://github.com/jugeshraghav/gift-arena",
    },
    image: giftArena,
  },
];
