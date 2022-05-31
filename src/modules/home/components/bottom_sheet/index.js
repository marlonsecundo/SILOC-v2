import React from "react";

function BottomSheet({ onAddClick, onRemoveClick }) {
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
        <a href="#" onClick={onAddClick}>
          Adicionar Cadáver
        </a>
        <a href="#" onClick={onRemoveClick}>
          Remover Cadáver
        </a>
      </div>
    </div>
  );
}

export default BottomSheet;
