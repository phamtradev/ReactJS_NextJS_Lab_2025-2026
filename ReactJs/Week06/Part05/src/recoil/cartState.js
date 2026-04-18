import { atom, selector, useRecoilState, useRecoilValue } from "recoil";

export const cartState = atom({
  key: "part05CartState",
  default: [],
});

export const cartTotalState = selector({
  key: "part05CartTotalState",
  get: ({ get }) => {
    const cart = get(cartState);
    return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  },
});

export function useCart() {
  const [cart, setCart] = useRecoilState(cartState);
  const total = useRecoilValue(cartTotalState);

  const addToCart = (product) => {
    setCart((currentCart) => {
      const existingProduct = currentCart.find(
        (item) => item.id === product.id
      );

      if (!existingProduct) {
        return [...currentCart, { ...product, qty: 1 }];
      }

      return currentCart.map((item) =>
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      );
    });
  };

  const increase = (id) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decrease = (id) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const getTotal = () => total;

  return { cart, addToCart, increase, decrease, getTotal };
}
