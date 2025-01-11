import { UserDetailsType } from "../../lib/types.ts";
import * as S from "./UserDetails.styled.ts";

type Props = {
  user: UserDetailsType | null;
};

export default function UserDetails({ user }: Props) {
  if (!user) return null;

  return (
    <S.Wrapper>
      <S.Avatar src={user.avatar_url} alt="avatar" />

      <S.DescList>
        <S.DescTitle>Username</S.DescTitle>
        <S.DescDetails>{user.login}</S.DescDetails>

        <S.DescTitle>Name</S.DescTitle>
        <S.DescDetails>{user.name ?? "N/A"}</S.DescDetails>

        <S.DescTitle>Followers</S.DescTitle>
        <S.DescDetails>{user.followers}</S.DescDetails>

        <S.DescTitle>Following</S.DescTitle>
        <S.DescDetails>{user.following}</S.DescDetails>

        <S.DescTitle>Biography</S.DescTitle>
        <S.DescDetails>{user.bio ?? "N/A"}</S.DescDetails>
      </S.DescList>

      <S.GoToProfileLink
        to={user.html_url}
        target="_blank"
        rel="noopener noreferrer"
      >
        View GitHub Profile
      </S.GoToProfileLink>
    </S.Wrapper>
  );
}
