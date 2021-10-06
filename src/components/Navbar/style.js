import styled from "styled-components";

export const NavBar = styled.div`
  .navbar-menu {
    width: 100%;
    height: 80px;
    border-bottom: 1px;
    border-color: #59a96a;
    border-style: solid;
  }
  .menu-select {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding-top: 1%;
    gap: 10%;
  }
  .badge {
    padding-left: 30px;
  }
  .badge h1 {
    background-color: #59a96a;
    color: white;
    margin-left: 30px;
    padding: 5px;
    border-radius: 4px;
  }
  .select {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 60px;
    margin-top: 20px;
    font-size: large;
    font-weight: 550;
    font-size: 1em;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  }
  .menu-select div li {
    display: flex;
    justify-content: end;
    flex-direction: row;
  }
  .menu-select div li input {
    background-color: whitesmoke;
    height: 30px;
    width: 250px;
    border-radius: 5px;
  }
  .menu-select div li span button {
    background-color: whitesmoke;
    margin-left: 10px;
    border-radius: 5px;
    height: 30px;
    width: 80px;
  }
  div .input-label {
    width: 500px;
  }

  .test {
    text-decoration-line: none;
    color: black;
  }
`;

// Pallete Store
// #474A2C Rifle Green
// #636940 Dark Olive Green
// #59A96A Forest Green Crayola
// #0BDEAC Celadon
// #B4E7CE Magic Mint
