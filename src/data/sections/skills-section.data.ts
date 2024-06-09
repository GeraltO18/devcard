import type { SkillsSection } from '@/types/sections/skills-section.types';
import type { ReadonlyDeep } from 'type-fest';
import {
  apolloGraphql,
  astro,
  chakraUi,
  cypress,
  eslint,
  firebase,
  mongoDb,
  nestJs,
  pnpm,
  postgreSql,
  prettier,
  react,
  sass,
  supabase,
  tailwindCss,
  typescript,
  java,
  spring,
  go,
  rust
} from '../helpers/skills';

const skillsSectionData = {
  config: {
    title: 'Skills',
    slug: 'skills',
    icon: 'fa6-solid:bars-progress',
    visible: true,
  },
  skillSets: [
    {
      title: 'Working with these',
      skills: [
        java(),
        spring(),
        go(),
        postgreSql()
      ],
    },
    {
      title: 'Learning',
      skills: [rust()],
    }
  ],
} as const satisfies ReadonlyDeep<SkillsSection>;

export default skillsSectionData;
