module.exports = {
    transform: {
      '^.+\\.svelte$': 'svelte-jester',
      '^.+\\.js$': './config/babel.config.js',
    },
    moduleFileExtensions: ['js', 'svelte'],
    testEnvironment: 'jsdom',
    rootDir: '../'
}
