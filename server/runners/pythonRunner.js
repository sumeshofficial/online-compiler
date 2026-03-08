import { exec } from "child_process";

export const runPython = (fileName) => {
  const command = `
  docker run --rm \
  --memory=128m \
  --cpus=0.5 \
  --network none \
  -v ${process.cwd()}/temp:/app \
  python:3.10 \
  bash -c "timeout 5s python /app/${fileName}"
  `;

  return new Promise((resolve) => {
    exec(command, (error, stdout, stderr) => {
      if (error && error.code === 124) {
        return resolve("Execution timed out (5 seconds)");
      }

      if (error && error.code === 137) {
        return resolve("Memory limit exceeded (128 MB)");
      }

      if (stderr) return resolve(stderr.trim());

      if (error) return resolve(error.message);

      resolve(stdout.trim());
    });
  });
};
