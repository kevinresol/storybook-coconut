// tslint:disable-next-line: no-var-requires
const packageJson = require('../../package.json');

export default {
  packageJson,
  framework: 'coconut',
  coconutPresets: [require.resolve('./framework-preset-coconut.js')],
};
