import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import state, { subscribe } from './Redux/state';
import reportWebVitals from "./reportWebVitals";
import { addMessage, addPost, updateNewMessageText, updateNewPostText } from "./Redux/state";

reportWebVitals();
const root = ReactDOM.createRoot(document.getElementById("root"));
let rerenderEntireTree = () => {
  root.render(
    <React.StrictMode>
      <App
        state={state}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
        addMessage={addMessage}
        updateNewMessageText={updateNewMessageText}
      />
    </React.StrictMode>
  );
};
rerenderEntireTree(state);

subscribe(rerenderEntireTree);

window.state = state


