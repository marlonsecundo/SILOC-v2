import React, { useState } from "react";

import "./index.css";

function RegistrationNickPopup({ onConfirm, onCancel }) {
  const [nick, setNick] = useState("");

  return (
    <section className="registrationNickPopup">
      <div className="content">
        <label>Nick</label>
        <input
          value={nick}
          placeholder="Digite o nick do corpo"
          type={"text"}
          onChange={(e) => {
            setNick(e.target.value);
          }}
        ></input>

        <div className="buttons">
          <button className="confirmButton" onClick={() => onConfirm(nick)}>
            Confirmar
          </button>
          <button onClick={onCancel}>Cancelar</button>
        </div>
      </div>
    </section>
  );
}

export default RegistrationNickPopup;
