import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";

import "./index.css";
import FreezerButton from "./components/freezer_button";
import BottomSheet from "./components/bottom_sheet";

function Home() {
  return (
    <>
      <Header></Header>

      <div className="content">
        <h4>Câmaras Frias</h4>
        <h3>Necrotério</h3>
      </div>

      <div className="container">
        <div className="linha1">
          <FreezerButton className={"btn btn1"}></FreezerButton>
          {/* <div className="circulo">
                    <button className="idcamara num1"><b>1</b></button>
                </div> */}
          <FreezerButton className={"btn btn2"}></FreezerButton>
          <FreezerButton className={"btn btn3"}></FreezerButton>
          <FreezerButton className={"btn btn4"}></FreezerButton>
          <FreezerButton className={"btn btn5"}></FreezerButton>
          <FreezerButton className={"btn btn6"}></FreezerButton>
          <FreezerButton className={"btn btn7"}></FreezerButton>
        </div>

        <div className="linha2">
          <button className="btn btn8">
            <b>VAZIO</b>
          </button>
          <button className="btn btn9">
            <b>VAZIO</b>
          </button>
          <button className="btn btn10">
            <b>VAZIO</b>
          </button>
          <button className="btn btn11">
            <b>VAZIO</b>
          </button>
          <button className="btn btn12">
            <b>VAZIO</b>
          </button>
          <button className="btn btn13">
            <b>VAZIO</b>
          </button>
          <button className="btn btn14">
            <b>VAZIO</b>
          </button>
        </div>

        <div className="linha3">
          <button className="btn btn15">
            <b>VAZIO</b>
          </button>
          <button className="btn btn16">
            <b>VAZIO</b>
          </button>
          <button className="btn btn17">
            <b>VAZIO</b>
          </button>
          <button className="btn btn18">
            <b>VAZIO</b>
          </button>
          <button className="btn btn19">
            <b>VAZIO</b>
          </button>
          <button className="btn btn20">
            <b>VAZIO</b>
          </button>
          <button className="btn btn21">
            <b>VAZIO</b>
          </button>
        </div>
      </div>

      <BottomSheet></BottomSheet>

      <Footer></Footer>
    </>
  );
}

export default Home;
