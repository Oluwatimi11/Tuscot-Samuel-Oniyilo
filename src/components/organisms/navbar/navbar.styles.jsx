import styled from "styled-components";
import Button from "../../atoms/button/button.component";
import Image from "../../atoms/image/image.component";
import Text, { Heading, Span } from "../../atoms/typography";

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100vw;
  padding: 0.5rem;
`;
export const LeftLogo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 30%;
  padding-left: 2rem;
`;
export const ImageDiv = styled.div``;
export const LogoHeading = styled.div``;
export const CenterSearch = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 40%;
`;
export const TextDiv = styled.div`
display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
  border-radius: 5px;
  padding: .2rem;
  height: 3rem;
  background-color: #cbcbe1;
  `;
export const SearchIcon = styled.div``;
export const RightUser = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 30%;
`;
export const UserButton = styled.div``;
export const UserNotification = styled.div``;
export const UserDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const UserImage = styled.div``;
export const UserInfo = styled.div`
display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  `;

export const UserNames = styled.div``;

export const UserIcon = styled.div``;
export const UserName = styled(Text)`
font-weight: 700;
line-height: 20px;
font-size: 18px;
color: #000;
`;

export const UserRole = styled(Text)`
font-weight: 700;
/* line-height: 20px; */
font-size: 18px;
color: #c9cccf;
`;

export const LogoImage = styled(Image)`
  width: 35px;
  height: 35px;
`;
export const SearchText = styled(Text)``;

export const UserBtn = styled(Button)`
background-color: blue;`;

export const UserImg = styled(Image)`
  width: 35px;
  height: 35px;
  border-radius: 50%;
`;
