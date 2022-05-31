import React from "react";

function FreezerButton({ className, onClick, nick, index }) {
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

  if (nick && nick != "-1") {
    nickText = nick;
  } else {
    nickText = "VAZIO";
  }

  return (
    <button onClick={showBottomSheet} className={className}>
      <b>{nickText}</b>
    </button>
  );
}

export default FreezerButton;
