import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var str1 = '';
var cal = '';
var str2 = '';

class App extends Component {
    constructor(props){
        super(props);
    }
    numberClick(object){
        var number = object;
        let result = document.getElementById('result');
        if(cal=='') {
            str1 += number;
            result.innerText = str1;
        }
        else {
            str2 += number;
            result.innerText = str2;
        }
    }
    calClick(object) {
        if(cal==''&&str1!=''){
            cal += object;
            let result = document.getElementById('result');
            result.innerText =cal;}
        else {
            alert("不允许输入两个符号,不允许输入负数");
        }
    }
    clean() {
        str2 = str2.slice(0,0);
        str1 = str1.slice(0,0);
        cal = cal.slice(0,0);
        let result = document.getElementById('result');
        result.innerText='0';
    }

    del() {
        let result = document.getElementById('result');
        if(str2!=''&&result.innerText!=''){
            str2 = str2.slice(0,str2.length-1);
            alert(str2);
            result.innerText=str2;
        }
        if(result.innerText!=''&&cal!=''){
            cal = '';
            result.innerText=cal;
        }
        if(str1!=''){
            str1 = str1.slice(0,str1.length-1);
            result.innerText=str1;
        }
    }

    getResult() {
        let result = document.getElementById('result');
        var fin;
        if(cal==''&&str1!=''){
            result.innerText=str1;
        }
        if(cal!=''&&str2!=''){
            switch (cal){
                case "+":
                    fin= parseInt(str1)+ parseInt(str2);
                    break;
                case "-":
                    fin= (parseInt(str1)-parseInt(str2)).toString();
                    break;
                case "÷":
                    if(str2=='0'){
                        alert("除数不能为零");
                    }else
                        fin= (parseInt(str1)/parseInt(str2)).toString();
                    break;
                case "×":
                    fin= (parseInt(str1)*parseInt(str2)).toString();
                    break;
            }
            result.innerText = fin;
        }
        else
            result.innerText = str1;
    }
  render() {
    return (
      <div id={"root"} >
          <ul id={"middle"} >
              <li ><p id={"result"}>0</p></li>
              <li ><button id={"clear"} class={"onePointFive"} onClick={this.clean.bind(this)}>清空</button></li>
              <li ><button id={"delete"} class={"onePointFive"} onClick={this.del.bind(this)}>退格</button></li>
              <li ><button id={"equal"} class={"small"} onClick={this.getResult.bind(this)}>=</button></li>
              <li ><button id={"1"} class={"small"} onClick={this.numberClick.bind(this,"1")}>1</button></li>
              <li ><button id={"2"} class={"small"} onClick={this.numberClick.bind(this,"2")}>2</button></li>
              <li ><button id={"3"} class={"small"} onClick={this.numberClick.bind(this,"3")}>3</button></li>
              <li ><button id={"multiply"} class={"small"} onClick={this.calClick.bind(this,"×")}>×</button></li>
              <li ><button id={"4"} class={"small"} onClick={this.numberClick.bind(this,"4")}>4</button></li>
              <li ><button id={"5"} class={"small"} onClick={this.numberClick.bind(this,"5")}>5</button></li>
              <li ><button id={"6"} class={"small"} onClick={this.numberClick.bind(this,"6")}>6</button></li>
              <li ><button id={"divide"} class={"small"} onClick={this.calClick.bind(this,"÷")}>÷</button></li>
              <li ><button id={"7"} class={"small"} onClick={this.numberClick.bind(this,"7")}>7</button></li>
              <li ><button id={"8"} class={"small"} onClick={this.numberClick.bind(this,"8")}>8</button></li>
              <li ><button id={"9"} class={"small"} onClick={this.numberClick.bind(this,"9")}>9</button></li>
              <li ><button id={"plus"} class={"small"} onClick={this.calClick.bind(this,"+")}>+</button></li>
              <li ><button id={"point"} class={"double"}>.</button></li>
              <li ><button id={"0"} class={"small"} onClick={this.numberClick.bind(this,"0")}>0</button></li>
              <li ><button id={"minus"} class={"small"} onClick={this.calClick.bind(this,"-")}>-</button></li>
          </ul>
      </div>

    );
  }

}

export default App;
