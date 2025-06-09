import React from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";

const DrawerComponent = ({ onClose, isOpen, data, setSelectedSkip }) => {
  const handleClose = () => {
    onClose(), setSelectedSkip(null);
  };
  const handleContinue = () => {};

  return (
    <Drawer
      variant="outline"
      open={isOpen}
      onOpenChange={onClose}
      className="bg-accent-foreground "
    >
      <DrawerContent className="flex items-center justify-between p-12 w-auto h-auto">
        <DrawerHeader className="text-center">
          <DrawerTitle className="text-2xl text-text-primary uppercase underline">
            Selected Skip
          </DrawerTitle>
        </DrawerHeader>
        <p className="text-center text-sm font-medium text-text-primary/50">
          You have selected a {data?.size} Yard Skip
        </p>
        <p className="text-xl font-medium text-text-primary">
          {" "}
          Costing ${data?.price_before_vat}
        </p>

        <div className="text-center space-x-5 my-8">
          <button
            onClick={handleClose}
            className="px-4 py-2 text-red-900 text-md font-medium border-2   hover:text-red-700 border-red-700 hover:bg-transparent  rounded-2xl"
          >
            Close
          </button>
          <button
            onClick={handleContinue}
            className="px-4 py-2 text-text-primary text-md font-medium border-2 border-text-primary bg-transparent hover:text-background hover:border-background hover:bg-text-primary rounded-2xl"
          >
            Continue
          </button>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerComponent;
