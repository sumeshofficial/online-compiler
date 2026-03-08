import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import Compiler from "./pages/Compiler";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="bg-[#1E1E1E] min-h-screen">
      <QueryClientProvider client={queryClient}>
        <Compiler />
      </QueryClientProvider>
    </div>
  );
}

export default App;
