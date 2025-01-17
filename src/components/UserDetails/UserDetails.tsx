import * as S from "./UserDetails.styled.ts";
import { UserDetailsType } from "../../lib/types.ts";

type Props = {
  chosenUser: UserDetailsType | null;
};

export default function UserDetails({ chosenUser }: Props) {
  const { avatar_url, login, name, followers, following, bio, html_url } =
    chosenUser as UserDetailsType;

  return (
    <S.Wrapper>
      <S.Avatar src={avatar_url} alt="avatar" />

      <S.DescList>
        <S.DescTitle>Username</S.DescTitle>
        <S.DescDetails>{login}</S.DescDetails>

        <S.DescTitle>Name</S.DescTitle>
        <S.DescDetails>{name ?? "N/A"}</S.DescDetails>

        <S.DescTitle>Followers</S.DescTitle>
        <S.DescDetails>{followers}</S.DescDetails>

        <S.DescTitle>Following</S.DescTitle>
        <S.DescDetails>{following}</S.DescDetails>

        <S.DescTitle>Biography</S.DescTitle>
        <S.DescDetails>{bio ?? "N/A"}</S.DescDetails>
      </S.DescList>

      <S.GoToProfileLink
        to={html_url}
        target="_blank"
        rel="noopener noreferrer"
      >
        View GitHub Profile
      </S.GoToProfileLink>
    </S.Wrapper>
  );
}
