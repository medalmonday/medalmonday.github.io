import pJson from '../package.json';

export const BASE_URL = 'https://www.medalmonday.gmbh';

export const BUILD_VERSION = process.env.BUILD_VERSION || pJson.version;
export const BUILD_HASH = process.env.BUILD_HASH || '';
