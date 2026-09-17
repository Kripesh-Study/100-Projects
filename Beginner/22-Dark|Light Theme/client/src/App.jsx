import React, { useEffect, useState } from 'react';
import ThemeContext from "./components/ThemeContext"
import Nav from './components/Nav';
import Hero from './components/Hero';

const App = () => {

  const [theme, setTheme] = useState("light")

  useEffect(()=>{
    if(theme == "light"){
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }else{
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    }
    console.log(theme)
  },[theme])

  return (
   <ThemeContext value={{theme,setTheme}} >
      <Nav />
      <Hero />
   </ThemeContext>
  );
};

export default App;