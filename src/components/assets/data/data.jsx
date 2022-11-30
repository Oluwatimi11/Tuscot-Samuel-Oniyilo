import { RxDashboard } from "react-icons/rx";
import { AiFillFileText } from "react-icons/ai";
import { BsListTask } from "react-icons/bs";
import { TbMessage } from "react-icons/tb";
import { FaRegChartBar } from "react-icons/fa";
import passport from "../img/passport.jpg"

export const navbarItems = [
  {
    id: 1,
    icon: <RxDashboard />,
    nav: "Dashboard",
  },
  {
    id: 2,
    icon: <AiFillFileText />,
    nav: "Projects",
  },
  {
    id: 3,
    icon: <BsListTask />,
    nav: "My Task",
  },
  {
    id: 4,
    icon: <TbMessage />,
    nav: "Message",
  },
  {
    id: 5,
    icon: <FaRegChartBar />,
    nav: "Analytics",
  },
];

export const dashboardItems = [
  {
    id: 1,
    app: "Slack",
    comment:
      "Great Application! Nice Interface, Easy to navigate with excellent wallet features. I really enjoyed using this app. I loved how i have multiple options of transferring money -to user wallets or to the bank account directly.So flexible. No hassle while registering on the app, Commendable.",
    messages: 3,
    image1: passport,
    image2: passport,
    image3: passport,
  },
  {
    id: 2,
    app: "Google",
    comment:
      "Great Application! Nice Interface, Easy to navigate with excellent wallet features. I really enjoyed using this app. I loved how i have multiple options of transferring money -to user wallets or to the bank account directly.So flexible. No hassle while registering on the app, Commendable.",
      messages: 3,
      image1: passport,
    image2: passport,
    image3: passport,
  },
  {
    id: 3,
    app: "Twitter",
    comment:
      "Great Application! Nice Interface, Easy to navigate with excellent wallet features. I really enjoyed using this app. I loved how i have multiple options of transferring money -to user wallets or to the bank account directly.So flexible. No hassle while registering on the app, Commendable.",
      messages: 3,
      image1: passport,
    image2: passport,
    image3: passport,
    },
];
