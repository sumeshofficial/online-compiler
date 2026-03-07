import fs from "fs";

export const deleteFile = (fileName) => {
  const filePath = `./temp/${fileName}`;

  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }
};
