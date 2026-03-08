import { useCompilerStore } from "../../store/compilerStore";

const OutputHeader = () => {
  const { setOutput } = useCompilerStore();

  return (
    <div className="hidden md:flex bg-[#121212] border-t-2 border-t-gray-800 justify-between items-center">
      <div className="px-5 py-3 bg-gray-900 border-t-2 border-t-blue-400 flex items-center gap-3 justify-center">
        <span className="text-white select-none">Output</span>
      </div>
      <div>
        <button
          onClick={() => setOutput("")}
          className="px-5 py-2 bg-gray-900 border border-gray-500 flex items-center gap-3 justify-center"
        >
          <span className="text-white select-none">Clear</span>
        </button>
      </div>
    </div>
  );
};

export default OutputHeader;
