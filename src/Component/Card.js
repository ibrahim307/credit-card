import React, { Component } from "react";
import "../Component/Card.css";
import Puce from "../Component/puce.png";
import Master from "../Component/master.png";
class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputCod: "",
      inputThru: "",
      inputName: "",
      
    };
  }
  onChangeName = event => {
    const regex = /[^a-z\s]/gi;
    if (!event.target.value.match(regex) && event.target.value.length <= 20) {
      this.setState({
        inputName: event.target.value
      });
    }
  };
  
  
  onChangeCode = event => {
    const reg = (/[^0-9\s]/gi);
    if( !event.target.value.match(reg) && event.target.value.length<=19)
        {
           this.setState({
               inputCod: this.addSpace(event.target.value.replace(/[ ]/g,""))
               
           })
        
          }
  };
  addSpace = number => {
    let arr = [];
    for (let i = 0; i < number.length; i += 4) {
      arr.push(number.slice(i, i + 4));
    }

    return arr.join(" ");
  };
  onChangeDate=(event)=>{
   const regex=/[^0-9]/gi
    if(!event.target.value.match(regex) && event.target.value.length<=4 && event.target.value.slice(0,1)<=1 && event.target.value.slice(1,1)<=2){
    this.setState({
      inputThru:event.target.value.replace(/[/]/g,"") 
    })
  }
   
  }
  addSlach=(number)=>{
    
    let arr = [];
    for (let i = 0; i < number.length; i += 2) {
      arr.push(number.slice(i, i + 2));
    }
    return arr.join("/");
  };
  render() {
    return (
      <div>
        <div className="card">
          <h1 className="title">CREDIT CARD</h1>

          <div className="container">
            <img className="puce" src={Puce} alt="" />
            <p className="code">{this.state.inputCod.padEnd(16, "*")}</p>
            <div className="conatainer-validity">
              <div className="val-holder">
                <p className="pass">5322</p>
                <span className="holder" style={{ color: "White" }}>
                  {this.state.inputName.toUpperCase()}
                </span>
              </div>
              <div className="validity-numbers">
                <div className="validity">
                  <div className="validity-thru">
                    <span className="valid">
                      VALID<br></br>
                    </span>
                    <span className="valid">THRU</span>
                  </div>
                  <div className="tirer">></div>
                </div>

                <div className="validity-month">
                  <span className="month">MONTH/YEAR</span>
                  <span className="expire">{this.addSlach(this.state.inputThru.padEnd(4, "*"))}</span>
                </div>
              </div>
              <div>
                <img src={Master} alt=""></img>
              </div>
            </div>
          </div>
        </div>

        <form className="container-form">
          <br />
          <input
            type="text"
            value={this.state.inputName}
            onChange={this.onChangeName}          
            placeholder="enter a Name"
          />
          <br />
          <input
            type="text"
            placeholder="************"
            value={this.state.inputCod}
            onChange={this.onChangeCode}
          />
          <br />
          <input type="text"  value={this.state.inputThru} onChange={this.onChangeDate}/>
        </form>
      </div>
    );
  }
}
export default Card;
