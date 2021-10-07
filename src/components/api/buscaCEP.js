import React, { useState } from "react";
import PropTypes from "prop-types";

function Cep(props) {
  const [data, setData] = useState("");

  function getEnd() {
    fetch(`https://viacep.com.br/ws/${props.cep}/json/`)
      .then((resposta) => resposta.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return props.children({
    pegaDados: getEnd,
    data,
  });
}

Cep.prototype = {
  cep: PropTypes.string.isRequired,
};

export default Cep;
