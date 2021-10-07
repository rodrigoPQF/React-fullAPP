import styled from "styled-components";

export const Result = styled.div`
  width: 400px;
  height: 300px;
  border: 4px black;
  border-radius: 10px;
  overflow: scroll;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  margin-left: 65%;
  margin-top: 5%;
  position: absolute;
  background-color: #52b788;
  ::-webkit-scrollbar {
    width: 20px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #081c15;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #081c12;
  }
  span {
    font-weight: 600;
    font-size: 18px;
    padding-left: 10px;

    font-family: Georgia, "Times New Roman", Times, serif;
  }
  li {
    list-style-type: none;
  }

  .linha {
    border-bottom: 2px #081c15;
  }
  span.title {
    display: flex;
    font-size: 20px;
    padding: 10px 10px 0px 0px;
    justify-content: center;
  }
`;

export const Ul = styled.ul`
  border-bottom: 1px solid #081c15;
  padding-top: 10px;
`;
