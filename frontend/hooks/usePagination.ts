import { ProductType } from "@/type";
import { useEffect, useState } from "react";

export function usePagination({
  filteredProducts,
}: {
  filteredProducts: ProductType[];
}) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [displayProducts, setDisplayProducts] = useState<ProductType[]>([]);
  const displayNum = 16;

  function paginatedProducts(products: ProductType[]) {
    const startIndex = (currentPage - 1) * displayNum;
    const endIndex = startIndex + displayNum;
    return products.slice(startIndex, endIndex);
  }

  useEffect(() => {
    const parsedProducts = paginatedProducts(filteredProducts);
    setDisplayProducts(parsedProducts);
  }, [currentPage, filteredProducts]);

  return {
    displayNum,
    displayProducts,
    setCurrentPage,
    currentPage,
  };
}
