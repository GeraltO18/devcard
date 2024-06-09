import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { facebook, github, instagram, linkedin, twitter, website } from '../helpers/links';
import {
  chakraUi,
  eslint,
  firebase,
  nextJs,
  nx,
  pnpm,
  react,
  reactQuery,
  tailwindCss,
  typescript,
  vue,
  java,
  spring,
} from '../helpers/skills';

const experienceSectionData = {
  config: {
    title: 'Work experience',
    slug: 'experience',
    icon: 'fa6-solid:suitcase',
    visible: true,
  },
  jobs: [
    {
      role: 'Software Engineer - I',
      company: 'Software AG',
      image: import('@/assets/logos/SAG.jpg'),
      dates: [new Date('2023-06'), null],
      description: `
        - Enhanced JavaMailX service to handle and process large files by implementing InputStream-based processing, increasing file size limit from **kilobytes to gigabytes**.
        - Built a global variable retrieval API for cloud systems, enabling secure storage and retrieval of configurations based on user access levels.
        - Trained a **GPT model** on product documentation to provide accurate answers to product-related queries.
        - Collaboratively developed an experimental graph database using **Postgres** for **namespace dependency management** as part of an internal company competition with three teammates, reducing dependency calculation time from 2 seconds to under 500 milliseconds.
        - Refactored few legacy code to modular, easily mantainable code.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [java(),spring()],
      },
      links: [],
    },
    {
      role: 'Software Engineering Intern',
      company: 'Software AG',
      image: import('@/assets/logos/SAG.jpg'),
      dates: [new Date('2022-12'), new Date('2023-05')],
      description: `
        - Built a Server log parser to track, collect and alert users about server health based on collected statistics.
        - Built a thread dump pattern analyser with fast thread which predicts potential resource leaks.
        - Built a automatic thread snapshot collector using JMX to collect thread snapshot on measure health and resource consumption of micro services.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [java(),spring()],
      },
      links: [],
    },
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
