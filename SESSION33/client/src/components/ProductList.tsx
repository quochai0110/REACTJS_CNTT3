import React from "react";
import bread from "../images/bread.jpg";
import hamburger from "../images/Hamburger.jpg";
import pizza from "../images/pizza (1).jpg";
import cake from "../images/Cake.jpg";
const data = [
  {
    id: 1,
    name: "Pizza",
    quantity: 5,
    price: 10,
    description: "Pizza1",
    image: pizza,
  },
  {
    id: 2,
    name: "Hamburger",
    quantity: 5,
    price: 15,
    description: "Hamburger1",
    image: hamburger,
  },
  {
    id: 3,
    name: "Bread",
    quantity: 5,
    price: 20,
    description: "Bread1",
    image: bread,
  },
  {
    id: 4,
    name: "Cake",
    quantity: 5,
    price: 30,
    description: "Cake",
    image: cake,
  },
];
export default function ProductList() {
  return (
    <div>
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h1 className="panel-title">List Products</h1>
          </div>
          <div className="panel-body" id="list-product">
            {data.map((item, index) => {
              return (
                <div>
                  <div className="media product">
                    <div className="media-left">
                      <a href="#">
                        <img
                          className="media-object"
                          src={item.image}
                          alt="pizza"
                        />
                      </a>
                    </div>
                    <div className="media-body">
                      <h4 className="media-heading">{item.name}</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. At dicta asperiores veniam repellat unde debitis
                        quisquam magnam magni ut deleniti!
                      </p>
                      <input
                        name="quantity-product-1"
                        type="number"
                        defaultValue={1}
                      />
                      <a data-product={1} className="price">
                         {item.price}USD{" "}
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
