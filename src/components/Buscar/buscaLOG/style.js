import styled from "styled-components";

export const DivForm = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 40px;

  .forme {
    background-color: #2d6a4f;
    border-radius: 20px;
    box-sizing: border-box;
    height: 420px;
    padding: 20px;
    width: 320px;
    position: absolute;
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
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    gap: 30px;
    width: 100%;
  }
  .input-container .ic2 {
    padding-left: 30px;
  }

  .ic1 {
    margin-top: 40px;
    width: 280px;
  }

  .ic2 {
    margin-top: 30px;
    width: 280px;
  }

  .ic3 {
    margin-top: 0px;
    width: 50px;
    margin-left: 230px;
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
  }
  .select {
    background-color: #52b788;
    border-radius: 12px;
    border: 0;
    box-sizing: border-box;
    color: #081c15;
    font-size: 20px;
    height: 100%;
    outline: 0;
    width: 100%;
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
    width: 84px;
  }
  .cut2 {
    background-color: #2d6a4f;
    border-radius: 10px;
    height: 30px;
    left: 226px;
    position: absolute;
    top: -20px;
    transform: translateY(0);
    transition: transform 200ms;
    width: 47px;
  }
  .cutSelect {
    background-color: #2d6a4f;
    border-radius: 10px;
    height: 20px;
    left: 16px;
    position: absolute;
    top: -10px;
    transform: translateY(0);
    transition: transform 200ms;
    width: 85px;
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
  .placeholderCITY {
    color: #65657b;
    font-family: sans-serif;
    font-size: 12px;
    left: 240px;
    line-height: 12px;
    pointer-events: none;
    position: absolute;
    transform-origin: 0 50%;
    transition: transform 200ms, color 200ms;
    top: -8px;
  }

  .input:focus ~ .placeholder,
  .input:not(:placeholder-shown) ~ .placeholder {
    transform: translateY(-30px) translateX(10px) scale(0.75);
  }

  .input:not(:placeholder-shown) ~ .placeholder {
    color: #95d5b2;
  }
  .input:not(:placeholder-shown) ~ .placeholderCITY {
    color: #95d5b2;
  }

  .input:focus ~ .placeholder {
    color: #081c15;
  }

  .input:focus ~ .placeholderCITY {
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
    margin-top: 20px;
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
    color: #e58f65;
    font-size: 12px;
    font-weight: bold;
    font-style: italic;
  }
  .input2 {
    background-color: #52b788;
    border-radius: 12px;
    border: 0;
    box-sizing: border-box;
    color: #081c15;
    font-size: 18px;
    height: 100%;
    outline: 0;
    padding: 4px 20px 0;
    width: 60px;
  }

  .custom-select select {
    background-color: #52b788;
    color: black;
    padding-left: 5px;
    width: 85px;
    height: 50px;
    border-radius: 12px;
    border: none;
    appearance: none;
    font-size: 12px;
    font-weight: bold;
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
    appearance: button;
  }
  .custom-select select:focus,
  .custom-select select:hover {
    outline: none;
    border: 1px solid #2d6a4f;
  }

  .custom-select:hover::before {
    color: rgba(255, 255, 255, 0.6);
    background-color: rgba(255, 255, 255, 0.2);
  }

  div select option {
    padding: 30px;
    font-size: 14px;

    color: #081c15;
    scrollbar-color: black;
  }
`;
