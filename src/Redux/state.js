let state = {
  profilePage: {
    posts: [
      { message: "Hello world!", amountLikes: "20" },
      { message: "Как же сейчас ПРОНЕСЛО.", amountLikes: "41" },
      { message: "I like webpack!", amountLikes: "25" },
      { message: "Hello world!", amountLikes: "20" },
      { message: "", amountLikes: 2 },
      { message: "", amountLikes: 3 },
      { message: "", amountLikes: 32 },
    ],
  },

  messengerPage: {
    dialogs: [
      { id: 1, name: "Shane Wright", content: "Привет!" },
      { id: 2, name: "Yuriy Surikat", content: "Canada" },
      { id: 3, name: "Petr Smart", content: "Good day!!!" },
      { id: 4, name: "Igor security", content: "ahahahha" },
      { id: 5, name: "Obi-Wan Kenobi", content: "angree birfs" },
      { id: 6, name: "John Snow", content: "What's up?" },
      { id: 7, name: "Dawson Mercer", content: "Are you sure?" },
    ],
    messages: [
      { id: 1, message: "Houston, State Texas" },
      { id: 2, message: "Seul" },
      { id: 3, message: "Boston, lalala" },
      { id: 4, message: "california, San-Jose" },
      { id: 5, message: "Hi !" },
    ],
  },
};

export default state;
