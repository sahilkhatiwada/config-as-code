module.exports = {
  roots: ["<rootDir>"],
  testEnvironment: "node",
  transform: {
    "^.+\\.ts$": "ts-jest"
  },
  moduleFileExtensions: ["ts", "js", "json"],
  testPathIgnorePatterns: [
    "<rootDir>/../", // ignore parent directories
    "<rootDir>/../../", // ignore grandparent directories
    "<rootDir>/\.cursor/",
    "<rootDir>/\.trae/",
    "<rootDir>/Downloads/",
    "<rootDir>/node_modules/"
  ],
}; 