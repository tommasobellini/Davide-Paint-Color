const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'it-IT',
    locales: ['en-US', 'it-IT'],
    localeDetection: false,
    localePath: path.resolve('./public/locales'),
  },
};
