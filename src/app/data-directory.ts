import {WordsImg, WorkCard, Connect, PhotoCard, Photo } from './data';

/*----Home Page-----*/
export const HOMEWORDS: WordsImg[] = [
  {
    title: 'Eliza Siegel',
    subtitle: 'is a journalist and storyteller based in New Jersey.',
    imgUrl: './assets/img/eliza.png',
  }
];

/*----Work Page-----*/
export const WORKCARDS: WorkCard[] = [
  {
    title: 'Politics and Culture Satirist',
    description: 'Check out my monthly column, “Irrational Takes,” where I satirize politics and culture' +
      'for the feminist news and storytelling site The Rational.',
    imgUrl: './assets/img/teacup.png',
    color: '#DA6B40',
    link: 'https://www.therationalonline.com/reading/category/IRRATIONAL+TAKES',
    hoverText: 'View Column',
  },
  {
    title: 'Investigative Journalist',
    description: 'I’ve reported on issues ranging from small town politics in Upstate New York, ' +
      'to Russian disinformation campaigns in the former Soviet Bloc, to the unexplained death' +
      ' of a prominent New York judge.',
    imgUrl: './assets/img/spyglass.png',
    color: '#EFA31E',
    link: './assets/docs/Eliza-Siegel-Journalism-Clips.pdf',
    hoverText: 'View Journalism Publications',
  },
  {
    title: 'Storyteller',
    description: 'I’m passionate about telling stories across mediums and genres, making ' +
      'connections between seemingly disparate ideas through documentary film, poetry, podcasts,' +
      ' and photography.',
    imgUrl: './assets/img/map.png',
    color: '#516A44',
    link: './assets/docs/Eliza-Siegel-Creative-Clips.pdf',
    hoverText: 'View Creative Publications',
  },
];

/*----About Page-----*/


/*----Photos Page-----*/
export const PHOTOS: PhotoCard[] = [
  {
    backgroundImg: './assets/img/roadtrip.png',
    hoverColor: '#CCE8F1',
    title: 'Moonscapes',
    description: 'August, 2019. An interplanetary drive across the country.',
    link: '/moonscapes',
  },
  {
    backgroundImg: './assets/img/etretat.png',
    hoverColor: '#F8E4B9',
    title: 'Pale sunset',
    description: 'Paris and Étretat, May-June, 2017. A vivid sunburst appearing and vanishing ' +
        'behind purple clouds.',
    link: '/pale-sunset',
  },
  {
    backgroundImg: './assets/img/paris.png',
    hoverColor: '#DCDCDC',
    title: 'Paris, then to the coast',
    description: 'Paris and Étretat, May-June, 2017. One swallow darting an inkblot across ' +
        'the grey sky.',
    link: '/paris-coast',
  },
  {
    backgroundImg: './assets/img/elations.png',
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
    imgUrl: './assets/img/moonscapes/moonscapes-1.png',
  },
  {
    id: 1,
    imgUrl: './assets/img/moonscapes/moonscapes-2.png',
  },
  {
    id: 2,
    imgUrl: './assets/img/moonscapes/moonscapes-3.png',
  },
  {
    id: 3,
    imgUrl: './assets/img/moonscapes/moonscapes-4.png',
  },
  {
    id: 4,
    imgUrl: './assets/img/moonscapes/moonscapes-5.png',
  },
  {
    id: 5,
    imgUrl: './assets/img/moonscapes/moonscapes-6.png',
  },
  {
    id: 6,
    imgUrl: './assets/img/moonscapes/moonscapes-7.png',
  },
  {
    id: 7,
    imgUrl: './assets/img/moonscapes/moonscapes-8.png',
  },
  {
    id: 8,
    imgUrl: './assets/img/moonscapes/moonscapes-9.png',
  },
  {
    id: 9,
    imgUrl: './assets/img/moonscapes/moonscapes-10.png',
  },
  {
    id: 10,
    imgUrl: './assets/img/moonscapes/moonscapes-11.png',
  },
  {
    id: 11,
    imgUrl: './assets/img/moonscapes/moonscapes-12.png',
  },
  {
    id: 12,
    imgUrl: './assets/img/moonscapes/moonscapes-13.png',
  },
  {
    id: 13,
    imgUrl: './assets/img/moonscapes/moonscapes-14.png',
  },
  {
    id: 14,
    imgUrl: './assets/img/moonscapes/moonscapes-15.png',
  },
  {
    id: 15,
    imgUrl: './assets/img/moonscapes/moonscapes-16.png',
  },
  {
    id: 16,
    imgUrl: './assets/img/moonscapes/moonscapes-19.png',
  },
  {
    id: 17,
    imgUrl: './assets/img/moonscapes/moonscapes-18.png',
  },
  {
    id: 18,
    imgUrl: './assets/img/moonscapes/moonscapes-17.png',
  },
];

