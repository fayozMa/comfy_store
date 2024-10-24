import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { http } from "../axios";
import { useContext } from "react";
import { CartContext } from "../App";
function Details() {
  const [product, setProduct] = useState([]);
  const [color, setColor] = useState("");
  const [count, setCount] = useState(1);
  const params = useParams();
  const { id } = params;
  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    http
      .get("products/" + id)
      .then((data) => {
        if (data.status == 200) {
          setProduct(data.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSetCart = (e) => {
    e.preventDefault();

    const data = {
      color: color,
      count: Number(count),
      id: product.id,
      data: product,
    };

    let copied = [...cart];

    let isExist = copied.find(function (c) {
      return c.id == data.id && color == c.color;
    });

    if (!isExist) {
      copied = [...cart, data];
    } else {
      copied = copied.map(function (value) {
        if (value.id == data.id && color == value.color) {
          value.count = Number(value.count);
          value.count += Number(data.count);
        }
        return value;
      });
    }
    setCart(copied);
    localStorage.setItem("cart", JSON.stringify(copied));
  };
  return (
    <section className="max-w-[1088px] mx-auto py-20">
      {product.id && (
        <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
          <img
            className="w-96 h-96 object-cover rounded-lg lg:w-full"
            src={product.attributes.image}
          />
          <div>
            <h1 className="capitalize text-3xl font-bold">
              {product.attributes.title}
            </h1>
            <h4 className="text-xl text-neutral-content font-bold mt-2">
              {product.attributes.company}
            </h4>
            <p className="mt-3 text-xl">${product.attributes.price}</p>
            <p className="mt-6 leading-8">{product.attributes.description}</p>
            <div className="mt-6">
              <h4 className="text-md font-medium tracking-wider capitalize">
                colors
              </h4>
              {product.attributes.colors.length > 0 &&
                product.attributes.colors.map((colorProduct) => {
                  return (
                    <span
                      id={colorProduct.id}
                      onClick={() => setColor(colorProduct)}
                      style={{
                        backgroundColor: colorProduct,
                        border:
                          color === colorProduct ? "2px solid black" : "none",
                      }}
                      className="badge w-6 h-6 mr-2 border-2 border-secondary cursor-pointer mt-2"
                    ></span>
                  );
                })}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label" htmlFor="amount">
                <h4 className="text-md font-medium -tracking-wider capitalize">
                  Amount
                </h4>
              </label>
              <select
                className="select select-secondary select-bordered select-md"
                value={count}
                id="amount"
                onChange={(e) => {
                  setCount(e.target.value);
                }}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
                <option>15</option>
                <option>16</option>
                <option>17</option>
                <option>18</option>
                <option>19</option>
                <option>20</option>
              </select>
            </div>
            <button onClick={handleSetCart} className="btn btn-secondary btn-md mt-10">
              ADD TO BAG
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Details;
