import { Icon } from "@/components/common/Icon";
import { ILocalStorage } from "@/type";
import {
  getProductsFromLocal,
  STORAGE_EVENT,
  updateEntireLocal,
} from "@/utils/local-storage-for-product";
import {
  Divider,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { IndividualProductCard } from "./IndividualProductCard";

export function Cart() {
  const [cart, setCart] = useState<ILocalStorage>({});
  const { isOpen, onOpen, onClose } = useDisclosure();
  const totalItems = Object.keys(cart).length;
  useEffect(() => {
    setCart(getProductsFromLocal());
    const handleStorageChange = (e: StorageEvent) => {
      setCart(getProductsFromLocal());
    };
    window.addEventListener(STORAGE_EVENT, handleStorageChange);
    return () => {
      window.removeEventListener(STORAGE_EVENT, handleStorageChange);
    };
  }, []);

  const handleOnClose = () => {
    updateEntireLocal(cart);
    onClose();
  };
  return (
    <>
      <button onClick={onOpen}>
        <div className="relative">
          <Icon
            name="shoppingBag"
            className="md:text-[20px] lg:text-[30px] xl:text-[40px]"
          />
          <div
            className={clsx(
              "w-[15px] h-[15px] lg:w-[18px] lg:h-[18px] xl:w-[20px] xl:h-[20px]",
              "rounded-full bg-red-400 absolute font-bold text-[8px] lg:text-[10px] xl:text-xs flex justify-center items-center text-white",
              "top-0 right-0 translate-x-1/4 -translate-y-1/4"
            )}
          >
            {totalItems}
          </div>
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
            Shopping Continue
          </ModalHeader>
          <Divider borderWidth="1.5px" marginBottom="12px" />
          <ModalBody
            padding={0}
            className="text-default flex flex-col gap-10 items-start"
          >
            <div>
              <h1 className="text-lg font-bold">Shopping cart</h1>
              <p className="text-sm">{`You have ${totalItems} ${totalItems <= 1 ? "item" : "items"} in your cart`}</p>
            </div>
            <div className="flex flex-col gap-4 w-full">
              {Object.values(cart).map((item, index) => (
                <IndividualProductCard
                  key={index}
                  item={item}
                  setCart={setCart}
                />
              ))}
            </div>
            <button
              type="button"
              className="px-16 py-3 bg-default text-white rounded-lg font-poppins text-sm font-bold"
            >
              CHECK OUT
            </button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
