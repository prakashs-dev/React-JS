import { Header } from "./header";
import { LeftBar } from "./leftbar";
import { RightBar } from "./rightbar";
import  "./style.css";

export const App = () => {
  return (
    <div className="root-container">
      <Header />
      <div className="body">
        <LeftBar />
        <RightBar />
      </div>
    </div>
  );
};
