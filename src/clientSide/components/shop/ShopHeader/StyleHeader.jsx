import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-wrap: wrap;
  padding: 0% 10%;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  background-color: #f5f5f5;
  align-items: center;
  margin-bottom: 50px;

  img {
    width: 150px;
    height: 22.83px;
  }
  form {
    background: #ffffff;
    padding: 0.7%;
    border-radius: 8px;
    display: flex;
    flex-wrap: nowrap;
    border: 2px solid black;
    button {
      margin-left: 15px;
      padding: 0px 20px;
      border: 2px solid #ff8b13;
      border-radius: 8px;
      background: #ff8b13;
      height: 40px;
      color: #ffffff;
      cursor: pointer;
    }

    button:hover {
      background-color: #cf4dce;
      transition: all 500ms;
    }
    input {
      height: 40px;
      border-radius: 8px;
      border: transparent;
      margin-left: 15px;
    }

    input::placeholder {
      font-size: 16px;
      font-weight: 400;
      color: #e0e0e0;
    }

    input:focus {
      outline: 0;
    }
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
`;
