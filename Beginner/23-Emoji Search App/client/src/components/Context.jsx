import { createContext } from "react";


const Context = createContext({
    searchQuery:"",
    setSearchQuery:()=>{},
    setRecentlyUsed:()=>{},
    setEmojies:()=>{},
    recentlyUsed:"",
    emojies:""
})



export default Context;



