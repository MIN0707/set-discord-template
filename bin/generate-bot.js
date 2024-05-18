#! /usr/bin/env node
const { execSync } = require("child_process");

const projectPath = process.cwd();
const GIT_REPO = "https://github.com/MIN0707/Discord-Bot-Template";

async function main() {
  try {
    console.log("Cloning the repository...");
    execSync(`git clone --depth 1 ${GIT_REPO} ${projectPath}`);
    console.log("Installing dependencies...");
    execSync("npm install");
    console.log("Removing .git folder...");
    execSync("npx rimraf ./.git");
    console.log("Bot has been generated successfully!");
  } catch (error) {
    console.log(error);
  }
}

main();
