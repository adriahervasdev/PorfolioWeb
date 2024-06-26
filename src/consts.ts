import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
    NAME: "Adria Hervas",
    EMAIL: "adriahervas.dev@gmail.com",
    NUM_POSTS_ON_HOMEPAGE: 3,
    NUM_WORKS_ON_HOMEPAGE: 2,
    NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
    TITLE: "CV",
    DESCRIPTION: "Astro Nano is a minimal and lightweight blog and portfolio.",
};

export const DEGREE: Metadata = {
    TITLE: "Degree",
    DESCRIPTION: "Where I have studied and what I have done.",
};

export const WORK: Metadata = {
    TITLE: "Work",
    DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
    TITLE: "Projects",
    DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const TECNOLOGIES = {
    "C++": "/Icons/cplusplus.png",
    "Qt": "/Icons/qt.png",
    "Unreal Engine": "/Icons/unrealengine.png",
    "Git": "/Icons/git.png",
    "Python": "/Icons/python.png",
    "Js": "/Icons/js.png",
    "HTML": "/Icons/html.png",
    "SVN": "/Icons/svn.png",
    "CSS": "/Icons/css.png",
    "PostgreSQL": "/Icons/postgresql.png",
    "PHP": "/Icons/php.png",
    "Google Cloud": "/Icons/googlecloud.png",
    "Singleplayer": "/Icons/singleplayer.png",
    "Multiplayer": "/Icons/multiplayer.png",
    "IOS": "/Icons/ios.png",
    "Android": "/Icons/android.png",
    "Oculus": "/Icons/oculus.png",
    "Play Canvas": "/Icons/playcanvas.png",
};

export const SOCIALS: Socials = [
    //   { 
    //     NAME: "twitter-x",
    //     HREF: "https://twitter.com/markhorn_dev",
    //     ICON: "fab fa-teitter"
    //   },
    //   { 
    //     NAME: "github",
    //     HREF: "https://github.com/markhorn-dev",
    //     ICON: "fab fa-github"
    //   },
    {
        NAME: "Adria Hervas Arocas",
        HREF: "https://www.linkedin.com/in/adriahervas",
        ICON: "fab fa-linkedin"
    }
];
