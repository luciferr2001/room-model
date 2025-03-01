import { Suspense } from "react";
import { EarthCanvas } from "./components/model";

function App() {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <Suspense
        fallback={<div className="text-2xl text-center w-100">Please Wait loading</div>}
      >
        <EarthCanvas />
      </Suspense>
    </div>
  );
}

export default App;
