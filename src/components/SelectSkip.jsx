import React, { useState } from "react";
import SkipCard from "./SkipCard";
import skipData from "../helpers";
import DrawerComponent from "./DrawerComponent";

const SelectSkip = () => {
  const [selectedSkip, setSelectedSkip] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  console.log("Skip data", skipData);
  return (
    <section className="max-w-7xl mx-auto min-h-screen ">
      <div className="flex items-center justify-between flex-col">
        <h2 className="text-text-primary font-medium text-2xl lg:text-5xl md:text-3xl  tracking-tight">
          Choose Your Skip Size
        </h2>
        <p className=" font-light lg:text-md text-text-primary/40 text-sm">
          Select the skip size that best suits your needs
        </p>
        <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-3 mt-8">
          {skipData.map((skipItem, skipIndex) => (
            <SkipCard
              skipItem={skipItem}
              key={skipIndex}
              index={skipIndex}
              selectedSkip={selectedSkip}
              setDrawerOpen={setDrawerOpen}
              setSelectedSkip={setSelectedSkip}
            />
          ))}
        </div>
        <DrawerComponent
          data={selectedSkip && selectedSkip.length !== 0 ? selectedSkip : null}
          isOpen={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        />
      </div>
    </section>
  );
};

export default SelectSkip;
