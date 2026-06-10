import { useEffect, useState } from "react"

const useFavouriteColor = (isFavourite) => {
    const [favouriteColors,setFavouriteColors] = useState([])
    useEffect(() => {
        fetch("http://127.0.0.1:2000/favourite")
            .then((res) => res.json())
            .then((data) => setFavouriteColors(data))
            .catch((err) => console.log(err))
    }, [isFavourite])
    return favouriteColors;
}



export default useFavouriteColor;