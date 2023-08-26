const { execSync } = require("child_process");
const chalk = require("chalk");

try {
  // Run ESLint using execSync
  execSync("eslint .", { stdio: "inherit" });

  // Display success message in green color
  console.log(chalk.green("Linting completed successfully"));
} catch (error) {
  // Handle error if ESLint fails
  console.error(chalk.red("Linting failed"));
  process.exit(1);
}
