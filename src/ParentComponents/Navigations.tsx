import { Box, Tab, Tabs } from "@mui/material";
import { CSSProperties, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export interface INavItemProp {
  title: string;

  path: string;
}

export interface INavProps {
  items: INavItemProp[];
}

const selectedTabStyle: CSSProperties = {};

export const NavComponent = (props: INavProps) => {
  const navigate = useNavigate();

  const location = useLocation();

  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          className="bg-red-700 top-0 fixed w-full overflow-hidden"
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {props.items.map((item, index) => (
            <Tab
              key={item.title}
              onClick={() => navigate(item.path)}
              aria-label="basic tabs example"
              style={{
                ...(location.pathname === item.path
                  ? selectedTabStyle
                  : { color: "white", borderColor: "white" }),
              }}
              label={item.title}
            />
          ))}
        </Tabs>
      </Box>
    </div>
  );
};
