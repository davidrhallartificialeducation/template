const myPlugin = {
  rules: {
    'scope-enum': (parsed) => {
      const scopesForPackages = [
        'commitlint',
        'eslint',
        'expo',
        'husky',
        'jest',
        'nx',
        'prettier',
        'typescript'
      ];

      const scopesForDocs = [
        'readme'
      ]

      let scopes;

      switch (parsed.type) {
        case 'docs': scopes = scopesForDocs; break;
        case 'package': scopes = scopesForPackages; break;
        default: scopes = [];
      }

      if (!scopes.includes(parsed.scope)) {
        return [false, `scope must be one of ${scopes.join(', ')}`];
      }

      return [true];
    },
    'subject-enum': (parsed) => {
      const subjects = ['add', 'remove', 'update'];
      if (!subjects.includes(parsed.subject)) {
        return [false, `subject must be one of ${subjects.join(', ')}`];
      }
      return [true];
    }
  }
};

module.exports = {
  extends: ['@commitlint/config-conventional'],
  plugins: [myPlugin],
  rules: {
    'body-max-line-length': [2, 'always', 144],
    'header-max-length': [2, 'always', 72],
    'type-enum': [
      2,
      'always',
      [
        'docs', // Documentation only changes
        'feat', // A new feature
        'fix', // A bug fix
        'format', // Changes that do not affect the meaning of the code (white-space, missing semi-colons, etc)
        'package', // Changes that affect the build system or external dependencies
        'perf', // A code change that improves performance
        'refactor', // A code change that neither fixes a bug nor adds a feature
        'revert', // Reverts a previous commit
        'security', // A code change that improves security
        'test' // Adding missing tests or correcting existing tests
      ]
    ],
    'scope-enum': [2, 'always'],
    'subject-enum': [2, 'always'],
    'scope-empty': [2, 'never'],
    'subject-case': [2, 'never', ['start-case', 'pascal-case', 'upper-case']]
  }
};
