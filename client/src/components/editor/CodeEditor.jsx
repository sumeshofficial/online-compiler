import Editor from '@monaco-editor/react';
import { useCompilerStore } from "../../store/compilerStore";

function CodeEditor() {
  const code = useCompilerStore((state) => state.code);
  const setCode = useCompilerStore((state) => state.setCode);
  const language = useCompilerStore((state) => state.language);

  return (
    <Editor
      height="100%"
      theme="vs-dark"
      language={language}
      value={code}
      onChange={(value) => setCode(value)}
      options={{
        fontSize: 14,
        minimap: { enabled: false },
        wordWrap: "on",
      }}
    />
  );
}

export default CodeEditor;