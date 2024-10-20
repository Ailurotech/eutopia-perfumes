import { Button } from "@chakra-ui/react";
import { Icon } from "../common/Icon";

interface PaginationProps {
  maxPage: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}
//TODO: refactor those magic numbers
export function Pagination({
  maxPage,
  currentPage,
  setCurrentPage,
}: PaginationProps) {
  const paginationList = [
    { page: <Icon name="back" /> },
    { page: currentPage + 3 >= maxPage ? maxPage - 3 : currentPage },
    { page: currentPage + 2 >= maxPage ? maxPage - 2 : currentPage + 1 },
    { page: "..." },
    { page: maxPage - 1 },
    { page: maxPage },
    { page: <Icon name="forward" /> },
  ];
  const displayPageNum = paginationList.length - 3;
  const multiplyPageNum = 5;

  function nextPage() {
    if (currentPage < maxPage) {
      setCurrentPage(currentPage + 1);
    } else {
      setCurrentPage(maxPage);
    }
  }

  function previousPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else {
      setCurrentPage(1);
    }
  }

  function goToNextFivePages() {
    if (currentPage + multiplyPageNum < maxPage - displayPageNum) {
      setCurrentPage(currentPage + multiplyPageNum);
    } else {
      setCurrentPage(maxPage - displayPageNum);
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
                isDisabled={currentPage === 1 && true}
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
                isDisabled={currentPage + displayPageNum > maxPage && true}
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
                onClick={() => setCurrentPage(item.page as number)}
              >
                {item.page}
              </Button>
            );
        }
      })}
    </div>
  );
}
