import React, { Component } from 'react';
import '../Component/Card.css'
import Card from '../Component/Card'
import Puce from "../Component/puce.png"
import Master from "../Component/master.png"
function CarteCredit(){
return(
    
    <div className="card">
  
      <h1 className="title">CREDIT CARD</h1>
  
      <div className="container">

        <img className="puce" src={Puce} alt=""/>
        <p className="code">{this.state.inputName}</p>
        <div className="conatainer-validity">
          <div className="val-holder">
            <p className="pass">5322</p>
            <span className="holder">CARDHOLDER</span>
          </div>
          <div className="validity-numbers">
            <div className="validity">
              <div className="validity-thru">
                 <span className="valid">VALID<br></br></span>
                <span className="valid">THRU</span>
              </div>
              <div className="tirer">></div>

            </div>

            <div className="validity-month">
              <span className="month">MONTH/YEAR</span>
              <span className="expire">11/50</span>
            </div>

          </div>
          <div><img src={Master} alt=""></img></div>
        </div>
      </div>
    </div>
)
}
export default CarteCredit;