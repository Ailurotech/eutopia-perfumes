import { Icon } from "@/components/common/Icon";
import { sanityClient } from "@/lib/sanityClient";
import { searchProductQuery } from "@/query";
import { RecommendedProducts } from "@/type";
import {
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { KeyboardEvent, useEffect, useState } from "react";
import { LoadingSpinner } from "@/components/common/LoadingSpinner";
import { IndividualSearchProduct } from "./IndividualSearchProduct";
import { Pagination } from "@/components/shopping-page/Pagination";
import { usePagination } from "@/hooks/usePagination";

export function Search() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchItem, setSearchItem] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [isSearched, setIsSearched] = useState<boolean>(false);
  const [searchResult, setSearchResult] = useState<RecommendedProducts[]>([]);
  const displayNum = 9;
  const { currentPage, setCurrentPage, displayProducts } = usePagination({
    filteredProducts: searchResult,
    displayNum,
  });
  const handleOnClose = () => {
    onClose();
    setSearchItem("");
    setSearchResult([]);
    setIsSearched(false);
  };
  const handleKeydown = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const searchQuery = searchProductQuery(searchItem);
      try {
        setLoading(true);
        setSearchResult([]);
        setIsSearched(false);
        const res = await sanityClient.fetch(searchQuery);
        setSearchResult(res);
        setLoading(false);
        setIsSearched(true);
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchResult, setCurrentPage]);

  return (
    <>
      <button onClick={onOpen}>
        <div className="relative">
          <Icon
            name="search"
            className="md:text-[20px] lg:text-[30px] xl:text-[40px]"
          />
        </div>
      </button>
      <Modal isOpen={isOpen} onClose={handleOnClose}>
        <ModalOverlay />
        <ModalContent
          className="p-6 lg:p-12 min-w-[600px] lg:min-w-[800px]"
          maxW="fit-content"
        >
          <ModalHeader
            className="text-default font-poppins text-lg flex justify-start items-center gap-3 mb-6"
            padding={0}
          >
            <button onClick={handleOnClose}>
              <Icon name="back" />
            </button>
            go back
          </ModalHeader>
          <ModalBody
            padding={0}
            className="text-default flex flex-col gap-4 items-center justify-center"
          >
            <Input
              value={searchItem}
              variant="flushed"
              placeholder="Search Your Item"
              _placeholder={{ color: "#808274" }}
              fontSize="1.5rem"
              padding="10px"
              textAlign="center"
              fontWeight="600"
              onChange={(e) => setSearchItem(e.target.value)}
              focusBorderColor="#808274"
              onKeyDown={handleKeydown}
            />
            {loading && <LoadingSpinner />}
            {isSearched && searchResult.length === 0 && "No result found!"}
            {searchResult.length > 0 && (
              <div className="grid grid-cols-3 gap-8">
                {displayProducts.map((item) => (
                  <IndividualSearchProduct
                    key={item.id}
                    item={item}
                    handleOnClose={handleOnClose}
                  />
                ))}
              </div>
            )}
            <Pagination
              maxPage={Math.ceil(searchResult.length / displayNum)}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
