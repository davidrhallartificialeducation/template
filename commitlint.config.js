module.exports = {
  extends: ['@commitlint/config-conventional'],
  plugins: [],
  rules: {
    'body-max-line-length': [2, 'always', 144],
    'header-max-length': [2, 'always', 72],
    'scope-empty': [2, 'never'],
    'subject-case': [2, 'never', ['start-case', 'pascal-case', 'upper-case']],
    'type-enum': [2, 'always', ['cli', 'config']],
  }
};
