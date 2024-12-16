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
import { KeyboardEvent, useState } from "react";
import Image from "next/image";
import { LoadingSpinner } from "@/components/common/LoadingSpinner";
import { useRouter } from "next/router";

export function Search() {
  const [searchItem, setSearchItem] = useState<string>("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loading, setLoading] = useState<boolean>(false);
  const [isSearched, setIsSearched] = useState<boolean>(false);
  const [searchResult, setSearchResult] = useState<RecommendedProducts[]>([]);
  const router = useRouter();
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
        const res = await sanityClient.fetch(searchQuery);
        setSearchResult(res);
        setLoading(false);
        setIsSearched(true);
      } catch (error) {
        console.error(error);
      }
    }
  };

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
                {searchResult.map((item) => (
                  <div key={item.id} className="flex flex-col items-center">
                    {/* image */}
                    <div
                      className="w-[100px] h-[100px] rounded-lg relative overflow-clip cursor-pointer"
                      onClick={() => {
                        router.push(`/product/${item.id}`);
                        handleOnClose();
                      }}
                    >
                      <Image src={item.image} alt={item.title} fill />
                    </div>
                    {/* title */}
                    <div className="max-w-[220px] text-pretty">
                      {item.title.split("|").map((title, index) =>
                        index === 0 ? (
                          <h1
                            key={index}
                            className="text-sm font-bold text-center"
                          >
                            {title}
                          </h1>
                        ) : (
                          <p key={index} className="text-xs text-center">
                            {title}
                          </p>
                        )
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
