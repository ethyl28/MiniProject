import { CSSProperties } from "react";

interface IContentProps {
    children: React.ReactNode;
}

const ContentComponent = (props: IContentProps) => {
    const { children } = props;
    const contentStyle: CSSProperties = {
      padding: "20px 20px",
      width: "100%",
      height: "100vh",
    };
    return <div style={contentStyle}>{children}</div>;
  };
  
  export default ContentComponent;