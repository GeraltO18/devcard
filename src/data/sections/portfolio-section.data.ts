import type { PortfolioSection } from '@/types/sections/portfolio-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { demo, github, mockups, website } from '../helpers/links';
import {
  chakraUi,
  eslint,
  firebase,
  jest,
  nestJs,
  nextJs,
  nx,
  pnpm,
  postgreSql,
  prettier,
  react,
  sass,
  tailwindCss,
  typescript,
  go,
} from '../helpers/skills';

const portfolioSectionData = {
  config: {
    title: 'Projects',
    slug: 'projects',
    icon: 'fa6-solid:rocket',
    visible: true,
    screenshots: {
      title: 'Screenshots',
      icon: 'fa6-solid:images',
    },
  },
  projects: [
    {
      name: 'Port CLI',
      image: import('@/assets/portfolio/CLI.jpg'),
      dates: [new Date('2024-02',)],
      details: [
        { label: 'Team size', value: '1 person' },
        { label: 'My role', value: ['Developer'] },
        { label: 'Company', value: 'Personal project' },
        { label: 'Category', value: ['CLI'] },
      ],
      pdfDetails: [
        { label: 'Demo', value: 'https://golden-bulls-d73jd7.netlify.app', url: '#' },
      ],
      screenshots: [
      ],
      description:
        'My work involves spinning up lot of servers to test, debug changes and compare them with different version. I found myself repeatedly switching between java version, port number, and access token. So being inspired by sdkman, I built a CLI tool that will take up assigned configuration of each server upon entring the dir of those. I dont have to worry if the port is occupied by some service or if the java version is correct, Port CLI will take complete care of those upon entering the directory.If somethings is wrong like ports are occupied, it lists details about the process that are occupying the port and allows user to stop the process.',
      tagsList: {
        title: 'Technologies',
        tags: [go()],
      },
      links: [],
    },
  ],
} as const satisfies ReadonlyDeep<PortfolioSection>;

export default portfolioSectionData;
