import {WordsImg, WorkCard} from "./data";

export const HOMEWORDS: WordsImg[] = [
  {
    title: 'Eliza Siegel',
    subtitle: 'is a journalist and storyteller based in New Jersey.',
    imgUrl: './assets/img/eliza.png',
  }
]

export const WORKCARDS: WorkCard[] = [
  {
    title: 'Politics and Culture Satirist',
    description: "Check out my weekly column, “Irrational Takes,” where I satirize politics and culture " +
      "for the feminist news and storytelling site The Rational.",
    imgUrl: "./assets/img/teacup.png",
    color: "#DA6B40",
    link: "https://www.therationalonline.com/reading/category/IRRATIONAL+TAKES",
    hoverText: "View Column",
  },
  {
    title: "Investigative Journalist",
    description: "I’ve reported on issues ranging from small town politics in Upstate New York, " +
      "to Russian disinformation campaigns in the former Soviet Bloc, to the unexplained death" +
      " of a prominent New York judge. ",
    imgUrl: "./assets/img/spyglass.png",
    color: "#EFA31E",
    link: "",
    hoverText: "Learn more",
  },
  {
    title: "Storyteller",
    description: "I’m passionate about telling stories across mediums and genres, making " +
      "connections between seemingly disparate ideas through documentary film, poetry, podcasts," +
      " and photography.",
    imgUrl: "./assets/img/map.png",
    color: "#516A44",
    link: "",
    hoverText: "Learn more",
  },
]

export const CONTACT: WordsImg[]= [
  {
    title: 'Irrational Takes',
    subtitle: 'https://www.therationalonline.com/reading/category/IRRATIONAL+TAKES',
    imgUrl: "",
  }

]
