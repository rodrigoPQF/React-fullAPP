import { useEffect, useState } from "react";
import Log from "../../api/buscaLOG";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { DivForm } from "./style";
import Resultado from "./resultado";

const schemas = yup
  .object({
    inputQUERY: yup.string().required("* Campo Logradouro é obrigatório"),
    inputCITY: yup
      .string()
      .typeError("Ops ! Apenas letras ...")
      .required("* Campo Cidade é obrigatório"),
  })
  .required();

export function AskLOG() {
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [query, setQuery] = useState("");
  const [erro, setErro] = useState(false);

  useEffect(() => {
    console.log(query, "oiii");
    console.log(isNaN(query));
    for (let i = 0; i < query.length; i++) {
      console.log(query[i]);
      if (isNaN(query[i]) === false) {
        setErro(true);
      } else {
        setErro(false);
      }
    }
  }, [query]);

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
                <p>{errors.inputQUERY?.message}</p>
                <p>{erro && <p>Não é permitido números no logradouro</p>}</p>
                {console.log(erro)}

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
                      <option selected="Selecionar">Selecionar</option>
                      <option value="AC">AC</option>
                      <option value="AL">AL</option>
                      <option value="AP">AP</option>
                      <option value="AM">AM</option>
                      <option value="BA">BA</option>
                      <option value="CE">CE</option>
                      <option value="DF">DF</option>
                      <option value="ES">ES</option>
                      <option value="GO">GO</option>
                      <option value="MA">MA</option>
                      <option value="MT">MT</option>
                      <option value="MS">MS</option>
                      <option value="MG">MG</option>
                      <option value="PA">PA</option>
                      <option value="PB">PB</option>
                      <option value="PR">PR</option>
                      <option value="PE">PE</option>
                      <option value="PI">PI</option>
                      <option value="RJ">RJ</option>
                      <option value="RN">RN</option>
                      <option value="RS">RS</option>
                      <option value="RO">RO</option>
                      <option value="RR">RR</option>
                      <option value="SC">SC</option>
                      <option value="SP">SP</option>
                      <option value="SE">SE</option>
                      <option value="TO">TO</option>
                    </select>
                  </div>
                  <div className="cutSelect"></div>
                  <label htmlFor="estado" className="placeholder">
                    Cidade:
                  </label>
                </div>
                <p>{errors.inputCITY?.message}</p>
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
                  }}
                />
              </form>
            </DivForm>

            {data ? <Resultado data={data} /> : <div></div>}
          </>
        );
      }}
    </Log>
  );
}
