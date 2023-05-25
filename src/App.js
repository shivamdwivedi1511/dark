import { Provider } from "react-redux";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import store from "./store/store";

function App() {
  return (
    <div className="bg-black text-white">
      <Provider store={store}>
        <Header />
        <MainContainer />
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
