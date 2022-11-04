import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components//Header/Header";
import { Profile } from "./components/Profile/Profile";
import { Navigation } from "./components/Navigation/Navigation";
import { SidebarLeft } from "./components/SidebarLeft/SidebarLeft";
import { Messenger } from "./components/Messenger/Messenger";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { News } from "./components/News/News";
import { Friends } from "./components/Friends/Friends";
import { Music } from "./components/Music/Music";
import { Games } from "./components/Games/Games";
import { Settings } from "./components/Settings/Settings";
// import "./reset.css";

const App = ({state, dispatch}) => {
  const { profilePage, messengerPage } = state;
  // const {addPost} = addPost;
  // const { posts, dialogs, messages } = props.state;
    

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navigation />
        <SidebarLeft />
        <div className="app-wrapper__content">
          <Routes>
            <Route path="/profile" element={<Profile state={profilePage} dispatch={dispatch}/>} />
            
            <Route
              path="/messages/*"
              element={<Messenger state={messengerPage} dispatch={dispatch}/>}
            />
            <Route path="/news" element={<News />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/music" element={<Music />} />
            <Route path="/games" element={<Games />} />
            <Route path="settings" element={<Settings />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
