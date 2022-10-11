import "./App.css";
import {Footer} from "./components/Footer/Footer";
import {Header} from "./components//Header/Header";
import {Profile} from "./components/Profile/Profile";
import {Navigation} from "./components/Navigation/Navigation";
import { SidebarLeft } from "./components/SidebarLeft/SidebarLeft";
// import "./reset.css";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header/>
      <Navigation/>
      <SidebarLeft/>
      <Profile/>
      <Footer/>
    </div>
  );
};


export default App;
