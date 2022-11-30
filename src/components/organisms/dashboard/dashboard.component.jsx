import React from "react";
import { dashboardItems, navbarItems } from "../../assets/data/data";
import {
  ActionDivLeft,
  ActionDivRight,
  ActionsLeft,
  ActionsRight,
  AppButton,
  AppHeading,
  Card,
  CardButtons,
  CardChat,
  CardDescription,
  CardHead,
  Chat,
  ChatCount,
  ChatImage,
  ChatLeft,
  ChatPassport,
  ChatUpload,
  DashActions,
  DashboardCard,
  DashboardContainer,
  DashDiv,
  DashHeader,
  DashIcon,
  DashNav,
  HeaderLeft,
  HeaderRight,
  HeadLeft,
  HeadRight,
  Img,
  LeftPanel,
  MainDashboard,
  RightPanel,
  WorkingHeading,
  WorkingSpan,
} from "./dashboard.styles";
import { BsListTask } from "react-icons/bs";
import { RxDashboard } from "react-icons/rx";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineUpload} from "react-icons/ai";
import { BiMessageRoundedDetail} from "react-icons/bi";



const Dashboard = () => {
  return (
    <>
      <DashboardContainer>
        <LeftPanel>
          {navbarItems.map((item, i) => {
            const { id, icon, nav } = item;
            return (
              <div
                key={`${i}${id}`}
                className="navigation"
                onClick={(e) => {
                  //   event;
                }}
              >
                <DashDiv>
                  <DashIcon>{icon}</DashIcon>
                  <DashNav>{nav}</DashNav>
                </DashDiv>
              </div>
            );
          })}
        </LeftPanel>
        <RightPanel>
          <DashActions>
            <ActionsLeft>
              <ActionDivLeft>
                <BsListTask />
              </ActionDivLeft>
              <ActionDivLeft>
                <RxDashboard />
              </ActionDivLeft>
            </ActionsLeft>
            <ActionsRight>
              <ActionDivRight>
                <AiOutlinePlus />
              </ActionDivRight>
            </ActionsRight>
          </DashActions>
          <DashHeader>
            <HeaderLeft>
              <WorkingHeading>
                Working <WorkingSpan> (03) </WorkingSpan>
              </WorkingHeading>
            </HeaderLeft>
            <HeaderRight></HeaderRight>
          </DashHeader>
          <MainDashboard>
            <DashboardCard>
              {dashboardItems.map((item, i) => {
                const { id, app, comment, messages, image1, image2, image3 } =
                  item;
                return (
                  <Card
                    key={`${i}${id}`}
                    className="navigation"
                    onClick={(e) => {
                      //   event;
                    }}
                  >
                    <CardHead>
                      <HeadLeft>
                        <AppHeading>{app}</AppHeading>
                      </HeadLeft>
                      <HeadRight></HeadRight>
                    </CardHead>
                    <CardDescription>{comment}</CardDescription>
                    <CardButtons>
                        <AppButton></AppButton>
                    </CardButtons>
                    <CardChat>
                        <ChatLeft>
                            <ChatUpload>
                                <AiOutlineUpload />
                            </ChatUpload>
                            <Chat>
                                <ChatCount>{messages}</ChatCount>
                                <BiMessageRoundedDetail />
                            </Chat>
                        </ChatLeft>
                        <ChatPassport>
                            <ChatImage><Img url={image1} /></ChatImage>
                            <ChatImage><Img url={image2} /></ChatImage>
                            <ChatImage><Img url={image3} /></ChatImage>
                        </ChatPassport>
                    </CardChat>
                  </Card>
                );
              })}
            </DashboardCard>
          </MainDashboard>
        </RightPanel>
      </DashboardContainer>
    </>
  );
};

export default Dashboard;
