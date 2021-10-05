import { useState } from "react";
import Cep from "../../api/buscaCEP";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { DivForm } from "./style";

const schema = yup.object().shape({
  inputCEP: yup
    .number()
    .typeError("Apenas valores númericos !!!")
    .required("O Nome e obrigatorio"),
});

export function AskCEP() {
  const [cep, setCEP] = useState("");

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <Cep cep={cep}>
      {({ pegaDados, data }) => {
        return (
          <DivForm>
            <form
              onSubmit={handleSubmit(pegaDados)}
              autoComplete="off"
              className="forme"
            >
              <div className="title">Buscar CEP </div>
              <div className="subtitle">
                Vamos pesquisar as informações de um CEP!
              </div>

              <div className="input-container ic1">
                <input
                  id="firstname"
                  className="input"
                  placeholder=""
                  {...register("inputCEP")}
                />

                <div className="cut"></div>
                <label htmlFor="firstname" className="placeholder">
                  CEP
                </label>
              </div>
              <input
                type="submit"
                placeholder="Enviar"
                defaultValue="Enviar"
                className="submit"
                onClick={() => {
                  const singleValue = getValues("inputCEP");
                  setCEP(singleValue);
                }}
              />

              <p>{errors.inputCEP?.message}</p>
              {cep ? (
                <div className="resultadoP">
                  <div>
                    <span>Logradouro: </span>
                    {data.logradouro}
                  </div>
                  <div>
                    <span>Bairro: </span>
                    {data.bairro}
                  </div>
                  <div>
                    <span>Cidade: </span>
                    {data.localidade}
                  </div>
                  <div>
                    <span>Estado: </span>
                    {data.uf}
                  </div>
                </div>
              ) : (
                <div></div>
              )}
            </form>
          </DivForm>
        );
      }}
    </Cep>
  );
}
