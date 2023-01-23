export default {
  verbose: true,
  workerThreads: false,
  environmentVariables: {
    TEST: 'test',
    APP_ENV: 'test',
  },
  files: [
    'test/**/*.mjs',
    'test/**/*.ts',
    '**/*.test.mjs',
    '**/*.test.ts',

    '!**/fixtures/**',
    '!**/helpers/**',
    '!**/recipes/**',
    '!**/types.ts',
  ],
}
