import { useEffect, useState } from "react";

interface IUsePagination<T extends Array<any>> {
  filteredProducts: T;
  displayNum: number;
}

export function usePagination<T extends Array<any>>({
  filteredProducts,
  displayNum,
}: IUsePagination<T>) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [displayProducts, setDisplayProducts] = useState<T>([] as T);

  function paginatedProducts(products: T): T {
    const startIndex = (currentPage - 1) * displayNum;
    const endIndex = startIndex + displayNum;
    return products.slice(startIndex, endIndex) as T;
  }

  useEffect(() => {
    const lastPage = Math.ceil(filteredProducts.length / displayNum);
    if (currentPage > lastPage) {
      setCurrentPage(lastPage);
    }
    const parsedProducts = paginatedProducts(filteredProducts);
    setDisplayProducts(parsedProducts);
  }, [currentPage, filteredProducts, displayNum]);

  return {
    displayProducts,
    setCurrentPage,
    currentPage,
  };
}
