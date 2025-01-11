import * as S from "./Pagination.styled";

type Props = {
  page: number;
  totalPages: number;
  visiblePages: number[];
  goToPage: (page: number) => void;
};

export default function Pagination({
  page,
  totalPages,
  visiblePages,
  goToPage,
}: Props) {
  return (
    <S.Wrapper>
      <S.PrevBtn
        title={"Previous Page"}
        onClick={() => goToPage(--page)}
        disabled={page === 1}
      >
        Prev
      </S.PrevBtn>

      {visiblePages.map((pageNum) => (
        <S.Button
          key={pageNum}
          title={`${pageNum}`}
          onClick={() => goToPage(pageNum)}
          $isActive={pageNum === page}
        >
          {pageNum}
        </S.Button>
      ))}

      <S.NextBtn
        title={"Next Page"}
        onClick={() => goToPage(++page)}
        disabled={page === totalPages}
      >
        Next
      </S.NextBtn>
    </S.Wrapper>
  );
}
