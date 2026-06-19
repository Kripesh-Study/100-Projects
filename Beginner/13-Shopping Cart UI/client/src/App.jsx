import React, { act, useContext,useReducer } from 'react';
import Carts from './components/Carts';
import Summary from './components/Summary';
import Items from './components/Items';
import Nav from './components/Nav';
import ListItemsContext from './context/ItemsContext';

const App = () => {
  const listItems = [
    {
      id:0,
      item: "bag",
      price: 49.99,
      categories: "bag",
      img: "",
      quantity: 1,
    },
    {
      id:1,
      item: "watch",
      price: 149.99,
      categories: "watch",
      img: "",
      quantity: 1,
    },
    {
      id:2,
      item: "Coffee",
      price: 39.99,
      categories: "coffee",
      img: "",
      quantity: 1,
    },
    {
      id:3,
      item: "notebook",
      price: 19.99,
      categories: "notebook",
      img: "",
      quantity: 1,
    },
    {
      id:4,
      item: "headphone",
      price: 129.99,
      categories: "headphone",
      img: "",
      quantity: 1,
    },
    {
      id:5,
      item: "mobile",
      price: 599.99,
      categories: "mobile",
      img: "",
      quantity: 1,
    },
  ];

  const [cartsItem, dispatch] = useReducer(reduce, []);
  function reduce(state, action) {
    switch (action.type) {
      case "addProduct": {
        // Add a product to the cart or increase its quantity if it already exists.
        const existing = state.find((item) => item.id === action.id);
        if (existing) {
          return state.map((item) =>
            item.id === action.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        }
        return [...state, listItems[action.id]];
      }

      case "increase":
        // Same as addProduct – increase quantity of a specific item.
        return state.map((item) =>
          item.id === action.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      case "decrease": {
        // Decrease quantity for the item with this ID.
        return state.map((item) =>
          item.id === action.id
            ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
            : item
        );
      }
      case "deleteProduct":
        // Remove the cart item with this ID.
        return state.filter((item) => item.id !== action.id);
      case "reset":
        return [];
      default:  
        return state;
    }
  }

  return (
    <div className='bg-gray-100'>
        <ListItemsContext.Provider value={{listItems,cartsItem,dispatch}}>
        <Nav />
        <Items />
        <Carts />
        <Summary />
      </ListItemsContext.Provider>
    </div>
  );
};

export default App;


