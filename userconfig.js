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
      name: "piracy",
      background_url: "src/img/banners/cbg-08.gif",
      categories: [
        {
          name: "general",
          links: [
              name: "fmhy",
              url: "https://fmhy.net",
              icon: "player-play",
              icon_color: palette.green,
            },
            {
              name: "megathread",
              url: "https://rentry.co/megathread",
              icon: "brand-reddit",
              icon_color: palette.peach,
            },
            {
             name: "rutracker",
              url: "https://rutracker.org",
              icon: "skull",
              icon_color: palette.red, 
            },
            {
              name: "fitgirl",
              url: "https://fitgirl-repacks.site",
              icon: "woman",
              icon_color: palette.blue,
            },
            {
              name: "cs.rin.ru",
              url: "https://cs.rin.ru/forum/",
              icon: "brand-steam",
              icon_color: palette.mauve
            },
          ],
        },
        {
        name: "subs",
          links: [
            {
              name: "/piracy",
              url: "https://reddit.com/r/piracy",
              icon: "flag",
              icon_color: palette.green,
            },
            {
              name: "/CrackWatch",
              url: "https://reddit.com/r/CrackWatch",
              icon: "egg-cracked",
              icon_color: palette.peach,
            },
            {
              name: "/PiratedGames",
              url: "https://reddit.com/r/PiratedGames",
              icon: "device-gamepad",
              icon_color: palette.red
            },
          ],
        },
        {
          name: "mp3",
          links: [
            {
              name: "squid",
              url: "https://eu.qobuz.squid.wtf/",
              icon: "vinyl",
              icon_color: palette.green,
            },
            {
              name: "cobalt",
              url: "https://cobalt.tools/",
              icon: "cat",
              icon_color: palette.peach,
            },
            {
              name: "lucida",
              url: "https://lucida.to/",
              icon: "headphones",
              icon_color: palette.red
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
