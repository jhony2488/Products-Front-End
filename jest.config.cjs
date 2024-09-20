module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.jsx?$': 'babel-jest', // Transforma arquivos .js e .jsx
    '^.+\\.tsx?$': 'ts-jest', // Transforma arquivos .ts e .tsx
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
}
