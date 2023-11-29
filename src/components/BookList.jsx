import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { BookContext } from "../context/BookContext";

function BookList() {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { books } = useContext(BookContext);
  // this is deciding the theme if the isLightTheme is true then the theme will be light and all the properties that light state have theme will have all those properties otherwise it will have dark theme and have all the properties that the dark state have.
  const theme = isLightTheme ? dark : light;
  return (
    <div
      className="book-list"
      style={{ background: theme.bg, color: theme.syntax }}
    >
      <ul>
        {books.map((book) => (
          <li style={{ background: theme.ui }} key={book.id}>
            {book.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
