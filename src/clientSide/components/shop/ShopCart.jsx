import { useEffect, useState } from "react";
import Card from "./card/Card";
import ShopHeader from "./ShopHeader/ShopHeader";
import Cart from "./cart/Cart";

function ShopPage() {
  const [Snacks, setSnacks] = useState([]);
  const [SnacksCart, setSnacksCart] = useState([]);
  const [FilteredSnacks, setFilteredSnacks] = useState([]);
  const [SnacksResearched, setSnacksResearched] = useState("");
  const [searchActive, setSearchActive] = useState(false);

  function AddToCart(products) {
    setSnacksCart([SnacksCart, products]);
  }

  function deleteItemCart(products) {
    setSnacksCart(SnacksCart.filter((item) => item !== products));
  }

  function deleteAllItems() {
    setSnacksCart([]);
  }

  function setValueInputToVoid() {
    setSearchActive(false);
    setSnacksResearched("");
  }

  useEffect(() => {
    fetch("https://mini-project-2-server.cyclic.app/product")
      .then((response) => response.json())
      .then((response) => {
        setSnacks(response);
        setFilteredSnacks(response);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <ShopHeader
        Snacks={Snacks}
        setFilteredSnacks={setFilteredSnacks}
        setSnackResearched={setSnacksResearched}
        setSearchActive={setSearchActive}
      />
      <main>
        {SnacksResearched.length !== 0 ? (
          <>
            <h2 className="h2">
              Result:<p className="p">{SnacksResearched}</p>
            </h2>
            <div>
              <Card
                AddToCart={AddToCart}
                FilteredSnacks={FilteredSnacks}
                Snacks={Snacks}
                searchActive={searchActive}
                SnackResearched={SnacksResearched}
                setValueInputToVoid={setValueInputToVoid}
              />
              <Cart
                deleteItemCart={deleteItemCart}
                SnacksCart={SnacksCart}
                deleteAllItems={deleteAllItems}
              />
            </div>
          </>
        ) : (
          <div>
       
            <Card
              AddToCart={AddToCart}
              FilteredSnacks={FilteredSnacks}
              Snacks={Snacks}
              searchActive={searchActive}
              SnackResearched={SnacksResearched}
              setValueInputToVoid={setValueInputToVoid}
            />
            <Cart
              deleteItemCart={deleteItemCart}
              SnacksCart={SnacksCart}
              deleteAllItems={deleteAllItems}
            />
            </div>
           
        )}
      </main>
    </div>
  );
}

export default ShopPage;
