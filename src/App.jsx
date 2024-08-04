import Navigation from "./components/Header/Navigation/Navigation";
import Login from "./components/Form/LogIn";
import Card from "./components/MainPage/Card/Card";
import { DataProvider } from "./contexts/context";
import ActionAreaCard from "./components/MainPage/Card/Card";
import "./app.css";
import { useContext, useState } from "react";
import UserContext, { UserContextProvider } from "./contexts/userContext";
import AppPagination from "./components/pagination/Pagination";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState();
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  return (
    // <UserContextProvider>
    //   <DataProvider>
    //     {isLoggedIn ? (
    //       <div className="wrapper" id="wrapper">
    //         <Navigation />
    //         <ActionAreaCard />
    //       </div>
    //     ) : (
    //       <Login onLoginSuccess={() => setIsLoggedIn(true)} />
    //     )}
    //     {/* <TestButton /> */}
    //   </DataProvider>
    // </UserContextProvider>
    <DataProvider>
      <div className="wrapper" id="wrapper">
        <Navigation />
        <ActionAreaCard />
        <AppPagination />
        {/* <AppPagination /> */}
      </div>
    </DataProvider>
  );
}

export default App;
