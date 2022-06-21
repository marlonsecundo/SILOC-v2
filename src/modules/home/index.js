import React, { useEffect, useRef, useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";

import "./index.css";
import FreezerButton from "./components/freezer_button";
import BottomSheet from "./components/bottom_sheet";
import RegistrationNickPopup from "./components/registration_nick_popup";

function Home() {
  const [registrationVisible, setRegistrationVisible] = useState(false);
  const [search, setSearch] = useState("");

  const selectedIndex = useRef(0);

  const [freezers, setFreezers] = useState(Array(30).fill(""));

  const [freezersBySearch, setFreezersBySearch] = useState();

  const onAddClick = () => {
    setRegistrationVisible(true);
  };

  const onConfirmRegis = (nick) => {
    const newFreezers = [...freezers];

    newFreezers[selectedIndex.current] = nick;

    setFreezers(newFreezers);
    setRegistrationVisible(false);
  };

  const onRemoveCorpse = () => {
    const newFreezers = [...freezers];

    newFreezers[selectedIndex.current] = "";

    setFreezers(newFreezers);
    setRegistrationVisible(false);
  };

  const onCancelRegis = () => {
    setRegistrationVisible(false);
  };

  const onFreezerClick = (index) => {
    selectedIndex.current = index;
  };

  const onSearchInput = (text) => {
    setSearch(text);
  };

  useEffect(() => {
    const renderFreezers = freezers.map((i, index) => (
      <FreezerButton
        nick={freezers[index]}
        index={index}
        onClick={onFreezerClick}
      ></FreezerButton>
    ));

    setFreezersBySearch(
      renderFreezers.filter((e, index) => {
        if (search === "") return true;

        return freezers[index].includes(search);
      })
    );
  }, [search, freezers]);

  return (
    <>
      <Header onSearchInput={onSearchInput}></Header>
      <div className="content">
        <h4>Câmaras Frias</h4>
        <h3>Necrotério</h3>
      </div>
      <div className="freezers">{freezersBySearch}</div>
      <BottomSheet
        onRemoveClick={onRemoveCorpse}
        onAddClick={onAddClick}
      ></BottomSheet>
      <Footer></Footer>
      {registrationVisible && (
        <RegistrationNickPopup
          onConfirm={onConfirmRegis}
          onCancel={onCancelRegis}
        ></RegistrationNickPopup>
      )}
    </>
  );
}

export default Home;
