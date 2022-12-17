import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components//Header/Header";
import { Profile } from "./components/Profile/Profile";
import { Navigation } from "./components/Navigation/Navigation";
import { SidebarLeft } from "./components/SidebarLeft/SidebarLeft";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { News } from "./components/News/News";
import { Friends } from "./components/Friends/Friends";
import { Music } from "./components/Music/Music";
import { Games } from "./components/Games/Games";
import { Settings } from "./components/Settings/Settings";
import { MessengerContainer } from "./components/Messenger/MessengerContainer";
import { ProfileContainer } from "./components/Profile/ProfileContainer";
import { FriendsContainer } from "./components/Friends/FriendsContainer";
import { HeaderContainer } from "./components/Header/HeaderContainer";
// import "./reset.css";

const App = () => {

  // const {addPost} = addPost;
  // const { posts, dialogs, messages } = props.state;
    

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Navigation />
        <SidebarLeft />
        <div className="app-wrapper__content">
          <Routes>
            <Route path="/profile/*" element={<ProfileContainer />} />
            <Route path="/profile/:userId" element={<ProfileContainer />} />
            
            <Route
              path="/messages/*"
              element={<MessengerContainer/>}
            />
            <Route path="/news" element={<News />} />
            <Route path="/friends" element={<FriendsContainer />} />
            <Route path="/music" element={<Music />} />
            <Route path="/games" element={<Games />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
