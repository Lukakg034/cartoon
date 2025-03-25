// import Navigation from "./components/Header/Navigation/Navigation";
// import Login from "./components/Form/LogIn";
// import Card from "./components/MainPage/Card/Card";
// import { DataProvider } from "./contexts/context";
// import ActionAreaCard from "./components/MainPage/Card/Card";
// import "./app.css";
// import { useContext, useState } from "react";
// import UserContext, { UserContextProvider } from "./contexts/userContext";
// import AppPagination from "./components/pagination/Pagination";
// import { VideoPlayer1 } from "./components/MainPage/ReactVideo";
// import { Container } from "@mui/material";
// import CartoonCards from "./components/cartoonCards";
// function App() {
//   // const [isLoggedIn, setIsLoggedIn] = useState();
//   const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
//   return (

//     // <UserContextProvider>
//     //   <DataProvider>
//     //     {isLoggedIn ? (
//     //       <div className="wrapper" id="wrapper">
//     //         <Navigation />
//     //         <AppPagination />
//     //       </div>
//     //     ) : (
//     //       <Login onLoginSuccess={() => setIsLoggedIn(true)} />
//     //     )}
//     //     {/* <TestButton /> */}
//     //   </DataProvider>
//     // </UserContextProvider>
//     // <DataProvider>
//     <>
//       {/* <Navigation /> */}
//       <div className="wrapper" id="wrapper">
//         {/* <VideoPlayer1 /> */}
//         <Container>
//           <CartoonCards />
//         </Container>
//         {/* <ActionAreaCard /> */}
//         {/* <AppPagination /> */}
//         {/* <AppPagination /> */}
//       </div>
//     </>
//     // </DataProvider>
//   );
// }

// export default App;

import { useState } from "react";
import { Container, Grid } from "@mui/material";
import CartoonCard from "./components/CartoonCard";
import CartoonEpisodes from "./components/CartoonEpisodes";
import db from "./db copyV005.json";
import "./App.css";

const App = () => {
  const [selectedCartoon, setSelectedCartoon] = useState(null);

  const handleCardClick = (cartoon) => {
    setSelectedCartoon(cartoon);
  };

  const handleBackClick = () => {
    setSelectedCartoon(null);
  };

  return (
    <Container>
      {selectedCartoon ? (
        <CartoonEpisodes cartoon={selectedCartoon} onBack={handleBackClick} />
      ) : (
        <Grid container spacing={4}>
          {db.map((cartoon) => (
            <CartoonCard
              key={cartoon.id}
              cartoon={cartoon}
              onClick={handleCardClick}
            />
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default App;
