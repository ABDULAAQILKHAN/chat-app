import Chat from "./components/chat";
import {Provider} from 'react-redux';
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Chat></Chat>
    </Provider>
  );
}

export default App;
