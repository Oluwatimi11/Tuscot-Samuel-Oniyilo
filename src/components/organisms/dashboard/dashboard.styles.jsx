import styled from "styled-components";
import Image from "../../atoms/image/image.component";
import Text, { Heading, Span } from "../../atoms/typography";

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100vh;
`;

export const LeftPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3% 0 0 3%;
  width: 20%;
  height: 30%;
  background-color: #fff;
`;

export const DashDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  color: #c5c1c1;

  &:hover {
    color: blue;
  }
`;

export const ActionDivLeft = styled.div`
  color: #777;
  width: 35px;
  height: 35px;
  padding-top: auto;
  font-size: 22px;
  margin-right: 5%;

  &:hover {
    border: 2px solid cyan;
    background-color: cyan;
    border-radius: 10px;
  }
`;

export const WorkingHeading = styled(Heading)`
  color: #000;
  font-size: 20px;
`;

export const WorkingSpan = styled(Span)`
  color: #bdb9be;
  font-size: 20px;
`;

export const ActionDivRight = styled.div`
  color: #fff;
  background-color: blue;
  border-radius: 10px;
  width: 35px;
  height: 35px;
  padding-top: auto;
  padding-top: auto;
  font-size: 24px;
`;

export const DashIcon = styled.div`
  margin-right: 1rem;
  font-size: 18px;
`;

export const DashNav = styled.div``;

export const RightPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5%;
  width: 80%;
  background-color: #f8f1fa;
`;

export const DashActions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ActionsLeft = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 10px;
`;

export const ActionsRight = styled.div``;

export const DashHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const HeaderLeft = styled.div``;

export const HeaderRight = styled.div``;
export const MainDashboard = styled.div``;

export const DashboardCard = styled.div``;
export const CardHead = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const HeadLeft = styled.div``;
export const HeadRight = styled.div``;
export const CardDescription = styled(Text)`
  font-size: 16px;
  width: 100%;
  /* text-align: center; */
`;
export const CardButtons = styled.div``;

export const Card = styled.div`
  /* margin-top: 2%; */
`;

export const CardChat = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #fff;
  height: 10rem;
  border-radius: 10px;
  align-items: left;
  padding: 2rem;
`;

export const AppHeading = styled(Text)`
  color: #000;
  font-size: 20px;
  margin-bottom: 1rem;
  font-weight: 700;
`;

export const AppButton = styled.div``;

export const ChatLeft = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ChatUpload = styled.div``;

export const Chat = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 2rem;
`;

export const ChatCount = styled.div``;
export const ChatPassport = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const ChatImage = styled.div``;

export const Img = styled(Image)`
  width: 35px;
  height: 35px;
  border-radius: 50%;
`;
