import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
export class DataService {

    mailboxes: { value: number, isActive: boolean }[] = [];
    private _finalProgram: number[] = [];
    private _programCounter: number = 0;

    accumulator: Observable<number>;
    accumulatorSubject: Subject<number>;

    private _finalInputs: number[] = [];
    private _inputIndex: number = 0;

    constructor() {
        this.initializeMailboxes();
        this.accumulatorSubject = new Subject<number>();
        this.accumulator = this.accumulatorSubject.asObservable();
    }

    initializeMailboxes() {              //ngOnInit() wont't work here!
        for (let i = 0; i < 100; i++) {
            this.mailboxes.push({ value: 0, isActive: false });
        }
    }

    updateMailboxes() {
        for (let mailbox in this.mailboxes) {
            this.mailboxes[mailbox].value = this.finalProgram[mailbox];
        }
    }

    cleanMailboxes() {
        this.finalProgram.splice(0, this.finalProgram.length);
        for (let mailbox in this.mailboxes) {
            this.mailboxes[mailbox].value = this.finalProgram[mailbox];
        }
    }

    highlightMailbox(mailbox: number) {
        this.mailboxes[mailbox].isActive = true;
    }

    set programCounter(pc: number) {
        this._programCounter = pc;
    }

    get programCounter() {
        return this._programCounter;
    }

    setAccumulator(accValue: number) {
        this.accumulatorSubject.next(accValue);
    }

    set finalInputs(inp: number[]) {
        this._finalInputs = inp;
    }

    get finalInputs() {
        return this._finalInputs;
    }

    set inputIndex(ind: number) {
        this._inputIndex = ind;
    }

    get inputIndex() {
        return this._inputIndex;
    }

    set finalProgram(finalProgram: number[]) {
        this._finalProgram = finalProgram;
    }

    get finalProgram() {
        return this._finalProgram;
    }

}