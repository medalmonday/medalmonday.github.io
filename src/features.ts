import { LanguageCode } from 'src/router/LocaleRouter';

/**
 * Hosts feature flags for the frontend.
 */
const features = {
  languages: ['de', 'en'] as LanguageCode[],
  pages: {},
  testimonials: false,
};

export default features;
