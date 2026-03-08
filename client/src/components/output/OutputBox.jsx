import { useCompilerStore } from "../../store/compilerStore";

const OutputBox = () => {
    const { output, error } = useCompilerStore();

    return (
        <div className="h-full bg-[#1E1E1E] text-white px-2 py-1 overflow-auto">
            <pre className={`whitespace-pre-wrap ${error ? "text-red-400" : ""}`}>
                {error ? error : output}
            </pre>
        </div>
    );
}

export default OutputBox;
