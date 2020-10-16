(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/about-page/about-page.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about-page/about-page.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAboutPageAboutPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"about-page\">\r\n  <h1>About Link</h1>\r\n  <p>I created Link to learn about Firefox Browser Add-Ons and Web Development.</p>\r\n  <p>Link was created with Angular, Angular Material, Firebase, and <a\r\n    href=\"https://microlink.io/\">Microlink</a>.</p>\r\n  <p>If you have any questions, feedback or anything else, I can be contacted through any of the links below.</p>\r\n\r\n  <div class=\"external-link\">\r\n    <fa-icon class=\"fa-icon-indent\" [icon]=\"['fab', 'github-alt']\" ></fa-icon>\r\n    <a href=\"https://github.com/medesmedes/Link\" target=\"_blank\">Github Repo</a>\r\n  </div>\r\n\r\n  <div class=\"external-link\">\r\n    <fa-icon class=\"fa-icon-indent\" [icon]=\"['far', 'envelope']\" ></fa-icon>\r\n    <a class=\"external-link\" href=\"mailto:mail@ahmadissa.dk\" target=\"_blank\">Mail</a>\r\n  </div>\r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<navbar></navbar>\r\n<router-outlet></router-outlet>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/card-page/card-container/card-body/card-body.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/card-page/card-container/card-body/card-body.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCardPageCardContainerCardBodyCardBodyComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"{{link.key}}\">\r\n\r\n    <mat-card-content *ngIf=\"link.payload.val().type == 'text'\">\r\n        <div class=\"text-container\">\r\n            <p class=\"text-content\">{{link.payload.val().link}}</p>\r\n        </div>\r\n    </mat-card-content>\r\n\r\n    <mat-card-content *ngIf=\"link.payload.val().type == 'link'\">\r\n        <microlink url=\"{{link.payload.val().link}}\" [options]=\"{ size: 'large' }\"></microlink>\r\n    </mat-card-content>\r\n\r\n    <mat-card-content *ngIf=\"link.payload.val().type == 'video'\">\r\n        <iframe class=\"youtube\" [src]=\"YouTubeGetID(link.payload.val().link) | safeUrl\" frameborder=\"0\"></iframe>\r\n    </mat-card-content>\r\n\r\n    <mat-card-content *ngIf=\"link.payload.val().type == 'image'\">\r\n        <a href=\"{{link.payload.val().link}}\" target=\"_blank\">\r\n            <img mat-card-image src=\"{{link.payload.val().link}}\" />\r\n        </a>\r\n    </mat-card-content>\r\n\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/card-page/card-container/card-container.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/card-page/card-container/card-container.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCardPageCardContainerCardContainerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card-container\">\r\n    <mat-card *ngFor=\"let link of links; trackBy: trackBySource\">\r\n        <app-card-header [link]=\"link\" [dbRef]=\"dbRef\"></app-card-header>\r\n        <app-card-body [link]=\"link\"></app-card-body>\r\n        <app-card-footer [link]=\"link\" [dbRef]=\"dbRef\"></app-card-footer>\r\n    </mat-card>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/card-page/card-container/card-footer/card-footer.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/card-page/card-container/card-footer/card-footer.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCardPageCardContainerCardFooterCardFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-card-actions>\r\n  <button mat-button *ngIf=\"link.payload.val().favorite == true\" (click)=\"favorite(link.key, link.payload.val().favorite)\">\r\n    <fa-icon class=\"fa-action-button\" [icon]=\"['fas', 'heart']\"></fa-icon>\r\n  </button>\r\n  <button mat-button *ngIf=\"link.payload.val().favorite == false\" (click)=\"favorite(link.key, link.payload.val().favorite)\">\r\n    <fa-icon class=\"fa-action-button\" [icon]=\"['far', 'heart']\"></fa-icon>\r\n  </button>\r\n\r\n  <button mat-button *ngIf=\"link.payload.val().comment.length > 0\" (click)=\"openComment(link.key, link.payload.val().comment)\">\r\n    <fa-icon class=\"fa-action-button\" [icon]=\"['fas', 'comment-alt']\"></fa-icon>\r\n  </button>\r\n\r\n  <button mat-button *ngIf=\"link.payload.val().comment === ''\" (click)=\"openComment(link.key, link.payload.val().comment)\">\r\n    <fa-icon class=\"fa-action-button\" [icon]=\"['far', 'comment-alt']\"></fa-icon>\r\n  </button>\r\n\r\n</mat-card-actions>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/card-page/card-container/card-footer/snack-bar-comment/snack-bar-comment.html":
  /*!*************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/card-page/card-container/card-footer/snack-bar-comment/snack-bar-comment.html ***!
    \*************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCardPageCardContainerCardFooterSnackBarCommentSnackBarCommentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<span class=\"simple-snack-bar\">\r\n    Comment saved successfully.\r\n</span>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/card-page/card-container/card-header/card-header.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/card-page/card-container/card-header/card-header.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCardPageCardContainerCardHeaderCardHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-card-header>\r\n    <mat-card-subtitle>{{link.payload.val().timestamp | date:'MMM d, y, HH:mm'}}\r\n        <fa-icon class=\"delete-mat-card\" [icon]=\"['fas', 'times']\" (click)=\"delete(link.key)\"></fa-icon>\r\n    </mat-card-subtitle>\r\n</mat-card-header>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/card-page/card-page.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/card-page/card-page.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCardPageCardPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-link-saver></app-link-saver>\r\n<app-card-container></app-card-container>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/comment-dialog/comment-dialog.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comment-dialog/comment-dialog.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCommentDialogCommentDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div mat-dialog-content>\r\n  <mat-form-field>\r\n    <mat-label>Edit Comment</mat-label>\r\n    <textarea matInput [(ngModel)]=\"data.text\">{{data.text}}</textarea>\r\n    <button mat-button *ngIf=\"data.text\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"data.text=''\">\r\n      <mat-icon>close</mat-icon>\r\n    </button>\r\n  </mat-form-field>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"onNoClick()\">Cancel</button>\r\n  <button mat-button [mat-dialog-close]=\"data.text\" cdkFocusInitial>Save</button>\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/link-saver/link-saver.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/link-saver/link-saver.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLinkSaverLinkSaverComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\r\n    <mat-card class=\"link-saver\">\r\n        <mat-card-title>Link Saver</mat-card-title>\r\n        <mat-card-subtitle>This card replaces the Firefox Add-On for the sake of demonstration.</mat-card-subtitle>\r\n        <form name=\"form\" (ngSubmit)=\"linkForm.form.valid && onSubmit()\" #linkForm=\"ngForm\">\r\n            <mat-form-field>\r\n                <mat-label>Link</mat-label>\r\n                <textarea matInput placeholder=\"Ex. A webpage you want to save...\" name=\"link\" class=\"form-control\"\r\n                    [(ngModel)]=\"model.link\" #link=\"ngModel\" required></textarea>\r\n                <mat-error *ngIf=\"linkForm.submitted && link.invalid && link.errors.required\">\r\n                    This field cannot be empty\r\n                </mat-error>\r\n            </mat-form-field>\r\n            <br>\r\n            <mat-form-field>\r\n                <mat-label>Comment</mat-label>\r\n                <textarea matInput placeholder=\"Ex. I'm saving this because...\" name=\"comment\" class=\"form-control\"\r\n                    [(ngModel)]=\"model.comment\" #comment=\"ngModel\"></textarea>\r\n            </mat-form-field>\r\n            <br>\r\n            <button mat-button>Add Link</button>\r\n\r\n        </form>\r\n    </mat-card>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/link-saver/snack-bar-link/snack-bar-link.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/link-saver/snack-bar-link/snack-bar-link.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLinkSaverSnackBarLinkSnackBarLinkHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<span class=\"simple-snack-bar\">\r\n    Link saved successfully.\r\n</span>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavbarNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"navbar\">\r\n    <ul>\r\n        <a class=\"navbar-brand\">\r\n            <img class=\"brand-image\" src=\"/assets/white_icon.png\" width=\"35\" height=\"35\" alt=\"\">Link\r\n        </a>\r\n        <li [routerLinkActive]=\"['active']\"><a routerLink=\"my-links\">My Links</a></li>\r\n        <li [routerLinkActive]=\"['active']\"><a routerLink=\"about\">About</a></li>\r\n    </ul>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];

          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;

            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };

            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;

            case 7:
              op = _.ops.pop();

              _.trys.pop();

              continue;

            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }

              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }

              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }

              if (t && _.label < t[2]) {
                _.label = t[2];

                _.ops.push(op);

                break;
              }

              if (t[2]) _.ops.pop();

              _.trys.pop();

              continue;
          }

          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/about-page/about-page.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/about-page/about-page.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAboutPageAboutPageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".about-page {\n  margin: 32px 192px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n\nh1 {\n  font-weight: 500;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.external-link {\n  font-size: 24px;\n  text-decoration: none;\n}\n\n.fa-icon-indent {\n  margin-right: 8px;\n  color: #6c7bad;\n}\n\na {\n  color: #6c7bad;\n  text-decoration: none;\n}\n\na:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQtcGFnZS9DOlxcVXNlcnNcXGFobWFkXFxEb2N1bWVudHNcXEdpdEh1YlxcTGluay9zcmNcXGFwcFxcYWJvdXQtcGFnZVxcYWJvdXQtcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWJvdXQtcGFnZS9hYm91dC1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxpREFBQTtBQ0NGOztBREdBO0VBQ0UsZ0JBQUE7RUFDQSwwQkFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0FDQUY7O0FER0E7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUNBRjs7QURHQTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBQ0FGOztBREdBO0VBQ0UsMEJBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0LXBhZ2UvYWJvdXQtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hYm91dC1wYWdle1xyXG4gIG1hcmdpbjogMzJweCAxOTJweDtcclxuICBmb250LWZhbWlseTogUm9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmO1xyXG5cclxufVxyXG5cclxuaDF7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogcmdiYSgwLDAsMCwuODcpO1xyXG59XHJcblxyXG4uZXh0ZXJuYWwtbGlua3tcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uZmEtaWNvbi1pbmRlbnR7XHJcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgY29sb3I6ICM2YzdiYWQ7XHJcbn1cclxuXHJcbmF7XHJcbiAgY29sb3I6ICM2YzdiYWQ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5hOmhvdmVye1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcbiIsIi5hYm91dC1wYWdlIHtcbiAgbWFyZ2luOiAzMnB4IDE5MnB4O1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG5cbmgxIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG5cbi5leHRlcm5hbC1saW5rIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5mYS1pY29uLWluZGVudCB7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xuICBjb2xvcjogIzZjN2JhZDtcbn1cblxuYSB7XG4gIGNvbG9yOiAjNmM3YmFkO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/about-page/about-page.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/about-page/about-page.component.ts ***!
    \****************************************************/

  /*! exports provided: AboutPageComponent */

  /***/
  function srcAppAboutPageAboutPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutPageComponent", function () {
      return AboutPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let AboutPageComponent = class AboutPageComponent {
      constructor() {}

      ngOnInit() {}

    };
    AboutPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-about-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./about-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/about-page/about-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./about-page.component.scss */
      "./src/app/about-page/about-page.component.scss")).default]
    })], AboutPageComponent);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _card_page_card_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./card-page/card-page.component */
    "./src/app/card-page/card-page.component.ts");
    /* harmony import */


    var _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./about-page/about-page.component */
    "./src/app/about-page/about-page.component.ts");

    const routes = [{
      path: 'my-links',
      component: _card_page_card_page_component__WEBPACK_IMPORTED_MODULE_3__["CardPageComponent"]
    }, {
      path: 'about',
      component: _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_4__["AboutPageComponent"]
    }, {
      path: '',
      redirectTo: 'my-links',
      pathMatch: 'full'
    }];
    let AppRoutingModule = class AppRoutingModule {};
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "* {\n  font-family: Roboto, sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxhaG1hZFxcRG9jdW1lbnRzXFxHaXRIdWJcXExpbmsvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4iLCIqIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let AppComponent = class AppComponent {};
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-root",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/es2015/index.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/database/es2015/index.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _card_page_card_container_card_container_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./card-page/card-container/card-container.component */
    "./src/app/card-page/card-container/card-container.component.ts");
    /* harmony import */


    var _card_page_card_container_card_body_card_body_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./card-page/card-container/card-body/card-body.component */
    "./src/app/card-page/card-container/card-body/card-body.component.ts");
    /* harmony import */


    var _card_page_card_container_card_footer_card_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./card-page/card-container/card-footer/card-footer.component */
    "./src/app/card-page/card-container/card-footer/card-footer.component.ts");
    /* harmony import */


    var _card_page_card_container_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./card-page/card-container/card-header/card-header.component */
    "./src/app/card-page/card-container/card-header/card-header.component.ts");
    /* harmony import */


    var _comment_dialog_comment_dialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./comment-dialog/comment-dialog.component */
    "./src/app/comment-dialog/comment-dialog.component.ts");
    /* harmony import */


    var _link_saver_link_saver_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./link-saver/link-saver.component */
    "./src/app/link-saver/link-saver.component.ts");
    /* harmony import */


    var _safe_url_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./safe-url.pipe */
    "./src/app/safe-url.pipe.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/esm2015/menu.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/esm2015/list.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _card_page_card_page_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./card-page/card-page.component */
    "./src/app/card-page/card-page.component.ts");
    /* harmony import */


    var _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./about-page/about-page.component */
    "./src/app/about-page/about-page.component.ts");
    /* harmony import */


    var _microlink_angular__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @microlink/angular */
    "./node_modules/@microlink/angular/dist/fesm2015/microlink-angular.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @fortawesome/free-regular-svg-icons */
    "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
    /* harmony import */


    var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @fortawesome/free-brands-svg-icons */
    "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js"); // FortAwesome Icons


    let AppModule = class AppModule {
      constructor(library) {
        this.library = library;
        library.addIcons(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_32__["faTimes"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_32__["faCommentAlt"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_33__["faCommentAlt"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_33__["faHeart"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_32__["faHeart"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_34__["faGithubAlt"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_33__["faEnvelope"]);
      }

    };

    AppModule.ctorParameters = () => [{
      type: _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FaIconLibrary"]
    }];

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _card_page_card_container_card_container_component__WEBPACK_IMPORTED_MODULE_10__["CardContainerComponent"], _card_page_card_container_card_body_card_body_component__WEBPACK_IMPORTED_MODULE_11__["CardBodyComponent"], _card_page_card_container_card_footer_card_footer_component__WEBPACK_IMPORTED_MODULE_12__["CardFooterComponent"], _card_page_card_container_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_13__["CardHeaderComponent"], _safe_url_pipe__WEBPACK_IMPORTED_MODULE_16__["SafeUrlPipe"], _link_saver_link_saver_component__WEBPACK_IMPORTED_MODULE_15__["LinkSaverComponent"], _comment_dialog_comment_dialog_component__WEBPACK_IMPORTED_MODULE_14__["CommentDialogComponent"], _card_page_card_container_card_footer_card_footer_component__WEBPACK_IMPORTED_MODULE_12__["SnackBarCommentComponent"], _link_saver_link_saver_component__WEBPACK_IMPORTED_MODULE_15__["SnackBarLinkComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_28__["NavbarComponent"], _card_page_card_page_component__WEBPACK_IMPORTED_MODULE_29__["CardPageComponent"], _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_30__["AboutPageComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].firebase), _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabaseModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuthModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"], _microlink_angular__WEBPACK_IMPORTED_MODULE_31__["default"].Module, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_20__["MatButtonModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__["MatMenuModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_22__["MatListModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MatDialogModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInputModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__["MatSnackBarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__["MatIconModule"]],
      providers: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
      entryComponents: [_comment_dialog_comment_dialog_component__WEBPACK_IMPORTED_MODULE_14__["CommentDialogComponent"], _card_page_card_container_card_footer_card_footer_component__WEBPACK_IMPORTED_MODULE_12__["SnackBarCommentComponent"], _link_saver_link_saver_component__WEBPACK_IMPORTED_MODULE_15__["SnackBarLinkComponent"]],
      // Bad practice with the Schema, but MicroLink no longer supports Angular and until I find an alternative and implement it, this will stay
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["NO_ERRORS_SCHEMA"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/card-page/card-container/card-body/card-body.component.scss":
  /*!*****************************************************************************!*\
    !*** ./src/app/card-page/card-container/card-body/card-body.component.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCardPageCardContainerCardBodyCardBodyComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-card-image {\n  margin: 0;\n  width: 100%;\n  height: 30vh;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: 50% 50%;\n     object-position: 50% 50%;\n  /* default value: image is centered*/\n  border-width: 1px;\n  border-style: solid;\n  border-color: #e1e8ed;\n  background-color: rgba(166, 166, 166, 0.5);\n}\n\n.youtube {\n  margin: 0;\n  width: 100%;\n  height: 30vh;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #e1e8ed;\n}\n\n.text-container {\n  width: 100%;\n  height: 30vh;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #e1e8ed;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n:host::ng-deep .microlink_card {\n  height: 30vh;\n}\n\n.text-content {\n  padding: 14px;\n  margin: 0;\n}\n\n.mat-card-content {\n  margin-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZC1wYWdlL2NhcmQtY29udGFpbmVyL2NhcmQtYm9keS9DOlxcVXNlcnNcXGFobWFkXFxEb2N1bWVudHNcXEdpdEh1YlxcTGluay9zcmNcXGFwcFxcY2FyZC1wYWdlXFxjYXJkLWNvbnRhaW5lclxcY2FyZC1ib2R5XFxjYXJkLWJvZHkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NhcmQtcGFnZS9jYXJkLWNvbnRhaW5lci9jYXJkLWJvZHkvY2FyZC1ib2R5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLDJCQUFBO0tBQUEsd0JBQUE7RUFBMEIsb0NBQUE7RUFDMUIsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMENBQUE7QUNFSjs7QURDQTtFQUNJLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQ0VKOztBRENBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDRUo7O0FERUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsU0FBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NhcmQtcGFnZS9jYXJkLWNvbnRhaW5lci9jYXJkLWJvZHkvY2FyZC1ib2R5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1jYXJkLWltYWdle1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDozMHZoO1xyXG4gICAgb2JqZWN0LWZpdDpjb3ZlciAgO1xyXG4gICAgb2JqZWN0LXBvc2l0aW9uOiA1MCUgNTAlOyAvKiBkZWZhdWx0IHZhbHVlOiBpbWFnZSBpcyBjZW50ZXJlZCovXHJcbiAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6ICNlMWU4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCAxNjYsIDE2NiwgMTY2LCAwLjUpO1xyXG59XHJcblxyXG4ueW91dHViZXtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6MzB2aDtcclxuICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogI2UxZThlZDtcclxufVxyXG5cclxuLnRleHQtY29udGFpbmVye1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDozMHZoO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZTFlOGVkOyAgIFxyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG5cclxufVxyXG5cclxuOmhvc3Q6Om5nLWRlZXAgLm1pY3JvbGlua19jYXJkIHtcclxuICAgIGhlaWdodDogMzB2aDtcclxuICB9XHJcblxyXG4udGV4dC1jb250ZW50e1xyXG4gICAgcGFkZGluZzogMTRweDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLm1hdC1jYXJkLWNvbnRlbnR7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn0gICAiLCIubWF0LWNhcmQtaW1hZ2Uge1xuICBtYXJnaW46IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwdmg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBvYmplY3QtcG9zaXRpb246IDUwJSA1MCU7XG4gIC8qIGRlZmF1bHQgdmFsdWU6IGltYWdlIGlzIGNlbnRlcmVkKi9cbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogI2UxZThlZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjYsIDE2NiwgMTY2LCAwLjUpO1xufVxuXG4ueW91dHViZSB7XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzB2aDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogI2UxZThlZDtcbn1cblxuLnRleHQtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzB2aDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogI2UxZThlZDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbjpob3N0OjpuZy1kZWVwIC5taWNyb2xpbmtfY2FyZCB7XG4gIGhlaWdodDogMzB2aDtcbn1cblxuLnRleHQtY29udGVudCB7XG4gIHBhZGRpbmc6IDE0cHg7XG4gIG1hcmdpbjogMDtcbn1cblxuLm1hdC1jYXJkLWNvbnRlbnQge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/card-page/card-container/card-body/card-body.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/card-page/card-container/card-body/card-body.component.ts ***!
    \***************************************************************************/

  /*! exports provided: CardBodyComponent */

  /***/
  function srcAppCardPageCardContainerCardBodyCardBodyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardBodyComponent", function () {
      return CardBodyComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let CardBodyComponent = class CardBodyComponent {
      constructor() {}

      ngOnInit() {}

      YouTubeGetID(url) {
        const urlArray = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
        const embedUrl = 'https://www.youtube.com/embed/';
        console.log(urlArray);
        return embedUrl + urlArray[2].substring(0, 11);
      }

    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardBodyComponent.prototype, "link", void 0);
    CardBodyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-card-body',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./card-body.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/card-page/card-container/card-body/card-body.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./card-body.component.scss */
      "./src/app/card-page/card-container/card-body/card-body.component.scss")).default]
    })], CardBodyComponent);
    /***/
  },

  /***/
  "./src/app/card-page/card-container/card-container.component.scss":
  /*!************************************************************************!*\
    !*** ./src/app/card-page/card-container/card-container.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCardPageCardContainerCardContainerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card-container {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-column-gap: 54px;\n  grid-auto-rows: auto;\n  grid-row-gap: 32px;\n  margin: 32px 10vw;\n}\n\n.mat-card {\n  width: 16vw;\n  min-width: 297px;\n  padding-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZC1wYWdlL2NhcmQtY29udGFpbmVyL0M6XFxVc2Vyc1xcYWhtYWRcXERvY3VtZW50c1xcR2l0SHViXFxMaW5rL3NyY1xcYXBwXFxjYXJkLXBhZ2VcXGNhcmQtY29udGFpbmVyXFxjYXJkLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2FyZC1wYWdlL2NhcmQtY29udGFpbmVyL2NhcmQtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHFDQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jYXJkLXBhZ2UvY2FyZC1jb250YWluZXIvY2FyZC1jb250YWluZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcclxuICBncmlkLWNvbHVtbi1nYXA6IDU0cHg7XHJcbiAgZ3JpZC1hdXRvLXJvd3M6IGF1dG87XHJcbiAgZ3JpZC1yb3ctZ2FwOiAzMnB4O1xyXG4gIG1hcmdpbjogMzJweCAxMHZ3O1xyXG59XHJcblxyXG4ubWF0LWNhcmR7XHJcbiAgd2lkdGg6IDE2dnc7XHJcbiAgbWluLXdpZHRoOiAyOTdweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG59XHJcbiIsIi5jYXJkLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XG4gIGdyaWQtY29sdW1uLWdhcDogNTRweDtcbiAgZ3JpZC1hdXRvLXJvd3M6IGF1dG87XG4gIGdyaWQtcm93LWdhcDogMzJweDtcbiAgbWFyZ2luOiAzMnB4IDEwdnc7XG59XG5cbi5tYXQtY2FyZCB7XG4gIHdpZHRoOiAxNnZ3O1xuICBtaW4td2lkdGg6IDI5N3B4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/card-page/card-container/card-container.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/card-page/card-container/card-container.component.ts ***!
    \**********************************************************************/

  /*! exports provided: CardContainerComponent */

  /***/
  function srcAppCardPageCardContainerCardContainerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardContainerComponent", function () {
      return CardContainerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/database/es2015/index.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    let CardContainerComponent = class CardContainerComponent {
      constructor(db) {
        this.prodPath = 'users/Re047I84rQfCzxRjeRWZ7PMs2wL2/links';
        this.demoPath = 'users/demobruger/links';

        if (src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].isDemo) {
          this.dbRef = db.list(this.demoPath);
          db.list(this.demoPath).snapshotChanges().subscribe(links => {
            this.links = links;
            console.log(this.links);
            this.links.sort((a, b) => b.payload.val().favorite - a.payload.val().favorite || b.payload.val().timestamp - a.payload.val().timestamp);
          });
        } else {
          this.dbRef = db.list(this.prodPath);
          db.list(this.prodPath).snapshotChanges().subscribe(links => {
            this.links = links;
            console.log(this.links); // tslint:disable-next-line:max-line-length

            this.links.sort((a, b) => b.payload.val().favorite - a.payload.val().favorite || b.payload.val().timestamp - a.payload.val().timestamp);
          });
        }
      }

      ngOnInit() {}

      trackBySource(index, link) {
        return link.payload.val().link;
      }

    };

    CardContainerComponent.ctorParameters = () => [{
      type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]
    }];

    CardContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-card-container',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./card-container.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/card-page/card-container/card-container.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./card-container.component.scss */
      "./src/app/card-page/card-container/card-container.component.scss")).default]
    })], CardContainerComponent);
    /***/
  },

  /***/
  "./src/app/card-page/card-container/card-footer/card-footer.component.scss":
  /*!*********************************************************************************!*\
    !*** ./src/app/card-page/card-container/card-footer/card-footer.component.scss ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCardPageCardContainerCardFooterCardFooterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-card-actions {\n  text-align: center;\n}\n\n.fa-action-button {\n  font-size: 14px;\n}\n\n.mat-card-actions {\n  margin-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZC1wYWdlL2NhcmQtY29udGFpbmVyL2NhcmQtZm9vdGVyL0M6XFxVc2Vyc1xcYWhtYWRcXERvY3VtZW50c1xcR2l0SHViXFxMaW5rL3NyY1xcYXBwXFxjYXJkLXBhZ2VcXGNhcmQtY29udGFpbmVyXFxjYXJkLWZvb3RlclxcY2FyZC1mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NhcmQtcGFnZS9jYXJkLWNvbnRhaW5lci9jYXJkLWZvb3Rlci9jYXJkLWZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDTSxrQkFBQTtBQ0NOIiwiZmlsZSI6InNyYy9hcHAvY2FyZC1wYWdlL2NhcmQtY29udGFpbmVyL2NhcmQtZm9vdGVyL2NhcmQtZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1jYXJkLWFjdGlvbnN7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mYS1hY3Rpb24tYnV0dG9ue1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4ubWF0LWNhcmQtYWN0aW9uc3tcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG4iLCIubWF0LWNhcmQtYWN0aW9ucyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZhLWFjdGlvbi1idXR0b24ge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5tYXQtY2FyZC1hY3Rpb25zIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/card-page/card-container/card-footer/card-footer.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/card-page/card-container/card-footer/card-footer.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: CardFooterComponent, SnackBarCommentComponent */

  /***/
  function srcAppCardPageCardContainerCardFooterCardFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardFooterComponent", function () {
      return CardFooterComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SnackBarCommentComponent", function () {
      return SnackBarCommentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var src_app_comment_dialog_comment_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/comment-dialog/comment-dialog.component */
    "./src/app/comment-dialog/comment-dialog.component.ts");

    let CardFooterComponent = class CardFooterComponent {
      constructor(dialog, _snackBar) {
        this.dialog = dialog;
        this._snackBar = _snackBar;
        this.duration = 1500;
      }

      ngOnInit() {}

      favorite(key, linkFav) {
        linkFav ? this.dbRef.update(key, {
          favorite: false
        }) : this.dbRef.update(key, {
          favorite: true
        });
      }

      openComment(key, commentText) {
        const dialogRef = this.dialog.open(src_app_comment_dialog_comment_dialog_component__WEBPACK_IMPORTED_MODULE_3__["CommentDialogComponent"], {
          data: {
            text: commentText
          }
        });
        dialogRef.afterClosed().subscribe(result => {
          if (key !== null && result !== undefined) {
            this.dbRef.update(key, {
              comment: result
            });
            this.openSnackBar();
          }
        });
      }

      openSnackBar() {
        this._snackBar.openFromComponent(SnackBarCommentComponent, {
          duration: this.duration
        });
      }

    };

    CardFooterComponent.ctorParameters = () => [{
      type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
    }, {
      type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardFooterComponent.prototype, "link", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardFooterComponent.prototype, "dbRef", void 0);
    CardFooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-card-footer",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./card-footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/card-page/card-container/card-footer/card-footer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./card-footer.component.scss */
      "./src/app/card-page/card-container/card-footer/card-footer.component.scss")).default]
    })], CardFooterComponent);
    let SnackBarCommentComponent = class SnackBarCommentComponent {};
    SnackBarCommentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-snack-bar-component',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./snack-bar-comment/snack-bar-comment.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/card-page/card-container/card-footer/snack-bar-comment/snack-bar-comment.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./snack-bar-comment/snack-bar-comment.scss */
      "./src/app/card-page/card-container/card-footer/snack-bar-comment/snack-bar-comment.scss")).default]
    })], SnackBarCommentComponent);
    /***/
  },

  /***/
  "./src/app/card-page/card-container/card-footer/snack-bar-comment/snack-bar-comment.scss":
  /*!***********************************************************************************************!*\
    !*** ./src/app/card-page/card-container/card-footer/snack-bar-comment/snack-bar-comment.scss ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCardPageCardContainerCardFooterSnackBarCommentSnackBarCommentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".simple-snack-bar {\n  font-family: Roboto, sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZC1wYWdlL2NhcmQtY29udGFpbmVyL2NhcmQtZm9vdGVyL3NuYWNrLWJhci1jb21tZW50L0M6XFxVc2Vyc1xcYWhtYWRcXERvY3VtZW50c1xcR2l0SHViXFxMaW5rL3NyY1xcYXBwXFxjYXJkLXBhZ2VcXGNhcmQtY29udGFpbmVyXFxjYXJkLWZvb3Rlclxcc25hY2stYmFyLWNvbW1lbnRcXHNuYWNrLWJhci1jb21tZW50LnNjc3MiLCJzcmMvYXBwL2NhcmQtcGFnZS9jYXJkLWNvbnRhaW5lci9jYXJkLWZvb3Rlci9zbmFjay1iYXItY29tbWVudC9zbmFjay1iYXItY29tbWVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NhcmQtcGFnZS9jYXJkLWNvbnRhaW5lci9jYXJkLWZvb3Rlci9zbmFjay1iYXItY29tbWVudC9zbmFjay1iYXItY29tbWVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpbXBsZS1zbmFjay1iYXJ7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcclxufVxyXG4iLCIuc2ltcGxlLXNuYWNrLWJhciB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/card-page/card-container/card-header/card-header.component.scss":
  /*!*********************************************************************************!*\
    !*** ./src/app/card-page/card-container/card-header/card-header.component.scss ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCardPageCardContainerCardHeaderCardHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".delete-mat-card {\n  float: right;\n  cursor: pointer;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.mat-card-header {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZC1wYWdlL2NhcmQtY29udGFpbmVyL2NhcmQtaGVhZGVyL0M6XFxVc2Vyc1xcYWhtYWRcXERvY3VtZW50c1xcR2l0SHViXFxMaW5rL3NyY1xcYXBwXFxjYXJkLXBhZ2VcXGNhcmQtY29udGFpbmVyXFxjYXJkLWhlYWRlclxcY2FyZC1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NhcmQtcGFnZS9jYXJkLWNvbnRhaW5lci9jYXJkLWhlYWRlci9jYXJkLWhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NhcmQtcGFnZS9jYXJkLWNvbnRhaW5lci9jYXJkLWhlYWRlci9jYXJkLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZWxldGUtbWF0LWNhcmR7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuODcpO1xyXG59XHJcblxyXG4ubWF0LWNhcmQtaGVhZGVye1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn0gIFxyXG4iLCIuZGVsZXRlLW1hdC1jYXJkIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG4ubWF0LWNhcmQtaGVhZGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/card-page/card-container/card-header/card-header.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/card-page/card-container/card-header/card-header.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: CardHeaderComponent */

  /***/
  function srcAppCardPageCardContainerCardHeaderCardHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardHeaderComponent", function () {
      return CardHeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let CardHeaderComponent = class CardHeaderComponent {
      constructor() {}

      ngOnInit() {}

      delete(linkID) {
        if (confirm("Are you sure you want to delete this link?")) {
          this.dbRef.remove(linkID);
        } else {
          return;
        }
      }

    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardHeaderComponent.prototype, "link", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardHeaderComponent.prototype, "dbRef", void 0);
    CardHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-card-header",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./card-header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/card-page/card-container/card-header/card-header.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./card-header.component.scss */
      "./src/app/card-page/card-container/card-header/card-header.component.scss")).default]
    })], CardHeaderComponent);
    /***/
  },

  /***/
  "./src/app/card-page/card-page.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/card-page/card-page.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCardPageCardPageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcmQtcGFnZS9jYXJkLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/card-page/card-page.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/card-page/card-page.component.ts ***!
    \**************************************************/

  /*! exports provided: CardPageComponent */

  /***/
  function srcAppCardPageCardPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardPageComponent", function () {
      return CardPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let CardPageComponent = class CardPageComponent {
      constructor() {}

      ngOnInit() {}

    };
    CardPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-card-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./card-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/card-page/card-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./card-page.component.scss */
      "./src/app/card-page/card-page.component.scss")).default]
    })], CardPageComponent);
    /***/
  },

  /***/
  "./src/app/comment-dialog/comment-dialog.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/comment-dialog/comment-dialog.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCommentDialogCommentDialogComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1lbnQtZGlhbG9nL2NvbW1lbnQtZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/comment-dialog/comment-dialog.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/comment-dialog/comment-dialog.component.ts ***!
    \************************************************************/

  /*! exports provided: CommentDialogComponent */

  /***/
  function srcAppCommentDialogCommentDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommentDialogComponent", function () {
      return CommentDialogComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    let CommentDialogComponent = class CommentDialogComponent {
      constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
      }

      ngOnInit() {}

      onNoClick() {
        this.dialogRef.close();
      }

    };

    CommentDialogComponent.ctorParameters = () => [{
      type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
        args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
      }]
    }];

    CommentDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-comment-dialog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./comment-dialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/comment-dialog/comment-dialog.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./comment-dialog.component.scss */
      "./src/app/comment-dialog/comment-dialog.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], CommentDialogComponent);
    /***/
  },

  /***/
  "./src/app/link-saver/link-saver.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/link-saver/link-saver.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLinkSaverLinkSaverComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".link-saver {\n  margin: 0 auto;\n  width: 16vw;\n  min-width: 297px;\n  margin-bottom: 10px;\n}\n\n.mat-form-field {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGluay1zYXZlci9DOlxcVXNlcnNcXGFobWFkXFxEb2N1bWVudHNcXEdpdEh1YlxcTGluay9zcmNcXGFwcFxcbGluay1zYXZlclxcbGluay1zYXZlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGluay1zYXZlci9saW5rLXNhdmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9saW5rLXNhdmVyL2xpbmstc2F2ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGluay1zYXZlciB7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgd2lkdGg6IDE2dnc7XHJcbiAgbWluLXdpZHRoOiAyOTdweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiIsIi5saW5rLXNhdmVyIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiAxNnZ3O1xuICBtaW4td2lkdGg6IDI5N3B4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/link-saver/link-saver.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/link-saver/link-saver.component.ts ***!
    \****************************************************/

  /*! exports provided: LinkSaverComponent, SnackBarLinkComponent */

  /***/
  function srcAppLinkSaverLinkSaverComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LinkSaverComponent", function () {
      return LinkSaverComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SnackBarLinkComponent", function () {
      return SnackBarLinkComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/database/es2015/index.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    let LinkSaverComponent = class LinkSaverComponent {
      constructor(db, snackBar) {
        this.snackBar = snackBar;
        this.duration = 1500;
        this.model = {};
        this.prodPath = 'users/Re047I84rQfCzxRjeRWZ7PMs2wL2/links';
        this.demoPath = 'users/demobruger/links';

        if (src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].isDemo) {
          this.dbRef = db.list(this.demoPath);
        } else {
          this.dbRef = db.list(this.prodPath);
        }
      }

      ngAfterViewInit() {}

      onSubmit() {
        if (this.model.comment != null) {
          this.addLink(this.model.link, this.model.comment);
          this.linkForm.resetForm();
          this.openSnackBar();
        } else {
          this.addLink(this.model.link, '');
          this.linkForm.resetForm();
          this.openSnackBar();
        }
      }

      addLink(linkURL, comment) {
        this.dbRef.push({
          comment,
          favorite: false,
          link: linkURL,
          timestamp: this.getTimeStamp(),
          type: this.getURLType(linkURL)
        });
      }

      getURLType(url) {
        const base64Regex = new RegExp(/data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*,.*/);
        const vidRegex = new RegExp('^(https?://)?(www.youtube.com|youtu.?be)/.+$'); // tslint:disable-next-line:max-line-length

        const linkRegex = new RegExp('^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?');
        const imageRegex = '\.(jpeg|jpg|gif|png)$';

        if (url.match(imageRegex) || url.match(base64Regex)) {
          return 'image';
        } else if (url.match(vidRegex)) {
          return 'video';
        } else if (url.match(linkRegex)) {
          return 'link';
        } else {
          return 'text';
        }
      }

      getTimeStamp() {
        return new Date().getTime();
      }

      openSnackBar() {
        this.snackBar.openFromComponent(SnackBarLinkComponent, {
          duration: this.duration
        });
      }

    };

    LinkSaverComponent.ctorParameters = () => [{
      type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]
    }, {
      type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('linkForm', {
      static: true
    })], LinkSaverComponent.prototype, "linkForm", void 0);
    LinkSaverComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-link-saver',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./link-saver.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/link-saver/link-saver.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./link-saver.component.scss */
      "./src/app/link-saver/link-saver.component.scss")).default]
    })], LinkSaverComponent);
    let SnackBarLinkComponent = class SnackBarLinkComponent {};
    SnackBarLinkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-snack-bar-link',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./snack-bar-link/snack-bar-link.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/link-saver/snack-bar-link/snack-bar-link.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./snack-bar-link/snack-bar-link.scss */
      "./src/app/link-saver/snack-bar-link/snack-bar-link.scss")).default]
    })], SnackBarLinkComponent);
    /***/
  },

  /***/
  "./src/app/link-saver/snack-bar-link/snack-bar-link.scss":
  /*!***************************************************************!*\
    !*** ./src/app/link-saver/snack-bar-link/snack-bar-link.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLinkSaverSnackBarLinkSnackBarLinkScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".simple-snack-bar {\n  font-family: Roboto, sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGluay1zYXZlci9zbmFjay1iYXItbGluay9DOlxcVXNlcnNcXGFobWFkXFxEb2N1bWVudHNcXEdpdEh1YlxcTGluay9zcmNcXGFwcFxcbGluay1zYXZlclxcc25hY2stYmFyLWxpbmtcXHNuYWNrLWJhci1saW5rLnNjc3MiLCJzcmMvYXBwL2xpbmstc2F2ZXIvc25hY2stYmFyLWxpbmsvc25hY2stYmFyLWxpbmsuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9saW5rLXNhdmVyL3NuYWNrLWJhci1saW5rL3NuYWNrLWJhci1saW5rLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2ltcGxlLXNuYWNrLWJhcntcclxuICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xyXG59XHJcbiIsIi5zaW1wbGUtc25hY2stYmFyIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/navbar/navbar.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/navbar/navbar.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppNavbarNavbarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".navbar {\n  height: 70px;\n  width: 100%;\n  background-color: #6c7bad;\n  padding-top: 0px;\n  margin-bottom: 32px;\n  box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(108, 123, 173, 0.46);\n}\n\nul {\n  margin: 0px;\n  list-style-type: none;\n  display: -webkit-box;\n  display: flex;\n  overflow: hidden;\n  margin-left: 20vw;\n  margin-right: 20vw;\n}\n\nli {\n  border-radius: 3px;\n  line-height: 45px;\n  padding-right: 0.9375rem;\n  padding-left: 0.9375rem;\n  height: 50px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.active {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n\nli a {\n  font-weight: 400;\n  font-size: 12px;\n  text-transform: uppercase;\n  border-radius: 3px;\n  text-decoration: none;\n  color: white;\n}\n\n.navbar-brand {\n  font-size: 1.125rem;\n  color: white;\n  font-weight: 300;\n  margin-right: 10px;\n  height: 50px;\n  line-height: 50px;\n  padding: 0.625rem 0;\n  display: inline-block;\n}\n\n.brand-image {\n  vertical-align: middle;\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL0M6XFxVc2Vyc1xcYWhtYWRcXERvY3VtZW50c1xcR2l0SHViXFxMaW5rL3NyY1xcYXBwXFxuYXZiYXJcXG5hdmJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUZBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsMENBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxzQkFBQTtFQUNBLGlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhciB7XHJcbiAgaGVpZ2h0OiA3MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2YzdiYWQ7XHJcbiAgcGFkZGluZy10b3A6IDBweDtcclxuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgN3B4IDEycHggLTVweCByZ2JhKDEwOCwgMTIzLCAxNzMsIDAuNDYpO1xyXG59XHJcblxyXG51bCB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXJnaW4tbGVmdDogMjB2dztcclxuICBtYXJnaW4tcmlnaHQ6IDIwdnc7XHJcbn1cclxuXHJcbmxpIHtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDQ1cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMC45Mzc1cmVtO1xyXG4gIHBhZGRpbmctbGVmdDogMC45Mzc1cmVtO1xyXG4gIGhlaWdodDogNTBweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcclxufVxyXG5cclxubGkgYSB7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm5hdmJhci1icmFuZCB7XHJcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gIHBhZGRpbmc6IDAuNjI1cmVtIDA7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uYnJhbmQtaW1hZ2Uge1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn0iLCIubmF2YmFyIHtcbiAgaGVpZ2h0OiA3MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZjN2JhZDtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgYm94LXNoYWRvdzogMCA0cHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCA3cHggMTJweCAtNXB4IHJnYmEoMTA4LCAxMjMsIDE3MywgMC40Nik7XG59XG5cbnVsIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLWxlZnQ6IDIwdnc7XG4gIG1hcmdpbi1yaWdodDogMjB2dztcbn1cblxubGkge1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGxpbmUtaGVpZ2h0OiA0NXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAwLjkzNzVyZW07XG4gIHBhZGRpbmctbGVmdDogMC45Mzc1cmVtO1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG59XG5cbmxpIGEge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5uYXZiYXItYnJhbmQge1xuICBmb250LXNpemU6IDEuMTI1cmVtO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgcGFkZGluZzogMC42MjVyZW0gMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uYnJhbmQtaW1hZ2Uge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/navbar/navbar.component.ts":
  /*!********************************************!*\
    !*** ./src/app/navbar/navbar.component.ts ***!
    \********************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let NavbarComponent = class NavbarComponent {
      constructor() {}

      ngOnInit() {}

    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'navbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navbar.component.scss */
      "./src/app/navbar/navbar.component.scss")).default]
    })], NavbarComponent);
    /***/
  },

  /***/
  "./src/app/safe-url.pipe.ts":
  /*!**********************************!*\
    !*** ./src/app/safe-url.pipe.ts ***!
    \**********************************/

  /*! exports provided: SafeUrlPipe */

  /***/
  function srcAppSafeUrlPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SafeUrlPipe", function () {
      return SafeUrlPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let SafeUrlPipe = class SafeUrlPipe {
      constructor(sanitizer) {
        this.sanitizer = sanitizer;
      }

      transform(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
      }

    };

    SafeUrlPipe.ctorParameters = () => [{
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]
    }];

    SafeUrlPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Pipe"])({
      name: 'safeUrl'
    })], SafeUrlPipe);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    const environment = {
      production: false,
      firebase: {
        apiKey: 'AIzaSyD5pJB-b1OovQpg8vtcQ6t3tAHR8iHrQBA',
        authDomain: 'link-230713.firebaseapp.com',
        databaseURL: 'https://link-230713.firebaseio.com',
        projectId: 'link-230713',
        storageBucket: 'link-230713.appspot.com',
        messagingSenderId: '391858568013',
        appId: '1:391858568013:web:1bd1e0c60d444aa771d504'
      },
      isDemo: true
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(err => console.error(err));
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\ahmad\Documents\GitHub\Link\src\main.ts */
    "./src/main.ts");
    /***/
  },

  /***/
  1:
  /*!********************!*\
    !*** os (ignored) ***!
    \********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map