import { exec } from "child_process";

export const runCpp = (fileName) => {
  const command =
    `docker run --rm --memory=128m --cpus=0.5 --network none ` +
    `-v ${process.cwd()}/temp:/app gcc:latest ` +
    `bash -c "timeout 5s g++ /app/${fileName} -o /app/${fileName}.out && timeout 5s /app/${fileName}.out || echo __TIMEOUT__; rm -f /app/${fileName}.out"`;

  return new Promise((resolve) => {
    exec(command, (error, stdout, stderr) => {
      const out = (stdout || "").trim();
      const err = (stderr || "").trim();

      if (out === "__TIMEOUT__") {
        return resolve("Execution timed out (5 seconds)");
      }

      if (err) {
        return resolve(err);
      }

      resolve(out);
    });
  });
};