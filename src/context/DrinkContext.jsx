import { createContext, useContext, useState } from "react";
import useLocalStorage from "../hooks/LocalStorage";

const DrinkContext = createContext();

export const DrinkProvider = ({ children }) => {
  const [favorites, setFavorites] = useLocalStorage("favorites", []);
  const [cart, setCart] = useLocalStorage("cart", []);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);

  const addToFavorites = (drink) => {
    if (!favorites.some((d) => d.idDrink === drink.idDrink)) {
      setFavorites([...favorites, drink]);
    }
  };

  const removeFromFavorites = (id) => {
    setFavorites(favorites.filter((drink) => drink.idDrink !== id));
  };

  const addToCart = (drink) => {
    if (!cart.some((d) => d.idDrink === drink.idDrink)) {
      setCart([...cart, drink]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((drink) => drink.idDrink !== id));
  };

  return (
    <DrinkContext.Provider
      value={{
        favorites,
        cart,
        isCartOpen,
        setIsCartOpen,
        isFavoritesOpen,
        setIsFavoritesOpen,
        addToFavorites,
        removeFromFavorites,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </DrinkContext.Provider>
  );
};

export const useDrinkContext = () => useContext(DrinkContext);
