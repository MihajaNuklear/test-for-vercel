import React, { FC } from 'react';

export type CategoryAttr = {
  name: string;
  slug: string;
  description: string;
  updatedAt: Date;
};

export type CategoryData = {
  data: {
    id: number;
    attributes: CategoryAttr;
  }[];
};

type CategoryFiltersProps = {
  categoriesData: CategoryData;
  selectedCategories: string[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>;
};

const CategoryFilters: FC<CategoryFiltersProps> = ({
  categoriesData,
  selectedCategories,
  setSelectedCategories,
}) => {
  const handleCheckboxChange = (categoryName: string) => {
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(categoryName)
        ? prevSelected.filter((name) => name !== categoryName)
        : [...prevSelected, categoryName],
    );
  };

  const handleShowAll = () => {
    setSelectedCategories([]);
  };

  return (
    <section className="flex items-center space-x-4 mb-8">
      <div
        className="category-filters w-full flex-nowrap flex items-center gap-4 overflow-x-auto whitespace-nowrap scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <label
          className={`px-4 py-2 border-2 border-blue-500 rounded-full text-center cursor-pointer flex items-center transition ${
            selectedCategories.length === 0
              ? 'bg-blue-500 text-white'
              : 'bg-transparent '
          }`}
          onClick={handleShowAll}
        >
          <input
            type="checkbox"
            checked={selectedCategories.length === 0}
            onChange={handleShowAll}
            className="hidden"
          />
          <span>Tout</span>
        </label>

        {categoriesData?.data.map(({ attributes, id }) => {
          const isSelected = selectedCategories.includes(attributes.name);

          return (
            <label
              key={attributes.name + id}
              className={`px-4 py-2 border-2 border-blue-500 rounded-full text-center cursor-pointer flex items-center transition ${
                isSelected ? 'bg-blue-500 text-white' : 'bg-transparent  '
              }`}
            >
              <input
                type="checkbox"
                id={attributes.name}
                checked={isSelected}
                onChange={() => handleCheckboxChange(attributes.name)}
                className="hidden"
              />
              <span>{attributes.name}</span>
            </label>
          );
        })}
      </div>
    </section>
  );
};

export default CategoryFilters;
