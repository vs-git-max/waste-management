import React from "react";
import SelectSkip from "./components/SelectSkip";
import SkipProgress from "./components/SkipPRogress";

const App = () => {
  return (
    <div className="w-100% min-h-screen bg-black">
      <SkipProgress />
      <SelectSkip />
    </div>
  );
};

export default App;
