import { DivCard, DivContainer, DivContainerImg, DivInfo } from "../card/StyleCard";

export default function Card({
    AddToCart,
    FilteredSnacks
}) {
  return (

      <DivContainer>
        {FilteredSnacks.map((Snacks) => (
          <DivCard key={Snacks.id}>
            <DivContainerImg>
              <img src={Snacks.img} alt="product" />
            </DivContainerImg>
            <DivInfo>
              <h3>{Snacks.name}</h3>
              <span>{Snacks.category}</span>
              <p>Php {Snacks.price}</p>
              <button onClick={() => AddToCart(Snacks)}>
                To Add
              </button>
            </DivInfo>
          </DivCard>
        ))}
      </DivContainer>
  );
}