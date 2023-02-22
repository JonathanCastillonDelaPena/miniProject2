import React from "react";
import {
  Aside,
  DivCardShopping,
  DivCartName,
  DivEmptyCart,
  Section,
} from "../cart/StyleCart";

function Cart({ deleteItemCart, SnacksCart, deleteAllItems }) {
  let total = SnacksCart.reduce(
    (initialValue, SnacksValue) =>
    initialValue + SnacksValue.price,
    0
  );
  return (  
    <Aside>
      <DivCartName>
        <h3>Shopping cart</h3>
      </DivCartName>
      <Section>
        {SnacksCart.length === 0 ? (
          <DivEmptyCart>
            <h3>Your bag is empty</h3>
            <span>Add Items</span>
          </DivEmptyCart>
        ) : (
          SnacksCart.map((item) => (
            <DivCardShopping>
              <div className="imgCart">
                <img src={item.img} alt="product" />
              </div>
              <div>
                <h4>{item.name}</h4>
                <p>{item.category}</p>
              </div>
              <button
                className="btnRemoveCardCart"
                onClick={() => deleteItemCart(item)}
              >
                Remove
              </button>
            </DivCardShopping>
          ))
        )}
      </Section>
      {SnacksCart.length !== 0 && (
        <>
          <div className="divTotal">
            <span>Total</span>
            <p>Php {total.toFixed(2)}</p>
          </div>
          <button onClick={() => deleteAllItems()}>Remove All</button>
        </>
      )}
    </Aside>
  );
}

export default Cart;
