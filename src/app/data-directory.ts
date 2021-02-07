import {WordsImg, WorkCard, Connect, PhotoCard, Photo } from './data';

/*----Home Page-----*/
export const HOMEWORDS: WordsImg[] = [
  {
    title: 'Eliza Siegel',
    subtitle: 'is a journalist and storyteller based in New Jersey.',
    // imgUrl: './assets/img/eliza.png',
    imgUrl: 'https://drive.google.com/uc?export=view&id=1nG1l9F063-xsEwS0m5wnWKbCTD5y6wyo',
  }
];

/*----Work Page-----*/
export const WORKCARDS: WorkCard[] = [
  {
    title: 'Politics and Culture Satirist',
    description: 'Check out my monthly column, “Irrational Takes,” where I satirize politics and culture' +
      ' for the feminist news and storytelling site The Rational.',
    imgUrl: './assets/img/teacup.png',
    color: '#DA6B40',
    link: 'https://www.therationalonline.com/reading/category/Irrational+Takes',
    hoverText: 'View Column',
  },
  {
    title: 'Investigative Journalist',
    description: 'I’ve reported on issues ranging from small town politics in Upstate New York, ' +
      'to Russian disinformation campaigns in the former Soviet Bloc, to the unexplained death' +
      ' of a prominent New York judge.',
    imgUrl: './assets/img/spyglass.png',
    color: '#EFA31E',
    /*link: './assets/docs/Eliza-Siegel-Journalism-Clips.pdf',*/
    link: 'https://drive.google.com/file/d/18PohyW6XyHJY0QTSmrDeilzuW8OGYtTx/view?usp=sharing',
    hoverText: 'View Journalism Publications',
  },
  {
    title: 'Storyteller',
    description: 'I’m passionate about telling stories across mediums and genres, making ' +
      'connections between seemingly disparate ideas through documentary film, poetry, podcasts,' +
      ' and photography.',
    imgUrl: './assets/img/map.png',
    color: '#516A44',
    /*link: './assets/docs/Eliza-Siegel-Creative-Clips.pdf',*/
    link: 'https://drive.google.com/file/d/13wDbL8SoMLfAwUK1xpAFLMnCAJBTDxpo/view?usp=sharing',
    hoverText: 'View Creative Publications',
  },
];

/*----About Page-----*/


/*----Photos Page-----*/
export const PHOTOS: PhotoCard[] = [
  {
    // backgroundImg: './assets/img/roadtrip.png',
    backgroundImg: 'https://drive.google.com/uc?export=view&id=16gNswEE0Radb9bDKt1wmbqhCIXQXbNCD',
    hoverColor: '#CCE8F1',
    title: 'Moonscapes',
    description: 'August, 2019. An interplanetary drive across the country.',
    link: '/moonscapes',
  },
  {
    // backgroundImg: './assets/img/etretat.png',
    backgroundImg: 'https://drive.google.com/uc?export=view&id=1HbOJiL7ZRJ6pkqSqIS4KHBy0h8xLcauQ',
    hoverColor: '#F8E4B9',
    title: 'Pale sunset',
    description: 'Paris and Étretat, May-June, 2017. A vivid sunburst appearing and vanishing ' +
        'behind purple clouds.',
    link: '/pale-sunset',
  },
  {
    // backgroundImg: './assets/img/paris.png',
    backgroundImg: 'https://drive.google.com/uc?export=view&id=15OAHarIhts48e-x0pBocXJ4nwLOut9Cz',
    hoverColor: '#DCDCDC',
    title: 'Paris, then to the coast',
    description: 'Paris and Étretat, May-June, 2017. One swallow darting an inkblot across ' +
        'the grey sky.',
    link: '/paris-coast',
  },
  {
    // backgroundImg: './assets/img/elations.png',
    backgroundImg: 'https://drive.google.com/uc?export=view&id=1v6FYtZacdP2NOOE2QZJsQsTR9g0D4s_b',
    hoverColor: '#83AB71',
    title: 'Small elations',
    description: 'Baltimore, Canton, Florence, Coney Island, 2018-2019. The sweetness of an ' +
        'oversaturated summer.',
    link: '/small-elations',
  },
];

