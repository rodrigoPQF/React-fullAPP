import { useEffect, useState } from "react";
import Log from "../../api/buscaLOG";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { DivForm } from "./style";
import Resultado from "./resultado";

const schemas = yup
  .object({
    inputQUERY: yup
      .string()
      .typeError("Ops ! Apenas letras ...")
      .required("Campo obrigatorio"),
    inputCITY: yup
      .string()
      .typeError("Ops ! Apenas letras ...")
      .required("Campo obrigatorio"),
  })
  .required();

export function AskLOG() {
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [query, setQuery] = useState("");
  console.log(cidade, estado, query);

  function handleChange(evt) {
    setEstado(evt.target.value);
  }

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schemas) });

  return (
    <Log estado={estado} cidade={cidade} query={query}>
      {({ pegaLOG, data }) => {
        return (
          <>
            <DivForm>
              <form
                onSubmit={handleSubmit(pegaLOG)}
                autoComplete="off"
                className="forme"
              >
                <div className="title">Encontrar CEP </div>
                <div className="subtitle">
                  Vamos encontrar o CEP da sua localização!
                </div>

                <div className="input-container ic1">
                  <input
                    id="firstname"
                    className="input"
                    placeholder=""
                    {...register("inputQUERY")}
                  />

                  <div className="cut"></div>
                  <label htmlFor="firstname" className="placeholder">
                    Logradouro
                  </label>
                </div>
                <div className="input-container ic2">
                  <input
                    id="cidade"
                    className="input"
                    placeholder=""
                    {...register("inputCITY")}
                  />

                  <div className="cut2"></div>
                  <label htmlFor="cidade" className="placeholderCITY">
                    UF
                  </label>
                  <div className="custom-select">
                    <select value={estado} onChange={handleChange}>
                      <option value="AC">Acre</option>
                      <option value="AL">Alagoas</option>
                      <option value="AP">Amapá</option>
                      <option value="AM">Amazonas</option>
                      <option value="BA">Bahia</option>
                      <option value="CE">Ceará</option>
                      <option value="DF">Distrito Federal</option>
                      <option value="ES">Espírito Santo</option>
                      <option value="GO">Goiás</option>
                      <option value="MA">Maranhão</option>
                      <option value="MT">Mato Grosso</option>
                      <option value="MS">Mato Grosso do Sul</option>
                      <option value="MG">Minas Gerais</option>
                      <option value="PA">Pará</option>
                      <option value="PB">Paraíba</option>
                      <option value="PR">Paraná</option>
                      <option value="PE">Pernambuco</option>
                      <option value="PI">Piauí</option>
                      <option value="RJ">Rio de Janeiro</option>
                      <option value="RN">Rio Grande do Norte</option>
                      <option value="RS">Rio Grande do Sul</option>
                      <option value="RO">Rondônia</option>
                      <option value="RR">Roraima</option>
                      <option value="SC">Santa Catarina</option>
                      <option value="SP">São Paulo</option>
                      <option value="SE">Sergipe</option>
                      <option value="TO">Tocantins</option>
                    </select>
                  </div>
                  <div className="cutSelect"></div>
                  <label htmlFor="estado" className="placeholder">
                    Cidade:
                  </label>
                </div>

                <input
                  type="submit"
                  placeholder="Enviar"
                  defaultValue="Enviar"
                  className="submit"
                  onClick={() => {
                    const singleValue = getValues("inputQUERY");
                    const single2Value = getValues("inputCITY");
                    setCidade(single2Value);
                    setQuery(singleValue);

                    console.log(data);
                  }}
                />
              </form>
            </DivForm>
            <p>{errors.inputCITY?.message}</p>

            {data ? <Resultado data={data} /> : <div></div>}
          </>
        );
      }}
    </Log>
  );
}
