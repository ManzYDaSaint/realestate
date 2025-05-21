import React, { useState, useRef, useEffect, useCallback } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import {
  Bed,
  Bath,
  Building,
  Edit,
  Trash,
  MoreHorizontal,
  Plus,
  Search,
} from "lucide-react";

const allProperties = [
  // Add more items here to simulate infinite scroll
  ...Array(50)
    .fill(null)
    .map((_, i) => ({
      id: i + 1,
      title: `Property ${i + 1}`,
      address: `Address ${i + 1}`,
      price: 1000 * (i + 1),
      bedrooms: Math.floor(Math.random() * 5) + 1,
      bathrooms: Math.floor(Math.random() * 3) + 1,
      sqft: 500 + i * 10,
      type: "Apartment",
      status: i % 2 === 0 ? "For Sale" : "For Rent",
      image: "/placeholder.svg",
    })),
];

export default function PropertyList() {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("newest");
  const [menuAnchor, setMenuAnchor] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  const [visibleCount, setVisibleCount] = useState(9); // how many cards to show
  const loaderRef = useRef(null);

  const filtered = allProperties
    .filter((p) =>
      filter === "all" ? true : p.status.toLowerCase().includes(filter)
    )
    .filter((p) =>
      [p.title, p.address].some((val) =>
        val.toLowerCase().includes(search.toLowerCase())
      )
    );

  const sorted = [...filtered].sort((a, b) => {
    if (sort === "price-asc") return a.price - b.price;
    if (sort === "price-desc") return b.price - a.price;
    return b.id - a.id; // default newest first
  });

  const displayedProperties = sorted.slice(0, visibleCount);

  const loadMore = useCallback(() => {
    if (visibleCount < sorted.length) {
      setVisibleCount((prev) => prev + 6);
    }
  }, [visibleCount, sorted.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      },
      { threshold: 1 }
    );

    const currentLoader = loaderRef.current;
    if (currentLoader) observer.observe(currentLoader);

    return () => {
      if (currentLoader) observer.unobserve(currentLoader);
    };
  }, [loadMore]);

  const openMenu = (event, id) => {
    setSelectedId(id);
    setMenuAnchor(event.currentTarget);
  };

  const closeMenu = () => {
    setMenuAnchor(null);
    setSelectedId(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Property Listings</h1>
      </div>
      <div className="p-6">
        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-between gap-4 mb-6 fixed top-16 left-20 right-14 z-10 bg-white border-2 border-gray-200 mt-20 rounded-xl ml-10 px-8">
          <div className="flex flex-wrap gap-2 items-center">
            {["all", "sale", "rent"].map((key) => (
              <button
                onClick={() => setFilter(key)}
                className={`${
                  filter === key
                    ? "bg-blue-500 text-white hover:bg-blue-600 transition"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                } rounded-xl px-4 py-2 text-sm font-semibold`}
                key={key}
              >
                {key === "all"
                  ? "All"
                  : key === "sale"
                  ? "For Sale"
                  : "For Rent"}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 items-center py-2">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
              <input
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                type="text"
                placeholder="Search listings..."
                className="pl-10 pr-4 py-2 border rounded-md text-sm w-72 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <select
                id="sort"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="rounded-lg border border-gray-300 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="newest">Newest</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>

            <button className="flex items-center justify-center gap-2 px-4 py-2 text-sm text-white text-semibold rounded-lg bg-blue-500 hover:bg-blue-100 hover:text-blue-500 transition duration-300">
              <Plus size={16} />
              Add Property
            </button>
          </div>
        </div>

        {/* Property Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
          {displayedProperties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-2xl shadow-sm border hover:shadow-md transition overflow-hidden"
            >
              <div className="relative">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-48 object-cover"
                />
                <p
                  className={`${
                    property.status === "For Rent"
                      ? "bg-green-500"
                      : "bg-red-500"
                  } text-white text-xs font-semibold px-3 py-1 absolute top-3 right-2 rounded-lg`}
                >
                  {property.status}
                </p>
              </div>

              <div className="p-4 space-y-2">
                <h3 className="font-semibold text-base truncate">
                  {property.title}
                </h3>
                <p className="text-sm text-gray-500 truncate">
                  {property.address}
                </p>

                <div className="flex gap-4 text-sm text-gray-700 mt-2">
                  <div className="flex items-center gap-1">
                    <Bed size={16} /> {property.bedrooms}
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath size={16} /> {property.bathrooms}
                  </div>
                  <div className="flex items-center gap-1">
                    <Building size={16} /> {property.sqft} sqft
                  </div>
                </div>
              </div>

              <div className="border-t px-4 py-3 flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-500">Price</p>
                  <p className="text-sm font-semibold">
                    {property.status === "For Rent"
                      ? `MK${property.price.toLocaleString()}/mo`
                      : `MK${property.price.toLocaleString()}`}
                  </p>
                </div>
                <div>
                  <IconButton onClick={(e) => openMenu(e, property.id)}>
                    <MoreHorizontal size={18} />
                  </IconButton>
                  {selectedId === property.id && (
                    <Menu
                      anchorEl={menuAnchor}
                      open={Boolean(menuAnchor)}
                      onClose={closeMenu}
                    >
                      <MenuItem onClick={closeMenu}>
                        <Edit size={16} className="mr-2" />
                        Edit
                      </MenuItem>
                      <MenuItem onClick={closeMenu}>
                        <Trash size={16} className="mr-2" />
                        Delete
                      </MenuItem>
                    </Menu>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Infinite scroll loader */}
        {visibleCount < sorted.length && (
          <div ref={loaderRef} className="py-10 text-center text-gray-500">
            Loading more properties...
          </div>
        )}
      </div>
    </div>
  );
}
