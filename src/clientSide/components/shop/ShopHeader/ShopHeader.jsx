import React from "react";
import { Header } from "../ShopHeader/StyleHeader";

function ShopHeader({ Snacks, setFilteredSnacks, setSnacksSearched }) {
  function dataInput(event) {
    setSnacksSearched(event.target.value);
    setFilteredSnacks(
      Snacks.filter(
        (item) =>
        item.name.toLowerCase().includes(event.target.value.toLowerCase()) ||
        item.category.toLowerCase().includes(event.target.value.toLowerCase())
    )
    );
  }

  function loadPage(event) {
    event.preventDefault();
  }
  return (
    <Header>
       <div className="col-lg-6 d-none d-lg-block">
          <a href="index.html" className="text-decoration-none">
            <h1 className="m-0 display-5 font-weight-semi-bold">
              <span className="text-primary font-weight-bold border px-3 mr-1">
                VARATILYO
              </span>
            </h1>
          </a>
        </div>

      <form>
        <input type="text" placeholder="search" onChange={dataInput} />
        <button onClick={(e) => loadPage(e)}>Search for</button>
      </form>
    </Header>
  );
}

export default ShopHeader;