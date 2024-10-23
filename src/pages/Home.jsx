import React, { useEffect, useState } from "react";
import { http } from "../axios";
import { Link, useNavigate } from "react-router-dom";
function Home() {
  const [products, setproducts] = useState([]);
  useEffect(() => {
    http
      .get("products?featured=true")
      .then((data) => {
        if (data.status == 200) {
          setproducts(data.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const navigate = useNavigate();
  function handleRedirect(id) {
    navigate(`/products/${id}`);
  }
  return (
    <div className="max-w-[1088px] mx-auto">
      <div className="hero flex  mt-10">
        <div className="hero--text">
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
            We are changing the way people shop
          </h1>
          <p className="mt-8 max-w-lg text-lg leading-8 mb-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
            repellat explicabo enim soluta temporibus asperiores aut obcaecati
            perferendis porro nobis.
          </p>
          <button
            className="btn btn-primary"
            onClick={() => navigate("/products")}
          >
            Our Products
          </button>
        </div>
        <div className="carousel carousel-center bg-neutral rounded-box max-w-md space-x-4 p-4">
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
              className="rounded-box"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
              className="rounded-box"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
              className="rounded-box"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
              className="rounded-box"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
              className="rounded-box"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
              className="rounded-box"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
              className="rounded-box"
            />
          </div>
        </div>
      </div>
      <div className="mt-20">
        <h1 className="text-3xl font-medium tracking-wider capitalize mb-5">
          Featured Products
        </h1>
        <hr />
        <div className="flex gap-5 mt-10">
          {products.length > 0 &&
            products.map((product) => {
              return (
                <Link to={`/products/${product.id}`}
                  className="card w-full shadow-xl hover:shadow-2xl transition duration-300"
                  key={product.id}
                  onClick={() => handleRedirect(product.id)}
                >
                  <img
                    src={product.attributes.image}
                    className="rounded-xl h-64 md:h-48 w-full object-cover"
                  />
                  <div className="card-body items-center text-center">
                    <h3 className="card-title capitalize tracking-wider">{product.attributes.title}</h3>
                    <p className="text-secondary">${product.attributes.price}</p>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Home;
