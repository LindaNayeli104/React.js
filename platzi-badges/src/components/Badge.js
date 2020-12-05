import React from "react";

import confLogo from "../images/badge-header.svg";

class Badge extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>

        <div>
          <img src="" alt="Avatar" />
          <h1>
            Linda <br /> Abundis
          </h1>
        </div>

        <div>
          <p>Frontend Engineer</p>
          <p>@LindaAbundis</p>
        </div>

        <div>##platziconf</div>
      </div>
    );
  }
}

export default Badge;
