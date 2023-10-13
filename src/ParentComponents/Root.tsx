import { Outlet } from "react-router-dom";
import ContentComponent from "./Content";
import { INavItemProp, NavComponent } from "./Navigations";

const Root = () => {
  const navItems: INavItemProp[] = [
    {
      title: "Homepage",
      path: "Homepage",
    },
    {
      title: "KYC",
      path: "Kyc",
    },
    {
      title: "Sendout",
      path: "Sendout",
    },
    {
      title: "Payout",
      path: "Payout",
    },
  ];
  return (
    <div>
      <div>
        <NavComponent items={navItems} />
        <ContentComponent>
          <Outlet />
        </ContentComponent>
      </div>
    </div>
  );
};

export default Root;
