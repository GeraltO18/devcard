import type { EducationSection } from '@/types/sections/education-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { website } from '../helpers/links';

const educationSectionData = {
  config: {
    title: 'Education',
    slug: 'education',
    icon: 'fa6-solid:graduation-cap',
    visible: true,
  },
  diplomas: [
    {
      title: 'Information Technology',
      institution: 'PSG College Of Techology',
      image: import('@/assets/logos/college_logo.jpg'),
      dates: [new Date('2019.07'), new Date('2023.08')],
      description: "BTech-Information Technology.",
      links: [website({ url: 'https://www.psgtech.edu/' })],
    },
  ],
} as const satisfies ReadonlyDeep<EducationSection>;

export default educationSectionData;
