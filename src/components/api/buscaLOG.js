import { useState } from "react";
import PropTypes from "prop-types";

function Log(props) {
  const [data, setData] = useState("");

  function getLog() {
    fetch(
      `https://viacep.com.br/ws/${props.estado}/${props.cidade}/${props.query}/json/`
    )
      .then((resposta) => resposta.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => console.log(err));
  }
  return props.children({
    pegaLOG: getLog,
    data,
  });
}
Log.prototype = {
  estado: PropTypes.string.isRequired,
  cidade: PropTypes.string.isRequired,
  query: PropTypes.string.isRequired,
};

export default Log;
