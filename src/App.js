import React from "react";
import "./App.css";
import MainContainer from "./components/MainContainer";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import Groups from "./components/Groups";
import Users from "./components/Users";
import ChatArea from "./components/ChatArea";
import CreateGroups from "./components/CreateGroups";
import { useSelector } from "react-redux";
function App() {
  const lightTheme = useSelector((state) => state.themeKey);
  return (
    <div className={"App" + (lightTheme ? "" : "-dark")}>
      {/* <MainContainer /> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="app" element={<MainContainer />}>
          <Route path="welcome" element={<WelcomePage />}></Route>
          <Route path="chat" element={<ChatArea />}></Route>
          <Route path="users" element={<Users />}></Route>
          <Route path="groups" element={<Groups />}></Route>
          <Route path="create-groups" element={<CreateGroups />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
