import React from "react";
import { CenterSearch, ImageDiv, LeftLogo, LogoHeading, LogoImage, NavbarContainer, RightUser, SearchIcon, SearchText, TextDiv, UserBtn, UserButton, UserDetails, UserIcon, UserImage, UserImg, UserInfo, UserName, UserNames, UserNotification, UserRole } from "./navbar.styles";
import passport from "../../assets/img/passport.jpg"
import andela from "../../assets/img/andela.png"
import { FiSearch} from "react-icons/fi";
import { RxCaretDown } from "react-icons/rx";
import { BUTTON_TYPE_CLASSES } from "../../atoms/button/button.component";

const Navbar = () => {
  return (
    <NavbarContainer>
      <LeftLogo>
        <ImageDiv>
          <LogoImage url={passport}/>
        </ImageDiv>
        <LogoHeading>Tuscot</LogoHeading>
      </LeftLogo>
      <CenterSearch>
        <TextDiv>
          <SearchText>Search...</SearchText>
          <SearchIcon><FiSearch /></SearchIcon>
        </TextDiv>
      </CenterSearch>
      <RightUser>
        <UserButton>
          <UserBtn buttonType={BUTTON_TYPE_CLASSES.curved}>+ New Project</UserBtn>
        </UserButton>
        <UserNotification></UserNotification>
        <UserDetails>
          <UserImage>
            <UserImg url={andela}/>
          </UserImage>
          <UserInfo>
            <UserNames>
              <UserName>Cavin petarson</UserName> <UserRole>Manager</UserRole>
            </UserNames>
            <UserIcon><RxCaretDown /></UserIcon>
          </UserInfo>
        </UserDetails>
      </RightUser>
      <div></div>
    </NavbarContainer>
  );
};

export default Navbar;
