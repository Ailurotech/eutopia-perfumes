import { Icon } from "@/components/common/Icon";
import { ILocalStorage } from "@/type";
import {
  getProductsFromLocal,
  STORAGE_EVENT,
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
import Image from "next/image";

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
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent className="p-12" maxW="fit-content">
          <ModalHeader
            className="text-default font-poppins text-lg flex justify-start items-center gap-3 mb-6"
            padding={0}
          >
            <button onClick={onClose}>
              <Icon name="back" />
            </button>
            Shopping Continue
          </ModalHeader>
          <Divider borderWidth="1.5px" marginBottom="12px" />
          <ModalBody padding={0} className="text-default">
            <div className="mb-10">
              <h1 className="text-lg font-bold">Shopping cart</h1>
              <p className="text-sm">{`You have ${totalItems} ${totalItems <= 1 ? "item" : "items"} in your cart`}</p>
            </div>
            <div className="flex flex-col gap-4">
              {Object.values(cart).map((item, index) => {
                return (
                  <div
                    key={index}
                    className="border-[1px] border-inherit rounded-[15px] p-3 grid grid-cols-[auto_50%_8%_auto_auto] gap-4 items-center hover:shadow-md"
                  >
                    {/* image */}
                    <div className="w-[80px] h-[80px] rounded-xl relative overflow-clip">
                      <Image src={item.image} alt={item.title} fill />
                    </div>
                    {/* title */}
                    <div className="max-w-[280px] mr-10">
                      {item.title.split("|").map((title, index) =>
                        index === 0 ? (
                          <h1 key={index} className="text-sm font-bold">
                            {title}
                          </h1>
                        ) : (
                          <p key={index} className="text-xs">
                            {title}
                          </p>
                        )
                      )}
                    </div>
                    {/* quantity */}
                    <div className="flex items-center justify-end gap-2 mr-20">
                      <p className="text-xl font-bold">{item.quantity}</p>
                      <span className="flex flex-col">
                        <button
                          onClick={() => {
                            console.log(item.id);
                          }}
                        >
                          <Icon name="triangleUp" />
                        </button>
                        <button>
                          <Icon name="triangleDown" />
                        </button>
                      </span>
                    </div>
                    {/* total price */}
                    <div>
                      <p className="text-base">{`$${item.maxPrice}`}</p>
                    </div>
                    <button className="text-2xl">
                      <Icon name="delete" />
                    </button>
                  </div>
                );
              })}
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
