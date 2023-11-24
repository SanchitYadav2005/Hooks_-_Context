import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import ToggleButton from "./components/ToggleButton";
// here you have to import the provider not the context.
import ThemeContextProvider from "./context/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <BookList />
        <ToggleButton/>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
