import React, { useMemo } from 'react';
import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  photo:
    | {
        id: number;
        url: string;
      }[]
    | null;
}

interface UserProductsProps {
  products: Product[];
  baseUrl: string;
}

const ITEMS_PER_PAGE = 5;
const DEFAULT_PRODUCT_IMAGE = 'https://via.placeholder.com/48';

const usePagination = (items: any[], itemsPerPage: number) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const currentItems = useMemo(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return items.slice(indexOfFirstItem, indexOfLastItem);
  }, [items, currentPage, itemsPerPage]);

  const nextPage = () =>
    setCurrentPage((page) => Math.min(page + 1, totalPages));
  const prevPage = () => setCurrentPage((page) => Math.max(page - 1, 1));

  return { currentItems, currentPage, totalPages, nextPage, prevPage };
};

const UserProducts: React.FC<UserProductsProps> = React.memo(
  ({ products, baseUrl }) => {
    const { currentItems, currentPage, totalPages, nextPage, prevPage } =
      usePagination(products, ITEMS_PER_PAGE);

    return (
      <div className="bg-white overflow-hidden shadow-lg rounded-lg">
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-4">
          <h2 className="text-2xl font-bold text-white">
            User Products ({products.length})
          </h2>
        </div>
        <div className="p-6">
          {currentItems.length > 0 ? (
            <ul className="space-y-6">
              {currentItems.map((product) => (
                <li
                  key={product.id}
                  className="bg-gray-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <Image
                        src={
                          product.photo && product.photo.length > 0
                            ? `${baseUrl}${product.photo[0].url}`
                            : DEFAULT_PRODUCT_IMAGE
                        }
                        alt={product.name}
                        width={80}
                        height={80}
                        className="h-20 w-20 object-cover rounded-lg"
                        onError={(e) => {
                          e.currentTarget.src = DEFAULT_PRODUCT_IMAGE;
                        }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-lg font-semibold text-gray-900 truncate">
                        {product.name}
                      </p>
                      <p className="text-sm text-gray-500 mt-1 truncate">
                        {product.description}
                      </p>
                      <p className="text-lg font-medium text-green-600 mt-2">
                        {product.price.toFixed(2)} AED
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-lg text-gray-500 text-center py-8">
              No products available.
            </p>
          )}

          {/* Pagination */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200"
              aria-label="Previous page"
            >
              Previous
            </button>
            <span className="text-gray-600">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200"
              aria-label="Next page"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  },
);

UserProducts.displayName = 'UserProducts';

export default UserProducts;
