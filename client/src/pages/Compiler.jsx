import ResponsiveAppBar from "../components/layout/Navbar";
import CodeEditor from "../components/editor/CodeEditor";
import EditorHeader from "../components/editor/EditorHeader";
import OutputBox from "../components/output/OutputBox";
import OutputHeader from "../components/output/OutputHeader";
import { useCompilerStore } from "../store/compilerStore";

const Compiler = () => {
  const isMain = useCompilerStore((store) => store.isMain);
  return (
    <div>
      <ResponsiveAppBar />
      <div className="h-[calc(100vh-120px)]">
        {/* Desktop layout */}
        <div className="hidden md:flex h-full">
          <div className="flex-6 h-full">
            <EditorHeader />
            <CodeEditor />
          </div>
          <div className="flex-4 flex-col flex">
            <OutputHeader />
            <OutputBox />
          </div>
        </div>

        {/* Mobile layout */}
        <div className="md:hidden h-full">
          {isMain === 0 ? (
            <div className="h-full">
              <EditorHeader />
              <CodeEditor />
            </div>
          ) : (
            <div className="h-full flex flex-col">
              <OutputHeader />
              <OutputBox />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Compiler;
