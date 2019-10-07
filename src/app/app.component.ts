import { Component, ViewChild, OnInit, EventEmitter } from '@angular/core';
import { CockpitComponent } from './cockpit/cockpit.component';
import { DataService } from './data.service';
import * as settings from './app-settings';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]

})

export class AppComponent {
  onError = new EventEmitter<{ errorName: string, lineIndex: number, indexOfAddress?: number }>();
  private _fileResult: string;
  private _pc: number;
  private _acc: number;
  private _wrongValue = false;
  private _wrongInputValue = false;
  private _showLoadButton: boolean = false;
  private _stop: boolean = false;
  @ViewChild(CockpitComponent) private cockpit: CockpitComponent;


  public mailboxes: { value: number, isActive: boolean }[] = [];
  constructor(private dataService: DataService) {
    dataService.accumulator.subscribe((newAccumulator: number) => { this._acc = newAccumulator });
  }

  ngOnInit() {
    this.mailboxes = this.dataService.mailboxes;
    this._pc = 0;
    this._acc = 0;
    this.reset();
  }

  assembleToRAM() {
    this.reset();
    this.dataService.cleanMailboxes(); // necessary, if values have been modified!
    this.cockpit.checkProgramValues();
    this.dataService.updateMailboxes();
  }


  run() {
    var timer;
    this.reset();
    this._stop = false;
    var check = () => {
      let stop = this.step();
      if (stop || this._stop) {
        clearInterval(timer);
      }
    }
    timer = setInterval(check, settings.CHANGE_TIME);
  }


  step() {
    // if (this._pc === 0) this.assembleToRAM();
    this._pc = this.cockpit.pc = this.dataService.programCounter;
    var instruction = this.dataService.mailboxes[this._pc].value;
    var codeType = Math.floor(instruction / 100);
    var mailboxData = instruction % 100;
    if (this._pc != 0) for (let mailbox in this.dataService.mailboxes) this.dataService.mailboxes[mailbox].isActive = false;
    this.dataService.highlightMailbox(this._pc);


    switch (codeType) {

      case 1:
        if (typeof this.dataService.mailboxes[mailboxData].value === 'undefined') {
          this.cockpit.onError.emit({ errorName: 'AddressError_Read', lineIndex: 0, indexOfAddress: mailboxData })
          this.reset();
          return true;
        } else {
          this.dataService.setAccumulator(this._acc + this.dataService.mailboxes[mailboxData].value);
          break;
        }

      case 2:
        if (typeof this.dataService.mailboxes[mailboxData].value === 'undefined') {
          this.cockpit.onError.emit({ errorName: 'AddressError_Read', lineIndex: 0, indexOfAddress: mailboxData })
          this.reset();
          return true;
        } else {
          this.dataService.setAccumulator(this._acc - this.dataService.mailboxes[mailboxData].value);
          break;
        }

      case 3:
        this.dataService.mailboxes[mailboxData].value = this._acc;
        break;

      case 5:
        if (typeof this.dataService.mailboxes[mailboxData].value === 'undefined') {
          this.cockpit.onError.emit({ errorName: 'AddressError_Read', lineIndex: 0, indexOfAddress: mailboxData })
          this.reset();
          return true;
        } else {
          this.dataService.setAccumulator(this.dataService.mailboxes[mailboxData].value);
          break;
        }

      case 6:
        this.dataService.programCounter = mailboxData;
        this._pc = mailboxData;
        break;

      case 7:
        if (this._acc === 0) {
          this.dataService.programCounter = mailboxData;
        } else {
          this.dataService.programCounter = ++this._pc;
        }
        break;

      case 8:
        if (this._acc >= 0) {
          this.dataService.programCounter = mailboxData;
        } else {
          this.dataService.programCounter = ++this._pc;
        }
        break;

      case 9:
        switch (instruction) {

          case 901:
            if (this.cockpit.checkInputValues()) {
              if (!(typeof this.dataService.finalInputs[this.dataService.inputIndex] === 'undefined')) {
                this.dataService.setAccumulator(this.dataService.finalInputs[this.dataService.inputIndex]);
                this.dataService.inputIndex++;
              } else {
                this._wrongInputValue = true;
              }

            } else {
              this._wrongInputValue = true;
            }
            break;

          case 902:
            this.cockpit.outputValues += this._acc + '\n';
            break;
        }
        break;

      default:
        this._wrongValue = true;
        break;
    }
    if (instruction === 0) {
      this._wrongValue = false;
      this._stop = true;
      return true;
    }

    if (!(5 < codeType && codeType < 9)) {
      this.dataService.programCounter = ++this._pc;
    }

    if (typeof instruction === 'undefined' || this._wrongValue) {
      this.cockpit.onError.emit({ errorName: 'noValidInstruction', lineIndex: this._pc - 1 });
      this.reset();
      return true;
    }

    if (this._wrongInputValue) {
      this.cockpit.onError.emit({ errorName: 'ArgNaN_input', lineIndex: this.dataService.inputIndex + 1 });
      this.reset();
      return true;
    }

    return false;


  }

  fileUpload(event: any) {
    var file: File = event.target.files[0];
    var reader = new FileReader();
    reader.onload = (e) => {
      this._fileResult = reader.result;
      this.showLoadButton = true;
    };
    reader.readAsText(file);
  }

  processData() {
    console.log('--- FILE INPUT DATA ---');
    let fileInput: string[] = this._fileResult.split('\n$$$\n');
    this.cockpit.programValues = fileInput[0];
    this.cockpit.inputValues = fileInput[1];
    console.log(fileInput[0]);
    console.log(fileInput[1]);
    this.cockpit.addLineNumbers();

  }

  reset() {
    this.dataService.programCounter = this._pc = this.cockpit.pc = 0;
    this.dataService.setAccumulator(0);
    this.dataService.inputIndex = 0;
    this._wrongValue = false;
    this._wrongInputValue = false;
    this.cockpit.outputValues = "";
    for (let mailbox in this.dataService.mailboxes) this.dataService.mailboxes[mailbox].isActive = false;
    this.dataService.mailboxes[0].isActive = true;
  }

  resetButton() {
    this.reset();
    this._stop = true;
  }

  cleanMailboxes(){
    this.dataService.cleanMailboxes();
  }

  displayError(errorData: { errorName: string, lineIndex: number, indexOfAddress?: number }) {
    switch (errorData.errorName) {
      case 'AddressError_Write':
        alert('Program Zeile ' + errorData.lineIndex + ': Kann nicht auf Mailbox ' + errorData.indexOfAddress + ' speichern!');
        break;

      case 'AddressError_Read':
        alert('Kann nicht von Mailbox ' + errorData.indexOfAddress + ' lesen!');
        break;

      case 'ArgNaN':
        alert('Program Zeile ' + errorData.lineIndex + ': Argument ist keine Nummer!');
        break;

      case 'ArgNaN_input':
        alert('Input Zeile ' + errorData.lineIndex + ': Argument ist keine Nummer!');
        break;

      case 'ArgNaN_acc':
        alert('Accumulator: Argument ist keine Nummer!');
        break;

      case 'ArgNaN_pc':
        alert('PC: Argument ist keine Nummer!');
        break;

      case 'noValidInstruction':
        alert('Anweisung in Mailbox ' + errorData.lineIndex + ' ist nicht gültig!');
        break;

      default:
        alert('Fehler!');
        break;
    }
  }

  set showLoadButton(show: boolean) {
    this._showLoadButton = show;
  }

  get showLoadButton() {
    return this._showLoadButton;
  }
}
