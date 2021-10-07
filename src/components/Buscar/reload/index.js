import { faSync } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { AskCEP, AskLOG } from "..";

import { IconDiv, IconDiv2 } from "./style";

export function Reload(props) {
  const [reload, setReload] = useState(false);
  console.log(props);

  function handleClick() {
    if (reload === true) {
      setReload(false);
      console.log(reload);
    } else if (reload === false) {
      setReload(true);
      console.log(reload);
    }
  }

  return (
    <>
      {reload ? <AskCEP /> : <AskLOG />}

      {reload ? (
        <IconDiv>
          <div className="container">
            <div className="iconFa">
              <button onClick={handleClick}>
                <FontAwesomeIcon icon={faSync} className="icon" />
              </button>
              <span>Mudar modo de pesquisa</span>
            </div>
          </div>
        </IconDiv>
      ) : (
        <IconDiv2>
          <div className="iconFa">
            <button onClick={handleClick}>
              <FontAwesomeIcon icon={faSync} className="icon" />
            </button>
            <span>Mudar modo de pesquisa</span>
          </div>
        </IconDiv2>
      )}
    </>
  );
}
