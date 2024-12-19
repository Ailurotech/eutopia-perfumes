import { Button } from "@chakra-ui/react";
import { Icon } from "../common/Icon";
import { ReactNode } from "react";

interface PaginationProps {
  maxPage: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

interface PageButtonProps {
  variant: "pageNumberButton" | "pageArrowButton";
  page: number | React.ReactNode;
  onClick: () => void;
  isDisabled?: boolean;
}

export function Pagination({
  maxPage = 1,
  currentPage,
  setCurrentPage,
}: PaginationProps) {
  const displayPageNum = 4;
  const multiplyPageNum = 5;
  const numBetweenFirstAndLast = maxPage - currentPage + 1;
  const maxNumOfFirst = maxPage - displayPageNum + 1;
  const numBetweenSecondAndLast = numBetweenFirstAndLast + 1;
  const maxNumOfSecond = maxNumOfFirst + 1;

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

  function goToPage(page: number) {
    setCurrentPage(page);
  }

  function PageButton({ variant, page, onClick, isDisabled }: PageButtonProps) {
    return (
      <Button variant={variant} isDisabled={isDisabled} onClick={onClick}>
        {page}
      </Button>
    );
  }

  function PageContainer({ children }: { children: ReactNode }) {
    return <div className="flex justify-center gap-2">{children}</div>;
  }

  //when maxPage less than five only show one page
  if (maxPage <= 5) {
    const paginationList = Array.from({ length: maxPage }, (_, i) => i + 1);
    return (
      <PageContainer>
        {paginationList.map((page, index) => (
          <PageButton
            key={index}
            variant="pageNumberButton"
            page={page}
            onClick={() => goToPage(page)}
          />
        ))}
      </PageContainer>
    );
  }

  //when maxPage more than five only show one page
  if (maxPage > 5) {
    const paginationList = [
      numBetweenFirstAndLast <= displayPageNum ? maxNumOfFirst : currentPage,
      numBetweenSecondAndLast <= displayPageNum
        ? maxNumOfSecond
        : currentPage + 1,
      "...",
      maxPage - 1,
      maxPage,
    ];

    return (
      <PageContainer>
        <PageButton
          variant="pageArrowButton"
          page={<Icon name="back" />}
          onClick={previousPage}
          isDisabled={currentPage === 1 && true}
        />
        {paginationList.map((page, index) => {
          switch (index) {
            case 2:
              return (
                <PageButton
                  key={index}
                  variant="pageNumberButton"
                  onClick={goToNextFivePages}
                  page={page}
                  isDisabled={currentPage + multiplyPageNum >= maxPage && true}
                />
              );
            default:
              return (
                <PageButton
                  key={index}
                  variant="pageNumberButton"
                  onClick={() => goToPage(page as number)}
                  page={page}
                />
              );
          }
        })}
        <PageButton
          variant="pageArrowButton"
          isDisabled={currentPage + displayPageNum > maxPage && true}
          onClick={nextPage}
          page={<Icon name="forward" />}
        />
      </PageContainer>
    );
  }
}
