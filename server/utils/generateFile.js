import fs from "fs";
import path from "path";
import { v4 as uuid } from "uuid";

const dir = path.join(process.cwd(), "temp");

const lang = {
  javascript: "js",
  python: "py",
  cpp: "cpp",
};

export const generateFile = (language, code) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const id = uuid().split("-")[0];

  const fileName = `${id}.${lang[language]}`;

  const filePath = path.join(dir, fileName);

  fs.writeFileSync(filePath, code);

  return fileName;
};
