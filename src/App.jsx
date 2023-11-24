import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import ToggleButton from "./components/ToggleButton";
// here you have to import the provider not the context.
import ThemeContextProvider from "./context/ThemeContext";
import AuthContextProvider from "./context/AuthContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookList />
          <ToggleButton />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
