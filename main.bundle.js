webpackJsonp([1,5],{

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, "h1, h3, h4 {\n    font-family: -apple-system, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n}\n\n.buttons{\n    margin-left: 30px;\n}\n\n.btn-lmc{\n    width: 100%;\n    margin-bottom: 5%;\n}\n\n#left-row{\n    padding-bottom: 10px;\n    border-bottom: 1px solid black;\n}\n\n#controls{\n    margin-top: 10px;\n}\n\nhr{\n    border-top: 1px solid #ccc;\n}\n\n@media (min-width: 992px){\n.col-md-1 {\n    width: 13%;\n}\n}\n\n\n\n@media (min-width: 768px){\n\nbody, .modal-body, .btn{\n    font-size: 16px;\n}\n\n.modal.in .modal-dialog {\n    width: 40%;\n}\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, ".h1, .h4,\nh1, h4 {\n    font-weight: 600;\n}\n\n.alignCenter{\n    text-align: center;\n    margin-bottom: 5px;\n}\n\ninput#inp-ac {\n    margin-bottom: 10px;\n}\n\ntextarea#ta-program, textarea#ta-input, textarea#ta-output, \ninput#inp-pc, input#inp-ac {\n    width: 100% !important;\n    resize: none;\n}\n\ntextarea#lineCounter{\n    border: none;\n    width: 30px;\n    text-align: right;\n    resize: none;\n}\n\nh4#programHeading{\n    margin-left: 15px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, ".input-group-addon {\n    min-width: 60px;\n    width: 60px !important;\n}\n\n.input-group {\n    padding-bottom: 5px;\n}\n\n.form-control {\n    width: 60px !important;\n}\n\n.active-class{\n    border-color: #66afe9;\n    outline: 0;\n    box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102,175,233,.6);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 154:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1>Little Man Computer\n        <button type=\"button\" class=\"btn btn-success\" aria-hidden=\"true\" data-toggle=\"modal\" data-target=\"#myModal\"> \n  <span class=\"glyphicon glyphicon-info-sign\" aria-hidden=\"true\"></span> Anleitung\n</button>\n    </h1>\n\n\n    <!-- Modal -->\n    <div class=\"modal fade bs-example-modal-lg\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n        <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n                    <h4 class=\"modal-title\" id=\"myModalLabel\">Anleitung</h4>\n                </div>\n                <div class=\"modal-body\">\n                    <h3>1. Instruction Set</h3>\n                    <div class=\"table-responsive\">\n                        <table class=\"table table-bordered table-striped\">\n                            <thead>\n                                <tr>\n                                    <th>Instruction</th>\n                                    <th>Numeric Code *</th>\n                                </tr>\n                                <tr>\n                            </thead>\n                            <tbody>\n                                <tr>\n                                    <td>ADD</td>\n                                    <td>1xx</td>\n                                </tr>\n                                <tr>\n                                    <td>SUBTRACT</td>\n                                    <td>2xx</td>\n                                </tr>\n                                <tr>\n                                    <td>STORE</td>\n                                    <td>3xx</td>\n                                </tr>\n                                <tr>\n                                    <td>LOAD</td>\n                                    <td>5xx</td>\n                                </tr>\n                                <tr>\n                                    <td>BRANCH (UNCONDITIONAL)</td>\n                                    <td>6xx</td>\n                                </tr>\n                                <tr>\n                                    <td>BRANCH IF ZERO</td>\n                                    <td>7xx</td>\n                                </tr>\n                                <tr>\n                                    <td>BRANCH IF ZERO OR POSITIVE</td>\n                                    <td>8xx</td>\n                                </tr>\n                                <tr>\n                                    <td>INPUT</td>\n                                    <td>901</td>\n                                </tr>\n                                <tr>\n                                    <td>OUTPUT</td>\n                                    <td>902</td>\n                                </tr>\n                                <tr>\n                                    <td>HALT</td>\n                                    <td>000</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                    * xx ist durch die gewünschte Mailbox zu ersetzen\n                    <br><br>\n\n                    <h3>2. Code-Eingabe</h3>\n                    Der Programcode ist in das entsprechende Textfeld oben rechts einzutragen. <br>\n                    Um direkt Werte auf die Speicherstellen zu speichern, werden runde Klammern verwendet.\n                    Um so beipielsweise 50 in Speicherstele 90 zu laden schreibt man: \n                    <code>(90) 50</code>\n                    <br><br>\n\n                    <h3>3. Ausführen eines Programms</h3>\n                    Um den zuvor in das Textfeld eingetragenen Code auszuführen, muss das Programm erst in den Speicher geladen werden.\n                    Dazu muss der Button <code>Assemble</code> gedrückt werden. Anschließend wird das Programm auf eine korrekte Syntax überprüft und es wird auf eventuell auftretende Fehler hingewiesen.\n                    Nun kann der Code mittels <code>Run</code> am Stück, oder mittels <code>Step</code> Schritt für Schritt ausgeführt werden. <br>\n                    Während der Laufzeit kann außerdem jederzeit der Accumulator \"manipuliert\" werden. <br>\n                    Um den Accumulator, den Program Counter und die Outputs zurückzusetzen, kann man <code>Reset</code> drücken. Vor jedem <code>Run</code> geschieht dies automatisch. <br>\n                    Um auch die Speicherplätze zu leeren, kann von <code>Reset RAM</code> Gebrauch gemacht werden.\n                    <br><br>\n\n                    <h3>4. Lesen aus einer Datei</h3>\n                    Der Programmcode für den Little Man Computer kann nicht nur von Hand eingegeben, sondern auch aus einer Datei eingelesen werden.\n                    Dafür wählt man den Button <code>File Input</code> und lädt mit <code>Load</code> den Inhalt der Datei in den LMC. <br>\n                    Die Dateien benötigen immer die Dateiendung .lmc, andernfalls werden können sie nicht eingelesen werden!\n                    <br><br>\n\n                    <hr id=\"#blackHR\">\n                    Dieser Little Man Computer entstand im Sommersemester 2017 im Rahmen einer studentischen Hilfstätigkeit bei Prof. Dr. Rafael Mayoral Malmström. <br>\n                    Zur Umsetzung wurde von OpenSource-Tools Gebrauch gemacht. \n                    Dies umfasst zum einen das JavaScript-Frontend-Framework <a target=\"blank\" href=\"https://angular.io/\">Angular</a> in Version 4 von Google und zum anderen <a target=\"blank\" href=\"https://www.typescriptlang.org/\">TypeScript</a> in Version 2.2.0 von Microsoft.\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Schließen</button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n\n    <div class=\"row\" id=\"left-row\">\n        <div class=\"col-sm-3\">\n            <app-cockpit (onError)=\"displayError($event)\"></app-cockpit>\n        </div>\n\n        <div class=\"col-sm-9\">\n            <app-mailbox-element *ngFor=\"let mbx of mailboxes; let i = index\" [mailbox]=\"mbx\" [id]=\"i\">\n            </app-mailbox-element>\n        </div>\n\n    </div>\n\n    <div class=\"row\" id=\"controls\">\n        <div class=\" col-md-1\">\n            <h4>Controls</h4>\n        </div>\n        <div class=\"col-md-1\">\n            <button type=\"button\" (click)=\"assembleToRAM()\" class=\"btn btn-default btn-lmc\">Assemble</button>\n        </div>\n        <div class=\"col-md-1\">\n            <button type=\"button\" (click)=\"run()\" class=\"btn btn-default btn-lmc\">Run</button>\n        </div>\n        <div class=\"col-md-1\">\n            <button type=\"button\" (click)=\"step()\" class=\"btn btn-default btn-lmc\">Step</button>\n        </div>\n        <div class=\"col-md-1\">\n            <button type=\"button\" (click)=\"resetButton()\" class=\"btn btn-default btn-lmc\">Reset</button>\n        </div>\n\n        <div class=\"col-md-1\">\n            <button type=\"button\" (click)=\"cleanMailboxes()\" class=\"btn btn-default btn-lmc\">Reset RAM</button>\n        </div>\n\n        <div class=\"col-md-1\">\n            <label class=\"btn btn-default btn-lmc\">\n         File Input <input type=\"file\" (change)=\"fileUpload($event)\" accept=\".lmc\" style=\"display: none;\">\n        </label>\n\n        </div>\n\n        <div class=\"col-sm-1 col-xs-12\">\n            <button type=\"button\" [disabled]=\"!showLoadButton\" (click)=\"processData(); showLoadButton=!showLoadButton\" class=\"btn btn-primary\">Load</button>\n        </div>\n\n    </div>"

/***/ }),

