import image from "../assets/oPorto_.jpg";

const SkipCard = ({
  skipItem,
  selectedSkip,
  setDrawerOpen,
  setSelectedSkip,
}) => {
  const handleSetSelected = () => {
    if (selectedSkip && selectedSkip.id === skipItem.id) {
      setSelectedSkip(null);
      setDrawerOpen(false);
    } else {
      setSelectedSkip(skipItem);
      setDrawerOpen(true);
    }
  };

  return (
    <div
      className="bg-background flex items-center flex-col justify-between gap-2 border-2 border-text-primary rounded-lg p-8 cursor-pointer"
      onClick={handleSetSelected}
    >
      <div className="rounded-xl">
        <img src={image} className="object-cover size-50 rounded-2xl" alt="" />
      </div>
      <div className="flex gap-2.5 items-start">
        <div className="flex flex-col justify-between  gap-4">
          <p className="text-text-primary font-medium text-md lg:text-2xl">
            {skipItem.size} Yard Skip
          </p>
          <p className="text-text-primary/70 font-sm text-sm">
            {skipItem.hire_period_days} day hire period
          </p>
          <p className="text-text-primary font-medium ">
            ${skipItem.price_before_vat}
          </p>
        </div>
      </div>
      <button className="bg-text-primary text-background font-medium py-2 px-3 text-lg w-full rounded-3xl">
        {selectedSkip && selectedSkip.id === skipItem.id
          ? "Selected Skip"
          : "Select this Skip"}
      </button>
    </div>
  );
};

export default SkipCard;
