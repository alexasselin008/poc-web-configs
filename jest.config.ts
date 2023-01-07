import type { JestConfigWithTsJest } from "ts-jest";

const config: JestConfigWithTsJest = {
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        tsconfig: {
          esModuleInterop: true,
        },
      },
    ],
  },
  testEnvironment: "node",
};

export default config;