/***/ 155:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <h4 id=\"programHeading\">Program</h4>\n\n    <div class=\"col-sm-2 col-xs-2\">\n        <p class=\"alignCenter\">Line</p>\n        <textarea dir=\"rtl\" [ngStyle]=\"{'height.px': heightProgram}\" id=\"lineCounter\" [(ngModel)]=\"lineNumbers\" readonly></textarea>\n    </div>\n    <div class=\"col-sm-10 col-xs-10\">\n        <p class=\"alignCenter\">Code</p>\n        <textarea [ngStyle]=\"{'height.px': heightProgram}\" type=\"text\" id=\"ta-program\" [(ngModel)]=\"programValues\" (ngModelChange)=\"addLineNumbers();scroll()\"></textarea>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-sm-6\">\n        <h4>Inputs</h4>\n        <textarea [ngStyle]=\"{'height.px': heightInOut}\" type=\"text\" id=\"ta-input\" [(ngModel)]=\"inputValues\"></textarea>\n    </div>\n    <div class=\"col-sm-6\">\n        <h4>Outputs</h4>\n        <textarea [ngStyle]=\"{'height.px': heightInOut}\" type=\"text\" id=\"ta-output\" [(ngModel)]=\"outputValues\"></textarea>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-sm-6\">\n        <h4>PC</h4>\n        <input [(ngModel)]=\"pc\" type=\"number\" id=\"inp-pc\">\n    </div>\n    <div class=\"col-sm-6\">\n        <h4>Accumulator</h4>\n        <input [(ngModel)]=\"acc\" (ngModelChange)=\"onChangeACC($event)\" type=\"number\" id=\"inp-ac\">\n    </div>\n</div>"

