import { createContext, useContext } from "react";


// Context for sharing the list of items and cart state across the app.
// The variable name is capitalized to conform with JSX requirements: components
// (including Context.Provider) must start with an uppercase letter, otherwise
// React treats them as HTML tags and throws an error that results in a blank
// page.
const ListItemsContext = createContext();

export default ListItemsContext;
















