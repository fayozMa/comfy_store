import { useContext } from "react";
import { CartContext } from "../App";
function Cart() {
  const { cart, setCart } = useContext(CartContext);
  console.log(cart);

  return (
    <section className="max-w-[1088px] mx-auto py-20">
      <div className="border-b border-base-300 pb-5">
        <h2 className="text-3xl font-medium tracking-wider capitalize">
          Shopping Cart
        </h2>
      </div>
      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          {cart.length > 0 &&
            cart.map(function (value) {
              return (
                <div className="mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0">
                  <img
                    className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover"
                    src={value.data.attributes.image}
                  />
                  <div className="sm:ml-16 sm:w-48">
                    <h3 className="capitalize font-medium">
                      {value.data.attributes.title}
                    </h3>
                    <h4 className="mt-2 capitalize text-sm text-neutral-content">
                      {value.data.attributes.company}
                    </h4>
                    <p className="mt-4 text-sm capitalize flex items-center gap-x-2">
                      Color :{" "}
                      <span
                        className="badge badge-sm"
                        style={{ backgroundColor: value.color }}
                      ></span>
                    </p>
                  </div>
                  <div className="sm:ml-12">
                    <div className="form-control max-w-xs">
                      <label htmlFor="amount" className="label p-0">
                        <span className="label-text">Amount</span>
                      </label>
                      <select
                        className="mt-2 select select-base select-bordered select-xs"
                        name="amount"
                        id="amount"
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                      </select>
                    </div>
                    <button className="mt-2 link link-primary link-hover text-sm">
                      remove
                    </button>
                  </div>
                  <p className="font-medium sm:ml-auto">
                    ${value.data.attributes.price}
                  </p>
                </div>
              );
            })}
        </div>
        <div className="lg:col-span-4 lg:pl-4">
          <div className="card bg-base-200">
            <div className="card-body">
              <p className="flex justify-between text-xs border-b border-base-300 pb-2">
                <span>Subtotal</span>
                <span className="font-medium">$564</span>
              </p>
              <p className="flex justify-between text-xs border-b border-base-300 pb-2">
                <span>Shipping</span>
                <span className="font-medium">$564</span>
              </p>
              <p className="flex justify-between text-xs border-b border-base-300 pb-2">
                <span>Tax</span>
                <span className="font-medium">$564</span>
              </p>
              <p className="flex justify-between text-sm mt-4 pb-2">
                <span>Order Total</span>
                <span className="font-medium">$456</span>
              </p>
            </div>
          </div>
          <a className="btn btn-primary btn-block mt-8 uppercase" href="/checkout">proceed to checkout</a>
        </div>
      </div>
    </section>
  );
}

export default Cart;