/***/ }),

/***/ 156:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-3 col-md-2 col-xs-6\">\n  <div class=\"input-group input-group-sm\">\n    <span [ngClass]=\"{'active-class':getActiveStatus()}\" class=\"input-group-addon\">{{ this.id }}</span>\n    <input type=\"number\" class=\"form-control\" [ngClass]=\"{'active-class':getActiveStatus()}\" [(ngModel)]=\"this.mailbox.value\">\n  </div>\n</div>"

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(79);


/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__(50);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CockpitComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CockpitComponent = (function () {
    function CockpitComponent(dataService) {
        var _this = this;
        this.dataService = dataService;
        this._programValues = "";
        this._inputValues = "";
        this._outputValues = "";
        this._finalProgram = [];
        this._finalInputs = [];
        this._lineNumbers = "";
        this._heightProgram = 0;
        this._heightInOut = 0;
        this.onError = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        dataService.accumulator.subscribe(function (newAccumulator) { _this.acc = newAccumulator; });
    }
    CockpitComponent.prototype.ngAfterViewInit = function () {
        this._heightProgram = this.calcHeightProgram();
        this._heightInOut = this.calcHeightInOut();
    };
    CockpitComponent.prototype.scroll = function () {
        var isSyncingLeftScroll = false;
        var isSyncingRightScroll = false;
        var leftDiv = document.getElementById('lineCounter');
        var rightDiv = document.getElementById('ta-program');
        leftDiv.onscroll = function () {
            if (!isSyncingLeftScroll) {
                isSyncingRightScroll = true;
                rightDiv.scrollTop = this.scrollTop;
            }
            isSyncingLeftScroll = false;
        };
        rightDiv.onscroll = function () {
            if (!isSyncingRightScroll) {
                isSyncingLeftScroll = true;
                leftDiv.scrollTop = this.scrollTop;
            }
            isSyncingRightScroll = false;
        };
    };
    CockpitComponent.prototype.addLineNumbers = function () {
        var iterator = 1;
        var array = [];
        var input = this._programValues.split('\n');
        // console.log(this._programValues);
        console.log(input.length);
        for (var i = 0; i < input.length; ++i) {
            array.push(iterator);
            iterator = iterator - -1;
        }
        console.log(array);
        this._lineNumbers = array.join('\n');
        //  console.log(this._lineNumbers);
    };
    CockpitComponent.prototype.onChangeACC = function (newVal) {
        if (newVal !== null) {
            this.dataService.setAccumulator(newVal);
            console.log('--- NEW VALUE ACC --- \n' + newVal);
        }
    };
    CockpitComponent.prototype.checkProgramValues = function () {
        var iterator = 0;
        var programCode = this.programValues.split('\n');
        console.log('--- PROGRAM DATA ---');
        for (var index in programCode) {
            var lineIndex = parseInt(index) + 1;
            if (programCode[index].indexOf('(') > -1) {
                var temporaryArray = programCode[index].split('(');
                temporaryArray = temporaryArray[1].split(') ');
                var indexOfAddress = parseInt(temporaryArray[0]);
                if (indexOfAddress > 99) {
                    this.onError.emit({ errorName: 'AddressError_Write', lineIndex: lineIndex, indexOfAddress: indexOfAddress });
                    break;
                }
                else if (!Number(temporaryArray[1]) && temporaryArray[1] !== '000') {
                    this.onError.emit({ errorName: 'ArgNaN', lineIndex: lineIndex });
                    break;
                }
                else {
                    this._finalProgram[indexOfAddress] = parseInt(temporaryArray[1]);
                    console.log('Adressbox ' + indexOfAddress + ': ' + this._finalProgram[indexOfAddress]);
                }
            }
            else {
                if (!Number(programCode[index]) && programCode[index] !== '000') {
                    this.onError.emit({ errorName: 'ArgNaN', lineIndex: lineIndex });
                    break;
                }
                else {
                    this._finalProgram[iterator++] = parseInt(programCode[index]);
                    console.log('Adressbox ' + index + ': ' + this._finalProgram[iterator - 1]);
                }
            }
        }
        this.dataService.finalProgram = this._finalProgram;
    };
    CockpitComponent.prototype.checkInputValues = function () {
        this.dataService.finalInputs.splice(0, this.dataService.finalInputs.length);
        var iterator = 0;
        var inputCode = this.inputValues.split('\n');
        for (var index in inputCode) {
            console.log(inputCode[index]);
            var lineIndex = parseInt(index) + 1;
            if (!Number(inputCode[index])) {
                return false;
            }
            else {
                this._finalInputs[iterator++] = parseInt(inputCode[index]);
                console.log('Input ' + index + ': ' + this._finalInputs[iterator - 1]);
            }
        }
        this.dataService.finalInputs = this._finalInputs;
        return true;
    };
    CockpitComponent.prototype.calcHeightInOut = function () {
        if (window.innerWidth > 767) {
            var rowHeight = document.getElementById('left-row').offsetHeight;
            return (rowHeight * 0.2);
        }
        else {
            return 100;
        }
    };
    CockpitComponent.prototype.calcHeightProgram = function () {
        if (window.innerWidth > 767) {
            var rowHeight = document.getElementById('left-row').offsetHeight;
            return (rowHeight * 0.5);
        }
        else {
            return 300;
        }
    };
    Object.defineProperty(CockpitComponent.prototype, "pc", {
        get: function () {
            return this._pc;
        },
        set: function (pc) {
            this._pc = pc;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CockpitComponent.prototype, "acc", {
        get: function () {
            return this._acc;
        },
        set: function (acc) {
            this._acc = acc;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CockpitComponent.prototype, "programValues", {
        get: function () {
            return this._programValues;
        },
        set: function (pv) {
            this._programValues = pv;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CockpitComponent.prototype, "inputValues", {
        get: function () {
            return this._inputValues;
        },
        set: function (iv) {
            this._inputValues = iv;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CockpitComponent.prototype, "outputValues", {
        get: function () {
            return this._outputValues;
        },
        set: function (ov) {
            this._outputValues = ov;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CockpitComponent.prototype, "lineNumbers", {
        get: function () {
            return this._lineNumbers;
        },
        set: function (ln) {
            this._lineNumbers = ln;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CockpitComponent.prototype, "heightProgram", {
        get: function () {
            return this._heightProgram;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CockpitComponent.prototype, "heightInOut", {
        get: function () {
            return this._heightInOut;
        },
        enumerable: true,
        configurable: true
    });
    return CockpitComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Output */])(),
    __metadata("design:type", Object)
], CockpitComponent.prototype, "onError", void 0);
CockpitComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-cockpit',
        template: __webpack_require__(155),
        styles: [__webpack_require__(149)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object])
], CockpitComponent);

var _a;
//# sourceMappingURL=cockpit.component.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });

var DataService = (function () {
    function DataService() {
        this.mailboxes = [];
        this._finalProgram = [];
        this._programCounter = 0;
        this._finalInputs = [];
        this._inputIndex = 0;
        this.initializeMailboxes();
        this.accumulatorSubject = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
        this.accumulator = this.accumulatorSubject.asObservable();
    }
    DataService.prototype.initializeMailboxes = function () {
        for (var i = 0; i < 100; i++) {
            this.mailboxes.push({ value: 0, isActive: false });
        }
    };
    DataService.prototype.updateMailboxes = function () {
        for (var mailbox in this.mailboxes) {
            this.mailboxes[mailbox].value = this.finalProgram[mailbox];
        }
    };
    DataService.prototype.cleanMailboxes = function () {
        this.finalProgram.splice(0, this.finalProgram.length);
        for (var mailbox in this.mailboxes) {
            this.mailboxes[mailbox].value = this.finalProgram[mailbox];
        }
    };
    DataService.prototype.highlightMailbox = function (mailbox) {
        this.mailboxes[mailbox].isActive = true;
    };
    Object.defineProperty(DataService.prototype, "programCounter", {
        get: function () {
            return this._programCounter;
        },
        set: function (pc) {
            this._programCounter = pc;
        },
        enumerable: true,
        configurable: true
    });
    DataService.prototype.setAccumulator = function (accValue) {
        this.accumulatorSubject.next(accValue);
    };
    Object.defineProperty(DataService.prototype, "finalInputs", {
        get: function () {
            return this._finalInputs;
        },
        set: function (inp) {
            this._finalInputs = inp;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataService.prototype, "inputIndex", {
        get: function () {
            return this._inputIndex;
        },
        set: function (ind) {
            this._inputIndex = ind;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataService.prototype, "finalProgram", {
        get: function () {
            return this._finalProgram;
        },
        set: function (finalProgram) {
            this._finalProgram = finalProgram;
        },
        enumerable: true,
        configurable: true
    });
    return DataService;
}());

//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ 78:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 78;


/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(93);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CHANGE_TIME; });

var CHANGE_TIME = 300;
//# sourceMappingURL=app-settings.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cockpit_cockpit_component__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(89);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(dataService) {
        var _this = this;
        this.dataService = dataService;
        this.onError = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        this._wrongValue = false;
        this._wrongInputValue = false;
        this._showLoadButton = false;
        this._stop = false;
        this.mailboxes = [];
        dataService.accumulator.subscribe(function (newAccumulator) { _this._acc = newAccumulator; });
    }
    AppComponent.prototype.ngOnInit = function () {
        this.mailboxes = this.dataService.mailboxes;
        this._pc = 0;
        this._acc = 0;
        this.reset();
    };
    AppComponent.prototype.assembleToRAM = function () {
        this.reset();
        this.dataService.cleanMailboxes(); // necessary, if values have been modified!
        this.cockpit.checkProgramValues();
        this.dataService.updateMailboxes();
    };
    AppComponent.prototype.run = function () {
        var _this = this;
        var timer;
        this.reset();
        this._stop = false;
        var check = function () {
            var stop = _this.step();
            if (stop || _this._stop) {
                clearInterval(timer);
            }
        };
        timer = setInterval(check, __WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* CHANGE_TIME */]);
    };
    AppComponent.prototype.step = function () {
        // if (this._pc === 0) this.assembleToRAM();
        this._pc = this.cockpit.pc = this.dataService.programCounter;
        var instruction = this.dataService.mailboxes[this._pc].value;
        var codeType = Math.floor(instruction / 100);
        var mailboxData = instruction % 100;
        if (this._pc != 0)
            for (var mailbox in this.dataService.mailboxes)
                this.dataService.mailboxes[mailbox].isActive = false;
        this.dataService.highlightMailbox(this._pc);
        switch (codeType) {
            case 1:
                if (typeof this.dataService.mailboxes[mailboxData].value === 'undefined') {
                    this.cockpit.onError.emit({ errorName: 'AddressError_Read', lineIndex: 0, indexOfAddress: mailboxData });
                    this.reset();
                    return true;
                }
                else {
                    this.dataService.setAccumulator(this._acc + this.dataService.mailboxes[mailboxData].value);
                    break;
                }
            case 2:
                if (typeof this.dataService.mailboxes[mailboxData].value === 'undefined') {
                    this.cockpit.onError.emit({ errorName: 'AddressError_Read', lineIndex: 0, indexOfAddress: mailboxData });
                    this.reset();
                    return true;
                }
                else {
                    this.dataService.setAccumulator(this._acc - this.dataService.mailboxes[mailboxData].value);
                    break;
                }
            case 3:
                this.dataService.mailboxes[mailboxData].value = this._acc;
                break;
            case 5:
                if (typeof this.dataService.mailboxes[mailboxData].value === 'undefined') {
                    this.cockpit.onError.emit({ errorName: 'AddressError_Read', lineIndex: 0, indexOfAddress: mailboxData });
                    this.reset();
                    return true;
                }
                else {
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
                }
                else {
                    this.dataService.programCounter = ++this._pc;
                }
                break;
            case 8:
                if (this._acc >= 0) {
                    this.dataService.programCounter = mailboxData;
                }
                else {
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
                            }
                            else {
                                this._wrongInputValue = true;
                            }
                        }
                        else {
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
    };
    AppComponent.prototype.fileUpload = function (event) {
        var _this = this;
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.onload = function (e) {
            _this._fileResult = reader.result;
            _this.showLoadButton = true;
        };
        reader.readAsText(file);
    };
    AppComponent.prototype.processData = function () {
        console.log('--- FILE INPUT DATA ---');
        var fileInput = this._fileResult.split('\n$$$\n');
        this.cockpit.programValues = fileInput[0];
        this.cockpit.inputValues = fileInput[1];
        console.log(fileInput[0]);
        console.log(fileInput[1]);
        this.cockpit.addLineNumbers();
    };
    AppComponent.prototype.reset = function () {
        this.dataService.programCounter = this._pc = this.cockpit.pc = 0;
        this.dataService.setAccumulator(0);
        this.dataService.inputIndex = 0;
        this._wrongValue = false;
        this._wrongInputValue = false;
        this.cockpit.outputValues = "";
        for (var mailbox in this.dataService.mailboxes)
            this.dataService.mailboxes[mailbox].isActive = false;
        this.dataService.mailboxes[0].isActive = true;
    };
    AppComponent.prototype.resetButton = function () {
        this.reset();
        this._stop = true;
    };
    AppComponent.prototype.cleanMailboxes = function () {
        this.dataService.cleanMailboxes();
    };
    AppComponent.prototype.displayError = function (errorData) {
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
    };
    Object.defineProperty(AppComponent.prototype, "showLoadButton", {
        get: function () {
            return this._showLoadButton;
        },
        set: function (show) {
            this._showLoadButton = show;
        },
        enumerable: true,
        configurable: true
    });
    return AppComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__cockpit_cockpit_component__["a" /* CockpitComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__cockpit_cockpit_component__["a" /* CockpitComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__cockpit_cockpit_component__["a" /* CockpitComponent */]) === "function" && _a || Object)
], AppComponent.prototype, "cockpit", void 0);
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(154),
        styles: [__webpack_require__(148)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cockpit_cockpit_component__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mailbox_element_mailbox_element_component__ = __webpack_require__(92);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__cockpit_cockpit_component__["a" /* CockpitComponent */],
            __WEBPACK_IMPORTED_MODULE_6__mailbox_element_mailbox_element_component__["a" /* MailboxElementComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailboxElementComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MailboxElementComponent = (function () {
    function MailboxElementComponent() {
    }
    MailboxElementComponent.prototype.gibAus = function (array) {
        for (var value in array) {
            console.log('RAM\n' + array[value]);
        }
    };
    MailboxElementComponent.prototype.getActiveStatus = function () {
        if (this.mailbox.isActive === true)
            return true;
        else
            return false;
    };
    return MailboxElementComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Number)
], MailboxElementComponent.prototype, "id", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], MailboxElementComponent.prototype, "mailbox", void 0);
MailboxElementComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-mailbox-element',
        template: __webpack_require__(156),
        styles: [__webpack_require__(150)]
    }),
    __metadata("design:paramtypes", [])
], MailboxElementComponent);

//# sourceMappingURL=mailbox-element.component.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ })

},[188]);
//# sourceMappingURL=main.bundle.js.map