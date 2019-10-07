import { Component, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements AfterViewInit{
  private _pc: number;
  private _acc: number;

  private _programValues: string = "";
  private _inputValues: string = "";
  private _outputValues: string = "";

  private _finalProgram: number[] = [];
  private _finalInputs: number[] = [];

  private _lineNumbers: string = "";

  private _heightProgram: number = 0;
  private _heightInOut: number = 0;
  

  constructor(private dataService: DataService) {
    dataService.accumulator.subscribe((newAccumulator: number) => { this.acc = newAccumulator; })
  }

  ngAfterViewInit(){
    this._heightProgram = this.calcHeightProgram();
    this._heightInOut = this.calcHeightInOut();
  }

  @Output() onError = new EventEmitter<{ errorName: string, lineIndex: number, indexOfAddress?: number }>();


scroll(){
var isSyncingLeftScroll = false;
var isSyncingRightScroll = false;
var leftDiv = document.getElementById('lineCounter');
var rightDiv = document.getElementById('ta-program');

leftDiv.onscroll = function() {
  if (!isSyncingLeftScroll) {
    isSyncingRightScroll = true;
    rightDiv.scrollTop = this.scrollTop;
  }
  isSyncingLeftScroll = false;
}

rightDiv.onscroll = function() {
  if (!isSyncingRightScroll) {
    isSyncingLeftScroll = true;
    leftDiv.scrollTop = this.scrollTop;
  }
  isSyncingRightScroll = false;
}
}
  addLineNumbers() {
    var iterator = 1;
    var array: number[] = [];

    var input: string[] = this._programValues.split('\n');
   // console.log(this._programValues);
   console.log(input.length);
    
    for(var i = 0; i < input.length; ++i){
      array.push(iterator);
      iterator= iterator - - 1;
    }
    console.log(array);
    this._lineNumbers = array.join('\n');
  //  console.log(this._lineNumbers);

  }

  onChangeACC(newVal) {
      if (newVal !== null) {
        this.dataService.setAccumulator(newVal);
        console.log('--- NEW VALUE ACC --- \n' + newVal);
      }
  }


  public checkProgramValues() { 
    let iterator = 0;
    let programCode: string[] = this.programValues.split('\n');
    console.log('--- PROGRAM DATA ---');

    for (let index in programCode) {
      let lineIndex: number = parseInt(index) + 1;
      if (programCode[index].indexOf('(') > -1) {
        let temporaryArray = programCode[index].split('(');
        temporaryArray = temporaryArray[1].split(') ');
        var indexOfAddress: number = parseInt(temporaryArray[0]);

        if (indexOfAddress > 99) {
          this.onError.emit({ errorName: 'AddressError_Write', lineIndex, indexOfAddress: indexOfAddress });
          break;
        } else if (!Number(temporaryArray[1]) && temporaryArray[1] !== '000') {
          this.onError.emit({ errorName: 'ArgNaN', lineIndex });
          break;
        } else {
          this._finalProgram[indexOfAddress] = parseInt(temporaryArray[1]);
          console.log('Adressbox ' + indexOfAddress + ': ' + this._finalProgram[indexOfAddress]);
        }
      } else {
        if (!Number(programCode[index]) && programCode[index] !== '000') {
          this.onError.emit({ errorName: 'ArgNaN', lineIndex });
          break;
        } else {
          this._finalProgram[iterator++] = parseInt(programCode[index]);
          console.log('Adressbox ' + index + ': ' + this._finalProgram[iterator - 1]);
        }
      }
    }
    this.dataService.finalProgram = this._finalProgram;
  }


  public checkInputValues() {
    this.dataService.finalInputs.splice(0, this.dataService.finalInputs.length);
    let iterator = 0;
    let inputCode: string[] = this.inputValues.split('\n');

    for (let index in inputCode) {
      console.log(inputCode[index]);
      let lineIndex: number = parseInt(index) + 1;
      if (!Number(inputCode[index])) {
        return false;
      } else {
        this._finalInputs[iterator++] = parseInt(inputCode[index]);
        console.log('Input ' + index + ': ' + this._finalInputs[iterator - 1]);
      }
    }
    this.dataService.finalInputs = this._finalInputs;
    return true;
  }

  calcHeightInOut(): number {
    if (window.innerWidth > 767) {
      var rowHeight = document.getElementById('left-row').offsetHeight;
      return (rowHeight * 0.2);
    } else {
      return 100;
    }
  }

  calcHeightProgram(): number {
    if (window.innerWidth > 767) {
      var rowHeight = document.getElementById('left-row').offsetHeight;
      return (rowHeight * 0.5);
    } else {
      return 300;
    }
  }

  set pc(pc: number) {
    this._pc = pc;
  }

  get pc() {
    return this._pc;
  }

  set acc(acc: number) {
    this._acc = acc;
  }

  get acc() {
    return this._acc;
  }

  set programValues(pv: string) {
    this._programValues = pv;
  }

  get programValues() {
    return this._programValues;
  }

  set inputValues(iv: string) {
    this._inputValues = iv;
  }

  get inputValues() {
    return this._inputValues;
  }

  set outputValues(ov: string) {
    this._outputValues = ov;
  }

  get outputValues() {
    return this._outputValues;
  }

  set lineNumbers(ln: string){
    this._lineNumbers = ln;
  }

  get lineNumbers(){
    return this._lineNumbers;
  }

  get heightProgram(){
    return this._heightProgram;
  }

  get heightInOut(){
    return this._heightInOut;
  }

}