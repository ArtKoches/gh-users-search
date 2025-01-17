import * as S from "./Pagination.styled";
import { usePagination } from "../../hooks/usePagination.ts";

type Props = {
  page: number;
  setPage: (page: number) => void;
};

export default function Pagination({ page, setPage }: Props) {
  const { totalPages, visiblePages } = usePagination();

  return (
    <S.Wrapper>
      <S.PrevBtn
        title={"Go to previous page"}
        onClick={() => setPage(--page)}
        disabled={page === 1}
      >
        Prev
      </S.PrevBtn>

      {visiblePages.map((pageNum) => (
        <S.Button
          key={pageNum}
          title={`${pageNum} page`}
          onClick={() => setPage(pageNum)}
          $isActive={pageNum === page}
        >
          {pageNum}
        </S.Button>
      ))}

      <S.NextBtn
        title={"Go to next page"}
        onClick={() => setPage(++page)}
        disabled={page === totalPages}
      >
        Next
      </S.NextBtn>
    </S.Wrapper>
  );
}
