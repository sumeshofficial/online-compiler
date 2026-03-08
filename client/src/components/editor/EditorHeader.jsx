import { useCompilerStore } from "../../store/compilerStore";
import { X } from "lucide-react";
import { FaPython } from "react-icons/fa";
import { SiJavascript, SiCplusplus } from "react-icons/si";

const extensions = {
  javascript: ".js",
  python: ".py",
  cpp: ".cpp",
};

const icons = {
  javascript: SiJavascript,
  python: FaPython,
  cpp: SiCplusplus,
};

const colors = {
  javascript: "#F7DF1E",
  python: "#3776AB",
  cpp: "#00599C",
};

const EditorHeader = () => {
  const lang = useCompilerStore((store) => store.language) || "javascript";
  const Icon = icons[lang];
  const color = colors[lang];
  return (
    <div className="hidden md:flex bg-[#121212] border-t-2 border-t-gray-700">
      <div className="px-3 py-3 bg-gray-900 border-t-2 border-t-blue-400 flex items-center gap-3 justify-center">
        <Icon color={color} />
        <span className="text-white select-none">main{extensions[lang]}</span>
        <X size={16} className="text-white cursor-pointer hover:text-white" />
      </div>
    </div>
  );
};

export default EditorHeader;