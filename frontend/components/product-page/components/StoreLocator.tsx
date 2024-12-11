import { useState } from "react";
import { Playfair_Display, Poppins } from "next/font/google";
import clsx from "clsx";

const playfair = Playfair_Display({ weight: "400", subsets: ["latin"] });
const poppins = Poppins({ weight: "400", subsets: ["latin"] });

interface StoreLocation {
  locationName: string;
  address: {
    street: string;
    suburb: string;
    state: string;
    postcode: string;
  };
}

interface StoreLocatorProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectStore: (storeName: string) => void;
  locations: StoreLocation[];
}

export function StoreLocator({
  isOpen,
  onClose,
  onSelectStore,
  locations,
}: StoreLocatorProps) {
  const [postcode, setPostcode] = useState("");
  const [sortedLocations, setSortedLocations] = useState<StoreLocation[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = () => {
    if (!postcode) return;

    const sorted = [...locations].sort((a, b) => {
      const diffA = Math.abs(parseInt(a.address.postcode) - parseInt(postcode));
      const diffB = Math.abs(parseInt(b.address.postcode) - parseInt(postcode));
      return diffA - diffB;
    });

    setSortedLocations(sorted);
    setHasSearched(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className={clsx(playfair.className, "text-2xl")}>
            Select a Store
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        </div>

        <div className="mb-6">
          <label
            className={clsx(
              poppins.className,
              "block text-sm font-medium mb-2"
            )}
          >
            Find stores near you
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={postcode}
              onChange={(e) => setPostcode(e.target.value)}
              className="border rounded-md px-3 py-2 flex-1"
              placeholder="Enter your postcode"
              onKeyPress={(e) => {
                if (e.key === "Enter") handleSearch();
              }}
            />
            <button onClick={handleSearch} className="px-4 py-2 rounded-md">
              Search
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {hasSearched ? (
            sortedLocations.length > 0 ? (
              sortedLocations.map((location, index) => (
                <div
                  key={index}
                  className="border rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => {
                    onSelectStore(location.locationName);
                    onClose();
                  }}
                >
                  <h3 className={clsx(poppins.className, "font-semibold mb-2")}>
                    {location.locationName}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {location.address.street}
                    <br />
                    {location.address.suburb}
                    <br />
                    {location.address.state} {location.address.postcode}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">
                No stores found near this postcode
              </p>
            )
          ) : (
            <div className="text-center text-gray-500">
              <p>Enter your postcode to find nearby stores</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