/*-----Moonscapes imgs----*/
export const MOONSCAPES: Photo[] = [
  {
    id: 0,
    imgUrl: 'https://drive.google.com/uc?export=view&id=10O_T7vOl_CwkBddS_X7lsDNYZDlrUsZn',
  },
  {
    id: 1,
    imgUrl: 'https://drive.google.com/uc?export=view&id=1z46qC0x5RlWoPkASPEcPde9sbIUJvZkB',
  },
  {
    id: 2,
    imgUrl: 'https://drive.google.com/uc?export=view&id=1hSWQhlic_RJtNYbqkQaZAWxmoFaPLuNJ',
  },
  {
    id: 3,
    imgUrl: 'https://drive.google.com/uc?export=view&id=1EK3AYIMC5PTarRzonmSKNfX7N6-8pm-n',
  },
  {
    id: 4,
    imgUrl: 'https://drive.google.com/uc?export=view&id=11EiZkqBKp4651ehlI9SYLwyPG1ohLW0E',
  },
  {
    id: 5,
    imgUrl: 'https://drive.google.com/uc?export=view&id=1mVvadRPbuKM9069BGdBpJW--oS4wyS23',
  },
  {
    id: 6,
    imgUrl: 'https://drive.google.com/uc?export=view&id=13O57Jwpw3P4k9QMaFprspzU3ZyCd_pE5',
  },
  {
    id: 7,
    imgUrl: 'https://drive.google.com/uc?export=view&id=1pkDD3WgPkneFcJgrJrbpcLcIbx-4L3YN',
  },
  {
    id: 8,
    imgUrl: 'https://drive.google.com/uc?export=view&id=1_RrbTaNnLA1GQJRzX5m5UjVNGGrFjxwQ',
  },
  {
    id: 9,
    imgUrl: 'https://drive.google.com/uc?export=view&id=16gNswEE0Radb9bDKt1wmbqhCIXQXbNCD',
  },
  {
    id: 10,
    imgUrl: 'https://drive.google.com/uc?export=view&id=1KgkAIzlxyIzyoUy_Yzah-8SirrxgdlhT',
  },
  {
    id: 11,
    imgUrl: 'https://drive.google.com/uc?export=view&id=1hY7KVc6BD9ijOQ9c9t_-g-kB7vLBRtmx',
  },
  {
    id: 12,
    imgUrl: 'https://drive.google.com/uc?export=view&id=1sehZPMIcnjNUWYBY-shldqcj9Zehbg-T',
  },
  {
    id: 13,
    imgUrl: 'https://drive.google.com/uc?export=view&id=1Xbfne1RLfz3Kooz5NBjg1g8BMxGcs-6N',
  },
  {
    id: 14,
    imgUrl: 'https://drive.google.com/uc?export=view&id=1-SO2xHLKcAMQdmvlS1s1XOSRDApsZRND',
  },
  {
    id: 15,
    imgUrl: 'https://drive.google.com/uc?export=view&id=17LNbcY-IQVyd-KsHH5E3FqoOVlNbU3Xd',
  },
  {
    id: 16,
    imgUrl: 'https://drive.google.com/uc?export=view&id=1pLhezcx_gGsxcTO0qFvAFaP_ipwyBv_Z',
  },
  {
    id: 17,
    imgUrl: 'https://drive.google.com/uc?export=view&id=1BfAeSs9HsUFhdFggSf_3f0Q_8I5-_FK4',
  },
  {
    id: 18,
    imgUrl: 'https://drive.google.com/uc?export=view&id=1hduF9olfEDhME-GyFINU81xp230rgx50',
  },
];

