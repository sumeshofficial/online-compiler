import { exec } from "child_process";

export const runJs = (fileName) => {
  const command = `
  docker run --rm \
  --memory=128m \
  --cpus=0.5 \
  --network none \
  -v ${process.cwd()}/temp:/app \
  node:18 \
  bash -c "timeout 5s node /app/${fileName}"
  `;

  return new Promise((resolve) => {
    exec(command, (error, stdout, stderr) => {
      if (error && error.code === 124) {
        return resolve("Execution timed out (5 seconds)");
      }

      if (stderr) {
        return resolve(stderr.trim());
      }

      if (error) return resolve(error.message);

      resolve(stdout.trim());
    });
  });
};
