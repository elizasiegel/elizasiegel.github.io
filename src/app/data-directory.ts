import {WordsImg, WorkCard, Connect, PhotoCard } from './data';

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
    link: '',
    hoverText: 'Learn more',
  },
  {
    title: 'Storyteller',
    description: 'I’m passionate about telling stories across mediums and genres, making ' +
      'connections between seemingly disparate ideas through documentary film, poetry, podcasts,' +
      ' and photography.',
    imgUrl: './assets/img/map.png',
    color: '#516A44',
    link: '',
    hoverText: 'Learn more',
  },
];

/*----About Page-----*/


/*----Photos Page-----*/
export const PHOTOS: PhotoCard[] = [
  {
    backgroundImg: './assets/img/roadtrip.png',
    hoverColor: '#CCE8F1',
    title: 'Monoscapes',
    description: 'August, 2019. An interplanetary drive across the country.',
    link: '/monoscapes',
  },
  {
    backgroundImg: './assets/img/etretat.png',
    hoverColor: '#F2D298',
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
    backgroundImg: './assets/img/moms.png',
    hoverColor: '#6B9359',
    title: 'Small elations',
    description: 'Baltimore, Canton, Florence, Coney Island, 2018-2019. The sweetness of an ' +
        'oversaturated summer.',
    link: '/small-elations',
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
