import { Button } from "@chakra-ui/react";
import { Icon } from "../common/Icon";
import { useState } from "react";

interface PaginationProps {
  maxPage: number;
}

export function Pagination({ maxPage }: PaginationProps) {
  const [page, setPage] = useState<number>(1);
  const paginationList = [
    { page: <Icon name="back" /> },
    { page: page },
    { page: page + 1 },
    { page: "..." },
    { page: maxPage - 1 },
    { page: maxPage },
    { page: <Icon name="forward" /> },
  ];
  const displayPageNum = paginationList.length - 3;
  const multiplyPageNum = 5;

  function nextPage() {
    if (page < maxPage) {
      setPage(page + 1);
    } else {
      setPage(maxPage);
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
    if (page > maxPage - displayPageNum) {
      setPage(maxPage - displayPageNum);
      return;
    }
    setPage(page);
  }

  function goToNextFivePages() {
    if (page + multiplyPageNum < maxPage - displayPageNum) {
      setPage(page + multiplyPageNum);
    } else {
      setPage(maxPage - displayPageNum);
    }
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
          case 3:
            return (
              <Button
                key={index}
                variant="pageNumberButton"
                onClick={goToNextFivePages}
              >
                {item.page}
              </Button>
            );
          case paginationList.length - 1:
            return (
              <Button
                key={index}
                variant="pageArrowButton"
                isDisabled={page === maxPage - displayPageNum && true}
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
