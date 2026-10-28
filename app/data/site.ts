export const contact = {
  email: 'gradzkamartyna@gmail.com',
  github: 'https://github.com/mgradzka',
  linkedin: 'https://www.linkedin.com/in/martyna-gradzka/',
}

export const navigation = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/case-studies', label: 'Case studies' },
  { to: '/contact', label: 'Contact' },
]

export const competencies = [
  {
    color: 'pink' as const,
    icon: 'ph:code',
    title: 'Development',
    description: 'Building websites and applications',
    points: ['Modern frontend technologies', 'Debugging and fixing errors', 'Clean, maintainable code'],
  },
  {
    color: 'blue' as const,
    icon: 'ph:lightbulb',
    title: 'Research & Design',
    description: 'Getting to know your users',
    points: ['Research & data gathering', 'Information architecture', 'High-fidelity mockups'],
  },
]

export const tools = [
  { name: 'React', icon: 'simple-icons:react' },
  { name: 'Next.js', icon: 'simple-icons:nextdotjs' },
  { name: 'Vue.js', icon: 'simple-icons:vuedotjs' },
  { name: 'JavaScript', icon: 'simple-icons:javascript' },
  { name: 'TypeScript', icon: 'simple-icons:typescript' },
  { name: 'Sass', icon: 'simple-icons:sass' },
  { name: 'Bootstrap', icon: 'simple-icons:bootstrap' },
  { name: 'Node.js', icon: 'simple-icons:nodedotjs' },
  { name: 'Git', icon: 'simple-icons:git' },
  { name: 'GitHub', icon: 'simple-icons:github' },
  { name: 'GitLab', icon: 'simple-icons:gitlab' },
  { name: 'Figma', icon: 'simple-icons:figma' },
]
