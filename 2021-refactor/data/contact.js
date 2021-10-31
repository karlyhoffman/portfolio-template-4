class ContactLink {
  constructor({ label, url }) {
    this.label = label;
    this.url = url;
  }
}

const CONTACT_LINKS = [
  new ContactLink({
    label: 'Email',
    url: 'mailto:karlyhoffman@gmail.com',
  }),
  new ContactLink({
    label: 'Github',
    url: 'https://github.com/karlyhoffman',
  }),
  new ContactLink({
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/karlyhoffman/',
  }),
  new ContactLink({
    label: 'CodePen',
    url: 'https://codepen.io/karlyhoffman/',
  }),
  new ContactLink({
    label: 'Resume',
    url: 'https://karlyhoffman.github.io/',
  }),
];

export default CONTACT_LINKS;
