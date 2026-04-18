import { useCart } from "../recoil/cartState";

export default function Cart() {
  const { cart, increase, decrease, getTotal } = useCart();

  return (
    <div>
      <h2>Giỏ hàng</h2>

      {cart.map((item) => (
        <div key={item.id}>
          <span>
            {item.name} - {item.price}$ x {item.qty}
          </span>
          <button onClick={() => increase(item.id)}>+</button>
          <button onClick={() => decrease(item.id)}>-</button>
        </div>
      ))}

      <h3>Tổng: {getTotal()}$</h3>
    </div>
  );
}
