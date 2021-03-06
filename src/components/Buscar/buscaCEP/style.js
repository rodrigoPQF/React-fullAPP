import styled from "styled-components";

export const DivForm = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 40px;

  .forme {
    background-color: #2d6a4f;
    border-radius: 20px;
    box-sizing: border-box;
    height: auto;
    padding: 20px;
    width: 320px;
  }

  .title {
    color: #eee;
    font-family: sans-serif;
    font-size: 36px;
    font-weight: 600;
    margin-top: 30px;
  }

  .subtitle {
    color: #eee;
    font-family: sans-serif;
    font-size: 16px;
    font-weight: 600;
    margin-top: 10px;
  }

  .input-container {
    height: 50px;
    position: relative;
    width: 100%;
  }

  .ic1 {
    margin-top: 40px;
  }

  .ic2 {
    margin-top: 30px;
  }

  .input {
    background-color: #52b788;
    border-radius: 12px;
    border: 0;
    box-sizing: border-box;
    color: #081c15;
    font-size: 18px;
    height: 100%;
    outline: 0;
    padding: 4px 20px 0;
    width: 100%;
    position: absolute;
  }

  .cut {
    background-color: #2d6a4f;
    border-radius: 10px;
    height: 20px;
    left: 20px;
    position: absolute;
    top: -20px;
    transform: translateY(0);
    transition: transform 200ms;
    width: 76px;
  }

  .cut-short {
    width: 50px;
    font-family: "Courier New", Courier, monospace;
    font-weight: bold;
  }

  .input:focus ~ .cut,
  .input:not(:placeholder-shown) ~ .cut {
    transform: translateY(8px);
  }

  .placeholder {
    color: #65657b;
    font-family: sans-serif;
    left: 20px;
    line-height: 14px;
    pointer-events: none;
    position: absolute;
    transform-origin: 0 50%;
    transition: transform 200ms, color 200ms;
    top: 20px;
  }

  .input:focus ~ .placeholder,
  .input:not(:placeholder-shown) ~ .placeholder {
    transform: translateY(-30px) translateX(10px) scale(0.75);
  }

  .input:not(:placeholder-shown) ~ .placeholder {
    color: #95d5b2;
  }

  .input:focus ~ .placeholder {
    color: #081c15;
  }

  .submit {
    background-color: #95d5b2;
    border-radius: 12px;
    border: 0;
    box-sizing: border-box;
    color: #081c15;
    cursor: pointer;
    font-size: 18px;
    height: 50px;
    margin-top: 38px;
    // outline: 0;
    text-align: center;
    width: 100%;
    font-weight: bold;
  }

  .submit:active {
    background-color: #081c15;
    color: #eee;
  }
  p {
    color: #a4133c;
    font-size: 1em;
    font-weight: 600;
  }
  .resultadoP {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: baseline;
    padding-top: 25px;

    color: #eee;
    font-size: large;
    font-weight: 600;
    background-color: #2d6a4f;
    border-radius: 20px;
    width: 320px;
    padding: 20px;
    margin-left: -20px;
  }
  .resultadoP span {
    color: #081c15;
  }
`;
