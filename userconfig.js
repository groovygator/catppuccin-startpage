// latte / frappe / macchiato / mocha
const palette = mocha;

const default_config = {
  overrideStorage: true,
  temperature: {
    location: "London",
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: palette.maroon,
  },
  disabled: [],
  fastlink: "https://app.raindrop.io",
  openLastVisitedTab: true,
  tabs: [
    {
          name: "main",
      background_url: "src/img/banners/cbg-15.gif",
      categories: [
        {
          name: "minecraft",
          links: [
            {
              name: "curseforge",
              url: "https://www.curseforge.com/minecraft",
              icon: "hammer",
              icon_color: palette.green,
            },
            {
              name: "modrinth",
              url: "https://modrinth.com",
              icon: "settings",
              icon_color: palette.peach,
            },
            {
              name: "exaroton",
              url: "https://exaroton.com",
              icon: "settings-2",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "vintage story",
          links: [
            {
              name: "wiki",
              url: "https://wiki.vintagestory.at",
              icon: "book",
              icon_color: palette.green,
            },
            {
              name: "mod db",
              url: "https://mods.vintagestory.at",
              icon: "cube-plus",
              icon_color: palette.peach,
            },
          ],
        },
        {
          name: "stuff",
          links: [
            {
              name: "fmhy",
              url: "https://fmhy.net",
              icon: "player-play",
              icon_color: palette.green,
            },
            {
              name: "rutracker",
              url: "https://rutracker.org",
              icon: "skull",
              icon_color: palette.peach,
            },
            {
              name: "terraria wiki",
              url: "https:/terraria.wiki.gg",
              icon: "books",
              icon_color: palette.red,
            },
            {
              name: "translate",
              url: "https://libretranslate.com",
              icon: "language-hiragana",
              icon_color: palette.blue,
            },
            {
              name: "digdeeper",
              url: "https://digdeeper.club",
              icon: "binary",
              icon_color: palette.mauve,
            },
          ],
        },
      ],
    },
    {
      name: "tech",
      background_url: "src/img/banners/cbg-13.gif",
      categories: [
        {
          name: "tinkering",
          links: [
            {
              name: "github",
              url: "https://github.com",
              icon: "brand-github",
              icon_color: palette.green,
            },
            {
              name: "gpt",
              url: "https://hoody.com.ai",
              icon: "circle-triangle",
              icon_color: palette.peach,
            },
            {
              name: "arch wiki",
              url: "https://wiki.archlinux.org",
              icon: "pacman",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "work",
          links: [
            {
              name: "disroot",
              url: "https://webmail.disroot.org",
              icon: "mail",
              icon_color: palette.green,
            },
            {
              name: "cloud",
              url: "https://cloud.disroot.org",
              icon: "cloud",
              icon_color: palette.peach,
            },
            {
              name: "exercism",
              url: "https://exercism.org",
              icon: "code-minus",
              icon_color: palette.red,
            },
            {
              name: "aoc",
              url: "https://adventofcode.com",
              icon: "brand-linktree",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "resources",
          links: [
            {
              name: "dou",
              url: "https://dou.ua",
              icon: "brand-prisma",
              icon_color: palette.green,
            },
            {
              name: "hackernews",
              url: "https://news.ycombinator.com",
              icon: "brand-redhat",
              icon_color: palette.peach,
            },
            {
              name: "uber engineering",
              url: "https://www.uber.com/en-GB/blog/london/engineering",
              icon: "brand-uber",
              icon_color: palette.red,
            },
            {
              name: "netflix tech blog",
              url: "https://netflixtechblog.com",
              icon: "brand-netflix",
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
    {
      name: "chi ll",
      background_url: "src/img/banners/cbg-08.gif",
      categories: [
        {
          name: "social media",
          links: [
            {
              name: "telegram",
              url: "https://web.telegram.org",
              icon: "brand-telegram",
              icon_color: palette.green,
            },
            {
              name: "facebook",
              url: "https://www.facebook.com",
              icon: "brand-facebook",
              icon_color: palette.peach,
            },
            {
              name: "reddit",
              url: "https://www.reddit.com/r/unixporn",
              icon: "brand-reddit",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "gaming",
          links: [
            {
              name: "IGN",
              url: "https://www.ign.com/account/playlist/library",
              icon: "device-gamepad",
              icon_color: palette.green,
            },
            {
              name: "steam",
              url: "https://store.steampowered.com",
              icon: "brand-steam",
              icon_color: palette.peach,
            },
            {
              name: "epicgames",
              url: "https://store.epicgames.com",
              icon: "brand-fortnite",
              icon_color: palette.red,
            },
            {
              name: "nintendo",
              url: "https://store.nintendo.co.uk",
              icon: "device-nintendo",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "video",
          links: [
            {
              name: "anilist",
              url: "https://anilist.co/home",
              icon: "brand-funimation",
              icon_color: palette.green,
            },
            {
              name: "youtube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: palette.peach,
            },
            {
              name: "patreon",
              url: "https://www.patreon.com",
              icon: "brand-patreon",
              icon_color: palette.red,
            },
            {
              name: "kyivstar",
              url: "https://tv.kyivstar.ua",
              icon: "star-filled",
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_config, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);
