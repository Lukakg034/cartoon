// import { Card } from "@mui/material";
import Navigation from "./components/Header/Navigation/Navigation";
// import Search from "./components/Header/Navigation/Search/SearchField";
// import BaseButton from "./components/common/Button/BaseButton";
// import SignupButton from "./components/common/Button/SignupButton";
// import TestButton from "./components/common/Button/TestButton";
import { DataProvider } from "./contexts/context";
import ActionAreaCard from "./components/MainPage/Card/Card";
import DrawerNavigation from "./components/Header/Navigation/DrawerNavigation";
import { Box } from "@mui/material";
import "./app.css";

function App() {
  return (
    <>
      <DataProvider>
        <div className="wrapper" id="wrapper">
          <Navigation />

          {/* <VideoPlayer1 /> */}

          <ActionAreaCard />
        </div>
        {/* <Search />
        <BaseButton />
        <SignupButton /> */}
        {/* <TestButton /> */}
      </DataProvider>
    </>
  );
}

export default App;
