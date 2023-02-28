import {
  ArrowsRightLeftIcon,
  BuildingLibraryIcon,
  CircleStackIcon,
  CurrencyDollarIcon,
  PresentationChartLineIcon,
  PuzzlePieceIcon,
  ScaleIcon,
  SparklesIcon,
  Square2StackIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/20/solid";
import React from "react";

const Sort = () => {
  return (
    <div className="flex">
      <div className="bg-blue-100 py-2 px-2 rounded-md flex mr-2">
        <SparklesIcon className="w-6 h-6 text-blue-600 mr-2" />
        <p className="text-blue-600 text-sm font-semibold">Terbaru</p>
      </div>
      <div className="bg-blue-100 py-2 px-2 rounded-md flex mr-2">
        <BuildingLibraryIcon className="w-6 h-6 text-blue-600 mr-2" />
        <p className="text-blue-600 text-sm font-semibold">De-Fi</p>
      </div>
      <div className="bg-blue-100 py-2 px-2 rounded-md flex mr-2">
        <PuzzlePieceIcon className="w-6 h-6 text-blue-600 mr-2" />
        <p className="text-blue-600 text-sm font-semibold">NFT/Gaming</p>
      </div>
      <div className="bg-blue-100 py-2 px-2 rounded-md flex mr-2">
        <PresentationChartLineIcon className="w-6 h-6 text-blue-600 mr-2" />
        <p className="text-blue-600 text-sm font-semibold">Cex</p>
      </div>
      <div className="bg-blue-100 py-2 px-2 rounded-md flex mr-2">
        <ArrowsRightLeftIcon className="w-6 h-6 text-blue-600 mr-2" />
        <p className="text-blue-600 text-sm font-semibold">Dex</p>
      </div>
      <div className="bg-blue-100 py-2 px-2 rounded-md flex mr-2">
        <Square2StackIcon className="w-6 h-6 text-blue-600 mr-2" />
        <p className="text-blue-600 text-sm font-semibold">Layer-1</p>
      </div>
      <div className="bg-blue-100 py-2 px-2 rounded-md flex mr-2">
        <CircleStackIcon className="w-6 h-6 text-blue-600 mr-2" />
        <p className="text-blue-600 text-sm font-semibold">Infrastructure</p>
      </div>
      <div className="bg-blue-100 py-2 px-2 rounded-md flex mr-2">
        <CurrencyDollarIcon className="w-6 h-6 text-blue-600 mr-2" />
        <p className="text-blue-600 text-sm font-semibold">Lending</p>
      </div>
      <div className="bg-blue-100 py-2 px-2 rounded-md flex mr-2">
        <Square3Stack3DIcon className="w-6 h-6 text-blue-600 mr-2" />
        <p className="text-blue-600 text-sm font-semibold">Layer-2</p>
      </div>
      <div className="bg-blue-100 py-2 px-2 rounded-md flex mr-2">
        <ScaleIcon className="w-6 h-6 text-blue-600 mr-2" />
        <p className="text-blue-600 text-sm font-semibold">
          Ekosistem Stablecoin
        </p>
      </div>
    </div>
  );
};

export default Sort;
