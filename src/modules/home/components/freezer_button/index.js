import React from "react";

function FreezerButton({ className }) {
  const showBottomSheet = () => {
    let container = document.querySelector("#bottomSheetContainer");
    let bottomSheet = document.querySelector(
      "#bottomSheetContainer #bottomSheet"
    );

    container.classList.add("active");
    setTimeout(() => {
      bottomSheet.classList.add("active");
    }, 1);
  };

  return (
    <button onClick={showBottomSheet} className={className}>
      <b>VAZIO</b>
    </button>
  );
}

export default FreezerButton;
