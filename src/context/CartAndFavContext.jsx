import React, { useState } from 'react';

export const CartAndFavContext = React.createContext(null);

// type Props = {
//   children: React.ReactNode;
// };

export const CartAndFavProvider = ({ children }) => {
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [isAddedToFav, setIsAddedToFav] = useState(false);

  const fav = JSON.parse(localStorage.getItem('favProducts'));
  const cart = JSON.parse(localStorage.getItem('cartProducts'));

  const [cartProducts, setCartProducts] = useState(cart || []);
  const [favProducts, setFavProducts] = useState(fav || []);
  const [visibleFavProducts, setVisibleFavProducts] = useState(favProducts);

  // const [visibleTodos, setVisibleTodos] = useState(todos);

  return (
    <CartAndFavContext.Provider value={{
      cartProducts,
      setCartProducts,
      favProducts,
      setFavProducts,
      visibleFavProducts,
      setVisibleFavProducts,
      isAddedToCart,
      setIsAddedToCart,
      isAddedToFav,
      setIsAddedToFav,
    }}
    >
      {children}
    </CartAndFavContext.Provider>
  );
};