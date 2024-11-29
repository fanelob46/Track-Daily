import React, { useState } from "react";

interface FilterOption {
  label: string;
  value: string;
}

const FilterDropdown: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("today");

  const filterOptions: FilterOption[] = [
    { label: "Today", value: "today" },
    { label: "Tomorrow", value: "tomorrow" },
    { label: "Yesterday", value: "yesterday" },
  ];

//   useEffect(() => {
//     onFilterChange(selectedFilter);
//   }, [selectedFilter, onFilterChange]);

  return (
    <div className="relative inline-block w-full">
      <select
        className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--accent)] w-full"
        value={selectedFilter}
        onChange={(e) => setSelectedFilter(e.target.value)}
      >
        {filterOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterDropdown;
