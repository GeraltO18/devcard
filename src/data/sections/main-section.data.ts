import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { facebook, github, linkedin, twitter } from '../helpers/links';

const mainSectionData = {
  config: {
    icon: 'fa6-solid:user',
    title: 'Profile',
    slug: 'profile',
    visible: true,
  },
  image: import('@/assets/file.jpg'),
  fullName: 'Ranjith Kumar',
  role: 'Software Engineer',
  details: [
    { label: 'Phone', value: '8903768841', url: 'tel:890 376 8841' },
    { label: 'Email', value: 'ranjith.2k01@gmail.com', url: 'mailto:ranjith.2k01@gmail.com' },
    { label: 'From', value: 'Bangalore, India' },
    { label: 'Blog', value: 'rk-nano-blog', url:'https://rk-nano-blog.vercel.app'}
  ],
  pdfDetails: [
    { label: 'Phone', value: '890 376 8841' },
    { label: 'Email', value: 'ranjith.2k01@gmail.com' },
    { label: 'LinkedIn', value: '/in/ranjith-kumar-t', url: 'https://linkedin.com' },
    { label: 'GitHub', value: '/GeraltO18', url: 'https://github.com' },
    { label: 'Website', value: 'rk-nano-blog.vercel.com', url: '/', fullRow: true },
  ],
  description:
    'Hi, I am Ranjith. I am a passionate software developer, I like to build things that helps me everyday. I am currenly working as software engineer in Webmethods Integration Server product. My solid tech stacks is Java and learning few other langs like Go, Astro and Rust. Thanks for visiting, ',
  tags: [],
  action: {
    label: 'Download CV',
    url: '/cv.pdf',
    downloadedFileName: 'CV-Ranjith.pdf',
  },
  links: [github({ url: 'https://github.com/GeraltO18' }), linkedin({ url: 'https://linkedin.com/in/ranjith-kumar-t' })],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;
