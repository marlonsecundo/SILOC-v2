import React, { useRef, useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";

import "./index.css";
import FreezerButton from "./components/freezer_button";
import BottomSheet from "./components/bottom_sheet";
import RegistrationNickPopup from "./components/registration_nick_popup";

const array7 = Array.from(Array(7).keys());

function Home() {
  const [registrationVisible, setRegistrationVisible] = useState(false);

  const selectedIndex = useRef(0);

  const [freezers, setFreezers] = useState(Array(21));

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

  return (
    <>
      {/* {freezers.map((f) => console.table(freezers))} */}
      <Header></Header>
      <div className="content">
        <h4>Câmaras Frias</h4>
        <h3>Necrotério</h3>
      </div>
      <div className="container">
        <div className="linha1">
          {freezers &&
            array7.map((i) => (
              <FreezerButton
                className={"btn btn" + (i + 1)}
                nick={freezers[i]}
                index={i}
                onClick={onFreezerClick}
              ></FreezerButton>
            ))}
        </div>

        <div className="linha2">
          {freezers &&
            array7.map((i) => (
              <FreezerButton
                className={"btn btn" + (i + 8)}
                nick={freezers[i + 7]}
                index={i + 7}
                onClick={onFreezerClick}
              ></FreezerButton>
            ))}
        </div>

        <div className="linha3">
          {freezers &&
            array7.map((i) => (
              <FreezerButton
                className={"btn btn" + (i + 15)}
                nick={freezers[i + 14]}
                index={i + 14}
                onClick={onFreezerClick}
              ></FreezerButton>
            ))}
        </div>
      </div>
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
