import Header from "./components/header/Header.jsx";
import Banner from "./components/banner/Banner.jsx";
import Tizers from "./components/tizers/Tizers.jsx";
import City from "./components/city/City.jsx";
import Hotels from "./components/hotels/Hotels.jsx";
import Trip from "./components/trip/Trip.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Tizers />
      <City />
      <Hotels />
      <Trip />
    </div>
  );
}

export default App;
