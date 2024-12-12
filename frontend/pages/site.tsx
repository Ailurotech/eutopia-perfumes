import { GetStaticProps } from "next";
import { sanityClient } from "@/lib/sanityClient";
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
  googleMapsUrl: string;
  openingHours: Array<{
    days: string;
    hours: string;
  }>;
}

interface SitePageProps {
  locations: StoreLocation[];
}

export default function SitePage({ locations }: SitePageProps) {
  return (
    <main className="min-h-screen bg-gray-50 py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className={clsx(playfair.className, "text-4xl md:text-5xl mb-6")}>
            Our Store Locations
          </h1>
          <p
            className={clsx(
              poppins.className,
              "text-gray-600 max-w-2xl mx-auto"
            )}
          >
            Visit us at any of our locations to experience our fragrances in
            person.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm overflow-hidden transition-shadow hover:shadow-md"
            >
              {/* Map */}
              <div className="w-full h-[300px]">
                <iframe
                  src={location.googleMapsUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Location Details */}
              <div className="p-6">
                <h2 className={clsx(playfair.className, "text-2xl mb-4")}>
                  {location.locationName}
                </h2>

                <div className="mb-6">
                  <h3
                    className={clsx(
                      poppins.className,
                      "font-semibold text-sm text-gray-500 uppercase tracking-wider mb-2"
                    )}
                  >
                    Address
                  </h3>
                  <address className="not-italic text-gray-600">
                    {location.address.street}
                    <br />
                    {location.address.suburb}
                    <br />
                    {location.address.state} {location.address.postcode}
                  </address>
                </div>

                {location.openingHours && location.openingHours.length > 0 && (
                  <div>
                    <h3
                      className={clsx(
                        poppins.className,
                        "font-semibold text-sm text-gray-500 uppercase tracking-wider mb-2"
                      )}
                    >
                      Opening Hours
                    </h3>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-gray-600 text-sm">
                      {location.openingHours.map((hours, idx) => (
                        <div key={idx} className="contents">
                          <span className="font-medium">{hours.days}</span>
                          <span>{hours.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    `${location.address.street} ${location.address.suburb} ${location.address.state} ${location.address.postcode}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={clsx(
                    "mt-6 inline-flex items-center justify-center w-full",
                    "px-4 py-2 border border-gray-300 rounded-md",
                    "text-sm font-medium text-gray-700",
                    "hover:bg-gray-50 transition-colors",
                    "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  )}
                >
                  Get Directions
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const locations = await sanityClient.fetch(`
    *[_type == "storeLocation"] {
      locationName,
      address,
      googleMapsUrl,
      openingHours
    }
  `);

  return {
    props: {
      locations,
    },
    revalidate: 60,
  };
};