/*-----Pale Sunset Imgs----*/
export const PALESUNSET: Photo[] = [
  {
    id: 0,
    imgUrl: 'https://drive.google.com/uc?export=view&id=1AB4NGzdIy7dqfZXTsHkWgHrNjyLCeL8w'
  },
  {
    id: 1,
    imgUrl: 'https://drive.google.com/uc?export=view&id=1OT2dSRcgLtgSkjde5yZbzg9vP_QpMuX6'
  },
  {
    id: 2,
    imgUrl: 'https://drive.google.com/uc?export=view&id=10_Q0pBGNMEZhGYV4LSRlLFn_lPIyDE5f'
  },
  {
    id: 3,
    imgUrl: 'https://drive.google.com/uc?export=view&id=1HbOJiL7ZRJ6pkqSqIS4KHBy0h8xLcauQ'
  },
  {
    id: 4,
    imgUrl: 'https://drive.google.com/uc?export=view&id=1bztcJ0fdEzVRg-qpHCw--NCEVMWxQmxp'
  },
  {
    id: 5,
    imgUrl: 'https://drive.google.com/uc?export=view&id=1qvBSKWP80vbUbuUuJNhj3IlzxIoOGNmx'
  },
  {
    id: 6,
    imgUrl: 'https://drive.google.com/uc?export=view&id=1STdNMQCnc4klwaicCsnj3ohYFBaj5kOY'
  },
  {
    id: 7,
    imgUrl: 'https://drive.google.com/uc?export=view&id=1JWxWC20veq5VI4hsWivfkZBxCO9CdNGZ'
  },
  {
    id: 8,
    imgUrl: 'https://drive.google.com/uc?export=view&id=1y0_onU4P9RAVMp6foKYUIaNtw1CXN7qQ'
  },
  {
    id: 9,
    imgUrl: 'https://drive.google.com/uc?export=view&id=1TiYMGnap0iSoZi2x5nhUW6KBV_9pA7vx'
  },
  {
    id: 10,
    imgUrl: 'https://drive.google.com/uc?export=view&id=192EJajnzdU3oUNCdmws6zpGvzjn8PZni'
  },
  {
    id: 11,
    imgUrl: 'https://drive.google.com/uc?export=view&id=1b5JjOUUIRUretUFx0yJ3SehcPC1DQdzX'
  },
];

/*-----Paris, coast imgs----*/
export const PARIS: Photo[] = [
  {
    id: 0,
    imgUrl: 'https://drive.google.com/uc?export=view&id=1CcE_D8rxDIXEm-Jj_mJEdkPTWF9vUrIU',
  },
  {
    id: 1,
    imgUrl: 'https://drive.google.com/uc?export=view&id=1RmLlhqvAiu2At1PQN_vXUU0AW-Z95S2b',
  },
  {
    id: 2,
    imgUrl: 'https://drive.google.com/uc?export=view&id=1_F1kX9lv_cdz-0srlreEZmKtIiJOjGiW',
  },
  {
    id: 3,
    imgUrl: 'https://drive.google.com/uc?export=view&id=1F-zuSNfNYOxLhUeyg8X713IBUimepuI9',
  },
  {
    id: 4,
    imgUrl: 'https://drive.google.com/uc?export=view&id=14DGPCr1j01334Phrme9LVlft4UCsW6-U',
  },
  {
    id: 5,
    imgUrl: 'https://drive.google.com/uc?export=view&id=1NFbcozI75vaqRpzD-pzJUDnvshePt3JK',
  },
  {
    id: 6,
    imgUrl: 'https://drive.google.com/uc?export=view&id=1snpOn3L8G0a0IdhgXYtIkKhlbFboz_RL',
  },
  {
    id: 7,
    imgUrl: 'https://drive.google.com/uc?export=view&id=15OAHarIhts48e-x0pBocXJ4nwLOut9Cz',
  },
  {
    id: 8,
    imgUrl: 'https://drive.google.com/uc?export=view&id=11okJ_0-qp0uYXQXx00_fHr8x35aYayja',
  },
  {
    id: 9,
    imgUrl: 'https://drive.google.com/uc?export=view&id=1a5cT7hnAHYHlqOPLKN-b6ezJ9-EIO-qz',
  },
  {
    id: 10,
    imgUrl: 'https://drive.google.com/uc?export=view&id=126ewwT9c6BvmGQBBgRRZgGikrTBFyYmf',
  },
  {
    id: 11,
    imgUrl: 'https://drive.google.com/uc?export=view&id=1euyAsA3XFigSZmWAiHUQRehkTIfZzkwg',
  },
  {
    id: 12,
    imgUrl: 'https://drive.google.com/uc?export=view&id=19v3VzJWSZREjzwtzzWhAEhGlQ_PV_IXv',
  },
    {
    id: 13,
      imgUrl: 'https://drive.google.com/uc?export=view&id=1pQEAyUkxzLBow_8_ia9K_BtWlj3HgfkD',
  },
  {
    id: 14,
    imgUrl: 'https://drive.google.com/uc?export=view&id=1ZUnQrAHod-TUwpZVRBYPvyuh4G4CqU9w',
  },
  {
    id: 15,
    imgUrl: 'https://drive.google.com/uc?export=view&id=1p0JuWdiLDxIsr2EA_wWRg9393RZbWDJy',
  },
];

