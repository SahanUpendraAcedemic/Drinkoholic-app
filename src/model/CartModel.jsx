import { useDrinkContext } from "../context/DrinkContext";
import { FaTimes, FaTrash } from "react-icons/fa";

const CartModal = () => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart } = useDrinkContext();

  return (
    <div
      className={`fixed inset-1 bg-white bg-opacity-50 flex justify-center items-center transition-opacity ${isCartOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
    >
      <div className="bg-gray-800 p-6 rounded-lg w-96">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold text-gray-300">Shopping Cart</h2>
          <button onClick={() => setIsCartOpen(false)}>
            <FaTimes />
          </button>
        </div>
        <div className="mt-4 max-h-60 overflow-auto">
          {cart.length === 0 ? (
            <p className="text-gray-500 text-center">Your cart is empty.</p>
          ) : (
            cart.map((drink) => (
              <div
                key={drink.idDrink}
                className="flex justify-between items-center p-2 border-b"
              >
                <div className="flex items-center gap-2">
                  <img
                    src={drink.strDrinkThumb}
                    alt={drink.strDrink}
                    className="w-12 h-12 rounded-md"
                  />
                  <p className="text-sm">{drink.strDrink}</p>
                </div>
                <button
                  onClick={() => removeFromCart(drink.idDrink)}
                  className="text-red-500"
                >
                  <FaTrash />
                </button>
              </div>
            ))
          )}
        </div>
        <button
          className="mt-4 w-full bg-amber-300 text-white py-2 rounded-md"
          onClick={() => setIsCartOpen(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CartModal;
