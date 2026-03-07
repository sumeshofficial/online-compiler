import { runCpp } from "./cppRunner.js";
import { runPython } from "./pythonRunner.js";
import { runJs } from "./jsRunner.js";

export const runners = {
  cpp: runCpp,
  python: runPython,
  javascript: runJs,
};
