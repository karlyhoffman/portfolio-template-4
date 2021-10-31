class SkillsCategory {
  constructor({ type, skills }) {
    this.type = type;
    this.skills = skills;
  }
}

const SKILLS = [
  new SkillsCategory({
    type: 'CSS',
    skills: [
      'UI Development',
      'SCSS',
      'SVG & CSS Animations',
      'Responsive Styling',
    ],
  }),
  new SkillsCategory({
    type: 'JavaScript',
    skills: ['ES6', 'React', 'Next.js', 'GSAP'],
  }),
  new SkillsCategory({
    type: 'Tools',
    skills: ['Webpack', 'Adobe Creative Suite', 'Visual Studio Code', 'JIRA'],
  }),
];

export default SKILLS;
