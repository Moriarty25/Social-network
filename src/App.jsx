import "./App.css";
import {Footer} from "./components/Footer/Footer";
import {Header} from "./components//Header/Header";
import {Profile} from "./components/Profile/Profile";
import {Navigation} from "./components/Navigation/Navigation";
import { SidebarLeft } from "./components/SidebarLeft/SidebarLeft";
import { Messages } from "./components/Messages/Messages";
import { Route, Routes, BrowserRouter } from "react-router-dom";
// import "./reset.css";

const App = () => {
  return ( 
  <BrowserRouter>
        <div className="app-wrapper">
          <Header/>
          <Navigation/>
          <SidebarLeft/>
          <div className="app-wrapper__content">
            <Routes>
              <Route  path="/profile" element={<Profile/>}/>
              <Route  path="/messages" element={<Messages/>}/>
            </Routes>
          </div>
          <Footer/>
        </div>
  </BrowserRouter>
  );
};


export default App;