/*-----Small Elations Imgs----*/
export const ELATIONS: Photo[] = [
  {
    id: 0,
    imgUrl: 'https://drive.google.com/uc?export=view&id=',
  },
  {
    id: 1,
    imgUrl: 'https://drive.google.com/uc?export=view&id=',
  },
  {
    id: 2,
    imgUrl: 'https://drive.google.com/uc?export=view&id=',
  },
  {
    id: 3,
    imgUrl: 'https://drive.google.com/uc?export=view&id=',
  },
  {
    id: 4,
    imgUrl: 'https://drive.google.com/uc?export=view&id=',
  },
  {
    id: 5,
    imgUrl: 'https://drive.google.com/uc?export=view&id=',
  },
  {
    id: 6,
    imgUrl: 'https://drive.google.com/uc?export=view&id=',
  },
  {
    id: 7,
    imgUrl: 'https://drive.google.com/uc?export=view&id=',
  },
  {
    id: 8,
    imgUrl: 'https://drive.google.com/uc?export=view&id=',
  },
  {
    id: 9,
    imgUrl: 'https://drive.google.com/uc?export=view&id=',
  },
  {
    id: 10,
    imgUrl: 'https://drive.google.com/uc?export=view&id=',
  },
];

/*----Footer-----*/
export const CONNECTS: Connect[] = [
  {
    title: 'email',
    imgUrl: './assets/img/mail.png',
    link: 'mailto:siegel.eliza@gmail.com',
  },
  {
    title: 'twitter',
    imgUrl: './assets/img/twitter.png',
    link: 'https://twitter.com/ElizaISiegel',
  },
  {
    title: 'linkedin',
    imgUrl: './assets/img/link.png',
    link: 'https://www.linkedin.com/in/eliza-siegel-032380147',
  }
];

/*----Dark Colored Footer-----*/
export const DARKCONNECTS: Connect[] = [
  {
    title: 'email',
    imgUrl: './assets/img/mail-grey.png',
    link: 'mailto:siegel.eliza@gmail.com',
  },
  {
    title: 'twitter',
    imgUrl: './assets/img/twitter-grey.png',
    link: 'https://twitter.com/ElizaISiegel',
  },
  {
    title: 'linkedin',
    imgUrl: './assets/img/linkedin-grey.png',
    link: 'https://www.linkedin.com/in/eliza-siegel-032380147',
  }
];
