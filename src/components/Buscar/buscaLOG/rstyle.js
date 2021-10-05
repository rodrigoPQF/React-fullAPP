import styled from "styled-components";

export const Result = styled.div`
  width: 400px;
  height: 300px;
  border: 4px black;
  overflow: scroll;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  margin-left: 65%;
  margin-top: 5%;
  position: absolute;

  span {
    font-weight: 700;
    font-size: 18px;
  }
  li {
    list-style-type: none;
  }

  .linha {
    border-bottom: 3px black;
  }
`;

export const Ul = styled.ul`
  border-bottom: 3px solid black;
`;
