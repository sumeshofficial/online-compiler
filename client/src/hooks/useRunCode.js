import { useMutation } from "@tanstack/react-query";
import { executeCode } from "../services/execute";
import { useCompilerStore } from "../store/compilerStore";

export const useRunCode = () => {
  const { setOutput, setIsMain, setError } = useCompilerStore();
  const mutation = useMutation({
    mutationFn: async ({ language, code }) => {
      const res = await executeCode(language, code);
      return res;
    },
  });

  const runCode = async ({ language, code }) => {
    setIsMain(1);
    try {
      const res = await mutation.mutateAsync({ language, code });
      setOutput(res);
      setError(null);
    } catch (err) {
      setError(err?.response.data.error.message || "Execution failed");
    }
  };

  return {
    runCode,
    data: mutation.data,
    isLoading: mutation.isPending,
  };
};
