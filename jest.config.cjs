module.exports = {
  rootDir: ".",
  testRegex: "\\.e2e-test\\.js$",
  setupFilesAfterEnv: ["./__test__/lib/jest.setup.js"],
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
}
