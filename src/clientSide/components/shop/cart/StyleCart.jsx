import styled from "styled-components";

export const DivCartName = styled.div`
  width: 100%;
  height: 65px;
  background: #ff8b13;
  border-radius: 8px 8px 3px 3px;
  display: flex;
  align-items: center;

  h3 {
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: #ffffff;
    margin-left: 6%;
  }
`;

export const Section = styled.section`
  background: #f5f5f5;
  border-radius: 0px 0px 10px 10px;
  display: flex;
  flex-direction: column;
  border-bottom: 4px solid #e0e0e0;
  margin-top: 5%;
  width: 100%;
`;

export const DivEmptyCart = styled.div`
  width: 100%;
  height: 180px;
  background: #f5f5f5;
  border-radius: 0px 0px 10px 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h3 {
    margin-bottom: 15px;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
  }
  span {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #828282;
  }
`;

export const DivCardShopping = styled.div`
  margin-bottom: 5%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 90%;
  height: 80px;
  border: 2px solid #e5e5e5;
  border-radius: 10px;

  margin-left: 5%;

  .imgCart {
    img {
      width: 70px;
      height: 70px;
    }
  }

  .btnRemoveCardCart {
    width: auto;
    height: auto;
  }
  .btnRemoveCardCart:hover {
    background-color: red;
    color: white;
  }
`;

export const Aside = styled.aside`
  border: 2px solid #f5f5f5;
  border-radius: 0px 0px 5px 5px;
  height: 100%;
  float:right;
  align-items: center;
  width: 25%;
  min-width: 320px;
  margin-right:20px;
  margin-top:13px;
  background: #f5f5f5;

  border: 2px solid #e5e5e5;

  .divTotal {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 30px;
    margin-bottom: 22px;
    padding: 10px;

    span {
      font-weight: 600;
      font-size: 18px;
      line-height: 24px;
    }
    p {
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      color: #828282;
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 95%;
    height: 60px;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    background: #e0e0e0;
    color: #828282;
    margin-bottom: 6%;
    cursor: pointer;
    :hover {
      background-color: red;
      color: #f5f5f5;
      transition: all 500ms;
    }
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;


