import styled from "styled-components";

export const IconDiv = styled.div`
  div.iconFa {
    display: flex;
    justify-content: center;
    margin-top: 5px;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    align-self: center;
    position: relative;
  }
  div.iconFa span {
    font-size: 16px;
  }
  div.iconFa .icon {
    width: 18px;
    height: 18px;
  }
  div.iconFa span:hover {
    font-size: 18px;
    font-weight: 400;
  }
  div.iconFa .icon:hover {
    width: 28px;
    height: 28px;
    animation: icone 5s infinite;
  }

  @keyframes icone {
    50% {
      transform: rotate(360deg);
    }
  }
`;
export const IconDiv2 = styled.div`
  div.iconFa {
    display: flex;
    justify-content: center;
    margin-top: 415px;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    align-self: center;
  }
  div.iconFa span {
    font-size: 16px;
  }
  div.iconFa .icon {
    width: 18px;
    height: 18px;
  }
  div.iconFa span:hover {
    font-size: 18px;
    font-weight: 400;
  }
  div.iconFa .icon:hover {
    width: 28px;
    height: 28px;
    animation: icone 5s infinite;
  }

  @keyframes icone {
    50% {
      transform: rotate(360deg);
    }
  }
`;
