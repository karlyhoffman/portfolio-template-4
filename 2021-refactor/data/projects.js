class Project {
  constructor({ id, title, url, description, technologies, features }) {
    this.id = id;
    this.title = title;
    this.url = url;
    this.description = description;
    this.technologies = technologies;
    this.features = features;
  }
}

const PROJECTS = [
  new Project({
    id: 'gan',
    title: 'GameAccount Network',
    url: 'https://gan.com/',
    description:
      'A responsive Next.js company website connected to a Prismic CMS.',
    technologies: ['React', 'SCSS', 'GSAP'],
    features: [
      'Parallax animations',
      'Navigation map',
      'Detail page templates',
      'Lightbox photo gallery',
      'Google Analytics',
      'Responsive design',
    ],
  }),
  new Project({
    id: 'bsa',
    title: 'The Black Sheep Agency',
    url: 'https://theblacksheepagency.com/',
    description:
      'A responsive Next.js company website connected to a Prismic CMS.',
    technologies: ['React', 'SCSS', 'GSAP'],
    features: [
      'Parallax animations',
      'Navigation map',
      'Detail page templates',
      'Lightbox photo gallery',
      'Google Analytics',
      'Responsive design',
    ],
  }),
  new Project({
    id: 'mcd-visid',
    title: "McDonald's Visual Design Hub",
    url: 'https://design.mcdonalds.com/',
    description:
      "A responsive website built using Next.js (a React framework) and a decoupled Strapi CMS to feature the company's style guidelines and design assets.",
    technologies: ['Next.js', 'Strapi', 'GSAP'],
  }),
];

export default PROJECTS;
