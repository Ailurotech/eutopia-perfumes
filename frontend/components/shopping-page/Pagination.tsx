import { Button } from "@chakra-ui/react";
import { Icon } from "../common/Icon";
import { useState } from "react";

export function Pagination() {
  const [page, setPage] = useState<number>(1);
  const paginationList = [
    { page: <Icon name="back" /> },
    { page: page },
    { page: page + 1 },
    { page: "..." },
    { page: 9 },
    { page: 10 },
    { page: <Icon name="forward" /> },
  ];

  function nextPage() {
    if (page < 10) {
      setPage(page + 1);
    } else {
      setPage(10);
    }
  }

  function previousPage() {
    if (page > 1) {
      setPage(page - 1);
    } else {
      setPage(1);
    }
  }

  function goToPage(page: number) {
    if (page > 6) {
      setPage(6);
      return;
    }
    setPage(page);
  }

  return (
    <div className="flex justify-center gap-2">
      {paginationList.map((item, index) => {
        switch (index) {
          case 0:
            return (
              <Button
                key={index}
                variant="pageArrowButton"
                isDisabled={page === 1 && true}
                onClick={previousPage}
              >
                {item.page}
              </Button>
            );
          case paginationList.length - 1:
            return (
              <Button
                key={index}
                variant="pageArrowButton"
                isDisabled={page === paginationList.length - 1 && true}
                onClick={nextPage}
              >
                {item.page}
              </Button>
            );
          default:
            return (
              <Button
                key={index}
                variant="pageNumberButton"
                onClick={() => goToPage(item.page as number)}
              >
                {item.page}
              </Button>
            );
        }
      })}
    </div>
  );
}
