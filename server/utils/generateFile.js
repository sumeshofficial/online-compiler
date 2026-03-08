import fs from "fs";
import { v4 as uuid } from "uuid";

const dir = "./temp";

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const lang = {
  javascript: "js",
  python: "py",
  cpp: "cpp",
};

export const generateFile = (language, code) => {
  const id = uuid().split("-")[0];

  const fileName = `${id}.${lang[language]}`;

  const filePath = `${dir}/${fileName}`;

  fs.writeFileSync(filePath, code);

  return fileName;
};
