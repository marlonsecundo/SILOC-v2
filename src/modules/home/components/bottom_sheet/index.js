import React from "react";

function BottomSheet() {
  const hideBottomSheet = () => {
    let container = document.querySelector("#bottomSheetContainer");
    let bottomSheet = document.querySelector(
      "#bottomSheetContainer #bottomSheet"
    );

    bottomSheet.classList.remove("active");

    setTimeout(() => {
      container.classList.remove("active");
    }, 400);
  };

  return (
    <div onClick={hideBottomSheet} id="bottomSheetContainer">
      <div id="bottomSheet">
        <a href="#">Adicionar Cadáver</a>
        <a href="#">Remover Cadáver</a>
      </div>
    </div>
  );
}

export default BottomSheet;
