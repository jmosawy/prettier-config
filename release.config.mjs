/**
 * @type {import("semantic-release").GlobalConfig}
 */
export default {
  branches: ["main"],
  plugins: [
    ["@semantic-release/commit-analyzer", { preset: "conventionalcommits" }],
    [
      "@semantic-release/release-notes-generator",
      { preset: "conventionalcommits" },
    ],
    "@semantic-release/npm",
    "@semantic-release/git",
    "@semantic-release/github",
  ],
};