/*-----Pale Sunset Imgs----*/
export const PALESUNSET: Photo[] = [
  {
    id: 0,
    imgUrl: './assets/img/pale-sunset/pale-sunset-1.png'
  },
  {
    id: 1,
    imgUrl: './assets/img/pale-sunset/pale-sunset-2.png'
  },
  {
    id: 2,
    imgUrl: './assets/img/pale-sunset/pale-sunset-3.png'
  },
  {
    id: 3,
    imgUrl: './assets/img/pale-sunset/pale-sunset-4.png'
  },
  {
    id: 4,
    imgUrl: './assets/img/pale-sunset/pale-sunset-5.png'
  },
  {
    id: 5,
    imgUrl: './assets/img/pale-sunset/pale-sunset-6.png'
  },
  {
    id: 6,
    imgUrl: './assets/img/pale-sunset/pale-sunset-7.png'
  },
  {
    id: 7,
    imgUrl: './assets/img/pale-sunset/pale-sunset-8.png'
  },
  {
    id: 8,
    imgUrl: './assets/img/pale-sunset/pale-sunset-9.png'
  },
  {
    id: 9,
    imgUrl: './assets/img/pale-sunset/pale-sunset-10.png'
  },
  {
    id: 10,
    imgUrl: './assets/img/pale-sunset/pale-sunset-11.png'
  },
  {
    id: 11,
    imgUrl: './assets/img/pale-sunset/pale-sunset-12.png'
  },
];

/*-----Paris, coast imgs----*/
export const PARIS: Photo[] = [
  {
    id: 0,
    imgUrl: './assets/img/paris-coast/paris-1.png',
  },
  {
    id: 1,
    imgUrl: './assets/img/paris-coast/paris-2.png',
  },
  {
    id: 2,
    imgUrl: './assets/img/paris-coast/paris-3.png',
  },
  {
    id: 3,
    imgUrl: './assets/img/paris-coast/paris-4.png',
  },
  {
    id: 4,
    imgUrl: './assets/img/paris-coast/paris-5.png',
  },
  {
    id: 5,
    imgUrl: './assets/img/paris-coast/paris-6.png',
  },
  {
    id: 6,
    imgUrl: './assets/img/paris-coast/paris-7.png',
  },
  {
    id: 7,
    imgUrl: './assets/img/paris-coast/paris-8.png',
  },
  {
    id: 8,
    imgUrl: './assets/img/paris-coast/paris-9.png',
  },
  {
    id: 9,
    imgUrl: './assets/img/paris-coast/paris-10.png',
  },
  {
    id: 10,
    imgUrl: './assets/img/paris-coast/paris-11.png',
  },
  {
    id: 11,
    imgUrl: './assets/img/paris-coast/paris-12.png',
  },
  {
    id: 12,
    imgUrl: './assets/img/paris-coast/paris-13.png',
  },
  {
    id: 13,
    imgUrl: './assets/img/paris-coast/paris-14.png',
  },
  {
    id: 14,
    imgUrl: './assets/img/paris-coast/paris-15.png',
  },
  {
    id: 15,
    imgUrl: './assets/img/paris-coast/paris-16.png',
  },
];

/*-----Small Elations Imgs----*/
export const ELATIONS: Photo[] = [
  {
    id: 0,
    imgUrl: './assets/img/small-elations/elations-1.png'
  },
  {
    id: 1,
    imgUrl: './assets/img/small-elations/elations-2.png'
  },
  {
    id: 2,
    imgUrl: './assets/img/small-elations/elations-3.png'
  },
  {
    id: 3,
    imgUrl: './assets/img/small-elations/elations-4.png'
  },
  {
    id: 4,
    imgUrl: './assets/img/small-elations/elations-5.png'
  },
  {
    id: 5,
    imgUrl: './assets/img/small-elations/elations-6.png'
  },
  {
    id: 6,
    imgUrl: './assets/img/small-elations/elations-7.png'
  },
  {
    id: 8,
    imgUrl: './assets/img/small-elations/elations-9.png'
  },
  {
    id: 9,
    imgUrl: './assets/img/small-elations/elations-10.png'
  },
  {
    id: 10,
    imgUrl: './assets/img/small-elations/elations-11.png'
  },
  {
    id: 7,
    imgUrl: './assets/img/small-elations/elations-8.png'
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
