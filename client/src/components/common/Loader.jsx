import { LoaderCircle } from "lucide-react";

const Loader = ({ size }) => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <LoaderCircle className="animate-spin text-white" size={size} />
    </div>
  );
};

export default Loader;
