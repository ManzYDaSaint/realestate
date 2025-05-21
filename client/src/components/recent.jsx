import { BedDouble, Bath, Building2 } from "lucide-react";

const listings = [
  {
    id: 1,
    title: "Downtown Loft",
    location: "New York, NY",
    price: "$850,000",
    bedrooms: 2,
    bathrooms: 2,
    image: "/placeholder.svg",
  },
  {
    id: 2,
    title: "Beachfront Villa",
    location: "Miami, FL",
    price: "$2,100,000",
    bedrooms: 5,
    bathrooms: 4,
    image: "/placeholder.svg",
  },
];

export default function RecentListings() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-lg font-semibold mb-4">Recent Listings</h2>
      <div className="space-y-4">
        {listings.map((listing) => (
          <div key={listing.id} className="flex gap-4 items-center">
            <img
              src={listing.image}
              alt={listing.title}
              className="w-20 h-20 object-cover rounded-lg"
            />
            <div className="flex-1">
              <h4 className="font-medium text-gray-800">{listing.title}</h4>
              <p className="text-sm text-gray-500">{listing.location}</p>
              <div className="flex items-center gap-2 text-xs text-gray-400 mt-1">
                <BedDouble className="w-4 h-4" />
                {listing.bedrooms}
                <Bath className="w-4 h-4 ml-2" />
                {listing.bathrooms}
              </div>
            </div>
            <div className="font-semibold text-blue-600">{listing.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
