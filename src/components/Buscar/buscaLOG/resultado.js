import { Result, Ul } from "./rstyle";

function Resultado(props) {
  console.log(props);
  return (
    <Result>
      <div>
        {props.data.map((info) => (
          <Ul key={info.cep}>
            <li>
              <span>CEP: </span>
              {info.cep}
            </li>
            <li>
              <span>Bairro: </span>
              {info.bairro}
            </li>
            <li>
              <span>Logradouro: </span>
              {info.logradouro}
            </li>
            <li>
              <span>Localidade: </span>
              {info.localidade}
            </li>
            <br />
            <div className="linha"></div>
          </Ul>
        ))}
      </div>
    </Result>
  );
}
export default Resultado;
