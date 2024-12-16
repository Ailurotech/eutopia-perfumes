import { Icon } from "@/components/common/Icon";
import { ILocalStorage, ISingleProductForLocalStorage } from "@/type";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

interface IIndividualProductCard {
  item: ISingleProductForLocalStorage;
  setCart: Dispatch<SetStateAction<ILocalStorage>>;
}

export function IndividualProductCard({
  item,
  setCart,
}: IIndividualProductCard) {
  return (
    <div className="border-[1px] border-inherit rounded-2xl p-3 grid grid-cols-[auto_45%_auto_auto_auto] lg:grid-cols-[auto_50%_auto_auto_auto] file:gap-4 items-center hover:shadow-md">
      {/* image */}
      <div className="w-[50px] h-[50px] sm:w-[80px] sm:h-[80px] rounded-lg relative overflow-clip">
        <Image src={item.image} alt={item.title} fill />
      </div>
      {/* title */}
      <div className="max-w-[180px] sm:max-w-[240px] lg:max-w-[280px] lg:mr-10">
        {item.title.split("|").map((title, index) =>
          index === 0 ? (
            <h1 key={index} className="text-xs sm:text-sm font-bold">
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
      <div className="flex items-center justify-end gap-2 mr-2 sm:mr-10 lg:mr-12">
        <p className="text-base sm:text-xl font-bold">{item.quantity}</p>
        <span className="flex flex-col text-xs sm:text-base">
          <button
            onClick={() => {
              setCart((prev) => {
                return {
                  ...prev,
                  [item.id]: {
                    ...item,
                    quantity: item.quantity + 1,
                    totalPrice: item.maxPrice * (item.quantity + 1),
                  },
                };
              });
            }}
          >
            <Icon name="triangleUp" />
          </button>
          <button
            onClick={() => {
              setCart((prev) => {
                if (prev[item.id].quantity <= 1) {
                  const newCart = { ...prev };
                  delete newCart[item.id];
                  return newCart;
                }
                return {
                  ...prev,
                  [item.id]: {
                    ...item,
                    quantity: item.quantity - 1,
                    totalPrice: item.maxPrice * (item.quantity - 1),
                  },
                };
              });
            }}
          >
            <Icon name="triangleDown" />
          </button>
        </span>
      </div>
      {/* total price */}
      <div>
        <p className="text-base">{`$${item.totalPrice.toFixed(2)}`}</p>
      </div>
      <button
        className="text-2xl"
        onClick={() => {
          setCart((prev) => {
            const newCart = { ...prev };
            delete newCart[item.id];
            return newCart;
          });
        }}
      >
        <Icon name="delete" />
      </button>
    </div>
  );
}
