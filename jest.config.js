module.exports = {
  moduleFileExtensions: [
    'js',
    'json',
    'ts'
  ],
  rootDir: 'src',
  testRegex: '.spec.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest'
  },
  preset: 'ts-jest',
  coverageDirectory: 'test/coverage',
  testEnvironment: 'node'
}
