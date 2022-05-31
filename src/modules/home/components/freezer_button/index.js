import React from "react";

import "./index.css";

function FreezerButton({ className, onClick, nick, index }) {
  let btClassName = className;
  const hasNick = nick && nick != "-1";

  const showBottomSheet = () => {
    let container = document.querySelector("#bottomSheetContainer");
    let bottomSheet = document.querySelector(
      "#bottomSheetContainer #bottomSheet"
    );

    container.classList.add("active");
    setTimeout(() => {
      bottomSheet.classList.add("active");
    }, 1);

    if (onClick) {
      onClick(index);
    }
  };

  let nickText = "";

  if (hasNick) {
    nickText = nick;
    btClassName += " withNick";
  } else {
    nickText = "VAZIO";
  }

  return (
    <button onClick={showBottomSheet} className={btClassName}>
      <b>{nickText}</b>
    </button>
  );
}

export default FreezerButton;
