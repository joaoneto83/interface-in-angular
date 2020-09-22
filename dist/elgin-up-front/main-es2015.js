(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <elgin-notifications *ngIf=\"!hasRoute('login')\"></elgin-notifications>\n<elgin-side-menu *ngIf=\"!hasRoute('login')\"></elgin-side-menu> -->\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/charts/line-chart/line-chart.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/charts/line-chart/line-chart.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-charts-line-chart\n  [view]=\"view\"\n  [scheme]=\"colorScheme\"\n  [xAxis]=\"xAxis\"\n  [yAxis]=\"yAxis\"\n  [roundDomains]=\"roundDomains\"\n  [results]=\"lineChart\">\n</ngx-charts-line-chart>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/charts/pie-chart/pie-chart.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/charts/pie-chart/pie-chart.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-charts-pie-chart\n  [view]=\"view\"\n  [scheme]=\"colorScheme\"\n  [results]=\"pieChart\">\n</ngx-charts-pie-chart>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/charts/vertical-bar-chart/vertical-bar-chart.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/charts/vertical-bar-chart/vertical-bar-chart.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-charts-bar-vertical \n    [view]=\"view\" \n    [scheme]=\"colorScheme\" \n    [results]=\"barChart\" \n    [yAxis]=\"showYAxis\"\n    [showXAxisLabel]=\"showXAxisLabel\"\n    [yScaleMin]=\"minYScaleValue\"\n    [yScaleMax]=\"maxYScaleValue\"\n    [autoScale]=\"autoScale\">\n</ngx-charts-bar-vertical>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/not-found/not-found.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/not-found/not-found.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"error-page\">\n    <div class=\"text-center\">\n        <h2>Página Não Encontrada</h2>\n        <p>\n            A página que você está procurando não existe\n            <a [routerLink]=\"['']\">Voltar a página inicial.</a>\n        </p>\n    </div>\n\n    <div class=\"text-center\">\n        <img src=\"../../assets/artefacts/undraw_Taken_if77.svg\" alt=\"Página não encontrada\"\n            class=\"sorry-svg\">\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/notifications/notifications.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/notifications/notifications.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"notification\">\n\n    <div class=\"toggle-display\">\n        <div class=\"bell\" (click)=\"toggle()\">\n            <em class=\"fas fa-bell\"></em>\n            <span class=\"count\">4</span>\n        </div>\n\n        <div class=\"notification-list\" [hidden]=\"!isActive\">\n            <span class=\"pointer\"></span>\n\n            <div class=\"sup\">\n                <span>Notificações e Avisos</span>\n                <a href=\"javascript:void(0)\" (click)=\"toggle()\">fechar</a>\n            </div>\n\n            <ul>\n                <li>\n                    <div class=\"date\">\n                        <span>12</span>\n                        <span>mar</span>\n                        <span>2020</span>\n                    </div>\n\n                    <div class=\"content\">\n                        <span>Você atingiu 36% da meta do mês.</span>\n                    </div>\n\n                    <span class=\"close\">&times;</span>\n                </li>\n                <li>\n                    <div class=\"date\">\n                        <span>13</span>\n                        <span>mar</span>\n                        <span>2020</span>\n                    </div>\n\n                    <div class=\"content\">\n                        <span>Pedido nº 21455622 retornado. verificar pendências.</span>\n                    </div>\n\n                    <span class=\"close\">&times;</span>\n                </li>\n                <li>\n                    <div class=\"date\">\n                        <span>13</span>\n                        <span>mar</span>\n                        <span>2020</span>\n                    </div>\n\n                    <div class=\"content\">\n                        <span>Pedido nº5646545 em análise comercial.</span>\n                    </div>\n\n                    <span class=\"close\">&times;</span>\n                </li>\n                <li>\n                    <div class=\"date\">\n                        <span>14</span>\n                        <span>mar</span>\n                        <span>2020</span>\n                    </div>\n\n                    <div class=\"content\">\n                        <span>Pedido nº 2654944 retornado.</span>\n                    </div>\n\n                    <span class=\"close\">&times;</span>\n                </li>\n            </ul>\n\n            <div class=\"all\">\n                <a href=\"javascript:void(0)\">ver todos</a>\n            </div>\n        </div>\n    </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/side-menu/side-menu.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/side-menu/side-menu.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"side-menu hover\" id=\"hoverMenu\">\n    <div class=\"side-menu-superior\">\n        <img src=\"../../../assets/images/marcaelgin1.png\" alt=\"marca elgin up\" class=\"elginUp-brand\" hidden>\n        <img src=\"../../../assets/images/logo-up1.png\" alt=\"elgin up logo\" class=\"elginUp-icon\">\n    </div>\n\n    <div class=\"user\">\n        <em class=\"fa fa-user\"></em>\n\n        <div class=\"user-opt\">\n            <span>Carlos Magno</span>\n            <span>Representante Elgin</span>\n            <a href=\"javascript:void(null)\">sair</a>\n        </div>\n    </div>\n\n    <ul>\n        <li *ngFor=\"let menuItem of menuItems; let i = index\" [ngClass]=\"{active: selectedItem == i}\"\n            (click)=\"navigateTo(i)\">\n\n            <em [class]=\"menuItem.icon\"></em>\n            <span>{{menuItem.title}}</span>\n        </li>\n    </ul>\n</div>\n\n<div class=\"responsive-navbar\" hidden>\n    <div class=\"side-menu-superior\">\n        <img src=\"../../../assets/images/logo-up1.png\" alt=\"elgin up logo\" class=\"elginUp-icon\">\n        <img src=\"../../../assets/images/marcaelgin1.png\" alt=\"marca elgin up\" class=\"elginUp-brand\">\n    </div>\n\n    <em class=\"fas fa-bars\" (click)=\"toggleMenu()\"></em>\n</div>\n\n<div *ngIf=\"toggle\" class=\"responsive-menu\">\n    <div class=\"backdrop\" (click)=\"toggleMenu()\"></div>\n    <div class=\"menu-toggle\">\n\n        <button class=\"btn btn-close\">\n            <em class=\"fas fa-times\" (click)=\"toggleMenu()\"></em>\n        </button>\n\n        <ul>\n            <li *ngFor=\"let menuItem of menuItems; let i = index\" [ngClass]=\"{active: selectedItem == i}\"\n                (click)=\"navigateTo(i); toggleMenu()\">\n\n                <em [class]=\"menuItem.icon\"></em>\n                <span>{{menuItem.title}}</span>\n            </li>\n        </ul>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/login/login.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/login/login.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"bg\">\n\n    <div class=\"card login\">\n        <div class=\"elgin-up-logo\">\n            <img src=\"../../../assets/images/logo-elgin-up1.png\" alt=\"elgin up logo\">\n        </div>\n\n        <div class=\"card-body\">\n            <form [formGroup]=\"formLogin\">\n                <div class=\"form-group\">\n                    <label for=\"login\">Login</label>\n                    <input formControlName=\"login\" (keydown.enter)=\"login()\" type=\"text\"class=\"form-control\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"password\">Senha</label>\n                    <input formControlName=\"senha\" (keydown.enter)=\"login()\" type=\"password\" class=\"form-control\">\n                </div>\n                <button (click) =\"login();\" type=\"submit\" class=\"btn btn-primary\" >entrar</button>\n            </form>\n\n            <a href=\"javascript:void(0)\" routerLink=\"/\" routerLinkActive=\"active\">Esqueci a senha</a>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/representative/home/home.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/representative/home/home.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<elgin-notifications ></elgin-notifications>\n<elgin-side-menu ></elgin-side-menu><section>\n\n<section>\n    <div class=\"container-fluid\">\n\n        <div class=\"charts\">\n\n            <div class=\"col-md-12 col-lg-9 px-0\">\n                <div class=\"left-side\">\n\n                    <div class=\"col-md-4 col-lg-3\">\n                        <div class=\"vertical-bar-chart\">\n                            <span class=\"title mb-2\">Meta Mensal</span>\n                            <div class=\"chart-info\">\n\n                                <div class=\"vertical-bar\">\n                                    <elgin-vertical-bar-chart [barChart]=\"barChart\"></elgin-vertical-bar-chart>\n                                </div>\n\n                                <div class=\"info\">\n                                    <span>80%</span>\n                                    <span>atingidos</span>\n                                    <a href=\"javascript:void(0)\">+ detalhes</a>\n                                </div>\n                            </div>\n\n                            <span class=\"recipt\">R$ 645.210,05</span>\n                        </div>\n                    </div>\n\n                    <div class=\"col-md-8 col-lg-9\">\n                        <div class=\"line-chart\">\n                            <span class=\"dateNow\">25/abril/2020</span>\n                            <span class=\"title mb-2\">Desempenho diário da meta</span>\n                            <elgin-line-chart [lineChart]=\"lineChart\"></elgin-line-chart>\n                        </div>\n                    </div>\n\n                    <div class=\"col-md-6 col-lg-6\">\n                        <div class=\"comissions\">\n                            <div class=\"sup\">\n                                <span>commissões</span>\n                                <a href=\"javascript:void(0)\">+ detalhes</a>\n                            </div>\n\n                            <div class=\"content\">\n                                <div class=\"state\">\n                                    <em class=\"fas fa-money-bill text-success\"></em>\n                                    <span>liberadas</span>\n                                </div>\n\n                                <img src=\"../../../../assets/artefacts/Ellipse31.png\" alt=\"straight line\">\n\n                                <div class=\"state\">\n                                    <em class=\"fas fa-coins text-warning\"></em>\n                                    <span>em aprovação</span>\n                                </div>\n\n                                <img src=\"../../../../assets/artefacts/Ellipse31.png\" alt=\"straight line\">\n\n                                <div class=\"state\">\n                                    <em class=\"far fa-clock\"></em>\n                                    <span>em atraso</span>\n                                </div>\n\n                                <img src=\"../../../../assets/artefacts/Ellipse31.png\" alt=\"straight line\">\n\n                                <div class=\"state\">\n                                    <em class=\"far fa-calendar-alt\"></em>\n                                    <span>futuras</span>\n                                </div>\n                            </div>\n\n                            <div class=\"bottom\">\n                                <span>Status da Comissão: </span>\n                                <span>Abril 2020 Aprovada</span>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"col-md-6 col-lg-6\">\n                        <div class=\"approved\">\n                            <div class=\"sup\">\n                                <span>aprovado</span>\n                                <a href=\"javascript:void(0)\">+ detalhes</a>\n                            </div>\n\n                            <div class=\"content\">\n                                <div class=\"state\">\n                                    <em class=\"fas fa-box\"></em>\n                                    <span>252</span>\n                                    <span>em separação</span>\n                                </div>\n\n                                <img src=\"../../../../assets/artefacts/Ellipse31.png\" alt=\"straight line\">\n\n                                <div class=\"state\">\n                                    <em class=\"fas fa-receipt\"></em>\n                                    <span>452</span>\n                                    <span>faturado</span>\n                                </div>\n\n                                <img src=\"../../../../assets/artefacts/Ellipse31.png\" alt=\"straight line\">\n\n                                <div class=\"state\">\n                                    <em class=\"fas fa-truck-moving\"></em>\n                                    <span>452</span>\n                                    <span>em transito</span>\n                                </div>\n\n                                <img src=\"../../../../assets/artefacts/Ellipse31.png\" alt=\"straight line\">\n\n                                <div class=\"state\">\n                                    <em class=\"fas fa-gift\"></em>\n                                    <span>450</span>\n                                    <span>entregue</span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n\n            <div class=\"col-md-12 col-lg-3 px-0\">\n                <div class=\"right-side\">\n\n                    <div class=\"col-md-6 col-lg-12\">\n                        <div class=\"orders\">\n                            <div class=\"sup\">\n                                <span>pedidos</span>\n                                <a href=\"javascript:void(0)\">+ detalhes</a>\n                            </div>\n                            <div class=\"content\">\n                                <div class=\"orders-info aproved\">\n                                    <span>252</span>\n                                    <span>Aprovados</span>\n                                </div>\n                                <div class=\"orders-info reproved\">\n                                    <span>23</span>\n                                    <span>Reprovados</span>\n                                </div>\n                                <div class=\"orders-info returned\">\n                                    <span>12</span>\n                                    <span>Retornados</span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"col-md-6 col-lg-12\">\n                        <div class=\"analysis\">\n                            <div class=\"sup\">\n                                <span>em analise</span>\n                                <a href=\"javascript:void(0)\">+ detalhes</a>\n                            </div>\n                            <div class=\"content\">\n                                <elgin-pie-chart [pieChart]=\"pieChart\"></elgin-pie-chart>\n                            </div>\n\n                            <div class=\"budget\">\n                                <span>75</span>\n                                <span>pedidos</span>\n                                <span>orçamento</span>\n                            </div>\n                            <div class=\"returned\">\n                                <span>12</span>\n                                <span>pedidos</span>\n                                <span>retornados</span>\n                            </div>\n                            <div class=\"credit\">\n                                <span>450</span>\n                                <span>pedidos</span>\n                                <span>crédito</span>\n                            </div>\n                            <div class=\"comercial\">\n                                <span>152</span>\n                                <span>pedidos</span>\n                                <span>comercial</span>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n\n<section>\n    <div class=\"carousel\">\n        <ngb-carousel>\n            <ng-template ngbSlide>\n                <div class=\"picsum-img-wrapper\">\n                    <img src=\"../../../../assets/artefacts/Group108.png\" alt=\"Carousel images\">\n                </div>\n            </ng-template>\n        </ngb-carousel>\n    </div>\n\n    <div class=\"selling-champions\">\n        <span class=\"title\">Campeões de Venda</span>\n\n        <ngb-carousel>\n            <ng-template ngbSlide>\n                <div class=\"picsum-img-wrapper\">\n                    <img src=\"../../../../assets/artefacts/Group23.png\" alt=\"selling-champions\">\n                </div>\n            </ng-template>\n        </ngb-carousel>\n    </div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/representative/orders/invoice-detail/invoice-detail.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/representative/orders/invoice-detail/invoice-detail.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n    <div class=\"close\" (click)=\"activeModal.dismiss()\">\n        <small>fechar</small>\n        <small aria-hidden=\"true\">&times;</small>\n    </div>\n</div>\n\n<div class=\"modal-body\">\n    <div class=\"order-detail\">\n        <span class=\"date\">{{ invoiceDetail?.data }}</span>\n\n        <div class=\"customer\">\n            <div class=\"d-flex flex-column\">\n                <span>{{ invoiceDetail?.cliente }}</span>\n                <span>{{ invoiceDetail?.cnpj }}</span>\n            </div>\n            <div class=\"d-flex flex-column\">\n                <span class=\"text-muted\">Representante</span>\n                <span>{{ invoiceDetail?.representate }}</span>\n            </div>\n            <div class=\"d-flex flex-column\">\n                <span class=\"text-muted\">Área</span>\n                <span>{{ invoiceDetail?.area }}</span>\n            </div>\n            <div class=\"d-flex flex-column\">\n                <span class=\"text-muted\">Requisitante</span>\n                <span>{{ invoiceDetail?.canal }}</span>\n            </div>\n            <div class=\"d-flex flex-column\">\n                <span class=\"text-muted\">UP</span>\n                <span>{{ invoiceDetail?.up }}</span>\n            </div>\n            <div class=\"d-flex flex-column\">\n                <span class=\"text-muted\">SAP</span>\n                <span>{{ invoiceDetail?.up }}</span>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"table-responsive\">\n        <table class=\"table table-bordered table-hover table-sm\" aria-describedby=\"orders table\">\n            <thead>\n                <tr>\n                    <th scope=\"col\">\n                        Nota Fiscal\n                        <em class=\"fas fa-search\"></em>\n                    </th>\n                    <th scope=\"col\">\n                        Status\n                        <em class=\"fas fa-search\"></em>\n                    </th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let item of invoiceDetail?.pedido; let i = index;\">\n                    <td class=\"invoices\">\n                        <span>{{item?.notaFiscal}}</span>\n\n                        <div class=\"export\">\n                            <button class=\"btn btn-custom\">danfe</button>\n                            <button class=\"btn btn-custom\">xml</button>\n                        </div>\n                    </td>\n\n                    <td>\n                        <div class=\"status\">\n                            <div class=\"status-point\">\n                                <span class=\"title\">Fases da remessa</span>\n\n                                <div class=\"columns\">\n                                    <div class=\"column-1\">\n                                        <span class=\"liner\"></span>\n                                        <em class=\"fas fa-boxes\"\n                                            [ngClass]=\"{'statusAnl' : item?.status === 'em análise'}\"></em>\n                                        <em class=\"fas fa-cart-arrow-down\"\n                                            [ngClass]=\"{'statusAnl' : item?.status === 'em análise'}\"></em>\n                                        <em class=\"fas fa-dollar-sign\"\n                                            [ngClass]=\"{\n                                                'statusFt' : item?.status === 'faturado', \n                                                'statusExc' : item?.status === 'reprovado' || item?.status === 'excluído'}\"></em>\n                                        <em class=\"fas fa-truck\"\n                                            [ngClass]=\"{'statusCrt' : item?.status === 'em carteira'}\"></em>\n                                        <em class=\"fas fa-cube\"\n                                            [ngClass]=\"{'statusEnt' : item?.status === 'entregue'}\"></em>\n                                    </div>\n\n                                    <div class=\"column-2\">\n                                        <div>\n                                            <span>Em separação</span>\n                                            <span>15/03/2020</span>\n                                            <span>11:45</span>\n                                        </div>\n                                        <div>\n                                            <span>Estoque Baixado</span>\n                                            <span>15/03/2020</span>\n                                            <span>12:47</span>\n                                        </div>\n                                        <div>\n                                            <span>Faturado</span>\n                                            <span>16/03/2020</span>\n                                            <span>8:45</span>\n                                        </div>\n                                        <div>\n                                            <span>Entrega em Andamento</span>\n                                            <span>17/03/2020</span>\n                                            <span>11:20</span>\n                                        </div>\n                                        <div>\n                                            <span>Entregue</span>\n                                            <span>17/03/2020</span>\n                                            <span>14:24</span>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <span [ngClass]=\"{\n                            'ft' : item?.status === 'faturado', \n                            'ent' : item?.status === 'entregue', \n                            'ftp' : item?.status === 'faturado parcela', \n                            'rsc' : item?.status === 'rascunho', \n                            'orc' : item?.status === 'orçamento', \n                            'crt' : item?.status === 'em carteira', \n                            'exc' : item?.status === 'excluído',\n                            'rep' : item?.status === 'reprovado',\n                            'anl' : item?.status === 'em análise' }\">\n                                {{ item?.status }}\n                            </span>\n                        </div>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>\n<div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-close\" (click)=\"activeModal.close()\">fechar</button>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/representative/orders/new-filter/new-filter.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/representative/orders/new-filter/new-filter.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n    <div class=\"close\" (click)=\"activeModal.dismiss()\">\n        <small>fechar</small>\n        <small aria-hidden=\"true\">&times;</small>\n    </div>\n</div>\n\n<div class=\"modal-body\">\n    <span class=\"title\">Adicionar Filtro de pesquisa</span>\n    <small class=\"sub-title\">Crie seu próprios filtros de pesquisa para agilizar suas rotinas diárias.</small>\n\n    <div class=\"filter-name\">\n        <div class=\"form-group\">\n            <label for=\"filter-name\">Crie um nome para o seu filtro</label>\n            <input type=\"text\" id=\"filter-name\" class=\"form-control form-control-sm\">\n        </div>\n\n        <div class=\"text-center\">\n            <button class=\"btn save-filter\">salvar</button>\n        </div>\n    </div>\n\n    <hr>\n\n    <ul ngbNav #nav=\"ngbNav\" [activeId]=\"1\" class=\"nav-tabs\">\n\n        <li [ngbNavItem]=\"1\">\n            <a ngbNavLink>Parâmetros do Filtro</a>\n            <ng-template ngbNavContent>\n                <p class=\"filter-label\">Representante - Geral:</p>\n\n                <div class=\"form-row\">\n                    <div class=\"form-group col-5\">\n                        <label for=\"param\">Parâmetro</label>\n                        <select id=\"param\" class=\"form-control form-control-sm\">\n                            <option>...</option>\n                            <option>...</option>\n                        </select>\n                    </div>\n                    <div class=\"form-group col-6\">\n                        <label for=\"content\">Conteúdo</label>\n                        <input type=\"text\" id=\"content\" class=\"form-control form-control-sm\">\n                    </div>\n                    <div class=\"form-group col-1 d-flex align-items-end\">\n                        <button class=\"btn btn-add\">\n                            <em class=\"fas fa-plus-circle\"></em>\n                        </button>\n                    </div>\n                </div>\n\n                <div class=\"form-row add-param\">\n                    <div class=\"col-md-6\">\n                        <div class=\"custom-control custom-checkbox custom-control-inline\">\n                            <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\" checked>\n                            <label class=\"custom-control-label\" for=\"customCheck1\">Magazine Luiza</label>\n                            <span class=\"remove-param\">\n                                <em class=\"fas fa-times\"></em>\n                                <span>remover</span>\n                            </span>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <div class=\"custom-control custom-checkbox custom-control-inline\">\n                            <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck2\" checked>\n                            <label class=\"custom-control-label\" for=\"customCheck2\">Casas Bahia</label>\n                            <span class=\"remove-param\">\n                                <em class=\"fas fa-times\"></em>\n                                <span>remover</span>\n                            </span>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <div class=\"custom-control custom-checkbox custom-control-inline\">\n                            <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck3\" checked>\n                            <label class=\"custom-control-label\" for=\"customCheck3\">Elgin Industrial Amazonia\n                                LTDA</label>\n                            <span class=\"remove-param\">\n                                <em class=\"fas fa-times\"></em>\n                                <span>remover</span>\n                            </span>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <div class=\"custom-control custom-checkbox custom-control-inline\">\n                            <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck4\" checked>\n                            <label class=\"custom-control-label\" for=\"customCheck4\">Elgin SA 02</label>\n                            <span class=\"remove-param\">\n                                <em class=\"fas fa-times\"></em>\n                                <span>remover</span>\n                            </span>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <div class=\"custom-control custom-checkbox custom-control-inline\">\n                            <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck5\" checked>\n                            <label class=\"custom-control-label\" for=\"customCheck5\">suprimentos</label>\n                            <span class=\"remove-param\">\n                                <em class=\"fas fa-times\"></em>\n                                <span>remover</span>\n                            </span>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <div class=\"custom-control custom-checkbox custom-control-inline\">\n                            <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck6\" checked>\n                            <label class=\"custom-control-label\" for=\"customCheck6\">em carteira</label>\n                            <span class=\"remove-param\">\n                                <em class=\"fas fa-times\"></em>\n                                <span>remover</span>\n                            </span>\n                        </div>\n                    </div>\n                </div>\n            </ng-template>\n        </li>\n\n        <li [ngbNavItem]=\"2\">\n            <a ngbNavLink>Parâmetros de Colunas</a>\n            <ng-template ngbNavContent>\n                <p class=\"filter-label\">Representante - Geral:</p>\n\n                <div class=\"form-row\">\n                    <div class=\"form-group col-8\">\n                        <label for=\"param\">Coluna</label>\n                        <select id=\"param\" class=\"form-control form-control-sm\">\n                            <option>...</option>\n                            <option>...</option>\n                        </select>\n                    </div>\n                    <div class=\"form-group col-4 add-colum\">\n                        <div>\n                            <button class=\"btn btn-add-colum\">\n                                <em class=\"fas fa-plus-circle\"></em>\n                            </button>\n                            <span>Adicionar</span>\n                        </div>\n                    </div>\n                </div>\n\n                <span class=\"text-b\">Escolha os parâmetros das colunas</span>\n                <span class=\"text-b\">(opções de dados que serão inclusos na tabela)</span>\n\n                <div class=\"form-row add-param\">\n                    <div class=\"col-md-6\">\n                        <div class=\"custom-control custom-checkbox custom-control-inline\">\n                            <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\" checked>\n                            <label class=\"custom-control-label\" for=\"customCheck1\">Clientes</label>\n                            <span class=\"remove-param\">\n                                <em class=\"fas fa-times\"></em>\n                                <span>remover</span>\n                            </span>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <div class=\"custom-control custom-checkbox custom-control-inline\">\n                            <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck2\" checked>\n                            <label class=\"custom-control-label\" for=\"customCheck2\">Status</label>\n                            <span class=\"remove-param\">\n                                <em class=\"fas fa-times\"></em>\n                                <span>remover</span>\n                            </span>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <div class=\"custom-control custom-checkbox custom-control-inline\">\n                            <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck3\" checked>\n                            <label class=\"custom-control-label\" for=\"customCheck3\">Nota Fiscal</label>\n                            <span class=\"remove-param\">\n                                <em class=\"fas fa-times\"></em>\n                                <span>remover</span>\n                            </span>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <div class=\"custom-control custom-checkbox custom-control-inline\">\n                            <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck4\" checked>\n                            <label class=\"custom-control-label\" for=\"customCheck4\">Representante</label>\n                            <span class=\"remove-param\">\n                                <em class=\"fas fa-times\"></em>\n                                <span>remover</span>\n                            </span>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <div class=\"custom-control custom-checkbox custom-control-inline\">\n                            <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck5\" checked>\n                            <label class=\"custom-control-label\" for=\"customCheck5\">Data</label>\n                            <span class=\"remove-param\">\n                                <em class=\"fas fa-times\"></em>\n                                <span>remover</span>\n                            </span>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <div class=\"custom-control custom-checkbox custom-control-inline\">\n                            <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck6\" checked>\n                            <label class=\"custom-control-label\" for=\"customCheck6\">Suprimentos</label>\n                            <span class=\"remove-param\">\n                                <em class=\"fas fa-times\"></em>\n                                <span>remover</span>\n                            </span>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <div class=\"custom-control custom-checkbox custom-control-inline\">\n                            <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck7\" checked>\n                            <label class=\"custom-control-label\" for=\"customCheck7\">Total</label>\n                            <span class=\"remove-param\">\n                                <em class=\"fas fa-times\"></em>\n                                <span>remover</span>\n                            </span>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <div class=\"custom-control custom-checkbox custom-control-inline\">\n                            <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck8\" checked>\n                            <label class=\"custom-control-label\" for=\"customCheck8\">Área</label>\n                            <span class=\"remove-param\">\n                                <em class=\"fas fa-times\"></em>\n                                <span>remover</span>\n                            </span>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <div class=\"custom-control custom-checkbox custom-control-inline\">\n                            <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck9\" checked>\n                            <label class=\"custom-control-label\" for=\"customCheck9\">SAP</label>\n                            <span class=\"remove-param\">\n                                <em class=\"fas fa-times\"></em>\n                                <span>remover</span>\n                            </span>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <div class=\"custom-control custom-checkbox custom-control-inline\">\n                            <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck10\" checked>\n                            <label class=\"custom-control-label\" for=\"customCheck10\">UP</label>\n                            <span class=\"remove-param\">\n                                <em class=\"fas fa-times\"></em>\n                                <span>remover</span>\n                            </span>\n                        </div>\n                    </div>\n                </div>\n            </ng-template>\n        </li>\n    </ul>\n\n    <div [ngbNavOutlet]=\"nav\" class=\"mt-2\"></div>\n\n</div>\n\n<div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-close\" (click)=\"activeModal.close()\">buscar</button>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/representative/orders/new-order/nacional-selling/add-order/add-order.component.html":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/representative/orders/new-order/nacional-selling/add-order/add-order.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section>\n    <div\n        class=\"position-relative d-flex flex-wrap align-items-center justify-content-md-between justify-content-center\">\n        <div class=\"client flex-md-grow-0 flex-grow-1 mb-3 mb-md-0\">\n            <span>ANDRE DA SILVA 05133195907</span>\n            <span>CNPJ: 34.463.428/0001-92</span>\n            <span>IE: ISENTO </span>\n            <span> Tel: (48) 3205-9233</span>\n        </div>\n\n        <span class=\"line d-md-block d-none\"></span>\n\n        <div class=\"representative active flex-md-grow-0 flex-grow-1\">\n            <span>Representante Maria</span>\n            <span>Área: Automação</span>\n            <span>Tipo Pedido: ZVMI</span>\n        </div>\n    </div>\n</section>\n\n<section *ngIf=\"!sendOrder; else finishOrder\">\n    <p class=\"my-3\">Linha de Produtos</p>\n\n    <div class=\"product-types\">\n        <span *ngFor=\"let item of elginProducts; let i = index\" [ngClass]=\"{active: selectedItem == i}\"\n            (click)=\"navigate(i, item)\">{{item.linha}}</span>\n    </div>\n\n    <div *ngIf=\"selectedItem == 0\">\n        <div class=\"elgin-products-container\">\n            <div *ngFor=\"let elginProduct of elginProducts[0]?.produtosTipo; let i = index\"\n                [ngClass]=\"{active: selectedProduct == i}\" (click)=\" selectProduct(i, elginProduct)\"\n                class=\"elgin-products\">\n                <img [src]=\"elginProduct?.thumbnail\" alt=\"elginProduct\" class=\"item-thumbnail\">\n                <span>{{ elginProduct?.tipo }}</span>\n            </div>\n        </div>\n\n        <div class=\"products\" *ngIf=\"productSelected\">\n            <div class=\"segments\">\n                <span>{{ productLine.linha }}</span>\n                <span>{{ productType.tipo }}</span>\n            </div>\n\n            <div class=\"nav-controlers d-flex flex-wrap align-items-end mt-3\">\n                <div class=\"col-auto\">\n                    <em class=\"fas fa-bars\" [ngClass]=\"{active: isMonoBlock}\" (click)=\"monoBlock()\"></em>\n                </div>\n                <div class=\"col-auto\">\n                    <em class=\"fas fa-th\" [ngClass]=\"{active: isMultiBlock}\" (click)=\"multiBlock()\"></em>\n                </div>\n                <div class=\"col-12 col-md-auto my-3 my-md-0\">\n                    <select id=\"inputGroupSelect01\" class=\"custom-select\">\n                        <option>visualizar 10 resultados por página</option>\n                        <option>visualizar 20 resultados por página</option>\n                    </select>\n                </div>\n            </div>\n\n            <div class=\"products-table d-flex flex-wrap align-items-end justify-content-start \n                justify-content-md-between\">\n                <span class=\"products-qtd order-\">186 produtos encontrados</span>\n\n                <div class=\"cart-container my-3 my-md-0\">\n                    <em class=\"fas fa-shopping-cart\"></em>\n                    <span class=\"cart-itens-qtd\">1 item</span>\n                    <span class=\"badge badge-pill badge-custom\" (click)=\"cartToggle = !cartToggle\">ver pedidos</span>\n\n                    <div class=\"hidden-cart\" [ngClass]=\"{'show-cart' : cartToggle}\" ngDraggable>\n                        <div class=\"head\">\n                            <span>Carrinho</span>\n                            <div class=\"close\" (click)=\"cartToggle = !cartToggle\">\n                                <small>fechar</small>\n                                <small aria-hidden=\"true\">&times;</small>\n                            </div>\n                        </div>\n                        <div class=\"body\">\n                            <ul class=\"list-group\">\n                                <li class=\"list-group-item\">\n                                    <div class=\"thumb\">\n                                        <img src=\"../../../../../../../assets/artefacts/splithighwall.png\" alt=\"produto\"\n                                            class=\"img-thumbnail\">\n                                        <div class=\"desc\">\n                                            <span>45HTQE18B2NA</span>\n                                            <span>UN.EXT.HW INVERTER TREND,18K,QF, 220V,1PH</span>\n                                        </div>\n                                    </div>\n                                    <span class=\"qtd\">22</span>\n                                </li>\n                            </ul>\n                        </div>\n\n                        <hr>\n\n                        <div class=\"foot\">\n                            <button class=\"btn btn-custom\" (click)=\"finishCart()\">Próximo</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"table-responsive mt-3\" *ngIf=\"isMonoBlock\">\n                <table class=\"table table-bordered table-hover table-sm\" aria-describedby=\"orders table\">\n                    <thead class=\"monoblock\">\n                        <tr>\n                            <th scope=\"col\" class=\"text-center\">Imagem</th>\n                            <th scope=\"col\">Código<em class=\"fas fa-search\"></em></th>\n                            <th scope=\"col\">Descrição<em class=\"fas fa-search\"></em></th>\n                            <th scope=\"col\">Estoque<em class=\"fas fa-search\"></em></th>\n                            <th scope=\"col\" class=\"text-center\">Qtd.</th>\n                            <th scope=\"col\" class=\"text-center\">Prazo</th>\n                        </tr>\n                    </thead>\n\n                    <tbody>\n                        <tr *ngFor=\"let item of elginProducts[3]?.produtosTipo?.produtos; let type = index\"\n                            (click)=\"openComparativeModal(item)\">\n                            <td class=\"text-center\">\n                                <img [src]=\"item?.imagem\" alt=\"representação do item\" class=\"img-thumbnail\">\n                            </td>\n                            <td>{{ item?.cod }}</td>\n                            <td>{{ item?.desc }}</td>\n                            <td>{{ item?.estoque }}</td>\n                            <td (click)=\"stopPropagation($event)\">\n                                <div class=\"amount\">\n                                    <button class=\"btn btn-decrease\" (click)=\"decreaseAmount(amountPanel)\">\n                                        <em class=\"fas fa-minus-circle\"></em>\n                                    </button>\n\n                                    <input type=\"number\" [id]=\"'amount'+ type\" [value]=\"amount\" class=\"panel\"\n                                        #amountPanel>\n\n                                    <button class=\"btn btn-increase\" (click)=\"increaseAmount(amountPanel)\">\n                                        <em class=\"fas fa-plus-circle\"></em>\n                                    </button>\n\n                                    <a href=\"javascript:void(0)\">adicionar</a>\n                                </div>\n                            </td>\n                            <td class=\"text-center\">\n                                <span class=\"d-block text-center\">\n                                    <em *ngIf=\"item.prazo == 'pronta entrega'\" class=\"fas fa-truck fa-2x success\"></em>\n                                    <em *ngIf=\"item.prazo == 'em análise'\" class=\"fas fa-industry fa-2x warning\"></em>\n                                </span>\n                                <span class=\"d-block text-center\">{{ item?.prazo }}</span>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <div *ngIf=\"isMultiBlock\">\n                <div class=\"table-responsive mt-3\">\n                    <table class=\"table table-bordered table-hover table-sm m-0\" aria-describedby=\"orders table\">\n                        <thead class=\"multiblock\">\n                            <tr>\n                                <th scope=\"col\">Código<em class=\"fas fa-search\"></em></th>\n                                <th scope=\"col\">Descrição<em class=\"fas fa-search\"></em></th>\n                                <th scope=\"col\">Estoque<em class=\"fas fa-search\"></em></th>\n                            </tr>\n                        </thead>\n                    </table>\n                </div>\n                <div class=\"d-flex flex-wrap\">\n                    <div class=\"col-12 col-md-3 col-lg-2 mb-3\"\n                        *ngFor=\"let item of elginProducts[3]?.produtosTipo?.produtos; let type = index\">\n                        <div class=\"card card-multiblock\">\n                            <div class=\"body\">\n                                <div class=\"thumbnail\">\n                                    <img [src]=\"item?.imagem\" alt=\"representação do item\"\n                                        (click)=\"openComparativeModal(item)\">\n                                    <div class=\"term\" [ngClass]=\"{'success' : item.prazo == 'pronta entrega',\n                                                        'warning' : item.prazo == 'em análise'}\">\n                                        <em *ngIf=\"item.prazo == 'pronta entrega'\" class=\"fas fa-truck fa-1x\"></em>\n                                        <em *ngIf=\"item.prazo == 'em análise'\" class=\"fas fa-industry fa-1x\"></em>\n                                        <span>{{ item?.prazo }}</span>\n                                    </div>\n                                </div>\n                                <div class=\"description\">\n                                    <div class=\"cod\">\n                                        <span>Código:</span>\n                                        <span>{{ item?.cod }}</span>\n                                    </div>\n                                    <div class=\"item-description\">\n                                        <span>{{ item?.desc }}</span>\n                                    </div>\n                                    <div class=\"stock\">\n                                        <span>Estoque:</span>\n                                        <span>{{ item.estoque }}</span>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"footer\" (click)=\"stopPropagation($event)\">\n                                <div class=\"amount\">\n                                    <button class=\"btn btn-decrease\" (click)=\"decreaseAmount(amountPanel)\">\n                                        <em class=\"fas fa-minus-circle\"></em>\n                                    </button>\n\n                                    <input type=\"number\" [id]=\"'amount'+ type\" [value]=\"amount\" class=\"panel\"\n                                        #amountPanel>\n\n                                    <button class=\"btn btn-increase\" (click)=\"increaseAmount(amountPanel)\">\n                                        <em class=\"fas fa-plus-circle\"></em>\n                                    </button>\n\n                                    <a href=\"javascript:void(0)\">adicionar</a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n\n<!-- Caso o usuário apertar próximo no carrinho, esta sessão será renderizada -->\n<ng-template #finishOrder>\n    <elgin-finish-order></elgin-finish-order>\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/representative/orders/new-order/nacional-selling/add-order/finish-order/finish-order.component.html":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/representative/orders/new-order/nacional-selling/add-order/finish-order/finish-order.component.html ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"redo\">\n    <span>Pedido 1064277</span>\n    <button class=\"btn btn-redo\"><em class=\"fas fa-redo-alt mr-2\"></em>Recalcular</button>\n</div>\n\n<section class=\"mx-3\">\n    <ul ngbNav #navTable=\"ngbNav\" [activeId]=\"1\" class=\"nav-tabs mt-3\">\n\n        <li [ngbNavItem]=\"1\">\n            <a ngbNavLink>EL02 - Elgin S/A - Fabrica Mogi - SP</a>\n            <ng-template ngbNavContent>\n\n                <div class=\"table-responsive\">\n                    <table class=\"table table-borderless table-sm\" aria-describedby=\"client table\">\n                        <thead>\n                            <tr>\n                                <th scope=\"col\">Total Geral</th>\n                                <th scope=\"col\">Total Itens</th>\n                                <th scope=\"col\">Total IPI</th>\n                                <th scope=\"col\">Total ICMS</th>\n                                <th scope=\"col\">Total ICMS ST</th>\n                                <th scope=\"col\">Total Frete</th>\n                                <th scope=\"col\">Total Desconto</th>\n                            </tr>\n                        </thead>\n\n                        <tbody>\n                            <tr>\n                                <td>R$ 4,40</td>\n                                <td>R$ 4,000.00</td>\n                                <td>R$ 0,40</td>\n                                <td>R$ 0,31</td>\n                                <td>R$ 0,00</td>\n                                <td>R$ 0,00</td>\n                                <td>- R$ 3,999.08</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n\n                <hr class=\"mt-0\">\n\n                <div class=\"navigation\">\n                    <ul ngbNav #navs=\"ngbNav\" [activeId]=\"1\" class=\"nav-tabs mt-3\">\n\n                        <li [ngbNavItem]=\"1\">\n                            <a ngbNavLink>Produtos</a>\n                            <ng-template ngbNavContent>\n\n                                <div class=\"filters\">\n                                    <span class=\"label\">Filtros:</span>\n\n                                    <div class=\"custom-control custom-checkbox custom-control-inline\">\n                                        <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\" checked\n                                            (change)=\"taxes = !taxes\">\n                                        <label class=\"custom-control-label\" for=\"customCheck1\">Impostos</label>\n                                    </div>\n                                    <div class=\"custom-control custom-checkbox custom-control-inline\">\n                                        <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck2\" checked\n                                            (change)=\"descounts = !descounts\">\n                                        <label class=\"custom-control-label\" for=\"customCheck2\">Descontos</label>\n                                    </div>\n                                    <div class=\"custom-control custom-checkbox custom-control-inline\">\n                                        <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck3\" checked\n                                            (change)=\"unitCalc = !unitCalc\">\n                                        <label class=\"custom-control-label\" for=\"customCheck3\">Unitário Calc.</label>\n                                    </div>\n                                    <div class=\"custom-control custom-checkbox custom-control-inline\">\n                                        <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck4\" checked\n                                            (change)=\"freight = !freight\">\n                                        <label class=\"custom-control-label\" for=\"customCheck4\">Frete</label>\n                                    </div>\n                                </div>\n\n                                <div class=\"table-responsive\">\n                                    <table class=\"table table-bordered table-sm\" aria-describedby=\"client table\">\n                                        <thead>\n                                            <tr>\n                                                <th scope=\"col\" class=\"text-left\">Descrição / Código Elgin</th>\n                                                <th scope=\"col\" [hidden]=\"!unitCalc\">Unitário Calc.</th>\n                                                <th scope=\"col\">Qtd.</th>\n                                                <th scope=\"col\" [hidden]=\"!freight\">Frete</th>\n                                                <th scope=\"col\" [hidden]=\"!descounts\">Descontos</th>\n                                                <th scope=\"col\" [hidden]=\"!taxes\">Impostos</th>\n                                            </tr>\n                                        </thead>\n\n                                        <tbody>\n                                            <tr>\n                                                <td>\n                                                    <div class=\"item\">\n                                                        <img src=\"../../../../../assets/artefacts/Group76.jpg\"\n                                                            alt=\"representação do item\"\n                                                            class=\"img-thumbnail mr-md-2 m-0\">\n                                                        <div class=\"desc\">\n                                                            <label for=\"elginCod\" class=\"mb-0\">Cód. Elgin</label>\n                                                            <span id=\"elginCod\"\n                                                                class=\"mb-1 text-black-50\">REF160002022700</span>\n                                                            <span id=\"item-model\">\n                                                                UN.EXT.HW INVERTER TREND,18K,QF, 220V,1PH\n                                                            </span>\n                                                        </div>\n                                                    </div>\n                                                </td>\n                                                <td [hidden]=\"!unitCalc\">R$ 0,0001 </td>\n                                                <td>500</td>\n                                                <td [hidden]=\"!freight\">R$ 0,00</td>\n                                                <td [hidden]=\"!taxes\">\n                                                    <div class=\"form-row taxes taxes1\">\n                                                        <div class=\"form-group col-12 col-md-6\">\n                                                            <label for=\"discount\">% Desconto</label>\n                                                            <span id=\"discount\">99.900,0000%</span>\n                                                        </div>\n                                                        <div class=\"form-group col-12 col-md-6\">\n                                                            <label for=\"unitDiscount\">Desconto Unitário</label>\n                                                            <span id=\"unitDiscount\">-R$ 0,0999</span>\n                                                        </div>\n                                                        <div class=\"form-group col-12 col-md-6\">\n                                                            <label for=\"unitWithDiscount\">Unitário Com Desconto</label>\n                                                            <span id=\"unitWithDiscount\">R$ 0,1000</span>\n                                                        </div>\n                                                    </div>\n                                                </td>\n                                                <td [hidden]=\"!descounts\">\n                                                    <div class=\"form-row taxes taxes2\">\n                                                        <div class=\"form-group\">\n                                                            <label for=\"ipi\">IPI</label>\n                                                            <span id=\"ipi\">0,00%</span>\n                                                        </div>\n                                                        <div class=\"form-group\">\n                                                            <label for=\"icms\">ICMS</label>\n                                                            <span id=\"icms\">0,099%</span>\n                                                        </div>\n                                                        <div class=\"form-group\">\n                                                            <label for=\"descIcms\">Desc. ICMS</label>\n                                                            <span id=\"descIcms\">7,00%</span>\n                                                        </div>\n                                                        <div class=\"form-group\">\n                                                            <label for=\"descIcms\">ICMS ST</label>\n                                                            <span id=\"icmsSt\">0,00%</span>\n                                                        </div>\n                                                        <div class=\"form-group\">\n                                                            <label for=\"totalTax\">Total c/ Impostos</label>\n                                                            <span id=\"totalTax\">R$ 101465,00</span>\n                                                        </div>\n                                                        <div class=\"form-group\">\n                                                            <label for=\"with\">% com</label>\n                                                            <span id=\"with\">R$ 0,00</span>\n                                                        </div>\n                                                    </div>\n                                                </td>\n                                            </tr>\n                                        </tbody>\n                                    </table>\n                                </div>\n                            </ng-template>\n                        </li>\n\n                        <li [ngbNavItem]=\"2\">\n                            <a ngbNavLink>Logística</a>\n                            <ng-template ngbNavContent>\n                                <div class=\"form-row\">\n                                    <div class=\"form-group col-md-2\">\n                                        <label for=\"freigthType\">Tipo de Frete</label>\n                                        <select id=\"freigthType\" class=\"custom-select\"\n                                            (change)=\"withdrawType($event.target.value)\">\n                                            <option *ngFor=\"let type of withdrawalTypes\" [value]=\"type.value\">\n                                                {{type.value}}</option>\n                                        </select>\n                                    </div>\n                                    <div class=\"form-group col-md-2\">\n                                        <label for=\"colector\">Coletor</label>\n                                        <select id=\"colector\" class=\"custom-select\"\n                                            (change)=\"colectType($event.target.value)\">\n                                            <option *ngFor=\"let type of filterTypes\" [value]=\"type.value\">{{type.value}}\n                                            </option>\n                                        </select>\n                                    </div>\n                                    <div class=\"form-group col-md-6 search\" [hidden]=\"!isTransporter\">\n                                        <em class=\"fas fa-search\"></em>\n                                        <label for=\"typeahead-format\">Transportadora</label>\n                                        <input id=\"typeahead-format\" type=\"text\" class=\"form-control\"\n                                            [ngbTypeahead]=\"search\" [resultFormatter]=\"formatter\" />\n                                    </div>\n                                    <div class=\"form-group col-md-2\" [hidden]=\"!isDelivery\">\n                                        <label for=\"freight\">frete</label>\n                                        <input type=\"text\" id=\"freight\" class=\"form-control\">\n                                        <small id=\"freightHelp\" class=\"form-text\">Calculado R$ 80,00</small>\n                                    </div>\n                                </div>\n\n                                <div class=\"form-row\" [hidden]=\"!isDelivery\">\n                                    <div class=\"form-group col-md-2\">\n                                        <label class=\"d-block\">Agendamento</label>\n\n                                        <div class=\"custom-control custom-radio custom-control-inline\">\n                                            <input type=\"radio\" id=\"isScheduled\" name=\"schedule\"\n                                                class=\"custom-control-input\" checked>\n                                            <label class=\"custom-control-label\" for=\"isScheduled\">sim</label>\n                                        </div>\n\n                                        <div class=\"custom-control custom-radio custom-control-inline\">\n                                            <input type=\"radio\" id=\"isNotScheduled\" name=\"schedule\"\n                                                class=\"custom-control-input\">\n                                            <label class=\"custom-control-label\" for=\"isNotScheduled\">não</label>\n                                        </div>\n                                    </div>\n                                    <div class=\"form-group col-md-2\">\n                                        <label for=\"scheduleType\">Forma de Agendamento</label>\n                                        <select id=\"scheduleType\" class=\"custom-select\">\n                                            <option>E-mail</option>\n                                        </select>\n                                    </div>\n                                </div>\n\n                                <div class=\"form-row\">\n                                    <div class=\"form-group col-md-2\">\n                                        <label class=\"d-block\">Paletizado</label>\n\n                                        <div class=\"custom-control custom-radio custom-control-inline\">\n                                            <input type=\"radio\" id=\"isPaletized\" name=\"palet\"\n                                                class=\"custom-control-input\" checked>\n                                            <label class=\"custom-control-label\" for=\"isPaletized\">sim</label>\n                                        </div>\n\n                                        <div class=\"custom-control custom-radio custom-control-inline\">\n                                            <input type=\"radio\" id=\"isNotPaletized\" name=\"palet\"\n                                                class=\"custom-control-input\">\n                                            <label class=\"custom-control-label\" for=\"isNotPaletized\">não</label>\n                                        </div>\n                                    </div>\n                                    <div class=\"form-group col-md-6\">\n                                        <label for=\"paletizedObs\">Obs de Paletizado</label>\n                                        <textarea class=\"form-control\" id=\"paletizedObs\" rows=\"5\"></textarea>\n                                    </div>\n                                    <div class=\"form-group col-md-4 align-self-md-end\" [hidden]=\"!isDelivery\">\n                                        <div class=\"freight-info\">\n                                            <span>Prazo de Entrega</span>\n                                            <span>3 dias úteis (somente após a emissão da NF)</span>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"form-row\" [hidden]=\"\n                                    !isForClient && isDelivery ||\n                                     isForClient && isWithdraw ||\n                                      isWithdraw && isTransporter\">\n\n                                    <div class=\"form-group col-12\">\n                                        <span class=\"address-title\">Endereço de Entrega</span>\n                                    </div>\n\n                                    <div class=\"form-group col-md-2\">\n                                        <label class=\"d-block\">Alterar Recebedor</label>\n\n                                        <div class=\"custom-control custom-radio custom-control-inline\">\n                                            <input type=\"radio\" id=\"changeReceiver\" name=\"receiver\"\n                                                class=\"custom-control-input\" checked>\n                                            <label class=\"custom-control-label\" for=\"changeReceiver\">sim</label>\n                                        </div>\n\n                                        <div class=\"custom-control custom-radio custom-control-inline\">\n                                            <input type=\"radio\" id=\"notChangeReceiver\" name=\"receiver\"\n                                                class=\"custom-control-input\">\n                                            <label class=\"custom-control-label\" for=\"notChangeReceiver\">não</label>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"form-group col-md-6 search\">\n                                        <em class=\"fas fa-search\"></em>\n                                        <label for=\"typeahead-format\">Buscar Cliente</label>\n                                        <input id=\"typeahead-format\" type=\"text\" class=\"form-control\"\n                                            [ngbTypeahead]=\"search\" [resultFormatter]=\"formatter\" />\n                                    </div>\n\n                                    <div class=\"form-group col-12 col-md-4\">\n                                        <div class=\"client flex-md-grow-0 flex-grow-1\">\n                                            <span>ANDRE DA SILVA 05133195907</span>\n                                            <span>CNPJ: 34.463.428/0001-92</span>\n                                            <span>IE: ISENTO </span>\n                                            <span> Tel: (48) 3205-9233</span>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"form-row\" [hidden]=\"\n                                    !isForClient && isDelivery ||\n                                     isForClient && isWithdraw ||\n                                      isWithdraw && isTransporter\">\n                                    <div class=\"form-group col-12 col-md-3\">\n                                        <div class=\"custom-control custom-radio custom-control-inline\">\n                                            <input type=\"radio\" id=\"addrees1\" name=\"deliveryAddress\"\n                                                class=\"custom-control-input\" checked>\n                                            <label class=\"custom-control-label\" for=\"addrees1\"></label>\n                                            <div class=\"address-card\">\n                                                <div class=\"head\">\n                                                    <span>ELGIN DISTRIBUIDORA LTDA</span>\n                                                </div>\n                                                <div class=\"body\">\n                                                    <span class=\"cnpj\">07.023.429/0001-43</span>\n                                                    <span class=\"d-flex align-items-center\">\n                                                        <span class=\"text-muted mr-1\">CEP:</span>\n                                                        <span>88308-620</span>\n                                                    </span>\n                                                    <span>ROD BR 101, nº 9285 - KM 122 4 SALA 23 -\n                                                        CIDADE NOVA - ITAJAÍ - SC</span>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"form-group col-12 col-md-3\">\n                                        <div class=\"custom-control custom-radio custom-control-inline\">\n                                            <input type=\"radio\" id=\"addrees2\" name=\"deliveryAddress\"\n                                                class=\"custom-control-input\">\n                                            <label class=\"custom-control-label\" for=\"addrees2\"></label>\n                                            <div class=\"address-card\">\n                                                <div class=\"head\">\n                                                    <span>Escritório</span>\n                                                </div>\n                                                <div class=\"body\">\n                                                    <span class=\"d-flex align-items-center\">\n                                                        <span class=\"text-muted mr-1\">CEP:</span>\n                                                        <span>88308-620</span>\n                                                    </span>\n                                                    <span>AV ARARAS, 579 - DISTR INDUSTRIAL - MANAUS - AM</span>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"form-group col-12 col-md-3\">\n                                        <div class=\"custom-control custom-radio custom-control-inline\">\n                                            <input type=\"radio\" id=\"addrees3\" name=\"deliveryAddress\"\n                                                class=\"custom-control-input\">\n                                            <label class=\"custom-control-label\" for=\"addrees3\"></label>\n                                            <div class=\"address-card\">\n                                                <div class=\"head\">\n                                                    <span>Distribuidor</span>\n                                                </div>\n                                                <div class=\"body\">\n                                                    <span class=\"d-flex align-items-center\">\n                                                        <span class=\"text-muted mr-1\">CEP:</span>\n                                                        <span>88308-620</span>\n                                                    </span>\n                                                    <span>AV TAMBORÉ, 12 - ALPHAVILLE INDUSTRIAL - BARUERI - SP</span>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n\n                            </ng-template>\n                        </li>\n\n                        <li [ngbNavItem]=\"3\">\n                            <a ngbNavLink>Financeiro</a>\n                            <ng-template ngbNavContent>\n\n                                <div class=\"form-row justify-content-center justify-content-md-around financial\">\n                                    <div class=\"col-md-8\">\n                                        <div class=\"form-row\">\n                                            <div class=\"col-md-2 align-self-center\">\n                                                <span class=\"segment\">Pagamento</span>\n                                            </div>\n                                            <div class=\"form-group col-md-2\">\n                                                <label for=\"dataBase\">Data Base</label>\n                                                <div class=\"input-group\">\n                                                    <input class=\"form-control\" name=\"d1\" #c1=\"ngModel\"\n                                                        [(ngModel)]=\"baseDate\" ngbDatepicker #d1=\"ngbDatepicker\"\n                                                        (input)=\"regex($event)\" maxlength=\"10\">\n                                                    <div class=\"input-group-append\">\n                                                        <button class=\"btn btn-outline-secondary calendar\"\n                                                            (click)=\"d1.toggle()\" type=\"button\">\n                                                            <em class=\"fas fa-calendar-alt\"></em>\n                                                        </button>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <div class=\"form-group col-md-4\">\n                                                <label for=\"cond\">Condições de pagamento</label>\n                                                <input type=\"text\" class=\"form-control\" id=\"cond\" value=\"E001 - a Vista\"\n                                                    disabled>\n                                            </div>\n                                            <div class=\"form-group col-md-3\">\n                                                <label for=\"paymentMethod\">Forma de pagamento</label>\n                                                <input type=\"text\" class=\"form-control\" id=\"paymentMethod\"\n                                                    value=\"Cartão de Crédito 12x\" disabled>\n                                            </div>\n\n                                            <div class=\"col-md-12\">\n                                                <hr>\n                                            </div>\n\n                                            <div class=\"col-md-2\">\n                                                <span class=\"segment\">Faturamento</span>\n                                            </div>\n                                            <div class=\"col-md-10\">\n                                                <div class=\"form-row\">\n                                                    <div class=\"form-group col-md-2\">\n                                                        <label>Data</label>\n                                                        <small class=\"d-block\">23/02/2020</small>\n                                                    </div>\n                                                    <div class=\"form-group col-md-4\">\n                                                        <label>Natureza de Operação</label>\n                                                        <small class=\"d-block\">9 - VENDA USO CONSUMO</small>\n                                                    </div>\n                                                    <div class=\"form-group col-md-3\">\n                                                        <label>Escritório</label>\n                                                        <small class=\"d-block\">E001 - Geral</small>\n                                                    </div>\n                                                    <div class=\"form-group col-md-3\">\n                                                        <label>Código Suframa</label>\n                                                        <small class=\"d-block\">200148940</small>\n                                                    </div>\n                                                </div>\n                                                <div class=\"form-row\">\n                                                    <div class=\"form-group col-md-3\">\n                                                        <label class=\"d-block\">Exige Nota</label>\n\n                                                        <div class=\"custom-control custom-radio custom-control-inline\">\n                                                            <input type=\"radio\" id=\"changeReceiver\" name=\"receiver\"\n                                                                class=\"custom-control-input\" checked>\n                                                            <label class=\"custom-control-label\"\n                                                                for=\"changeReceiver\">sim</label>\n                                                        </div>\n                                                        <div class=\"custom-control custom-radio custom-control-inline\">\n                                                            <input type=\"radio\" id=\"notChangeReceiver\" name=\"receiver\"\n                                                                class=\"custom-control-input\">\n                                                            <label class=\"custom-control-label\"\n                                                                for=\"notChangeReceiver\">não</label>\n                                                        </div>\n                                                    </div>\n                                                    <div class=\"form-group col-md-3\">\n                                                        <label>Inscrição Estadual</label>\n                                                        <small class=\"d-block\">94216546551</small>\n                                                    </div>\n                                                    <div class=\"form-group col-md-3\">\n                                                        <label>Código Cliente</label>\n                                                        <small class=\"d-block\">53781949994949</small>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"col-md-3\">\n                                        <p class=\"segment\">Endereço de Entrega</p>\n\n                                        <div class=\"charge-address\">\n                                            <div class=\"charge-payment-head\">\n                                                <span>Depósito</span>\n                                                <span>endereço principal</span>\n                                            </div>\n                                            <div class=\"charge-payment-body\">\n                                                <div class=\"form-row\">\n                                                    <div class=\"form-group\">\n                                                        <label for=\"CEP\">CEP:</label>\n                                                        <span id=\"CEP\" class=\"d-block\">69075-010</span>\n                                                    </div>\n                                                    <div class=\"form-group col-12\">\n                                                        <label for=\"address\">Logradouro:</label>\n                                                        <span id=\"address\" class=\"d-block\">AV ABIURANA, 579</span>\n                                                    </div>\n                                                    <div class=\"form-group col-12\">\n                                                        <label for=\"neighborhood\">Bairro:</label>\n                                                        <span id=\"neighborhood\" class=\"d-block\">Distrito\n                                                            Industrial</span>\n                                                    </div>\n                                                    <div class=\"form-group col-6\">\n                                                        <label for=\"CEP\">Cidade</label>\n                                                        <span class=\"d-block\">MANAUS</span>\n                                                    </div>\n                                                    <div class=\"form-group col-6\">\n                                                        <label for=\"CEP\">UF:</label>\n                                                        <span class=\"d-block\">AM</span>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <p class=\"segment mt-3\">Dados Complementares</p>\n\n                                <ul ngbNav #navObs=\"ngbNav\" [activeId]=\"1\" class=\"nav-tabs coments\">\n\n                                    <li [ngbNavItem]=\"1\">\n                                        <a ngbNavLink>Obs. NF</a>\n                                        <ng-template ngbNavContent>\n                                            <textarea class=\"form-control\" id=\"obsNf\" rows=\"5\"></textarea>\n                                        </ng-template>\n                                    </li>\n                                    <li [ngbNavItem]=\"2\">\n                                        <a ngbNavLink>Comentário de Crédito</a>\n                                        <ng-template ngbNavContent>\n                                            <textarea class=\"form-control\" id=\"creditComent\" rows=\"5\"></textarea>\n                                        </ng-template>\n                                    </li>\n                                    <li [ngbNavItem]=\"3\">\n                                        <a ngbNavLink>Comentário Comercial</a>\n                                        <ng-template ngbNavContent>\n                                            <textarea class=\"form-control\" id=\"comercialComent\" rows=\"5\"></textarea>\n                                        </ng-template>\n                                    </li>\n                                    <li [ngbNavItem]=\"4\">\n                                        <a ngbNavLink>Comentário Expedição</a>\n                                        <ng-template ngbNavContent>\n                                            <textarea class=\"form-control\" id=\"expeditionComent\" rows=\"5\"></textarea>\n                                        </ng-template>\n                                    </li>\n                                </ul>\n\n                                <div [ngbNavOutlet]=\"navObs\" class=\"mt-2\"></div>\n\n                                <div class=\"d-flex flex-wrap align-items-center justify-content-between my-4\">\n                                    <div class=\"col-12 col-md-auto mb-3\">\n                                        <button class=\"btn btn-draft w-100\">RASCUNHO</button>\n                                    </div>\n                                    <div class=\"col-12 col-md-auto mb-3\">\n                                        <button class=\"btn btn-budget w-100\">ORÇAMENTO</button>\n                                    </div>\n                                    <div class=\"col-12 col-md-auto mb-3\">\n                                        <button class=\"btn btn-finish w-100\">ENVIAR PEDIDO</button>\n                                    </div>\n                                </div>\n                            </ng-template>\n                        </li>\n                    </ul>\n                </div>\n\n                <div [ngbNavOutlet]=\"navs\" class=\"mt-2\"></div>\n            </ng-template>\n        </li>\n    </ul>\n\n    <div [ngbNavOutlet]=\"navTable\" class=\"mt-2\"></div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/representative/orders/new-order/nacional-selling/add-order/product-comparative/product-comparative.component.html":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/representative/orders/new-order/nacional-selling/add-order/product-comparative/product-comparative.component.html ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n    <div class=\"close\" (click)=\"activeModal.dismiss()\">\n        <small>fechar</small>\n        <small aria-hidden=\"true\">&times;</small>\n    </div>\n</div>\n\n<div class=\"modal-body\">\n    <p class=\"title\">Comparativo do produto similar</p>\n\n    <hr>\n\n    <div class=\"models\">\n        <div class=\"checkboxes-inline\">\n            <span class=\"label\">Compare com outros modelos:</span>\n\n            <div class=\"custom-control custom-checkbox custom-control-inline\">\n                <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\" checked>\n                <label class=\"custom-control-label\" for=\"customCheck1\">45HTQE18B2NA</label>\n            </div>\n            <div class=\"custom-control custom-checkbox custom-control-inline\">\n                <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck2\" checked>\n                <label class=\"custom-control-label\" for=\"customCheck2\">46HTQE18B2NA</label>\n            </div>\n            <div class=\"custom-control custom-checkbox custom-control-inline\">\n                <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck3\" checked>\n                <label class=\"custom-control-label\" for=\"customCheck3\">46HTQE18B2NA</label>\n            </div>\n            <div class=\"custom-control custom-checkbox custom-control-inline\">\n                <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck4\" checked>\n                <label class=\"custom-control-label\" for=\"customCheck4\">46HTQE18B2NA</label>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"table-responsive mt-3\">\n        <table class=\"table table-sm table-hover\" aria-describedby=\"comparativo entre produtos\">\n            <thead>\n                <tr>\n                    <th scope=\"col\">\n                        <div></div>\n                    </th>\n                    <th scope=\"col\">\n                        <div>\n                            <span class=\"title\">Produto Similar</span>\n                            <div class=\"thumb\">\n                                <img [src]=\"item?.imagem\" alt=\"imagem do produto\" class=\"img-thumbnail\">\n                                <span>{{item?.cod}}</span>\n                            </div>\n                        </div>\n                    </th>\n                    <th scope=\"col\">\n                        <div>\n                            <span class=\"title\">Produto 01</span>\n                            <div class=\"thumb\">\n                                <img [src]=\"item?.imagem\" alt=\"imagem do produto\" class=\"img-thumbnail\">\n                                <span>{{item?.cod}}</span>\n                            </div>\n                        </div>\n                    </th>\n                    <th scope=\"col\">\n                        <div>\n                            <span class=\"title\">Produto 02</span>\n                            <div class=\"thumb\">\n                                <img [src]=\"item?.imagem\" alt=\"imagem do produto\" class=\"img-thumbnail\">\n                                <span>{{item?.cod}}</span>\n                            </div>\n                        </div>\n                    </th>\n                    <th scope=\"col\">\n                        <div>\n                            <span class=\"title\">Produto 03</span>\n                            <div class=\"thumb\">\n                                <img [src]=\"item?.imagem\" alt=\"imagem do produto\" class=\"img-thumbnail\">\n                                <span>{{item?.cod}}</span>\n                            </div>\n                        </div>\n                    </th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td >Air Swinger</td>\n                    <td class=\"text-center\">sim <em class=\"fas fa-check text-success\"></em></td>\n                    <td class=\"text-center\">sim <em class=\"fas fa-check text-success\"></em></td>\n                    <td class=\"text-center\">não <em class=\"fas fa-times text-danger\"></em></td>\n                    <td class=\"text-center\">sim <em class=\"fas fa-check text-success\"></em></td>\n                </tr>\n                <tr>\n                    <td >Funcão Limpeza(Evaporador)</td>\n                    <td class=\"text-center\">sim <em class=\"fas fa-check text-success\"></em></td>\n                    <td class=\"text-center\">sim <em class=\"fas fa-check text-success\"></em></td>\n                    <td class=\"text-center\">não <em class=\"fas fa-times text-danger\"></em></td>\n                    <td class=\"text-center\">sim <em class=\"fas fa-check text-success\"></em></td>\n                </tr>\n                <tr>\n                    <td >Auto Restart</td>\n                    <td class=\"text-center\">sim <em class=\"fas fa-check text-success\"></em></td>\n                    <td class=\"text-center\">sim <em class=\"fas fa-check text-success\"></em></td>\n                    <td class=\"text-center\">não <em class=\"fas fa-times text-danger\"></em></td>\n                    <td class=\"text-center\">sim <em class=\"fas fa-check text-success\"></em></td>\n                </tr>\n                <tr>\n                    <td >Baixo Nível de Ruído</td>\n                    <td class=\"text-center\">sim <em class=\"fas fa-check text-success\"></em></td>\n                    <td class=\"text-center\">sim <em class=\"fas fa-check text-success\"></em></td>\n                    <td class=\"text-center\">não <em class=\"fas fa-times text-danger\"></em></td>\n                    <td class=\"text-center\">sim <em class=\"fas fa-check text-success\"></em></td>\n                </tr>\n                <tr>\n                    <td >BTU/h 9.000/ 12.000/ 18.000/ 24.000/ 30.000</td>\n                    <td class=\"text-center\">sim <em class=\"fas fa-check text-success\"></em></td>\n                    <td class=\"text-center\">sim <em class=\"fas fa-check text-success\"></em></td>\n                    <td class=\"text-center\">não <em class=\"fas fa-times text-danger\"></em></td>\n                    <td class=\"text-center\">sim <em class=\"fas fa-check text-success\"></em></td>\n                </tr>\n                <tr>\n                    <td >Classificação A INMETRO</td>\n                    <td class=\"text-center\">sim <em class=\"fas fa-check text-success\"></em></td>\n                    <td class=\"text-center\">sim <em class=\"fas fa-check text-success\"></em></td>\n                    <td class=\"text-center\">não <em class=\"fas fa-times text-danger\"></em></td>\n                    <td class=\"text-center\">sim <em class=\"fas fa-check text-success\"></em></td>\n                </tr>\n                <tr>\n                    <td >Desumidificador</td>\n                    <td class=\"text-center\">sim <em class=\"fas fa-check text-success\"></em></td>\n                    <td class=\"text-center\">sim <em class=\"fas fa-check text-success\"></em></td>\n                    <td class=\"text-center\">não <em class=\"fas fa-times text-danger\"></em></td>\n                    <td class=\"text-center\">sim <em class=\"fas fa-check text-success\"></em></td>\n                </tr>\n                <tr>\n                    <td >Display de Temperatura</td>\n                    <td class=\"text-center\">sim <em class=\"fas fa-check text-success\"></em></td>\n                    <td class=\"text-center\">sim <em class=\"fas fa-check text-success\"></em></td>\n                    <td class=\"text-center\">não <em class=\"fas fa-times text-danger\"></em></td>\n                    <td class=\"text-center\">sim <em class=\"fas fa-check text-success\"></em></td>\n                </tr>\n                <tr>\n                    <td >Duplo Swing</td>\n                    <td class=\"text-center\">sim <em class=\"fas fa-check text-success\"></em></td>\n                    <td class=\"text-center\">sim <em class=\"fas fa-check text-success\"></em></td>\n                    <td class=\"text-center\">não <em class=\"fas fa-times text-danger\"></em></td>\n                    <td class=\"text-center\">sim <em class=\"fas fa-check text-success\"></em></td>\n                </tr>\n                <tr>\n                    <td >Filtros</td>\n                    <td class=\"text-center\">sim <em class=\"fas fa-check text-success\"></em></td>\n                    <td class=\"text-center\">sim <em class=\"fas fa-check text-success\"></em></td>\n                    <td class=\"text-center\">não <em class=\"fas fa-times text-danger\"></em></td>\n                    <td class=\"text-center\">sim <em class=\"fas fa-check text-success\"></em></td>\n                </tr>\n                <tr>\n                    <td >Função Conforto</td>\n                    <td class=\"text-center\">sim <em class=\"fas fa-check text-success\"></em></td>\n                    <td class=\"text-center\">sim <em class=\"fas fa-check text-success\"></em></td>\n                    <td class=\"text-center\">não <em class=\"fas fa-times text-danger\"></em></td>\n                    <td class=\"text-center\">sim <em class=\"fas fa-check text-success\"></em></td>\n                </tr>\n                <tr>\n                    <td >Display Digital</td>\n                    <td class=\"text-center\">sim <em class=\"fas fa-check text-success\"></em></td>\n                    <td class=\"text-center\">sim <em class=\"fas fa-check text-success\"></em></td>\n                    <td class=\"text-center\">não <em class=\"fas fa-times text-danger\"></em></td>\n                    <td class=\"text-center\">sim <em class=\"fas fa-check text-success\"></em></td>\n                </tr>\n                <tr>\n                    <td >Ecológico</td>\n                    <td class=\"text-center\">sim <em class=\"fas fa-check text-success\"></em></td>\n                    <td class=\"text-center\">sim <em class=\"fas fa-check text-success\"></em></td>\n                    <td class=\"text-center\">não <em class=\"fas fa-times text-danger\"></em></td>\n                    <td class=\"text-center\">sim <em class=\"fas fa-check text-success\"></em></td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>\n<div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-close\" (click)=\"activeModal.close()\">fechar</button>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/representative/orders/new-order/nacional-selling/nacional-selling.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/representative/orders/new-order/nacional-selling/nacional-selling.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main\">\n    <div class=\"nav\">\n        <span class=\"title\">Novo Pedido</span>\n        <button class=\"btn btn-custom\" *ngIf=\"index == 2 || index == 3\" (click)=\"return()\">voltar</button>\n    </div>\n\n    <div class=\"row\" *ngIf=\"index == 1\">\n\n        <div class=\"col-md-8\">\n            <div class=\"form-row\">\n                <div class=\"col-md-4\" *ngFor=\"let representative of representatives; let i = index\">\n                    <div class=\"representative\" [ngClass]=\"{active: selectedItem == i}\" (click)=\"navigate(i, representativeChosen = true)\">\n                        <span>Representante {{representative.name}}</span>\n                        <span>Área: {{representative.area}}</span>\n                        <span>Tipo Pedido: {{representative.tipoPedido}}</span>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"col-md-4 text-md-right\">\n            <button class=\"btn btn-custom\" (click)=\"representativeChange()\">alterar representante</button>\n        </div>\n\n        <div class=\"col-md-12 search\" *ngIf=\"representativeChosen\">\n            <div class=\"form-group\">\n                <em class=\"fas fa-search\"></em>\n                <label for=\"typeahead-format\">Buscar Cliente</label>\n                <input id=\"typeahead-format\" type=\"text\" class=\"form-control\" [ngbTypeahead]=\"search\"\n                    [resultFormatter]=\"formatter\" />\n            </div>\n        </div>\n\n\n        <div class=\"col-md-12 last-clients\" *ngIf=\"representativeChosen\">\n            <span class=\"sub-title\">Últimos Clientes</span>\n\n            <hr>\n\n            <div class=\"form-row\">\n                <div class=\"col-md-3 mb-3\" *ngFor=\"let clients of representatives[0].clients\" (click)=\"selectClient()\">\n                    <div class=\"client\">\n                        <span>{{clients.clientName}}</span>\n                        <span>CNPJ: {{clients.cnpj}}</span>\n                        <span>IE: {{clients.ie}}</span>\n                        <span>Tel: {{clients.tel}}</span>\n                    </div>\n                </div>\n\n                <div class=\"col-12 text-center my-4\">\n                    <button class=\"btn btn-custom\">Minha Lista de Clientes</button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"d-flex flex-wrap chosenClient\" *ngIf=\"index == 2\">\n\n        <div class=\"col-12 requirent\">\n\n            <div class=\"row align-items-center\">\n                <div class=\"col-md-auto\">\n                    <div class=\"client\">\n                        <span>ANDRE DA SILVA 05133195907</span>\n                        <span>CNPJ: 34.463.428/0001-92</span>\n                        <span>IE: ISENTO </span>\n                        <span>Tel: (48) 3205-9233</span>\n                    </div>\n                </div>\n\n                <div class=\"col-md-auto text-center\">\n                    <button class=\"btn btn-custom shadow-sm\" (click)=\"includeOrder()\">Incluir Pedido</button>\n                </div>\n\n                <div class=\"col-md-auto ml-md-auto\">\n                    <div class=\"representative active mb-0 shadow-none\">\n                        <span>Representante Maria</span>\n                        <span>Área: Automação</span>\n                        <span>Tipo Pedido: ZVMI</span>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"last-clients w-100\">\n            <span>Últimos Pedidos</span>\n\n            <hr>\n\n            <div class=\"d-flex align-items-center mb-4\">\n                <label for=\"typeahead-format\">Buscar Outros Pedidos</label>\n\n                <div class=\"search col-md-3\">\n                    <div class=\"form-group m-0\">\n                        <em class=\"fas fa-search\"></em>\n                        <input id=\"typeahead-format\" type=\"text\" class=\"form-control\" [ngbTypeahead]=\"search\"\n                            [resultFormatter]=\"formatter\" />\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"table-responsive\">\n                <table class=\"table table-bordered table-hover table-sm\" aria-describedby=\"orders table\">\n                    <thead>\n                        <tr>\n                            <th scope=\"col\">N&ordm; Pedido</th>\n                            <th scope=\"col\" class=\"text-center\">Data</th>\n                            <th scope=\"col\">Cliente</th>\n                            <th scope=\"col\" class=\"text-center\">Nota Fiscal</th>\n                            <th scope=\"col\" class=\"text-center\">Total</th>\n                            <th scope=\"col\" class=\"text-center\"></th>\n                        </tr>\n                    </thead>\n\n                    <tbody>\n                        <tr>\n                            <td>1245454647</td>\n                            <td class=\"text-center\">10/FEV</td>\n                            <td>\n                                <span class=\"d-block client-td\">ELGIN INDUSTRIAL DA AMAZONIA LTDA</span>\n                                <span class=\"d-block\">14.200.166/0001-66</span>\n                            </td>\n                            <td class=\"text-center\">\n                                <span class=\"d-block\">012345664646425</span>\n                                <a href=\"javascript:void(0)\">ver todas as notas </a>\n                            </td>\n                            <td class=\"text-center\">R$ 1.999.465,00</td>\n                            <td class=\"text-center\">\n                                <button class=\"btn btn-custom\">Duplicar Pedido</button>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n\n    <elgin-add-order *ngIf=\"index == 3\"></elgin-add-order>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/representative/orders/new-order/nacional-selling/representative-change/representative-change.component.html":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/representative/orders/new-order/nacional-selling/representative-change/representative-change.component.html ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n    <div class=\"close\" (click)=\"activeModal.dismiss()\">\n        <small>fechar</small>\n        <small aria-hidden=\"true\">&times;</small>\n    </div>\n</div>\n\n<div class=\"modal-body\">\n    <span class=\"title\">Alterar Representante/Área</span>\n\n    <form aria-describedby=\"troca de representante\">\n        <div class=\"form-row\">\n            <div class=\"form-group col-12\">\n                <label for=\"representative\">Representante</label>\n                <select id=\"representative\" class=\"custom-select\">\n                    <option>...</option>\n                </select>\n            </div>\n            <div class=\"form-group col-12\">\n                <label for=\"area\">Área</label>\n                <select id=\"area\" class=\"custom-select\">\n                    <option>...</option>\n                </select>\n            </div>\n            <div class=\"form-group col-12\">\n                <label for=\"type\">Tipo de Pedido</label>\n                <select id=\"type\" class=\"custom-select\">\n                    <option>...</option>\n                </select>\n            </div>\n            <div class=\"form-group col-12\">\n                <label for=\"office\">Escritório</label>\n                <select id=\"office\" class=\"custom-select\">\n                    <option>...</option>\n                </select>\n            </div>\n            <div class=\"form-group col-12\">\n                <label for=\"requesterArea\">Área Requisitante</label>\n                <select id=\"requesterArea\" class=\"custom-select\">\n                    <option>...</option>\n                </select>\n            </div>\n        </div>\n    </form>\n</div>\n\n<div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-close\">continuar</button>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/representative/orders/new-order/new-order.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/representative/orders/new-order/new-order.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"top\">\n\n    <div class=\"page-title\">\n        <div class=\"title\">\n            <em class=\"fas fa-cart-arrow-down\"></em>\n            <span>Pedidos</span>\n        </div>\n    </div>\n\n    <div class=\"types\">\n        <div class=\"col-md-1\">\n            <span class=\"title\">tipos</span>\n        </div>\n        <div class=\"col-md-11\">\n            <div class=\"types-button\">\n                <button class=\"btn btn-item\" *ngFor=\"let item of typeItems; let i = index\"\n                    [ngClass]=\"{active: selectedItem == i}\" (click)=\"navigate(i)\">\n                    <em [class]=\" item.icon\"></em>\n                    <span>{{item.title}}</span>\n                </button>\n            </div>\n        </div>\n    </div>\n\n    <nav aria-label=\"breadcrumb\">\n        <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\" routerLink=\"../\">Pedidos</li>\n            <li class=\"breadcrumb-item\" routerLink=\"./\" aria-current=\"page\">Novo Pedido</li>\n            <li class=\"breadcrumb-item\" aria-current=\"page\" *ngIf=\"hasRoute('vendanacional')\">Venda Nacional</li>\n        </ol>\n    </nav>\n\n</section>\n\n<section class=\"content\">\n    <router-outlet></router-outlet>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/representative/orders/order-details/order-details.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/representative/orders/order-details/order-details.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n    <div class=\"close\" (click)=\"activeModal.dismiss()\">\n        <small>fechar</small>\n        <small aria-hidden=\"true\">&times;</small>\n    </div>\n</div>\n\n<div class=\"modal-body\">\n\n    <div class=\"description\">\n\n        <div class=\"row\">\n\n            <div class=\"col-md-2 column-1\">\n                <span>Pedido {{orderDetail.up}}</span>\n                <span><strong>Esse pedido possui {{orderDetail.nfQtd}} NF</strong></span>\n            </div>\n\n            <div class=\"col-md-10 column-2\">\n                <span class=\"line\"></span>\n                <div class=\"stage\">\n\n                    <span>\n                        <em class=\"fas fa-pen-alt\"></em>\n                    </span>\n                    <span>\n                        orçamento\n                        <em class=\"fas fa-check-circle\"></em>\n                    </span>\n                    <span>15/03/2020</span>\n                </div>\n                <div class=\"stage\">\n                    <span>\n                        <em class=\"far fa-handshake\"></em>\n                    </span>\n                    <span>\n                        comercial\n                        <em class=\"fas fa-check-circle\"></em>\n                    </span>\n                </div>\n                <div class=\"stage\">\n                    <span>\n                        <em class=\"fas fa-dollar-sign\"></em>\n                    </span>\n                    <span>\n                        crédito\n                        <em class=\"fas fa-check-circle\"></em>\n                    </span>\n                </div>\n                <div class=\"stage\">\n                    <span>\n                        <em class=\"fas fa-wallet\"></em>\n                    </span>\n                    <span>\n                        em carteira\n                        <em class=\"fas fa-check-circle\"></em>\n                    </span>\n                </div>\n            </div>\n        </div>\n\n    </div>\n\n    <div class=\"invoices\">\n\n        <div class=\"row\">\n\n            <div class=\"col-md-auto d-flex flex-wrap justify-content-between justify-content-md-start align-items-end\">\n                <div class=\"form-group m-0\">\n                    <label for=\"invoices\">N&ordm; Nota Fiscal</label>\n                    <select class=\"custom-select form-control-sm\" id=\"invoices\">\n                        <option *ngFor=\"let item of orderDetail.pedido\">{{item.notaFiscal}}</option>\n                    </select>\n                </div>\n\n                <button class=\"btn btn-custom\">danfe</button>\n                <button class=\"btn btn-custom\">xml</button>\n            </div>\n\n            <div\n                class=\"col-md-auto ml-md-auto d-flex align-items-end justify-content-between justify-content-md-start mt-md-0 mt-3\">\n                <button class=\"btn btn-previous\">\n                    <em class=\"fas fa-chevron-left\"></em>\n                    NF Anterior\n                </button>\n                <button class=\"btn btn-next\">\n                    Ir para próxima NF\n                    <em class=\"fas fa-chevron-right\"></em>\n                </button>\n            </div>\n\n            <div class=\"col-12 my-3\">\n                <div class=\"table-responsive\">\n                    <table class=\"table table-bordered table-sm\" aria-describedby=\"orders table\">\n                        <thead>\n                            <tr>\n                                <th scope=\"col\" class=\"text-center\">Data do<br>Pedido</th>\n                                <th scope=\"col\">Cliente</th>\n                                <th scope=\"col\">Representante/Área</th>\n                                <th scope=\"col\" class=\"text-center\">Área Requisitante</th>\n                                <th scope=\"col\" class=\"text-center\">Total Geral</th>\n                                <th scope=\"col\" class=\"text-center\">Status</th>\n                            </tr>\n                        </thead>\n\n                        <tbody>\n                            <tr>\n                                <td class=\"text-center\">{{orderDetail?.data}}</td>\n                                <td>\n                                    <span class=\"d-block client-td\">{{orderDetail?.cliente}}</span>\n                                    <span class=\"d-block\">{{orderDetail?.cnpj}}</span>\n                                </td>\n                                <td>\n                                    <div class=\"d-flex justify-content-between\">\n                                        <div class=\"d-flex flex-column\">\n                                            <span class=\"text-muted\">Representante:</span>\n                                            <span>{{orderDetail?.representate}}</span>\n                                        </div>\n                                        <div class=\"d-flex flex-column\">\n                                            <span class=\"text-muted\">Área:</span>\n                                            <span>{{orderDetail?.area}}</span>\n                                        </div>\n                                    </div>\n                                </td>\n                                <td class=\"text-center\">{{orderDetail?.canal}}</td>\n                                <td class=\"text-center\">{{ orderDetail?.valor | currency:'BRL' }}</td>\n                                <td class=\"text-center\">\n                                    <div class=\"d-flex justify-content-center\">\n                                        <span [ngClass]=\"{\n                                        'ft' : orderDetail?.pedido[0]?.status === 'faturado', \n                                        'ent' : orderDetail?.pedido[0]?.status === 'entregue', \n                                        'ftp' : orderDetail?.pedido[0]?.status === 'faturado parcela', \n                                        'rsc' : orderDetail?.pedido[0]?.status === 'rascunho', \n                                        'orc' : orderDetail?.pedido[0]?.status === 'orçamento', \n                                        'crt' : orderDetail?.pedido[0]?.status === 'em carteira', \n                                        'exc' : orderDetail?.pedido[0]?.status === 'excluído',\n                                        'rep' : orderDetail?.pedido[0]?.status === 'reprovado',\n                                        'anl' : orderDetail?.pedido[0]?.status === 'em análise' }\">\n                                            {{ orderDetail?.pedido[0]?.status }}\n                                        </span>\n                                    </div>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n\n            <div class=\"col-12\">\n\n                <div class=\"row\">\n                    <div class=\"col-md-auto mb-3 mb-md-0\">\n                        <span class=\"historic-text\">Histórico Fases de remessa</span>\n                    </div>\n                    <div class=\"col-md-auto historic flex-column flex-md-row\">\n                        <span class=\"line d-none d-md-block\"></span>\n                        <div class=\"stage\">\n                            <span><em class=\"fas fa-boxes\"></em></span>\n                            <span>Em Separação</span>\n                            <span>15/03/2020</span>\n                            <span>11:45</span>\n                        </div>\n                        <div class=\"stage\">\n                            <span><em class=\"fas fa-cart-arrow-down\"></em></span>\n                            <span>Estoque Baixado</span>\n                            <span>15/03/2020</span>\n                            <span>12:47</span>\n                        </div>\n                        <div class=\"stage\">\n                            <span><em class=\"fas fa-dollar-sign\"></em></span>\n                            <span>Faturado</span>\n                            <span>16/03/2020</span>\n                            <span>8:45</span>\n                        </div>\n                        <div class=\"stage\">\n                            <span><em class=\"fas fa-truck\"></em></span>\n                            <span>Entrega em Andamento</span>\n                            <span>17/03/2020</span>\n                            <span>8:45</span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n\n    <div class=\"client mb-md-0 mb-3\">\n        <div class=\"chosen-client\">\n            {{orderDetail.representate}} - Fabrica Mogi - SP\n        </div>\n\n        <div class=\"bottom-line\"></div>\n\n        <div class=\"table-responsive\">\n            <table class=\"table table-borderless table-sm\" aria-describedby=\"client table\">\n                <thead>\n                    <tr>\n                        <th scope=\"col\">Total Geral</th>\n                        <th scope=\"col\">Total Itens</th>\n                        <th scope=\"col\">Total IPI</th>\n                        <th scope=\"col\">Total ICMS</th>\n                        <th scope=\"col\">Total ICMS ST</th>\n                        <th scope=\"col\">Total Frete</th>\n                        <th scope=\"col\">Total Desconto</th>\n                    </tr>\n                </thead>\n\n                <tbody>\n                    <tr>\n                        <td>R$ 4,40</td>\n                        <td>R$ 4,000.00</td>\n                        <td>R$ 0,40</td>\n                        <td>R$ 0,31</td>\n                        <td>R$ 0,00</td>\n                        <td>R$ 0,00</td>\n                        <td>- R$ 3,999.08</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n\n    <div class=\"navigation\">\n        <ul ngbNav #nav=\"ngbNav\" [activeId]=\"1\" class=\"nav-tabs justify-content-md-start justify-content-center\">\n\n            <li [ngbNavItem]=\"1\">\n                <a ngbNavLink>Geral</a>\n                <ng-template ngbNavContent>\n                    <p class=\"filter-label\">Informações Financeiras e Fiscais</p>\n\n                    <div class=\"d-flex flex-wrap\">\n                        <div class=\"col-md-8\">\n                            <div class=\"d-flex align-items-center flex-wrap inferior-line\">\n\n                                <div class=\"col-md-2\">\n                                    <span class=\"segment\">Pagamento</span>\n                                </div>\n\n                                <div class=\"col-md-10\">\n                                    <div class=\"form-row\">\n                                        <div class=\"form-group col-md-2\">\n                                            <label for=\"dataBase\">Data Base:</label>\n                                            <input type=\"text\" class=\"form-control\" id=\"dataBase\" value=\"23/02/2020\"\n                                                disabled>\n                                        </div>\n                                        <div class=\"form-group col-md-4\">\n                                            <label for=\"cond\">Condições de pagamento:</label>\n                                            <input type=\"text\" class=\"form-control\" id=\"cond\" value=\"E001 - a Vista\"\n                                                disabled>\n                                        </div>\n                                        <div class=\"form-group col-md-3\">\n                                            <label for=\"paymentMethod\">Forma de pagamento:</label>\n                                            <input type=\"text\" class=\"form-control\" id=\"paymentMethod\"\n                                                value=\"Cartão de Crédito 12x\" disabled>\n                                        </div>\n                                    </div>\n                                </div>\n\n                            </div>\n\n                            <div class=\"d-flex flex-wrap\">\n\n                                <div class=\"col-md-2\">\n                                    <span class=\"segment\">Faturamento</span>\n                                </div>\n\n                                <div class=\"col-md-10\">\n                                    <div class=\"segment-info\">\n                                        <div class=\"form-row\">\n                                            <div class=\"form-group col-md-2\">\n                                                <label>Data:</label>\n                                                <small>23/02/2020</small>\n                                            </div>\n                                            <div class=\"form-group col-md-4\">\n                                                <label>Natureza de Operação:</label>\n                                                <small>9 - VENDA USO CONSUMO</small>\n                                            </div>\n                                            <div class=\"form-group col-md-3\">\n                                                <label>Escritório:</label>\n                                                <small>E001 - Geral</small>\n                                            </div>\n                                            <div class=\"form-group col-md-3\">\n                                                <label>Código Suframa:</label>\n                                                <small>200148940</small>\n                                            </div>\n                                        </div>\n                                        <div class=\"form-row\">\n                                            <div class=\"form-group col-md-2\">\n                                                <label>Exige Nota:</label>\n                                                <small>Não</small>\n                                            </div>\n                                            <div class=\"form-group col-md-4\">\n                                                <label>Inscrição Estadual:</label>\n                                                <small>94216546551</small>\n                                            </div>\n                                            <div class=\"form-group col-md-3\">\n                                                <label>Código Cliente:</label>\n                                                <small>53781949994949</small>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"col-md-4 my-2 my-md-0\">\n                            <div class=\"invoice-img ml-md-auto\">\n                                <div class=\"invoice-img-header\">\n                                    <em class=\"fas fa-print mr-1\"></em>\n                                    <a href=\"javascript:void(0)\"><u>Imprimir resumo do pedido</u></a>\n                                    <em class=\"fas fa-search-plus ml-auto\"></em>\n                                </div>\n                                <div class=\"invoice-img-body\">\n                                    <ng-image-slider [images]=\"imageObject\" #nav #zoom></ng-image-slider>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"col-12 last\">\n                            <div class=\"row\">\n                                <div class=\"col-md-3 my-2 my-md-0\">\n                                    <div class=\"charge-address\">\n                                        <div class=\"charge-payment-head\">Endereço de Cobrança</div>\n                                        <div class=\"charge-payment-body\">\n                                            <div class=\"form-row\">\n                                                <div class=\"form-group\">\n                                                    <label for=\"CEP\">CEP:</label>\n                                                    <span id=\"CEP\" class=\"d-block\">69075-010</span>\n                                                </div>\n                                                <div class=\"form-group col-12\">\n                                                    <label for=\"address\">Logradouro:</label>\n                                                    <span id=\"address\" class=\"d-block\">AV ABIURANA, 579</span>\n                                                </div>\n                                                <div class=\"form-group col-12\">\n                                                    <label for=\"neighborhood\">Bairro:</label>\n                                                    <span id=\"neighborhood\" class=\"d-block\">Distrito Industrial</span>\n                                                </div>\n                                                <div class=\"form-group col-6\">\n                                                    <label for=\"CEP\">Cidade</label>\n                                                    <span class=\"d-block\">MANAUS</span>\n                                                </div>\n                                                <div class=\"form-group col-6\">\n                                                    <label for=\"CEP\">UF:</label>\n                                                    <span class=\"d-block\">AM</span>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"col-md-6 my-2 my-md-0\">\n                                    <span>Dados Complementares</span>\n                                    <div class=\"form-row\">\n                                        <div class=\"form-group col-12\">\n                                            <label for=\"textArea\">Observações NF:</label>\n                                            <textarea class=\"form-control\" id=\"textArea\" rows=\"3\"></textarea>\n                                        </div>\n                                        <div class=\"form-group col-12\">\n                                            <label class=\"mb-2 d-block text-center text-md-left\">Adicionar\n                                                Comentários</label>\n                                            <div\n                                                class=\"d-flex flex-wrap justify-content-md-between justify-content-center \">\n                                                <button class=\"btn btn-comment mb-md-0 mb-2\">\n                                                    <em class=\"fas fa-plus mr-1\"></em>\n                                                    Comentário de Crédito\n                                                </button>\n                                                <button class=\"btn btn-comment mb-md-0 mb-2\">\n                                                    <em class=\"fas fa-plus mr-1\"></em>\n                                                    Comentário Comercial\n                                                </button>\n                                                <button class=\"btn btn-comment mb-md-0 mb-2\">\n                                                    <em class=\"fas fa-plus mr-1\"></em>\n                                                    Comentário de Expedição\n                                                </button>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </ng-template>\n            </li>\n\n            <li [ngbNavItem]=\"2\">\n                <a ngbNavLink>Logística</a>\n                <ng-template ngbNavContent>\n                    <p class=\"filter-label\">Informações Logísticas</p>\n\n                    <div class=\"row logistics\">\n                        <div class=\"col-md-9\">\n                            <div class=\"form-row\">\n                                <div class=\"form-group col-md-8\">\n                                    <label for=\"transporter\">Transportadora</label>\n                                    <span id=\"transporter\" class=\"d-block\">ALIANCA NAVEGACAO E LOG.LTDA.\n                                        (02.427.026/0012-07)</span>\n                                </div>\n                                <div class=\"form-group col-md-2\">\n                                    <label for=\"freightType\">Transportadora</label>\n                                    <span id=\"freightType\" class=\"d-block\">Entrega</span>\n                                </div>\n                                <div class=\"form-group col-md-2\">\n                                    <label for=\"freightCalculation\">Cálculo do Frete:</label>\n                                    <input type=\"text\" id=\"freightCalculation\" class=\"form-control form-control-sm\"\n                                        disabled value=\"R$ 80,00\">\n                                </div>\n                                <div class=\"form-group col-md-2\">\n                                    <label for=\"scheduled\" class=\"mr-1\">Agendamento:</label>\n                                    <span id=\"scheduled\">Não</span>\n                                </div>\n                                <div class=\"form-group col-md-2\">\n                                    <label for=\"costLessFreight\" class=\"mr-1\">Frete Reduzido:</label>\n                                    <span id=\"costLessFreight\">Não</span>\n                                </div>\n                                <div class=\"form-group col-md-2\">\n                                    <label for=\"palletized\" class=\"mr-1\">Paletizado:</label>\n                                    <span id=\"palletized\">Não</span>\n                                </div>\n                                <div class=\"form-group col-md-2\">\n                                    <label for=\"freightDate\" class=\"mr-1\">Prazo de Entrega:</label>\n                                    <span id=\"freightDate\">Não</span>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <div class=\"delivery-date\">\n                                <span class=\"title\">Prazo de Entrega</span>\n\n                                <span>2 dias úteis</span>\n                                <span>(Somente após a emissão da NF)</span>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"row delivery-address-container\">\n                        <div class=\"col-md-12\">\n                            <span class=\"title\">Endereço de Entrega</span>\n                        </div>\n\n                        <div class=\"col-md-3\">\n                            <div class=\"delivery-address\">\n                                <div class=\"charge-payment-head\">\n                                    <span class=\"title\">Depósito</span>\n                                    <span class=\"sub-title\">Endereço Principal</span>\n                                </div>\n                                <div class=\"charge-payment-body\">\n                                    <div class=\"form-row\">\n                                        <div class=\"form-group\">\n                                            <label for=\"CEP\">CEP:</label>\n                                            <span id=\"CEP\" class=\"d-block\">69075-010</span>\n                                        </div>\n                                        <div class=\"form-group col-12\">\n                                            <label for=\"address\">Logradouro:</label>\n                                            <span id=\"address\" class=\"d-block\">AV ABIURANA, 579</span>\n                                        </div>\n                                        <div class=\"form-group col-12\">\n                                            <label for=\"neighborhood\">Bairro:</label>\n                                            <span id=\"neighborhood\" class=\"d-block\">Distrito Industrial</span>\n                                        </div>\n                                        <div class=\"form-group col-6\">\n                                            <label for=\"CEP\">Cidade</label>\n                                            <span class=\"d-block\">MANAUS</span>\n                                        </div>\n                                        <div class=\"form-group col-6\">\n                                            <label for=\"CEP\">UF:</label>\n                                            <span class=\"d-block\">AM</span>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </ng-template>\n            </li>\n\n            <li [ngbNavItem]=\"3\">\n                <a ngbNavLink>Produtos</a>\n                <ng-template ngbNavContent>\n                    <div class=\"row\">\n                        <div class=\"col-12\">\n                            <div class=\"products\">\n                                <div class=\"table-responsive\">\n                                    <table class=\"table table-bordered table-sm\" aria-describedby=\"client table\">\n                                        <thead>\n                                            <tr>\n                                                <th scope=\"col\" class=\"text-left\">Descrição/Cód. Elgin</th>\n                                                <th scope=\"col\">Cálc. Unitário</th>\n                                                <th scope=\"col\">Qtd.</th>\n                                                <th scope=\"col\">Frete</th>\n                                                <th scope=\"col\">Cód. Cliente</th>\n                                                <th scope=\"col\">Descontos/Impostos</th>\n                                            </tr>\n                                        </thead>\n\n                                        <tbody>\n                                            <tr>\n                                                <td>\n                                                    <div class=\"item\">\n                                                        <img src=\"../../../../../assets/artefacts/Group76.jpg\"\n                                                            alt=\"representação do item\" class=\"img-thumbnail mr-md-2 m-0\">\n                                                        <div class=\"desc\">\n                                                            <label for=\"elginCod\" class=\"mb-0\">Cód. Elgin</label>\n                                                            <span id=\"elginCod\"\n                                                                class=\"mb-1 text-black-50\">REF160002022700</span>\n                                                            <span id=\"item-model\">\n                                                                UN.EXT.HW INVERTER TREND,18K,QF, 220V,1PH\n                                                            </span>\n                                                        </div>\n                                                    </div>\n                                                </td>\n                                                <td>R$ 0,0001</td>\n                                                <td>50</td>\n                                                <td>R$ 0,00</td>\n                                                <td>026545454</td>\n                                                <td>\n                                                    <div class=\"form-row taxes\">\n                                                        <div class=\"form-group col-md-4\">\n                                                            <label for=\"discount\">% Desconto</label>\n                                                            <span id=\"discount\">99.900,0000%</span>\n                                                        </div>\n                                                        <div class=\"form-group col-md-4\">\n                                                            <label for=\"unitDiscount\">Desconto Unitário</label>\n                                                            <span id=\"unitDiscount\">-R$ 0,0999</span>\n                                                        </div>\n                                                        <div class=\"form-group col-md-4\">\n                                                            <label for=\"unitWithDiscount\">Unitário Com Desconto</label>\n                                                            <span id=\"unitWithDiscount\">R$ 0,1000</span>\n                                                        </div>\n                                                        <div class=\"form-group\">\n                                                            <label for=\"ipi\">IPI</label>\n                                                            <span id=\"ipi\">0,00%</span>\n                                                        </div>\n                                                        <div class=\"form-group\">\n                                                            <label for=\"icms\">ICMS</label>\n                                                            <span id=\"icms\">0,099%</span>\n                                                        </div>\n                                                        <div class=\"form-group\">\n                                                            <label for=\"descIcms\">Desc. ICMS</label>\n                                                            <span id=\"descIcms\">7,00%</span>\n                                                        </div>\n                                                        <div class=\"form-group\">\n                                                            <label for=\"descIcms\">ICMS ST</label>\n                                                            <span id=\"icmsSt\">0,00%</span>\n                                                        </div>\n                                                        <div class=\"form-group\">\n                                                            <label for=\"totalTax\">Total c/ Impostos</label>\n                                                            <span id=\"totalTax\">R$ 101465,00</span>\n                                                        </div>\n                                                        <div class=\"form-group\">\n                                                            <label for=\"with\">% com</label>\n                                                            <span id=\"with\">R$ 0,00</span>\n                                                        </div>\n                                                    </div>\n                                                </td>\n                                            </tr>\n                                        </tbody>\n                                    </table>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </ng-template>\n            </li>\n        </ul>\n        <div [ngbNavOutlet]=\"nav\" class=\"mt-2\"></div>\n    </div>\n</div>\n<div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-close\" (click)=\"activeModal.close()\">fechar</button>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/representative/orders/order-init/order-init.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/representative/orders/order-init/order-init.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section>\n    <div class=\"navigation\">\n\n        <div class=\"title\">\n            <em class=\"fas fa-cart-arrow-down\"></em>\n            <span>Pedidos</span>\n        </div>\n\n        <button class=\"btn btn-custom\" (click)=\"goToNewOrder()\">Novo Pedido</button>\n    </div>\n</section>\n\n<section>\n    <div class=\"new-filter\">\n        <div class=\"controllers\">\n            <span class=\"title\">Aprovação e Consulta</span>\n\n            <div class=\"actions\">\n                <button class=\"btn btn-custom mr-3\" (click)=\"openFilterAddModal()\">Adicionar Filtro</button>\n\n                <div class=\"form-group m-0\">\n                    <label class=\"text-muted m-0\">Filtros Personalizados</label>\n                    <select class=\"custom-select\" [(ngModel)]=\"customFilter\" (change)=\"selectType($event)\">\n                        <option *ngFor=\"let stores of storesData; let i = index\">{{ stores.filter }}</option>\n                    </select>\n                </div>\n            </div>\n        </div>\n\n        <hr>\n\n        <div class=\"stores\">\n            <div class=\"chosen-filter\">\n                <span>{{ customFilter }}</span>\n            </div>\n\n            <div class=\"checkboxes-inline\" *ngFor=\"let stores of storesData | filter : customFilter\">\n                <div class=\"custom-control custom-checkbox custom-control-inline\"\n                    *ngFor=\"let item of stores.stores; let i = index\">\n                    <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1-{{i}}\" checked>\n                    <label class=\"custom-control-label\" for=\"customCheck1-{{i}}\">{{ item }}</label>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n\n<section>\n    <div class=\"orders-list\">\n        <span class=\"title\">Listagem de Pedidos</span>\n\n        <div class=\"options\">\n            <div class=\"form-group mr-3\">\n                <label>Data Início</label>\n                <div class=\"input-group\">\n                    <input class=\"form-control\" name=\"d1\" #c1=\"ngModel\" [(ngModel)]=\"initDate\" ngbDatepicker\n                        #d1=\"ngbDatepicker\" (input)=\"regex($event)\" maxlength=\"10\">\n                    <div class=\"input-group-append\">\n                        <button class=\"btn btn-outline-secondary calendar\" (click)=\"d1.toggle()\" type=\"button\">\n                            <em class=\"fas fa-calendar-alt\"></em>\n                        </button>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"form-group mr-3\">\n                <label>Data Final</label>\n                <div class=\"input-group\">\n                    <input class=\"form-control\" name=\"d2\" #c2=\"ngModel\" [(ngModel)]=\"endDate\" ngbDatepicker\n                        #d2=\"ngbDatepicker\" (input)=\"regex($event)\" maxlength=\"10\">\n                    <div class=\"input-group-append\">\n                        <button class=\"btn btn-outline-secondary calendar\" (click)=\"d2.toggle()\" type=\"button\">\n                            <em class=\"fas fa-calendar-alt\"></em>\n                        </button>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"custom-control custom-radio custom-control-inline\">\n                <input type=\"radio\" id=\"customRadioInline1\" name=\"customRadioInline1\" class=\"custom-control-input\"\n                    checked>\n                <label class=\"custom-control-label\" for=\"customRadioInline1\">resultados de 30 dias</label>\n            </div>\n\n            <div class=\"custom-control custom-radio custom-control-inline\">\n                <input type=\"radio\" id=\"customRadioInline2\" name=\"customRadioInline1\" class=\"custom-control-input\">\n                <label class=\"custom-control-label\" for=\"customRadioInline2\">Finalizados e não finalizados</label>\n            </div>\n\n            <div class=\"form-group mb-0 ml-lg-auto ml-md-0 ml-sm-0\">\n                <select class=\"custom-select\" (change)=\"changePaginationSize($event)\">\n                    <option *ngFor=\"let orderControl of orderControls\" [value]=\"orderControl.value\">\n                        {{orderControl.title}}\n                    </option>\n                </select>\n            </div>\n        </div>\n\n        <div class=\"list\">\n\n            <div class=\"list-control\">\n                <span class=\"list-total\">{{ orderListQtd }} produtos encontrados</span>\n\n                <div class=\"apr-rep\">\n                    <button class=\"btn btn-custom\">APROVAR SELECIONADOS</button>\n                    <button class=\"btn btn-custom\">REPROVAR SELECIONADOS</button>\n                </div>\n            </div>\n\n            <div class=\"table-responsive\">\n                <table class=\"table table-bordered table-hover table-sm\" aria-describedby=\"orders table\">\n\n                    <thead>\n                        <tr>\n                            <th scope=\"col\" class=\"text-center\">\n                                <div class=\"custom-control custom-checkbox\">\n                                    <input type=\"checkbox\" class=\"custom-control-input\" id=\"all\"\n                                        (change)=\"isSelected = !isSelected\">\n                                    <label class=\"custom-control-label\" for=\"all\"></label>\n                                </div>\n                            </th>\n                            <th scope=\"col\" class=\"text-center\">Data</th>\n                            <th scope=\"col\">\n                                Cliente\n                                <em class=\"fas fa-search\"></em>\n                            </th>\n                            <th scope=\"col\">\n                                Representante/Área\n                                <em class=\"fas fa-search\"></em>\n                            </th>\n                            <th scope=\"col\">\n                                Canal\n                                <em class=\"fas fa-search\"></em>\n                            </th>\n                            <th scope=\"col\" class=\"text-center\">UP</th>\n                            <th scope=\"col\">\n                                Nota Fiscal\n                                <em class=\"fas fa-search\"></em>\n                            </th>\n                            <th scope=\"col\" class=\"text-center\">Valor</th>\n                            <th scope=\"col\">\n                                Status\n                                <em class=\"fas fa-search\"></em>\n                            </th>\n                            <th scope=\"col\"></th>\n                        </tr>\n                    </thead>\n\n                    <tbody>\n                        <tr *ngFor=\"let order of ordersData | paginate: config; let i = index\"\n                            (click)=\"openOrderDetailsModal(order, $event)\">\n\n                            <td class=\"text-center\">\n                                <div class=\"custom-control custom-checkbox\" (click)=\"stopPropagation($event)\">\n                                    <input type=\"checkbox\" class=\"custom-control-input\" name=\"selector\" id=\"all{{i}}\"\n                                        [checked]=\"isSelected\">\n                                    <label class=\"custom-control-label\" for=\"all{{i}}\"></label>\n                                </div>\n                            </td>\n\n                            <td class=\"text-center\">{{ order?.data }}</td>\n\n                            <td>\n                                <div class=\"client\">{{ order?.cliente }}</div>\n                                <div>{{ order?.cnpj }}</div>\n                            </td>\n\n                            <td>\n                                <div class=\"d-flex justify-content-between\">\n                                    <div class=\"d-flex flex-column\">\n                                        <span class=\"text-muted\">Representante:</span>\n                                        <span>{{ order?.representate }}</span>\n                                    </div>\n                                    <div class=\"d-flex flex-column\">\n                                        <span class=\"text-muted\">Área:</span>\n                                        <span>{{ order?.area }}</span>\n                                    </div>\n                                </div>\n                            </td>\n\n                            <td>{{ order?.canal }}</td>\n\n                            <td class=\"text-center\">{{ order?.up }}</td>\n\n                            <td class=\"text-center\">\n                                {{ order?.pedido[0]?.notaFiscal }}\n                                <div *ngIf=\"order.nfQtd >= 1\" class=\"d-flex align-items-center justify-content-center\">\n                                    <span class=\"badge badge-pill badge-primary\">{{ order?.nfQtd }}</span>\n                                    <a href=\"javascript:void(0)\" (click)=\"openInvoiceDetailModal(order, $event)\">NF -\n                                        ver todas</a>\n                                </div>\n                            </td>\n\n                            <td class=\"text-center\">{{ order?.valor | currency:'BRL' }}</td>\n\n                            <td>\n                                <div class=\"d-flex justify-content-center\">\n                                    <span [ngClass]=\"{\n                                    'ft' : order.pedido[0].status === 'faturado', \n                                    'ent' : order.pedido[0].status === 'entregue', \n                                    'ftp' : order.pedido[0].status === 'faturado parcela', \n                                    'rsc' : order.pedido[0].status === 'rascunho', \n                                    'orc' : order.pedido[0].status === 'orçamento', \n                                    'crt' : order.pedido[0].status === 'em carteira', \n                                    'exc' : order.pedido[0].status === 'excluído',\n                                    'rep' : order.pedido[0].status === 'reprovado',\n                                    'anl' : order.pedido[0].status === 'em análise' }\">\n                                        {{ order?.pedido[0]?.status }}\n                                    </span>\n                                </div>\n                            </td>\n\n                            <td>\n                                <div class=\"actions\">\n                                    <div class=\"send\">\n                                        <a class=\"btn\" href=\"javascript:void(0)\">\n                                            <em class=\"fa fa-check-circle\"></em>\n                                        </a>\n                                        <span>enviar p/ analise</span>\n                                    </div>\n\n                                    <div class=\"exclude\">\n                                        <a class=\"btn\" href=\"javascript:void(0)\">\n                                            <em class=\"fa fa-times-circle\"></em>\n                                        </a>\n                                        <span>excluir</span>\n                                    </div>\n                                </div>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <div class=\"d-flex justify-content-end align-items-center flex-wrap\">\n                <pagination-controls [id]=\"config.id\" [maxSize]=\"optionalConfig.maxSize\"\n                    [directionLinks]=\"optionalConfig.directionLinks\" [autoHide]=\"optionalConfig.autoHide\"\n                    [responsive]=\"optionalConfig.responsive\" previousLabel=\"Anterior\" nextLabel=\"Próximo\"\n                    (pageChange)=\"onPageChange($event)\" (pageBoundsCorrection)=\"onPageBoundsCorrection($event)\">\n                </pagination-controls>\n\n                <div class=\"column\">\n                    <label class=\"control\">ir para a página\n                        <input type=\"number\" class=\"input\" min=\"1\" [value]=\"config.currentPage\"\n                            (change)=\"jumpToPage($event)\">\n                    </label>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/representative/products/products.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/representative/products/products.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section>\n    <div class=\"navigation\">\n        <div class=\"title\">\n            <em class=\"fas fa-box-open\"></em>\n            <span>Produtos</span>\n        </div>\n    </div>\n</section>\n\n<section>\n\n    <div class=\"types-button\">\n        <button class=\"btn btn-item\" *ngFor=\"let item of typeItems; let i = index\"\n            [ngClass]=\"{active: selectedItem == i}\" (click)=\"navigate(i)\">\n            <em [class]=\" item.icon\"></em>\n            <span>{{item.title}}</span>\n        </button>\n    </div>\n\n    <nav aria-label=\"breadcrumb\">\n        <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\" routerLink=\"../\">Produtos</li>\n            <!-- <li class=\"breadcrumb-item\" routerLink=\"./\" aria-current=\"page\">Novo Pedido</li>\n            <li class=\"breadcrumb-item\" aria-current=\"page\" *ngIf=\"hasRoute('vendanacional')\">Venda Nacional</li> -->\n        </ol>\n    </nav>\n</section>");

/***/ }),

/***/ "./src/app/_core/services/token.service.ts":
/*!*************************************************!*\
  !*** ./src/app/_core/services/token.service.ts ***!
  \*************************************************/
/*! exports provided: TokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return TokenService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _environments_environments__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environments */ "./src/environments/environments.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







const KEY = 'ElginPortalToken';
let TokenService = class TokenService {
    constructor(http, handler, platformId) {
        //this.http = new HttpClient(handler); //Usar apenas quando não chamar o Auth
        this.http = http;
        this.platformId = platformId;
        this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](null);
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["isPlatformBrowser"])(this.platformId)) {
            this.hasToken() &&
                this.decodeAndNotify();
        }
    }
    hasToken() {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["isPlatformBrowser"])(this.platformId)) {
            return !!this.getToken();
        }
    }
    // haveRoles(roles: string[]) {
    //     let have = false;
    //     roles.forEach(role => {
    //         if (this.Acessos.find(x => x.includes(role))) {
    //             have = true;
    //         }
    //     });
    //     return have;
    // }
    getTokenExpirationDate(token) {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["isPlatformBrowser"])(this.platformId)) {
            const decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_3__(token);
            if (decoded.exp === undefined)
                return null;
            const date = new Date(0);
            date.setUTCSeconds(decoded.exp);
            return date;
        }
    }
    isTokenExpired(token) {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["isPlatformBrowser"])(this.platformId)) {
            if (!token)
                token = this.getToken();
            if (!token)
                return true;
            const date = this.getTokenExpirationDate(token);
            if (date === undefined)
                return false;
            return !(date.valueOf() > new Date().valueOf());
        }
    }
    setToken(usuario, senha) {
        return this.http.post(`${_environments_environments__WEBPACK_IMPORTED_MODULE_4__["environment"].PORTAL_API}/Login/Login`, { login: usuario, senha: senha }, { responseType: "text" });
    }
    // setToken(usuario, senha) {
    //     return this.http.post(`${environment.PORTAL_API}/Token`,
    //         { userID: usuario, password: senha },
    //         { responseType: "text" });
    // }
    getToken() {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["isPlatformBrowser"])(this.platformId)) {
            return window.localStorage.getItem(KEY);
        }
    }
    removeToken() {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["isPlatformBrowser"])(this.platformId)) {
            window.localStorage.removeItem(KEY);
        }
    }
    isLogged() {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["isPlatformBrowser"])(this.platformId)) {
            return !!this.getToken();
        }
    }
    haveAdmin() {
        if (this.Acessos.find(x => x.includes("EDICAO")))
            return true;
        return false;
    }
    getTokenSuccess(token) {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["isPlatformBrowser"])(this.platformId)) {
            localStorage.setItem(KEY, token);
            this.decodeAndNotify();
        }
    }
    getUser() {
        return this.userSubject.asObservable();
    }
    getTokenError(err) {
        this.hasError = true;
        console.log('erro obtendo o token: ' + err);
    }
    decodeAndNotify() {
        const token = this.getToken();
        const user = jwt_decode__WEBPACK_IMPORTED_MODULE_3__(token);
        this.Id = user.id;
        this.Nome = user.nome;
        // this.CaminhoFoto = user.caminhoFoto;
        // this.Sigla = user.sigla;
        // this.Acessos = user.acessos.split("|");
        // this.Telefone = user.telefone;
        // this.NomeSetor = user.nomeSetor;
        // this.Registro = user.registro;
        this.Email = user.email;
        this.Avatar = user.avatar;
        this.PerfilId = user.perfilId;
        this.Perfil = user.perfil;
        this.userSubject.next(user);
    }
};
TokenService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpBackend"] },
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] }
];
TokenService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]))
], TokenService);



/***/ }),

/***/ "./src/app/_shered/service/adm-usuario.service.ts":
/*!********************************************************!*\
  !*** ./src/app/_shered/service/adm-usuario.service.ts ***!
  \********************************************************/
/*! exports provided: AdmUsuarioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmUsuarioService", function() { return AdmUsuarioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_environments_environments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environments */ "./src/environments/environments.ts");




// import { NovaSenha } from '../../login/novaSenha';
// import { TipoUsuario } from '../../_models/tipoUsuario';
// import { TipoDependente } from '../../_models/tipoDependente';
let AdmUsuarioService = class AdmUsuarioService {
    constructor(http) {
        this.http = http;
    }
    getUsuarios() {
        return this.http.get(`${src_environments_environments__WEBPACK_IMPORTED_MODULE_3__["environment"].PORTAL_API}/Usuario`);
    }
    getUsuario(id) {
        return this.http.get(`${src_environments_environments__WEBPACK_IMPORTED_MODULE_3__["environment"].PORTAL_API}/Usuario/${id}`);
    }
    resetarSenha(login) {
        return this.http.get(`${src_environments_environments__WEBPACK_IMPORTED_MODULE_3__["environment"].PORTAL_API}/Usuario/ResetarSenha/${login}`);
    }
    validarCodigo(login, codigo) {
        return this.http.get(`${src_environments_environments__WEBPACK_IMPORTED_MODULE_3__["environment"].PORTAL_API}/Usuario/validarCodigo/${login}/${codigo}`);
    }
    // alterarSenha(model: NovaSenha): Observable<boolean>{
    //     return this.http.post<boolean>(
    //         `${environment.PORTAL_API}/Usuario/AlterarSenha`, model);
    // }
    validaLogin(model) {
        return this.http.post(`${src_environments_environments__WEBPACK_IMPORTED_MODULE_3__["environment"].PORTAL_API}/Usuario/ValidaLogin`, model);
    }
    salvar(model) {
        return this.http.post(`${src_environments_environments__WEBPACK_IMPORTED_MODULE_3__["environment"].PORTAL_API}/Usuario/Salvar`, model);
    }
};
AdmUsuarioService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AdmUsuarioService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], AdmUsuarioService);



/***/ }),

/***/ "./src/app/_shered/service/loading.service.ts":
/*!****************************************************!*\
  !*** ./src/app/_shered/service/loading.service.ts ***!
  \****************************************************/
/*! exports provided: LoadingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingService", function() { return LoadingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let LoadingService = class LoadingService {
    constructor() {
        this.fire = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.hide();
    }
    hide() {
        this.fire.emit(false);
    }
    show() {
        this.fire.emit(true);
    }
    getEmittedValue() {
        return this.fire;
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], LoadingService.prototype, "fire", void 0);
LoadingService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], LoadingService);



/***/ }),

/***/ "./src/app/_shered/validators/password/password.validator.ts":
/*!*******************************************************************!*\
  !*** ./src/app/_shered/validators/password/password.validator.ts ***!
  \*******************************************************************/
/*! exports provided: PasswordValidation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordValidation", function() { return PasswordValidation; });
class PasswordValidation {
    static MatchPassword(AC) {
        let password = AC.get('password').value; // to get value in input tag
        let confirmPassword = AC.get('confirmPassword').value; // to get value in input tag
        if (password != confirmPassword) {
            AC.get('confirmPassword').setErrors({ MatchPassword: true });
        }
        else {
            return null;
        }
    }
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_layouts_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/layouts/not-found/not-found.component */ "./src/app/layouts/not-found/not-found.component.ts");




const routes = [
    {
        path: 'home',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./main/representative/representative.module */ "./src/app/main/representative/representative.module.ts")).then(m => m.RepresentativeModule)
    },
    {
        path: '',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./main/login/login.module */ "./src/app/main/login/login.module.ts")).then(m => m.LoginModule)
    },
    {
        path: '**', component: src_app_layouts_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let AppComponent = class AppComponent {
    constructor(router) {
        this.router = router;
    }
    hasRoute(route) {
        return this.router.url.includes(route);
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'elgin-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layouts_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layouts/not-found/not-found.component */ "./src/app/layouts/not-found/not-found.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _main_login_login_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main/login/login.module */ "./src/app/main/login/login.module.ts");
/* harmony import */ var _main_representative_representative_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main/representative/representative.module */ "./src/app/main/representative/representative.module.ts");
/* harmony import */ var _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layouts/layouts.module */ "./src/app/layouts/layouts.module.ts");











let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _layouts_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_10__["LayoutsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
            _main_login_login_module__WEBPACK_IMPORTED_MODULE_8__["LoginModule"],
            _main_representative_representative_module__WEBPACK_IMPORTED_MODULE_9__["RepresentativeModule"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/layouts/charts/line-chart/line-chart.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/layouts/charts/line-chart/line-chart.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvY2hhcnRzL2xpbmUtY2hhcnQvbGluZS1jaGFydC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/layouts/charts/line-chart/line-chart.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/layouts/charts/line-chart/line-chart.component.ts ***!
  \*******************************************************************/
/*! exports provided: LineChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineChartComponent", function() { return LineChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let LineChartComponent = class LineChartComponent {
    constructor() {
        this.view = [750, 140];
        // options
        this.showLabels = true;
        this.animations = true;
        this.xAxis = true;
        this.yAxis = true;
        this.roundDomains = true;
        this.colorScheme = { domain: ['#0063AF'] };
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LineChartComponent.prototype, "lineChart", void 0);
LineChartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'elgin-line-chart',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./line-chart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/charts/line-chart/line-chart.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./line-chart.component.scss */ "./src/app/layouts/charts/line-chart/line-chart.component.scss")).default]
    })
], LineChartComponent);



/***/ }),

/***/ "./src/app/layouts/charts/pie-chart/pie-chart.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/layouts/charts/pie-chart/pie-chart.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvY2hhcnRzL3BpZS1jaGFydC9waWUtY2hhcnQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/layouts/charts/pie-chart/pie-chart.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/layouts/charts/pie-chart/pie-chart.component.ts ***!
  \*****************************************************************/
/*! exports provided: PieChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieChartComponent", function() { return PieChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let PieChartComponent = class PieChartComponent {
    constructor() {
        this.view = [170, 170];
        this.colorScheme = {
            domain: ['#FE0D64', '#0063AF', '#4BD37B', '#FFE070']
        };
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PieChartComponent.prototype, "pieChart", void 0);
PieChartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'elgin-pie-chart',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./pie-chart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/charts/pie-chart/pie-chart.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./pie-chart.component.scss */ "./src/app/layouts/charts/pie-chart/pie-chart.component.scss")).default]
    })
], PieChartComponent);



/***/ }),

/***/ "./src/app/layouts/charts/vertical-bar-chart/vertical-bar-chart.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/layouts/charts/vertical-bar-chart/vertical-bar-chart.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvY2hhcnRzL3ZlcnRpY2FsLWJhci1jaGFydC92ZXJ0aWNhbC1iYXItY2hhcnQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/layouts/charts/vertical-bar-chart/vertical-bar-chart.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/layouts/charts/vertical-bar-chart/vertical-bar-chart.component.ts ***!
  \***********************************************************************************/
/*! exports provided: VerticalBarChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerticalBarChartComponent", function() { return VerticalBarChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let VerticalBarChartComponent = class VerticalBarChartComponent {
    constructor() {
        this.view = [100, 130];
        // options for the chart
        this.showYAxis = true;
        this.showXAxisLabel = true;
        this.autoScale = true;
        this.colorScheme = { domain: ['#4BD37B'] };
        this.showLabels = true;
        this.minYScaleValue = 1;
        this.maxYScaleValue = 100;
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], VerticalBarChartComponent.prototype, "barChart", void 0);
VerticalBarChartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'elgin-vertical-bar-chart',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./vertical-bar-chart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/charts/vertical-bar-chart/vertical-bar-chart.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./vertical-bar-chart.component.scss */ "./src/app/layouts/charts/vertical-bar-chart/vertical-bar-chart.component.scss")).default]
    })
], VerticalBarChartComponent);



/***/ }),

/***/ "./src/app/layouts/layouts.module.ts":
/*!*******************************************!*\
  !*** ./src/app/layouts/layouts.module.ts ***!
  \*******************************************/
/*! exports provided: LayoutsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutsModule", function() { return LayoutsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/__ivy_ngcc__/fesm2015/swimlane-ngx-charts.js");
/* harmony import */ var _side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./side-menu/side-menu.component */ "./src/app/layouts/side-menu/side-menu.component.ts");
/* harmony import */ var _charts_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./charts/line-chart/line-chart.component */ "./src/app/layouts/charts/line-chart/line-chart.component.ts");
/* harmony import */ var _charts_pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./charts/pie-chart/pie-chart.component */ "./src/app/layouts/charts/pie-chart/pie-chart.component.ts");
/* harmony import */ var _charts_vertical_bar_chart_vertical_bar_chart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./charts/vertical-bar-chart/vertical-bar-chart.component */ "./src/app/layouts/charts/vertical-bar-chart/vertical-bar-chart.component.ts");
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./notifications/notifications.component */ "./src/app/layouts/notifications/notifications.component.ts");










let LayoutsModule = class LayoutsModule {
};
LayoutsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__["NgxChartsModule"],
        ],
        exports: [
            _side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_5__["SideMenuComponent"],
            _charts_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_6__["LineChartComponent"],
            _charts_pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_7__["PieChartComponent"],
            _charts_vertical_bar_chart_vertical_bar_chart_component__WEBPACK_IMPORTED_MODULE_8__["VerticalBarChartComponent"],
            _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_9__["NotificationsComponent"]
        ],
        declarations: [
            _side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_5__["SideMenuComponent"],
            _charts_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_6__["LineChartComponent"],
            _charts_pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_7__["PieChartComponent"],
            _charts_vertical_bar_chart_vertical_bar_chart_component__WEBPACK_IMPORTED_MODULE_8__["VerticalBarChartComponent"],
            _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_9__["NotificationsComponent"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], LayoutsModule);



/***/ }),

/***/ "./src/app/layouts/not-found/not-found.component.scss":
/*!************************************************************!*\
  !*** ./src/app/layouts/not-found/not-found.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".error-page {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.error-page .sorry-svg {\n  width: 400px;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0cy9ub3QtZm91bmQvQzpcXEVsZ2luVXAzXFxmcm9udC1lbGdpbi0zLjBcXEZST05ULUVMR0lOVVAtMy4wL3NyY1xcYXBwXFxsYXlvdXRzXFxub3QtZm91bmRcXG5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0cy9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FDQ0o7QURDSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FDQ1IiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXRzL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3ItcGFnZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcblxuICAgIC5zb3JyeS1zdmcge1xuICAgICAgICB3aWR0aDogNDAwcHg7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICB9XG59IiwiLmVycm9yLXBhZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuLmVycm9yLXBhZ2UgLnNvcnJ5LXN2ZyB7XG4gIHdpZHRoOiA0MDBweDtcbiAgaGVpZ2h0OiBhdXRvO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/layouts/not-found/not-found.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/layouts/not-found/not-found.component.ts ***!
  \**********************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let NotFoundComponent = class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
NotFoundComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/not-found/not-found.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./not-found.component.scss */ "./src/app/layouts/not-found/not-found.component.scss")).default]
    })
], NotFoundComponent);



/***/ }),

/***/ "./src/app/layouts/notifications/notifications.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/layouts/notifications/notifications.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".notification {\n  position: absolute;\n  top: 13px;\n  right: 30px;\n  z-index: 1;\n}\n.notification .toggle-display {\n  position: relative;\n}\n.notification .toggle-display .bell {\n  width: 35px;\n  height: 35px;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--primary);\n  border-radius: 50%;\n  box-shadow: 0px 4px 4px 1px rgba(0, 0, 0, 0.125);\n  transition: 0.1s;\n}\n.notification .toggle-display .bell:hover {\n  cursor: pointer;\n  background-color: var(--link);\n}\n.notification .toggle-display .bell em.fa-bell {\n  color: #fff;\n  font-size: 20px;\n}\n.notification .toggle-display .bell .count {\n  position: absolute;\n  top: 0px;\n  right: -10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 20px;\n  height: 20px;\n  background-color: #fd0101;\n  color: #fff;\n  font-size: var(--sub-text);\n  border-radius: 50%;\n  box-shadow: 0px 4px 4px 1px rgba(0, 0, 0, 0.125);\n}\n.notification .toggle-display .notification-list {\n  width: 300px;\n  position: absolute;\n  top: 45px;\n  right: -3px;\n  padding: 15px 10px;\n  z-index: 1;\n  background-color: #fff;\n  box-shadow: 0px 4px 4px 3px rgba(0, 0, 0, 0.1);\n  border-bottom: 5px solid var(--primary);\n}\n.notification .toggle-display .notification-list .pointer {\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  top: -10px;\n  right: 10px;\n  transform: rotate(45deg);\n  background-color: #fff;\n  z-index: -1;\n}\n.notification .toggle-display .notification-list .sup {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n}\n.notification .toggle-display .notification-list .sup span,\n.notification .toggle-display .notification-list .sup a {\n  color: var(--title);\n}\n.notification .toggle-display .notification-list .sup span {\n  font-size: var(--default-text);\n  text-transform: uppercase;\n}\n.notification .toggle-display .notification-list .sup a {\n  font-size: var(--sub-text);\n  text-decoration: underline;\n}\n.notification .toggle-display .notification-list ul {\n  max-height: 290px;\n  font-family: montserratregular;\n  padding: 0;\n  list-style: none;\n  overflow-y: auto;\n}\n.notification .toggle-display .notification-list ul li {\n  position: relative;\n  display: flex;\n  padding: 10px;\n  border: 1px solid #EAEAEA;\n  margin-bottom: 3px;\n}\n.notification .toggle-display .notification-list ul li .date {\n  width: 15%;\n  text-align: center;\n  line-height: 18px;\n}\n.notification .toggle-display .notification-list ul li .date span {\n  display: block;\n  font-weight: 600;\n}\n.notification .toggle-display .notification-list ul li .date span:first-child {\n  font-size: 18px;\n}\n.notification .toggle-display .notification-list ul li .date span:not(:first-child) {\n  font-size: var(--sub-text);\n}\n.notification .toggle-display .notification-list ul li .date span:not(:last-child) {\n  color: var(--blue);\n}\n.notification .toggle-display .notification-list ul li .content {\n  width: 80%;\n  padding: 0px 10px;\n  line-height: 15px;\n}\n.notification .toggle-display .notification-list ul li .content span {\n  font-size: 12px;\n}\n.notification .toggle-display .notification-list ul li .close {\n  position: absolute;\n  top: 0;\n  right: 5px;\n  opacity: 0.5;\n  cursor: pointer;\n}\n.notification .toggle-display .notification-list ul li .close:hover {\n  opacity: 0.7;\n}\n.notification .toggle-display .notification-list ul li:nth-child(1) {\n  background-color: #EEF8FF;\n}\n.notification .toggle-display .notification-list ul li:nth-child(2) {\n  background-color: #FCF1F1;\n}\n.notification .toggle-display .notification-list ul li:nth-child(3),\n.notification .toggle-display .notification-list ul li:nth-child(4) {\n  background-color: #FFFADD;\n}\n.notification .toggle-display .notification-list .all {\n  text-align: center;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0cy9ub3RpZmljYXRpb25zL0M6XFxFbGdpblVwM1xcZnJvbnQtZWxnaW4tMy4wXFxGUk9OVC1FTEdJTlVQLTMuMC9zcmNcXGFwcFxcbGF5b3V0c1xcbm90aWZpY2F0aW9uc1xcbm90aWZpY2F0aW9ucy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0cy9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ0NKO0FEQ0k7RUFDSSxrQkFBQTtBQ0NSO0FEQ1E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0RBQUE7RUFDQSxnQkFBQTtBQ0NaO0FEQ1k7RUFDSSxlQUFBO0VBQ0EsNkJBQUE7QUNDaEI7QURFWTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FDQWhCO0FER1k7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnREFBQTtBQ0RoQjtBREtRO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLDhDQUFBO0VBQ0EsdUNBQUE7QUNIWjtBREtZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUNIaEI7QURNWTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNKaEI7QURNZ0I7O0VBRUksbUJBQUE7QUNKcEI7QURPZ0I7RUFDSSw4QkFBQTtFQUNBLHlCQUFBO0FDTHBCO0FEUWdCO0VBQ0ksMEJBQUE7RUFDQSwwQkFBQTtBQ05wQjtBRFVZO0VBQ0ksaUJBQUE7RUFDQSw4QkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDUmhCO0FEVWdCO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNScEI7QURVb0I7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ1J4QjtBRFV3QjtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQ1I1QjtBRFd3QjtFQUNJLGVBQUE7QUNUNUI7QURZd0I7RUFDSSwwQkFBQTtBQ1Y1QjtBRGF3QjtFQUNJLGtCQUFBO0FDWDVCO0FEZW9CO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNieEI7QURld0I7RUFDSSxlQUFBO0FDYjVCO0FEaUJvQjtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ2Z4QjtBRGlCd0I7RUFDSSxZQUFBO0FDZjVCO0FEb0JnQjtFQUNJLHlCQUFBO0FDbEJwQjtBRHFCZ0I7RUFDSSx5QkFBQTtBQ25CcEI7QURzQmdCOztFQUVJLHlCQUFBO0FDcEJwQjtBRHdCWTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQ3RCaEIiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXRzL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub3RpZmljYXRpb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEzcHg7XG4gICAgcmlnaHQ6IDMwcHg7XG4gICAgei1pbmRleDogMTtcblxuICAgIC50b2dnbGUtZGlzcGxheSB7IFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgLmJlbGwge1xuICAgICAgICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCAxcHggcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjFzO1xuXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGluayk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVtLmZhLWJlbGwge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNvdW50IHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IC0xMHB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkMDEwMTtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLXN1Yi10ZXh0KTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLm5vdGlmaWNhdGlvbi1saXN0IHtcbiAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogNDVweDtcbiAgICAgICAgICAgIHJpZ2h0OiAtM3B4O1xuICAgICAgICAgICAgcGFkZGluZzogMTVweCAxMHB4O1xuICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHZhcigtLXByaW1hcnkpO1xuXG4gICAgICAgICAgICAucG9pbnRlciB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IC0xMHB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc3VwIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG5cbiAgICAgICAgICAgICAgICBzcGFuLFxuICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGl0bGUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWRlZmF1bHQtdGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tc3ViLXRleHQpO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAyOTBweDtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogbW9udHNlcnJhdHJlZ3VsYXI7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG5cbiAgICAgICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0VBRUFFQTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xuXG4gICAgICAgICAgICAgICAgICAgIC5kYXRlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNSU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgc3BhbjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFuOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLXN1Yi10ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgc3Bhbjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTVweDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmNsb3NlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGxpOm50aC1jaGlsZCgxKSB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFRUY4RkY7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGk6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZDRjFGMTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsaTpudGgtY2hpbGQoMyksXG4gICAgICAgICAgICAgICAgbGk6bnRoLWNoaWxkKDQpIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkFERDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5hbGwge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiLm5vdGlmaWNhdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxM3B4O1xuICByaWdodDogMzBweDtcbiAgei1pbmRleDogMTtcbn1cbi5ub3RpZmljYXRpb24gLnRvZ2dsZS1kaXNwbGF5IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm5vdGlmaWNhdGlvbiAudG9nZ2xlLWRpc3BsYXkgLmJlbGwge1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCAxcHggcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG4gIHRyYW5zaXRpb246IDAuMXM7XG59XG4ubm90aWZpY2F0aW9uIC50b2dnbGUtZGlzcGxheSAuYmVsbDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGluayk7XG59XG4ubm90aWZpY2F0aW9uIC50b2dnbGUtZGlzcGxheSAuYmVsbCBlbS5mYS1iZWxsIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5ub3RpZmljYXRpb24gLnRvZ2dsZS1kaXNwbGF5IC5iZWxsIC5jb3VudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIHJpZ2h0OiAtMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZDAxMDE7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IHZhcigtLXN1Yi10ZXh0KTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCAxcHggcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG59XG4ubm90aWZpY2F0aW9uIC50b2dnbGUtZGlzcGxheSAubm90aWZpY2F0aW9uLWxpc3Qge1xuICB3aWR0aDogMzAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0NXB4O1xuICByaWdodDogLTNweDtcbiAgcGFkZGluZzogMTVweCAxMHB4O1xuICB6LWluZGV4OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgdmFyKC0tcHJpbWFyeSk7XG59XG4ubm90aWZpY2F0aW9uIC50b2dnbGUtZGlzcGxheSAubm90aWZpY2F0aW9uLWxpc3QgLnBvaW50ZXIge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTEwcHg7XG4gIHJpZ2h0OiAxMHB4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHotaW5kZXg6IC0xO1xufVxuLm5vdGlmaWNhdGlvbiAudG9nZ2xlLWRpc3BsYXkgLm5vdGlmaWNhdGlvbi1saXN0IC5zdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG4ubm90aWZpY2F0aW9uIC50b2dnbGUtZGlzcGxheSAubm90aWZpY2F0aW9uLWxpc3QgLnN1cCBzcGFuLFxuLm5vdGlmaWNhdGlvbiAudG9nZ2xlLWRpc3BsYXkgLm5vdGlmaWNhdGlvbi1saXN0IC5zdXAgYSB7XG4gIGNvbG9yOiB2YXIoLS10aXRsZSk7XG59XG4ubm90aWZpY2F0aW9uIC50b2dnbGUtZGlzcGxheSAubm90aWZpY2F0aW9uLWxpc3QgLnN1cCBzcGFuIHtcbiAgZm9udC1zaXplOiB2YXIoLS1kZWZhdWx0LXRleHQpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLm5vdGlmaWNhdGlvbiAudG9nZ2xlLWRpc3BsYXkgLm5vdGlmaWNhdGlvbi1saXN0IC5zdXAgYSB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc3ViLXRleHQpO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbi5ub3RpZmljYXRpb24gLnRvZ2dsZS1kaXNwbGF5IC5ub3RpZmljYXRpb24tbGlzdCB1bCB7XG4gIG1heC1oZWlnaHQ6IDI5MHB4O1xuICBmb250LWZhbWlseTogbW9udHNlcnJhdHJlZ3VsYXI7XG4gIHBhZGRpbmc6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG4ubm90aWZpY2F0aW9uIC50b2dnbGUtZGlzcGxheSAubm90aWZpY2F0aW9uLWxpc3QgdWwgbGkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFQUVBRUE7XG4gIG1hcmdpbi1ib3R0b206IDNweDtcbn1cbi5ub3RpZmljYXRpb24gLnRvZ2dsZS1kaXNwbGF5IC5ub3RpZmljYXRpb24tbGlzdCB1bCBsaSAuZGF0ZSB7XG4gIHdpZHRoOiAxNSU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG59XG4ubm90aWZpY2F0aW9uIC50b2dnbGUtZGlzcGxheSAubm90aWZpY2F0aW9uLWxpc3QgdWwgbGkgLmRhdGUgc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLm5vdGlmaWNhdGlvbiAudG9nZ2xlLWRpc3BsYXkgLm5vdGlmaWNhdGlvbi1saXN0IHVsIGxpIC5kYXRlIHNwYW46Zmlyc3QtY2hpbGQge1xuICBmb250LXNpemU6IDE4cHg7XG59XG4ubm90aWZpY2F0aW9uIC50b2dnbGUtZGlzcGxheSAubm90aWZpY2F0aW9uLWxpc3QgdWwgbGkgLmRhdGUgc3Bhbjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc3ViLXRleHQpO1xufVxuLm5vdGlmaWNhdGlvbiAudG9nZ2xlLWRpc3BsYXkgLm5vdGlmaWNhdGlvbi1saXN0IHVsIGxpIC5kYXRlIHNwYW46bm90KDpsYXN0LWNoaWxkKSB7XG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcbn1cbi5ub3RpZmljYXRpb24gLnRvZ2dsZS1kaXNwbGF5IC5ub3RpZmljYXRpb24tbGlzdCB1bCBsaSAuY29udGVudCB7XG4gIHdpZHRoOiA4MCU7XG4gIHBhZGRpbmc6IDBweCAxMHB4O1xuICBsaW5lLWhlaWdodDogMTVweDtcbn1cbi5ub3RpZmljYXRpb24gLnRvZ2dsZS1kaXNwbGF5IC5ub3RpZmljYXRpb24tbGlzdCB1bCBsaSAuY29udGVudCBzcGFuIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLm5vdGlmaWNhdGlvbiAudG9nZ2xlLWRpc3BsYXkgLm5vdGlmaWNhdGlvbi1saXN0IHVsIGxpIC5jbG9zZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogNXB4O1xuICBvcGFjaXR5OiAwLjU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5ub3RpZmljYXRpb24gLnRvZ2dsZS1kaXNwbGF5IC5ub3RpZmljYXRpb24tbGlzdCB1bCBsaSAuY2xvc2U6aG92ZXIge1xuICBvcGFjaXR5OiAwLjc7XG59XG4ubm90aWZpY2F0aW9uIC50b2dnbGUtZGlzcGxheSAubm90aWZpY2F0aW9uLWxpc3QgdWwgbGk6bnRoLWNoaWxkKDEpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRjhGRjtcbn1cbi5ub3RpZmljYXRpb24gLnRvZ2dsZS1kaXNwbGF5IC5ub3RpZmljYXRpb24tbGlzdCB1bCBsaTpudGgtY2hpbGQoMikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkNGMUYxO1xufVxuLm5vdGlmaWNhdGlvbiAudG9nZ2xlLWRpc3BsYXkgLm5vdGlmaWNhdGlvbi1saXN0IHVsIGxpOm50aC1jaGlsZCgzKSxcbi5ub3RpZmljYXRpb24gLnRvZ2dsZS1kaXNwbGF5IC5ub3RpZmljYXRpb24tbGlzdCB1bCBsaTpudGgtY2hpbGQoNCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGQUREO1xufVxuLm5vdGlmaWNhdGlvbiAudG9nZ2xlLWRpc3BsYXkgLm5vdGlmaWNhdGlvbi1saXN0IC5hbGwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/layouts/notifications/notifications.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/layouts/notifications/notifications.component.ts ***!
  \******************************************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return NotificationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let NotificationsComponent = class NotificationsComponent {
    constructor() {
        this.isActive = false;
    }
    ngOnInit() {
    }
    toggle() {
        this.isActive = !this.isActive;
    }
};
NotificationsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'elgin-notifications',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./notifications.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/notifications/notifications.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./notifications.component.scss */ "./src/app/layouts/notifications/notifications.component.scss")).default]
    })
], NotificationsComponent);



/***/ }),

/***/ "./src/app/layouts/side-menu/side-menu.component.scss":
/*!************************************************************!*\
  !*** ./src/app/layouts/side-menu/side-menu.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".side-menu {\n  position: fixed;\n  width: 55px;\n  height: 100%;\n  padding: 0px 12px;\n  background-color: #003e6f;\n  transition: 0.3s;\n  font-family: montserratregular;\n  z-index: 10;\n}\n.side-menu.hover:hover {\n  width: 220px;\n  box-shadow: 4px 0px 3px rgba(0, 0, 0, 0.15);\n}\n.side-menu.hover:hover .user {\n  left: 0px;\n}\n.side-menu.hover:hover .side-menu-superior {\n  width: 100%;\n  animation: fadein 1s;\n  -moz-animation: fadein 1s;\n  -webkit-animation: fadein 1s;\n  -o-animation: fadein 1s;\n}\n.side-menu.hover:hover .side-menu-superior .elginUp-icon {\n  transform: scale(1.2);\n  margin-left: -13px;\n  width: 55px;\n}\n.side-menu.hover:hover .side-menu-superior .elginUp-brand {\n  display: block !important;\n}\n.side-menu.hover:hover ul {\n  max-height: 500px;\n  margin-top: 180px;\n  transition: 0.2s;\n  overflow-y: auto;\n}\n.side-menu.hover:hover ul li {\n  padding: 10px 0px 10px 10px;\n}\n.side-menu.hover:hover ul li span {\n  animation: fadein 1s;\n  -moz-animation: fadein 1s;\n  -webkit-animation: fadein 1s;\n  -o-animation: fadein 1s;\n  left: 47px;\n}\n.side-menu.hover:hover ul li:hover {\n  background-color: #fff !important;\n  cursor: pointer;\n  border-top-left-radius: 15px;\n  border-bottom-left-radius: 15px;\n}\n.side-menu.hover:hover ul li:hover em,\n.side-menu.hover:hover ul li:hover span {\n  color: #003e6f !important;\n}\n.side-menu.hover:hover ul li.active:not(:last-child) {\n  background-color: var(--link-active);\n  border-top-left-radius: 15px;\n  border-bottom-left-radius: 15px;\n}\n.side-menu.hover:hover ul li.active:not(:last-child) span,\n.side-menu.hover:hover ul li.active:not(:last-child) em {\n  color: #fff;\n}\n.side-menu.hover:hover ul li:not(:last-child) em {\n  transform: scale(1.5);\n  background-color: unset !important;\n}\n.side-menu .user {\n  position: absolute;\n  display: flex !important;\n  align-items: center;\n  top: 100px;\n  left: -220px;\n  width: 100%;\n  height: 70px;\n  padding: 10px 15px;\n  background: #5aaceb;\n  background: linear-gradient(133deg, #5aaceb 0%, #0063af 30%, #0063af 100%);\n  z-index: -1;\n  transition: 0.5s;\n}\n.side-menu .user em {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 45px;\n  height: 45px;\n  margin-right: 10px;\n  background-color: #fff;\n  color: var(--link-active);\n  font-size: 25px;\n  border-radius: 50%;\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.125);\n}\n.side-menu .user .user-opt {\n  line-height: 15px;\n}\n.side-menu .user .user-opt span {\n  display: block;\n  max-width: 135px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.side-menu .user .user-opt span:nth-child(1) {\n  color: #fff;\n  font-size: var(--default-text);\n}\n.side-menu .user .user-opt span:nth-child(2) {\n  color: #B4DCFA;\n  font-size: var(--sub-text);\n}\n.side-menu .user .user-opt a {\n  color: #fff !important;\n  font-size: var(--sub-text);\n  text-decoration: underline;\n  letter-spacing: 0.7px;\n}\n.side-menu .side-menu-superior {\n  position: absolute;\n  top: 15px;\n  left: 0.5px;\n  display: flex;\n  align-items: center;\n}\n.side-menu .side-menu-superior .elginUp-icon {\n  width: 100%;\n  height: auto;\n}\n.side-menu .side-menu-superior .elginUp-brand {\n  width: 155px;\n}\n.side-menu ul {\n  list-style: none;\n  padding: 0px;\n  margin-top: 73px;\n  transition: 0.3s;\n  overflow-x: hidden;\n}\n.side-menu ul li {\n  display: flex;\n  align-items: center;\n  padding: 10px 0;\n  position: relative;\n}\n.side-menu ul li em {\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  color: var(--link-active);\n  transition: 0.5s;\n}\n.side-menu ul li span {\n  position: absolute;\n  left: -135px;\n  font-size: var(--default-text);\n  color: var(--link-active);\n}\n.side-menu ul li:last-child em {\n  font-size: 25px;\n  padding: 0 !important;\n}\n.side-menu ul li:not(:last-child) em {\n  background-color: #fff;\n  border-radius: 50%;\n}\n.side-menu li:not(:last-child).active em {\n  background-color: var(--link-active) !important;\n  color: #fff !important;\n}\n@media screen and (max-width: 768px) {\n  .side-menu {\n    display: none;\n  }\n\n  .responsive-navbar {\n    height: 60px;\n    display: flex !important;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0 67px 0 12px;\n    background-color: #003e6f;\n  }\n  .responsive-navbar .side-menu-superior {\n    width: inherit;\n    height: auto;\n  }\n  .responsive-navbar .side-menu-superior img:first-child {\n    width: 60px;\n    height: auto;\n  }\n  .responsive-navbar .side-menu-superior img:last-child {\n    width: 100px;\n    height: auto;\n  }\n  .responsive-navbar .fa-bars {\n    margin: 17px 30px;\n    font-size: 22px;\n    color: #fff;\n  }\n\n  .responsive-menu .backdrop {\n    position: fixed;\n    top: 60px;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    z-index: 999;\n    background: rgba(0, 62, 111, 0.255);\n    overflow: hidden;\n  }\n  .responsive-menu .menu-toggle {\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: 300px;\n    height: 100%;\n    background: #003e6f;\n    z-index: 1000;\n    box-shadow: -3px 0 3px rgba(0, 0, 0, 0.255);\n  }\n  .responsive-menu .menu-toggle .btn-close {\n    font-size: 24px;\n    color: #fff;\n    opacity: 0.7;\n  }\n  .responsive-menu .menu-toggle ul {\n    list-style: none;\n    padding: 0px;\n    margin-top: 1rem;\n  }\n  .responsive-menu .menu-toggle ul li {\n    padding: 15px 10px;\n    color: #fff;\n    font-size: 20px;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.4);\n  }\n  .responsive-menu .menu-toggle ul li em, .responsive-menu .menu-toggle ul li span {\n    margin: 0 0.25rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0cy9zaWRlLW1lbnUvQzpcXEVsZ2luVXAzXFxmcm9udC1lbGdpbi0zLjBcXEZST05ULUVMR0lOVVAtMy4wL3NyY1xcYXBwXFxsYXlvdXRzXFxzaWRlLW1lbnVcXHNpZGUtbWVudS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0cy9zaWRlLW1lbnUvc2lkZS1tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0FDQ0o7QURFSTtFQUNJLFlBQUE7RUFDQSwyQ0FBQTtBQ0FSO0FERVE7RUFDSSxTQUFBO0FDQVo7QURHUTtFQUNJLFdBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSx1QkFBQTtBQ0RaO0FER1k7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0RoQjtBRElZO0VBQ0kseUJBQUE7QUNGaEI7QURNUTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDSlo7QURNWTtFQUNJLDJCQUFBO0FDSmhCO0FETWdCO0VBQ0ksb0JBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0FDSnBCO0FEUVk7RUFDSSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0FDTmhCO0FEUWdCOztFQUVJLHlCQUFBO0FDTnBCO0FEVVk7RUFDSSxvQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7QUNSaEI7QURVZ0I7O0VBRUksV0FBQTtBQ1JwQjtBRFlZO0VBQ0kscUJBQUE7RUFDQSxrQ0FBQTtBQ1ZoQjtBRGVJO0VBQ0ksa0JBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwRUFBQTtFQUVBLFdBQUE7RUFDQSxnQkFBQTtBQ2RSO0FEZ0JRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0FDZFo7QURpQlE7RUFDSSxpQkFBQTtBQ2ZaO0FEaUJZO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDZmhCO0FEa0JZO0VBQ0ksV0FBQTtFQUNBLDhCQUFBO0FDaEJoQjtBRG1CWTtFQUNJLGNBQUE7RUFDQSwwQkFBQTtBQ2pCaEI7QURvQlk7RUFDSSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtBQ2xCaEI7QUR1Qkk7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDckJSO0FEdUJRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNyQlo7QUR3QlE7RUFDSSxZQUFBO0FDdEJaO0FEMEJJO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDeEJSO0FEMEJRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDeEJaO0FEMEJZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQ3hCaEI7QUQyQlk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0FDekJoQjtBRDZCUTtFQUNJLGVBQUE7RUFDQSxxQkFBQTtBQzNCWjtBRDhCUTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7QUM1Qlo7QURpQ0k7RUFDSSwrQ0FBQTtFQUNBLHNCQUFBO0FDL0JSO0FEbUNBO0VBQ0k7SUFDSSxhQUFBO0VDaENOOztFRG1DRTtJQUNJLFlBQUE7SUFDQSx3QkFBQTtJQUNBLG1CQUFBO0lBQ0EsOEJBQUE7SUFDQSxzQkFBQTtJQUNBLHlCQUFBO0VDaENOO0VEa0NNO0lBQ0ksY0FBQTtJQUNBLFlBQUE7RUNoQ1Y7RURrQ1U7SUFDSSxXQUFBO0lBQ0EsWUFBQTtFQ2hDZDtFRG1DVTtJQUNJLFlBQUE7SUFDQSxZQUFBO0VDakNkO0VEcUNNO0lBQ0ksaUJBQUE7SUFDQSxlQUFBO0lBQ0EsV0FBQTtFQ25DVjs7RUR5Q007SUFDSSxlQUFBO0lBQ0EsU0FBQTtJQUNBLE9BQUE7SUFDQSxTQUFBO0lBQ0EsUUFBQTtJQUNBLFlBQUE7SUFDQSxtQ0FBQTtJQUNBLGdCQUFBO0VDdENWO0VEeUNNO0lBQ0ksa0JBQUE7SUFDQSxNQUFBO0lBQ0EsUUFBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0lBQ0EsbUJBQUE7SUFDQSxhQUFBO0lBQ0EsMkNBQUE7RUN2Q1Y7RUR5Q1U7SUFDSSxlQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7RUN2Q2Q7RUQwQ1U7SUFDSSxnQkFBQTtJQUNBLFlBQUE7SUFDQSxnQkFBQTtFQ3hDZDtFRDBDYztJQUNJLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLGVBQUE7SUFDQSxpREFBQTtFQ3hDbEI7RUQwQ2tCO0lBQ0ksaUJBQUE7RUN4Q3RCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXRzL3NpZGUtbWVudS9zaWRlLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZS1tZW51IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDU1cHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmc6IDBweCAxMnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDNlNmY7XG4gICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICBmb250LWZhbWlseTogbW9udHNlcnJhdHJlZ3VsYXI7XG4gICAgei1pbmRleDogMTA7XG5cbiAgICAvLyBIT1ZFUiBNRU5VIEFOSU1BVElPTlxuICAgICYuaG92ZXI6aG92ZXIge1xuICAgICAgICB3aWR0aDogMjIwcHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDRweCAwcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG5cbiAgICAgICAgLnVzZXIge1xuICAgICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnNpZGUtbWVudS1zdXBlcmlvciB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogZmFkZWluIDFzO1xuICAgICAgICAgICAgLW1vei1hbmltYXRpb246IGZhZGVpbiAxcztcbiAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlaW4gMXM7XG4gICAgICAgICAgICAtby1hbmltYXRpb246IGZhZGVpbiAxcztcblxuICAgICAgICAgICAgLmVsZ2luVXAtaWNvbiB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMTNweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNTVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmVsZ2luVXAtYnJhbmQge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB1bCB7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDE4MHB4O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcbiAgICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG5cbiAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDBweCAxMHB4IDEwcHg7XG5cbiAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBmYWRlaW4gMXM7XG4gICAgICAgICAgICAgICAgICAgIC1tb3otYW5pbWF0aW9uOiBmYWRlaW4gMXM7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlaW4gMXM7XG4gICAgICAgICAgICAgICAgICAgIC1vLWFuaW1hdGlvbjogZmFkZWluIDFzO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA0N3B4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGk6aG92ZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xuXG4gICAgICAgICAgICAgICAgZW0sXG4gICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAzZTZmICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsaS5hY3RpdmU6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGluay1hY3RpdmUpO1xuICAgICAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcblxuICAgICAgICAgICAgICAgIHNwYW4sXG4gICAgICAgICAgICAgICAgZW0ge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxpOm5vdCg6bGFzdC1jaGlsZCkgZW0ge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnVzZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgdG9wOiAxMDBweDtcbiAgICAgICAgbGVmdDogLTIyMHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYig5MCwgMTcyLCAyMzUpO1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTMzZGVnLCByZ2JhKDkwLCAxNzIsIDIzNSwgMSkgMCUsXG4gICAgICAgICAgICAgICAgcmdiYSgwLCA5OSwgMTc1LCAxKSAzMCUsIHJnYmEoMCwgOTksIDE3NSwgMSkgMTAwJSk7XG4gICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xuXG4gICAgICAgIGVtIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICB3aWR0aDogNDVweDtcbiAgICAgICAgICAgIGhlaWdodDogNDVweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tbGluay1hY3RpdmUpO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDJweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG4gICAgICAgIH1cblxuICAgICAgICAudXNlci1vcHQge1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XG5cbiAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTM1cHg7XG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzcGFuOm50aC1jaGlsZCgxKSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1kZWZhdWx0LXRleHQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzcGFuOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNCNERDRkE7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1zdWItdGV4dCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1zdWItdGV4dCk7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuN3B4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnNpZGUtbWVudS1zdXBlcmlvciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAxNXB4O1xuICAgICAgICBsZWZ0OiAwLjVweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAuZWxnaW5VcC1pY29uIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgLmVsZ2luVXAtYnJhbmQge1xuICAgICAgICAgICAgd2lkdGg6IDE1NXB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdWwge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDczcHg7XG4gICAgICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcblxuICAgICAgICBsaSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAgICAgZW0ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1saW5rLWFjdGl2ZSk7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC41cztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IC0xMzVweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWRlZmF1bHQtdGV4dCk7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWxpbmstYWN0aXZlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxpOmxhc3QtY2hpbGQgZW0ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgbGk6bm90KDpsYXN0LWNoaWxkKSBlbSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gTUVOVSBJVEVNIEFDVElWRSBBTklNQVRJT05cbiAgICBsaTpub3QoOmxhc3QtY2hpbGQpLmFjdGl2ZSBlbSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpbmstYWN0aXZlKSAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAuc2lkZS1tZW51IHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAucmVzcG9uc2l2ZS1uYXZiYXIge1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBwYWRkaW5nOiAwIDY3cHggMCAxMnB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAzZTZmO1xuXG4gICAgICAgIC5zaWRlLW1lbnUtc3VwZXJpb3Ige1xuICAgICAgICAgICAgd2lkdGg6IGluaGVyaXQ7XG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG5cbiAgICAgICAgICAgIGltZzpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbWc6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5mYS1iYXJzIHtcbiAgICAgICAgICAgIG1hcmdpbjogMTdweCAzMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAucmVzcG9uc2l2ZS1tZW51IHtcblxuICAgICAgICAuYmFja2Ryb3Age1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgdG9wOiA2MHB4O1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgei1pbmRleDogOTk5O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCA2MiwgMTExLCAwLjI1NSk7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG5cbiAgICAgICAgLm1lbnUtdG9nZ2xlIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwM2U2ZjtcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMDA7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAtM3B4IDAgM3B4IHJnYmEoMCwgMCwgMCwgMC4yNTUpO1xuXG4gICAgICAgICAgICAuYnRuLWNsb3NlIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1bCB7XG4gICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcblxuICAgICAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTVweCAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xuXG4gICAgICAgICAgICAgICAgICAgIGVtLHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIC4yNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCIuc2lkZS1tZW51IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogNTVweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAwcHggMTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwM2U2ZjtcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgZm9udC1mYW1pbHk6IG1vbnRzZXJyYXRyZWd1bGFyO1xuICB6LWluZGV4OiAxMDtcbn1cbi5zaWRlLW1lbnUuaG92ZXI6aG92ZXIge1xuICB3aWR0aDogMjIwcHg7XG4gIGJveC1zaGFkb3c6IDRweCAwcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG59XG4uc2lkZS1tZW51LmhvdmVyOmhvdmVyIC51c2VyIHtcbiAgbGVmdDogMHB4O1xufVxuLnNpZGUtbWVudS5ob3Zlcjpob3ZlciAuc2lkZS1tZW51LXN1cGVyaW9yIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGFuaW1hdGlvbjogZmFkZWluIDFzO1xuICAtbW96LWFuaW1hdGlvbjogZmFkZWluIDFzO1xuICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZWluIDFzO1xuICAtby1hbmltYXRpb246IGZhZGVpbiAxcztcbn1cbi5zaWRlLW1lbnUuaG92ZXI6aG92ZXIgLnNpZGUtbWVudS1zdXBlcmlvciAuZWxnaW5VcC1pY29uIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICBtYXJnaW4tbGVmdDogLTEzcHg7XG4gIHdpZHRoOiA1NXB4O1xufVxuLnNpZGUtbWVudS5ob3Zlcjpob3ZlciAuc2lkZS1tZW51LXN1cGVyaW9yIC5lbGdpblVwLWJyYW5kIHtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cbi5zaWRlLW1lbnUuaG92ZXI6aG92ZXIgdWwge1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgbWFyZ2luLXRvcDogMTgwcHg7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG4uc2lkZS1tZW51LmhvdmVyOmhvdmVyIHVsIGxpIHtcbiAgcGFkZGluZzogMTBweCAwcHggMTBweCAxMHB4O1xufVxuLnNpZGUtbWVudS5ob3Zlcjpob3ZlciB1bCBsaSBzcGFuIHtcbiAgYW5pbWF0aW9uOiBmYWRlaW4gMXM7XG4gIC1tb3otYW5pbWF0aW9uOiBmYWRlaW4gMXM7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlaW4gMXM7XG4gIC1vLWFuaW1hdGlvbjogZmFkZWluIDFzO1xuICBsZWZ0OiA0N3B4O1xufVxuLnNpZGUtbWVudS5ob3Zlcjpob3ZlciB1bCBsaTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xufVxuLnNpZGUtbWVudS5ob3Zlcjpob3ZlciB1bCBsaTpob3ZlciBlbSxcbi5zaWRlLW1lbnUuaG92ZXI6aG92ZXIgdWwgbGk6aG92ZXIgc3BhbiB7XG4gIGNvbG9yOiAjMDAzZTZmICFpbXBvcnRhbnQ7XG59XG4uc2lkZS1tZW51LmhvdmVyOmhvdmVyIHVsIGxpLmFjdGl2ZTpub3QoOmxhc3QtY2hpbGQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGluay1hY3RpdmUpO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xufVxuLnNpZGUtbWVudS5ob3Zlcjpob3ZlciB1bCBsaS5hY3RpdmU6bm90KDpsYXN0LWNoaWxkKSBzcGFuLFxuLnNpZGUtbWVudS5ob3Zlcjpob3ZlciB1bCBsaS5hY3RpdmU6bm90KDpsYXN0LWNoaWxkKSBlbSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnNpZGUtbWVudS5ob3Zlcjpob3ZlciB1bCBsaTpub3QoOmxhc3QtY2hpbGQpIGVtIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldCAhaW1wb3J0YW50O1xufVxuLnNpZGUtbWVudSAudXNlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0b3A6IDEwMHB4O1xuICBsZWZ0OiAtMjIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDcwcHg7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgYmFja2dyb3VuZDogIzVhYWNlYjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzM2RlZywgIzVhYWNlYiAwJSwgIzAwNjNhZiAzMCUsICMwMDYzYWYgMTAwJSk7XG4gIHotaW5kZXg6IC0xO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuLnNpZGUtbWVudSAudXNlciBlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogNDVweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGNvbG9yOiB2YXIoLS1saW5rLWFjdGl2ZSk7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3gtc2hhZG93OiAwcHggMnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcbn1cbi5zaWRlLW1lbnUgLnVzZXIgLnVzZXItb3B0IHtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG59XG4uc2lkZS1tZW51IC51c2VyIC51c2VyLW9wdCBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1heC13aWR0aDogMTM1cHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuLnNpZGUtbWVudSAudXNlciAudXNlci1vcHQgc3BhbjpudGgtY2hpbGQoMSkge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiB2YXIoLS1kZWZhdWx0LXRleHQpO1xufVxuLnNpZGUtbWVudSAudXNlciAudXNlci1vcHQgc3BhbjpudGgtY2hpbGQoMikge1xuICBjb2xvcjogI0I0RENGQTtcbiAgZm9udC1zaXplOiB2YXIoLS1zdWItdGV4dCk7XG59XG4uc2lkZS1tZW51IC51c2VyIC51c2VyLW9wdCBhIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiB2YXIoLS1zdWItdGV4dCk7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBsZXR0ZXItc3BhY2luZzogMC43cHg7XG59XG4uc2lkZS1tZW51IC5zaWRlLW1lbnUtc3VwZXJpb3Ige1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTVweDtcbiAgbGVmdDogMC41cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uc2lkZS1tZW51IC5zaWRlLW1lbnUtc3VwZXJpb3IgLmVsZ2luVXAtaWNvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG4uc2lkZS1tZW51IC5zaWRlLW1lbnUtc3VwZXJpb3IgLmVsZ2luVXAtYnJhbmQge1xuICB3aWR0aDogMTU1cHg7XG59XG4uc2lkZS1tZW51IHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW4tdG9wOiA3M3B4O1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG4uc2lkZS1tZW51IHVsIGxpIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweCAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc2lkZS1tZW51IHVsIGxpIGVtIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLWxpbmstYWN0aXZlKTtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cbi5zaWRlLW1lbnUgdWwgbGkgc3BhbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTEzNXB4O1xuICBmb250LXNpemU6IHZhcigtLWRlZmF1bHQtdGV4dCk7XG4gIGNvbG9yOiB2YXIoLS1saW5rLWFjdGl2ZSk7XG59XG4uc2lkZS1tZW51IHVsIGxpOmxhc3QtY2hpbGQgZW0ge1xuICBmb250LXNpemU6IDI1cHg7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cbi5zaWRlLW1lbnUgdWwgbGk6bm90KDpsYXN0LWNoaWxkKSBlbSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5zaWRlLW1lbnUgbGk6bm90KDpsYXN0LWNoaWxkKS5hY3RpdmUgZW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saW5rLWFjdGl2ZSkgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnNpZGUtbWVudSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5yZXNwb25zaXZlLW5hdmJhciB7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAwIDY3cHggMCAxMnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDNlNmY7XG4gIH1cbiAgLnJlc3BvbnNpdmUtbmF2YmFyIC5zaWRlLW1lbnUtc3VwZXJpb3Ige1xuICAgIHdpZHRoOiBpbmhlcml0O1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuICAucmVzcG9uc2l2ZS1uYXZiYXIgLnNpZGUtbWVudS1zdXBlcmlvciBpbWc6Zmlyc3QtY2hpbGQge1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuICAucmVzcG9uc2l2ZS1uYXZiYXIgLnNpZGUtbWVudS1zdXBlcmlvciBpbWc6bGFzdC1jaGlsZCB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuICAucmVzcG9uc2l2ZS1uYXZiYXIgLmZhLWJhcnMge1xuICAgIG1hcmdpbjogMTdweCAzMHB4O1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuXG4gIC5yZXNwb25zaXZlLW1lbnUgLmJhY2tkcm9wIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiA2MHB4O1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHotaW5kZXg6IDk5OTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDYyLCAxMTEsIDAuMjU1KTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIC5yZXNwb25zaXZlLW1lbnUgLm1lbnUtdG9nZ2xlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogIzAwM2U2ZjtcbiAgICB6LWluZGV4OiAxMDAwO1xuICAgIGJveC1zaGFkb3c6IC0zcHggMCAzcHggcmdiYSgwLCAwLCAwLCAwLjI1NSk7XG4gIH1cbiAgLnJlc3BvbnNpdmUtbWVudSAubWVudS10b2dnbGUgLmJ0bi1jbG9zZSB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG9wYWNpdHk6IDAuNztcbiAgfVxuICAucmVzcG9uc2l2ZS1tZW51IC5tZW51LXRvZ2dsZSB1bCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgfVxuICAucmVzcG9uc2l2ZS1tZW51IC5tZW51LXRvZ2dsZSB1bCBsaSB7XG4gICAgcGFkZGluZzogMTVweCAxMHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xuICB9XG4gIC5yZXNwb25zaXZlLW1lbnUgLm1lbnUtdG9nZ2xlIHVsIGxpIGVtLCAucmVzcG9uc2l2ZS1tZW51IC5tZW51LXRvZ2dsZSB1bCBsaSBzcGFuIHtcbiAgICBtYXJnaW46IDAgMC4yNXJlbTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/layouts/side-menu/side-menu.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/layouts/side-menu/side-menu.component.ts ***!
  \**********************************************************/
/*! exports provided: SideMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideMenuComponent", function() { return SideMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let SideMenuComponent = class SideMenuComponent {
    constructor(router) {
        this.router = router;
        this.selectedItem = 0;
        this.menuItems = [
            { icon: 'fa fa-home', title: 'Inicial', id: 0 },
            { icon: 'fa fa-cart-arrow-down', title: 'Pedidos', id: 1 },
            { icon: 'fa fa-box-open', title: 'Produtos', id: 2 },
            { icon: 'fa fa-laptop', title: 'Gerencial', id: 3 },
            { icon: 'fa fa-suitcase', title: 'Representantes', id: 4 },
            { icon: 'fa fa-users', title: 'Clientes', id: 5 },
            { icon: 'fa fa-file-invoice-dollar', title: 'Financeiro', id: 6 },
            { icon: 'fa fa-user-tie', title: 'Poítica Comercial', id: 7 },
            { icon: 'fa fa-file-alt', title: 'Relatórios', id: 8 },
            { icon: 'fa fa-cog', title: 'Admin', id: 9 },
        ];
        this.toggle = false;
    }
    ngOnInit() { }
    // emitEventData() {
    //   const data = { id: this.routeId, title: this.routeTitle };
    //   this.sideMenuData.emit(data);
    // }
    hideSideMenu() {
        const hover = document.getElementById('hoverMenu');
        if (hover.classList.contains('hover')) {
            hover.classList.remove('hover');
            setTimeout(() => {
                hover.classList.add('hover');
            }, 800);
        }
    }
    toggleMenu() {
        this.toggle = !this.toggle;
        this.preventScrolling();
    }
    preventScrolling() {
        const body = document.body;
        if (this.toggle) {
            body.classList.add('no-scroll');
        }
        else {
            body.classList.remove('no-scroll');
        }
    }
    navigateTo(index) {
        this.selectedItem = index;
        this.routeId = this.menuItems[this.selectedItem].id;
        console.log('INDEX ==>', index, 'item selecionado ==>', this.selectedItem, 'Id da rota ==>', this.routeId, 'Titulo da rota ==>', this.routeTitle);
        if (this.routeId === 0) {
            this.router.navigate(['inicio']);
        }
        if (this.routeId === 1) {
            this.router.navigate(['pedidos']);
        }
        if (this.routeId === 2) {
            this.router.navigate(['produtos']);
        }
        // this.emitEventData();
        this.hideSideMenu();
    }
};
SideMenuComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
SideMenuComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'elgin-side-menu',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./side-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/side-menu/side-menu.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./side-menu.component.scss */ "./src/app/layouts/side-menu/side-menu.component.scss")).default]
    })
], SideMenuComponent);



/***/ }),

/***/ "./src/app/main/login/login-routing.module.ts":
/*!****************************************************!*\
  !*** ./src/app/main/login/login-routing.module.ts ***!
  \****************************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.component */ "./src/app/main/login/login.component.ts");




const routes = [{ path: '', component: _login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] }];
let LoginRoutingModule = class LoginRoutingModule {
};
LoginRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], LoginRoutingModule);



/***/ }),

/***/ "./src/app/main/login/login.component.scss":
/*!*************************************************!*\
  !*** ./src/app/main/login/login.component.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bg {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  top: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: url('bg-login.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  z-index: -1;\n}\n\n@media (max-width: 375px) {\n  .login {\n    width: 300px !important;\n  }\n}\n\n.login {\n  width: 350px;\n  border-radius: 10px !important;\n  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);\n}\n\n.login .elgin-up-logo {\n  text-align: center;\n}\n\n.login .elgin-up-logo img {\n  max-width: 226px;\n  height: auto;\n}\n\n.login form label {\n  color: #9B9A9A;\n  font-size: var(--default-text);\n  margin-bottom: 5px;\n  margin-left: 5px;\n}\n\n.login form input {\n  border-radius: 10px;\n}\n\n.login form button[type=submit] {\n  margin: 1rem 0;\n  padding: 0.575rem 0.75rem;\n  background-color: var(--primary);\n  font-size: var(--default-text);\n  text-transform: uppercase;\n  width: 100%;\n  border: 1px solid #E5E5E5;\n  border-radius: 25px;\n  transition: 0.3s;\n}\n\n.login form button[type=submit]:hover {\n  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);\n}\n\n.login a {\n  display: block;\n  text-align: center;\n  margin: 1rem 0;\n  font-size: var(--default-text);\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9sb2dpbi9DOlxcRWxnaW5VcDNcXGZyb250LWVsZ2luLTMuMFxcRlJPTlQtRUxHSU5VUC0zLjAvc3JjXFxhcHBcXG1haW5cXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0U7SUFDRSx1QkFBQTtFQ0NGO0FBQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQ0FBQTtBQ0FGOztBREVFO0VBQ0Usa0JBQUE7QUNBSjs7QURFSTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQ0FOOztBREtJO0VBQ0UsY0FBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0hOOztBRE1JO0VBQ0UsbUJBQUE7QUNKTjs7QURPSTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0EsOEJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNMTjs7QURPTTtFQUNFLDJDQUFBO0FDTFI7O0FEVUU7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQkFBQTtBQ1JKIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JnLWxvZ2luLnBuZycpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB6LWluZGV4OiAtMTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDM3NXB4KXtcbiAgLmxvZ2luIHtcbiAgICB3aWR0aDogMzAwcHggIWltcG9ydGFudDtcbiAgfVxufVxuXG4ubG9naW4ge1xuICB3aWR0aDogMzUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcblxuICAuZWxnaW4tdXAtbG9nbyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgaW1nIHtcbiAgICAgIG1heC13aWR0aDogMjI2cHg7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgfVxuICB9XG5cbiAgZm9ybSB7XG4gICAgbGFiZWwge1xuICAgICAgY29sb3I6ICM5QjlBOUE7XG4gICAgICBmb250LXNpemU6IHZhcigtLWRlZmF1bHQtdGV4dCk7XG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIH1cblxuICAgIGlucHV0IHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgfVxuXG4gICAgYnV0dG9uW3R5cGU9c3VibWl0XSB7XG4gICAgICBtYXJnaW46IDFyZW0gMDtcbiAgICAgIHBhZGRpbmc6IC41NzVyZW0gLjc1cmVtO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICBmb250LXNpemU6IHZhcigtLWRlZmF1bHQtdGV4dCk7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjRTVFNUU1O1xuICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgICBcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDFyZW0gMDtcbiAgICBmb250LXNpemU6IHZhcigtLWRlZmF1bHQtdGV4dCk7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIH1cbn1cbiIsIi5iZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iZy1sb2dpbi5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHotaW5kZXg6IC0xO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMzc1cHgpIHtcbiAgLmxvZ2luIHtcbiAgICB3aWR0aDogMzAwcHggIWltcG9ydGFudDtcbiAgfVxufVxuLmxvZ2luIHtcbiAgd2lkdGg6IDM1MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IDBweCAycHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG59XG4ubG9naW4gLmVsZ2luLXVwLWxvZ28ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubG9naW4gLmVsZ2luLXVwLWxvZ28gaW1nIHtcbiAgbWF4LXdpZHRoOiAyMjZweDtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuLmxvZ2luIGZvcm0gbGFiZWwge1xuICBjb2xvcjogIzlCOUE5QTtcbiAgZm9udC1zaXplOiB2YXIoLS1kZWZhdWx0LXRleHQpO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4ubG9naW4gZm9ybSBpbnB1dCB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4ubG9naW4gZm9ybSBidXR0b25bdHlwZT1zdWJtaXRdIHtcbiAgbWFyZ2luOiAxcmVtIDA7XG4gIHBhZGRpbmc6IDAuNTc1cmVtIDAuNzVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBmb250LXNpemU6IHZhcigtLWRlZmF1bHQtdGV4dCk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRTVFNUU1O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuLmxvZ2luIGZvcm0gYnV0dG9uW3R5cGU9c3VibWl0XTpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDBweCAycHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG59XG4ubG9naW4gYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMXJlbSAwO1xuICBmb250LXNpemU6IHZhcigtLWRlZmF1bHQtdGV4dCk7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/main/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/main/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_shered_service_adm_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_shered/service/adm-usuario.service */ "./src/app/_shered/service/adm-usuario.service.ts");
/* harmony import */ var src_app_shered_service_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_shered/service/loading.service */ "./src/app/_shered/service/loading.service.ts");
/* harmony import */ var src_app_core_services_token_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_core/services/token.service */ "./src/app/_core/services/token.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_shered_validators_password_password_validator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/_shered/validators/password/password.validator */ "./src/app/_shered/validators/password/password.validator.ts");









let LoginComponent = class LoginComponent {
    constructor(loadingService, tokenService, usuarioService, formBuilder, activatedRoute, router) {
        this.loadingService = loadingService;
        this.tokenService = tokenService;
        this.usuarioService = usuarioService;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.passo = 1;
    }
    ngOnInit() {
        this.formLogin = this.formBuilder.group({
            login: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            senha: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
    login() {
        if (this.formLogin.valid && !this.formLogin.pending) {
            this.loadingService.show();
            //  let senha = CryptoJS.HmacSHA1(this.formLogin.controls["senha"].value, 'PorElg2ER019intal').toString();
            let senha = this.formLogin.controls["senha"].value;
            this.tokenService
                .setToken(this.formLogin.controls["login"].value, senha)
                .subscribe(res => this.loginSuccess(res), err => this.loginError(err));
        }
        else {
            Object.keys(this.formLogin.controls).forEach(key => {
                this.formLogin.get(key).markAsTouched();
            });
            return;
        }
    }
    initFormNovaSenha() {
        this.formNovaSenha = this.formBuilder.group({
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        this.formNovaSenha.setValidators([src_app_shered_validators_password_password_validator__WEBPACK_IMPORTED_MODULE_8__["PasswordValidation"].MatchPassword]);
    }
    hasErrorLogin(id) {
        return this.formLogin.get(id).invalid && (this.formLogin.get(id).dirty || this.formLogin.get(id).touched);
    }
    loginError(err) {
        console.log(err);
        this.loadingService.hide();
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Atenção', 'Login/Senha inválidos.', 'warning');
    }
    loginSuccess(res) {
        console.log("res", res);
        this.loadingService.hide();
        this.tokenService.getTokenSuccess(res);
        this.router.navigate(["/home"]);
    }
    enviarCodigo() {
        if (this.formResetar.controls["codigo"].valid) {
            this.loadingService.show();
            this.usuarioService.validarCodigo(this.formLogin.controls["login"].value, this.formResetar.controls["codigo"].value).subscribe(res => this.validarSuccess(res), err => this.validarError(err));
        }
    }
    validarError(err) {
        console.log(err);
        this.loadingService.hide();
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Atenção', 'Código inválido.', 'warning');
    }
    validarSuccess(res) {
        this.loadingService.hide();
        if (res) {
            this.passo = 3;
            this.initFormNovaSenha();
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Atenção', 'Código inválido.', 'warning');
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: src_app_shered_service_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"] },
    { type: src_app_core_services_token_service__WEBPACK_IMPORTED_MODULE_6__["TokenService"] },
    { type: src_app_shered_service_adm_usuario_service__WEBPACK_IMPORTED_MODULE_4__["AdmUsuarioService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/login/login.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.component.scss */ "./src/app/main/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/main/login/login.module.ts":
/*!********************************************!*\
  !*** ./src/app/main/login/login.module.ts ***!
  \********************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/main/login/login-routing.module.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.component */ "./src/app/main/login/login.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");








let LoginModule = class LoginModule {
};
LoginModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_3__["LoginRoutingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
        ],
        exports: [
            _login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], LoginModule);



/***/ }),

/***/ "./src/app/main/representative/home/data.ts":
/*!**************************************************!*\
  !*** ./src/app/main/representative/home/data.ts ***!
  \**************************************************/
/*! exports provided: barChart, lineChart, pieChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "barChart", function() { return barChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineChart", function() { return lineChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pieChart", function() { return pieChart; });
const barChart = [
    {
        name: 'janeiro',
        value: 80
    }
];
const lineChart = [
    {
        name: 'dia',
        series: [
            {
                name: '1',
                value: 10
            },
            {
                name: '2',
                value: 13
            },
            {
                name: '3',
                value: 22
            },
            {
                name: '4',
                value: 10
            },
            {
                name: '5',
                value: 13
            },
            {
                name: '6',
                value: 22
            },
            {
                name: '7',
                value: 10
            },
            {
                name: '8',
                value: 13
            },
            {
                name: '9',
                value: 22
            },
            {
                name: '10',
                value: 2
            },
            {
                name: '11',
                value: 12
            },
            {
                name: '12',
                value: 30
            },
            {
                name: '13',
                value: 32
            },
            {
                name: '14',
                value: 26
            },
            {
                name: '15',
                value: 13
            },
            {
                name: '16',
                value: 55
            },
            {
                name: '17',
                value: 10
            },
            {
                name: '18',
                value: 13
            },
            {
                name: '19',
                value: 22
            },
            {
                name: '20',
                value: 22
            },
            {
                name: '21',
                value: 10
            },
            {
                name: '22',
                value: 43
            },
            {
                name: '23',
                value: 62
            },
            {
                name: '24',
                value: 8
            },
            {
                name: '25',
                value: 30
            },
            {
                name: '26',
                value: 35
            },
            {
                name: '27',
                value: 40
            },
            {
                name: '28',
                value: 50
            },
            {
                name: '29',
                value: 60
            },
            {
                name: '30',
                value: 60
            },
            {
                name: '31',
                value: 65
            },
        ]
    }
];
const pieChart = [
    {
        name: 'Retornado',
        value: 12
    },
    {
        name: 'Comercial',
        value: 152
    },
    {
        name: 'Crédito',
        value: 450
    },
    {
        name: 'Orçamento',
        value: 75
    }
];


/***/ }),

/***/ "./src/app/main/representative/home/home-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/main/representative/home/home-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/main/representative/home/home.component.ts");




const routes = [
    { path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] }
];
let HomeRoutingModule = class HomeRoutingModule {
};
HomeRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomeRoutingModule);



/***/ }),

/***/ "./src/app/main/representative/home/home.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/main/representative/home/home.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media screen and (max-width: 768px) {\n  section {\n    padding-left: 0px !important;\n  }\n}\nsection {\n  padding-left: 55px;\n}\nsection:nth-child(1) {\n  background-color: #F8F8F8;\n}\nsection:nth-child(2) {\n  background-color: #FFFFFF;\n}\n.charts {\n  display: flex;\n  flex-wrap: wrap;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n.charts .left-side {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n}\n@media screen and (min-width: 320px) and (max-width: 425px) {\n  .charts .left-side .vertical-bar-chart {\n    margin-bottom: 30px;\n  }\n}\n.charts .left-side .vertical-bar-chart {\n  width: inherit;\n  padding: 12px;\n  background-color: #fff;\n  border-radius: 12px;\n  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.06);\n}\n.charts .left-side .vertical-bar-chart .title {\n  display: block;\n  color: var(--title);\n}\n@media screen and (min-width: 992px) and (max-width: 1280px) {\n  .charts .left-side .vertical-bar-chart .title {\n    text-align: center;\n  }\n}\n.charts .left-side .vertical-bar-chart .chart-info {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  position: relative;\n}\n.charts .left-side .vertical-bar-chart .chart-info .info {\n  height: 81%;\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  line-height: 28px;\n}\n.charts .left-side .vertical-bar-chart .chart-info .info span:nth-child(1) {\n  font-size: 2rem;\n  color: var(--primary);\n}\n.charts .left-side .vertical-bar-chart .chart-info .info span:nth-child(2) {\n  font-size: var(--sub-text);\n  color: var(--primary);\n}\n.charts .left-side .vertical-bar-chart .chart-info .info a {\n  font-size: var(--sub-text);\n  text-decoration: underline;\n  line-height: 10px;\n}\n@media screen and (min-width: 992px) and (max-width: 1280px) {\n  .charts .left-side .vertical-bar-chart .chart-info .vertical-bar,\n.charts .left-side .vertical-bar-chart .chart-info .info {\n    width: 100%;\n  }\n  .charts .left-side .vertical-bar-chart .chart-info .vertical-bar {\n    order: 2;\n  }\n  .charts .left-side .vertical-bar-chart .chart-info .info {\n    margin-bottom: 1rem;\n  }\n}\n.charts .left-side .vertical-bar-chart .recipt {\n  display: block;\n  margin: 5px 0px;\n  background: aliceblue;\n  text-align: center;\n  font-size: 18px;\n  color: var(--primary);\n}\n.charts .left-side .line-chart {\n  overflow: auto;\n}\n@media screen and (min-width: 320px) and (max-width: 425px) {\n  .charts .left-side .line-chart .dateNow {\n    text-align: left !important;\n  }\n}\n.charts .left-side .line-chart .dateNow {\n  display: block;\n  font-size: var(--sub-text);\n  text-align: right;\n}\n.charts .left-side .line-chart .title {\n  display: block;\n  color: var(--title);\n}\n.charts .left-side .comissions,\n.charts .left-side .approved {\n  max-height: 277px;\n  margin-top: 30px;\n  padding: 10px;\n  background: #fff;\n  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.06);\n}\n.charts .left-side .comissions .sup,\n.charts .left-side .approved .sup {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.charts .left-side .comissions .sup span,\n.charts .left-side .comissions .sup a,\n.charts .left-side .approved .sup span,\n.charts .left-side .approved .sup a {\n  color: var(--title);\n}\n.charts .left-side .comissions .sup span,\n.charts .left-side .approved .sup span {\n  font-size: var(--default-text);\n  text-transform: uppercase;\n}\n.charts .left-side .comissions .sup a,\n.charts .left-side .approved .sup a {\n  font-size: var(--sub-text);\n  text-decoration: underline;\n}\n@media screen and (min-width: 320px) and (max-width: 425px) {\n  .charts .left-side .comissions .content,\n.charts .left-side .approved .content {\n    flex-wrap: wrap;\n  }\n  .charts .left-side .comissions .content .state,\n.charts .left-side .approved .content .state {\n    width: 50%;\n    margin: 15px 0;\n  }\n  .charts .left-side .comissions .content img,\n.charts .left-side .approved .content img {\n    display: none;\n  }\n}\n@media screen and (min-width: 768px) and (max-width: 1377px) {\n  .charts .left-side .comissions .content,\n.charts .left-side .approved .content {\n    flex-wrap: wrap;\n  }\n  .charts .left-side .comissions .content .state,\n.charts .left-side .approved .content .state {\n    width: 50%;\n    margin: 15px 0;\n  }\n  .charts .left-side .comissions .content img,\n.charts .left-side .approved .content img {\n    display: none;\n  }\n}\n.charts .left-side .comissions .content,\n.charts .left-side .approved .content {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  margin: 20px 0;\n}\n.charts .left-side .comissions .content .state,\n.charts .left-side .approved .content .state {\n  text-align: center;\n}\n.charts .left-side .comissions .content .state span,\n.charts .left-side .approved .content .state span {\n  display: block;\n  margin-top: 10px;\n  font-size: var(--sub-text);\n  text-transform: capitalize;\n}\n.charts .left-side .comissions .content .state em,\n.charts .left-side .approved .content .state em {\n  font-size: 25px;\n  color: #C4C4C4;\n}\n.charts .left-side .comissions .content img,\n.charts .left-side .approved .content img {\n  margin-top: -25px;\n}\n@media screen and (min-width: 320px) and (max-width: 425px) {\n  .charts .left-side .comissions span {\n    font-size: 85% !important;\n    display: block;\n  }\n}\n@media screen and (min-width: 320px) and (max-width: 425px) {\n  .charts .left-side .comissions .bottom {\n    margin-top: -10px;\n    display: flex;\n  }\n  .charts .left-side .comissions .bottom span {\n    font-size: 85% !important;\n  }\n}\n.charts .left-side .comissions .bottom span {\n  font-size: var(--default-text);\n}\n.charts .left-side .comissions .bottom span:nth-child(1) {\n  color: #000;\n}\n.charts .left-side .comissions .bottom span:nth-child(2) {\n  color: var(--primary);\n}\n@media screen and (min-width: 320px) and (max-width: 425px) {\n  .charts .left-side .approved {\n    margin-bottom: 30px;\n  }\n}\n.charts .left-side .approved .content .state span:nth-child(2) {\n  font-size: 22px;\n  margin-top: 2px;\n}\n.charts .left-side .approved .content .state span:nth-child(3) {\n  margin-top: 0 !important;\n}\n.charts .left-side .approved .content img {\n  margin-top: -50px;\n}\n.charts .right-side {\n  height: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-end;\n}\n@media screen and (min-width: 320px) and (max-width: 425px) {\n  .charts .right-side .orders {\n    margin-bottom: 30px;\n  }\n}\n.charts .right-side .orders {\n  padding: 10px;\n  background: #fff;\n  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.06);\n}\n.charts .right-side .orders .sup {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.charts .right-side .orders .sup span,\n.charts .right-side .orders .sup a {\n  color: var(--title);\n}\n.charts .right-side .orders .sup span {\n  font-size: var(--default-text);\n  text-transform: uppercase;\n}\n.charts .right-side .orders .sup a {\n  font-size: var(--sub-text);\n  text-decoration: underline;\n}\n.charts .right-side .orders .content {\n  display: flex;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n  padding: 10px 0;\n}\n.charts .right-side .orders .content .orders-info {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.charts .right-side .orders .content .orders-info span {\n  display: block;\n}\n.charts .right-side .orders .content .orders-info span:first-child {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 65px;\n  height: 65px;\n  border-radius: 50%;\n  color: #fff;\n  box-shadow: 0px 4px 4px 1px rgba(0, 0, 0, 0.125);\n}\n.charts .right-side .orders .content .orders-info span:last-child {\n  margin-top: 10px;\n  font-size: var(--sub-text);\n}\n.charts .right-side .orders .content .orders-info.aproved span:first-child {\n  background-color: var(--success);\n}\n.charts .right-side .orders .content .orders-info.reproved span:first-child {\n  background-color: var(--danger);\n}\n.charts .right-side .orders .content .orders-info.returned span:first-child {\n  background-color: var(--warning);\n}\n.charts .right-side .analysis {\n  position: relative;\n  padding: 10px;\n  background: #fff;\n  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.06);\n}\n.charts .right-side .analysis .sup {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.charts .right-side .analysis .sup span,\n.charts .right-side .analysis .sup a {\n  color: var(--title);\n}\n.charts .right-side .analysis .sup span {\n  font-size: var(--default-text);\n  text-transform: uppercase;\n}\n.charts .right-side .analysis .sup a {\n  font-size: var(--sub-text);\n  text-decoration: underline;\n}\n.charts .right-side .analysis .content {\n  position: relative;\n  display: flex;\n  justify-content: center;\n}\n.charts .right-side .analysis .budget,\n.charts .right-side .analysis .returned,\n.charts .right-side .analysis .credit,\n.charts .right-side .analysis .comercial {\n  position: absolute;\n  text-align: center;\n  line-height: 17px;\n}\n.charts .right-side .analysis .budget span,\n.charts .right-side .analysis .returned span,\n.charts .right-side .analysis .credit span,\n.charts .right-side .analysis .comercial span {\n  display: block;\n}\n.charts .right-side .analysis .budget span:nth-child(1),\n.charts .right-side .analysis .returned span:nth-child(1),\n.charts .right-side .analysis .credit span:nth-child(1),\n.charts .right-side .analysis .comercial span:nth-child(1) {\n  font-size: 24px;\n}\n.charts .right-side .analysis .budget span:nth-child(2),\n.charts .right-side .analysis .returned span:nth-child(2),\n.charts .right-side .analysis .credit span:nth-child(2),\n.charts .right-side .analysis .comercial span:nth-child(2) {\n  font-size: 11px;\n}\n.charts .right-side .analysis .budget span:nth-child(3),\n.charts .right-side .analysis .returned span:nth-child(3),\n.charts .right-side .analysis .credit span:nth-child(3),\n.charts .right-side .analysis .comercial span:nth-child(3) {\n  font-size: 12px;\n}\n.charts .right-side .analysis .budget {\n  top: 43px;\n  left: 10px;\n}\n.charts .right-side .analysis .returned {\n  top: 43px;\n  right: 10px;\n}\n.charts .right-side .analysis .credit {\n  bottom: 10px;\n  left: 10px;\n}\n.charts .right-side .analysis .comercial {\n  bottom: 10px;\n  right: 10px;\n}\n.charts .right-side .analysis .budget span:nth-child(3) {\n  color: #EF7F00;\n}\n.charts .right-side .analysis .returned span:nth-child(3) {\n  color: #FE0D64;\n}\n.charts .right-side .analysis .credit span:nth-child(3) {\n  color: #4DBF69;\n}\n.charts .right-side .analysis .comercial span:nth-child(3) {\n  color: #0063AF;\n}\n.carousel .picsum-img-wrapper img {\n  width: 100%;\n}\n.selling-champions {\n  padding: 30px 70px;\n}\n.selling-champions .title {\n  display: block;\n  font-size: 20px;\n  color: var(--title);\n  margin-bottom: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9yZXByZXNlbnRhdGl2ZS9ob21lL0M6XFxFbGdpblVwM1xcZnJvbnQtZWxnaW4tMy4wXFxGUk9OVC1FTEdJTlVQLTMuMC9zcmNcXGFwcFxcbWFpblxccmVwcmVzZW50YXRpdmVcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vcmVwcmVzZW50YXRpdmUvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7SUFDSSw0QkFBQTtFQ0NOO0FBQ0Y7QURFQTtFQUNJLGtCQUFBO0FDQUo7QURHQTtFQUNJLHlCQUFBO0FDQUo7QURHQTtFQUNJLHlCQUFBO0FDQUo7QURHQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ0FKO0FERUk7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDQVI7QURFUTtFQUNJO0lBQ0ksbUJBQUE7RUNBZDtBQUNGO0FER1E7RUFDSSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQ0FBQTtBQ0RaO0FER1k7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7QUNEaEI7QURJWTtFQUVJO0lBQ0ksa0JBQUE7RUNIbEI7QUFDRjtBRE1ZO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDSmhCO0FETWdCO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNKcEI7QURNb0I7RUFDSSxlQUFBO0VBQ0EscUJBQUE7QUNKeEI7QURPb0I7RUFDSSwwQkFBQTtFQUNBLHFCQUFBO0FDTHhCO0FEUW9CO0VBQ0ksMEJBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0FDTnhCO0FEVWdCO0VBRUk7O0lBRUksV0FBQTtFQ1R0QjtFRFlrQjtJQUNJLFFBQUE7RUNWdEI7RURha0I7SUFDSSxtQkFBQTtFQ1h0QjtBQUNGO0FEZVk7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUNiaEI7QURpQlE7RUFDSSxjQUFBO0FDZlo7QURpQlk7RUFDSTtJQUNJLDJCQUFBO0VDZmxCO0FBQ0Y7QURrQlk7RUFDSSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtBQ2hCaEI7QURtQlk7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7QUNqQmhCO0FEcUJROztFQUVJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQ0FBQTtBQ25CWjtBRHFCWTs7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQ2xCaEI7QURvQmdCOzs7O0VBRUksbUJBQUE7QUNoQnBCO0FEbUJnQjs7RUFDSSw4QkFBQTtFQUNBLHlCQUFBO0FDaEJwQjtBRG1CZ0I7O0VBQ0ksMEJBQUE7RUFDQSwwQkFBQTtBQ2hCcEI7QURvQlk7RUFDSTs7SUFDSSxlQUFBO0VDakJsQjtFRG1Ca0I7O0lBQ0ksVUFBQTtJQUNBLGNBQUE7RUNoQnRCO0VEbUJrQjs7SUFDSSxhQUFBO0VDaEJ0QjtBQUNGO0FEb0JZO0VBQ0k7O0lBQ0ksZUFBQTtFQ2pCbEI7RURtQmtCOztJQUNJLFVBQUE7SUFDQSxjQUFBO0VDaEJ0QjtFRG1Ca0I7O0lBQ0ksYUFBQTtFQ2hCdEI7QUFDRjtBRG9CWTs7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7QUNqQmhCO0FEbUJnQjs7RUFDSSxrQkFBQTtBQ2hCcEI7QURrQm9COztFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7QUNmeEI7QURrQm9COztFQUNJLGVBQUE7RUFDQSxjQUFBO0FDZnhCO0FEbUJnQjs7RUFDSSxpQkFBQTtBQ2hCcEI7QUR1Qlk7RUFFSTtJQUNJLHlCQUFBO0lBQ0EsY0FBQTtFQ3RCbEI7QUFDRjtBRHlCWTtFQUNJO0lBQ0ksaUJBQUE7SUFDQSxhQUFBO0VDdkJsQjtFRHlCa0I7SUFDSSx5QkFBQTtFQ3ZCdEI7QUFDRjtBRDZCZ0I7RUFDSSw4QkFBQTtBQzNCcEI7QUQ4QmdCO0VBQ0ksV0FBQTtBQzVCcEI7QUQrQmdCO0VBQ0kscUJBQUE7QUM3QnBCO0FEa0NRO0VBQ0k7SUFDSSxtQkFBQTtFQ2hDZDtBQUNGO0FEdUNvQjtFQUNJLGVBQUE7RUFDQSxlQUFBO0FDckN4QjtBRHdDb0I7RUFDSSx3QkFBQTtBQ3RDeEI7QUQwQ2dCO0VBQ0ksaUJBQUE7QUN4Q3BCO0FEOENJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUM1Q1I7QUQ4Q1E7RUFDSTtJQUNJLG1CQUFBO0VDNUNkO0FBQ0Y7QUQrQ1E7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQ0FBQTtBQzdDWjtBRCtDWTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FDN0NoQjtBRCtDZ0I7O0VBRUksbUJBQUE7QUM3Q3BCO0FEZ0RnQjtFQUNJLDhCQUFBO0VBQ0EseUJBQUE7QUM5Q3BCO0FEaURnQjtFQUNJLDBCQUFBO0VBQ0EsMEJBQUE7QUMvQ3BCO0FEbURZO0VBQ0ksYUFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNqRGhCO0FEbURnQjtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDakRwQjtBRG1Eb0I7RUFDSSxjQUFBO0FDakR4QjtBRG9Eb0I7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0RBQUE7QUNsRHhCO0FEcURvQjtFQUNJLGdCQUFBO0VBQ0EsMEJBQUE7QUNuRHhCO0FEd0RvQjtFQUNJLGdDQUFBO0FDdER4QjtBRDJEb0I7RUFDSSwrQkFBQTtBQ3pEeEI7QUQ4RG9CO0VBQ0ksZ0NBQUE7QUM1RHhCO0FEa0VRO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQ0FBQTtBQ2hFWjtBRGtFWTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FDaEVoQjtBRGtFZ0I7O0VBRUksbUJBQUE7QUNoRXBCO0FEbUVnQjtFQUNJLDhCQUFBO0VBQ0EseUJBQUE7QUNqRXBCO0FEb0VnQjtFQUNJLDBCQUFBO0VBQ0EsMEJBQUE7QUNsRXBCO0FEc0VZO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUNwRWhCO0FEdUVZOzs7O0VBSUksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDckVoQjtBRHVFZ0I7Ozs7RUFDSSxjQUFBO0FDbEVwQjtBRHFFZ0I7Ozs7RUFDSSxlQUFBO0FDaEVwQjtBRG1FZ0I7Ozs7RUFDSSxlQUFBO0FDOURwQjtBRGlFZ0I7Ozs7RUFDSSxlQUFBO0FDNURwQjtBRGdFWTtFQUNJLFNBQUE7RUFDQSxVQUFBO0FDOURoQjtBRGlFWTtFQUNJLFNBQUE7RUFDQSxXQUFBO0FDL0RoQjtBRGtFWTtFQUNJLFlBQUE7RUFDQSxVQUFBO0FDaEVoQjtBRG1FWTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDakVoQjtBRG9FWTtFQUNJLGNBQUE7QUNsRWhCO0FEcUVZO0VBQ0ksY0FBQTtBQ25FaEI7QURzRVk7RUFDSSxjQUFBO0FDcEVoQjtBRHVFWTtFQUNJLGNBQUE7QUNyRWhCO0FENkVRO0VBQ0ksV0FBQTtBQzFFWjtBRCtFQTtFQUNJLGtCQUFBO0FDNUVKO0FEOEVJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDNUVSIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9yZXByZXNlbnRhdGl2ZS9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIHNlY3Rpb24ge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuc2VjdGlvbiB7XG4gICAgcGFkZGluZy1sZWZ0OiA1NXB4O1xufVxuXG5zZWN0aW9uOm50aC1jaGlsZCgxKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RjhGODtcbn1cblxuc2VjdGlvbjpudGgtY2hpbGQoMikge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG59XG5cbi5jaGFydHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuXG4gICAgLmxlZnQtc2lkZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gICAgICAgICAgICAudmVydGljYWwtYmFyLWNoYXJ0IHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnZlcnRpY2FsLWJhci1jaGFydCB7XG4gICAgICAgICAgICB3aWR0aDogaW5oZXJpdDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEycHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xuXG4gICAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10aXRsZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7XG5cbiAgICAgICAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY2hhcnQtaW5mbyB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgICAgICAgICAuaW5mbyB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogODElO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcblxuICAgICAgICAgICAgICAgICAgICBzcGFuOm50aC1jaGlsZCgxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBzcGFuOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLXN1Yi10ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1zdWItdGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIHtcblxuICAgICAgICAgICAgICAgICAgICAudmVydGljYWwtYmFyLFxuICAgICAgICAgICAgICAgICAgICAuaW5mbyB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC52ZXJ0aWNhbC1iYXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI6IDI7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuaW5mbyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucmVjaXB0IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBtYXJnaW46IDVweCAwcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYWxpY2VibHVlO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmxpbmUtY2hhcnQge1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG5cbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgICAgICAgICAgICAgICAuZGF0ZU5vdyB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5kYXRlTm93IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLXN1Yi10ZXh0KTtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGl0bGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmNvbWlzc2lvbnMsXG4gICAgICAgIC5hcHByb3ZlZCB7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAyNzdweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xuXG4gICAgICAgICAgICAuc3VwIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgICAgICAgICAgICAgc3BhbixcbiAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRpdGxlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1kZWZhdWx0LXRleHQpO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLXN1Yi10ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gICAgICAgICAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAgICAgICAgICAgICAgICAgLnN0YXRlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDE1cHggMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDEzNzdweCkge1xuICAgICAgICAgICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgICAgICAgICAgICAgICAgIC5zdGF0ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxNXB4IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDIwcHggMDtcblxuICAgICAgICAgICAgICAgIC5zdGF0ZSB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tc3ViLXRleHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBlbSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI0M0QzRDNDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0yNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5jb21pc3Npb25zIHtcblxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA0MjVweCkge1xuXG4gICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogODUlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA0MjVweCkge1xuICAgICAgICAgICAgICAgIC5ib3R0b20ge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogODUlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmJvdHRvbSB7XG4gICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZGVmYXVsdC10ZXh0KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzcGFuOm50aC1jaGlsZCgxKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNwYW46bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgICAgICAgICAgIC5hcHByb3ZlZCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgLmFwcHJvdmVkIHtcbiAgICAgICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICAgICAgICAuc3RhdGUge1xuICAgICAgICAgICAgICAgICAgICBzcGFuOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBzcGFuOm50aC1jaGlsZCgzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtNTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAucmlnaHQtc2lkZSB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA0MjVweCkge1xuICAgICAgICAgICAgLm9yZGVycyB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5vcmRlcnMge1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDRweCAycHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcblxuICAgICAgICAgICAgLnN1cCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgICAgICAgICAgICAgIHNwYW4sXG4gICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10aXRsZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZGVmYXVsdC10ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1zdWItdGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcblxuICAgICAgICAgICAgICAgIC5vcmRlcnMtaW5mbyB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHNwYW46Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2NXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2NXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCAxcHggcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBzcGFuOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tc3ViLXRleHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLm9yZGVycy1pbmZvLmFwcm92ZWQge1xuICAgICAgICAgICAgICAgICAgICBzcGFuOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1Y2Nlc3MpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLm9yZGVycy1pbmZvLnJlcHJvdmVkIHtcbiAgICAgICAgICAgICAgICAgICAgc3BhbjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYW5nZXIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLm9yZGVycy1pbmZvLnJldHVybmVkIHtcbiAgICAgICAgICAgICAgICAgICAgc3BhbjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13YXJuaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5hbmFseXNpcyB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xuXG4gICAgICAgICAgICAuc3VwIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgICAgICAgICAgICAgc3BhbixcbiAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRpdGxlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1kZWZhdWx0LXRleHQpO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLXN1Yi10ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5idWRnZXQsXG4gICAgICAgICAgICAucmV0dXJuZWQsXG4gICAgICAgICAgICAuY3JlZGl0LFxuICAgICAgICAgICAgLmNvbWVyY2lhbCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTdweDtcblxuICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzcGFuOm50aC1jaGlsZCgxKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzcGFuOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzcGFuOm50aC1jaGlsZCgzKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5idWRnZXQge1xuICAgICAgICAgICAgICAgIHRvcDogNDNweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAxMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucmV0dXJuZWQge1xuICAgICAgICAgICAgICAgIHRvcDogNDNweDtcbiAgICAgICAgICAgICAgICByaWdodDogMTBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNyZWRpdCB7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IDEwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jb21lcmNpYWwge1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICByaWdodDogMTBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmJ1ZGdldCBzcGFuOm50aC1jaGlsZCgzKSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNFRjdGMDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5yZXR1cm5lZCBzcGFuOm50aC1jaGlsZCgzKSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNGRTBENjQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jcmVkaXQgc3BhbjpudGgtY2hpbGQoMykge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNERCRjY5O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY29tZXJjaWFsIHNwYW46bnRoLWNoaWxkKDMpIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwNjNBRjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmNhcm91c2VsIHtcbiAgICAucGljc3VtLWltZy13cmFwcGVyIHtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uc2VsbGluZy1jaGFtcGlvbnMge1xuICAgIHBhZGRpbmc6IDMwcHggNzBweDtcblxuICAgIC50aXRsZSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10aXRsZSk7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgfVxufSIsIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIHNlY3Rpb24ge1xuICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbnNlY3Rpb24ge1xuICBwYWRkaW5nLWxlZnQ6IDU1cHg7XG59XG5cbnNlY3Rpb246bnRoLWNoaWxkKDEpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RjhGODtcbn1cblxuc2VjdGlvbjpudGgtY2hpbGQoMikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xufVxuXG4uY2hhcnRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG4uY2hhcnRzIC5sZWZ0LXNpZGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gIC5jaGFydHMgLmxlZnQtc2lkZSAudmVydGljYWwtYmFyLWNoYXJ0IHtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB9XG59XG4uY2hhcnRzIC5sZWZ0LXNpZGUgLnZlcnRpY2FsLWJhci1jaGFydCB7XG4gIHdpZHRoOiBpbmhlcml0O1xuICBwYWRkaW5nOiAxMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDRweCAycHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcbn1cbi5jaGFydHMgLmxlZnQtc2lkZSAudmVydGljYWwtYmFyLWNoYXJ0IC50aXRsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogdmFyKC0tdGl0bGUpO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIHtcbiAgLmNoYXJ0cyAubGVmdC1zaWRlIC52ZXJ0aWNhbC1iYXItY2hhcnQgLnRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cbi5jaGFydHMgLmxlZnQtc2lkZSAudmVydGljYWwtYmFyLWNoYXJ0IC5jaGFydC1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY2hhcnRzIC5sZWZ0LXNpZGUgLnZlcnRpY2FsLWJhci1jaGFydCAuY2hhcnQtaW5mbyAuaW5mbyB7XG4gIGhlaWdodDogODElO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMjhweDtcbn1cbi5jaGFydHMgLmxlZnQtc2lkZSAudmVydGljYWwtYmFyLWNoYXJ0IC5jaGFydC1pbmZvIC5pbmZvIHNwYW46bnRoLWNoaWxkKDEpIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG59XG4uY2hhcnRzIC5sZWZ0LXNpZGUgLnZlcnRpY2FsLWJhci1jaGFydCAuY2hhcnQtaW5mbyAuaW5mbyBzcGFuOm50aC1jaGlsZCgyKSB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc3ViLXRleHQpO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG59XG4uY2hhcnRzIC5sZWZ0LXNpZGUgLnZlcnRpY2FsLWJhci1jaGFydCAuY2hhcnQtaW5mbyAuaW5mbyBhIHtcbiAgZm9udC1zaXplOiB2YXIoLS1zdWItdGV4dCk7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBsaW5lLWhlaWdodDogMTBweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7XG4gIC5jaGFydHMgLmxlZnQtc2lkZSAudmVydGljYWwtYmFyLWNoYXJ0IC5jaGFydC1pbmZvIC52ZXJ0aWNhbC1iYXIsXG4uY2hhcnRzIC5sZWZ0LXNpZGUgLnZlcnRpY2FsLWJhci1jaGFydCAuY2hhcnQtaW5mbyAuaW5mbyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmNoYXJ0cyAubGVmdC1zaWRlIC52ZXJ0aWNhbC1iYXItY2hhcnQgLmNoYXJ0LWluZm8gLnZlcnRpY2FsLWJhciB7XG4gICAgb3JkZXI6IDI7XG4gIH1cbiAgLmNoYXJ0cyAubGVmdC1zaWRlIC52ZXJ0aWNhbC1iYXItY2hhcnQgLmNoYXJ0LWluZm8gLmluZm8ge1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIH1cbn1cbi5jaGFydHMgLmxlZnQtc2lkZSAudmVydGljYWwtYmFyLWNoYXJ0IC5yZWNpcHQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiA1cHggMHB4O1xuICBiYWNrZ3JvdW5kOiBhbGljZWJsdWU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG59XG4uY2hhcnRzIC5sZWZ0LXNpZGUgLmxpbmUtY2hhcnQge1xuICBvdmVyZmxvdzogYXV0bztcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgLmNoYXJ0cyAubGVmdC1zaWRlIC5saW5lLWNoYXJ0IC5kYXRlTm93IHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5jaGFydHMgLmxlZnQtc2lkZSAubGluZS1jaGFydCAuZGF0ZU5vdyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IHZhcigtLXN1Yi10ZXh0KTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uY2hhcnRzIC5sZWZ0LXNpZGUgLmxpbmUtY2hhcnQgLnRpdGxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiB2YXIoLS10aXRsZSk7XG59XG4uY2hhcnRzIC5sZWZ0LXNpZGUgLmNvbWlzc2lvbnMsXG4uY2hhcnRzIC5sZWZ0LXNpZGUgLmFwcHJvdmVkIHtcbiAgbWF4LWhlaWdodDogMjc3cHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xufVxuLmNoYXJ0cyAubGVmdC1zaWRlIC5jb21pc3Npb25zIC5zdXAsXG4uY2hhcnRzIC5sZWZ0LXNpZGUgLmFwcHJvdmVkIC5zdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uY2hhcnRzIC5sZWZ0LXNpZGUgLmNvbWlzc2lvbnMgLnN1cCBzcGFuLFxuLmNoYXJ0cyAubGVmdC1zaWRlIC5jb21pc3Npb25zIC5zdXAgYSxcbi5jaGFydHMgLmxlZnQtc2lkZSAuYXBwcm92ZWQgLnN1cCBzcGFuLFxuLmNoYXJ0cyAubGVmdC1zaWRlIC5hcHByb3ZlZCAuc3VwIGEge1xuICBjb2xvcjogdmFyKC0tdGl0bGUpO1xufVxuLmNoYXJ0cyAubGVmdC1zaWRlIC5jb21pc3Npb25zIC5zdXAgc3Bhbixcbi5jaGFydHMgLmxlZnQtc2lkZSAuYXBwcm92ZWQgLnN1cCBzcGFuIHtcbiAgZm9udC1zaXplOiB2YXIoLS1kZWZhdWx0LXRleHQpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLmNoYXJ0cyAubGVmdC1zaWRlIC5jb21pc3Npb25zIC5zdXAgYSxcbi5jaGFydHMgLmxlZnQtc2lkZSAuYXBwcm92ZWQgLnN1cCBhIHtcbiAgZm9udC1zaXplOiB2YXIoLS1zdWItdGV4dCk7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA0MjVweCkge1xuICAuY2hhcnRzIC5sZWZ0LXNpZGUgLmNvbWlzc2lvbnMgLmNvbnRlbnQsXG4uY2hhcnRzIC5sZWZ0LXNpZGUgLmFwcHJvdmVkIC5jb250ZW50IHtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cbiAgLmNoYXJ0cyAubGVmdC1zaWRlIC5jb21pc3Npb25zIC5jb250ZW50IC5zdGF0ZSxcbi5jaGFydHMgLmxlZnQtc2lkZSAuYXBwcm92ZWQgLmNvbnRlbnQgLnN0YXRlIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIG1hcmdpbjogMTVweCAwO1xuICB9XG4gIC5jaGFydHMgLmxlZnQtc2lkZSAuY29taXNzaW9ucyAuY29udGVudCBpbWcsXG4uY2hhcnRzIC5sZWZ0LXNpZGUgLmFwcHJvdmVkIC5jb250ZW50IGltZyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMzc3cHgpIHtcbiAgLmNoYXJ0cyAubGVmdC1zaWRlIC5jb21pc3Npb25zIC5jb250ZW50LFxuLmNoYXJ0cyAubGVmdC1zaWRlIC5hcHByb3ZlZCAuY29udGVudCB7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9XG4gIC5jaGFydHMgLmxlZnQtc2lkZSAuY29taXNzaW9ucyAuY29udGVudCAuc3RhdGUsXG4uY2hhcnRzIC5sZWZ0LXNpZGUgLmFwcHJvdmVkIC5jb250ZW50IC5zdGF0ZSB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXJnaW46IDE1cHggMDtcbiAgfVxuICAuY2hhcnRzIC5sZWZ0LXNpZGUgLmNvbWlzc2lvbnMgLmNvbnRlbnQgaW1nLFxuLmNoYXJ0cyAubGVmdC1zaWRlIC5hcHByb3ZlZCAuY29udGVudCBpbWcge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5jaGFydHMgLmxlZnQtc2lkZSAuY29taXNzaW9ucyAuY29udGVudCxcbi5jaGFydHMgLmxlZnQtc2lkZSAuYXBwcm92ZWQgLmNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgbWFyZ2luOiAyMHB4IDA7XG59XG4uY2hhcnRzIC5sZWZ0LXNpZGUgLmNvbWlzc2lvbnMgLmNvbnRlbnQgLnN0YXRlLFxuLmNoYXJ0cyAubGVmdC1zaWRlIC5hcHByb3ZlZCAuY29udGVudCAuc3RhdGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY2hhcnRzIC5sZWZ0LXNpZGUgLmNvbWlzc2lvbnMgLmNvbnRlbnQgLnN0YXRlIHNwYW4sXG4uY2hhcnRzIC5sZWZ0LXNpZGUgLmFwcHJvdmVkIC5jb250ZW50IC5zdGF0ZSBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc3ViLXRleHQpO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbi5jaGFydHMgLmxlZnQtc2lkZSAuY29taXNzaW9ucyAuY29udGVudCAuc3RhdGUgZW0sXG4uY2hhcnRzIC5sZWZ0LXNpZGUgLmFwcHJvdmVkIC5jb250ZW50IC5zdGF0ZSBlbSB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgY29sb3I6ICNDNEM0QzQ7XG59XG4uY2hhcnRzIC5sZWZ0LXNpZGUgLmNvbWlzc2lvbnMgLmNvbnRlbnQgaW1nLFxuLmNoYXJ0cyAubGVmdC1zaWRlIC5hcHByb3ZlZCAuY29udGVudCBpbWcge1xuICBtYXJnaW4tdG9wOiAtMjVweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgLmNoYXJ0cyAubGVmdC1zaWRlIC5jb21pc3Npb25zIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogODUlICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgLmNoYXJ0cyAubGVmdC1zaWRlIC5jb21pc3Npb25zIC5ib3R0b20ge1xuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgLmNoYXJ0cyAubGVmdC1zaWRlIC5jb21pc3Npb25zIC5ib3R0b20gc3BhbiB7XG4gICAgZm9udC1zaXplOiA4NSUgIWltcG9ydGFudDtcbiAgfVxufVxuLmNoYXJ0cyAubGVmdC1zaWRlIC5jb21pc3Npb25zIC5ib3R0b20gc3BhbiB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZGVmYXVsdC10ZXh0KTtcbn1cbi5jaGFydHMgLmxlZnQtc2lkZSAuY29taXNzaW9ucyAuYm90dG9tIHNwYW46bnRoLWNoaWxkKDEpIHtcbiAgY29sb3I6ICMwMDA7XG59XG4uY2hhcnRzIC5sZWZ0LXNpZGUgLmNvbWlzc2lvbnMgLmJvdHRvbSBzcGFuOm50aC1jaGlsZCgyKSB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgLmNoYXJ0cyAubGVmdC1zaWRlIC5hcHByb3ZlZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgfVxufVxuLmNoYXJ0cyAubGVmdC1zaWRlIC5hcHByb3ZlZCAuY29udGVudCAuc3RhdGUgc3BhbjpudGgtY2hpbGQoMikge1xuICBmb250LXNpemU6IDIycHg7XG4gIG1hcmdpbi10b3A6IDJweDtcbn1cbi5jaGFydHMgLmxlZnQtc2lkZSAuYXBwcm92ZWQgLmNvbnRlbnQgLnN0YXRlIHNwYW46bnRoLWNoaWxkKDMpIHtcbiAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xufVxuLmNoYXJ0cyAubGVmdC1zaWRlIC5hcHByb3ZlZCAuY29udGVudCBpbWcge1xuICBtYXJnaW4tdG9wOiAtNTBweDtcbn1cbi5jaGFydHMgLnJpZ2h0LXNpZGUge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA0MjVweCkge1xuICAuY2hhcnRzIC5yaWdodC1zaWRlIC5vcmRlcnMge1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIH1cbn1cbi5jaGFydHMgLnJpZ2h0LXNpZGUgLm9yZGVycyB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xufVxuLmNoYXJ0cyAucmlnaHQtc2lkZSAub3JkZXJzIC5zdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uY2hhcnRzIC5yaWdodC1zaWRlIC5vcmRlcnMgLnN1cCBzcGFuLFxuLmNoYXJ0cyAucmlnaHQtc2lkZSAub3JkZXJzIC5zdXAgYSB7XG4gIGNvbG9yOiB2YXIoLS10aXRsZSk7XG59XG4uY2hhcnRzIC5yaWdodC1zaWRlIC5vcmRlcnMgLnN1cCBzcGFuIHtcbiAgZm9udC1zaXplOiB2YXIoLS1kZWZhdWx0LXRleHQpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLmNoYXJ0cyAucmlnaHQtc2lkZSAub3JkZXJzIC5zdXAgYSB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc3ViLXRleHQpO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbi5jaGFydHMgLnJpZ2h0LXNpZGUgLm9yZGVycyAuY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cbi5jaGFydHMgLnJpZ2h0LXNpZGUgLm9yZGVycyAuY29udGVudCAub3JkZXJzLWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNoYXJ0cyAucmlnaHQtc2lkZSAub3JkZXJzIC5jb250ZW50IC5vcmRlcnMtaW5mbyBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uY2hhcnRzIC5yaWdodC1zaWRlIC5vcmRlcnMgLmNvbnRlbnQgLm9yZGVycy1pbmZvIHNwYW46Zmlyc3QtY2hpbGQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDY1cHg7XG4gIGhlaWdodDogNjVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xufVxuLmNoYXJ0cyAucmlnaHQtc2lkZSAub3JkZXJzIC5jb250ZW50IC5vcmRlcnMtaW5mbyBzcGFuOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LXNpemU6IHZhcigtLXN1Yi10ZXh0KTtcbn1cbi5jaGFydHMgLnJpZ2h0LXNpZGUgLm9yZGVycyAuY29udGVudCAub3JkZXJzLWluZm8uYXByb3ZlZCBzcGFuOmZpcnN0LWNoaWxkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VjY2Vzcyk7XG59XG4uY2hhcnRzIC5yaWdodC1zaWRlIC5vcmRlcnMgLmNvbnRlbnQgLm9yZGVycy1pbmZvLnJlcHJvdmVkIHNwYW46Zmlyc3QtY2hpbGQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYW5nZXIpO1xufVxuLmNoYXJ0cyAucmlnaHQtc2lkZSAub3JkZXJzIC5jb250ZW50IC5vcmRlcnMtaW5mby5yZXR1cm5lZCBzcGFuOmZpcnN0LWNoaWxkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2FybmluZyk7XG59XG4uY2hhcnRzIC5yaWdodC1zaWRlIC5hbmFseXNpcyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XG59XG4uY2hhcnRzIC5yaWdodC1zaWRlIC5hbmFseXNpcyAuc3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmNoYXJ0cyAucmlnaHQtc2lkZSAuYW5hbHlzaXMgLnN1cCBzcGFuLFxuLmNoYXJ0cyAucmlnaHQtc2lkZSAuYW5hbHlzaXMgLnN1cCBhIHtcbiAgY29sb3I6IHZhcigtLXRpdGxlKTtcbn1cbi5jaGFydHMgLnJpZ2h0LXNpZGUgLmFuYWx5c2lzIC5zdXAgc3BhbiB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZGVmYXVsdC10ZXh0KTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5jaGFydHMgLnJpZ2h0LXNpZGUgLmFuYWx5c2lzIC5zdXAgYSB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc3ViLXRleHQpO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbi5jaGFydHMgLnJpZ2h0LXNpZGUgLmFuYWx5c2lzIC5jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5jaGFydHMgLnJpZ2h0LXNpZGUgLmFuYWx5c2lzIC5idWRnZXQsXG4uY2hhcnRzIC5yaWdodC1zaWRlIC5hbmFseXNpcyAucmV0dXJuZWQsXG4uY2hhcnRzIC5yaWdodC1zaWRlIC5hbmFseXNpcyAuY3JlZGl0LFxuLmNoYXJ0cyAucmlnaHQtc2lkZSAuYW5hbHlzaXMgLmNvbWVyY2lhbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMTdweDtcbn1cbi5jaGFydHMgLnJpZ2h0LXNpZGUgLmFuYWx5c2lzIC5idWRnZXQgc3Bhbixcbi5jaGFydHMgLnJpZ2h0LXNpZGUgLmFuYWx5c2lzIC5yZXR1cm5lZCBzcGFuLFxuLmNoYXJ0cyAucmlnaHQtc2lkZSAuYW5hbHlzaXMgLmNyZWRpdCBzcGFuLFxuLmNoYXJ0cyAucmlnaHQtc2lkZSAuYW5hbHlzaXMgLmNvbWVyY2lhbCBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uY2hhcnRzIC5yaWdodC1zaWRlIC5hbmFseXNpcyAuYnVkZ2V0IHNwYW46bnRoLWNoaWxkKDEpLFxuLmNoYXJ0cyAucmlnaHQtc2lkZSAuYW5hbHlzaXMgLnJldHVybmVkIHNwYW46bnRoLWNoaWxkKDEpLFxuLmNoYXJ0cyAucmlnaHQtc2lkZSAuYW5hbHlzaXMgLmNyZWRpdCBzcGFuOm50aC1jaGlsZCgxKSxcbi5jaGFydHMgLnJpZ2h0LXNpZGUgLmFuYWx5c2lzIC5jb21lcmNpYWwgc3BhbjpudGgtY2hpbGQoMSkge1xuICBmb250LXNpemU6IDI0cHg7XG59XG4uY2hhcnRzIC5yaWdodC1zaWRlIC5hbmFseXNpcyAuYnVkZ2V0IHNwYW46bnRoLWNoaWxkKDIpLFxuLmNoYXJ0cyAucmlnaHQtc2lkZSAuYW5hbHlzaXMgLnJldHVybmVkIHNwYW46bnRoLWNoaWxkKDIpLFxuLmNoYXJ0cyAucmlnaHQtc2lkZSAuYW5hbHlzaXMgLmNyZWRpdCBzcGFuOm50aC1jaGlsZCgyKSxcbi5jaGFydHMgLnJpZ2h0LXNpZGUgLmFuYWx5c2lzIC5jb21lcmNpYWwgc3BhbjpudGgtY2hpbGQoMikge1xuICBmb250LXNpemU6IDExcHg7XG59XG4uY2hhcnRzIC5yaWdodC1zaWRlIC5hbmFseXNpcyAuYnVkZ2V0IHNwYW46bnRoLWNoaWxkKDMpLFxuLmNoYXJ0cyAucmlnaHQtc2lkZSAuYW5hbHlzaXMgLnJldHVybmVkIHNwYW46bnRoLWNoaWxkKDMpLFxuLmNoYXJ0cyAucmlnaHQtc2lkZSAuYW5hbHlzaXMgLmNyZWRpdCBzcGFuOm50aC1jaGlsZCgzKSxcbi5jaGFydHMgLnJpZ2h0LXNpZGUgLmFuYWx5c2lzIC5jb21lcmNpYWwgc3BhbjpudGgtY2hpbGQoMykge1xuICBmb250LXNpemU6IDEycHg7XG59XG4uY2hhcnRzIC5yaWdodC1zaWRlIC5hbmFseXNpcyAuYnVkZ2V0IHtcbiAgdG9wOiA0M3B4O1xuICBsZWZ0OiAxMHB4O1xufVxuLmNoYXJ0cyAucmlnaHQtc2lkZSAuYW5hbHlzaXMgLnJldHVybmVkIHtcbiAgdG9wOiA0M3B4O1xuICByaWdodDogMTBweDtcbn1cbi5jaGFydHMgLnJpZ2h0LXNpZGUgLmFuYWx5c2lzIC5jcmVkaXQge1xuICBib3R0b206IDEwcHg7XG4gIGxlZnQ6IDEwcHg7XG59XG4uY2hhcnRzIC5yaWdodC1zaWRlIC5hbmFseXNpcyAuY29tZXJjaWFsIHtcbiAgYm90dG9tOiAxMHB4O1xuICByaWdodDogMTBweDtcbn1cbi5jaGFydHMgLnJpZ2h0LXNpZGUgLmFuYWx5c2lzIC5idWRnZXQgc3BhbjpudGgtY2hpbGQoMykge1xuICBjb2xvcjogI0VGN0YwMDtcbn1cbi5jaGFydHMgLnJpZ2h0LXNpZGUgLmFuYWx5c2lzIC5yZXR1cm5lZCBzcGFuOm50aC1jaGlsZCgzKSB7XG4gIGNvbG9yOiAjRkUwRDY0O1xufVxuLmNoYXJ0cyAucmlnaHQtc2lkZSAuYW5hbHlzaXMgLmNyZWRpdCBzcGFuOm50aC1jaGlsZCgzKSB7XG4gIGNvbG9yOiAjNERCRjY5O1xufVxuLmNoYXJ0cyAucmlnaHQtc2lkZSAuYW5hbHlzaXMgLmNvbWVyY2lhbCBzcGFuOm50aC1jaGlsZCgzKSB7XG4gIGNvbG9yOiAjMDA2M0FGO1xufVxuXG4uY2Fyb3VzZWwgLnBpY3N1bS1pbWctd3JhcHBlciBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNlbGxpbmctY2hhbXBpb25zIHtcbiAgcGFkZGluZzogMzBweCA3MHB4O1xufVxuLnNlbGxpbmctY2hhbXBpb25zIC50aXRsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiB2YXIoLS10aXRsZSk7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/main/representative/home/home.component.ts":
/*!************************************************************!*\
  !*** ./src/app/main/representative/home/home.component.ts ***!
  \************************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ "./src/app/main/representative/home/data.ts");



let HomeComponent = class HomeComponent {
    constructor() {
        Object.assign(this, { barChart: _data__WEBPACK_IMPORTED_MODULE_2__["barChart"], lineChart: _data__WEBPACK_IMPORTED_MODULE_2__["lineChart"], pieChart: _data__WEBPACK_IMPORTED_MODULE_2__["pieChart"] });
    }
};
HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'elgin-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/representative/home/home.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.component.scss */ "./src/app/main/representative/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/main/representative/home/home.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/main/representative/home/home.module.ts ***!
  \*********************************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_layouts_layouts_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/layouts/layouts.module */ "./src/app/layouts/layouts.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/__ivy_ngcc__/fesm2015/swimlane-ngx-charts.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.component */ "./src/app/main/representative/home/home.component.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/main/representative/home/home-routing.module.ts");








let HomeModule = class HomeModule {
};
HomeModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_7__["HomeRoutingModule"],
            _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__["NgxChartsModule"],
            src_app_layouts_layouts_module__WEBPACK_IMPORTED_MODULE_1__["LayoutsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCarouselModule"]
        ],
        exports: [_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], HomeModule);



/***/ }),

/***/ "./src/app/main/representative/orders/invoice-detail/invoice-detail.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/main/representative/orders/invoice-detail/invoice-detail.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media (min-width: 1200px) {\n  .modal-xl {\n    max-width: 1340px;\n  }\n}\n.modal-backdrop {\n  background-color: #0063af;\n  opacity: 90% !important;\n}\n.modal-header {\n  padding: 1rem;\n  border: none;\n}\n.modal-header .close {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n.modal-header .close small {\n  margin: 0px 2px;\n  font-size: 13px;\n}\n.modal-header .close small:last-child {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 15px;\n  height: 15px;\n  border: 1px solid;\n  border-radius: 50%;\n}\n.modal-body {\n  padding: 1rem 3rem;\n}\n.modal-body .order-detail {\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 12px;\n  padding: 0.5rem 1rem;\n  margin-bottom: 1rem;\n}\n.modal-body .order-detail .date {\n  display: block;\n  font-size: var(--sub-text);\n  color: var(--primary);\n  margin-bottom: 0.5rem;\n}\n@media (min-width: 375px) and (max-width: 768px) {\n  .modal-body .order-detail .customer {\n    flex-direction: column;\n  }\n  .modal-body .order-detail .customer div {\n    margin-bottom: 0.55rem;\n  }\n}\n.modal-body .order-detail .customer {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  line-height: 15px;\n}\n.modal-body .order-detail .customer div span {\n  font-size: var(--sub-text);\n  color: var(--primary);\n}\n.modal-body table {\n  border-collapse: separate;\n  border-spacing: 0 2px;\n  border: 0;\n}\n.modal-body table thead th {\n  background-color: #265980;\n  color: #fff;\n  font-family: montserratregular;\n  font-size: var(--sub-text);\n  padding: 0.5rem;\n}\n.modal-body table thead th:first-child {\n  width: 17%;\n}\n.modal-body table .fa-search {\n  padding: 4px;\n  float: right;\n  border-radius: 50%;\n  color: #265980;\n  background-color: #fff;\n  font-size: 11px;\n  cursor: pointer;\n}\n.modal-body table tbody td {\n  font-family: montserratregular;\n  font-size: var(--sub-text);\n  vertical-align: middle;\n}\n.modal-body table .invoices {\n  text-align: center;\n}\n.modal-body table .invoices span:first-child {\n  display: block;\n  margin-bottom: 0.25rem;\n  color: var(--link);\n  letter-spacing: 1px;\n}\n@media (min-width: 375px) and (max-width: 768px) {\n  .modal-body table .invoices .export .btn-custom {\n    margin: 0.5rem 0 !important;\n  }\n}\n.modal-body table .invoices .export .btn-custom {\n  width: 70px;\n  padding: 0.175rem 0.55rem;\n  background: #fff;\n  border: 1px solid var(--blue);\n  border-radius: 9px;\n  font-size: var(--sub-text);\n  color: var(--blue);\n  text-transform: uppercase;\n  transition: 0.25s;\n  margin: 0 0.25rem;\n}\n.modal-body table .invoices .export .btn-custom:hover {\n  background: var(--blue);\n  color: #fff;\n}\n.modal-body table .invoices .export .btn-custom:focus {\n  box-shadow: none;\n}\n.modal-body table .status {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n}\n.modal-body table .status .status-point {\n  position: relative;\n  display: flex;\n  align-items: flex-start;\n  flex-grow: 1;\n}\n.modal-body table .status .status-point .title {\n  margin: 0.5rem 0;\n  font-size: 10px;\n  color: #333333;\n}\n.modal-body table .status .status-point .columns {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n}\n.modal-body table .status .status-point .columns .column-1 {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  flex-grow: 1;\n}\n.modal-body table .status .status-point .columns .column-1 .liner {\n  position: absolute;\n  width: 95%;\n  height: 3px;\n  background-color: #E5E5E5;\n  z-index: 0;\n}\n.modal-body table .status .status-point .columns .column-1 em {\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 3px;\n  font-size: 1rem;\n  background-color: #E5E5E5;\n  color: #fff;\n  border-radius: 50%;\n  z-index: 1;\n  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.225);\n}\n.modal-body table .status .status-point .columns .column-1 .statusFt {\n  background-color: #4DBF69;\n}\n.modal-body table .status .status-point .columns .column-1 .statusEnt {\n  background-color: #0074CC;\n}\n.modal-body table .status .status-point .columns .column-1 .statusCrt {\n  background-color: #4DB2FF;\n}\n.modal-body table .status .status-point .columns .column-1 .statusAnl {\n  background-color: #D3ECFF;\n  color: #0063AF;\n}\n.modal-body table .status .status-point .columns .column-1 .statusExc {\n  background-color: #F42424;\n}\n.modal-body table .status .status-point .columns .column-2 {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  flex-grow: 1;\n  line-height: 13px;\n}\n.modal-body table .status .status-point .columns .column-2 div {\n  width: 135px;\n  text-align: center;\n  font-size: 10px;\n}\n.modal-body table .status .status-point .columns .column-2 div span {\n  display: block;\n}\n.modal-footer {\n  justify-content: center !important;\n}\n.modal-footer .btn-close {\n  padding: 0.35rem 2rem;\n  border-radius: 32px;\n  background: var(--primary);\n  font-size: 14px;\n  color: #fff;\n  text-transform: uppercase;\n}\n.modal-footer .btn-close:focus {\n  box-shadow: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9yZXByZXNlbnRhdGl2ZS9vcmRlcnMvaW52b2ljZS1kZXRhaWwvQzpcXEVsZ2luVXAzXFxmcm9udC1lbGdpbi0zLjBcXEZST05ULUVMR0lOVVAtMy4wL3NyY1xcYXBwXFxtYWluXFxyZXByZXNlbnRhdGl2ZVxcb3JkZXJzXFxpbnZvaWNlLWRldGFpbFxcaW52b2ljZS1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vcmVwcmVzZW50YXRpdmUvb3JkZXJzL2ludm9pY2UtZGV0YWlsL2ludm9pY2UtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7SUFDSSxpQkFBQTtFQ0NOO0FBQ0Y7QURFQTtFQUNJLHlCQUFBO0VBQ0EsdUJBQUE7QUNBSjtBREdBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7QUNBSjtBREVJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0FSO0FERVE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQ0FaO0FER1E7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0RaO0FETUE7RUFDSSxrQkFBQTtBQ0hKO0FES0k7RUFDSSxzQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQ0hSO0FES1E7RUFDSSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0FDSFo7QURNUTtFQUNJO0lBQ0ksc0JBQUE7RUNKZDtFRE1jO0lBQ0ksc0JBQUE7RUNKbEI7QUFDRjtBRFFRO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0FDTlo7QURTZ0I7RUFDSSwwQkFBQTtFQUNBLHFCQUFBO0FDUHBCO0FEYUk7RUFDSSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsU0FBQTtBQ1hSO0FEYVE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtBQ1haO0FEY1E7RUFDSSxVQUFBO0FDWlo7QURlUTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ2JaO0FEZ0JRO0VBQ0ksOEJBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0FDZFo7QURpQlE7RUFDSSxrQkFBQTtBQ2ZaO0FEaUJZO0VBQ0ksY0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ2ZoQjtBRGtCWTtFQUVRO0lBQ0ksMkJBQUE7RUNqQnRCO0FBQ0Y7QURzQmdCO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ3BCcEI7QURzQm9CO0VBQ0ksdUJBQUE7RUFDQSxXQUFBO0FDcEJ4QjtBRHVCb0I7RUFDSSxnQkFBQTtBQ3JCeEI7QUQyQlE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSw4QkFBQTtBQ3pCWjtBRDJCWTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQ3pCaEI7QUQyQmdCO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ3pCcEI7QUQ0QmdCO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FDMUJwQjtBRDRCb0I7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtBQzFCeEI7QUQ0QndCO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtBQzFCNUI7QUQ2QndCO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDBDQUFBO0FDM0I1QjtBRDhCd0I7RUFDSSx5QkFBQTtBQzVCNUI7QUQrQndCO0VBQ0kseUJBQUE7QUM3QjVCO0FEZ0N3QjtFQUNJLHlCQUFBO0FDOUI1QjtBRGlDd0I7RUFDSSx5QkFBQTtFQUNBLGNBQUE7QUMvQjVCO0FEa0N3QjtFQUNJLHlCQUFBO0FDaEM1QjtBRG9Db0I7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDbEN4QjtBRG9Dd0I7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDbEM1QjtBRG9DNEI7RUFDSSxjQUFBO0FDbENoQztBRDRDQTtFQUNJLGtDQUFBO0FDekNKO0FEMkNJO0VBQ0kscUJBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQ3pDUjtBRDJDUTtFQUNJLDJCQUFBO0FDekNaIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9yZXByZXNlbnRhdGl2ZS9vcmRlcnMvaW52b2ljZS1kZXRhaWwvaW52b2ljZS1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gICAgLm1vZGFsLXhsIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxMzQwcHg7XG4gICAgfVxufVxuXG4ubW9kYWwtYmFja2Ryb3Age1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDYzYWY7XG4gICAgb3BhY2l0eTogOTAlICFpbXBvcnRhbnQ7XG59XG5cbi5tb2RhbC1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgYm9yZGVyOiBub25lO1xuXG4gICAgLmNsb3NlIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgIHNtYWxsIHtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDJweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHNtYWxsOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5tb2RhbC1ib2R5IHtcbiAgICBwYWRkaW5nOiAxcmVtIDNyZW07XG5cbiAgICAub3JkZXItZGV0YWlsIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuXG4gICAgICAgIC5kYXRlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1zdWItdGV4dCk7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMzc1cHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgLmN1c3RvbWVyIHtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41NXJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuY3VzdG9tZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xuXG4gICAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLXN1Yi10ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRhYmxlIHtcbiAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbiAgICAgICAgYm9yZGVyLXNwYWNpbmc6IDAgMnB4O1xuICAgICAgICBib3JkZXI6IDA7XG5cbiAgICAgICAgdGhlYWQgdGgge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI2NTk4MDtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IG1vbnRzZXJyYXRyZWd1bGFyO1xuICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1zdWItdGV4dCk7XG4gICAgICAgICAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoZWFkIHRoOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgIHdpZHRoOiAxNyU7XG4gICAgICAgIH1cblxuICAgICAgICAuZmEtc2VhcmNoIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIGNvbG9yOiAjMjY1OTgwO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRib2R5IHRkIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBtb250c2VycmF0cmVndWxhcjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tc3ViLXRleHQpO1xuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbnZvaWNlcyB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgICAgIHNwYW46Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWxpbmspO1xuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAzNzVweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICAgICAgLmV4cG9ydCB7XG4gICAgICAgICAgICAgICAgICAgIC5idG4tY3VzdG9tIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMC41cmVtIDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmV4cG9ydCB7XG4gICAgICAgICAgICAgICAgLmJ0bi1jdXN0b20ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzBweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC4xNzVyZW0gMC41NXJlbTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1zdWItdGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4yNXM7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwLjI1cmVtO1xuXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5zdGF0dXMge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgICAgICAgICAuc3RhdHVzLXBvaW50IHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG5cbiAgICAgICAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IC41cmVtIDA7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmNvbHVtbnMge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcblxuICAgICAgICAgICAgICAgICAgICAuY29sdW1uLTEge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLmxpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDk1JTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDNweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTVFNUU1O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGVtIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0U1RTVFNTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIyNSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdGF0dXNGdCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzREQkY2OTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXR1c0VudCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzRDQztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXR1c0NydCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzREQjJGRjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXR1c0FubCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0QzRUNGRjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwNjNBRjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXR1c0V4YyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0MjQyNDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5jb2x1bW4tMiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEzcHg7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEzNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4ubW9kYWwtZm9vdGVyIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuXG4gICAgLmJ0bi1jbG9zZSB7XG4gICAgICAgIHBhZGRpbmc6IDAuMzVyZW0gMnJlbTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzJweDtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cbiAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG59IiwiQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAubW9kYWwteGwge1xuICAgIG1heC13aWR0aDogMTM0MHB4O1xuICB9XG59XG4ubW9kYWwtYmFja2Ryb3Age1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2M2FmO1xuICBvcGFjaXR5OiA5MCUgIWltcG9ydGFudDtcbn1cblxuLm1vZGFsLWhlYWRlciB7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5tb2RhbC1oZWFkZXIgLmNsb3NlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm1vZGFsLWhlYWRlciAuY2xvc2Ugc21hbGwge1xuICBtYXJnaW46IDBweCAycHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5tb2RhbC1oZWFkZXIgLmNsb3NlIHNtYWxsOmxhc3QtY2hpbGQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLm1vZGFsLWJvZHkge1xuICBwYWRkaW5nOiAxcmVtIDNyZW07XG59XG4ubW9kYWwtYm9keSAub3JkZXItZGV0YWlsIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuLm1vZGFsLWJvZHkgLm9yZGVyLWRldGFpbCAuZGF0ZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IHZhcigtLXN1Yi10ZXh0KTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMzc1cHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubW9kYWwtYm9keSAub3JkZXItZGV0YWlsIC5jdXN0b21lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAubW9kYWwtYm9keSAub3JkZXItZGV0YWlsIC5jdXN0b21lciBkaXYge1xuICAgIG1hcmdpbi1ib3R0b206IDAuNTVyZW07XG4gIH1cbn1cbi5tb2RhbC1ib2R5IC5vcmRlci1kZXRhaWwgLmN1c3RvbWVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xufVxuLm1vZGFsLWJvZHkgLm9yZGVyLWRldGFpbCAuY3VzdG9tZXIgZGl2IHNwYW4ge1xuICBmb250LXNpemU6IHZhcigtLXN1Yi10ZXh0KTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xufVxuLm1vZGFsLWJvZHkgdGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xuICBib3JkZXItc3BhY2luZzogMCAycHg7XG4gIGJvcmRlcjogMDtcbn1cbi5tb2RhbC1ib2R5IHRhYmxlIHRoZWFkIHRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2NTk4MDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiBtb250c2VycmF0cmVndWxhcjtcbiAgZm9udC1zaXplOiB2YXIoLS1zdWItdGV4dCk7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbn1cbi5tb2RhbC1ib2R5IHRhYmxlIHRoZWFkIHRoOmZpcnN0LWNoaWxkIHtcbiAgd2lkdGg6IDE3JTtcbn1cbi5tb2RhbC1ib2R5IHRhYmxlIC5mYS1zZWFyY2gge1xuICBwYWRkaW5nOiA0cHg7XG4gIGZsb2F0OiByaWdodDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjb2xvcjogIzI2NTk4MDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubW9kYWwtYm9keSB0YWJsZSB0Ym9keSB0ZCB7XG4gIGZvbnQtZmFtaWx5OiBtb250c2VycmF0cmVndWxhcjtcbiAgZm9udC1zaXplOiB2YXIoLS1zdWItdGV4dCk7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4ubW9kYWwtYm9keSB0YWJsZSAuaW52b2ljZXMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubW9kYWwtYm9keSB0YWJsZSAuaW52b2ljZXMgc3BhbjpmaXJzdC1jaGlsZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xuICBjb2xvcjogdmFyKC0tbGluayk7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMzc1cHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubW9kYWwtYm9keSB0YWJsZSAuaW52b2ljZXMgLmV4cG9ydCAuYnRuLWN1c3RvbSB7XG4gICAgbWFyZ2luOiAwLjVyZW0gMCAhaW1wb3J0YW50O1xuICB9XG59XG4ubW9kYWwtYm9keSB0YWJsZSAuaW52b2ljZXMgLmV4cG9ydCAuYnRuLWN1c3RvbSB7XG4gIHdpZHRoOiA3MHB4O1xuICBwYWRkaW5nOiAwLjE3NXJlbSAwLjU1cmVtO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibHVlKTtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBmb250LXNpemU6IHZhcigtLXN1Yi10ZXh0KTtcbiAgY29sb3I6IHZhcigtLWJsdWUpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0cmFuc2l0aW9uOiAwLjI1cztcbiAgbWFyZ2luOiAwIDAuMjVyZW07XG59XG4ubW9kYWwtYm9keSB0YWJsZSAuaW52b2ljZXMgLmV4cG9ydCAuYnRuLWN1c3RvbTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJsdWUpO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5tb2RhbC1ib2R5IHRhYmxlIC5pbnZvaWNlcyAuZXhwb3J0IC5idG4tY3VzdG9tOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi5tb2RhbC1ib2R5IHRhYmxlIC5zdGF0dXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLm1vZGFsLWJvZHkgdGFibGUgLnN0YXR1cyAuc3RhdHVzLXBvaW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZmxleC1ncm93OiAxO1xufVxuLm1vZGFsLWJvZHkgdGFibGUgLnN0YXR1cyAuc3RhdHVzLXBvaW50IC50aXRsZSB7XG4gIG1hcmdpbjogMC41cmVtIDA7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICMzMzMzMzM7XG59XG4ubW9kYWwtYm9keSB0YWJsZSAuc3RhdHVzIC5zdGF0dXMtcG9pbnQgLmNvbHVtbnMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtZ3JvdzogMTtcbn1cbi5tb2RhbC1ib2R5IHRhYmxlIC5zdGF0dXMgLnN0YXR1cy1wb2ludCAuY29sdW1ucyAuY29sdW1uLTEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBmbGV4LWdyb3c6IDE7XG59XG4ubW9kYWwtYm9keSB0YWJsZSAuc3RhdHVzIC5zdGF0dXMtcG9pbnQgLmNvbHVtbnMgLmNvbHVtbi0xIC5saW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDk1JTtcbiAgaGVpZ2h0OiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFNUU1RTU7XG4gIHotaW5kZXg6IDA7XG59XG4ubW9kYWwtYm9keSB0YWJsZSAuc3RhdHVzIC5zdGF0dXMtcG9pbnQgLmNvbHVtbnMgLmNvbHVtbi0xIGVtIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDNweDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTVFNUU1O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB6LWluZGV4OiAxO1xuICBib3gtc2hhZG93OiAwIDJweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIyNSk7XG59XG4ubW9kYWwtYm9keSB0YWJsZSAuc3RhdHVzIC5zdGF0dXMtcG9pbnQgLmNvbHVtbnMgLmNvbHVtbi0xIC5zdGF0dXNGdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0REJGNjk7XG59XG4ubW9kYWwtYm9keSB0YWJsZSAuc3RhdHVzIC5zdGF0dXMtcG9pbnQgLmNvbHVtbnMgLmNvbHVtbi0xIC5zdGF0dXNFbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3NENDO1xufVxuLm1vZGFsLWJvZHkgdGFibGUgLnN0YXR1cyAuc3RhdHVzLXBvaW50IC5jb2x1bW5zIC5jb2x1bW4tMSAuc3RhdHVzQ3J0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzREQjJGRjtcbn1cbi5tb2RhbC1ib2R5IHRhYmxlIC5zdGF0dXMgLnN0YXR1cy1wb2ludCAuY29sdW1ucyAuY29sdW1uLTEgLnN0YXR1c0FubCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEM0VDRkY7XG4gIGNvbG9yOiAjMDA2M0FGO1xufVxuLm1vZGFsLWJvZHkgdGFibGUgLnN0YXR1cyAuc3RhdHVzLXBvaW50IC5jb2x1bW5zIC5jb2x1bW4tMSAuc3RhdHVzRXhjIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y0MjQyNDtcbn1cbi5tb2RhbC1ib2R5IHRhYmxlIC5zdGF0dXMgLnN0YXR1cy1wb2ludCAuY29sdW1ucyAuY29sdW1uLTIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBmbGV4LWdyb3c6IDE7XG4gIGxpbmUtaGVpZ2h0OiAxM3B4O1xufVxuLm1vZGFsLWJvZHkgdGFibGUgLnN0YXR1cyAuc3RhdHVzLXBvaW50IC5jb2x1bW5zIC5jb2x1bW4tMiBkaXYge1xuICB3aWR0aDogMTM1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuLm1vZGFsLWJvZHkgdGFibGUgLnN0YXR1cyAuc3RhdHVzLXBvaW50IC5jb2x1bW5zIC5jb2x1bW4tMiBkaXYgc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubW9kYWwtZm9vdGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbn1cbi5tb2RhbC1mb290ZXIgLmJ0bi1jbG9zZSB7XG4gIHBhZGRpbmc6IDAuMzVyZW0gMnJlbTtcbiAgYm9yZGVyLXJhZGl1czogMzJweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4ubW9kYWwtZm9vdGVyIC5idG4tY2xvc2U6Zm9jdXMge1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/main/representative/orders/invoice-detail/invoice-detail.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/main/representative/orders/invoice-detail/invoice-detail.component.ts ***!
  \***************************************************************************************/
/*! exports provided: InvoiceDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceDetailComponent", function() { return InvoiceDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");



let InvoiceDetailComponent = class InvoiceDetailComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
    }
    ngOnInit() {
        console.log(this.invoiceDetail);
    }
};
InvoiceDetailComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], InvoiceDetailComponent.prototype, "invoiceDetail", void 0);
InvoiceDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./invoice-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/representative/orders/invoice-detail/invoice-detail.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./invoice-detail.component.scss */ "./src/app/main/representative/orders/invoice-detail/invoice-detail.component.scss")).default]
    })
], InvoiceDetailComponent);



/***/ }),

/***/ "./src/app/main/representative/orders/new-filter/new-filter.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/main/representative/orders/new-filter/new-filter.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".modal-backdrop {\n  background-color: #0063af;\n  opacity: 90% !important;\n}\n\n.modal-header {\n  justify-content: flex-end !important;\n  border: none;\n}\n\n.modal-header .close {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n\n.modal-header .close small {\n  margin: 0px 2px;\n  font-size: 13px;\n}\n\n.modal-header .close small:last-child {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 15px;\n  height: 15px;\n  border: 1px solid;\n  border-radius: 50%;\n}\n\n.modal-body {\n  padding: 0 1rem !important;\n}\n\n.modal-body .title {\n  display: block;\n  margin-bottom: 0.5rem;\n}\n\n.modal-body .sub-title {\n  display: block;\n  font-size: 11px;\n  color: var(--title);\n}\n\n.modal-body label {\n  font-size: 11px;\n  color: #9B9A9A;\n}\n\n.modal-body .filter-name {\n  margin-top: 1rem;\n}\n\n.modal-body .filter-name .save-filter {\n  padding: 0.35rem 2rem;\n  border: 1px solid;\n  border-radius: 32px;\n  font-size: var(--sub-text);\n  color: var(--link-active);\n  text-transform: uppercase;\n}\n\n.modal-body .filter-name .save-filter:focus {\n  box-shadow: none !important;\n}\n\n.modal-body .nav-tabs .nav-link {\n  font-size: var(--sub-text);\n  background-color: #F5F5F5;\n  color: #333333 !important;\n}\n\n.modal-body .nav-tabs .nav-link.active {\n  color: #fff !important;\n  background-color: #000000;\n}\n\n.modal-body .filter-label {\n  margin: 1rem 0 0.5rem 0;\n  font-size: var(--sub-text);\n  color: #333333;\n}\n\n.modal-body .custom-control-label {\n  color: #333333;\n  font-size: var(--default-text);\n  font-family: montserratregular;\n}\n\n.modal-body .custom-control-label::before {\n  border-color: #80bdff;\n}\n\n.modal-body .btn-add {\n  padding: 0px;\n  color: var(--primary);\n  font-size: 20px;\n}\n\n.modal-body .btn-add:focus {\n  box-shadow: none;\n}\n\n.modal-body .add-param {\n  margin-top: 1rem;\n}\n\n.modal-body .add-param div {\n  margin-bottom: 0.5rem;\n}\n\n.modal-body .add-colum {\n  position: relative;\n}\n\n.modal-body .add-colum div {\n  display: flex;\n  align-items: center;\n  position: absolute;\n  top: 34px;\n  left: 12px;\n}\n\n.modal-body .add-colum div:hover {\n  cursor: pointer;\n}\n\n.modal-body .add-colum div .btn-add-colum {\n  padding: 0px;\n  margin-right: 5px;\n  color: var(--primary);\n  font-size: 20px;\n  line-height: 1;\n}\n\n.modal-body .add-colum div span {\n  font-size: var(--sub-text);\n}\n\n.modal-body .remove-param {\n  display: flex;\n  align-items: center;\n  margin-left: 5px;\n  font-size: 10px;\n  color: #9B9A9A;\n  opacity: 0.6;\n}\n\n.modal-body .remove-param:hover {\n  cursor: pointer;\n  opacity: 1;\n  color: #dc3545;\n}\n\n.modal-body .remove-param .fa-times {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin-right: 3px;\n}\n\n.modal-body .remove-param span {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  line-height: 1;\n}\n\n.modal-body .text-b {\n  display: block;\n  font-size: 11px;\n}\n\n.modal-footer {\n  justify-content: center !important;\n}\n\n.modal-footer .btn-close {\n  padding: 0.35rem 2rem;\n  border-radius: 32px;\n  background: var(--primary);\n  font-size: var(--sub-text);\n  color: #fff;\n  text-transform: uppercase;\n}\n\n.modal-footer .btn-close:focus {\n  box-shadow: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9yZXByZXNlbnRhdGl2ZS9vcmRlcnMvbmV3LWZpbHRlci9DOlxcRWxnaW5VcDNcXGZyb250LWVsZ2luLTMuMFxcRlJPTlQtRUxHSU5VUC0zLjAvc3JjXFxhcHBcXG1haW5cXHJlcHJlc2VudGF0aXZlXFxvcmRlcnNcXG5ldy1maWx0ZXJcXG5ldy1maWx0ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vcmVwcmVzZW50YXRpdmUvb3JkZXJzL25ldy1maWx0ZXIvbmV3LWZpbHRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsdUJBQUE7QUNDSjs7QURFQTtFQUNJLG9DQUFBO0VBQ0EsWUFBQTtBQ0NKOztBRENJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0NSOztBRENRO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUNDWjs7QURFUTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQVo7O0FES0E7RUFDSSwwQkFBQTtBQ0ZKOztBRElJO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0FDRlI7O0FES0k7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDSFI7O0FETUk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ0pSOztBRE9JO0VBQ0ksZ0JBQUE7QUNMUjs7QURPUTtFQUNJLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtBQ0xaOztBRE9ZO0VBQ0ksMkJBQUE7QUNMaEI7O0FEVUk7RUFDSSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7QUNSUjs7QURXSTtFQUNJLHNCQUFBO0VBQ0EseUJBQUE7QUNUUjs7QURZSTtFQUNJLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0FDVlI7O0FEYUk7RUFDSSxjQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtBQ1hSOztBRGFRO0VBQ0kscUJBQUE7QUNYWjs7QURlSTtFQUNJLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUNiUjs7QURlUTtFQUNJLGdCQUFBO0FDYlo7O0FEaUJJO0VBQ0ksZ0JBQUE7QUNmUjs7QURpQlE7RUFDSSxxQkFBQTtBQ2ZaOztBRG1CSTtFQUNJLGtCQUFBO0FDakJSOztBRG1CUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNqQlo7O0FEbUJZO0VBQ0ksZUFBQTtBQ2pCaEI7O0FEb0JZO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ2xCaEI7O0FEcUJZO0VBQ0ksMEJBQUE7QUNuQmhCOztBRHdCSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDdEJSOztBRHdCUTtFQUNJLGVBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQ3RCWjs7QUR5QlE7RUFDSSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxpQkFBQTtBQ3ZCWjs7QUQwQlE7RUFDSSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxjQUFBO0FDeEJaOztBRDRCSTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FDMUJSOztBRCtCQTtFQUNJLGtDQUFBO0FDNUJKOztBRDhCSTtFQUNJLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FDNUJSOztBRDhCUTtFQUNJLDJCQUFBO0FDNUJaIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9yZXByZXNlbnRhdGl2ZS9vcmRlcnMvbmV3LWZpbHRlci9uZXctZmlsdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsLWJhY2tkcm9wIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2M2FmO1xuICAgIG9wYWNpdHk6IDkwJSAhaW1wb3J0YW50O1xufVxuXG4ubW9kYWwtaGVhZGVyIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuXG4gICAgLmNsb3NlIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgIHNtYWxsIHtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDJweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHNtYWxsOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5tb2RhbC1ib2R5IHtcbiAgICBwYWRkaW5nOiAwIDFyZW0gIWltcG9ydGFudDtcblxuICAgIC50aXRsZSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcbiAgICB9XG5cbiAgICAuc3ViLXRpdGxlIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgY29sb3I6IHZhcigtLXRpdGxlKTtcbiAgICB9XG5cbiAgICBsYWJlbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgY29sb3I6ICM5QjlBOUE7XG4gICAgfVxuXG4gICAgLmZpbHRlci1uYW1lIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcblxuICAgICAgICAuc2F2ZS1maWx0ZXIge1xuICAgICAgICAgICAgcGFkZGluZzogMC4zNXJlbSAycmVtO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMnB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1zdWItdGV4dCk7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tbGluay1hY3RpdmUpO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblxuICAgICAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLm5hdi10YWJzIC5uYXYtbGluayB7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tc3ViLXRleHQpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xuICAgICAgICBjb2xvcjogIzMzMzMzMyAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5uYXYtdGFicyAubmF2LWxpbmsuYWN0aXZlIHtcbiAgICAgICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgICB9XG5cbiAgICAuZmlsdGVyLWxhYmVsIHtcbiAgICAgICAgbWFyZ2luOiAxcmVtIDAgLjVyZW0gMDtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1zdWItdGV4dCk7XG4gICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgIH1cblxuICAgIC5jdXN0b20tY29udHJvbC1sYWJlbCB7XG4gICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgICBmb250LXNpemU6IHZhcigtLWRlZmF1bHQtdGV4dCk7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBtb250c2VycmF0cmVndWxhcjtcblxuICAgICAgICAmOjpiZWZvcmUge1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjODBiZGZmO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmJ0bi1hZGQge1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuXG4gICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5hZGQtcGFyYW0ge1xuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuXG4gICAgICAgIGRpdiB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5hZGQtY29sdW0ge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgZGl2IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAzNHB4O1xuICAgICAgICAgICAgbGVmdDogMTJweDtcblxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYnRuLWFkZC1jb2x1bSB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tc3ViLXRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnJlbW92ZS1wYXJhbSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgY29sb3I6ICM5QjlBOUE7XG4gICAgICAgIG9wYWNpdHk6IDAuNjtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICBjb2xvcjogI2RjMzU0NTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mYS10aW1lcyB7XG4gICAgICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzcHg7XG4gICAgICAgIH1cblxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC50ZXh0LWIge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgIH1cbn1cblxuXG4ubW9kYWwtZm9vdGVyIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuXG4gICAgLmJ0bi1jbG9zZSB7XG4gICAgICAgIHBhZGRpbmc6IDAuMzVyZW0gMnJlbTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzJweDtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tc3ViLXRleHQpO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblxuICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIubW9kYWwtYmFja2Ryb3Age1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2M2FmO1xuICBvcGFjaXR5OiA5MCUgIWltcG9ydGFudDtcbn1cblxuLm1vZGFsLWhlYWRlciB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lO1xufVxuLm1vZGFsLWhlYWRlciAuY2xvc2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubW9kYWwtaGVhZGVyIC5jbG9zZSBzbWFsbCB7XG4gIG1hcmdpbjogMHB4IDJweDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLm1vZGFsLWhlYWRlciAuY2xvc2Ugc21hbGw6bGFzdC1jaGlsZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4ubW9kYWwtYm9keSB7XG4gIHBhZGRpbmc6IDAgMXJlbSAhaW1wb3J0YW50O1xufVxuLm1vZGFsLWJvZHkgLnRpdGxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cbi5tb2RhbC1ib2R5IC5zdWItdGl0bGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogdmFyKC0tdGl0bGUpO1xufVxuLm1vZGFsLWJvZHkgbGFiZWwge1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiAjOUI5QTlBO1xufVxuLm1vZGFsLWJvZHkgLmZpbHRlci1uYW1lIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cbi5tb2RhbC1ib2R5IC5maWx0ZXItbmFtZSAuc2F2ZS1maWx0ZXIge1xuICBwYWRkaW5nOiAwLjM1cmVtIDJyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiAzMnB4O1xuICBmb250LXNpemU6IHZhcigtLXN1Yi10ZXh0KTtcbiAgY29sb3I6IHZhcigtLWxpbmstYWN0aXZlKTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5tb2RhbC1ib2R5IC5maWx0ZXItbmFtZSAuc2F2ZS1maWx0ZXI6Zm9jdXMge1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG4ubW9kYWwtYm9keSAubmF2LXRhYnMgLm5hdi1saW5rIHtcbiAgZm9udC1zaXplOiB2YXIoLS1zdWItdGV4dCk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XG4gIGNvbG9yOiAjMzMzMzMzICFpbXBvcnRhbnQ7XG59XG4ubW9kYWwtYm9keSAubmF2LXRhYnMgLm5hdi1saW5rLmFjdGl2ZSB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG59XG4ubW9kYWwtYm9keSAuZmlsdGVyLWxhYmVsIHtcbiAgbWFyZ2luOiAxcmVtIDAgMC41cmVtIDA7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc3ViLXRleHQpO1xuICBjb2xvcjogIzMzMzMzMztcbn1cbi5tb2RhbC1ib2R5IC5jdXN0b20tY29udHJvbC1sYWJlbCB7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICBmb250LXNpemU6IHZhcigtLWRlZmF1bHQtdGV4dCk7XG4gIGZvbnQtZmFtaWx5OiBtb250c2VycmF0cmVndWxhcjtcbn1cbi5tb2RhbC1ib2R5IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgYm9yZGVyLWNvbG9yOiAjODBiZGZmO1xufVxuLm1vZGFsLWJvZHkgLmJ0bi1hZGQge1xuICBwYWRkaW5nOiAwcHg7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLm1vZGFsLWJvZHkgLmJ0bi1hZGQ6Zm9jdXMge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLm1vZGFsLWJvZHkgLmFkZC1wYXJhbSB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG4ubW9kYWwtYm9keSAuYWRkLXBhcmFtIGRpdiB7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cbi5tb2RhbC1ib2R5IC5hZGQtY29sdW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubW9kYWwtYm9keSAuYWRkLWNvbHVtIGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzNHB4O1xuICBsZWZ0OiAxMnB4O1xufVxuLm1vZGFsLWJvZHkgLmFkZC1jb2x1bSBkaXY6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubW9kYWwtYm9keSAuYWRkLWNvbHVtIGRpdiAuYnRuLWFkZC1jb2x1bSB7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMTtcbn1cbi5tb2RhbC1ib2R5IC5hZGQtY29sdW0gZGl2IHNwYW4ge1xuICBmb250LXNpemU6IHZhcigtLXN1Yi10ZXh0KTtcbn1cbi5tb2RhbC1ib2R5IC5yZW1vdmUtcGFyYW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiAjOUI5QTlBO1xuICBvcGFjaXR5OiAwLjY7XG59XG4ubW9kYWwtYm9keSAucmVtb3ZlLXBhcmFtOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvcGFjaXR5OiAxO1xuICBjb2xvcjogI2RjMzU0NTtcbn1cbi5tb2RhbC1ib2R5IC5yZW1vdmUtcGFyYW0gLmZhLXRpbWVzIHtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XG59XG4ubW9kYWwtYm9keSAucmVtb3ZlLXBhcmFtIHNwYW4ge1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBsaW5lLWhlaWdodDogMTtcbn1cbi5tb2RhbC1ib2R5IC50ZXh0LWIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuXG4ubW9kYWwtZm9vdGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbn1cbi5tb2RhbC1mb290ZXIgLmJ0bi1jbG9zZSB7XG4gIHBhZGRpbmc6IDAuMzVyZW0gMnJlbTtcbiAgYm9yZGVyLXJhZGl1czogMzJweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc3ViLXRleHQpO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5tb2RhbC1mb290ZXIgLmJ0bi1jbG9zZTpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/main/representative/orders/new-filter/new-filter.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/main/representative/orders/new-filter/new-filter.component.ts ***!
  \*******************************************************************************/
/*! exports provided: NewFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewFilterComponent", function() { return NewFilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");



let NewFilterComponent = class NewFilterComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
    }
    ngOnInit() { }
};
NewFilterComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }
];
NewFilterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'elgin-filter-add',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./new-filter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/representative/orders/new-filter/new-filter.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./new-filter.component.scss */ "./src/app/main/representative/orders/new-filter/new-filter.component.scss")).default]
    })
], NewFilterComponent);



/***/ }),

/***/ "./src/app/main/representative/orders/new-order/nacional-selling/add-order/add-order.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/main/representative/orders/new-order/nacional-selling/add-order/add-order.component.scss ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".client {\n  padding: 0.75rem 1rem;\n  background-color: var(--blue);\n  border-radius: 10px;\n  z-index: 1;\n}\n.client span {\n  display: block;\n  color: #fff;\n  font-size: 10px;\n}\n.client span:first-child {\n  font-size: var(--sub-text);\n}\n.client span:nth-child(2) {\n  font-family: CoreRhino65Bold;\n}\n.line {\n  height: 1px;\n  width: 100%;\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.125);\n  z-index: 0;\n}\n.representative {\n  padding: 0.5rem;\n  background-color: var(--primary);\n  border-radius: 10px;\n  line-height: 15px;\n  z-index: 0;\n  transition: 0.08s;\n}\n.representative span {\n  color: #fff !important;\n}\n.representative span:first-child {\n  display: block;\n  color: var(--title);\n  font-size: var(--sub-text);\n}\n.representative span:nth-child(2) {\n  font-family: CoreRhino65Bold;\n  font-size: 10px;\n}\n.representative span:nth-child(3) {\n  font-size: 10px;\n}\n.representative span:nth-child(3):before {\n  display: inline-block;\n  padding: 0 0.5rem;\n  color: #fff;\n  content: \"|\";\n}\n@media screen and (max-width: 425px) {\n  .product-types {\n    justify-content: space-between !important;\n  }\n  .product-types span {\n    width: 45%;\n  }\n  .product-types span:not(:last-child):after {\n    display: none !important;\n  }\n}\n.product-types {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  padding: 0.5rem 0.75rem;\n  background-color: #F9F9F9;\n}\n.product-types span {\n  margin: 0.5rem 0;\n  font-size: 0.85rem;\n  text-transform: uppercase;\n  color: #333333;\n}\n.product-types span:hover, .product-types span.active {\n  cursor: pointer;\n  color: var(--primary);\n}\n.product-types span:not(:last-child):after {\n  display: inline-block;\n  padding: 0 1.5rem;\n  color: #474747;\n  content: \"|\";\n}\n@media screen and (max-width: 425px) {\n  .elgin-products-container {\n    justify-content: space-between !important;\n  }\n  .elgin-products-container .elgin-products {\n    width: 44% !important;\n  }\n}\n.elgin-products-container {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  padding: 1rem 0;\n}\n.elgin-products-container .elgin-products {\n  width: 10%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 0 0.5rem;\n  transition: 0.2s;\n}\n.elgin-products-container .elgin-products:hover, .elgin-products-container .elgin-products.active {\n  cursor: pointer;\n  background-color: #F9F9F9;\n  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.125);\n}\n.elgin-products-container .elgin-products .item-thumbnail {\n  width: 80%;\n  height: auto;\n}\n.elgin-products-container .elgin-products span {\n  font-size: 60%;\n  color: #a0a0a0;\n  text-transform: uppercase;\n}\n@media screen and (max-width: 425px) {\n  .products .segments {\n    font-size: 90%;\n  }\n}\n.products {\n  padding: 1rem 0;\n}\n.products .segments span:first-child {\n  text-transform: capitalize;\n}\n.products .segments span:first-child:after {\n  display: inline-block;\n  padding: 0 0.5rem;\n  color: #474747;\n  content: \"/\";\n}\n.products .segments span:last-child {\n  text-transform: uppercase;\n  font-size: var(--default-text);\n  color: var(--link);\n}\n.products .nav-controlers .fa-bars,\n.products .nav-controlers .fa-th {\n  color: #9B9A9A;\n}\n.products .nav-controlers .fa-bars:hover,\n.products .nav-controlers .fa-th:hover {\n  cursor: pointer;\n}\n.products .nav-controlers .fa-bars.active,\n.products .nav-controlers .fa-th.active {\n  color: var(--link-active);\n}\n.products .nav-controlers .custom-select {\n  border-radius: 10px;\n  font-size: var(--sub-text);\n}\n@media screen and (max-width: 425px) {\n  .products .products-table .products-qtd {\n    order: 1;\n  }\n  .products .products-table .cart-container {\n    width: 100%;\n    justify-content: center !important;\n  }\n  .products .products-table .cart-container .badge-custom {\n    width: 100%;\n    margin: 1rem 0 !important;\n    padding: 0.75rem !important;\n  }\n}\n.products .products-table .products-qtd {\n  font-size: var(--sub-text);\n  color: #333333;\n}\n.products .products-table .cart-container {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  padding: 1rem;\n  background-color: #EEF8FF;\n  border-radius: 10px;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.11), 0 2px 2px rgba(0, 0, 0, 0.11);\n}\n.products .products-table .cart-container .fa-shopping-cart {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--primary);\n  font-size: 18px;\n  color: #ffffff;\n  width: 35px;\n  height: 36px;\n  border-radius: 50%;\n}\n.products .products-table .cart-container .cart-itens-qtd {\n  padding: 0 1rem;\n  font-size: var(--default-text);\n  color: var(--primary);\n}\n.products .products-table .cart-container .badge-custom {\n  background-color: var(--primary);\n  font-size: 11px;\n  color: #ffffff;\n  margin-left: 1rem;\n  padding: 0.25rem 0.5rem;\n  cursor: pointer;\n}\n.products .products-table .cart-container .hidden-cart {\n  display: none;\n  width: 320px;\n  position: fixed;\n  background: #fff;\n  padding: 0.5rem;\n  box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.125);\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 8px;\n  z-index: 1000;\n}\n.products .products-table .cart-container .hidden-cart.show-cart {\n  display: block !important;\n  bottom: 0px;\n  right: 0px;\n  cursor: move;\n}\n.products .products-table .cart-container .hidden-cart .head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.products .products-table .cart-container .hidden-cart .head .close {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n.products .products-table .cart-container .hidden-cart .head .close small {\n  margin: 0px 2px;\n  font-size: 13px;\n}\n.products .products-table .cart-container .hidden-cart .head .close small:last-child {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 15px;\n  height: 15px;\n  border: 1px solid;\n  border-radius: 50%;\n}\n.products .products-table .cart-container .hidden-cart .body {\n  max-height: 320px;\n  overflow-y: auto;\n  margin-top: 1rem;\n}\n.products .products-table .cart-container .hidden-cart .body .list-group-item {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.25rem;\n  margin-bottom: 0.25rem;\n  background-color: #F8F8F8;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 3px;\n}\n.products .products-table .cart-container .hidden-cart .body .list-group-item .thumb {\n  display: flex;\n}\n.products .products-table .cart-container .hidden-cart .body .list-group-item .thumb img {\n  width: 50px;\n}\n.products .products-table .cart-container .hidden-cart .body .list-group-item .thumb .desc {\n  padding: 0 0.75rem;\n}\n.products .products-table .cart-container .hidden-cart .body .list-group-item .thumb .desc span {\n  display: block;\n  word-break: break-all;\n}\n.products .products-table .cart-container .hidden-cart .body .list-group-item .thumb .desc span:first-child {\n  font-size: 10px;\n  color: #333333;\n}\n.products .products-table .cart-container .hidden-cart .body .list-group-item .thumb .desc span:last-child {\n  font-size: 11px;\n  color: var(--primary);\n}\n.products .products-table .cart-container .hidden-cart .body .list-group-item .qtd {\n  padding: 0.5rem 0.75rem;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 10px;\n  background-color: #fff;\n  font-size: var(--sub-text);\n  color: var(--primary);\n}\n.products .products-table .cart-container .hidden-cart .foot {\n  padding: 0.5rem;\n  text-align: center;\n}\n.products .products-table .cart-container .hidden-cart .foot button {\n  width: 80%;\n  background-color: var(--primary);\n  color: #fff;\n  border-radius: 32px;\n}\n.products table {\n  border-collapse: separate;\n  border-spacing: 0 3px;\n  border: 0;\n}\n.products table thead th {\n  background-color: #265980;\n  color: #fff;\n  font-family: montserratregular;\n  font-size: var(--sub-text);\n  padding: 0.5rem;\n}\n.products table thead.monoblock th:nth-child(1) {\n  width: 80px;\n}\n.products table thead.monoblock th:nth-child(5) {\n  width: 136px;\n}\n.products table thead.monoblock th:last-child {\n  width: 120px;\n}\n.products table .fa-search {\n  padding: 4px;\n  float: right;\n  border-radius: 50%;\n  color: #265980;\n  background-color: #fff;\n  font-size: 11px;\n  cursor: pointer;\n}\n.products table tbody td:not(:first-child) {\n  min-width: 200px;\n}\n.products table tbody tbody tr:hover {\n  background-color: #f8f8f8;\n}\n.products table tbody td {\n  font-family: montserratregular;\n  font-size: var(--sub-text);\n  vertical-align: middle;\n}\n.products table tbody td:nth-child(3) {\n  color: var(--link);\n}\n.products table tbody td .img-thumbnail {\n  width: 60px;\n}\n.products table tbody td .amount {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n}\n.products table tbody td .amount .btn-decrease,\n.products table tbody td .amount .btn-increase {\n  color: var(--primary);\n}\n.products table tbody td .amount .panel {\n  width: 40px;\n  height: 40px;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 8px;\n  color: var(--primary);\n  text-align: center;\n}\n.products table tbody td .amount input[type=number]::-webkit-inner-spin-button,\n.products table tbody td .amount input[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.products table tbody td .amount a {\n  width: 100%;\n  text-align: center;\n}\n.products table tbody td .success {\n  color: #71CC87;\n}\n.products table tbody td .warning {\n  color: #FDB96B;\n}\n.products table tbody a {\n  font-family: CoreRhino65bold !important;\n  font-size: 11px;\n  color: #0986E4 !important;\n}\n.products .card-multiblock {\n  background-color: #F8F8F8;\n}\n.products .card-multiblock .body {\n  padding: 0.25rem;\n}\n.products .card-multiblock .body .thumbnail {\n  background-color: #ffffff;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  text-align: center;\n  cursor: pointer;\n}\n.products .card-multiblock .body .thumbnail img {\n  width: 80%;\n  height: auto;\n}\n.products .card-multiblock .body .thumbnail .term {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.5rem;\n  color: #ffffff;\n}\n.products .card-multiblock .body .thumbnail .term em {\n  margin-right: 0.5rem;\n  font-size: 1.2em;\n}\n.products .card-multiblock .body .thumbnail .term span {\n  font-size: var(--sub-text);\n}\n.products .card-multiblock .body .thumbnail .success {\n  background-color: #71CC87;\n}\n.products .card-multiblock .body .thumbnail .warning {\n  background-color: #FDB96B;\n}\n.products .card-multiblock .body .description {\n  padding: 0.25em;\n}\n.products .card-multiblock .body .description .cod span:first-child {\n  font-size: 10px;\n  color: #9B9A9A;\n  margin-right: 0.25rem;\n}\n.products .card-multiblock .body .description .cod span:last-child {\n  font-size: 0.7em;\n}\n.products .card-multiblock .body .description .item-description {\n  font-size: 0.65em;\n  color: var(--primary);\n}\n.products .card-multiblock .body .description .stock {\n  margin: 0.5rem 0rem;\n  line-height: 11px;\n}\n.products .card-multiblock .body .description .stock span:first-child {\n  display: block;\n  font-size: 10px;\n  color: #9B9A9A;\n}\n.products .card-multiblock .body .description .stock span:last-child {\n  font-size: 0.7em;\n}\n.products .card-multiblock .footer {\n  padding: 0.5rem;\n  border-top: 1px solid rgba(0, 0, 0, 0.125);\n}\n.products .card-multiblock .footer .amount {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n}\n.products .card-multiblock .footer .amount .btn-decrease,\n.products .card-multiblock .footer .amount .btn-increase {\n  color: var(--primary);\n}\n.products .card-multiblock .footer .amount .panel {\n  width: 40px;\n  height: 40px;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 8px;\n  color: var(--primary);\n  font-size: var(--sub-text);\n  text-align: center;\n}\n.products .card-multiblock .footer .amount input[type=number]::-webkit-inner-spin-button,\n.products .card-multiblock .footer .amount input[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.products .card-multiblock .footer .amount a {\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 11px;\n  color: #0986E4 !important;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9yZXByZXNlbnRhdGl2ZS9vcmRlcnMvbmV3LW9yZGVyL25hY2lvbmFsLXNlbGxpbmcvYWRkLW9yZGVyL0M6XFxFbGdpblVwM1xcZnJvbnQtZWxnaW4tMy4wXFxGUk9OVC1FTEdJTlVQLTMuMC9zcmNcXGFwcFxcbWFpblxccmVwcmVzZW50YXRpdmVcXG9yZGVyc1xcbmV3LW9yZGVyXFxuYWNpb25hbC1zZWxsaW5nXFxhZGQtb3JkZXJcXGFkZC1vcmRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9yZXByZXNlbnRhdGl2ZS9vcmRlcnMvbmV3LW9yZGVyL25hY2lvbmFsLXNlbGxpbmcvYWRkLW9yZGVyL2FkZC1vcmRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUNDSjtBRENJO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDQ1I7QURFSTtFQUNJLDBCQUFBO0FDQVI7QURHSTtFQUNJLDRCQUFBO0FDRFI7QURLQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQ0FBQTtFQUNBLFVBQUE7QUNGSjtBREtBO0VBQ0ksZUFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQ0ZKO0FESUk7RUFDSSxzQkFBQTtBQ0ZSO0FES0k7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtBQ0hSO0FETUk7RUFDSSw0QkFBQTtFQUNBLGVBQUE7QUNKUjtBRE9JO0VBQ0ksZUFBQTtBQ0xSO0FET1E7RUFDSSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNMWjtBRFVBO0VBQ0k7SUFDSSx5Q0FBQTtFQ1BOO0VEU007SUFDSSxVQUFBO0VDUFY7RURXVTtJQUNJLHdCQUFBO0VDVGQ7QUFDRjtBRGNBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtBQ1pKO0FEY0k7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FDWlI7QURjUTtFQUVJLGVBQUE7RUFDQSxxQkFBQTtBQ2JaO0FEa0JRO0VBQ0kscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDaEJaO0FEcUJBO0VBQ0k7SUFDSSx5Q0FBQTtFQ2xCTjtFRG9CTTtJQUNJLHFCQUFBO0VDbEJWO0FBQ0Y7QUR1QkE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQ3JCSjtBRHVCSTtFQUNJLFVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ3JCUjtBRHVCUTtFQUVJLGVBQUE7RUFDQSx5QkFBQTtFQUNBLDRDQUFBO0FDdEJaO0FEeUJRO0VBQ0ksVUFBQTtFQUNBLFlBQUE7QUN2Qlo7QUQwQlE7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FDeEJaO0FENkJBO0VBRVE7SUFDSSxjQUFBO0VDM0JWO0FBQ0Y7QUQrQkE7RUFDSSxlQUFBO0FDN0JKO0FEZ0NRO0VBQ0ksMEJBQUE7QUM5Qlo7QURnQ1k7RUFDSSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUM5QmhCO0FEa0NRO0VBQ0kseUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FDaENaO0FEc0NROztFQUVJLGNBQUE7QUNwQ1o7QURzQ1k7O0VBQ0ksZUFBQTtBQ25DaEI7QURzQ1k7O0VBQ0kseUJBQUE7QUNuQ2hCO0FEdUNRO0VBQ0ksbUJBQUE7RUFDQSwwQkFBQTtBQ3JDWjtBRHlDSTtFQUVRO0lBQ0ksUUFBQTtFQ3hDZDtFRDJDVTtJQUNJLFdBQUE7SUFDQSxrQ0FBQTtFQ3pDZDtFRDJDYztJQUNJLFdBQUE7SUFDQSx5QkFBQTtJQUNBLDJCQUFBO0VDekNsQjtBQUNGO0FEK0NRO0VBQ0ksMEJBQUE7RUFDQSxjQUFBO0FDN0NaO0FEZ0RRO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3RUFBQTtBQzlDWjtBRGdEWTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUM5Q2hCO0FEaURZO0VBQ0ksZUFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7QUMvQ2hCO0FEa0RZO0VBQ0ksZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FDaERoQjtBRG1EWTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBRUEsZUFBQTtFQUNBLDRDQUFBO0VBQ0Esc0NBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNsRGhCO0FEb0RnQjtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDbERwQjtBRHFEZ0I7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQ25EcEI7QURxRG9CO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ25EeEI7QURxRHdCO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUNuRDVCO0FEc0R3QjtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDcEQ1QjtBRHlEZ0I7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUN2RHBCO0FEeURvQjtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0NBQUE7RUFDQSxrQkFBQTtBQ3ZEeEI7QUR5RHdCO0VBQ0ksYUFBQTtBQ3ZENUI7QUR5RDRCO0VBQ0ksV0FBQTtBQ3ZEaEM7QUQwRDRCO0VBQ0ksa0JBQUE7QUN4RGhDO0FEMERnQztFQUNJLGNBQUE7RUFDQSxxQkFBQTtBQ3hEcEM7QUQyRGdDO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUN6RHBDO0FENERnQztFQUNJLGVBQUE7RUFDQSxxQkFBQTtBQzFEcEM7QURnRXdCO0VBQ0ksdUJBQUE7RUFDQSxzQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0FDOUQ1QjtBRG1FZ0I7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUNqRXBCO0FEbUVvQjtFQUNJLFVBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ2pFeEI7QUR3RUk7RUFDSSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsU0FBQTtBQ3RFUjtBRHdFUTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FDdEVaO0FEMEVZO0VBQ0ksV0FBQTtBQ3hFaEI7QUQyRVk7RUFDSSxZQUFBO0FDekVoQjtBRDRFWTtFQUNJLFlBQUE7QUMxRWhCO0FEOEVRO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDNUVaO0FEaUZZO0VBQ0ksZ0JBQUE7QUMvRWhCO0FEa0ZZO0VBQ0kseUJBQUE7QUNoRmhCO0FEbUZZO0VBQ0ksOEJBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0FDakZoQjtBRG1GZ0I7RUFDSSxrQkFBQTtBQ2pGcEI7QURvRmdCO0VBQ0ksV0FBQTtBQ2xGcEI7QURxRmdCO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDbkZwQjtBRHFGb0I7O0VBRUkscUJBQUE7QUNuRnhCO0FEc0ZvQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0NBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUNwRnhCO0FEdUZvQjs7RUFFSSx3QkFBQTtFQUNBLFNBQUE7QUNyRnhCO0FEd0ZvQjtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQ3RGeEI7QUQwRmdCO0VBQ0ksY0FBQTtBQ3hGcEI7QUQyRmdCO0VBQ0ksY0FBQTtBQ3pGcEI7QUQ2Rlk7RUFDSSx1Q0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQzNGaEI7QURnR0k7RUFDSSx5QkFBQTtBQzlGUjtBRGdHUTtFQUNJLGdCQUFBO0FDOUZaO0FEZ0dZO0VBQ0kseUJBQUE7RUFDQSxzQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQzlGaEI7QURnR2dCO0VBQ0ksVUFBQTtFQUNBLFlBQUE7QUM5RnBCO0FEaUdnQjtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUMvRnBCO0FEaUdvQjtFQUNJLG9CQUFBO0VBQ0EsZ0JBQUE7QUMvRnhCO0FEa0dvQjtFQUNJLDBCQUFBO0FDaEd4QjtBRG9HZ0I7RUFDSSx5QkFBQTtBQ2xHcEI7QURxR2dCO0VBQ0kseUJBQUE7QUNuR3BCO0FEdUdZO0VBQ0ksZUFBQTtBQ3JHaEI7QUR3R29CO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQ3RHeEI7QUR5R29CO0VBQ0ksZ0JBQUE7QUN2R3hCO0FEMkdnQjtFQUNJLGlCQUFBO0VBQ0EscUJBQUE7QUN6R3BCO0FENEdnQjtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7QUMxR3BCO0FENEdvQjtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQzFHeEI7QUQ2R29CO0VBQ0ksZ0JBQUE7QUMzR3hCO0FEaUhRO0VBQ0ksZUFBQTtFQUNBLDBDQUFBO0FDL0daO0FEaUhZO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDL0doQjtBRGlIZ0I7O0VBRUkscUJBQUE7QUMvR3BCO0FEa0hnQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0NBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtBQ2hIcEI7QURtSGdCOztFQUVJLHdCQUFBO0VBQ0EsU0FBQTtBQ2pIcEI7QURvSGdCO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNsSHBCIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9yZXByZXNlbnRhdGl2ZS9vcmRlcnMvbmV3LW9yZGVyL25hY2lvbmFsLXNlbGxpbmcvYWRkLW9yZGVyL2FkZC1vcmRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbGllbnQge1xuICAgIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHotaW5kZXg6IDE7XG5cbiAgICBzcGFuIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgfVxuXG4gICAgc3BhbjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tc3ViLXRleHQpO1xuICAgIH1cblxuICAgIHNwYW46bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IENvcmVSaGlubzY1Qm9sZDtcbiAgICB9XG59XG5cbi5saW5lIHtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG4gICAgei1pbmRleDogMDtcbn1cblxuLnJlcHJlc2VudGF0aXZlIHtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBsaW5lLWhlaWdodDogMTVweDtcbiAgICB6LWluZGV4OiAwO1xuICAgIHRyYW5zaXRpb246IDAuMDhzO1xuXG4gICAgc3BhbiB7XG4gICAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgc3BhbjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGl0bGUpO1xuICAgICAgICBmb250LXNpemU6IHZhcigtLXN1Yi10ZXh0KTtcbiAgICB9XG5cbiAgICBzcGFuOm50aC1jaGlsZCgyKSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBDb3JlUmhpbm82NUJvbGQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICB9XG5cbiAgICBzcGFuOm50aC1jaGlsZCgzKSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcblxuICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIC41cmVtO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBjb250ZW50OiBcInxcIjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgICAucHJvZHVjdC10eXBlcyB7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50O1xuXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgd2lkdGg6IDQ1JTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNwYW46bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5wcm9kdWN0LXR5cGVzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDAuNXJlbSAwLjc1cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGOUY5Rjk7XG5cbiAgICBzcGFuIHtcbiAgICAgICAgbWFyZ2luOiAwLjVyZW0gMDtcbiAgICAgICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBjb2xvcjogIzMzMzMzMztcblxuICAgICAgICAmOmhvdmVyLFxuICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzcGFuOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMS41cmVtO1xuICAgICAgICAgICAgY29sb3I6ICM0NzQ3NDc7XG4gICAgICAgICAgICBjb250ZW50OiBcInxcIjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgICAuZWxnaW4tcHJvZHVjdHMtY29udGFpbmVyIHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgLmVsZ2luLXByb2R1Y3RzIHtcbiAgICAgICAgICAgIHdpZHRoOiA0NCUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4uZWxnaW4tcHJvZHVjdHMtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxcmVtIDA7XG5cbiAgICAuZWxnaW4tcHJvZHVjdHMge1xuICAgICAgICB3aWR0aDogMTAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAwIDAuNXJlbTtcbiAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcblxuICAgICAgICAmOmhvdmVyLFxuICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjlGOUY5O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDRweCAxcHggcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG4gICAgICAgIH1cblxuICAgICAgICAuaXRlbS10aHVtYm5haWwge1xuICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgZm9udC1zaXplOiA2MCU7XG4gICAgICAgICAgICBjb2xvcjogI2EwYTBhMDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gICAgLnByb2R1Y3RzIHtcbiAgICAgICAgLnNlZ21lbnRzIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOTAlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ucHJvZHVjdHMge1xuICAgIHBhZGRpbmc6IDFyZW0gMDtcblxuICAgIC5zZWdtZW50cyB7XG4gICAgICAgIHNwYW46Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG5cbiAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIC41cmVtO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNDc0NzQ3O1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiL1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc3BhbjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWRlZmF1bHQtdGV4dCk7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tbGluayk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAubmF2LWNvbnRyb2xlcnMge1xuXG4gICAgICAgIC5mYS1iYXJzLFxuICAgICAgICAuZmEtdGgge1xuICAgICAgICAgICAgY29sb3I6ICM5QjlBOUE7XG5cbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1saW5rLWFjdGl2ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuY3VzdG9tLXNlbGVjdCB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1zdWItdGV4dCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjVweCkge1xuICAgICAgICAucHJvZHVjdHMtdGFibGUge1xuICAgICAgICAgICAgLnByb2R1Y3RzLXF0ZCB7XG4gICAgICAgICAgICAgICAgb3JkZXI6IDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jYXJ0LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcblxuICAgICAgICAgICAgICAgIC5iYWRnZS1jdXN0b20ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxcmVtIDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC43NXJlbSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5wcm9kdWN0cy10YWJsZSB7XG4gICAgICAgIC5wcm9kdWN0cy1xdGQge1xuICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1zdWItdGV4dCk7XG4gICAgICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJ0LWNvbnRhaW5lciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVGOEZGO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTEpLCAwIDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjExKTtcblxuICAgICAgICAgICAgLmZhLXNob3BwaW5nLWNhcnQge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNhcnQtaXRlbnMtcXRkIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDFyZW07XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1kZWZhdWx0LXRleHQpO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmJhZGdlLWN1c3RvbSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IC4yNXJlbSAwLjVyZW07XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaGlkZGVuLWNhcnQge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDMyMHB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMC41cmVtO1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDAwO1xuXG4gICAgICAgICAgICAgICAgJi5zaG93LWNhcnQge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBtb3ZlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5oZWFkIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgICAgICAgICAgICAgICAgIC5jbG9zZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgc21hbGwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4IDJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmJvZHkge1xuICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAzMjBweDtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcblxuICAgICAgICAgICAgICAgICAgICAubGlzdC1ncm91cC1pdGVtIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC4yNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGOEY4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC50aHVtYiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kZXNjIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAwLjc1cmVtO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGFuOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BhbjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAucXRkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjVyZW0gMC43NXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1zdWItdGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmZvb3Qge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgICAgICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMnB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGFibGUge1xuICAgICAgICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xuICAgICAgICBib3JkZXItc3BhY2luZzogMCAzcHg7XG4gICAgICAgIGJvcmRlcjogMDtcblxuICAgICAgICB0aGVhZCB0aCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjY1OTgwO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBmb250LWZhbWlseTogbW9udHNlcnJhdHJlZ3VsYXI7XG4gICAgICAgICAgICBmb250LXNpemU6IHZhcigtLXN1Yi10ZXh0KTtcbiAgICAgICAgICAgIHBhZGRpbmc6IC41cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhlYWQubW9ub2Jsb2NrIHRoIHtcbiAgICAgICAgICAgICY6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjpudGgtY2hpbGQoNSkge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMzZweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuZmEtc2VhcmNoIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIGNvbG9yOiAjMjY1OTgwO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRib2R5IHtcblxuICAgICAgICAgICAgdGQ6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMjAwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRib2R5IHRyOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IG1vbnRzZXJyYXRyZWd1bGFyO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tc3ViLXRleHQpO1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cbiAgICAgICAgICAgICAgICAmOm50aC1jaGlsZCgzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1saW5rKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuaW1nLXRodW1ibmFpbCB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5hbW91bnQge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAgICAgICAgICAgICAgIC5idG4tZGVjcmVhc2UsXG4gICAgICAgICAgICAgICAgICAgIC5idG4taW5jcmVhc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnBhbmVsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG4gICAgICAgICAgICAgICAgICAgIGlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnN1Y2Nlc3Mge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzcxQ0M4NztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAud2FybmluZyB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjRkRCOTZCO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IENvcmVSaGlubzY1Ym9sZCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzA5ODZFNCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmNhcmQtbXVsdGlibG9jayB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGOEY4Rjg7XG5cbiAgICAgICAgLmJvZHkge1xuICAgICAgICAgICAgcGFkZGluZzogMC4yNXJlbTtcblxuICAgICAgICAgICAgLnRodW1ibmFpbCB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC50ZXJtIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG5cbiAgICAgICAgICAgICAgICAgICAgZW0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLXN1Yi10ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5zdWNjZXNzIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzcxQ0M4NztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAud2FybmluZyB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGREI5NkI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuMjVlbTtcblxuICAgICAgICAgICAgICAgIC5jb2Qge1xuICAgICAgICAgICAgICAgICAgICBzcGFuOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjOUI5QTlBO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgc3BhbjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43ZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuaXRlbS1kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC42NWVtO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnN0b2NrIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwLjVyZW0gMHJlbTtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDExcHg7XG5cbiAgICAgICAgICAgICAgICAgICAgc3BhbjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjOUI5QTlBO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgc3BhbjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43ZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuZm9vdGVyIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcblxuICAgICAgICAgICAgLmFtb3VudCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICAgICAgICAgIC5idG4tZGVjcmVhc2UsXG4gICAgICAgICAgICAgICAgLmJ0bi1pbmNyZWFzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAucGFuZWwge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tc3ViLXRleHQpO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuICAgICAgICAgICAgICAgIGlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMC4yNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzA5ODZFNCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsIi5jbGllbnQge1xuICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB6LWluZGV4OiAxO1xufVxuLmNsaWVudCBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDEwcHg7XG59XG4uY2xpZW50IHNwYW46Zmlyc3QtY2hpbGQge1xuICBmb250LXNpemU6IHZhcigtLXN1Yi10ZXh0KTtcbn1cbi5jbGllbnQgc3BhbjpudGgtY2hpbGQoMikge1xuICBmb250LWZhbWlseTogQ29yZVJoaW5vNjVCb2xkO1xufVxuXG4ubGluZSB7XG4gIGhlaWdodDogMXB4O1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcbiAgei1pbmRleDogMDtcbn1cblxuLnJlcHJlc2VudGF0aXZlIHtcbiAgcGFkZGluZzogMC41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gIHotaW5kZXg6IDA7XG4gIHRyYW5zaXRpb246IDAuMDhzO1xufVxuLnJlcHJlc2VudGF0aXZlIHNwYW4ge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuLnJlcHJlc2VudGF0aXZlIHNwYW46Zmlyc3QtY2hpbGQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6IHZhcigtLXRpdGxlKTtcbiAgZm9udC1zaXplOiB2YXIoLS1zdWItdGV4dCk7XG59XG4ucmVwcmVzZW50YXRpdmUgc3BhbjpudGgtY2hpbGQoMikge1xuICBmb250LWZhbWlseTogQ29yZVJoaW5vNjVCb2xkO1xuICBmb250LXNpemU6IDEwcHg7XG59XG4ucmVwcmVzZW50YXRpdmUgc3BhbjpudGgtY2hpbGQoMykge1xuICBmb250LXNpemU6IDEwcHg7XG59XG4ucmVwcmVzZW50YXRpdmUgc3BhbjpudGgtY2hpbGQoMyk6YmVmb3JlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAwIDAuNXJlbTtcbiAgY29sb3I6ICNmZmY7XG4gIGNvbnRlbnQ6IFwifFwiO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjVweCkge1xuICAucHJvZHVjdC10eXBlcyB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnByb2R1Y3QtdHlwZXMgc3BhbiB7XG4gICAgd2lkdGg6IDQ1JTtcbiAgfVxuICAucHJvZHVjdC10eXBlcyBzcGFuOm5vdCg6bGFzdC1jaGlsZCk6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuLnByb2R1Y3QtdHlwZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAwLjVyZW0gMC43NXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y5RjlGOTtcbn1cbi5wcm9kdWN0LXR5cGVzIHNwYW4ge1xuICBtYXJnaW46IDAuNXJlbSAwO1xuICBmb250LXNpemU6IDAuODVyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjMzMzMzMzO1xufVxuLnByb2R1Y3QtdHlwZXMgc3Bhbjpob3ZlciwgLnByb2R1Y3QtdHlwZXMgc3Bhbi5hY3RpdmUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbn1cbi5wcm9kdWN0LXR5cGVzIHNwYW46bm90KDpsYXN0LWNoaWxkKTphZnRlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMCAxLjVyZW07XG4gIGNvbG9yOiAjNDc0NzQ3O1xuICBjb250ZW50OiBcInxcIjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgLmVsZ2luLXByb2R1Y3RzLWNvbnRhaW5lciB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmVsZ2luLXByb2R1Y3RzLWNvbnRhaW5lciAuZWxnaW4tcHJvZHVjdHMge1xuICAgIHdpZHRoOiA0NCUgIWltcG9ydGFudDtcbiAgfVxufVxuLmVsZ2luLXByb2R1Y3RzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDFyZW0gMDtcbn1cbi5lbGdpbi1wcm9kdWN0cy1jb250YWluZXIgLmVsZ2luLXByb2R1Y3RzIHtcbiAgd2lkdGg6IDEwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMCAwLjVyZW07XG4gIHRyYW5zaXRpb246IDAuMnM7XG59XG4uZWxnaW4tcHJvZHVjdHMtY29udGFpbmVyIC5lbGdpbi1wcm9kdWN0czpob3ZlciwgLmVsZ2luLXByb2R1Y3RzLWNvbnRhaW5lciAuZWxnaW4tcHJvZHVjdHMuYWN0aXZlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjlGOUY5O1xuICBib3gtc2hhZG93OiAwIDAgNHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcbn1cbi5lbGdpbi1wcm9kdWN0cy1jb250YWluZXIgLmVsZ2luLXByb2R1Y3RzIC5pdGVtLXRodW1ibmFpbCB7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogYXV0bztcbn1cbi5lbGdpbi1wcm9kdWN0cy1jb250YWluZXIgLmVsZ2luLXByb2R1Y3RzIHNwYW4ge1xuICBmb250LXNpemU6IDYwJTtcbiAgY29sb3I6ICNhMGEwYTA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gIC5wcm9kdWN0cyAuc2VnbWVudHMge1xuICAgIGZvbnQtc2l6ZTogOTAlO1xuICB9XG59XG4ucHJvZHVjdHMge1xuICBwYWRkaW5nOiAxcmVtIDA7XG59XG4ucHJvZHVjdHMgLnNlZ21lbnRzIHNwYW46Zmlyc3QtY2hpbGQge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbi5wcm9kdWN0cyAuc2VnbWVudHMgc3BhbjpmaXJzdC1jaGlsZDphZnRlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMCAwLjVyZW07XG4gIGNvbG9yOiAjNDc0NzQ3O1xuICBjb250ZW50OiBcIi9cIjtcbn1cbi5wcm9kdWN0cyAuc2VnbWVudHMgc3BhbjpsYXN0LWNoaWxkIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiB2YXIoLS1kZWZhdWx0LXRleHQpO1xuICBjb2xvcjogdmFyKC0tbGluayk7XG59XG4ucHJvZHVjdHMgLm5hdi1jb250cm9sZXJzIC5mYS1iYXJzLFxuLnByb2R1Y3RzIC5uYXYtY29udHJvbGVycyAuZmEtdGgge1xuICBjb2xvcjogIzlCOUE5QTtcbn1cbi5wcm9kdWN0cyAubmF2LWNvbnRyb2xlcnMgLmZhLWJhcnM6aG92ZXIsXG4ucHJvZHVjdHMgLm5hdi1jb250cm9sZXJzIC5mYS10aDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5wcm9kdWN0cyAubmF2LWNvbnRyb2xlcnMgLmZhLWJhcnMuYWN0aXZlLFxuLnByb2R1Y3RzIC5uYXYtY29udHJvbGVycyAuZmEtdGguYWN0aXZlIHtcbiAgY29sb3I6IHZhcigtLWxpbmstYWN0aXZlKTtcbn1cbi5wcm9kdWN0cyAubmF2LWNvbnRyb2xlcnMgLmN1c3RvbS1zZWxlY3Qge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmb250LXNpemU6IHZhcigtLXN1Yi10ZXh0KTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gIC5wcm9kdWN0cyAucHJvZHVjdHMtdGFibGUgLnByb2R1Y3RzLXF0ZCB7XG4gICAgb3JkZXI6IDE7XG4gIH1cbiAgLnByb2R1Y3RzIC5wcm9kdWN0cy10YWJsZSAuY2FydC1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnByb2R1Y3RzIC5wcm9kdWN0cy10YWJsZSAuY2FydC1jb250YWluZXIgLmJhZGdlLWN1c3RvbSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAxcmVtIDAgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAwLjc1cmVtICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5wcm9kdWN0cyAucHJvZHVjdHMtdGFibGUgLnByb2R1Y3RzLXF0ZCB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc3ViLXRleHQpO1xuICBjb2xvcjogIzMzMzMzMztcbn1cbi5wcm9kdWN0cyAucHJvZHVjdHMtdGFibGUgLmNhcnQtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNFRUY4RkY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTEpLCAwIDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjExKTtcbn1cbi5wcm9kdWN0cyAucHJvZHVjdHMtdGFibGUgLmNhcnQtY29udGFpbmVyIC5mYS1zaG9wcGluZy1jYXJ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4ucHJvZHVjdHMgLnByb2R1Y3RzLXRhYmxlIC5jYXJ0LWNvbnRhaW5lciAuY2FydC1pdGVucy1xdGQge1xuICBwYWRkaW5nOiAwIDFyZW07XG4gIGZvbnQtc2l6ZTogdmFyKC0tZGVmYXVsdC10ZXh0KTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xufVxuLnByb2R1Y3RzIC5wcm9kdWN0cy10YWJsZSAuY2FydC1jb250YWluZXIgLmJhZGdlLWN1c3RvbSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5wcm9kdWN0cyAucHJvZHVjdHMtdGFibGUgLmNhcnQtY29udGFpbmVyIC5oaWRkZW4tY2FydCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHdpZHRoOiAzMjBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGJveC1zaGFkb3c6IDAgMCAzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB6LWluZGV4OiAxMDAwO1xufVxuLnByb2R1Y3RzIC5wcm9kdWN0cy10YWJsZSAuY2FydC1jb250YWluZXIgLmhpZGRlbi1jYXJ0LnNob3ctY2FydCB7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIGJvdHRvbTogMHB4O1xuICByaWdodDogMHB4O1xuICBjdXJzb3I6IG1vdmU7XG59XG4ucHJvZHVjdHMgLnByb2R1Y3RzLXRhYmxlIC5jYXJ0LWNvbnRhaW5lciAuaGlkZGVuLWNhcnQgLmhlYWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ucHJvZHVjdHMgLnByb2R1Y3RzLXRhYmxlIC5jYXJ0LWNvbnRhaW5lciAuaGlkZGVuLWNhcnQgLmhlYWQgLmNsb3NlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnByb2R1Y3RzIC5wcm9kdWN0cy10YWJsZSAuY2FydC1jb250YWluZXIgLmhpZGRlbi1jYXJ0IC5oZWFkIC5jbG9zZSBzbWFsbCB7XG4gIG1hcmdpbjogMHB4IDJweDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLnByb2R1Y3RzIC5wcm9kdWN0cy10YWJsZSAuY2FydC1jb250YWluZXIgLmhpZGRlbi1jYXJ0IC5oZWFkIC5jbG9zZSBzbWFsbDpsYXN0LWNoaWxkIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4ucHJvZHVjdHMgLnByb2R1Y3RzLXRhYmxlIC5jYXJ0LWNvbnRhaW5lciAuaGlkZGVuLWNhcnQgLmJvZHkge1xuICBtYXgtaGVpZ2h0OiAzMjBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cbi5wcm9kdWN0cyAucHJvZHVjdHMtdGFibGUgLmNhcnQtY29udGFpbmVyIC5oaWRkZW4tY2FydCAuYm9keSAubGlzdC1ncm91cC1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAwLjI1cmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGOEY4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuLnByb2R1Y3RzIC5wcm9kdWN0cy10YWJsZSAuY2FydC1jb250YWluZXIgLmhpZGRlbi1jYXJ0IC5ib2R5IC5saXN0LWdyb3VwLWl0ZW0gLnRodW1iIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5wcm9kdWN0cyAucHJvZHVjdHMtdGFibGUgLmNhcnQtY29udGFpbmVyIC5oaWRkZW4tY2FydCAuYm9keSAubGlzdC1ncm91cC1pdGVtIC50aHVtYiBpbWcge1xuICB3aWR0aDogNTBweDtcbn1cbi5wcm9kdWN0cyAucHJvZHVjdHMtdGFibGUgLmNhcnQtY29udGFpbmVyIC5oaWRkZW4tY2FydCAuYm9keSAubGlzdC1ncm91cC1pdGVtIC50aHVtYiAuZGVzYyB7XG4gIHBhZGRpbmc6IDAgMC43NXJlbTtcbn1cbi5wcm9kdWN0cyAucHJvZHVjdHMtdGFibGUgLmNhcnQtY29udGFpbmVyIC5oaWRkZW4tY2FydCAuYm9keSAubGlzdC1ncm91cC1pdGVtIC50aHVtYiAuZGVzYyBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbn1cbi5wcm9kdWN0cyAucHJvZHVjdHMtdGFibGUgLmNhcnQtY29udGFpbmVyIC5oaWRkZW4tY2FydCAuYm9keSAubGlzdC1ncm91cC1pdGVtIC50aHVtYiAuZGVzYyBzcGFuOmZpcnN0LWNoaWxkIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogIzMzMzMzMztcbn1cbi5wcm9kdWN0cyAucHJvZHVjdHMtdGFibGUgLmNhcnQtY29udGFpbmVyIC5oaWRkZW4tY2FydCAuYm9keSAubGlzdC1ncm91cC1pdGVtIC50aHVtYiAuZGVzYyBzcGFuOmxhc3QtY2hpbGQge1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbn1cbi5wcm9kdWN0cyAucHJvZHVjdHMtdGFibGUgLmNhcnQtY29udGFpbmVyIC5oaWRkZW4tY2FydCAuYm9keSAubGlzdC1ncm91cC1pdGVtIC5xdGQge1xuICBwYWRkaW5nOiAwLjVyZW0gMC43NXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc3ViLXRleHQpO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG59XG4ucHJvZHVjdHMgLnByb2R1Y3RzLXRhYmxlIC5jYXJ0LWNvbnRhaW5lciAuaGlkZGVuLWNhcnQgLmZvb3Qge1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5wcm9kdWN0cyAucHJvZHVjdHMtdGFibGUgLmNhcnQtY29udGFpbmVyIC5oaWRkZW4tY2FydCAuZm9vdCBidXR0b24ge1xuICB3aWR0aDogODAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDMycHg7XG59XG4ucHJvZHVjdHMgdGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xuICBib3JkZXItc3BhY2luZzogMCAzcHg7XG4gIGJvcmRlcjogMDtcbn1cbi5wcm9kdWN0cyB0YWJsZSB0aGVhZCB0aCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjU5ODA7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogbW9udHNlcnJhdHJlZ3VsYXI7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc3ViLXRleHQpO1xuICBwYWRkaW5nOiAwLjVyZW07XG59XG4ucHJvZHVjdHMgdGFibGUgdGhlYWQubW9ub2Jsb2NrIHRoOm50aC1jaGlsZCgxKSB7XG4gIHdpZHRoOiA4MHB4O1xufVxuLnByb2R1Y3RzIHRhYmxlIHRoZWFkLm1vbm9ibG9jayB0aDpudGgtY2hpbGQoNSkge1xuICB3aWR0aDogMTM2cHg7XG59XG4ucHJvZHVjdHMgdGFibGUgdGhlYWQubW9ub2Jsb2NrIHRoOmxhc3QtY2hpbGQge1xuICB3aWR0aDogMTIwcHg7XG59XG4ucHJvZHVjdHMgdGFibGUgLmZhLXNlYXJjaCB7XG4gIHBhZGRpbmc6IDRweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGNvbG9yOiAjMjY1OTgwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDExcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5wcm9kdWN0cyB0YWJsZSB0Ym9keSB0ZDpub3QoOmZpcnN0LWNoaWxkKSB7XG4gIG1pbi13aWR0aDogMjAwcHg7XG59XG4ucHJvZHVjdHMgdGFibGUgdGJvZHkgdGJvZHkgdHI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xufVxuLnByb2R1Y3RzIHRhYmxlIHRib2R5IHRkIHtcbiAgZm9udC1mYW1pbHk6IG1vbnRzZXJyYXRyZWd1bGFyO1xuICBmb250LXNpemU6IHZhcigtLXN1Yi10ZXh0KTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5wcm9kdWN0cyB0YWJsZSB0Ym9keSB0ZDpudGgtY2hpbGQoMykge1xuICBjb2xvcjogdmFyKC0tbGluayk7XG59XG4ucHJvZHVjdHMgdGFibGUgdGJvZHkgdGQgLmltZy10aHVtYm5haWwge1xuICB3aWR0aDogNjBweDtcbn1cbi5wcm9kdWN0cyB0YWJsZSB0Ym9keSB0ZCAuYW1vdW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5wcm9kdWN0cyB0YWJsZSB0Ym9keSB0ZCAuYW1vdW50IC5idG4tZGVjcmVhc2UsXG4ucHJvZHVjdHMgdGFibGUgdGJvZHkgdGQgLmFtb3VudCAuYnRuLWluY3JlYXNlIHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xufVxuLnByb2R1Y3RzIHRhYmxlIHRib2R5IHRkIC5hbW91bnQgLnBhbmVsIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucHJvZHVjdHMgdGFibGUgdGJvZHkgdGQgLmFtb3VudCBpbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG4ucHJvZHVjdHMgdGFibGUgdGJvZHkgdGQgLmFtb3VudCBpbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIG1hcmdpbjogMDtcbn1cbi5wcm9kdWN0cyB0YWJsZSB0Ym9keSB0ZCAuYW1vdW50IGEge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnByb2R1Y3RzIHRhYmxlIHRib2R5IHRkIC5zdWNjZXNzIHtcbiAgY29sb3I6ICM3MUNDODc7XG59XG4ucHJvZHVjdHMgdGFibGUgdGJvZHkgdGQgLndhcm5pbmcge1xuICBjb2xvcjogI0ZEQjk2Qjtcbn1cbi5wcm9kdWN0cyB0YWJsZSB0Ym9keSBhIHtcbiAgZm9udC1mYW1pbHk6IENvcmVSaGlubzY1Ym9sZCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiAjMDk4NkU0ICFpbXBvcnRhbnQ7XG59XG4ucHJvZHVjdHMgLmNhcmQtbXVsdGlibG9jayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGOEY4Rjg7XG59XG4ucHJvZHVjdHMgLmNhcmQtbXVsdGlibG9jayAuYm9keSB7XG4gIHBhZGRpbmc6IDAuMjVyZW07XG59XG4ucHJvZHVjdHMgLmNhcmQtbXVsdGlibG9jayAuYm9keSAudGh1bWJuYWlsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnByb2R1Y3RzIC5jYXJkLW11bHRpYmxvY2sgLmJvZHkgLnRodW1ibmFpbCBpbWcge1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG4ucHJvZHVjdHMgLmNhcmQtbXVsdGlibG9jayAuYm9keSAudGh1bWJuYWlsIC50ZXJtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4ucHJvZHVjdHMgLmNhcmQtbXVsdGlibG9jayAuYm9keSAudGh1bWJuYWlsIC50ZXJtIGVtIHtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gIGZvbnQtc2l6ZTogMS4yZW07XG59XG4ucHJvZHVjdHMgLmNhcmQtbXVsdGlibG9jayAuYm9keSAudGh1bWJuYWlsIC50ZXJtIHNwYW4ge1xuICBmb250LXNpemU6IHZhcigtLXN1Yi10ZXh0KTtcbn1cbi5wcm9kdWN0cyAuY2FyZC1tdWx0aWJsb2NrIC5ib2R5IC50aHVtYm5haWwgLnN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzFDQzg3O1xufVxuLnByb2R1Y3RzIC5jYXJkLW11bHRpYmxvY2sgLmJvZHkgLnRodW1ibmFpbCAud2FybmluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGREI5NkI7XG59XG4ucHJvZHVjdHMgLmNhcmQtbXVsdGlibG9jayAuYm9keSAuZGVzY3JpcHRpb24ge1xuICBwYWRkaW5nOiAwLjI1ZW07XG59XG4ucHJvZHVjdHMgLmNhcmQtbXVsdGlibG9jayAuYm9keSAuZGVzY3JpcHRpb24gLmNvZCBzcGFuOmZpcnN0LWNoaWxkIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogIzlCOUE5QTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtO1xufVxuLnByb2R1Y3RzIC5jYXJkLW11bHRpYmxvY2sgLmJvZHkgLmRlc2NyaXB0aW9uIC5jb2Qgc3BhbjpsYXN0LWNoaWxkIHtcbiAgZm9udC1zaXplOiAwLjdlbTtcbn1cbi5wcm9kdWN0cyAuY2FyZC1tdWx0aWJsb2NrIC5ib2R5IC5kZXNjcmlwdGlvbiAuaXRlbS1kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMC42NWVtO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG59XG4ucHJvZHVjdHMgLmNhcmQtbXVsdGlibG9jayAuYm9keSAuZGVzY3JpcHRpb24gLnN0b2NrIHtcbiAgbWFyZ2luOiAwLjVyZW0gMHJlbTtcbiAgbGluZS1oZWlnaHQ6IDExcHg7XG59XG4ucHJvZHVjdHMgLmNhcmQtbXVsdGlibG9jayAuYm9keSAuZGVzY3JpcHRpb24gLnN0b2NrIHNwYW46Zmlyc3QtY2hpbGQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogIzlCOUE5QTtcbn1cbi5wcm9kdWN0cyAuY2FyZC1tdWx0aWJsb2NrIC5ib2R5IC5kZXNjcmlwdGlvbiAuc3RvY2sgc3BhbjpsYXN0LWNoaWxkIHtcbiAgZm9udC1zaXplOiAwLjdlbTtcbn1cbi5wcm9kdWN0cyAuY2FyZC1tdWx0aWJsb2NrIC5mb290ZXIge1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcbn1cbi5wcm9kdWN0cyAuY2FyZC1tdWx0aWJsb2NrIC5mb290ZXIgLmFtb3VudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ucHJvZHVjdHMgLmNhcmQtbXVsdGlibG9jayAuZm9vdGVyIC5hbW91bnQgLmJ0bi1kZWNyZWFzZSxcbi5wcm9kdWN0cyAuY2FyZC1tdWx0aWJsb2NrIC5mb290ZXIgLmFtb3VudCAuYnRuLWluY3JlYXNlIHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xufVxuLnByb2R1Y3RzIC5jYXJkLW11bHRpYmxvY2sgLmZvb3RlciAuYW1vdW50IC5wYW5lbCB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiB2YXIoLS1zdWItdGV4dCk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5wcm9kdWN0cyAuY2FyZC1tdWx0aWJsb2NrIC5mb290ZXIgLmFtb3VudCBpbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG4ucHJvZHVjdHMgLmNhcmQtbXVsdGlibG9jayAuZm9vdGVyIC5hbW91bnQgaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBtYXJnaW46IDA7XG59XG4ucHJvZHVjdHMgLmNhcmQtbXVsdGlibG9jayAuZm9vdGVyIC5hbW91bnQgYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiAjMDk4NkU0ICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/main/representative/orders/new-order/nacional-selling/add-order/add-order.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/main/representative/orders/new-order/nacional-selling/add-order/add-order.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: AddOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddOrderComponent", function() { return AddOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products */ "./src/app/main/representative/orders/new-order/nacional-selling/add-order/products.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _product_comparative_product_comparative_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-comparative/product-comparative.component */ "./src/app/main/representative/orders/new-order/nacional-selling/add-order/product-comparative/product-comparative.component.ts");





let AddOrderComponent = class AddOrderComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.isMonoBlock = true;
        this.amount = 0;
        this.isCollapsed = false;
        this.cartToggle = false;
        this.sendOrder = false;
        Object.assign(this, { elginProducts: _products__WEBPACK_IMPORTED_MODULE_2__["elginProducts"] });
    }
    ngOnInit() { }
    ngOnDestroy() { }
    stopPropagation(e) {
        e.stopPropagation();
    }
    navigate(index, object) {
        this.selectedItem = index;
        this.routeId = this.elginProducts[this.selectedItem].id;
        this.productLine = object;
    }
    selectProduct(index, object) {
        this.selectedProduct = index;
        this.productType = object;
        this.productSelected = true;
    }
    monoBlock() {
        this.isMonoBlock = true;
        this.isMultiBlock = false;
    }
    multiBlock() {
        this.isMultiBlock = true;
        this.isMonoBlock = false;
    }
    increaseAmount(el) {
        const element = el;
        element.valueAsNumber += 1;
        console.log(element.id, element.value);
    }
    decreaseAmount(el) {
        const element = el;
        if (element.valueAsNumber > 0) {
            element.valueAsNumber -= 1;
        }
        console.log(element.id, element.value);
    }
    finishCart() {
        this.sendOrder = !this.sendOrder;
    }
    openComparativeModal(item) {
        const modalRef = this.modalService.open(_product_comparative_product_comparative_component__WEBPACK_IMPORTED_MODULE_4__["ProductComparativeComponent"], { size: 'xl', centered: true, scrollable: true });
        modalRef.componentInstance.item = item;
    }
};
AddOrderComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] }
];
AddOrderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'elgin-add-order',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-order.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/representative/orders/new-order/nacional-selling/add-order/add-order.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-order.component.scss */ "./src/app/main/representative/orders/new-order/nacional-selling/add-order/add-order.component.scss")).default]
    })
], AddOrderComponent);



/***/ }),

/***/ "./src/app/main/representative/orders/new-order/nacional-selling/add-order/finish-order/finish-order.component.scss":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/main/representative/orders/new-order/nacional-selling/add-order/finish-order/finish-order.component.scss ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".redo {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 1rem;\n}\n.redo .btn-redo {\n  background-color: #FFBC70;\n  color: #ffffff;\n  border-radius: 32px;\n  margin: 0 1rem;\n}\n@media screen and (max-width: 425px) {\n  .nav-item {\n    width: 100%;\n    margin: 0.25rem 0 !important;\n  }\n}\n.nav-tabs {\n  border-bottom: 3px solid var(--primary);\n}\n.nav-item:not(:last-child) {\n  margin: 0px 5px;\n}\n.nav-link.active {\n  background-color: var(--primary);\n  color: #ffffff !important;\n}\n.nav-link {\n  background-color: #F0F0F0;\n  color: #333333 !important;\n  font-size: var(--sub-text);\n}\n@media screen and (max-width: 425px) {\n  table span,\ntable label {\n    text-align: unset !important;\n  }\n}\nlabel {\n  color: #6c757d !important;\n  font-size: var(--sub-text);\n  margin-bottom: 2px;\n}\ntable {\n  border-collapse: separate;\n  border-spacing: 2px;\n  margin-top: 1rem;\n}\ntable thead th {\n  padding: 0.25rem 0.5rem;\n  background-color: #D3ECFF;\n  font-size: var(--sub-text);\n  color: #333333;\n  text-align: center;\n}\ntable tbody td {\n  vertical-align: middle;\n  text-align: center;\n  font-size: 11px !important;\n  color: var(--primary);\n  background-color: #F8F8F8;\n}\ntable span,\ntable label {\n  max-width: 150px;\n  display: block;\n  text-align: left;\n}\n@media screen and (max-width: 425px) {\n  table .item {\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n}\ntable .item {\n  display: flex;\n  align-items: center;\n}\ntable .item .img-thumbnail {\n  width: 80px;\n}\ntable .item .desc span:last-child {\n  color: var(--link);\n}\ntable .taxes {\n  padding: 0rem 0.5rem;\n  line-height: 12px;\n}\ntable .taxes .form-group {\n  width: 25%;\n  margin-bottom: 0.5rem !important;\n}\ntable .taxes1 {\n  min-width: 170px;\n}\ntable .taxes2 {\n  min-width: 280px;\n}\n.navigation .nav-tabs {\n  border-bottom: 3px solid #F0F0F0;\n}\n.navigation .nav-link.active {\n  background-color: #333333;\n  color: #ffffff !important;\n}\n.navigation .nav-link {\n  background-color: #F0F0F0;\n  color: #333333 !important;\n  font-size: var(--sub-text);\n}\n@media screen and (max-width: 425px) {\n  .filters {\n    align-items: flex-start !important;\n    flex-direction: column;\n  }\n}\n.filters {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  margin: 1rem 0rem;\n}\n.filters .label {\n  margin-right: 1rem;\n  font-size: var(--default-text);\n}\n.filters .custom-control-label::before,\n.filters .custom-control-label::after {\n  width: 0.9rem;\n  height: 0.9rem;\n  top: 0.27rem;\n  left: -1.3rem;\n}\n.filters .custom-control-label {\n  font-size: 13px;\n  line-height: 22px;\n}\n.custom-select,\n.form-control,\ntextarea.form-control {\n  border-radius: 8px;\n  font-size: var(--sub-text) !important;\n}\n.search {\n  position: relative;\n}\n.search .fa-search {\n  position: absolute;\n  top: 29px;\n  left: 13px;\n  padding: 5px;\n  background: var(--title);\n  color: #fff;\n  border-radius: 50%;\n  font-size: 13px;\n}\n.search .form-control {\n  border-radius: 8px;\n  padding-left: 40px;\n}\n#freightHelp {\n  font-size: var(--sub-text) !important;\n  color: #EF7F00;\n}\n.custom-radio .custom-control-label::before {\n  border: #ced4da solid 1px;\n}\n.custom-radio .custom-control-input:focus ~ .custom-control-label::before {\n  box-shadow: none;\n}\n.custom-radio .custom-control-input:checked ~ .custom-control-label::before {\n  background-color: #007bff;\n  border: 3px solid #fff;\n  padding: 6px;\n}\n.custom-radio .custom-control-input:checked ~ .custom-control-label::after {\n  background-image: none !important;\n  background-color: unset;\n  border: 1px solid #ced4da;\n  border-radius: 50%;\n  padding: 8px;\n}\n.freight-info {\n  padding: 1rem;\n  background-color: #D3ECFF;\n  border-radius: 8px;\n  min-height: 105px;\n}\n.freight-info span {\n  display: block;\n}\n.freight-info span:first-child {\n  color: var(--primary);\n  font-size: var(--sub-text);\n  font-family: CoreRhino65Bold;\n  margin-bottom: 1rem;\n}\n.freight-info span:last-child {\n  font-size: 11px;\n}\n.address-title {\n  color: var(--primary);\n}\n.client {\n  padding: 0.75rem 1rem;\n  background-color: var(--blue);\n  border-radius: 10px;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.11), 0 2px 2px rgba(0, 0, 0, 0.11);\n  z-index: 1;\n}\n.client span {\n  display: block;\n  color: #fff;\n  font-size: 10px;\n}\n.client span:first-child {\n  font-size: var(--sub-text);\n}\n.client span:nth-child(2) {\n  font-family: CoreRhino65Bold;\n}\n.address-card {\n  border: 1px solid rgba(0, 0, 0, 0.225);\n  border-radius: 10px;\n}\n.address-card .head {\n  padding: 0.5rem;\n  font-size: var(--sub-text);\n  color: var(--primary);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.225);\n}\n.address-card .body {\n  min-height: 80px;\n  padding: 0.5rem;\n  background-color: #F5F5F5;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n.address-card .body span {\n  display: block;\n  font-size: 0.7em;\n  color: #333333;\n}\n.address-card .body span.cnpj {\n  color: var(--primary);\n}\n.segment {\n  font-size: var(--default-text);\n}\n.financial label:not(.custom-control-label) {\n  font-size: 0.6rem !important;\n}\n.financial small,\n.financial .form-control {\n  color: var(--primary);\n  font-size: 0.7rem;\n}\n.financial .btn.calendar {\n  font-size: var(--sub-text) !important;\n  border-color: #ced4da;\n  border-top-right-radius: 8px !important;\n  border-bottom-right-radius: 8px !important;\n}\n.financial .btn.calendar:hover {\n  background-color: transparent;\n}\n.financial .btn.calendar em {\n  color: #c7c7c7;\n}\n.financial .charge-address {\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 17px;\n}\n.financial .charge-address .charge-payment-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.25rem 0.75rem;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125);\n}\n.financial .charge-address .charge-payment-head span:first-child {\n  font-size: var(--default-text);\n  color: var(--primary);\n}\n.financial .charge-address .charge-payment-head span:last-child {\n  font-size: var(--sub-text);\n  color: #333333;\n}\n.financial .charge-address .charge-payment-body {\n  padding: 0.5rem 0.75rem;\n  background-color: #F5F5F5;\n  border-bottom-left-radius: 17px;\n  border-bottom-right-radius: 17px;\n}\n.financial .charge-address .charge-payment-body .form-group {\n  line-height: 12px;\n}\n.financial .charge-address .charge-payment-body .form-group span {\n  font-size: var(--sub-text);\n  color: #333333;\n}\n.coments {\n  border-bottom: none !important;\n}\n.coments .nav-link {\n  border-top-left-radius: 12px !important;\n  border-top-right-radius: 12px !important;\n}\n.btn-draft,\n.btn-budget,\n.btn-finish {\n  font-size: var(--default-text);\n  color: #fff;\n  border-radius: 25px;\n  border: 1px solid #E5E5E5;\n  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);\n  text-transform: uppercase;\n}\n.btn-draft {\n  background: #333333;\n}\n.btn-budget {\n  background: #FCA746;\n}\n.btn-finish {\n  background: #4DBF69;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9yZXByZXNlbnRhdGl2ZS9vcmRlcnMvbmV3LW9yZGVyL25hY2lvbmFsLXNlbGxpbmcvYWRkLW9yZGVyL2ZpbmlzaC1vcmRlci9DOlxcRWxnaW5VcDNcXGZyb250LWVsZ2luLTMuMFxcRlJPTlQtRUxHSU5VUC0zLjAvc3JjXFxhcHBcXG1haW5cXHJlcHJlc2VudGF0aXZlXFxvcmRlcnNcXG5ldy1vcmRlclxcbmFjaW9uYWwtc2VsbGluZ1xcYWRkLW9yZGVyXFxmaW5pc2gtb3JkZXJcXGZpbmlzaC1vcmRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9yZXByZXNlbnRhdGl2ZS9vcmRlcnMvbmV3LW9yZGVyL25hY2lvbmFsLXNlbGxpbmcvYWRkLW9yZGVyL2ZpbmlzaC1vcmRlci9maW5pc2gtb3JkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDSTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ0NSO0FER0E7RUFDSTtJQUNJLFdBQUE7SUFDQSw0QkFBQTtFQ0FOO0FBQ0Y7QURHQTtFQUNJLHVDQUFBO0FDREo7QURJQTtFQUNJLGVBQUE7QUNESjtBRElBO0VBQ0ksZ0NBQUE7RUFDQSx5QkFBQTtBQ0RKO0FESUE7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7QUNESjtBRElBO0VBR1E7O0lBRUksNEJBQUE7RUNIVjtBQUNGO0FET0E7RUFDSSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7QUNMSjtBRFFBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDTEo7QURPSTtFQUNJLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0xSO0FEUUk7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FDTlI7QURTSTs7RUFFSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ1BSO0FEVUk7RUFDSTtJQUNJLGVBQUE7SUFDQSx1QkFBQTtFQ1JWO0FBQ0Y7QURXSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQ1RSO0FEV1E7RUFDSSxXQUFBO0FDVFo7QURhWTtFQUNJLGtCQUFBO0FDWGhCO0FEZ0JJO0VBQ0ksb0JBQUE7RUFDQSxpQkFBQTtBQ2RSO0FEZ0JRO0VBQ0ksVUFBQTtFQUNBLGdDQUFBO0FDZFo7QURrQkk7RUFDSSxnQkFBQTtBQ2hCUjtBRG1CSTtFQUNJLGdCQUFBO0FDakJSO0FEdUJJO0VBQ0ksZ0NBQUE7QUNwQlI7QUR1Qkk7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0FDckJSO0FEd0JJO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0FDdEJSO0FEMEJBO0VBQ0k7SUFDSSxrQ0FBQTtJQUNBLHNCQUFBO0VDdkJOO0FBQ0Y7QUQyQkE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUN6Qko7QUQyQkk7RUFDSSxrQkFBQTtFQUNBLDhCQUFBO0FDekJSO0FENEJJOztFQUVJLGFBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUMxQlI7QUQ2Qkk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUMzQlI7QUQrQkE7OztFQUdJLGtCQUFBO0VBQ0EscUNBQUE7QUM1Qko7QUQrQkE7RUFDSSxrQkFBQTtBQzVCSjtBRDhCSTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDNUJSO0FEK0JJO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBQzdCUjtBRGtDQTtFQUNJLHFDQUFBO0VBQ0EsY0FBQTtBQy9CSjtBRGtDQTtFQUNJLHlCQUFBO0FDL0JKO0FEa0NBO0VBQ0ksZ0JBQUE7QUMvQko7QURrQ0E7RUFDSSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQy9CSjtBRGtDQTtFQUNJLGlDQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQy9CSjtBRGtDQTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUMvQko7QURpQ0k7RUFDSSxjQUFBO0FDL0JSO0FEa0NJO0VBQ0kscUJBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7QUNoQ1I7QURtQ0k7RUFDSSxlQUFBO0FDakNSO0FEcUNBO0VBQ0kscUJBQUE7QUNsQ0o7QURxQ0E7RUFDSSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3RUFDSTtFQUVKLFVBQUE7QUNwQ0o7QURzQ0k7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNwQ1I7QUR1Q0k7RUFDSSwwQkFBQTtBQ3JDUjtBRHdDSTtFQUNJLDRCQUFBO0FDdENSO0FEMENBO0VBQ0ksc0NBQUE7RUFDQSxtQkFBQTtBQ3ZDSjtBRHlDSTtFQUNJLGVBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNkNBQUE7QUN2Q1I7QUQwQ0k7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7QUN4Q1I7QUQwQ1E7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDeENaO0FEMkNRO0VBQ0kscUJBQUE7QUN6Q1o7QUQ4Q0E7RUFDSSw4QkFBQTtBQzNDSjtBRGdESTtFQUNJLDRCQUFBO0FDN0NSO0FEZ0RJOztFQUVJLHFCQUFBO0VBQ0EsaUJBQUE7QUM5Q1I7QURpREk7RUFDSSxxQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsdUNBQUE7RUFDQSwwQ0FBQTtBQy9DUjtBRGlEUTtFQUNJLDZCQUFBO0FDL0NaO0FEa0RRO0VBQ0ksY0FBQTtBQ2hEWjtBRHFESTtFQUNJLHNDQUFBO0VBQ0EsbUJBQUE7QUNuRFI7QURxRFE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHdCQUFBO0VBQ0EsNkNBQUE7QUNuRFo7QURxRFk7RUFDSSw4QkFBQTtFQUNBLHFCQUFBO0FDbkRoQjtBRHNEWTtFQUNJLDBCQUFBO0VBQ0EsY0FBQTtBQ3BEaEI7QUR3RFE7RUFDSSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtBQ3REWjtBRHdEWTtFQUNJLGlCQUFBO0FDdERoQjtBRHdEZ0I7RUFDSSwwQkFBQTtFQUNBLGNBQUE7QUN0RHBCO0FENkRBO0VBQ0ksOEJBQUE7QUMxREo7QUQ0REk7RUFDSSx1Q0FBQTtFQUNBLHdDQUFBO0FDMURSO0FEOERBOzs7RUFHSSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkNBQUE7RUFDQSx5QkFBQTtBQzNESjtBRDhEQTtFQUNJLG1CQUFBO0FDM0RKO0FEOERBO0VBQ0ksbUJBQUE7QUMzREo7QUQ4REE7RUFDSSxtQkFBQTtBQzNESiIsImZpbGUiOiJzcmMvYXBwL21haW4vcmVwcmVzZW50YXRpdmUvb3JkZXJzL25ldy1vcmRlci9uYWNpb25hbC1zZWxsaW5nL2FkZC1vcmRlci9maW5pc2gtb3JkZXIvZmluaXNoLW9yZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZG8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcblxuICAgIC5idG4tcmVkbyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkJDNzA7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzMnB4O1xuICAgICAgICBtYXJnaW46IDAgMXJlbTtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gICAgLm5hdi1pdGVtIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogMC4yNXJlbSAwICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG4ubmF2LXRhYnMge1xuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB2YXIoLS1wcmltYXJ5KTtcbn1cblxuLm5hdi1pdGVtOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgIG1hcmdpbjogMHB4IDVweDtcbn1cblxuLm5hdi1saW5rLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbn1cblxuLm5hdi1saW5rIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBGMEYwO1xuICAgIGNvbG9yOiAjMzMzMzMzICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiB2YXIoLS1zdWItdGV4dCk7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gICAgdGFibGUge1xuXG4gICAgICAgIHNwYW4sXG4gICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmxhYmVsIHtcbiAgICBjb2xvcjogIzZjNzU3ZCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tc3ViLXRleHQpO1xuICAgIG1hcmdpbi1ib3R0b206IDJweDtcbn1cblxudGFibGUge1xuICAgIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG4gICAgYm9yZGVyLXNwYWNpbmc6IDJweDtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuXG4gICAgdGhlYWQgdGgge1xuICAgICAgICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0QzRUNGRjtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1zdWItdGV4dCk7XG4gICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgdGJvZHkgdGQge1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTFweCAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGOEY4Rjg7XG4gICAgfVxuXG4gICAgc3BhbixcbiAgICBsYWJlbCB7XG4gICAgICAgIG1heC13aWR0aDogMTUwcHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gICAgICAgIC5pdGVtIHtcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLml0ZW0ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIC5pbWctdGh1bWJuYWlsIHtcbiAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmRlc2Mge1xuICAgICAgICAgICAgc3BhbjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tbGluayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAudGF4ZXMge1xuICAgICAgICBwYWRkaW5nOiAwcmVtIDAuNXJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEycHg7XG5cbiAgICAgICAgLmZvcm0tZ3JvdXAge1xuICAgICAgICAgICAgd2lkdGg6IDI1JTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnRheGVzMSB7XG4gICAgICAgIG1pbi13aWR0aDogMTcwcHg7XG4gICAgfVxuXG4gICAgLnRheGVzMiB7XG4gICAgICAgIG1pbi13aWR0aDogMjgwcHg7XG4gICAgfVxufVxuXG4ubmF2aWdhdGlvbiB7XG5cbiAgICAubmF2LXRhYnMge1xuICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI0YwRjBGMDtcbiAgICB9XG5cbiAgICAubmF2LWxpbmsuYWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcbiAgICAgICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAubmF2LWxpbmsge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBGMEYwO1xuICAgICAgICBjb2xvcjogIzMzMzMzMyAhaW1wb3J0YW50O1xuICAgICAgICBmb250LXNpemU6IHZhcigtLXN1Yi10ZXh0KTtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gICAgLmZpbHRlcnMge1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydCAhaW1wb3J0YW50O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbn1cblxuXG4uZmlsdGVycyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW46IDFyZW0gMHJlbTtcblxuICAgIC5sYWJlbCB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1kZWZhdWx0LXRleHQpO1xuICAgIH1cblxuICAgIC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlLFxuICAgIC5jdXN0b20tY29udHJvbC1sYWJlbDo6YWZ0ZXIge1xuICAgICAgICB3aWR0aDogMC45cmVtO1xuICAgICAgICBoZWlnaHQ6IDAuOXJlbTtcbiAgICAgICAgdG9wOiAuMjdyZW07XG4gICAgICAgIGxlZnQ6IC0xLjNyZW07XG4gICAgfVxuXG4gICAgLmN1c3RvbS1jb250cm9sLWxhYmVsIHtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICB9XG59XG5cbi5jdXN0b20tc2VsZWN0LFxuLmZvcm0tY29udHJvbCxcbnRleHRhcmVhLmZvcm0tY29udHJvbCB7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tc3ViLXRleHQpICFpbXBvcnRhbnQ7XG59XG5cbi5zZWFyY2gge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIC5mYS1zZWFyY2gge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMjlweDtcbiAgICAgICAgbGVmdDogMTNweDtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS10aXRsZSk7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB9XG5cbiAgICAuZm9ybS1jb250cm9sIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gICAgfVxuXG59XG5cbiNmcmVpZ2h0SGVscCB7XG4gICAgZm9udC1zaXplOiB2YXIoLS1zdWItdGV4dCkgIWltcG9ydGFudDtcbiAgICBjb2xvcjogI0VGN0YwMDtcbn1cblxuLmN1c3RvbS1yYWRpbyAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gICAgYm9yZGVyOiAjY2VkNGRhIHNvbGlkIDFweDtcbn1cblxuLmN1c3RvbS1yYWRpbyAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Zm9jdXN+LmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5jdXN0b20tcmFkaW8gLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWR+LmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XG4gICAgYm9yZGVyOiAzcHggc29saWQgI2ZmZjtcbiAgICBwYWRkaW5nOiA2cHg7XG59XG5cbi5jdXN0b20tcmFkaW8gLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWR+LmN1c3RvbS1jb250cm9sLWxhYmVsOjphZnRlciB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBhZGRpbmc6IDhweDtcbn1cblxuLmZyZWlnaHQtaW5mbyB7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDNFQ0ZGO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBtaW4taGVpZ2h0OiAxMDVweDtcblxuICAgIHNwYW4ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICBzcGFuOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICBmb250LXNpemU6IHZhcigtLXN1Yi10ZXh0KTtcbiAgICAgICAgZm9udC1mYW1pbHk6IENvcmVSaGlubzY1Qm9sZDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICB9XG5cbiAgICBzcGFuOmxhc3QtY2hpbGQge1xuICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgfVxufVxuXG4uYWRkcmVzcy10aXRsZSB7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xufVxuXG4uY2xpZW50IHtcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3gtc2hhZG93OlxuICAgICAgICAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjExKSxcbiAgICAgICAgMCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMSk7XG4gICAgei1pbmRleDogMTtcblxuICAgIHNwYW4ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICB9XG5cbiAgICBzcGFuOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1zdWItdGV4dCk7XG4gICAgfVxuXG4gICAgc3BhbjpudGgtY2hpbGQoMikge1xuICAgICAgICBmb250LWZhbWlseTogQ29yZVJoaW5vNjVCb2xkO1xuICAgIH1cbn1cblxuLmFkZHJlc3MtY2FyZCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIyNSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcblxuICAgIC5oZWFkIHtcbiAgICAgICAgcGFkZGluZzogMC41cmVtO1xuICAgICAgICBmb250LXNpemU6IHZhcigtLXN1Yi10ZXh0KTtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIyNSk7XG4gICAgfVxuXG4gICAgLmJvZHkge1xuICAgICAgICBtaW4taGVpZ2h0OiA4MHB4O1xuICAgICAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xuXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuN2VtO1xuICAgICAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICAgIH1cblxuICAgICAgICBzcGFuLmNucGoge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uc2VnbWVudCB7XG4gICAgZm9udC1zaXplOiB2YXIoLS1kZWZhdWx0LXRleHQpO1xufVxuXG4uZmluYW5jaWFsIHtcblxuICAgIGxhYmVsOm5vdCguY3VzdG9tLWNvbnRyb2wtbGFiZWwpIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjZyZW0gIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICBzbWFsbCxcbiAgICAuZm9ybS1jb250cm9sIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICB9XG5cbiAgICAuYnRuLmNhbGVuZGFyIHtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1zdWItdGV4dCkgIWltcG9ydGFudDtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjY2VkNGRhO1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA4cHggIWltcG9ydGFudDtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgZW0ge1xuICAgICAgICAgICAgY29sb3I6ICNjN2M3Yzc7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIC5jaGFyZ2UtYWRkcmVzcyB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxN3B4O1xuXG4gICAgICAgIC5jaGFyZ2UtcGF5bWVudC1oZWFkIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgcGFkZGluZzogMC4yNXJlbSAwLjc1cmVtO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xuXG4gICAgICAgICAgICBzcGFuOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWRlZmF1bHQtdGV4dCk7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzcGFuOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tc3ViLXRleHQpO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmNoYXJnZS1wYXltZW50LWJvZHkge1xuICAgICAgICAgICAgcGFkZGluZzogMC41cmVtIDAuNzVyZW07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTdweDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxN3B4O1xuXG4gICAgICAgICAgICAuZm9ybS1ncm91cCB7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEycHg7XG5cbiAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1zdWItdGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmNvbWVudHMge1xuICAgIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcblxuICAgIC5uYXYtbGluayB7XG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEycHggIWltcG9ydGFudDtcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEycHggIWltcG9ydGFudDtcbiAgICB9XG59XG5cbi5idG4tZHJhZnQsXG4uYnRuLWJ1ZGdldCxcbi5idG4tZmluaXNoIHtcbiAgICBmb250LXNpemU6IHZhcigtLWRlZmF1bHQtdGV4dCk7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRTVFNUU1O1xuICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmJ0bi1kcmFmdCB7XG4gICAgYmFja2dyb3VuZDogIzMzMzMzMztcbn1cblxuLmJ0bi1idWRnZXQge1xuICAgIGJhY2tncm91bmQ6ICNGQ0E3NDY7XG59XG5cbi5idG4tZmluaXNoIHtcbiAgICBiYWNrZ3JvdW5kOiAjNERCRjY5O1xufSIsIi5yZWRvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuLnJlZG8gLmJ0bi1yZWRvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQkM3MDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDMycHg7XG4gIG1hcmdpbjogMCAxcmVtO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjVweCkge1xuICAubmF2LWl0ZW0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMC4yNXJlbSAwICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5uYXYtdGFicyB7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB2YXIoLS1wcmltYXJ5KTtcbn1cblxuLm5hdi1pdGVtOm5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW46IDBweCA1cHg7XG59XG5cbi5uYXYtbGluay5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbn1cblxuLm5hdi1saW5rIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YwRjBGMDtcbiAgY29sb3I6ICMzMzMzMzMgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiB2YXIoLS1zdWItdGV4dCk7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gIHRhYmxlIHNwYW4sXG50YWJsZSBsYWJlbCB7XG4gICAgdGV4dC1hbGlnbjogdW5zZXQgIWltcG9ydGFudDtcbiAgfVxufVxubGFiZWwge1xuICBjb2xvcjogIzZjNzU3ZCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IHZhcigtLXN1Yi10ZXh0KTtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xufVxuXG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG4gIGJvcmRlci1zcGFjaW5nOiAycHg7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG50YWJsZSB0aGVhZCB0aCB7XG4gIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDNFQ0ZGO1xuICBmb250LXNpemU6IHZhcigtLXN1Yi10ZXh0KTtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbnRhYmxlIHRib2R5IHRkIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDExcHggIWltcG9ydGFudDtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGOEY4O1xufVxudGFibGUgc3BhbixcbnRhYmxlIGxhYmVsIHtcbiAgbWF4LXdpZHRoOiAxNTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjVweCkge1xuICB0YWJsZSAuaXRlbSB7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG59XG50YWJsZSAuaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG50YWJsZSAuaXRlbSAuaW1nLXRodW1ibmFpbCB7XG4gIHdpZHRoOiA4MHB4O1xufVxudGFibGUgLml0ZW0gLmRlc2Mgc3BhbjpsYXN0LWNoaWxkIHtcbiAgY29sb3I6IHZhcigtLWxpbmspO1xufVxudGFibGUgLnRheGVzIHtcbiAgcGFkZGluZzogMHJlbSAwLjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxMnB4O1xufVxudGFibGUgLnRheGVzIC5mb3JtLWdyb3VwIHtcbiAgd2lkdGg6IDI1JTtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtICFpbXBvcnRhbnQ7XG59XG50YWJsZSAudGF4ZXMxIHtcbiAgbWluLXdpZHRoOiAxNzBweDtcbn1cbnRhYmxlIC50YXhlczIge1xuICBtaW4td2lkdGg6IDI4MHB4O1xufVxuXG4ubmF2aWdhdGlvbiAubmF2LXRhYnMge1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI0YwRjBGMDtcbn1cbi5uYXZpZ2F0aW9uIC5uYXYtbGluay5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xufVxuLm5hdmlnYXRpb24gLm5hdi1saW5rIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YwRjBGMDtcbiAgY29sb3I6ICMzMzMzMzMgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiB2YXIoLS1zdWItdGV4dCk7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gIC5maWx0ZXJzIHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydCAhaW1wb3J0YW50O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cbi5maWx0ZXJzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDFyZW0gMHJlbTtcbn1cbi5maWx0ZXJzIC5sYWJlbCB7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgZm9udC1zaXplOiB2YXIoLS1kZWZhdWx0LXRleHQpO1xufVxuLmZpbHRlcnMgLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUsXG4uZmlsdGVycyAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmFmdGVyIHtcbiAgd2lkdGg6IDAuOXJlbTtcbiAgaGVpZ2h0OiAwLjlyZW07XG4gIHRvcDogMC4yN3JlbTtcbiAgbGVmdDogLTEuM3JlbTtcbn1cbi5maWx0ZXJzIC5jdXN0b20tY29udHJvbC1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG59XG5cbi5jdXN0b20tc2VsZWN0LFxuLmZvcm0tY29udHJvbCxcbnRleHRhcmVhLmZvcm0tY29udHJvbCB7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZm9udC1zaXplOiB2YXIoLS1zdWItdGV4dCkgIWltcG9ydGFudDtcbn1cblxuLnNlYXJjaCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zZWFyY2ggLmZhLXNlYXJjaCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyOXB4O1xuICBsZWZ0OiAxM3B4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXRpdGxlKTtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLnNlYXJjaCAuZm9ybS1jb250cm9sIHtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG59XG5cbiNmcmVpZ2h0SGVscCB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc3ViLXRleHQpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjRUY3RjAwO1xufVxuXG4uY3VzdG9tLXJhZGlvIC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgYm9yZGVyOiAjY2VkNGRhIHNvbGlkIDFweDtcbn1cblxuLmN1c3RvbS1yYWRpbyAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Zm9jdXMgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5jdXN0b20tcmFkaW8gLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XG4gIGJvcmRlcjogM3B4IHNvbGlkICNmZmY7XG4gIHBhZGRpbmc6IDZweDtcbn1cblxuLmN1c3RvbS1yYWRpbyAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBhZGRpbmc6IDhweDtcbn1cblxuLmZyZWlnaHQtaW5mbyB7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNEM0VDRkY7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgbWluLWhlaWdodDogMTA1cHg7XG59XG4uZnJlaWdodC1pbmZvIHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5mcmVpZ2h0LWluZm8gc3BhbjpmaXJzdC1jaGlsZCB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiB2YXIoLS1zdWItdGV4dCk7XG4gIGZvbnQtZmFtaWx5OiBDb3JlUmhpbm82NUJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG4uZnJlaWdodC1pbmZvIHNwYW46bGFzdC1jaGlsZCB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuLmFkZHJlc3MtdGl0bGUge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG59XG5cbi5jbGllbnQge1xuICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjExKSwgMCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMSk7XG4gIHotaW5kZXg6IDE7XG59XG4uY2xpZW50IHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cbi5jbGllbnQgc3BhbjpmaXJzdC1jaGlsZCB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc3ViLXRleHQpO1xufVxuLmNsaWVudCBzcGFuOm50aC1jaGlsZCgyKSB7XG4gIGZvbnQtZmFtaWx5OiBDb3JlUmhpbm82NUJvbGQ7XG59XG5cbi5hZGRyZXNzLWNhcmQge1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMjI1KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5hZGRyZXNzLWNhcmQgLmhlYWQge1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGZvbnQtc2l6ZTogdmFyKC0tc3ViLXRleHQpO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMjI1KTtcbn1cbi5hZGRyZXNzLWNhcmQgLmJvZHkge1xuICBtaW4taGVpZ2h0OiA4MHB4O1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xufVxuLmFkZHJlc3MtY2FyZCAuYm9keSBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMC43ZW07XG4gIGNvbG9yOiAjMzMzMzMzO1xufVxuLmFkZHJlc3MtY2FyZCAuYm9keSBzcGFuLmNucGoge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG59XG5cbi5zZWdtZW50IHtcbiAgZm9udC1zaXplOiB2YXIoLS1kZWZhdWx0LXRleHQpO1xufVxuXG4uZmluYW5jaWFsIGxhYmVsOm5vdCguY3VzdG9tLWNvbnRyb2wtbGFiZWwpIHtcbiAgZm9udC1zaXplOiAwLjZyZW0gIWltcG9ydGFudDtcbn1cbi5maW5hbmNpYWwgc21hbGwsXG4uZmluYW5jaWFsIC5mb3JtLWNvbnRyb2wge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogMC43cmVtO1xufVxuLmZpbmFuY2lhbCAuYnRuLmNhbGVuZGFyIHtcbiAgZm9udC1zaXplOiB2YXIoLS1zdWItdGV4dCkgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjY2VkNGRhO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA4cHggIWltcG9ydGFudDtcbn1cbi5maW5hbmNpYWwgLmJ0bi5jYWxlbmRhcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLmZpbmFuY2lhbCAuYnRuLmNhbGVuZGFyIGVtIHtcbiAgY29sb3I6ICNjN2M3Yzc7XG59XG4uZmluYW5jaWFsIC5jaGFyZ2UtYWRkcmVzcyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xuICBib3JkZXItcmFkaXVzOiAxN3B4O1xufVxuLmZpbmFuY2lhbCAuY2hhcmdlLWFkZHJlc3MgLmNoYXJnZS1wYXltZW50LWhlYWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDAuMjVyZW0gMC43NXJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xufVxuLmZpbmFuY2lhbCAuY2hhcmdlLWFkZHJlc3MgLmNoYXJnZS1wYXltZW50LWhlYWQgc3BhbjpmaXJzdC1jaGlsZCB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZGVmYXVsdC10ZXh0KTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xufVxuLmZpbmFuY2lhbCAuY2hhcmdlLWFkZHJlc3MgLmNoYXJnZS1wYXltZW50LWhlYWQgc3BhbjpsYXN0LWNoaWxkIHtcbiAgZm9udC1zaXplOiB2YXIoLS1zdWItdGV4dCk7XG4gIGNvbG9yOiAjMzMzMzMzO1xufVxuLmZpbmFuY2lhbCAuY2hhcmdlLWFkZHJlc3MgLmNoYXJnZS1wYXltZW50LWJvZHkge1xuICBwYWRkaW5nOiAwLjVyZW0gMC43NXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTdweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE3cHg7XG59XG4uZmluYW5jaWFsIC5jaGFyZ2UtYWRkcmVzcyAuY2hhcmdlLXBheW1lbnQtYm9keSAuZm9ybS1ncm91cCB7XG4gIGxpbmUtaGVpZ2h0OiAxMnB4O1xufVxuLmZpbmFuY2lhbCAuY2hhcmdlLWFkZHJlc3MgLmNoYXJnZS1wYXltZW50LWJvZHkgLmZvcm0tZ3JvdXAgc3BhbiB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc3ViLXRleHQpO1xuICBjb2xvcjogIzMzMzMzMztcbn1cblxuLmNvbWVudHMge1xuICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XG59XG4uY29tZW50cyAubmF2LWxpbmsge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5idG4tZHJhZnQsXG4uYnRuLWJ1ZGdldCxcbi5idG4tZmluaXNoIHtcbiAgZm9udC1zaXplOiB2YXIoLS1kZWZhdWx0LXRleHQpO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0U1RTVFNTtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmJ0bi1kcmFmdCB7XG4gIGJhY2tncm91bmQ6ICMzMzMzMzM7XG59XG5cbi5idG4tYnVkZ2V0IHtcbiAgYmFja2dyb3VuZDogI0ZDQTc0Njtcbn1cblxuLmJ0bi1maW5pc2gge1xuICBiYWNrZ3JvdW5kOiAjNERCRjY5O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/main/representative/orders/new-order/nacional-selling/add-order/finish-order/finish-order.component.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/main/representative/orders/new-order/nacional-selling/add-order/finish-order/finish-order.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: FinishOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinishOrderComponent", function() { return FinishOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_shared_functions_form_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/functions/form-functions */ "./src/shared/functions/form-functions.ts");




let FinishOrderComponent = class FinishOrderComponent {
    constructor() {
        this.taxes = true;
        this.descounts = true;
        this.unitCalc = true;
        this.freight = true;
        this.isTransporter = true;
        this.isForClient = false;
        this.isDelivery = true;
        this.isWithdraw = false;
        this.clients = ['ALIANCA NAVEGACAO E LOG.LTDA. (02.427.026/0012-07)', '...'];
        this.filterTypes = [
            { value: 'transportadora' },
            { value: 'cliente' }
        ];
        this.withdrawalTypes = [
            { value: 'entrega' },
            { value: 'retirada' }
        ];
        this.search = (text$) => text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(term => term === '' ? {} :
            this.clients.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10)));
        this.formatter = (result) => result.toUpperCase();
    }
    ngOnInit() { }
    regex(e) {
        const input = e.target;
        input.value = Object(src_shared_functions_form_functions__WEBPACK_IMPORTED_MODULE_3__["dateMask"])(input.value);
    }
    colectType(selectedValue) {
        console.log('value is ', selectedValue);
        if (selectedValue === 'transportadora') {
            this.isTransporter = true;
            this.isForClient = false;
        }
        if (selectedValue === 'cliente') {
            this.isForClient = true;
            this.isTransporter = false;
        }
    }
    withdrawType(selectedValue) {
        console.log('value is ', selectedValue);
        if (selectedValue === 'entrega') {
            this.isDelivery = true;
            this.isWithdraw = false;
        }
        if (selectedValue === 'retirada') {
            this.isWithdraw = true;
            this.isDelivery = false;
        }
    }
};
FinishOrderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'elgin-finish-order',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./finish-order.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/representative/orders/new-order/nacional-selling/add-order/finish-order/finish-order.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./finish-order.component.scss */ "./src/app/main/representative/orders/new-order/nacional-selling/add-order/finish-order/finish-order.component.scss")).default]
    })
], FinishOrderComponent);



/***/ }),

/***/ "./src/app/main/representative/orders/new-order/nacional-selling/add-order/product-comparative/product-comparative.component.scss":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/main/representative/orders/new-order/nacional-selling/add-order/product-comparative/product-comparative.component.scss ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media (min-width: 1200px) {\n  .modal-xl {\n    max-width: 1340px;\n  }\n}\n.modal-backdrop {\n  background-color: #0063af;\n  opacity: 90% !important;\n}\n.modal-header {\n  padding: 1rem;\n  border: none;\n}\n.modal-header .close {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n.modal-header .close small {\n  margin: 0px 2px;\n  font-size: 13px;\n}\n.modal-header .close small:last-child {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 15px;\n  height: 15px;\n  border: 1px solid;\n  border-radius: 50%;\n}\n.modal-body {\n  padding: 0rem 3rem 1rem 3rem;\n}\n.modal-body .title {\n  text-align: center;\n  color: var(--link);\n}\n.modal-body .label {\n  margin-right: 1rem;\n  font-size: var(--default-text);\n}\n.modal-body .custom-control-label {\n  font-size: var(--default-text);\n}\n.modal-body table thead th:first-child div {\n  min-width: 180px;\n  max-width: 200px;\n}\n.modal-body table thead th:nth-child(2) .title {\n  background-color: #333333 !important;\n  color: #ffffff !important;\n}\n.modal-body table thead th .title {\n  display: block;\n  width: 100%;\n  background-color: #DDDDDD;\n  padding: 0.25rem;\n  font-size: var(--sub-text);\n  color: #333333;\n  text-align: center;\n}\n.modal-body table thead th .thumb {\n  display: flex;\n  align-items: center;\n  padding: 0.25rem;\n  min-width: 200px;\n}\n.modal-body table thead th .thumb img {\n  width: 50px;\n  margin-right: 1rem;\n}\n.modal-body table thead th .thumb span {\n  font-size: var(--sub-text);\n}\n.modal-body table tbody tr td:first-child {\n  max-width: 200px;\n  word-break: break-word;\n}\n.modal-body table tbody td {\n  font-size: var(--sub-text);\n  color: var(--primary);\n}\n.modal-footer {\n  justify-content: center !important;\n}\n.modal-footer .btn-close {\n  padding: 0.35rem 2rem;\n  border-radius: 32px;\n  background: var(--primary);\n  font-size: 14px;\n  color: #fff;\n  text-transform: uppercase;\n}\n.modal-footer .btn-close:focus {\n  box-shadow: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9yZXByZXNlbnRhdGl2ZS9vcmRlcnMvbmV3LW9yZGVyL25hY2lvbmFsLXNlbGxpbmcvYWRkLW9yZGVyL3Byb2R1Y3QtY29tcGFyYXRpdmUvQzpcXEVsZ2luVXAzXFxmcm9udC1lbGdpbi0zLjBcXEZST05ULUVMR0lOVVAtMy4wL3NyY1xcYXBwXFxtYWluXFxyZXByZXNlbnRhdGl2ZVxcb3JkZXJzXFxuZXctb3JkZXJcXG5hY2lvbmFsLXNlbGxpbmdcXGFkZC1vcmRlclxccHJvZHVjdC1jb21wYXJhdGl2ZVxccHJvZHVjdC1jb21wYXJhdGl2ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9yZXByZXNlbnRhdGl2ZS9vcmRlcnMvbmV3LW9yZGVyL25hY2lvbmFsLXNlbGxpbmcvYWRkLW9yZGVyL3Byb2R1Y3QtY29tcGFyYXRpdmUvcHJvZHVjdC1jb21wYXJhdGl2ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0lBQ0ksaUJBQUE7RUNDTjtBQUNGO0FERUE7RUFDSSx5QkFBQTtFQUNBLHVCQUFBO0FDQUo7QURHQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FDQUo7QURFSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNBUjtBREVRO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUNBWjtBREdRO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNEWjtBRE1BO0VBQ0ksNEJBQUE7QUNISjtBREtJO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBQ0hSO0FETUk7RUFDSSxrQkFBQTtFQUNBLDhCQUFBO0FDSlI7QURPSTtFQUNJLDhCQUFBO0FDTFI7QURhZ0I7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FDWHBCO0FEZ0JnQjtFQUNJLG9DQUFBO0VBQ0EseUJBQUE7QUNkcEI7QURvQmdCO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNsQnBCO0FEcUJnQjtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNuQnBCO0FEcUJvQjtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQ25CeEI7QURzQm9CO0VBQ0ksMEJBQUE7QUNwQnhCO0FENEJZO0VBQ0ksZ0JBQUE7RUFDQSxzQkFBQTtBQzFCaEI7QUQ2Qlk7RUFDSSwwQkFBQTtFQUNBLHFCQUFBO0FDM0JoQjtBRGlDQTtFQUNJLGtDQUFBO0FDOUJKO0FEZ0NJO0VBQ0kscUJBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQzlCUjtBRGdDUTtFQUNJLDJCQUFBO0FDOUJaIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9yZXByZXNlbnRhdGl2ZS9vcmRlcnMvbmV3LW9yZGVyL25hY2lvbmFsLXNlbGxpbmcvYWRkLW9yZGVyL3Byb2R1Y3QtY29tcGFyYXRpdmUvcHJvZHVjdC1jb21wYXJhdGl2ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgICAubW9kYWwteGwge1xuICAgICAgICBtYXgtd2lkdGg6IDEzNDBweDtcbiAgICB9XG59XG5cbi5tb2RhbC1iYWNrZHJvcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjNhZjtcbiAgICBvcGFjaXR5OiA5MCUgIWltcG9ydGFudDtcbn1cblxuLm1vZGFsLWhlYWRlciB7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBib3JkZXI6IG5vbmU7XG5cbiAgICAuY2xvc2Uge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgc21hbGwge1xuICAgICAgICAgICAgbWFyZ2luOiAwcHggMnB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICB9XG5cbiAgICAgICAgc21hbGw6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLm1vZGFsLWJvZHkge1xuICAgIHBhZGRpbmc6IDByZW0gM3JlbSAxcmVtIDNyZW07XG5cbiAgICAudGl0bGUge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1saW5rKTtcbiAgICB9XG5cbiAgICAubGFiZWwge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZGVmYXVsdC10ZXh0KTtcbiAgICB9XG5cbiAgICAuY3VzdG9tLWNvbnRyb2wtbGFiZWwge1xuICAgICAgICBmb250LXNpemU6IHZhcigtLWRlZmF1bHQtdGV4dCk7XG4gICAgfVxuXG4gICAgdGFibGUge1xuXG4gICAgICAgIHRoZWFkIHtcblxuICAgICAgICAgICAgdGg6Zmlyc3QtY2hpbGQgeyBcbiAgICAgICAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDE4MHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGg6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoIHtcbiAgICAgICAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNEREREREQ7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuMjVyZW07XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tc3ViLXRleHQpO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC50aHVtYiB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuMjVyZW07XG4gICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMjAwcHg7XG5cbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLXN1Yi10ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRib2R5IHtcblxuICAgICAgICAgICAgdHIgdGQ6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgICAgICAgICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tc3ViLXRleHQpO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLm1vZGFsLWZvb3RlciB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcblxuICAgIC5idG4tY2xvc2Uge1xuICAgICAgICBwYWRkaW5nOiAwLjM1cmVtIDJyZW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMycHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxufSIsIkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLm1vZGFsLXhsIHtcbiAgICBtYXgtd2lkdGg6IDEzNDBweDtcbiAgfVxufVxuLm1vZGFsLWJhY2tkcm9wIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjNhZjtcbiAgb3BhY2l0eTogOTAlICFpbXBvcnRhbnQ7XG59XG5cbi5tb2RhbC1oZWFkZXIge1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3JkZXI6IG5vbmU7XG59XG4ubW9kYWwtaGVhZGVyIC5jbG9zZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5tb2RhbC1oZWFkZXIgLmNsb3NlIHNtYWxsIHtcbiAgbWFyZ2luOiAwcHggMnB4O1xuICBmb250LXNpemU6IDEzcHg7XG59XG4ubW9kYWwtaGVhZGVyIC5jbG9zZSBzbWFsbDpsYXN0LWNoaWxkIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5tb2RhbC1ib2R5IHtcbiAgcGFkZGluZzogMHJlbSAzcmVtIDFyZW0gM3JlbTtcbn1cbi5tb2RhbC1ib2R5IC50aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLWxpbmspO1xufVxuLm1vZGFsLWJvZHkgLmxhYmVsIHtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICBmb250LXNpemU6IHZhcigtLWRlZmF1bHQtdGV4dCk7XG59XG4ubW9kYWwtYm9keSAuY3VzdG9tLWNvbnRyb2wtbGFiZWwge1xuICBmb250LXNpemU6IHZhcigtLWRlZmF1bHQtdGV4dCk7XG59XG4ubW9kYWwtYm9keSB0YWJsZSB0aGVhZCB0aDpmaXJzdC1jaGlsZCBkaXYge1xuICBtaW4td2lkdGg6IDE4MHB4O1xuICBtYXgtd2lkdGg6IDIwMHB4O1xufVxuLm1vZGFsLWJvZHkgdGFibGUgdGhlYWQgdGg6bnRoLWNoaWxkKDIpIC50aXRsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzMgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbn1cbi5tb2RhbC1ib2R5IHRhYmxlIHRoZWFkIHRoIC50aXRsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RERERERDtcbiAgcGFkZGluZzogMC4yNXJlbTtcbiAgZm9udC1zaXplOiB2YXIoLS1zdWItdGV4dCk7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubW9kYWwtYm9keSB0YWJsZSB0aGVhZCB0aCAudGh1bWIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwLjI1cmVtO1xuICBtaW4td2lkdGg6IDIwMHB4O1xufVxuLm1vZGFsLWJvZHkgdGFibGUgdGhlYWQgdGggLnRodW1iIGltZyB7XG4gIHdpZHRoOiA1MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG59XG4ubW9kYWwtYm9keSB0YWJsZSB0aGVhZCB0aCAudGh1bWIgc3BhbiB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc3ViLXRleHQpO1xufVxuLm1vZGFsLWJvZHkgdGFibGUgdGJvZHkgdHIgdGQ6Zmlyc3QtY2hpbGQge1xuICBtYXgtd2lkdGg6IDIwMHB4O1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xufVxuLm1vZGFsLWJvZHkgdGFibGUgdGJvZHkgdGQge1xuICBmb250LXNpemU6IHZhcigtLXN1Yi10ZXh0KTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xufVxuXG4ubW9kYWwtZm9vdGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbn1cbi5tb2RhbC1mb290ZXIgLmJ0bi1jbG9zZSB7XG4gIHBhZGRpbmc6IDAuMzVyZW0gMnJlbTtcbiAgYm9yZGVyLXJhZGl1czogMzJweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4ubW9kYWwtZm9vdGVyIC5idG4tY2xvc2U6Zm9jdXMge1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/main/representative/orders/new-order/nacional-selling/add-order/product-comparative/product-comparative.component.ts":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/main/representative/orders/new-order/nacional-selling/add-order/product-comparative/product-comparative.component.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: ProductComparativeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComparativeComponent", function() { return ProductComparativeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");



let ProductComparativeComponent = class ProductComparativeComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
    }
    ngOnInit() { console.log(this.item); }
};
ProductComparativeComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProductComparativeComponent.prototype, "item", void 0);
ProductComparativeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./product-comparative.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/representative/orders/new-order/nacional-selling/add-order/product-comparative/product-comparative.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./product-comparative.component.scss */ "./src/app/main/representative/orders/new-order/nacional-selling/add-order/product-comparative/product-comparative.component.scss")).default]
    })
], ProductComparativeComponent);



/***/ }),

/***/ "./src/app/main/representative/orders/new-order/nacional-selling/add-order/products.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/main/representative/orders/new-order/nacional-selling/add-order/products.ts ***!
  \*********************************************************************************************/
/*! exports provided: elginProducts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elginProducts", function() { return elginProducts; });
const elginProducts = [
    {
        linha: 'ar-condicionado',
        id: 0,
        produtosTipo: [
            {
                tipo: 'cortina de ar',
                thumbnail: '../../../../../../../assets/artefacts/cortinadear.png',
                produtos: [
                    {
                        cod: '45HTQE18B2N1',
                        desc: 'UN.EXT.HW INVERTER TREND,18K,QF, 220V,1PH',
                        estoque: '5 - EI06 - Elgin Ind.Fabrica Manaus',
                        prazo: 'pronta entrega',
                        imagem: '../../../../../../../assets/artefacts/splithighwall.png',
                    },
                    {
                        cod: '45HTQE18B2N2',
                        desc: 'UN.EXT.HW INVERTER TREND,18K,QF, 220V,1PH',
                        estoque: '5 - EI06 - Elgin Ind.Fabrica Manaus',
                        prazo: 'pronta entrega',
                        imagem: '../../../../../../../assets/artefacts/splithighwall.png',
                    }
                ]
            },
            {
                tipo: 'multi split inverter',
                thumbnail: '../../../../../../../assets/artefacts/multispliter.png',
                produtos: [
                    {
                        cod: '45HTQE18B2N3',
                        desc: 'UN.EXT.HW INVERTER TREND,18K,QF, 220V,1PH',
                        estoque: '5 - EI06 - Elgin Ind.Fabrica Manaus',
                        prazo: 'pronta entrega',
                        imagem: '../../../../../../../assets/artefacts/splithighwall.png',
                    },
                    {
                        cod: '45HTQE18B2N4',
                        desc: 'UN.EXT.HW INVERTER TREND,18K,QF, 220V,1PH',
                        estoque: '5 - EI06 - Elgin Ind.Fabrica Manaus',
                        prazo: 'em análise',
                        imagem: '../../../../../../../assets/artefacts/splithighwall.png',
                    }
                ]
            },
            {
                tipo: 'portátil',
                thumbnail: '../../../../../../../assets/artefacts/portatil.png',
                produtos: [
                    {
                        cod: '45HTQE18B2N5',
                        desc: 'UN.EXT.HW INVERTER TREND,18K,QF, 220V,1PH',
                        estoque: '5 - EI06 - Elgin Ind.Fabrica Manaus',
                        prazo: 'pronta entrega',
                        imagem: '../../../../../../../assets/artefacts/splithighwall.png',
                    },
                    {
                        cod: '45HTQE18B2N6',
                        desc: 'UN.EXT.HW INVERTER TREND,18K,QF, 220V,1PH',
                        estoque: '5 - EI06 - Elgin Ind.Fabrica Manaus',
                        prazo: 'pronta entrega',
                        imagem: '../../../../../../../assets/artefacts/splithighwall.png',
                    }
                ]
            },
            {
                tipo: 'split high wall',
                thumbnail: '../../../../../../../assets/artefacts/splithighwall.png',
                produtos: [
                    {
                        cod: '45HTQE18B2N7',
                        desc: 'UN.EXT.HW INVERTER TREND,18K,QF, 220V,1PH',
                        estoque: '5 - EI06 - Elgin Ind.Fabrica Manaus',
                        prazo: 'pronta entrega',
                        imagem: '../../../../../../../assets/artefacts/splithighwall.png',
                    },
                    {
                        cod: '45HTQE18B2N8',
                        desc: 'UN.EXT.HW INVERTER TREND,18K,QF, 220V,1PH',
                        estoque: '5 - EI06 - Elgin Ind.Fabrica Manaus',
                        prazo: 'pronta entrega',
                        imagem: '../../../../../../../assets/artefacts/splithighwall.png',
                    }
                ]
            },
            {
                tipo: 'split cassete',
                thumbnail: '../../../../../../../assets/artefacts/splitcassete.png',
                produtos: [
                    {
                        cod: '45HTQE18B2N9',
                        desc: 'UN.EXT.HW INVERTER TREND,18K,QF, 220V,1PH',
                        estoque: '5 - EI06 - Elgin Ind.Fabrica Manaus',
                        prazo: 'em análise',
                        imagem: '../../../../../../../assets/artefacts/splithighwall.png',
                    },
                    {
                        cod: '45HTQE18B210',
                        desc: 'UN.EXT.HW INVERTER TREND,18K,QF, 220V,1PH',
                        estoque: '5 - EI06 - Elgin Ind.Fabrica Manaus',
                        prazo: 'em análise',
                        imagem: '../../../../../../../assets/artefacts/splithighwall.png',
                    }
                ]
            },
            {
                tipo: 'split piso teto',
                thumbnail: '../../../../../../../assets/artefacts/splitpisoteto.png',
                produtos: [
                    {
                        cod: '45HTQE18B211',
                        desc: 'UN.EXT.HW INVERTER TREND,18K,QF, 220V,1PH',
                        estoque: '5 - EI06 - Elgin Ind.Fabrica Manaus',
                        prazo: 'em análise',
                        imagem: '../../../../../../../assets/artefacts/splithighwall.png',
                    },
                    {
                        cod: '45HTQE18B212',
                        desc: 'UN.EXT.HW INVERTER TREND,18K,QF, 220V,1PH',
                        estoque: '5 - EI06 - Elgin Ind.Fabrica Manaus',
                        prazo: 'em análise',
                        imagem: '../../../../../../../assets/artefacts/splithighwall.png',
                    }
                ]
            },
            {
                tipo: 'humidificadores de ar',
                thumbnail: '../../../../../../../assets/artefacts/humidificador.png',
                produtos: [
                    {
                        cod: '45HTQE18B213',
                        desc: 'UN.EXT.HW INVERTER TREND,18K,QF, 220V,1PH',
                        estoque: '5 - EI06 - Elgin Ind.Fabrica Manaus',
                        prazo: 'pronta entrega',
                        imagem: '../../../../../../../assets/artefacts/splithighwall.png',
                    },
                    {
                        cod: '45HTQE18B214',
                        desc: 'UN.EXT.HW INVERTER TREND,18K,QF, 220V,1PH',
                        estoque: '5 - EI06 - Elgin Ind.Fabrica Manaus',
                        prazo: 'em análise',
                        imagem: '../../../../../../../assets/artefacts/splithighwall.png',
                    }
                ]
            },
            {
                tipo: 'climatizadores',
                thumbnail: '../../../../../../../assets/artefacts/climatizador.png',
                produtos: [
                    {
                        cod: '45HTQE18B215',
                        desc: 'UN.EXT.HW INVERTER TREND,18K,QF, 220V,1PH',
                        estoque: '5 - EI06 - Elgin Ind.Fabrica Manaus',
                        prazo: 'pronta entrega',
                        imagem: '../../../../../../../assets/artefacts/splithighwall.png',
                    },
                    {
                        cod: '45HTQE18B2NA',
                        desc: 'UN.EXT.HW INVERTER TREND,18K,QF, 220V,1PH',
                        estoque: '5 - EI06 - Elgin Ind.Fabrica Manaus',
                        prazo: 'pronta entrega',
                        imagem: '../../../../../../../assets/artefacts/splithighwall.png',
                    }
                ]
            }
        ]
    },
    {
        linha: 'automação',
        id: 1,
        produtosTipo: [
            {
                tipo: 'cortina de ar',
                thumbnail: '../../../../../../../assets/artefacts/cortinadear.png',
                produtos: [
                    {
                        cod: '45HTQE18B2N1',
                        desc: 'UN.EXT.HW INVERTER TREND,18K,QF, 220V,1PH',
                        estoque: '5 - EI06 - Elgin Ind.Fabrica Manaus',
                        prazo: 'pronta entrega',
                        imagem: '../../../../../../../assets/artefacts/splithighwall.png',
                    },
                    {
                        cod: '45HTQE18B2N2',
                        desc: 'UN.EXT.HW INVERTER TREND,18K,QF, 220V,1PH',
                        estoque: '5 - EI06 - Elgin Ind.Fabrica Manaus',
                        prazo: 'pronta entrega',
                        imagem: '../../../../../../../assets/artefacts/splithighwall.png',
                    }
                ]
            }
        ]
    },
    {
        linha: 'costura',
        id: 2,
        produtosTipo: {
            tipo: 'cortina de ar',
            thumbnail: '../../../../../../../assets/artefacts/cortinadear.png',
            produtos: [
                {
                    cod: '45HTQE18B2N1',
                    desc: 'UN.EXT.HW INVERTER TREND,18K,QF, 220V,1PH',
                    estoque: '5 - EI06 - Elgin Ind.Fabrica Manaus',
                    prazo: 'pronta entrega',
                    imagem: '../../../../../../../assets/artefacts/splithighwall.png',
                },
                {
                    cod: '45HTQE18B2N2',
                    desc: 'UN.EXT.HW INVERTER TREND,18K,QF, 220V,1PH',
                    estoque: '5 - EI06 - Elgin Ind.Fabrica Manaus',
                    prazo: 'pronta entrega',
                    imagem: '../../../../../../../assets/artefacts/splithighwall.png',
                }
            ]
        }
    },
    {
        linha: 'energia solar',
        id: 3,
        produtosTipo: {
            tipo: 'cortina de ar',
            thumbnail: '../../../../../../../assets/artefacts/cortinadear.png',
            produtos: [
                {
                    cod: '45HTQE18B2N1',
                    desc: 'UN.EXT.HW INVERTER TREND,18K,QF, 220V,1PH',
                    estoque: '5 - EI06 - Elgin Ind.Fabrica Manaus',
                    prazo: 'pronta entrega',
                    imagem: '../../../../../../../assets/artefacts/splithighwall.png',
                },
                {
                    cod: '45HTQE18B2N2',
                    desc: 'UN.EXT.HW INVERTER TREND,18K,QF, 220V,1PH',
                    estoque: '5 - EI06 - Elgin Ind.Fabrica Manaus',
                    prazo: 'pronta entrega',
                    imagem: '../../../../../../../assets/artefacts/splithighwall.png',
                },
                {
                    cod: '45HTQE18B2N1',
                    desc: 'UN.EXT.HW INVERTER TREND,18K,QF, 220V,1PH',
                    estoque: '5 - EI06 - Elgin Ind.Fabrica Manaus',
                    prazo: 'pronta entrega',
                    imagem: '../../../../../../../assets/artefacts/splithighwall.png',
                },
                {
                    cod: '45HTQE18B2N2',
                    desc: 'UN.EXT.HW INVERTER TREND,18K,QF, 220V,1PH',
                    estoque: '5 - EI06 - Elgin Ind.Fabrica Manaus',
                    prazo: 'pronta entrega',
                    imagem: '../../../../../../../assets/artefacts/splithighwall.png',
                },
                {
                    cod: '45HTQE18B2N1',
                    desc: 'UN.EXT.HW INVERTER TREND,18K,QF, 220V,1PH',
                    estoque: '5 - EI06 - Elgin Ind.Fabrica Manaus',
                    prazo: 'em análise',
                    imagem: '../../../../../../../assets/artefacts/splithighwall.png',
                },
                {
                    cod: '45HTQE18B2N2',
                    desc: 'UN.EXT.HW INVERTER TREND,18K,QF, 220V,1PH',
                    estoque: '5 - EI06 - Elgin Ind.Fabrica Manaus',
                    prazo: 'pronta entrega',
                    imagem: '../../../../../../../assets/artefacts/splithighwall.png',
                },
                {
                    cod: '45HTQE18B2N1',
                    desc: 'UN.EXT.HW INVERTER TREND,18K,QF, 220V,1PH',
                    estoque: '5 - EI06 - Elgin Ind.Fabrica Manaus',
                    prazo: 'pronta entrega',
                    imagem: '../../../../../../../assets/artefacts/splithighwall.png',
                },
                {
                    cod: '45HTQE18B2N2',
                    desc: 'UN.EXT.HW INVERTER TREND,18K,QF, 220V,1PH',
                    estoque: '5 - EI06 - Elgin Ind.Fabrica Manaus',
                    prazo: 'pronta entrega',
                    imagem: '../../../../../../../assets/artefacts/splithighwall.png',
                },
                {
                    cod: '45HTQE18B2N1',
                    desc: 'UN.EXT.HW INVERTER TREND,18K,QF, 220V,1PH',
                    estoque: '5 - EI06 - Elgin Ind.Fabrica Manaus',
                    prazo: 'em análise',
                    imagem: '../../../../../../../assets/artefacts/splithighwall.png',
                },
                {
                    cod: '45HTQE18B2N2',
                    desc: 'UN.EXT.HW INVERTER TREND,18K,QF, 220V,1PH',
                    estoque: '5 - EI06 - Elgin Ind.Fabrica Manaus',
                    prazo: 'pronta entrega',
                    imagem: '../../../../../../../assets/artefacts/splithighwall.png',
                },
                {
                    cod: '45HTQE18B2N1',
                    desc: 'UN.EXT.HW INVERTER TREND,18K,QF, 220V,1PH',
                    estoque: '5 - EI06 - Elgin Ind.Fabrica Manaus',
                    prazo: 'pronta entrega',
                    imagem: '../../../../../../../assets/artefacts/splithighwall.png',
                },
                {
                    cod: '45HTQE18B2N2',
                    desc: 'UN.EXT.HW INVERTER TREND,18K,QF, 220V,1PH',
                    estoque: '5 - EI06 - Elgin Ind.Fabrica Manaus',
                    prazo: 'pronta entrega',
                    imagem: '../../../../../../../assets/artefacts/splithighwall.png',
                },
                {
                    cod: '45HTQE18B2N1',
                    desc: 'UN.EXT.HW INVERTER TREND,18K,QF, 220V,1PH',
                    estoque: '5 - EI06 - Elgin Ind.Fabrica Manaus',
                    prazo: 'em análise',
                    imagem: '../../../../../../../assets/artefacts/splithighwall.png',
                },
                {
                    cod: '45HTQE18B2N2',
                    desc: 'UN.EXT.HW INVERTER TREND,18K,QF, 220V,1PH',
                    estoque: '5 - EI06 - Elgin Ind.Fabrica Manaus',
                    prazo: 'pronta entrega',
                    imagem: '../../../../../../../assets/artefacts/splithighwall.png',
                },
                {
                    cod: '45HTQE18B2N1',
                    desc: 'UN.EXT.HW INVERTER TREND,18K,QF, 220V,1PH',
                    estoque: '5 - EI06 - Elgin Ind.Fabrica Manaus',
                    prazo: 'pronta entrega',
                    imagem: '../../../../../../../assets/artefacts/splithighwall.png',
                },
                {
                    cod: '45HTQE18B2N2',
                    desc: 'UN.EXT.HW INVERTER TREND,18K,QF, 220V,1PH',
                    estoque: '5 - EI06 - Elgin Ind.Fabrica Manaus',
                    prazo: 'pronta entrega',
                    imagem: '../../../../../../../assets/artefacts/splithighwall.png',
                },
                {
                    cod: '45HTQE18B2N1',
                    desc: 'UN.EXT.HW INVERTER TREND,18K,QF, 220V,1PH',
                    estoque: '5 - EI06 - Elgin Ind.Fabrica Manaus',
                    prazo: 'em análise',
                    imagem: '../../../../../../../assets/artefacts/splithighwall.png',
                },
                {
                    cod: '45HTQE18B2N2',
                    desc: 'UN.EXT.HW INVERTER TREND,18K,QF, 220V,1PH',
                    estoque: '5 - EI06 - Elgin Ind.Fabrica Manaus',
                    prazo: 'pronta entrega',
                    imagem: '../../../../../../../assets/artefacts/splithighwall.png',
                }
            ]
        }
    },
    {
        linha: 'iluminação',
        id: 4,
        produtosTipo: {
            tipo: 'cortina de ar',
            thumbnail: '../../../../../../../assets/artefacts/cortinadear.png',
            produtos: [
                {
                    cod: '45HTQE18B2N1',
                    desc: 'UN.EXT.HW INVERTER TREND,18K,QF, 220V,1PH',
                    estoque: '5 - EI06 - Elgin Ind.Fabrica Manaus',
                    prazo: 'pronta entrega',
                    imagem: '../../../../../../../assets/artefacts/splithighwall.png',
                },
                {
                    cod: '45HTQE18B2N2',
                    desc: 'UN.EXT.HW INVERTER TREND,18K,QF, 220V,1PH',
                    estoque: '5 - EI06 - Elgin Ind.Fabrica Manaus',
                    prazo: 'pronta entrega',
                    imagem: '../../../../../../../assets/artefacts/splithighwall.png',
                }
            ]
        }
    },
    {
        linha: 'informática',
        id: 5,
        produtosTipo: {
            tipo: 'cortina de ar',
            thumbnail: '../../../../../../../assets/artefacts/cortinadear.png',
            produtos: [
                {
                    cod: '45HTQE18B2N1',
                    desc: 'UN.EXT.HW INVERTER TREND,18K,QF, 220V,1PH',
                    estoque: '5 - EI06 - Elgin Ind.Fabrica Manaus',
                    prazo: 'pronta entrega',
                    imagem: '../../../../../../../assets/artefacts/splithighwall.png',
                },
                {
                    cod: '45HTQE18B2N2',
                    desc: 'UN.EXT.HW INVERTER TREND,18K,QF, 220V,1PH',
                    estoque: '5 - EI06 - Elgin Ind.Fabrica Manaus',
                    prazo: 'pronta entrega',
                    imagem: '../../../../../../../assets/artefacts/splithighwall.png',
                }
            ]
        }
    },
    {
        linha: 'refrigeração',
        id: 6,
        produtosTipo: {
            tipo: 'cortina de ar',
            thumbnail: '../../../../../../../assets/artefacts/cortinadear.png',
            produtos: [
                {
                    cod: '45HTQE18B2N1',
                    desc: 'UN.EXT.HW INVERTER TREND,18K,QF, 220V,1PH',
                    estoque: '5 - EI06 - Elgin Ind.Fabrica Manaus',
                    prazo: 'pronta entrega',
                    imagem: '../../../../../../../assets/artefacts/splithighwall.png',
                },
                {
                    cod: '45HTQE18B2N2',
                    desc: 'UN.EXT.HW INVERTER TREND,18K,QF, 220V,1PH',
                    estoque: '5 - EI06 - Elgin Ind.Fabrica Manaus',
                    prazo: 'pronta entrega',
                    imagem: '../../../../../../../assets/artefacts/splithighwall.png',
                }
            ]
        }
    },
    {
        linha: 'segurança',
        id: 7,
        produtosTipo: {
            tipo: 'cortina de ar',
            thumbnail: '../../../../../../../assets/artefacts/cortinadear.png',
            produtos: [
                {
                    cod: '45HTQE18B2N1',
                    desc: 'UN.EXT.HW INVERTER TREND,18K,QF, 220V,1PH',
                    estoque: '5 - EI06 - Elgin Ind.Fabrica Manaus',
                    prazo: 'pronta entrega',
                    imagem: '../../../../../../../assets/artefacts/splithighwall.png',
                },
                {
                    cod: '45HTQE18B2N2',
                    desc: 'UN.EXT.HW INVERTER TREND,18K,QF, 220V,1PH',
                    estoque: '5 - EI06 - Elgin Ind.Fabrica Manaus',
                    prazo: 'pronta entrega',
                    imagem: '../../../../../../../assets/artefacts/splithighwall.png',
                }
            ]
        }
    },
    {
        linha: 'telefonia',
        id: 8,
        produtosTipo: {
            tipo: 'cortina de ar',
            thumbnail: '../../../../../../../assets/artefacts/cortinadear.png',
            produtos: [
                {
                    cod: '45HTQE18B2N1',
                    desc: 'UN.EXT.HW INVERTER TREND,18K,QF, 220V,1PH',
                    estoque: '5 - EI06 - Elgin Ind.Fabrica Manaus',
                    prazo: 'pronta entrega',
                    imagem: '../../../../../../../assets/artefacts/splithighwall.png',
                },
                {
                    cod: '45HTQE18B2N2',
                    desc: 'UN.EXT.HW INVERTER TREND,18K,QF, 220V,1PH',
                    estoque: '5 - EI06 - Elgin Ind.Fabrica Manaus',
                    prazo: 'pronta entrega',
                    imagem: '../../../../../../../assets/artefacts/splithighwall.png',
                }
            ]
        }
    },
    {
        linha: 'máquinas de sorvete',
        id: 9,
        produtosTipo: {
            tipo: 'cortina de ar',
            thumbnail: '../../../../../../../assets/artefacts/cortinadear.png',
            produtos: [
                {
                    cod: '45HTQE18B2N1',
                    desc: 'UN.EXT.HW INVERTER TREND,18K,QF, 220V,1PH',
                    estoque: '5 - EI06 - Elgin Ind.Fabrica Manaus',
                    prazo: 'pronta entrega',
                    imagem: '../../../../../../../assets/artefacts/splithighwall.png',
                },
                {
                    cod: '45HTQE18B2N2',
                    desc: 'UN.EXT.HW INVERTER TREND,18K,QF, 220V,1PH',
                    estoque: '5 - EI06 - Elgin Ind.Fabrica Manaus',
                    prazo: 'pronta entrega',
                    imagem: '../../../../../../../assets/artefacts/splithighwall.png',
                }
            ]
        }
    },
];


/***/ }),

/***/ "./src/app/main/representative/orders/new-order/nacional-selling/nacional-selling.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/main/representative/orders/new-order/nacional-selling/nacional-selling.component.scss ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main {\n  padding: 0 25px;\n}\n.main .nav {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.main .nav .title {\n  display: block;\n  font-size: 20px;\n  color: var(--title);\n}\n.main .representative.active {\n  background-color: var(--primary);\n}\n.main .representative.active span {\n  color: #fff !important;\n}\n.main .representative.active span:nth-child(3):before {\n  color: #fff !important;\n}\n.main .representative {\n  padding: 0.5rem;\n  margin-bottom: 1rem;\n  background-color: var(--water-green);\n  border-radius: 10px;\n  line-height: 15px;\n  transition: 0.3s;\n}\n.main .representative:hover {\n  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.12);\n  background-color: var(--primary);\n  cursor: pointer;\n}\n.main .representative:hover span {\n  color: #fff !important;\n}\n.main .representative:hover span:nth-child(3):before {\n  color: #fff !important;\n}\n.main .representative span {\n  color: #333333;\n}\n.main .representative span:first-child {\n  display: block;\n  color: var(--title);\n  font-size: var(--sub-text);\n}\n.main .representative span:nth-child(2) {\n  font-family: CoreRhino65Bold;\n  font-size: 10px;\n}\n.main .representative span:nth-child(3) {\n  font-size: 10px;\n}\n.main .representative span:nth-child(3):before {\n  display: inline-block;\n  padding: 0 0.5rem;\n  color: #333333;\n  content: \"|\";\n}\n.main .btn-custom {\n  padding: 0.275rem 0.75rem;\n  font-size: var(--default-text);\n  color: var(--blue);\n  border: 1px solid;\n  border-radius: 32px;\n  text-transform: capitalize;\n}\n.main .btn-custom:hover {\n  background-color: var(--blue);\n  color: #fff !important;\n}\n.main label {\n  color: #6c757d;\n  font-size: 11px;\n  margin-bottom: 2px;\n  margin-left: 5px;\n}\n.main .search .form-group {\n  position: relative;\n}\n.main .search .form-group .fa-search {\n  position: absolute;\n  top: 30px;\n  left: 5px;\n  padding: 5px;\n  background: var(--title);\n  color: #fff;\n  border-radius: 50%;\n}\n.main .search .form-group .form-control {\n  border-radius: 10px;\n  padding-left: 40px;\n}\n.main .last-clients {\n  margin-top: 20px;\n}\n.main .last-clients .client {\n  padding: 0.75rem;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 10px;\n  transition: 0.3s;\n}\n.main .last-clients .client:hover {\n  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.12);\n  background-color: rgba(0, 0, 0, 0.02);\n  cursor: pointer;\n}\n.main .last-clients .client span {\n  display: block;\n  color: #333333;\n  font-size: 11px;\n}\n.main .last-clients .client span:first-child {\n  color: var(--title);\n  font-size: var(--sub-text);\n}\n.main .last-clients .client span:nth-child(2) {\n  font-family: CoreRhino65Bold;\n}\n.main .chosenClient .requirent {\n  padding: 0.75rem;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 10px;\n  margin-top: 20px;\n}\n.main .chosenClient .requirent .client span {\n  display: block;\n  color: #333333;\n  font-size: 11px;\n}\n.main .chosenClient .requirent .client span:first-child {\n  color: var(--title);\n  font-size: var(--sub-text);\n}\n.main .chosenClient .requirent .client span:nth-child(2) {\n  font-family: CoreRhino65Bold;\n}\n.main .chosenClient .requirent .btn-custom {\n  background-color: var(--success);\n  color: #fff;\n  text-transform: uppercase;\n  border-radius: 32px;\n  transition: 0.15s;\n}\n.main .chosenClient .requirent .btn-custom:hover {\n  box-shadow: none !important;\n}\n.main .chosenClient .requirent .representative {\n  cursor: default;\n}\n@media screen and (max-width: 425px) {\n  .main .chosenClient .requirent .client,\n.main .chosenClient .requirent .representative {\n    text-align: center;\n  }\n  .main .chosenClient .requirent .btn-custom {\n    margin: 1rem 0;\n  }\n}\n.main .chosenClient .last-clients .search .fa-search {\n  top: 6px;\n}\n.main .chosenClient .last-clients table {\n  border-collapse: separate;\n  border-spacing: 0 3px;\n  border: 0;\n}\n.main .chosenClient .last-clients table thead th {\n  background-color: #265980;\n  color: #fff;\n  font-family: montserratregular;\n  font-size: var(--sub-text);\n  padding: 0.5rem;\n}\n.main .chosenClient .last-clients table tbody tr:hover {\n  background-color: #F8F8F8;\n}\n.main .chosenClient .last-clients table tbody td {\n  font-family: montserratregular;\n  font-size: var(--sub-text);\n  color: var(--link);\n  vertical-align: middle;\n}\n.main .chosenClient .last-clients table tbody td .client-td {\n  max-width: 180px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.main .chosenClient .last-clients table a {\n  font-family: CoreRhino65bold !important;\n  color: #0986E4 !important;\n  font-size: 11px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9yZXByZXNlbnRhdGl2ZS9vcmRlcnMvbmV3LW9yZGVyL25hY2lvbmFsLXNlbGxpbmcvQzpcXEVsZ2luVXAzXFxmcm9udC1lbGdpbi0zLjBcXEZST05ULUVMR0lOVVAtMy4wL3NyY1xcYXBwXFxtYWluXFxyZXByZXNlbnRhdGl2ZVxcb3JkZXJzXFxuZXctb3JkZXJcXG5hY2lvbmFsLXNlbGxpbmdcXG5hY2lvbmFsLXNlbGxpbmcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vcmVwcmVzZW50YXRpdmUvb3JkZXJzL25ldy1vcmRlci9uYWNpb25hbC1zZWxsaW5nL25hY2lvbmFsLXNlbGxpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FDQ0o7QURDSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNDUjtBRENRO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0NaO0FER0k7RUFDSSxnQ0FBQTtBQ0RSO0FER1E7RUFDSSxzQkFBQTtBQ0RaO0FES1k7RUFDSSxzQkFBQTtBQ0hoQjtBRFFJO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNOUjtBRFFRO0VBQ0ksK0NBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7QUNOWjtBRFFZO0VBQ0ksc0JBQUE7QUNOaEI7QURVZ0I7RUFDSSxzQkFBQTtBQ1JwQjtBRGFRO0VBQ0ksY0FBQTtBQ1haO0FEY1E7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtBQ1paO0FEZVE7RUFDSSw0QkFBQTtFQUNBLGVBQUE7QUNiWjtBRGdCUTtFQUNJLGVBQUE7QUNkWjtBRGdCWTtFQUNJLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ2RoQjtBRG1CSTtFQUNJLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtBQ2pCUjtBRG1CUTtFQUNJLDZCQUFBO0VBQ0Esc0JBQUE7QUNqQlo7QURxQkk7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNuQlI7QUR1QlE7RUFDSSxrQkFBQTtBQ3JCWjtBRHVCWTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNyQmhCO0FEd0JZO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtBQ3RCaEI7QUQyQkk7RUFDSSxnQkFBQTtBQ3pCUjtBRDJCUTtFQUNJLGdCQUFBO0VBQ0Esc0NBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDekJaO0FEMkJZO0VBQ0ksK0NBQUE7RUFDQSxxQ0FBQTtFQUNBLGVBQUE7QUN6QmhCO0FENEJZO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDMUJoQjtBRDZCWTtFQUNJLG1CQUFBO0VBQ0EsMEJBQUE7QUMzQmhCO0FEOEJZO0VBQ0ksNEJBQUE7QUM1QmhCO0FEa0NRO0VBQ0ksZ0JBQUE7RUFDQSxzQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNoQ1o7QURtQ2dCO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDakNwQjtBRG9DZ0I7RUFDSSxtQkFBQTtFQUNBLDBCQUFBO0FDbENwQjtBRHFDZ0I7RUFDSSw0QkFBQTtBQ25DcEI7QUR1Q1k7RUFDSSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNyQ2hCO0FEdUNnQjtFQUNJLDJCQUFBO0FDckNwQjtBRHlDWTtFQUNJLGVBQUE7QUN2Q2hCO0FEMENZO0VBRUk7O0lBRUksa0JBQUE7RUN6Q2xCO0VENENjO0lBQ0ksY0FBQTtFQzFDbEI7QUFDRjtBRGdEZ0I7RUFDSSxRQUFBO0FDOUNwQjtBRGtEWTtFQUNJLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxTQUFBO0FDaERoQjtBRGtEZ0I7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtBQ2hEcEI7QURtRGdCO0VBQ0kseUJBQUE7QUNqRHBCO0FEb0RnQjtFQUNJLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FDbERwQjtBRG9Eb0I7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ2xEeEI7QURzRGdCO0VBQ0ksdUNBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUNwRHBCIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9yZXByZXNlbnRhdGl2ZS9vcmRlcnMvbmV3LW9yZGVyL25hY2lvbmFsLXNlbGxpbmcvbmFjaW9uYWwtc2VsbGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluIHtcbiAgICBwYWRkaW5nOiAwIDI1cHg7XG5cbiAgICAubmF2IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10aXRsZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAucmVwcmVzZW50YXRpdmUuYWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG5cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgc3BhbjpudGgtY2hpbGQoMykge1xuICAgICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAucmVwcmVzZW50YXRpdmUge1xuICAgICAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdhdGVyLWdyZWVuKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gICAgICAgIHRyYW5zaXRpb246IC4zcztcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNwYW46bnRoLWNoaWxkKDMpIHtcbiAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgICAgfVxuXG4gICAgICAgIHNwYW46Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGl0bGUpO1xuICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1zdWItdGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICBzcGFuOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogQ29yZVJoaW5vNjVCb2xkO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgc3BhbjpudGgtY2hpbGQoMykge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuXG4gICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgLjVyZW07XG4gICAgICAgICAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICAgICAgICAgICAgY29udGVudDogXCJ8XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuYnRuLWN1c3RvbSB7XG4gICAgICAgIHBhZGRpbmc6IC4yNzVyZW0gLjc1cmVtO1xuICAgICAgICBmb250LXNpemU6IHZhcigtLWRlZmF1bHQtdGV4dCk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMycHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGFiZWwge1xuICAgICAgICBjb2xvcjogIzZjNzU3ZDtcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgfVxuXG4gICAgLnNlYXJjaCB7XG4gICAgICAgIC5mb3JtLWdyb3VwIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAgICAgLmZhLXNlYXJjaCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogMzBweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiA1cHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXRpdGxlKTtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5mb3JtLWNvbnRyb2wge1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmxhc3QtY2xpZW50cyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG5cbiAgICAgICAgLmNsaWVudCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwLjc1cmVtO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcblxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjAyKTtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3BhbjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRpdGxlKTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLXN1Yi10ZXh0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3BhbjpudGgtY2hpbGQoMikge1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBDb3JlUmhpbm82NUJvbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuY2hvc2VuQ2xpZW50IHtcbiAgICAgICAgLnJlcXVpcmVudCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwLjc1cmVtO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcblxuICAgICAgICAgICAgLmNsaWVudCB7XG4gICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNwYW46Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGl0bGUpO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLXN1Yi10ZXh0KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzcGFuOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBDb3JlUmhpbm82NUJvbGQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYnRuLWN1c3RvbSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VjY2Vzcyk7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMnB4O1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMTVzO1xuXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5yZXByZXNlbnRhdGl2ZSB7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjVweCkge1xuXG4gICAgICAgICAgICAgICAgLmNsaWVudCxcbiAgICAgICAgICAgICAgICAucmVwcmVzZW50YXRpdmUge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmJ0bi1jdXN0b20ge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDFyZW0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAubGFzdC1jbGllbnRzIHtcbiAgICAgICAgICAgIC5zZWFyY2gge1xuICAgICAgICAgICAgICAgIC5mYS1zZWFyY2gge1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDZweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRhYmxlIHtcbiAgICAgICAgICAgICAgICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xuICAgICAgICAgICAgICAgIGJvcmRlci1zcGFjaW5nOiAwIDNweDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDA7XG5cbiAgICAgICAgICAgICAgICB0aGVhZCB0aCB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjU5ODA7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogbW9udHNlcnJhdHJlZ3VsYXI7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tc3ViLXRleHQpO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0Ym9keSB0cjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGOEY4Rjg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGJvZHkgdGQge1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogbW9udHNlcnJhdHJlZ3VsYXI7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tc3ViLXRleHQpO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tbGluayk7XG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cbiAgICAgICAgICAgICAgICAgICAgLmNsaWVudC10ZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDE4MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogQ29yZVJoaW5vNjVib2xkICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDk4NkU0ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiLm1haW4ge1xuICBwYWRkaW5nOiAwIDI1cHg7XG59XG4ubWFpbiAubmF2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLm1haW4gLm5hdiAudGl0bGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogdmFyKC0tdGl0bGUpO1xufVxuLm1haW4gLnJlcHJlc2VudGF0aXZlLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xufVxuLm1haW4gLnJlcHJlc2VudGF0aXZlLmFjdGl2ZSBzcGFuIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cbi5tYWluIC5yZXByZXNlbnRhdGl2ZS5hY3RpdmUgc3BhbjpudGgtY2hpbGQoMyk6YmVmb3JlIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cbi5tYWluIC5yZXByZXNlbnRhdGl2ZSB7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2F0ZXItZ3JlZW4pO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMTVweDtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cbi5tYWluIC5yZXByZXNlbnRhdGl2ZTpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm1haW4gLnJlcHJlc2VudGF0aXZlOmhvdmVyIHNwYW4ge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuLm1haW4gLnJlcHJlc2VudGF0aXZlOmhvdmVyIHNwYW46bnRoLWNoaWxkKDMpOmJlZm9yZSB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG4ubWFpbiAucmVwcmVzZW50YXRpdmUgc3BhbiB7XG4gIGNvbG9yOiAjMzMzMzMzO1xufVxuLm1haW4gLnJlcHJlc2VudGF0aXZlIHNwYW46Zmlyc3QtY2hpbGQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6IHZhcigtLXRpdGxlKTtcbiAgZm9udC1zaXplOiB2YXIoLS1zdWItdGV4dCk7XG59XG4ubWFpbiAucmVwcmVzZW50YXRpdmUgc3BhbjpudGgtY2hpbGQoMikge1xuICBmb250LWZhbWlseTogQ29yZVJoaW5vNjVCb2xkO1xuICBmb250LXNpemU6IDEwcHg7XG59XG4ubWFpbiAucmVwcmVzZW50YXRpdmUgc3BhbjpudGgtY2hpbGQoMykge1xuICBmb250LXNpemU6IDEwcHg7XG59XG4ubWFpbiAucmVwcmVzZW50YXRpdmUgc3BhbjpudGgtY2hpbGQoMyk6YmVmb3JlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAwIDAuNXJlbTtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIGNvbnRlbnQ6IFwifFwiO1xufVxuLm1haW4gLmJ0bi1jdXN0b20ge1xuICBwYWRkaW5nOiAwLjI3NXJlbSAwLjc1cmVtO1xuICBmb250LXNpemU6IHZhcigtLWRlZmF1bHQtdGV4dCk7XG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDMycHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuLm1haW4gLmJ0bi1jdXN0b206aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cbi5tYWluIGxhYmVsIHtcbiAgY29sb3I6ICM2Yzc1N2Q7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuLm1haW4gLnNlYXJjaCAuZm9ybS1ncm91cCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYWluIC5zZWFyY2ggLmZvcm0tZ3JvdXAgLmZhLXNlYXJjaCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzMHB4O1xuICBsZWZ0OiA1cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tdGl0bGUpO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLm1haW4gLnNlYXJjaCAuZm9ybS1ncm91cCAuZm9ybS1jb250cm9sIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xufVxuLm1haW4gLmxhc3QtY2xpZW50cyB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4ubWFpbiAubGFzdC1jbGllbnRzIC5jbGllbnQge1xuICBwYWRkaW5nOiAwLjc1cmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cbi5tYWluIC5sYXN0LWNsaWVudHMgLmNsaWVudDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggNHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDIpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubWFpbiAubGFzdC1jbGllbnRzIC5jbGllbnQgc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogIzMzMzMzMztcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuLm1haW4gLmxhc3QtY2xpZW50cyAuY2xpZW50IHNwYW46Zmlyc3QtY2hpbGQge1xuICBjb2xvcjogdmFyKC0tdGl0bGUpO1xuICBmb250LXNpemU6IHZhcigtLXN1Yi10ZXh0KTtcbn1cbi5tYWluIC5sYXN0LWNsaWVudHMgLmNsaWVudCBzcGFuOm50aC1jaGlsZCgyKSB7XG4gIGZvbnQtZmFtaWx5OiBDb3JlUmhpbm82NUJvbGQ7XG59XG4ubWFpbiAuY2hvc2VuQ2xpZW50IC5yZXF1aXJlbnQge1xuICBwYWRkaW5nOiAwLjc1cmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5tYWluIC5jaG9zZW5DbGllbnQgLnJlcXVpcmVudCAuY2xpZW50IHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6ICMzMzMzMzM7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cbi5tYWluIC5jaG9zZW5DbGllbnQgLnJlcXVpcmVudCAuY2xpZW50IHNwYW46Zmlyc3QtY2hpbGQge1xuICBjb2xvcjogdmFyKC0tdGl0bGUpO1xuICBmb250LXNpemU6IHZhcigtLXN1Yi10ZXh0KTtcbn1cbi5tYWluIC5jaG9zZW5DbGllbnQgLnJlcXVpcmVudCAuY2xpZW50IHNwYW46bnRoLWNoaWxkKDIpIHtcbiAgZm9udC1mYW1pbHk6IENvcmVSaGlubzY1Qm9sZDtcbn1cbi5tYWluIC5jaG9zZW5DbGllbnQgLnJlcXVpcmVudCAuYnRuLWN1c3RvbSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1Y2Nlc3MpO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgYm9yZGVyLXJhZGl1czogMzJweDtcbiAgdHJhbnNpdGlvbjogMC4xNXM7XG59XG4ubWFpbiAuY2hvc2VuQ2xpZW50IC5yZXF1aXJlbnQgLmJ0bi1jdXN0b206aG92ZXIge1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG4ubWFpbiAuY2hvc2VuQ2xpZW50IC5yZXF1aXJlbnQgLnJlcHJlc2VudGF0aXZlIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgLm1haW4gLmNob3NlbkNsaWVudCAucmVxdWlyZW50IC5jbGllbnQsXG4ubWFpbiAuY2hvc2VuQ2xpZW50IC5yZXF1aXJlbnQgLnJlcHJlc2VudGF0aXZlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLm1haW4gLmNob3NlbkNsaWVudCAucmVxdWlyZW50IC5idG4tY3VzdG9tIHtcbiAgICBtYXJnaW46IDFyZW0gMDtcbiAgfVxufVxuLm1haW4gLmNob3NlbkNsaWVudCAubGFzdC1jbGllbnRzIC5zZWFyY2ggLmZhLXNlYXJjaCB7XG4gIHRvcDogNnB4O1xufVxuLm1haW4gLmNob3NlbkNsaWVudCAubGFzdC1jbGllbnRzIHRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDAgM3B4O1xuICBib3JkZXI6IDA7XG59XG4ubWFpbiAuY2hvc2VuQ2xpZW50IC5sYXN0LWNsaWVudHMgdGFibGUgdGhlYWQgdGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjY1OTgwO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6IG1vbnRzZXJyYXRyZWd1bGFyO1xuICBmb250LXNpemU6IHZhcigtLXN1Yi10ZXh0KTtcbiAgcGFkZGluZzogMC41cmVtO1xufVxuLm1haW4gLmNob3NlbkNsaWVudCAubGFzdC1jbGllbnRzIHRhYmxlIHRib2R5IHRyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RjhGODtcbn1cbi5tYWluIC5jaG9zZW5DbGllbnQgLmxhc3QtY2xpZW50cyB0YWJsZSB0Ym9keSB0ZCB7XG4gIGZvbnQtZmFtaWx5OiBtb250c2VycmF0cmVndWxhcjtcbiAgZm9udC1zaXplOiB2YXIoLS1zdWItdGV4dCk7XG4gIGNvbG9yOiB2YXIoLS1saW5rKTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5tYWluIC5jaG9zZW5DbGllbnQgLmxhc3QtY2xpZW50cyB0YWJsZSB0Ym9keSB0ZCAuY2xpZW50LXRkIHtcbiAgbWF4LXdpZHRoOiAxODBweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4ubWFpbiAuY2hvc2VuQ2xpZW50IC5sYXN0LWNsaWVudHMgdGFibGUgYSB7XG4gIGZvbnQtZmFtaWx5OiBDb3JlUmhpbm82NWJvbGQgIWltcG9ydGFudDtcbiAgY29sb3I6ICMwOTg2RTQgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxMXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/main/representative/orders/new-order/nacional-selling/nacional-selling.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/main/representative/orders/new-order/nacional-selling/nacional-selling.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: NacionalSellingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NacionalSellingComponent", function() { return NacionalSellingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _representative_change_representative_change_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./representative-change/representative-change.component */ "./src/app/main/representative/orders/new-order/nacional-selling/representative-change/representative-change.component.ts");
/* harmony import */ var _representatives__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./representatives */ "./src/app/main/representative/orders/new-order/nacional-selling/representatives.ts");






let NacionalSellingComponent = class NacionalSellingComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.index = 1;
        this.representativeChosen = false;
        this.clients = [
            'Andre da Silva', 'Andre Santos', 'Miranda', 'Marcos Maximus', 'Andre da Silva',
        ];
        this.formatter = (result) => result.toUpperCase();
        this.search = (text$) => text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(term => term === '' ? {} :
            this.clients.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10)));
        Object.assign(this, { representatives: _representatives__WEBPACK_IMPORTED_MODULE_5__["representatives"] });
    }
    ngOnInit() { }
    ngOnDestroy() { }
    navigate(index) {
        this.selectedItem = index;
    }
    representativeChange() {
        this.modalService.open(_representative_change_representative_change_component__WEBPACK_IMPORTED_MODULE_4__["RepresentativeChangeComponent"], { centered: true, scrollable: true });
    }
    return() {
        if (this.index === 2) {
            this.index = 1;
        }
        if (this.index === 3) {
            this.index = 2;
        }
    }
    selectClient() {
        this.index = 2;
    }
    includeOrder() {
        this.index = 3;
    }
};
NacionalSellingComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }
];
NacionalSellingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'elgin-nacional-selling',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./nacional-selling.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/representative/orders/new-order/nacional-selling/nacional-selling.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./nacional-selling.component.scss */ "./src/app/main/representative/orders/new-order/nacional-selling/nacional-selling.component.scss")).default]
    })
], NacionalSellingComponent);



/***/ }),

/***/ "./src/app/main/representative/orders/new-order/nacional-selling/representative-change/representative-change.component.scss":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/main/representative/orders/new-order/nacional-selling/representative-change/representative-change.component.scss ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".modal-backdrop {\n  background-color: #0063af;\n  opacity: 90% !important;\n}\n\n.modal-header {\n  justify-content: flex-end !important;\n  border: none;\n  padding-bottom: 0;\n}\n\n.modal-header .close {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n\n.modal-header .close small {\n  margin: 0px 2px;\n  font-size: 13px;\n}\n\n.modal-header .close small:last-child {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 15px;\n  height: 15px;\n  border: 1px solid;\n  border-radius: 50%;\n}\n\n.modal-body {\n  padding: 0 1rem !important;\n}\n\n.modal-body .title {\n  display: block;\n}\n\n.modal-body form {\n  margin-top: 30px;\n}\n\n.modal-body form label {\n  margin-bottom: 2px;\n  color: #6c757d;\n  font-size: 0.8rem;\n}\n\n.modal-footer {\n  justify-content: center !important;\n}\n\n.modal-footer .btn-close {\n  padding: 0.35rem 2rem;\n  border-radius: 32px;\n  background: var(--primary);\n  font-size: var(--sub-text);\n  color: #fff;\n  text-transform: uppercase;\n}\n\n.modal-footer .btn-close:focus {\n  box-shadow: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9yZXByZXNlbnRhdGl2ZS9vcmRlcnMvbmV3LW9yZGVyL25hY2lvbmFsLXNlbGxpbmcvcmVwcmVzZW50YXRpdmUtY2hhbmdlL0M6XFxFbGdpblVwM1xcZnJvbnQtZWxnaW4tMy4wXFxGUk9OVC1FTEdJTlVQLTMuMC9zcmNcXGFwcFxcbWFpblxccmVwcmVzZW50YXRpdmVcXG9yZGVyc1xcbmV3LW9yZGVyXFxuYWNpb25hbC1zZWxsaW5nXFxyZXByZXNlbnRhdGl2ZS1jaGFuZ2VcXHJlcHJlc2VudGF0aXZlLWNoYW5nZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9yZXByZXNlbnRhdGl2ZS9vcmRlcnMvbmV3LW9yZGVyL25hY2lvbmFsLXNlbGxpbmcvcmVwcmVzZW50YXRpdmUtY2hhbmdlL3JlcHJlc2VudGF0aXZlLWNoYW5nZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsdUJBQUE7QUNDSjs7QURFQTtFQUNJLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FEQ0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDQ1I7O0FEQ1E7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQ0NaOztBREVRO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNBWjs7QURLQTtFQUNJLDBCQUFBO0FDRko7O0FESUk7RUFDSSxjQUFBO0FDRlI7O0FES0k7RUFDSSxnQkFBQTtBQ0hSOztBREtRO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNIWjs7QURRQTtFQUNJLGtDQUFBO0FDTEo7O0FET0k7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQ0xSOztBRE9RO0VBQ0ksMkJBQUE7QUNMWiIsImZpbGUiOiJzcmMvYXBwL21haW4vcmVwcmVzZW50YXRpdmUvb3JkZXJzL25ldy1vcmRlci9uYWNpb25hbC1zZWxsaW5nL3JlcHJlc2VudGF0aXZlLWNoYW5nZS9yZXByZXNlbnRhdGl2ZS1jaGFuZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwtYmFja2Ryb3Age1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDYzYWY7XG4gICAgb3BhY2l0eTogOTAlICFpbXBvcnRhbnQ7XG59XG5cbi5tb2RhbC1oZWFkZXIge1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQgIWltcG9ydGFudDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZy1ib3R0b206IDA7XG5cbiAgICAuY2xvc2Uge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgc21hbGwge1xuICAgICAgICAgICAgbWFyZ2luOiAwcHggMnB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICB9XG5cbiAgICAgICAgc21hbGw6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLm1vZGFsLWJvZHkge1xuICAgIHBhZGRpbmc6IDAgMXJlbSAhaW1wb3J0YW50O1xuXG4gICAgLnRpdGxlIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgZm9ybSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG5cbiAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgICAgICAgICAgY29sb3I6ICM2Yzc1N2Q7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLm1vZGFsLWZvb3RlciB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcblxuICAgIC5idG4tY2xvc2Uge1xuICAgICAgICBwYWRkaW5nOiAwLjM1cmVtIDJyZW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMycHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICBmb250LXNpemU6IHZhcigtLXN1Yi10ZXh0KTtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cbiAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG59IiwiLm1vZGFsLWJhY2tkcm9wIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjNhZjtcbiAgb3BhY2l0eTogOTAlICFpbXBvcnRhbnQ7XG59XG5cbi5tb2RhbC1oZWFkZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG4ubW9kYWwtaGVhZGVyIC5jbG9zZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5tb2RhbC1oZWFkZXIgLmNsb3NlIHNtYWxsIHtcbiAgbWFyZ2luOiAwcHggMnB4O1xuICBmb250LXNpemU6IDEzcHg7XG59XG4ubW9kYWwtaGVhZGVyIC5jbG9zZSBzbWFsbDpsYXN0LWNoaWxkIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5tb2RhbC1ib2R5IHtcbiAgcGFkZGluZzogMCAxcmVtICFpbXBvcnRhbnQ7XG59XG4ubW9kYWwtYm9keSAudGl0bGUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5tb2RhbC1ib2R5IGZvcm0ge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuLm1vZGFsLWJvZHkgZm9ybSBsYWJlbCB7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbiAgY29sb3I6ICM2Yzc1N2Q7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG4ubW9kYWwtZm9vdGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbn1cbi5tb2RhbC1mb290ZXIgLmJ0bi1jbG9zZSB7XG4gIHBhZGRpbmc6IDAuMzVyZW0gMnJlbTtcbiAgYm9yZGVyLXJhZGl1czogMzJweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc3ViLXRleHQpO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5tb2RhbC1mb290ZXIgLmJ0bi1jbG9zZTpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/main/representative/orders/new-order/nacional-selling/representative-change/representative-change.component.ts":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/main/representative/orders/new-order/nacional-selling/representative-change/representative-change.component.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: RepresentativeChangeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepresentativeChangeComponent", function() { return RepresentativeChangeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");



let RepresentativeChangeComponent = class RepresentativeChangeComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
    }
    ngOnInit() {
    }
};
RepresentativeChangeComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }
];
RepresentativeChangeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./representative-change.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/representative/orders/new-order/nacional-selling/representative-change/representative-change.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./representative-change.component.scss */ "./src/app/main/representative/orders/new-order/nacional-selling/representative-change/representative-change.component.scss")).default]
    })
], RepresentativeChangeComponent);



/***/ }),

/***/ "./src/app/main/representative/orders/new-order/nacional-selling/representatives.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/main/representative/orders/new-order/nacional-selling/representatives.ts ***!
  \******************************************************************************************/
/*! exports provided: representatives */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "representatives", function() { return representatives; });
const representatives = [
    {
        name: 'João',
        area: 'Dimacon',
        tipoPedido: 'ZVMI',
        clients: [
            { clientName: 'Andre da Silva', cnpj: '34.463.428/0001-92', ie: 'ISENTO', tel: '(48) 3205-9233' },
            { clientName: 'Silvia Pereira', cnpj: '35.463.428/0001-92', ie: 'ISENTO', tel: '(11) 3205-9233' },
            { clientName: 'Marcos Maximus', cnpj: '36.463.428/0001-92', ie: 'ISENTO', tel: '(13) 3205-9233' }
        ]
    },
    {
        name: 'Maria',
        area: 'Automação',
        tipoPedido: 'ZVMI',
        clients: [
            { clientName: 'Silvia Pereira', cnpj: '35.463.428/0001-92', ie: 'ISENTO', tel: '(11) 3205-9233' },
            { clientName: 'Marcos Maximus', cnpj: '36.463.428/0001-92', ie: 'ISENTO', tel: '(13) 3205-9233' }
        ]
    },
    {
        name: 'José',
        area: 'Dimacon',
        tipoPedido: 'ZVMI',
        clients: [
            { clientName: 'Silvia Pereira', cnpj: '35.463.428/0001-92', ie: 'ISENTO', tel: '(11) 3205-9233' },
        ]
    }
];


/***/ }),

/***/ "./src/app/main/representative/orders/new-order/new-order.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/main/representative/orders/new-order/new-order.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("section {\n  padding-left: 55px;\n}\n\n@media screen and (max-width: 768px) {\n  section {\n    padding-left: 0px;\n  }\n}\n\n.page-title {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px;\n  background-color: #FBFBFB;\n}\n\n.page-title .title {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n}\n\n.page-title .title em {\n  font-size: 26px;\n  color: #dcdcdc;\n  margin-right: 15px;\n}\n\n.page-title .title span {\n  font-size: 26px;\n  color: var(--title);\n  font-weight: lighter;\n}\n\n.types {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  padding: 10px;\n  background-color: var(--primary);\n  font-family: montserratregular;\n}\n\n.types .title {\n  color: #fff;\n  font-size: 20px;\n  text-transform: capitalize;\n}\n\n@media screen and (max-width: 425px) {\n  .types .types-button {\n    justify-content: start !important;\n  }\n}\n\n.types .types-button {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-evenly;\n}\n\n.types .types-button .btn-item {\n  text-align: center;\n  color: #fff;\n}\n\n.types .types-button .btn-item em {\n  display: block;\n  font-size: 27px;\n}\n\n.types .types-button .btn-item span {\n  display: block;\n  font-size: 0.6rem;\n  text-transform: capitalize;\n  margin-top: 3px;\n}\n\n@media screen and (max-width: 768px) {\n  .types .types-button .btn-item {\n    width: 33.33%;\n  }\n}\n\n.types .types-button .btn-item.active em,\n.types .types-button .btn-item.active span {\n  color: var(--water-green);\n}\n\n.breadcrumb {\n  background-color: #fff;\n  font-family: montserratregular;\n  font-size: 0.75rem;\n}\n\n.breadcrumb .breadcrumb-item {\n  color: var(--blue);\n}\n\n.breadcrumb .breadcrumb-item:last-child {\n  color: #6c757d;\n}\n\n.breadcrumb .breadcrumb-item:not(:last-child) {\n  cursor: pointer;\n}\n\n.breadcrumb .breadcrumb-item:not(:last-child):hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9yZXByZXNlbnRhdGl2ZS9vcmRlcnMvbmV3LW9yZGVyL0M6XFxFbGdpblVwM1xcZnJvbnQtZWxnaW4tMy4wXFxGUk9OVC1FTEdJTlVQLTMuMC9zcmNcXGFwcFxcbWFpblxccmVwcmVzZW50YXRpdmVcXG9yZGVyc1xcbmV3LW9yZGVyXFxuZXctb3JkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vcmVwcmVzZW50YXRpdmUvb3JkZXJzL25ldy1vcmRlci9uZXctb3JkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0k7SUFDSSxpQkFBQTtFQ0NOO0FBQ0Y7O0FERUE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUNBSjs7QURFSTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNBUjs7QURFUTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNBWjs7QURHUTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FDRFo7O0FETUE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0VBQ0EsOEJBQUE7QUNISjs7QURLSTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7QUNIUjs7QURNSTtFQUNJO0lBQ0ksaUNBQUE7RUNKVjtBQUNGOztBRE9JO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FDTFI7O0FET1E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7QUNMWjs7QURPWTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FDTGhCOztBRFFZO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FDTmhCOztBRFdRO0VBRUk7SUFDSSxhQUFBO0VDVmQ7QUFDRjs7QURlWTs7RUFFSSx5QkFBQTtBQ2JoQjs7QURtQkE7RUFDSSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7QUNoQko7O0FEa0JJO0VBQ0ksa0JBQUE7QUNoQlI7O0FEa0JRO0VBQ0ksY0FBQTtBQ2hCWjs7QURtQlE7RUFDSSxlQUFBO0FDakJaOztBRG1CWTtFQUNJLDBCQUFBO0FDakJoQiIsImZpbGUiOiJzcmMvYXBwL21haW4vcmVwcmVzZW50YXRpdmUvb3JkZXJzL25ldy1vcmRlci9uZXctb3JkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDU1cHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgc2VjdGlvbiB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgIH1cbn1cblxuLnBhZ2UtdGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRkJGQjtcblxuICAgIC50aXRsZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICBlbSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICAgICAgICBjb2xvcjogI2RjZGNkYztcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRpdGxlKTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4udHlwZXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICBmb250LWZhbWlseTogbW9udHNlcnJhdHJlZ3VsYXI7XG5cbiAgICAudGl0bGUge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICB9XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjVweCkge1xuICAgICAgICAudHlwZXMtYnV0dG9uIHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3RhcnQgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC50eXBlcy1idXR0b24ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuXG4gICAgICAgIC5idG4taXRlbSB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcblxuICAgICAgICAgICAgZW0ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjdweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjZyZW07XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuXG4gICAgICAgICAgICAuYnRuLWl0ZW0ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzMy4zMyU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuYnRuLWl0ZW0uYWN0aXZlIHtcblxuICAgICAgICAgICAgZW0sXG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0td2F0ZXItZ3JlZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uYnJlYWRjcnVtYiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBmb250LWZhbWlseTogbW9udHNlcnJhdHJlZ3VsYXI7XG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xuXG4gICAgLmJyZWFkY3J1bWItaXRlbSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1ibHVlKTtcblxuICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgY29sb3I6ICM2Yzc1N2Q7XG4gICAgICAgIH1cblxuICAgICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCJzZWN0aW9uIHtcbiAgcGFkZGluZy1sZWZ0OiA1NXB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICBzZWN0aW9uIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgfVxufVxuLnBhZ2UtdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRkJGQjtcbn1cbi5wYWdlLXRpdGxlIC50aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5wYWdlLXRpdGxlIC50aXRsZSBlbSB7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgY29sb3I6ICNkY2RjZGM7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cbi5wYWdlLXRpdGxlIC50aXRsZSBzcGFuIHtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBjb2xvcjogdmFyKC0tdGl0bGUpO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbn1cblxuLnR5cGVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgZm9udC1mYW1pbHk6IG1vbnRzZXJyYXRyZWd1bGFyO1xufVxuLnR5cGVzIC50aXRsZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgLnR5cGVzIC50eXBlcy1idXR0b24ge1xuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQgIWltcG9ydGFudDtcbiAgfVxufVxuLnR5cGVzIC50eXBlcy1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuLnR5cGVzIC50eXBlcy1idXR0b24gLmJ0bi1pdGVtIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbn1cbi50eXBlcyAudHlwZXMtYnV0dG9uIC5idG4taXRlbSBlbSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDI3cHg7XG59XG4udHlwZXMgLnR5cGVzLWJ1dHRvbiAuYnRuLWl0ZW0gc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDAuNnJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIG1hcmdpbi10b3A6IDNweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC50eXBlcyAudHlwZXMtYnV0dG9uIC5idG4taXRlbSB7XG4gICAgd2lkdGg6IDMzLjMzJTtcbiAgfVxufVxuLnR5cGVzIC50eXBlcy1idXR0b24gLmJ0bi1pdGVtLmFjdGl2ZSBlbSxcbi50eXBlcyAudHlwZXMtYnV0dG9uIC5idG4taXRlbS5hY3RpdmUgc3BhbiB7XG4gIGNvbG9yOiB2YXIoLS13YXRlci1ncmVlbik7XG59XG5cbi5icmVhZGNydW1iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6IG1vbnRzZXJyYXRyZWd1bGFyO1xuICBmb250LXNpemU6IDAuNzVyZW07XG59XG4uYnJlYWRjcnVtYiAuYnJlYWRjcnVtYi1pdGVtIHtcbiAgY29sb3I6IHZhcigtLWJsdWUpO1xufVxuLmJyZWFkY3J1bWIgLmJyZWFkY3J1bWItaXRlbTpsYXN0LWNoaWxkIHtcbiAgY29sb3I6ICM2Yzc1N2Q7XG59XG4uYnJlYWRjcnVtYiAuYnJlYWRjcnVtYi1pdGVtOm5vdCg6bGFzdC1jaGlsZCkge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYnJlYWRjcnVtYiAuYnJlYWRjcnVtYi1pdGVtOm5vdCg6bGFzdC1jaGlsZCk6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/main/representative/orders/new-order/new-order.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/main/representative/orders/new-order/new-order.component.ts ***!
  \*****************************************************************************/
/*! exports provided: NewOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewOrderComponent", function() { return NewOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let NewOrderComponent = class NewOrderComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
        this.typeItems = [
            { icon: 'fas fa-box-open', title: 'venda nacional', id: 0 },
            { icon: 'fas fa-ship', title: 'exportação', id: 1 },
            { icon: 'fas fa-truck-loading', title: 'serviços', id: 2 },
            { icon: 'fas fa-handshake', title: 'garantia', id: 3 },
            { icon: 'fas fa-globe', title: 'intercompany', id: 4 },
            { icon: 'fas fa-boxes', title: 'requisição de distribuição', id: 5 },
            { icon: 'fas fa-shipping-fast', title: 'devoluções', id: 6 },
            { icon: 'fas fa-file-signature', title: 'contrato', id: 7 },
        ];
    }
    ngOnInit() { }
    ngOnDestroy() { }
    navigate(index) {
        this.selectedItem = index;
        this.routeId = this.typeItems[this.selectedItem].id;
        if (this.routeId === 0) {
            this.router.navigate(['vendanacional'], { relativeTo: this.route });
        }
        else {
            this.router.navigate(['novopedido']);
        }
    }
    hasRoute(route) {
        return this.router.url.includes(route);
    }
};
NewOrderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
NewOrderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'elgin-new-order',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./new-order.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/representative/orders/new-order/new-order.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./new-order.component.scss */ "./src/app/main/representative/orders/new-order/new-order.component.scss")).default]
    })
], NewOrderComponent);



/***/ }),

/***/ "./src/app/main/representative/orders/order-details/order-details.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/main/representative/orders/order-details/order-details.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media (min-width: 1200px) {\n  .modal-xl {\n    max-width: 1340px;\n  }\n}\n.modal-backdrop {\n  background-color: #0063af;\n  opacity: 90% !important;\n}\n.modal-header {\n  padding: 1rem;\n  border: none;\n}\n.modal-header .close {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n.modal-header .close small {\n  margin: 0px 2px;\n  font-size: 13px;\n}\n.modal-header .close small:last-child {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 15px;\n  height: 15px;\n  border: 1px solid;\n  border-radius: 50%;\n}\n.modal-body {\n  padding: 0rem 3rem 1rem 3rem;\n}\n.modal-body label {\n  color: #6c757d !important;\n  font-size: var(--sub-text);\n  margin-left: 5px !important;\n  margin-bottom: 2px;\n}\n.modal-body .form-control {\n  border-radius: 8px;\n  color: var(--primary);\n}\n.modal-body .description .column-1 span {\n  display: block;\n  margin-bottom: 0.5rem;\n}\n.modal-body .description .column-1 span:last-child {\n  display: block;\n  padding: 0.25rem;\n  font-size: 12px;\n  color: var(--primary);\n  background-color: #F5F5F5;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 100;\n}\n@media screen and (max-width: 425px) {\n  .modal-body .description .column-2 {\n    flex-direction: column;\n  }\n  .modal-body .description .column-2 .line {\n    display: none !important;\n  }\n  .modal-body .description .column-2 .stage {\n    align-items: center;\n    flex-direction: row !important;\n    margin: 0 !important;\n  }\n  .modal-body .description .column-2 .stage span:nth-child(1) {\n    margin-right: 0.5rem;\n  }\n}\n.modal-body .description .column-2 {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n}\n.modal-body .description .column-2 .line {\n  width: 90%;\n  display: block;\n  position: absolute;\n  top: 26%;\n  left: 7%;\n  border: 2px solid #E5E5E5;\n  z-index: 0;\n}\n.modal-body .description .column-2 .stage {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  margin: 0rem 2rem;\n  line-height: 12px;\n  z-index: 1;\n}\n.modal-body .description .column-2 .stage em.fa-check-circle {\n  background-color: unset !important;\n  color: #4BD37B;\n  font-size: 12px;\n}\n.modal-body .description .column-2 .stage span {\n  display: block;\n  font-size: 11px;\n  color: #333333;\n}\n.modal-body .description .column-2 .stage span:nth-child(1) {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 6px;\n}\n.modal-body .description .column-2 .stage em:not(.fa-check-circle) {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  font-size: 20px;\n  color: #fff;\n  border-radius: 50%;\n  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.225);\n}\n.modal-body .description .column-2 .stage:nth-child(2) em {\n  background-color: #FFE070;\n}\n.modal-body .description .column-2 .stage:nth-child(3) em {\n  background-color: #FFBC70;\n}\n.modal-body .description .column-2 .stage:nth-child(4) em {\n  background-color: #4DBF69;\n}\n.modal-body .description .column-2 .stage:nth-child(5) em {\n  background-color: #4DB2FF;\n}\n.modal-body .invoices {\n  margin-top: 1rem;\n}\n@media screen and (max-width: 425px) {\n  .modal-body .invoices .form-group {\n    order: 3;\n    width: 100%;\n    margin-top: 1rem !important;\n  }\n  .modal-body .invoices .btn-custom {\n    width: 45% !important;\n  }\n  .modal-body .invoices .btn-previous,\n.modal-body .invoices .btn-next {\n    width: 45% !important;\n    margin: 0 !important;\n  }\n}\n.modal-body .invoices select {\n  font-size: var(--sub-text);\n  border-radius: 8px;\n}\n.modal-body .invoices .btn-custom {\n  width: 90px;\n  padding: 0.25rem 0.75rem;\n  margin: 0rem 0.25rem;\n  border: 1px solid;\n  color: var(--blue);\n  font-size: var(--sub-text);\n  text-transform: uppercase;\n  border-radius: 9px;\n}\n.modal-body .invoices .btn-previous,\n.modal-body .invoices .btn-next {\n  position: relative;\n  width: 185px;\n  padding: 0.25rem 0.75rem;\n  margin: 0rem 0rem 0rem 0.75rem;\n  border: 1px solid #56CCF2;\n  color: var(--primary);\n  font-size: var(--sub-text);\n  border-radius: 32px;\n}\n.modal-body .invoices .btn-previous .fa-chevron-left,\n.modal-body .invoices .btn-next .fa-chevron-left {\n  position: absolute;\n  top: 30%;\n  left: 7%;\n  transform: translate(-30%, -7%);\n}\n.modal-body .invoices .btn-previous .fa-chevron-right,\n.modal-body .invoices .btn-next .fa-chevron-right {\n  position: absolute;\n  top: 30%;\n  right: 4%;\n  transform: translate(-30%, -4%);\n}\n.modal-body .invoices table {\n  border-collapse: separate;\n  border-spacing: 0 3px;\n  border: 0;\n}\n.modal-body .invoices table thead th {\n  vertical-align: middle;\n  background-color: #265980;\n  color: #fff;\n  font-family: montserratregular;\n  font-size: var(--sub-text);\n}\n.modal-body .invoices table tbody td {\n  font-family: montserratregular;\n  font-size: var(--sub-text);\n  color: var(--link);\n  vertical-align: middle;\n}\n.modal-body .invoices table tbody td .client-td {\n  max-width: 180px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.modal-body .invoices table a {\n  font-family: CoreRhino65bold !important;\n  color: #0986E4 !important;\n  font-size: 11px;\n}\n@media screen and (max-width: 425px) {\n  .modal-body .invoices .stage {\n    flex-direction: row !important;\n    align-items: center;\n    margin: 0 !important;\n  }\n  .modal-body .invoices .stage span:nth-child(1) {\n    margin-right: 6px;\n  }\n}\n.modal-body .invoices .historic-text {\n  font-size: var(--default-text);\n}\n.modal-body .invoices .historic {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n}\n.modal-body .invoices .historic .line {\n  width: 90%;\n  display: block;\n  position: absolute;\n  top: 19%;\n  left: 7%;\n  border: 2px solid #E5E5E5;\n  z-index: 0;\n}\n.modal-body .invoices .historic .stage {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  margin: 0rem 2rem;\n  line-height: 12px;\n  z-index: 1;\n  text-align: center;\n}\n.modal-body .invoices .historic .stage span {\n  display: block;\n  font-size: 11px;\n  color: #333333;\n}\n.modal-body .invoices .historic .stage span:nth-child(1) {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 6px;\n}\n.modal-body .invoices .historic .stage em {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  font-size: 15px;\n  background-color: #E5E5E5;\n  color: #fff;\n  border-radius: 50%;\n  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.225);\n}\n.modal-body .invoices .historic .stage:last-child em {\n  background-color: #4DB2FF !important;\n}\n.modal-body .client,\n.modal-body .products {\n  margin-top: 2rem;\n}\n.modal-body .client .chosen-client,\n.modal-body .products .chosen-client {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  background: var(--primary);\n  color: #fff;\n  font-size: var(--default-text);\n  padding: 0.25rem 0.75rem;\n  border-top-left-radius: 6px;\n  border-top-right-radius: 6px;\n  margin-left: 10px;\n}\n.modal-body .client .bottom-line,\n.modal-body .products .bottom-line {\n  width: 100%;\n  border-bottom: 4px solid var(--primary);\n}\n.modal-body .client table,\n.modal-body .products table {\n  border-collapse: separate;\n  border-spacing: 2px;\n  margin-top: 1rem;\n}\n.modal-body .client table thead th,\n.modal-body .products table thead th {\n  padding: 0.25rem 0.5rem;\n  background-color: #D3ECFF;\n  font-size: var(--sub-text);\n  color: #333333;\n  text-align: center;\n}\n.modal-body .client table tbody td,\n.modal-body .products table tbody td {\n  font-size: var(--sub-text);\n  color: #333333;\n  text-align: center;\n}\n.modal-body .navigation label {\n  margin-left: 0 !important;\n  font-size: 10px !important;\n}\n.modal-body .navigation input {\n  font-size: 10px;\n  color: var(--primary);\n}\n.modal-body .navigation .inferior-line {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125);\n}\n.modal-body .navigation .filter-label {\n  margin: 1rem 0rem;\n  font-size: var(--default-text);\n  color: var(--primary);\n}\n.modal-body .navigation .form-control {\n  border: none;\n}\n.modal-body .navigation textarea {\n  border: 1px solid rgba(0, 0, 0, 0.125) !important;\n}\n.modal-body .navigation .nav-item {\n  margin-bottom: unset;\n  margin-right: 0.25rem;\n}\n.modal-body .navigation .nav-tabs .nav-link {\n  font-size: var(--sub-text);\n  background-color: #F5F5F5;\n  color: #333333 !important;\n}\n.modal-body .navigation .nav-tabs .nav-link.active {\n  color: #fff !important;\n  background-color: #000000;\n}\n.modal-body .navigation .segment {\n  font-size: var(--sub-text);\n  color: #333333;\n}\n.modal-body .navigation .segment-info .form-group {\n  margin-bottom: 0.25rem;\n}\n.modal-body .navigation .segment-info small {\n  display: block;\n  font-size: var(--sub-text);\n  color: var(--primary);\n}\n@media screen and (max-width: 425px) {\n  .modal-body .navigation .invoice-img {\n    max-width: 100% !important;\n  }\n}\n.modal-body .navigation .invoice-img {\n  max-width: 245px;\n  padding: 0.75rem;\n  border-radius: 20px;\n  background-color: #F2F2F2;\n  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.225);\n  z-index: 1;\n}\n.modal-body .navigation .invoice-img .invoice-img-header {\n  display: flex;\n  align-items: center;\n  color: var(--primary);\n  font-size: var(--sub-text);\n  margin-bottom: 1rem;\n}\n.modal-body .navigation .invoice-img .invoice-img-header .fa-print,\n.modal-body .navigation .invoice-img .invoice-img-header .fa-search-plus {\n  font-size: 15px;\n}\n.modal-body .navigation .invoice-img .invoice-img-body .ng-image-slider-container .main {\n  display: flex;\n  justify-content: center;\n}\n.modal-body .navigation .charge-address {\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 17px;\n}\n.modal-body .navigation .charge-address .charge-payment-head {\n  padding: 0.25rem 0.75rem;\n  font-size: var(--default-text);\n  color: #333333;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125);\n}\n.modal-body .navigation .charge-address .charge-payment-body {\n  padding: 0.5rem 0.75rem;\n  background-color: #F5F5F5;\n  border-bottom-left-radius: 17px;\n  border-bottom-right-radius: 17px;\n}\n.modal-body .navigation .charge-address .charge-payment-body .form-group {\n  line-height: 12px;\n}\n.modal-body .navigation .charge-address .charge-payment-body .form-group span {\n  font-size: var(--sub-text);\n  color: #333333;\n}\n@media screen and (min-width: 1440px) {\n  .modal-body .navigation .last {\n    margin-top: -90px;\n    z-index: 0;\n  }\n}\n.modal-body .navigation .last {\n  padding-bottom: 1rem;\n}\n.modal-body .navigation .last .btn-comment {\n  min-width: 180px;\n  background-color: var(--link);\n  font-size: 10px;\n  color: #fff;\n}\n.modal-body .navigation .logistics {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125);\n  padding-bottom: 1rem;\n}\n.modal-body .navigation .logistics .form-group span {\n  font-size: var(--sub-text);\n  color: var(--primary);\n}\n.modal-body .navigation .logistics .delivery-date {\n  padding: 0.75rem;\n  background-color: #EEF8FF;\n  border-radius: 12px;\n}\n.modal-body .navigation .logistics .delivery-date .title {\n  font-size: var(--sub-text);\n  color: var(--primary);\n  margin-bottom: 0.75rem;\n}\n.modal-body .navigation .logistics .delivery-date span {\n  display: block;\n  font-size: 10px;\n  color: #333333;\n}\n.modal-body .navigation .delivery-address-container {\n  padding: 1rem 0;\n}\n.modal-body .navigation .delivery-address-container .title {\n  display: block;\n  margin-bottom: 1rem;\n}\n.modal-body .navigation .delivery-address-container .delivery-address {\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 17px;\n}\n.modal-body .navigation .delivery-address-container .delivery-address .charge-payment-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.5rem 0.75rem;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125);\n}\n.modal-body .navigation .delivery-address-container .delivery-address .charge-payment-head .title {\n  font-size: var(--sub-text);\n  color: var(--title);\n  margin: 0;\n}\n.modal-body .navigation .delivery-address-container .delivery-address .charge-payment-head .sub-title {\n  font-size: 10px;\n  color: #333333;\n}\n.modal-body .navigation .delivery-address-container .delivery-address .charge-payment-body {\n  padding: 0.5rem 0.75rem;\n  background-color: #F5F5F5;\n  border-bottom-left-radius: 17px;\n  border-bottom-right-radius: 17px;\n}\n.modal-body .navigation .delivery-address-container .delivery-address .charge-payment-body .form-group {\n  line-height: 12px;\n}\n.modal-body .navigation .delivery-address-container .delivery-address .charge-payment-body .form-group span {\n  font-size: var(--sub-text);\n  color: #333333;\n}\n.modal-body .navigation .products {\n  margin: 0 !important;\n}\n@media screen and (max-width: 425px) {\n  .modal-body .navigation .products table span,\n.modal-body .navigation .products table label {\n    text-align: unset !important;\n  }\n}\n.modal-body .navigation .products table {\n  margin: 0 !important;\n}\n.modal-body .navigation .products table thead tr th:first-child {\n  width: 250px;\n}\n.modal-body .navigation .products table thead tr th:last-child {\n  width: 480px;\n}\n.modal-body .navigation .products table tbody td {\n  font-size: 11px !important;\n  vertical-align: middle;\n  color: var(--primary);\n}\n.modal-body .navigation .products table span,\n.modal-body .navigation .products table label {\n  max-width: 150px;\n  display: block;\n  text-align: left;\n}\n@media screen and (max-width: 425px) {\n  .modal-body .navigation .products table .item {\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n}\n.modal-body .navigation .products table .item {\n  display: flex;\n  align-items: center;\n}\n.modal-body .navigation .products table .item .img-thumbnail {\n  width: 80px;\n}\n.modal-body .navigation .products table .item .desc span:last-child {\n  color: var(--link);\n}\n.modal-body .navigation .products table .taxes {\n  justify-content: space-between;\n  padding: 0rem 0.5rem;\n}\n.modal-body .navigation .products table .taxes .form-group {\n  margin-bottom: 0.5rem !important;\n}\n.modal-footer {\n  justify-content: center !important;\n}\n.modal-footer .btn-close {\n  padding: 0.35rem 2rem;\n  border-radius: 32px;\n  background: var(--primary);\n  font-size: 14px;\n  color: #fff;\n  text-transform: uppercase;\n}\n.modal-footer .btn-close:focus {\n  box-shadow: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9yZXByZXNlbnRhdGl2ZS9vcmRlcnMvb3JkZXItZGV0YWlscy9DOlxcRWxnaW5VcDNcXGZyb250LWVsZ2luLTMuMFxcRlJPTlQtRUxHSU5VUC0zLjAvc3JjXFxhcHBcXG1haW5cXHJlcHJlc2VudGF0aXZlXFxvcmRlcnNcXG9yZGVyLWRldGFpbHNcXG9yZGVyLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vcmVwcmVzZW50YXRpdmUvb3JkZXJzL29yZGVyLWRldGFpbHMvb3JkZXItZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0lBQ0ksaUJBQUE7RUNDTjtBQUNGO0FERUE7RUFDSSx5QkFBQTtFQUNBLHVCQUFBO0FDQUo7QURHQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FDQUo7QURFSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNBUjtBREVRO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUNBWjtBREdRO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNEWjtBRE1BO0VBQ0ksNEJBQUE7QUNISjtBREtJO0VBQ0kseUJBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUNIUjtBRE1JO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtBQ0pSO0FEVVk7RUFDSSxjQUFBO0VBQ0EscUJBQUE7QUNSaEI7QURXWTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDVGhCO0FEYVE7RUFFSTtJQUNJLHNCQUFBO0VDWmQ7RURjYztJQUNJLHdCQUFBO0VDWmxCO0VEZWM7SUFDSSxtQkFBQTtJQUNBLDhCQUFBO0lBQ0Esb0JBQUE7RUNibEI7RURla0I7SUFDSSxvQkFBQTtFQ2J0QjtBQUNGO0FEa0JRO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQ2hCWjtBRGtCWTtFQUNJLFVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtBQ2hCaEI7QURtQlk7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0FDakJoQjtBRG1CZ0I7RUFDSSxrQ0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDakJwQjtBRG9CZ0I7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNsQnBCO0FEcUJnQjtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUNuQnBCO0FEc0JnQjtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7QUNwQnBCO0FEeUJnQjtFQUNJLHlCQUFBO0FDdkJwQjtBRDRCZ0I7RUFDSSx5QkFBQTtBQzFCcEI7QUQrQmdCO0VBQ0kseUJBQUE7QUM3QnBCO0FEa0NnQjtFQUNJLHlCQUFBO0FDaENwQjtBRHNDSTtFQUNJLGdCQUFBO0FDcENSO0FEc0NRO0VBQ0k7SUFDSSxRQUFBO0lBQ0EsV0FBQTtJQUNBLDJCQUFBO0VDcENkO0VEdUNVO0lBQ0kscUJBQUE7RUNyQ2Q7RUR3Q1U7O0lBRUkscUJBQUE7SUFDQSxvQkFBQTtFQ3RDZDtBQUNGO0FEeUNRO0VBQ0ksMEJBQUE7RUFDQSxrQkFBQTtBQ3ZDWjtBRDBDUTtFQUNJLFdBQUE7RUFDQSx3QkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ3hDWjtBRDJDUTs7RUFFSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7QUN6Q1o7QUQyQ1k7O0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLCtCQUFBO0FDeENoQjtBRDRDWTs7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsK0JBQUE7QUN6Q2hCO0FENkNRO0VBQ0kseUJBQUE7RUFDQSxxQkFBQTtFQUNBLFNBQUE7QUMzQ1o7QUQ2Q1k7RUFDSSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7QUMzQ2hCO0FEOENZO0VBQ0ksOEJBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUM1Q2hCO0FEOENnQjtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDNUNwQjtBRGdEWTtFQUNJLHVDQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FDOUNoQjtBRGtEUTtFQUNJO0lBQ0ksOEJBQUE7SUFDQSxtQkFBQTtJQUNBLG9CQUFBO0VDaERkO0VEa0RjO0lBQ0ksaUJBQUE7RUNoRGxCO0FBQ0Y7QURvRFE7RUFDSSw4QkFBQTtBQ2xEWjtBRHFEUTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUNuRFo7QURxRFk7RUFDSSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7QUNuRGhCO0FEc0RZO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FDcERoQjtBRHNEZ0I7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNwRHBCO0FEdURnQjtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUNyRHBCO0FEd0RnQjtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtBQ3REcEI7QUQyRGdCO0VBQ0ksb0NBQUE7QUN6RHBCO0FEK0RJOztFQUVJLGdCQUFBO0FDN0RSO0FEK0RROztFQUNJLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsaUJBQUE7QUM1RFo7QUQrRFE7O0VBQ0ksV0FBQTtFQUNBLHVDQUFBO0FDNURaO0FEK0RROztFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQzVEWjtBRDhEWTs7RUFDSSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUMzRGhCO0FEOERZOztFQUNJLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDM0RoQjtBRGtFUTtFQUNJLHlCQUFBO0VBQ0EsMEJBQUE7QUNoRVo7QURtRVE7RUFDSSxlQUFBO0VBQ0EscUJBQUE7QUNqRVo7QURvRVE7RUFDSSw2Q0FBQTtBQ2xFWjtBRHFFUTtFQUNJLGlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtBQ25FWjtBRHNFUTtFQUNJLFlBQUE7QUNwRVo7QUR1RVE7RUFDSSxpREFBQTtBQ3JFWjtBRHdFUTtFQUNJLG9CQUFBO0VBQ0EscUJBQUE7QUN0RVo7QUR5RVE7RUFDSSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7QUN2RVo7QUQwRVE7RUFDSSxzQkFBQTtFQUNBLHlCQUFBO0FDeEVaO0FEMkVRO0VBQ0ksMEJBQUE7RUFDQSxjQUFBO0FDekVaO0FEOEVZO0VBQ0ksc0JBQUE7QUM1RWhCO0FEK0VZO0VBQ0ksY0FBQTtFQUNBLDBCQUFBO0VBQ0EscUJBQUE7QUM3RWhCO0FEaUZRO0VBQ0k7SUFDSSwwQkFBQTtFQy9FZDtBQUNGO0FEa0ZRO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSw0Q0FBQTtFQUNBLFVBQUE7QUNoRlo7QURrRlk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7QUNoRmhCO0FEa0ZnQjs7RUFFSSxlQUFBO0FDaEZwQjtBRHNGb0I7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QUNwRnhCO0FEMEZRO0VBQ0ksc0NBQUE7RUFDQSxtQkFBQTtBQ3hGWjtBRDBGWTtFQUNJLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0VBQ0EsNkNBQUE7QUN4RmhCO0FEMkZZO0VBQ0ksdUJBQUE7RUFDQSx5QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7QUN6RmhCO0FEMkZnQjtFQUNJLGlCQUFBO0FDekZwQjtBRDJGb0I7RUFDSSwwQkFBQTtFQUNBLGNBQUE7QUN6RnhCO0FEK0ZRO0VBQ0k7SUFDSSxpQkFBQTtJQUNBLFVBQUE7RUM3RmQ7QUFDRjtBRGdHUTtFQUNJLG9CQUFBO0FDOUZaO0FEZ0dZO0VBQ0ksZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDOUZoQjtBRGtHUTtFQUNJLDZDQUFBO0VBQ0Esb0JBQUE7QUNoR1o7QURtR2dCO0VBQ0ksMEJBQUE7RUFDQSxxQkFBQTtBQ2pHcEI7QURxR1k7RUFDSSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUNuR2hCO0FEcUdnQjtFQUNJLDBCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQ25HcEI7QURzR2dCO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDcEdwQjtBRHlHUTtFQUNJLGVBQUE7QUN2R1o7QUR5R1k7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7QUN2R2hCO0FEMEdZO0VBQ0ksc0NBQUE7RUFDQSxtQkFBQTtBQ3hHaEI7QUQwR2dCO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtFQUNBLDZDQUFBO0FDeEdwQjtBRDBHb0I7RUFDSSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQ3hHeEI7QUQyR29CO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUN6R3hCO0FENkdnQjtFQUNJLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0FDM0dwQjtBRDZHb0I7RUFDSSxpQkFBQTtBQzNHeEI7QUQ2R3dCO0VBQ0ksMEJBQUE7RUFDQSxjQUFBO0FDM0c1QjtBRGtIUTtFQUNJLG9CQUFBO0FDaEhaO0FEa0hZO0VBR1E7O0lBRUksNEJBQUE7RUNsSHRCO0FBQ0Y7QURzSFk7RUFDSSxvQkFBQTtBQ3BIaEI7QURzSGdCO0VBQ0ksWUFBQTtBQ3BIcEI7QUR1SGdCO0VBQ0ksWUFBQTtBQ3JIcEI7QUR3SGdCO0VBQ0ksMEJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FDdEhwQjtBRHlIZ0I7O0VBRUksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUN2SHBCO0FEMEhnQjtFQUNJO0lBQ0ksZUFBQTtJQUNBLHVCQUFBO0VDeEh0QjtBQUNGO0FEMkhnQjtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQ3pIcEI7QUQySG9CO0VBQ0ksV0FBQTtBQ3pIeEI7QUQ2SHdCO0VBQ0ksa0JBQUE7QUMzSDVCO0FEZ0lnQjtFQUNJLDhCQUFBO0VBQ0Esb0JBQUE7QUM5SHBCO0FEaUlvQjtFQUNJLGdDQUFBO0FDL0h4QjtBRHVJQTtFQUNJLGtDQUFBO0FDcElKO0FEc0lJO0VBQ0kscUJBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQ3BJUjtBRHNJUTtFQUNJLDJCQUFBO0FDcElaIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9yZXByZXNlbnRhdGl2ZS9vcmRlcnMvb3JkZXItZGV0YWlscy9vcmRlci1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAgIC5tb2RhbC14bCB7XG4gICAgICAgIG1heC13aWR0aDogMTM0MHB4O1xuICAgIH1cbn1cblxuLm1vZGFsLWJhY2tkcm9wIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2M2FmO1xuICAgIG9wYWNpdHk6IDkwJSAhaW1wb3J0YW50O1xufVxuXG4ubW9kYWwtaGVhZGVyIHtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGJvcmRlcjogbm9uZTtcblxuICAgIC5jbG9zZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICBzbWFsbCB7XG4gICAgICAgICAgICBtYXJnaW46IDBweCAycHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIH1cblxuICAgICAgICBzbWFsbDpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB3aWR0aDogMTVweDtcbiAgICAgICAgICAgIGhlaWdodDogMTVweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ubW9kYWwtYm9keSB7XG4gICAgcGFkZGluZzogMHJlbSAzcmVtIDFyZW0gM3JlbTtcblxuICAgIGxhYmVsIHtcbiAgICAgICAgY29sb3I6ICM2Yzc1N2QgIWltcG9ydGFudDtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1zdWItdGV4dCk7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHggIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgIH1cblxuICAgIC5mb3JtLWNvbnRyb2wge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICB9XG5cbiAgICAuZGVzY3JpcHRpb24ge1xuXG4gICAgICAgIC5jb2x1bW4tMSB7XG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3BhbjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjI1cmVtO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjVweCkge1xuXG4gICAgICAgICAgICAuY29sdW1uLTIge1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgICAgICAgICAgICAubGluZSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuc3RhZ2Uge1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICAgICAgICAgIHNwYW46bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmNvbHVtbi0yIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAgICAgICAgIC5saW5lIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDI2JTtcbiAgICAgICAgICAgICAgICBsZWZ0OiA3JTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjRTVFNUU1O1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnN0YWdlIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMHJlbSAycmVtO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XG5cbiAgICAgICAgICAgICAgICBlbS5mYS1jaGVjay1jaXJjbGUge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzRCRDM3QjtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzcGFuOm50aC1jaGlsZCgxKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZW06bm90KC5mYS1jaGVjay1jaXJjbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAycHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yMjUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnN0YWdlOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgICAgICAgZW0ge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZFMDcwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnN0YWdlOm50aC1jaGlsZCgzKSB7XG4gICAgICAgICAgICAgICAgZW0ge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZCQzcwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnN0YWdlOm50aC1jaGlsZCg0KSB7XG4gICAgICAgICAgICAgICAgZW0ge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNERCRjY5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnN0YWdlOm50aC1jaGlsZCg1KSB7XG4gICAgICAgICAgICAgICAgZW0ge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNERCMkZGO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5pbnZvaWNlcyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgICAgICAgICAgIC5mb3JtLWdyb3VwIHtcbiAgICAgICAgICAgICAgICBvcmRlcjogMztcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5idG4tY3VzdG9tIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNDUlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5idG4tcHJldmlvdXMsXG4gICAgICAgICAgICAuYnRuLW5leHQge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA0NSUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGVjdCB7XG4gICAgICAgICAgICBmb250LXNpemU6IHZhcigtLXN1Yi10ZXh0KTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5idG4tY3VzdG9tIHtcbiAgICAgICAgICAgIHdpZHRoOiA5MHB4O1xuICAgICAgICAgICAgcGFkZGluZzogLjI1cmVtIC43NXJlbTtcbiAgICAgICAgICAgIG1hcmdpbjogMHJlbSAwLjI1cmVtO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgICAgICAgICBmb250LXNpemU6IHZhcigtLXN1Yi10ZXh0KTtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA5cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuYnRuLXByZXZpb3VzLFxuICAgICAgICAuYnRuLW5leHQge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgd2lkdGg6IDE4NXB4O1xuICAgICAgICAgICAgcGFkZGluZzogLjI1cmVtIC43NXJlbTtcbiAgICAgICAgICAgIG1hcmdpbjogMHJlbSAwcmVtIDByZW0gLjc1cmVtO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzU2Q0NGMjtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tc3ViLXRleHQpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzJweDtcblxuICAgICAgICAgICAgLmZhLWNoZXZyb24tbGVmdCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogMzAlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDclO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zMCUsIC03JSk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmZhLWNoZXZyb24tcmlnaHQge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDMwJTtcbiAgICAgICAgICAgICAgICByaWdodDogNCU7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTMwJSwgLTQlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRhYmxlIHtcbiAgICAgICAgICAgIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG4gICAgICAgICAgICBib3JkZXItc3BhY2luZzogMCAzcHg7XG4gICAgICAgICAgICBib3JkZXI6IDA7XG5cbiAgICAgICAgICAgIHRoZWFkIHRoIHtcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjU5ODA7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IG1vbnRzZXJyYXRyZWd1bGFyO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tc3ViLXRleHQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0Ym9keSB0ZCB7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IG1vbnRzZXJyYXRyZWd1bGFyO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tc3ViLXRleHQpO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1saW5rKTtcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXG4gICAgICAgICAgICAgICAgLmNsaWVudC10ZCB7XG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTgwcHg7XG4gICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IENvcmVSaGlubzY1Ym9sZCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDk4NkU0ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgICAgICAgICAgIC5zdGFnZSB7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgICAgICBzcGFuOm50aC1jaGlsZCgxKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNnB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5oaXN0b3JpYy10ZXh0IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZGVmYXVsdC10ZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oaXN0b3JpYyB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgICAgICAgICAubGluZSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiAxOSU7XG4gICAgICAgICAgICAgICAgbGVmdDogNyU7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI0U1RTVFNTtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc3RhZ2Uge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcmVtIDJyZW07XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEycHg7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc3BhbjpudGgtY2hpbGQoMSkge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGVtIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0U1RTVFNTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAycHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yMjUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnN0YWdlOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIGVtIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzREQjJGRiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5jbGllbnQsXG4gICAgLnByb2R1Y3RzIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcblxuICAgICAgICAuY2hvc2VuLWNsaWVudCB7XG4gICAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1kZWZhdWx0LXRleHQpO1xuICAgICAgICAgICAgcGFkZGluZzogMC4yNXJlbSAwLjc1cmVtO1xuICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNnB4O1xuICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDZweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmJvdHRvbS1saW5lIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIHZhcigtLXByaW1hcnkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGFibGUge1xuICAgICAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbiAgICAgICAgICAgIGJvcmRlci1zcGFjaW5nOiAycHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuXG4gICAgICAgICAgICB0aGVhZCB0aCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0QzRUNGRjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLXN1Yi10ZXh0KTtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRib2R5IHRkIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLXN1Yi10ZXh0KTtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAubmF2aWdhdGlvbiB7XG5cbiAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmluZmVyaW9yLWxpbmUge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZpbHRlci1sYWJlbCB7XG4gICAgICAgICAgICBtYXJnaW46IDFyZW0gMHJlbTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZGVmYXVsdC10ZXh0KTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb3JtLWNvbnRyb2wge1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgdGV4dGFyZWEge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSkgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5uYXYtaXRlbSB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiB1bnNldDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC4yNXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5uYXYtdGFicyAubmF2LWxpbmsge1xuICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1zdWItdGV4dCk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xuICAgICAgICAgICAgY29sb3I6ICMzMzMzMzMgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5uYXYtdGFicyAubmF2LWxpbmsuYWN0aXZlIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNlZ21lbnQge1xuICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1zdWItdGV4dCk7XG4gICAgICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgICAgfVxuXG4gICAgICAgIC5zZWdtZW50LWluZm8ge1xuXG4gICAgICAgICAgICAuZm9ybS1ncm91cCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc21hbGwge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tc3ViLXRleHQpO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gICAgICAgICAgICAuaW52b2ljZS1pbWcge1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmludm9pY2UtaW1nIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogMjQ1cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwLjc1cmVtO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGMkYyRjI7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMjI1KTtcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XG5cbiAgICAgICAgICAgIC5pbnZvaWNlLWltZy1oZWFkZXIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1zdWItdGV4dCk7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcblxuICAgICAgICAgICAgICAgIC5mYS1wcmludCxcbiAgICAgICAgICAgICAgICAuZmEtc2VhcmNoLXBsdXMge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaW52b2ljZS1pbWctYm9keSB7XG4gICAgICAgICAgICAgICAgLm5nLWltYWdlLXNsaWRlci1jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICAubWFpbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuY2hhcmdlLWFkZHJlc3Mge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxN3B4O1xuXG4gICAgICAgICAgICAuY2hhcmdlLXBheW1lbnQtaGVhZCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMC4yNXJlbSAwLjc1cmVtO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZGVmYXVsdC10ZXh0KTtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jaGFyZ2UtcGF5bWVudC1ib2R5IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjVyZW0gMC43NXJlbTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE3cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE3cHg7XG5cbiAgICAgICAgICAgICAgICAuZm9ybS1ncm91cCB7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xuXG4gICAgICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1zdWItdGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDBweCkge1xuICAgICAgICAgICAgLmxhc3Qge1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC05MHB4O1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAubGFzdCB7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcblxuICAgICAgICAgICAgLmJ0bi1jb21tZW50IHtcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDE4MHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpbmspO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5sb2dpc3RpY3Mge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDFyZW07XG5cbiAgICAgICAgICAgIC5mb3JtLWdyb3VwIHtcbiAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1zdWItdGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5kZWxpdmVyeS1kYXRlIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjc1cmVtO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFRUY4RkY7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcblxuICAgICAgICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tc3ViLXRleHQpO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5kZWxpdmVyeS1hZGRyZXNzLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtIDA7XG5cbiAgICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmRlbGl2ZXJ5LWFkZHJlc3Mge1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE3cHg7XG5cbiAgICAgICAgICAgICAgICAuY2hhcmdlLXBheW1lbnQtaGVhZCB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC41cmVtIDAuNzVyZW07XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcblxuICAgICAgICAgICAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1zdWItdGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGl0bGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnN1Yi10aXRsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5jaGFyZ2UtcGF5bWVudC1ib2R5IHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC41cmVtIDAuNzVyZW07XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE3cHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxN3B4O1xuXG4gICAgICAgICAgICAgICAgICAgIC5mb3JtLWdyb3VwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLXN1Yi10ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5wcm9kdWN0cyB7XG4gICAgICAgICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcblxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgICAgICAgICAgICAgICB0YWJsZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgc3BhbixcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogdW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGFibGUge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICAgICAgdGhlYWQgdHIgdGg6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhlYWQgdHIgdGg6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0ODBweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0Ym9keSB0ZCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc3BhbixcbiAgICAgICAgICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTUwcHg7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gICAgICAgICAgICAgICAgICAgIC5pdGVtIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLml0ZW0ge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICAgICAgICAgICAgIC5pbWctdGh1bWJuYWlsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmRlc2Mge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3BhbjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tbGluayk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAudGF4ZXMge1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDByZW0gMC41cmVtO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgLmZvcm0tZ3JvdXAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5tb2RhbC1mb290ZXIge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG5cbiAgICAuYnRuLWNsb3NlIHtcbiAgICAgICAgcGFkZGluZzogMC4zNXJlbSAycmVtO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzMnB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblxuICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5tb2RhbC14bCB7XG4gICAgbWF4LXdpZHRoOiAxMzQwcHg7XG4gIH1cbn1cbi5tb2RhbC1iYWNrZHJvcCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDYzYWY7XG4gIG9wYWNpdHk6IDkwJSAhaW1wb3J0YW50O1xufVxuXG4ubW9kYWwtaGVhZGVyIHtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm9yZGVyOiBub25lO1xufVxuLm1vZGFsLWhlYWRlciAuY2xvc2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubW9kYWwtaGVhZGVyIC5jbG9zZSBzbWFsbCB7XG4gIG1hcmdpbjogMHB4IDJweDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLm1vZGFsLWhlYWRlciAuY2xvc2Ugc21hbGw6bGFzdC1jaGlsZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4ubW9kYWwtYm9keSB7XG4gIHBhZGRpbmc6IDByZW0gM3JlbSAxcmVtIDNyZW07XG59XG4ubW9kYWwtYm9keSBsYWJlbCB7XG4gIGNvbG9yOiAjNmM3NTdkICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc3ViLXRleHQpO1xuICBtYXJnaW4tbGVmdDogNXB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbn1cbi5tb2RhbC1ib2R5IC5mb3JtLWNvbnRyb2wge1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbn1cbi5tb2RhbC1ib2R5IC5kZXNjcmlwdGlvbiAuY29sdW1uLTEgc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG4ubW9kYWwtYm9keSAuZGVzY3JpcHRpb24gLmNvbHVtbi0xIHNwYW46bGFzdC1jaGlsZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAwLjI1cmVtO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjVweCkge1xuICAubW9kYWwtYm9keSAuZGVzY3JpcHRpb24gLmNvbHVtbi0yIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5tb2RhbC1ib2R5IC5kZXNjcmlwdGlvbiAuY29sdW1uLTIgLmxpbmUge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuICAubW9kYWwtYm9keSAuZGVzY3JpcHRpb24gLmNvbHVtbi0yIC5zdGFnZSB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1vZGFsLWJvZHkgLmRlc2NyaXB0aW9uIC5jb2x1bW4tMiAuc3RhZ2Ugc3BhbjpudGgtY2hpbGQoMSkge1xuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICB9XG59XG4ubW9kYWwtYm9keSAuZGVzY3JpcHRpb24gLmNvbHVtbi0yIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4ubW9kYWwtYm9keSAuZGVzY3JpcHRpb24gLmNvbHVtbi0yIC5saW5lIHtcbiAgd2lkdGg6IDkwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyNiU7XG4gIGxlZnQ6IDclO1xuICBib3JkZXI6IDJweCBzb2xpZCAjRTVFNUU1O1xuICB6LWluZGV4OiAwO1xufVxuLm1vZGFsLWJvZHkgLmRlc2NyaXB0aW9uIC5jb2x1bW4tMiAuc3RhZ2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbjogMHJlbSAycmVtO1xuICBsaW5lLWhlaWdodDogMTJweDtcbiAgei1pbmRleDogMTtcbn1cbi5tb2RhbC1ib2R5IC5kZXNjcmlwdGlvbiAuY29sdW1uLTIgLnN0YWdlIGVtLmZhLWNoZWNrLWNpcmNsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNEJEMzdCO1xuICBmb250LXNpemU6IDEycHg7XG59XG4ubW9kYWwtYm9keSAuZGVzY3JpcHRpb24gLmNvbHVtbi0yIC5zdGFnZSBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgY29sb3I6ICMzMzMzMzM7XG59XG4ubW9kYWwtYm9keSAuZGVzY3JpcHRpb24gLmNvbHVtbi0yIC5zdGFnZSBzcGFuOm50aC1jaGlsZCgxKSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG59XG4ubW9kYWwtYm9keSAuZGVzY3JpcHRpb24gLmNvbHVtbi0yIC5zdGFnZSBlbTpub3QoLmZhLWNoZWNrLWNpcmNsZSkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3gtc2hhZG93OiAwIDJweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIyNSk7XG59XG4ubW9kYWwtYm9keSAuZGVzY3JpcHRpb24gLmNvbHVtbi0yIC5zdGFnZTpudGgtY2hpbGQoMikgZW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZFMDcwO1xufVxuLm1vZGFsLWJvZHkgLmRlc2NyaXB0aW9uIC5jb2x1bW4tMiAuc3RhZ2U6bnRoLWNoaWxkKDMpIGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQkM3MDtcbn1cbi5tb2RhbC1ib2R5IC5kZXNjcmlwdGlvbiAuY29sdW1uLTIgLnN0YWdlOm50aC1jaGlsZCg0KSBlbSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0REJGNjk7XG59XG4ubW9kYWwtYm9keSAuZGVzY3JpcHRpb24gLmNvbHVtbi0yIC5zdGFnZTpudGgtY2hpbGQoNSkgZW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNERCMkZGO1xufVxuLm1vZGFsLWJvZHkgLmludm9pY2VzIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gIC5tb2RhbC1ib2R5IC5pbnZvaWNlcyAuZm9ybS1ncm91cCB7XG4gICAgb3JkZXI6IDM7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5tb2RhbC1ib2R5IC5pbnZvaWNlcyAuYnRuLWN1c3RvbSB7XG4gICAgd2lkdGg6IDQ1JSAhaW1wb3J0YW50O1xuICB9XG4gIC5tb2RhbC1ib2R5IC5pbnZvaWNlcyAuYnRuLXByZXZpb3VzLFxuLm1vZGFsLWJvZHkgLmludm9pY2VzIC5idG4tbmV4dCB7XG4gICAgd2lkdGg6IDQ1JSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICB9XG59XG4ubW9kYWwtYm9keSAuaW52b2ljZXMgc2VsZWN0IHtcbiAgZm9udC1zaXplOiB2YXIoLS1zdWItdGV4dCk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cbi5tb2RhbC1ib2R5IC5pbnZvaWNlcyAuYnRuLWN1c3RvbSB7XG4gIHdpZHRoOiA5MHB4O1xuICBwYWRkaW5nOiAwLjI1cmVtIDAuNzVyZW07XG4gIG1hcmdpbjogMHJlbSAwLjI1cmVtO1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgY29sb3I6IHZhcigtLWJsdWUpO1xuICBmb250LXNpemU6IHZhcigtLXN1Yi10ZXh0KTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xufVxuLm1vZGFsLWJvZHkgLmludm9pY2VzIC5idG4tcHJldmlvdXMsXG4ubW9kYWwtYm9keSAuaW52b2ljZXMgLmJ0bi1uZXh0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTg1cHg7XG4gIHBhZGRpbmc6IDAuMjVyZW0gMC43NXJlbTtcbiAgbWFyZ2luOiAwcmVtIDByZW0gMHJlbSAwLjc1cmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCAjNTZDQ0YyO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc3ViLXRleHQpO1xuICBib3JkZXItcmFkaXVzOiAzMnB4O1xufVxuLm1vZGFsLWJvZHkgLmludm9pY2VzIC5idG4tcHJldmlvdXMgLmZhLWNoZXZyb24tbGVmdCxcbi5tb2RhbC1ib2R5IC5pbnZvaWNlcyAuYnRuLW5leHQgLmZhLWNoZXZyb24tbGVmdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzMCU7XG4gIGxlZnQ6IDclO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMzAlLCAtNyUpO1xufVxuLm1vZGFsLWJvZHkgLmludm9pY2VzIC5idG4tcHJldmlvdXMgLmZhLWNoZXZyb24tcmlnaHQsXG4ubW9kYWwtYm9keSAuaW52b2ljZXMgLmJ0bi1uZXh0IC5mYS1jaGV2cm9uLXJpZ2h0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDMwJTtcbiAgcmlnaHQ6IDQlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMzAlLCAtNCUpO1xufVxuLm1vZGFsLWJvZHkgLmludm9pY2VzIHRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDAgM3B4O1xuICBib3JkZXI6IDA7XG59XG4ubW9kYWwtYm9keSAuaW52b2ljZXMgdGFibGUgdGhlYWQgdGgge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjY1OTgwO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6IG1vbnRzZXJyYXRyZWd1bGFyO1xuICBmb250LXNpemU6IHZhcigtLXN1Yi10ZXh0KTtcbn1cbi5tb2RhbC1ib2R5IC5pbnZvaWNlcyB0YWJsZSB0Ym9keSB0ZCB7XG4gIGZvbnQtZmFtaWx5OiBtb250c2VycmF0cmVndWxhcjtcbiAgZm9udC1zaXplOiB2YXIoLS1zdWItdGV4dCk7XG4gIGNvbG9yOiB2YXIoLS1saW5rKTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5tb2RhbC1ib2R5IC5pbnZvaWNlcyB0YWJsZSB0Ym9keSB0ZCAuY2xpZW50LXRkIHtcbiAgbWF4LXdpZHRoOiAxODBweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4ubW9kYWwtYm9keSAuaW52b2ljZXMgdGFibGUgYSB7XG4gIGZvbnQtZmFtaWx5OiBDb3JlUmhpbm82NWJvbGQgIWltcG9ydGFudDtcbiAgY29sb3I6ICMwOTg2RTQgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgLm1vZGFsLWJvZHkgLmludm9pY2VzIC5zdGFnZSB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1vZGFsLWJvZHkgLmludm9pY2VzIC5zdGFnZSBzcGFuOm50aC1jaGlsZCgxKSB7XG4gICAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gIH1cbn1cbi5tb2RhbC1ib2R5IC5pbnZvaWNlcyAuaGlzdG9yaWMtdGV4dCB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZGVmYXVsdC10ZXh0KTtcbn1cbi5tb2RhbC1ib2R5IC5pbnZvaWNlcyAuaGlzdG9yaWMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5tb2RhbC1ib2R5IC5pbnZvaWNlcyAuaGlzdG9yaWMgLmxpbmUge1xuICB3aWR0aDogOTAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE5JTtcbiAgbGVmdDogNyU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNFNUU1RTU7XG4gIHotaW5kZXg6IDA7XG59XG4ubW9kYWwtYm9keSAuaW52b2ljZXMgLmhpc3RvcmljIC5zdGFnZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiAwcmVtIDJyZW07XG4gIGxpbmUtaGVpZ2h0OiAxMnB4O1xuICB6LWluZGV4OiAxO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubW9kYWwtYm9keSAuaW52b2ljZXMgLmhpc3RvcmljIC5zdGFnZSBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgY29sb3I6ICMzMzMzMzM7XG59XG4ubW9kYWwtYm9keSAuaW52b2ljZXMgLmhpc3RvcmljIC5zdGFnZSBzcGFuOm50aC1jaGlsZCgxKSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG59XG4ubW9kYWwtYm9keSAuaW52b2ljZXMgLmhpc3RvcmljIC5zdGFnZSBlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFNUU1RTU7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMjI1KTtcbn1cbi5tb2RhbC1ib2R5IC5pbnZvaWNlcyAuaGlzdG9yaWMgLnN0YWdlOmxhc3QtY2hpbGQgZW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNERCMkZGICFpbXBvcnRhbnQ7XG59XG4ubW9kYWwtYm9keSAuY2xpZW50LFxuLm1vZGFsLWJvZHkgLnByb2R1Y3RzIHtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbn1cbi5tb2RhbC1ib2R5IC5jbGllbnQgLmNob3Nlbi1jbGllbnQsXG4ubW9kYWwtYm9keSAucHJvZHVjdHMgLmNob3Nlbi1jbGllbnQge1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiB2YXIoLS1kZWZhdWx0LXRleHQpO1xuICBwYWRkaW5nOiAwLjI1cmVtIDAuNzVyZW07XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDZweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDZweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4ubW9kYWwtYm9keSAuY2xpZW50IC5ib3R0b20tbGluZSxcbi5tb2RhbC1ib2R5IC5wcm9kdWN0cyAuYm90dG9tLWxpbmUge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIHZhcigtLXByaW1hcnkpO1xufVxuLm1vZGFsLWJvZHkgLmNsaWVudCB0YWJsZSxcbi5tb2RhbC1ib2R5IC5wcm9kdWN0cyB0YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG4gIGJvcmRlci1zcGFjaW5nOiAycHg7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG4ubW9kYWwtYm9keSAuY2xpZW50IHRhYmxlIHRoZWFkIHRoLFxuLm1vZGFsLWJvZHkgLnByb2R1Y3RzIHRhYmxlIHRoZWFkIHRoIHtcbiAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNEM0VDRkY7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc3ViLXRleHQpO1xuICBjb2xvcjogIzMzMzMzMztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1vZGFsLWJvZHkgLmNsaWVudCB0YWJsZSB0Ym9keSB0ZCxcbi5tb2RhbC1ib2R5IC5wcm9kdWN0cyB0YWJsZSB0Ym9keSB0ZCB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc3ViLXRleHQpO1xuICBjb2xvcjogIzMzMzMzMztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1vZGFsLWJvZHkgLm5hdmlnYXRpb24gbGFiZWwge1xuICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbn1cbi5tb2RhbC1ib2R5IC5uYXZpZ2F0aW9uIGlucHV0IHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG59XG4ubW9kYWwtYm9keSAubmF2aWdhdGlvbiAuaW5mZXJpb3ItbGluZSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcbn1cbi5tb2RhbC1ib2R5IC5uYXZpZ2F0aW9uIC5maWx0ZXItbGFiZWwge1xuICBtYXJnaW46IDFyZW0gMHJlbTtcbiAgZm9udC1zaXplOiB2YXIoLS1kZWZhdWx0LXRleHQpO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG59XG4ubW9kYWwtYm9keSAubmF2aWdhdGlvbiAuZm9ybS1jb250cm9sIHtcbiAgYm9yZGVyOiBub25lO1xufVxuLm1vZGFsLWJvZHkgLm5hdmlnYXRpb24gdGV4dGFyZWEge1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KSAhaW1wb3J0YW50O1xufVxuLm1vZGFsLWJvZHkgLm5hdmlnYXRpb24gLm5hdi1pdGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogdW5zZXQ7XG4gIG1hcmdpbi1yaWdodDogMC4yNXJlbTtcbn1cbi5tb2RhbC1ib2R5IC5uYXZpZ2F0aW9uIC5uYXYtdGFicyAubmF2LWxpbmsge1xuICBmb250LXNpemU6IHZhcigtLXN1Yi10ZXh0KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcbiAgY29sb3I6ICMzMzMzMzMgIWltcG9ydGFudDtcbn1cbi5tb2RhbC1ib2R5IC5uYXZpZ2F0aW9uIC5uYXYtdGFicyAubmF2LWxpbmsuYWN0aXZlIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbn1cbi5tb2RhbC1ib2R5IC5uYXZpZ2F0aW9uIC5zZWdtZW50IHtcbiAgZm9udC1zaXplOiB2YXIoLS1zdWItdGV4dCk7XG4gIGNvbG9yOiAjMzMzMzMzO1xufVxuLm1vZGFsLWJvZHkgLm5hdmlnYXRpb24gLnNlZ21lbnQtaW5mbyAuZm9ybS1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XG59XG4ubW9kYWwtYm9keSAubmF2aWdhdGlvbiAuc2VnbWVudC1pbmZvIHNtYWxsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc3ViLXRleHQpO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjVweCkge1xuICAubW9kYWwtYm9keSAubmF2aWdhdGlvbiAuaW52b2ljZS1pbWcge1xuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG59XG4ubW9kYWwtYm9keSAubmF2aWdhdGlvbiAuaW52b2ljZS1pbWcge1xuICBtYXgtd2lkdGg6IDI0NXB4O1xuICBwYWRkaW5nOiAwLjc1cmVtO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJGMkYyO1xuICBib3gtc2hhZG93OiAwcHggMnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMjI1KTtcbiAgei1pbmRleDogMTtcbn1cbi5tb2RhbC1ib2R5IC5uYXZpZ2F0aW9uIC5pbnZvaWNlLWltZyAuaW52b2ljZS1pbWctaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBmb250LXNpemU6IHZhcigtLXN1Yi10ZXh0KTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbi5tb2RhbC1ib2R5IC5uYXZpZ2F0aW9uIC5pbnZvaWNlLWltZyAuaW52b2ljZS1pbWctaGVhZGVyIC5mYS1wcmludCxcbi5tb2RhbC1ib2R5IC5uYXZpZ2F0aW9uIC5pbnZvaWNlLWltZyAuaW52b2ljZS1pbWctaGVhZGVyIC5mYS1zZWFyY2gtcGx1cyB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5tb2RhbC1ib2R5IC5uYXZpZ2F0aW9uIC5pbnZvaWNlLWltZyAuaW52b2ljZS1pbWctYm9keSAubmctaW1hZ2Utc2xpZGVyLWNvbnRhaW5lciAubWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLm1vZGFsLWJvZHkgLm5hdmlnYXRpb24gLmNoYXJnZS1hZGRyZXNzIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG4gIGJvcmRlci1yYWRpdXM6IDE3cHg7XG59XG4ubW9kYWwtYm9keSAubmF2aWdhdGlvbiAuY2hhcmdlLWFkZHJlc3MgLmNoYXJnZS1wYXltZW50LWhlYWQge1xuICBwYWRkaW5nOiAwLjI1cmVtIDAuNzVyZW07XG4gIGZvbnQtc2l6ZTogdmFyKC0tZGVmYXVsdC10ZXh0KTtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcbn1cbi5tb2RhbC1ib2R5IC5uYXZpZ2F0aW9uIC5jaGFyZ2UtYWRkcmVzcyAuY2hhcmdlLXBheW1lbnQtYm9keSB7XG4gIHBhZGRpbmc6IDAuNXJlbSAwLjc1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxN3B4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTdweDtcbn1cbi5tb2RhbC1ib2R5IC5uYXZpZ2F0aW9uIC5jaGFyZ2UtYWRkcmVzcyAuY2hhcmdlLXBheW1lbnQtYm9keSAuZm9ybS1ncm91cCB7XG4gIGxpbmUtaGVpZ2h0OiAxMnB4O1xufVxuLm1vZGFsLWJvZHkgLm5hdmlnYXRpb24gLmNoYXJnZS1hZGRyZXNzIC5jaGFyZ2UtcGF5bWVudC1ib2R5IC5mb3JtLWdyb3VwIHNwYW4ge1xuICBmb250LXNpemU6IHZhcigtLXN1Yi10ZXh0KTtcbiAgY29sb3I6ICMzMzMzMzM7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcbiAgLm1vZGFsLWJvZHkgLm5hdmlnYXRpb24gLmxhc3Qge1xuICAgIG1hcmdpbi10b3A6IC05MHB4O1xuICAgIHotaW5kZXg6IDA7XG4gIH1cbn1cbi5tb2RhbC1ib2R5IC5uYXZpZ2F0aW9uIC5sYXN0IHtcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG59XG4ubW9kYWwtYm9keSAubmF2aWdhdGlvbiAubGFzdCAuYnRuLWNvbW1lbnQge1xuICBtaW4td2lkdGg6IDE4MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saW5rKTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogI2ZmZjtcbn1cbi5tb2RhbC1ib2R5IC5uYXZpZ2F0aW9uIC5sb2dpc3RpY3Mge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xufVxuLm1vZGFsLWJvZHkgLm5hdmlnYXRpb24gLmxvZ2lzdGljcyAuZm9ybS1ncm91cCBzcGFuIHtcbiAgZm9udC1zaXplOiB2YXIoLS1zdWItdGV4dCk7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbn1cbi5tb2RhbC1ib2R5IC5uYXZpZ2F0aW9uIC5sb2dpc3RpY3MgLmRlbGl2ZXJ5LWRhdGUge1xuICBwYWRkaW5nOiAwLjc1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVGOEZGO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xufVxuLm1vZGFsLWJvZHkgLm5hdmlnYXRpb24gLmxvZ2lzdGljcyAuZGVsaXZlcnktZGF0ZSAudGl0bGUge1xuICBmb250LXNpemU6IHZhcigtLXN1Yi10ZXh0KTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xufVxuLm1vZGFsLWJvZHkgLm5hdmlnYXRpb24gLmxvZ2lzdGljcyAuZGVsaXZlcnktZGF0ZSBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICMzMzMzMzM7XG59XG4ubW9kYWwtYm9keSAubmF2aWdhdGlvbiAuZGVsaXZlcnktYWRkcmVzcy1jb250YWluZXIge1xuICBwYWRkaW5nOiAxcmVtIDA7XG59XG4ubW9kYWwtYm9keSAubmF2aWdhdGlvbiAuZGVsaXZlcnktYWRkcmVzcy1jb250YWluZXIgLnRpdGxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG4ubW9kYWwtYm9keSAubmF2aWdhdGlvbiAuZGVsaXZlcnktYWRkcmVzcy1jb250YWluZXIgLmRlbGl2ZXJ5LWFkZHJlc3Mge1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcbiAgYm9yZGVyLXJhZGl1czogMTdweDtcbn1cbi5tb2RhbC1ib2R5IC5uYXZpZ2F0aW9uIC5kZWxpdmVyeS1hZGRyZXNzLWNvbnRhaW5lciAuZGVsaXZlcnktYWRkcmVzcyAuY2hhcmdlLXBheW1lbnQtaGVhZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMC41cmVtIDAuNzVyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcbn1cbi5tb2RhbC1ib2R5IC5uYXZpZ2F0aW9uIC5kZWxpdmVyeS1hZGRyZXNzLWNvbnRhaW5lciAuZGVsaXZlcnktYWRkcmVzcyAuY2hhcmdlLXBheW1lbnQtaGVhZCAudGl0bGUge1xuICBmb250LXNpemU6IHZhcigtLXN1Yi10ZXh0KTtcbiAgY29sb3I6IHZhcigtLXRpdGxlKTtcbiAgbWFyZ2luOiAwO1xufVxuLm1vZGFsLWJvZHkgLm5hdmlnYXRpb24gLmRlbGl2ZXJ5LWFkZHJlc3MtY29udGFpbmVyIC5kZWxpdmVyeS1hZGRyZXNzIC5jaGFyZ2UtcGF5bWVudC1oZWFkIC5zdWItdGl0bGUge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiAjMzMzMzMzO1xufVxuLm1vZGFsLWJvZHkgLm5hdmlnYXRpb24gLmRlbGl2ZXJ5LWFkZHJlc3MtY29udGFpbmVyIC5kZWxpdmVyeS1hZGRyZXNzIC5jaGFyZ2UtcGF5bWVudC1ib2R5IHtcbiAgcGFkZGluZzogMC41cmVtIDAuNzVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE3cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxN3B4O1xufVxuLm1vZGFsLWJvZHkgLm5hdmlnYXRpb24gLmRlbGl2ZXJ5LWFkZHJlc3MtY29udGFpbmVyIC5kZWxpdmVyeS1hZGRyZXNzIC5jaGFyZ2UtcGF5bWVudC1ib2R5IC5mb3JtLWdyb3VwIHtcbiAgbGluZS1oZWlnaHQ6IDEycHg7XG59XG4ubW9kYWwtYm9keSAubmF2aWdhdGlvbiAuZGVsaXZlcnktYWRkcmVzcy1jb250YWluZXIgLmRlbGl2ZXJ5LWFkZHJlc3MgLmNoYXJnZS1wYXltZW50LWJvZHkgLmZvcm0tZ3JvdXAgc3BhbiB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc3ViLXRleHQpO1xuICBjb2xvcjogIzMzMzMzMztcbn1cbi5tb2RhbC1ib2R5IC5uYXZpZ2F0aW9uIC5wcm9kdWN0cyB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgLm1vZGFsLWJvZHkgLm5hdmlnYXRpb24gLnByb2R1Y3RzIHRhYmxlIHNwYW4sXG4ubW9kYWwtYm9keSAubmF2aWdhdGlvbiAucHJvZHVjdHMgdGFibGUgbGFiZWwge1xuICAgIHRleHQtYWxpZ246IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5tb2RhbC1ib2R5IC5uYXZpZ2F0aW9uIC5wcm9kdWN0cyB0YWJsZSB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xufVxuLm1vZGFsLWJvZHkgLm5hdmlnYXRpb24gLnByb2R1Y3RzIHRhYmxlIHRoZWFkIHRyIHRoOmZpcnN0LWNoaWxkIHtcbiAgd2lkdGg6IDI1MHB4O1xufVxuLm1vZGFsLWJvZHkgLm5hdmlnYXRpb24gLnByb2R1Y3RzIHRhYmxlIHRoZWFkIHRyIHRoOmxhc3QtY2hpbGQge1xuICB3aWR0aDogNDgwcHg7XG59XG4ubW9kYWwtYm9keSAubmF2aWdhdGlvbiAucHJvZHVjdHMgdGFibGUgdGJvZHkgdGQge1xuICBmb250LXNpemU6IDExcHggIWltcG9ydGFudDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xufVxuLm1vZGFsLWJvZHkgLm5hdmlnYXRpb24gLnByb2R1Y3RzIHRhYmxlIHNwYW4sXG4ubW9kYWwtYm9keSAubmF2aWdhdGlvbiAucHJvZHVjdHMgdGFibGUgbGFiZWwge1xuICBtYXgtd2lkdGg6IDE1MHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gIC5tb2RhbC1ib2R5IC5uYXZpZ2F0aW9uIC5wcm9kdWN0cyB0YWJsZSAuaXRlbSB7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG59XG4ubW9kYWwtYm9keSAubmF2aWdhdGlvbiAucHJvZHVjdHMgdGFibGUgLml0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm1vZGFsLWJvZHkgLm5hdmlnYXRpb24gLnByb2R1Y3RzIHRhYmxlIC5pdGVtIC5pbWctdGh1bWJuYWlsIHtcbiAgd2lkdGg6IDgwcHg7XG59XG4ubW9kYWwtYm9keSAubmF2aWdhdGlvbiAucHJvZHVjdHMgdGFibGUgLml0ZW0gLmRlc2Mgc3BhbjpsYXN0LWNoaWxkIHtcbiAgY29sb3I6IHZhcigtLWxpbmspO1xufVxuLm1vZGFsLWJvZHkgLm5hdmlnYXRpb24gLnByb2R1Y3RzIHRhYmxlIC50YXhlcyB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMHJlbSAwLjVyZW07XG59XG4ubW9kYWwtYm9keSAubmF2aWdhdGlvbiAucHJvZHVjdHMgdGFibGUgLnRheGVzIC5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tb2RhbC1mb290ZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuLm1vZGFsLWZvb3RlciAuYnRuLWNsb3NlIHtcbiAgcGFkZGluZzogMC4zNXJlbSAycmVtO1xuICBib3JkZXItcmFkaXVzOiAzMnB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5tb2RhbC1mb290ZXIgLmJ0bi1jbG9zZTpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/main/representative/orders/order-details/order-details.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/main/representative/orders/order-details/order-details.component.ts ***!
  \*************************************************************************************/
/*! exports provided: OrderDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailsComponent", function() { return OrderDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");



let OrderDetailsComponent = class OrderDetailsComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
        this.imageObject = [{
                image: '../../../../../assets/artefacts/nota-elginup.png',
                thumbImage: '../../../../../assets/artefacts/nota-elginup.png'
            }];
    }
    ngOnInit() { }
};
OrderDetailsComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], OrderDetailsComponent.prototype, "orderDetail", void 0);
OrderDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./order-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/representative/orders/order-details/order-details.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./order-details.component.scss */ "./src/app/main/representative/orders/order-details/order-details.component.scss")).default]
    })
], OrderDetailsComponent);



/***/ }),

/***/ "./src/app/main/representative/orders/order-init/order-init.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/main/representative/orders/order-init/order-init.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media screen and (max-width: 768px) {\n  section {\n    padding-left: 0px !important;\n  }\n}\nsection {\n  padding-left: 55px;\n}\n.navigation {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px;\n  background-color: #FBFBFB;\n}\n.navigation .title {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n}\n.navigation .title em {\n  font-size: 26px;\n  color: #dcdcdc;\n  margin-right: 15px;\n}\n.navigation .title span {\n  font-size: 26px;\n  color: var(--title);\n  font-weight: lighter;\n}\n.navigation .btn-custom {\n  margin-right: 70px;\n  background-color: var(--primary);\n  font-size: var(--sub-text);\n  color: #fff;\n  font-weight: lighter;\n  text-transform: uppercase;\n  border-radius: 25px;\n  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.125);\n}\n@media screen and (max-width: 768px) {\n  .navigation .btn-custom {\n    margin-right: 0px;\n  }\n}\n.new-filter {\n  padding: 15px 20px;\n}\n@media screen and (min-width: 375px) and (max-width: 768px) {\n  .new-filter .controllers {\n    display: block !important;\n  }\n  .new-filter .actions {\n    display: block !important;\n    margin: 1rem 0;\n  }\n  .new-filter .actions .btn-custom {\n    width: 100%;\n    margin-right: 0 !important;\n  }\n  .new-filter .actions .form-group {\n    max-width: 100% !important;\n    margin: 1rem 0 !important;\n  }\n}\n.new-filter .controllers {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-end;\n  justify-content: space-between;\n}\n.new-filter .controllers .title {\n  font-size: 18px;\n  color: var(--title);\n}\n.new-filter .controllers .actions {\n  display: flex;\n  align-items: flex-end;\n}\n.new-filter .controllers .actions .btn-custom {\n  border: 1px solid var(--link-active);\n  font-size: var(--sub-text);\n  color: var(--link-active);\n  text-transform: uppercase;\n  border-radius: 25px;\n}\n.new-filter .controllers .actions .btn-custom:focus {\n  box-shadow: none;\n}\n.new-filter .controllers .actions .form-group {\n  max-width: 245px;\n}\n.new-filter .controllers .actions .form-group label {\n  font-size: var(--sub-text);\n  margin-left: 5px !important;\n}\n.new-filter .controllers .actions .form-group .custom-select {\n  font-family: montserratregular;\n  font-size: var(--sub-text);\n  border-radius: 10px;\n}\n.new-filter .controllers .actions .form-group .custom-select:focus {\n  box-shadow: none;\n}\n.new-filter .stores .chosen-filter {\n  background-color: #F0F0F0;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 0.25rem 1rem;\n  font-size: var(--sub-text);\n}\n@media screen and (min-width: 375px) and (max-width: 768px) {\n  .new-filter .stores .checkboxes-inline {\n    display: flex;\n    flex-direction: column;\n  }\n}\n.new-filter .stores .checkboxes-inline {\n  padding: 15px 10px;\n  border: 1px solid #F0F0F0;\n  border-top-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n.new-filter .stores .checkboxes-inline .custom-control-label {\n  font-size: var(--default-text);\n  font-family: montserratregular;\n}\n.new-filter .stores .checkboxes-inline .custom-control-label::before {\n  border-color: #80bdff;\n}\n.orders-list {\n  padding: 15px 20px;\n}\n.orders-list .title {\n  display: block;\n  font-size: 18px;\n  color: var(--title);\n  margin-bottom: 20px;\n}\n@media screen and (min-width: 375px) and (max-width: 768px) {\n  .orders-list .title {\n    text-align: center;\n  }\n  .orders-list .options {\n    justify-content: center;\n  }\n  .orders-list .options .form-group:not(:last-child) {\n    flex-grow: 1;\n    margin: 0 0.5rem !important;\n  }\n  .orders-list .options .custom-radio {\n    width: 100%;\n    margin: 0.5rem 0;\n  }\n}\n.orders-list .options {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  font-family: montserratregular;\n}\n.orders-list .options label {\n  margin: 0 0 0 5px;\n  font-size: var(--sub-text);\n  color: #9B9A9A;\n  line-height: 22px;\n}\n.orders-list .options .input-group > .form-control:not(:last-child) {\n  border-right: 0;\n}\n.orders-list .options .input-group > .input-group-append > .btn {\n  border-left: 0;\n}\n.orders-list .options .secondary:not(:disabled):not(.disabled):active:focus {\n  box-shadow: none !important;\n}\n.orders-list .options .form-group:not(:last-child) {\n  width: 120px;\n}\n.orders-list .options .form-control {\n  font-size: var(--sub-text) !important;\n  color: var(--primary) !important;\n  border-top-left-radius: 10px !important;\n  border-bottom-left-radius: 10px !important;\n}\n.orders-list .options .custom-control-label::before {\n  border: #ced4da solid 1px;\n}\n.orders-list .options .custom-control-input:focus ~ .custom-control-label::before {\n  box-shadow: none;\n}\n.orders-list .options .custom-control-input:checked ~ .custom-control-label::before {\n  background-color: #007bff;\n  border: 3px solid #fff;\n  padding: 6px;\n}\n.orders-list .options .custom-radio .custom-control-input:checked ~ .custom-control-label::after {\n  background-image: none !important;\n  background-color: unset;\n  border: 1px solid #ced4da;\n  border-radius: 50%;\n  padding: 8px;\n}\n.orders-list .options .custom-select {\n  border-radius: 10px;\n  font-size: var(--sub-text);\n  color: #333333;\n}\n.orders-list .options .custom-select:focus {\n  box-shadow: none;\n}\n.orders-list .options .form-control:focus {\n  box-shadow: none !important;\n  border-color: #ced4da;\n}\n.orders-list .options .btn.calendar {\n  font-size: var(--sub-text) !important;\n  border-color: #ced4da;\n  border-top-right-radius: 10px !important;\n  border-bottom-right-radius: 10px !important;\n}\n.orders-list .options .btn.calendar:hover {\n  background-color: transparent;\n}\n.orders-list .options .btn.calendar em {\n  color: #c7c7c7;\n}\n.orders-list .options .btn-outline-secondary:focus {\n  box-shadow: none !important;\n}\n@media screen and (min-width: 375px) and (max-width: 768px) {\n  .orders-list .list-total {\n    order: 1;\n  }\n  .orders-list .apr-rep {\n    display: flex !important;\n    justify-content: center;\n    width: 100%;\n    margin: 1rem 0;\n  }\n  .orders-list .apr-rep .btn-custom {\n    font-size: 0.7rem !important;\n    line-height: 13px !important;\n    border-radius: 3px !important;\n  }\n}\n.orders-list .list .list-control {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  margin: 10px 0;\n}\n.orders-list .list .list-control .list-total {\n  font-size: var(--default-text);\n  color: #333333;\n}\n.orders-list .list .list-control .apr-rep {\n  display: inline;\n}\n.orders-list .list .list-control .apr-rep .btn-custom:first-child,\n.orders-list .list .list-control .apr-rep .btn-custom:last-child {\n  font-size: 0.7rem;\n  color: #fff;\n  font-weight: lighter;\n  text-transform: uppercase;\n  border-radius: 25px;\n  margin: 0 0.5rem;\n}\n.orders-list .list .list-control .apr-rep .btn-custom:first-child:focus,\n.orders-list .list .list-control .apr-rep .btn-custom:last-child:focus {\n  box-shadow: none;\n}\n.orders-list .list .list-control .apr-rep .btn-custom:first-child {\n  background-color: var(--success);\n}\n.orders-list .list .list-control .apr-rep .btn-custom:last-child {\n  background-color: var(--danger);\n}\n.orders-list .list table {\n  border-collapse: separate;\n  border-spacing: 0 3px;\n  border: 0;\n}\n.orders-list .list table thead th {\n  background-color: #265980;\n  color: #fff;\n  font-family: montserratregular;\n  font-size: var(--sub-text);\n  padding: 0.5rem;\n}\n.orders-list .list table .fa-search {\n  padding: 4px;\n  float: right;\n  border-radius: 50%;\n  color: #265980;\n  background-color: #fff;\n  font-size: 11px;\n  cursor: pointer;\n}\n.orders-list .list table tbody tr:hover {\n  cursor: pointer;\n}\n.orders-list .list table tbody td {\n  font-family: montserratregular;\n  font-size: 11px;\n  color: var(--link);\n  vertical-align: middle;\n}\n.orders-list .list table tbody td .client {\n  max-width: 180px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.orders-list .list table .custom-checkbox {\n  min-height: unset;\n  padding-left: 0;\n}\n.orders-list .list table .custom-checkbox .custom-control-label {\n  vertical-align: -webkit-baseline-middle;\n}\n.orders-list .list table .custom-checkbox .custom-control-label::before {\n  position: unset;\n}\n.orders-list .list table .custom-checkbox .custom-control-label::after {\n  top: 0;\n  left: 0;\n}\n.orders-list .list table a {\n  font-family: CoreRhino65bold !important;\n  color: #0986E4 !important;\n  font-size: 11px;\n}\n.orders-list .list table .badge {\n  padding: 0.1rem 0.6rem;\n  margin-right: 0.25rem;\n}\n.orders-list .list table .actions {\n  display: flex;\n  justify-content: space-evenly;\n}\n@media screen and (min-width: 375px) and (max-width: 768px) {\n  .orders-list .list table .actions .send,\n.orders-list .list table .actions .exclude {\n    margin: 0 0.5rem;\n  }\n  .orders-list .list table .actions .send span,\n.orders-list .list table .actions .exclude span {\n    display: none !important;\n  }\n}\n.orders-list .list table .actions .send,\n.orders-list .list table .actions .exclude {\n  text-align: center;\n}\n.orders-list .list table .actions .send a,\n.orders-list .list table .actions .exclude a {\n  padding: 0;\n  font-size: 20px;\n  line-height: 20px;\n}\n.orders-list .list table .actions .send span,\n.orders-list .list table .actions .exclude span {\n  display: block;\n  font-size: 10px;\n  color: #333333;\n}\n.orders-list .list table .actions .send em {\n  color: #4BD37B;\n}\n.orders-list .list table .actions .exclude em {\n  color: var(--danger);\n}\n.orders-list .list .column {\n  margin-left: 10px;\n}\n.orders-list .list .column .control {\n  margin: 0;\n  font-size: 12px;\n}\n.orders-list .list .column input {\n  max-width: 40px;\n  padding: 0.25rem;\n  border: 1px solid #C4C4C4;\n  border-radius: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9yZXByZXNlbnRhdGl2ZS9vcmRlcnMvb3JkZXItaW5pdC9DOlxcRWxnaW5VcDNcXGZyb250LWVsZ2luLTMuMFxcRlJPTlQtRUxHSU5VUC0zLjAvc3JjXFxhcHBcXG1haW5cXHJlcHJlc2VudGF0aXZlXFxvcmRlcnNcXG9yZGVyLWluaXRcXG9yZGVyLWluaXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vcmVwcmVzZW50YXRpdmUvb3JkZXJzL29yZGVyLWluaXQvb3JkZXItaW5pdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0lBQ0ksNEJBQUE7RUNDTjtBQUNGO0FERUE7RUFDSSxrQkFBQTtBQ0FKO0FER0E7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUNBSjtBREVJO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0FSO0FERVE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDQVo7QURHUTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FDRFo7QURLSTtFQUNJLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0Q0FBQTtBQ0hSO0FETUk7RUFDSTtJQUNJLGlCQUFBO0VDSlY7QUFDRjtBRFFBO0VBQ0ksa0JBQUE7QUNMSjtBRE9JO0VBQ0k7SUFDSSx5QkFBQTtFQ0xWO0VEUU07SUFDSSx5QkFBQTtJQUNBLGNBQUE7RUNOVjtFRFFVO0lBQ0ksV0FBQTtJQUNBLDBCQUFBO0VDTmQ7RURTVTtJQUNJLDBCQUFBO0lBQ0EseUJBQUE7RUNQZDtBQUNGO0FEV0k7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsOEJBQUE7QUNUUjtBRFdRO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FDVFo7QURZUTtFQUNJLGFBQUE7RUFDQSxxQkFBQTtBQ1ZaO0FEWVk7RUFDSSxvQ0FBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FDVmhCO0FEWWdCO0VBQ0ksZ0JBQUE7QUNWcEI7QURjWTtFQUNJLGdCQUFBO0FDWmhCO0FEY2dCO0VBQ0ksMEJBQUE7RUFDQSwyQkFBQTtBQ1pwQjtBRGVnQjtFQUNJLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtBQ2JwQjtBRGVvQjtFQUNJLGdCQUFBO0FDYnhCO0FEcUJRO0VBQ0kseUJBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0FDbkJaO0FEc0JRO0VBQ0k7SUFDSSxhQUFBO0lBQ0Esc0JBQUE7RUNwQmQ7QUFDRjtBRHVCUTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7QUNyQlo7QUR1Qlk7RUFDSSw4QkFBQTtFQUNBLDhCQUFBO0FDckJoQjtBRHVCZ0I7RUFDSSxxQkFBQTtBQ3JCcEI7QUQ0QkE7RUFDSSxrQkFBQTtBQ3pCSjtBRDJCSTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ3pCUjtBRDRCSTtFQUNJO0lBQ0ksa0JBQUE7RUMxQlY7RUQ2Qk07SUFDSSx1QkFBQTtFQzNCVjtFRDZCVTtJQUNJLFlBQUE7SUFDQSwyQkFBQTtFQzNCZDtFRDhCVTtJQUNJLFdBQUE7SUFDQSxnQkFBQTtFQzVCZDtBQUNGO0FEZ0NJO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FDOUJSO0FEZ0NRO0VBQ0ksaUJBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQzlCWjtBRGlDUTtFQUNJLGVBQUE7QUMvQlo7QURrQ1E7RUFDSSxjQUFBO0FDaENaO0FEbUNRO0VBQ0ksMkJBQUE7QUNqQ1o7QURvQ1E7RUFDSSxZQUFBO0FDbENaO0FEcUNRO0VBQ0kscUNBQUE7RUFDQSxnQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsMENBQUE7QUNuQ1o7QURzQ1E7RUFDSSx5QkFBQTtBQ3BDWjtBRHVDUTtFQUNJLGdCQUFBO0FDckNaO0FEd0NRO0VBQ0kseUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUN0Q1o7QUR5Q1E7RUFDSSxpQ0FBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUN2Q1o7QUQwQ1E7RUFDSSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtBQ3hDWjtBRDBDWTtFQUNJLGdCQUFBO0FDeENoQjtBRDRDUTtFQUNJLDJCQUFBO0VBQ0EscUJBQUE7QUMxQ1o7QUQ2Q1E7RUFDSSxxQ0FBQTtFQUNBLHFCQUFBO0VBQ0Esd0NBQUE7RUFDQSwyQ0FBQTtBQzNDWjtBRDZDWTtFQUNJLDZCQUFBO0FDM0NoQjtBRDhDWTtFQUNJLGNBQUE7QUM1Q2hCO0FEZ0RRO0VBQ0ksMkJBQUE7QUM5Q1o7QURrREk7RUFDSTtJQUNJLFFBQUE7RUNoRFY7RURtRE07SUFDSSx3QkFBQTtJQUNBLHVCQUFBO0lBQ0EsV0FBQTtJQUNBLGNBQUE7RUNqRFY7RURtRFU7SUFDSSw0QkFBQTtJQUNBLDRCQUFBO0lBQ0EsNkJBQUE7RUNqRGQ7QUFDRjtBRHVEUTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7QUNyRFo7QUR1RFk7RUFDSSw4QkFBQTtFQUNBLGNBQUE7QUNyRGhCO0FEd0RZO0VBQ0ksZUFBQTtBQ3REaEI7QUR3RGdCOztFQUVJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDdERwQjtBRHdEb0I7O0VBQ0ksZ0JBQUE7QUNyRHhCO0FEeURnQjtFQUNJLGdDQUFBO0FDdkRwQjtBRDBEZ0I7RUFDSSwrQkFBQTtBQ3hEcEI7QUQ2RFE7RUFDSSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsU0FBQTtBQzNEWjtBRDZEWTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FDM0RoQjtBRDhEWTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQzVEaEI7QUQrRFk7RUFDSSxlQUFBO0FDN0RoQjtBRGdFWTtFQUNJLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUM5RGhCO0FEZ0VnQjtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDOURwQjtBRGtFWTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQ2hFaEI7QURrRWdCO0VBQ0ksdUNBQUE7QUNoRXBCO0FEa0VvQjtFQUNJLGVBQUE7QUNoRXhCO0FEbUVvQjtFQUNJLE1BQUE7RUFDQSxPQUFBO0FDakV4QjtBRHNFWTtFQUNJLHVDQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FDcEVoQjtBRHVFWTtFQUNJLHNCQUFBO0VBQ0EscUJBQUE7QUNyRWhCO0FEd0VZO0VBQ0ksYUFBQTtFQUNBLDZCQUFBO0FDdEVoQjtBRHdFZ0I7RUFFSTs7SUFFSSxnQkFBQTtFQ3ZFdEI7RUR5RXNCOztJQUNJLHdCQUFBO0VDdEUxQjtBQUNGO0FEMEVnQjs7RUFFSSxrQkFBQTtBQ3hFcEI7QUQwRW9COztFQUNJLFVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUN2RXhCO0FEMEVvQjs7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUN2RXhCO0FENEVvQjtFQUNJLGNBQUE7QUMxRXhCO0FEK0VvQjtFQUNJLG9CQUFBO0FDN0V4QjtBRG1GUTtFQUNJLGlCQUFBO0FDakZaO0FEbUZZO0VBQ0ksU0FBQTtFQUNBLGVBQUE7QUNqRmhCO0FEb0ZZO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ2xGaEIiLCJmaWxlIjoic3JjL2FwcC9tYWluL3JlcHJlc2VudGF0aXZlL29yZGVycy9vcmRlci1pbml0L29yZGVyLWluaXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIHNlY3Rpb24ge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuc2VjdGlvbiB7XG4gICAgcGFkZGluZy1sZWZ0OiA1NXB4O1xufVxuXG4ubmF2aWdhdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGQkZCO1xuXG4gICAgLnRpdGxlIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIGVtIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICAgICAgICAgIGNvbG9yOiAjZGNkY2RjO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGl0bGUpO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuYnRuLWN1c3RvbSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNzBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tc3ViLXRleHQpO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xuICAgIH1cblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIC5idG4tY3VzdG9tIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ubmV3LWZpbHRlciB7XG4gICAgcGFkZGluZzogMTVweCAyMHB4O1xuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzc1cHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAuY29udHJvbGxlcnMge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hY3Rpb25zIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBtYXJnaW46IDFyZW0gMDtcblxuICAgICAgICAgICAgLmJ0bi1jdXN0b20ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZm9ybS1ncm91cCB7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxcmVtIDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5jb250cm9sbGVycyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10aXRsZSk7XG4gICAgICAgIH1cblxuICAgICAgICAuYWN0aW9ucyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuXG4gICAgICAgICAgICAuYnRuLWN1c3RvbSB7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGluay1hY3RpdmUpO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tc3ViLXRleHQpO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1saW5rLWFjdGl2ZSk7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuXG4gICAgICAgICAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZm9ybS1ncm91cCB7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAyNDVweDtcblxuICAgICAgICAgICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1zdWItdGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuY3VzdG9tLXNlbGVjdCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBtb250c2VycmF0cmVndWxhcjtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1zdWItdGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cbiAgICAgICAgICAgICAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnN0b3JlcyB7XG4gICAgICAgIC5jaG9zZW4tZmlsdGVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGMEYwRjA7XG4gICAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgICAgICBwYWRkaW5nOiAwLjI1cmVtIDFyZW07XG4gICAgICAgICAgICBmb250LXNpemU6IHZhcigtLXN1Yi10ZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM3NXB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgIC5jaGVja2JveGVzLWlubGluZSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmNoZWNrYm94ZXMtaW5saW5lIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMTBweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNGMEYwRjA7XG4gICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcblxuICAgICAgICAgICAgLmN1c3RvbS1jb250cm9sLWxhYmVsIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWRlZmF1bHQtdGV4dCk7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IG1vbnRzZXJyYXRyZWd1bGFyO1xuXG4gICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjODBiZGZmO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLm9yZGVycy1saXN0IHtcbiAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XG5cbiAgICAudGl0bGUge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0tdGl0bGUpO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH1cblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM3NXB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5vcHRpb25zIHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAgICAgICAuZm9ybS1ncm91cDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAuNXJlbSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY3VzdG9tLXJhZGlvIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAuNXJlbSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLm9wdGlvbnMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBtb250c2VycmF0cmVndWxhcjtcblxuICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICBtYXJnaW46IDAgMCAwIDVweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tc3ViLXRleHQpO1xuICAgICAgICAgICAgY29sb3I6ICM5QjlBOUE7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbnB1dC1ncm91cD4uZm9ybS1jb250cm9sOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmlucHV0LWdyb3VwPi5pbnB1dC1ncm91cC1hcHBlbmQ+LmJ0biB7XG4gICAgICAgICAgICBib3JkZXItbGVmdDogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zZWNvbmRhcnk6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlOmZvY3VzIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb3JtLWdyb3VwOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmZvcm0tY29udHJvbCB7XG4gICAgICAgICAgICBmb250LXNpemU6IHZhcigtLXN1Yi10ZXh0KSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gICAgICAgICAgICBib3JkZXI6ICNjZWQ0ZGEgc29saWQgMXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmN1c3RvbS1jb250cm9sLWlucHV0OmZvY3Vzfi5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZH4uY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xuICAgICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgI2ZmZjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jdXN0b20tcmFkaW8gLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWR+LmN1c3RvbS1jb250cm9sLWxhYmVsOjphZnRlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY3VzdG9tLXNlbGVjdCB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1zdWItdGV4dCk7XG4gICAgICAgICAgICBjb2xvcjogIzMzMzMzMztcblxuICAgICAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjY2VkNGRhO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJ0bi5jYWxlbmRhciB7XG4gICAgICAgICAgICBmb250LXNpemU6IHZhcigtLXN1Yi10ZXh0KSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjY2VkNGRhO1xuICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNjN2M3Yzc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuYnRuLW91dGxpbmUtc2Vjb25kYXJ5OmZvY3VzIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM3NXB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgLmxpc3QtdG90YWwge1xuICAgICAgICAgICAgb3JkZXI6IDE7XG4gICAgICAgIH1cblxuICAgICAgICAuYXByLXJlcCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luOiAxcmVtIDA7XG5cbiAgICAgICAgICAgIC5idG4tY3VzdG9tIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuN3JlbSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxM3B4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAubGlzdCB7XG5cbiAgICAgICAgLmxpc3QtY29udHJvbCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xuXG4gICAgICAgICAgICAubGlzdC10b3RhbCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1kZWZhdWx0LXRleHQpO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYXByLXJlcCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xuXG4gICAgICAgICAgICAgICAgLmJ0bi1jdXN0b206Zmlyc3QtY2hpbGQsXG4gICAgICAgICAgICAgICAgLmJ0bi1jdXN0b206bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwLjVyZW07XG5cbiAgICAgICAgICAgICAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmJ0bi1jdXN0b206Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdWNjZXNzKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuYnRuLWN1c3RvbTpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFuZ2VyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0YWJsZSB7XG4gICAgICAgICAgICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xuICAgICAgICAgICAgYm9yZGVyLXNwYWNpbmc6IDAgM3B4O1xuICAgICAgICAgICAgYm9yZGVyOiAwO1xuXG4gICAgICAgICAgICB0aGVhZCB0aCB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI2NTk4MDtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogbW9udHNlcnJhdHJlZ3VsYXI7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1zdWItdGV4dCk7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogLjVyZW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5mYS1zZWFyY2gge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMjY1OTgwO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGJvZHkgdHI6aG92ZXIge1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGJvZHkgdGQge1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBtb250c2VycmF0cmVndWxhcjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWxpbmspO1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cbiAgICAgICAgICAgICAgICAuY2xpZW50IHtcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxODBweDtcbiAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY3VzdG9tLWNoZWNrYm94IHtcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiB1bnNldDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG5cbiAgICAgICAgICAgICAgICAuY3VzdG9tLWNvbnRyb2wtbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogLXdlYmtpdC1iYXNlbGluZS1taWRkbGU7XG5cbiAgICAgICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB1bnNldDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBDb3JlUmhpbm82NWJvbGQgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzA5ODZFNCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmJhZGdlIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjFyZW0gMC42cmVtO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC4yNXJlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmFjdGlvbnMge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG5cbiAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzNzVweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLnNlbmQsXG4gICAgICAgICAgICAgICAgICAgIC5leGNsdWRlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwLjVyZW07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5zZW5kLFxuICAgICAgICAgICAgICAgIC5leGNsdWRlIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnNlbmQge1xuICAgICAgICAgICAgICAgICAgICBlbSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzRCRDM3QjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5leGNsdWRlIHtcbiAgICAgICAgICAgICAgICAgICAgZW0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWRhbmdlcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuY29sdW1uIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuXG4gICAgICAgICAgICAuY29udHJvbCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogNDBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjI1cmVtO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNDNEM0QzQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIHNlY3Rpb24ge1xuICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbnNlY3Rpb24ge1xuICBwYWRkaW5nLWxlZnQ6IDU1cHg7XG59XG5cbi5uYXZpZ2F0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQkZCRkI7XG59XG4ubmF2aWdhdGlvbiAudGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubmF2aWdhdGlvbiAudGl0bGUgZW0ge1xuICBmb250LXNpemU6IDI2cHg7XG4gIGNvbG9yOiAjZGNkY2RjO1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG4ubmF2aWdhdGlvbiAudGl0bGUgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgY29sb3I6IHZhcigtLXRpdGxlKTtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG59XG4ubmF2aWdhdGlvbiAuYnRuLWN1c3RvbSB7XG4gIG1hcmdpbi1yaWdodDogNzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc3ViLXRleHQpO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm5hdmlnYXRpb24gLmJ0bi1jdXN0b20ge1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICB9XG59XG5cbi5uZXctZmlsdGVyIHtcbiAgcGFkZGluZzogMTVweCAyMHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzc1cHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubmV3LWZpbHRlciAuY29udHJvbGxlcnMge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm5ldy1maWx0ZXIgLmFjdGlvbnMge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAxcmVtIDA7XG4gIH1cbiAgLm5ldy1maWx0ZXIgLmFjdGlvbnMgLmJ0bi1jdXN0b20ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5uZXctZmlsdGVyIC5hY3Rpb25zIC5mb3JtLWdyb3VwIHtcbiAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDFyZW0gMCAhaW1wb3J0YW50O1xuICB9XG59XG4ubmV3LWZpbHRlciAuY29udHJvbGxlcnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLm5ldy1maWx0ZXIgLmNvbnRyb2xsZXJzIC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6IHZhcigtLXRpdGxlKTtcbn1cbi5uZXctZmlsdGVyIC5jb250cm9sbGVycyAuYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cbi5uZXctZmlsdGVyIC5jb250cm9sbGVycyAuYWN0aW9ucyAuYnRuLWN1c3RvbSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpbmstYWN0aXZlKTtcbiAgZm9udC1zaXplOiB2YXIoLS1zdWItdGV4dCk7XG4gIGNvbG9yOiB2YXIoLS1saW5rLWFjdGl2ZSk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG4ubmV3LWZpbHRlciAuY29udHJvbGxlcnMgLmFjdGlvbnMgLmJ0bi1jdXN0b206Zm9jdXMge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLm5ldy1maWx0ZXIgLmNvbnRyb2xsZXJzIC5hY3Rpb25zIC5mb3JtLWdyb3VwIHtcbiAgbWF4LXdpZHRoOiAyNDVweDtcbn1cbi5uZXctZmlsdGVyIC5jb250cm9sbGVycyAuYWN0aW9ucyAuZm9ybS1ncm91cCBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc3ViLXRleHQpO1xuICBtYXJnaW4tbGVmdDogNXB4ICFpbXBvcnRhbnQ7XG59XG4ubmV3LWZpbHRlciAuY29udHJvbGxlcnMgLmFjdGlvbnMgLmZvcm0tZ3JvdXAgLmN1c3RvbS1zZWxlY3Qge1xuICBmb250LWZhbWlseTogbW9udHNlcnJhdHJlZ3VsYXI7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc3ViLXRleHQpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLm5ldy1maWx0ZXIgLmNvbnRyb2xsZXJzIC5hY3Rpb25zIC5mb3JtLWdyb3VwIC5jdXN0b20tc2VsZWN0OmZvY3VzIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi5uZXctZmlsdGVyIC5zdG9yZXMgLmNob3Nlbi1maWx0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBGMEYwO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIHBhZGRpbmc6IDAuMjVyZW0gMXJlbTtcbiAgZm9udC1zaXplOiB2YXIoLS1zdWItdGV4dCk7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzNzVweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5uZXctZmlsdGVyIC5zdG9yZXMgLmNoZWNrYm94ZXMtaW5saW5lIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cbi5uZXctZmlsdGVyIC5zdG9yZXMgLmNoZWNrYm94ZXMtaW5saW5lIHtcbiAgcGFkZGluZzogMTVweCAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjRjBGMEYwO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XG59XG4ubmV3LWZpbHRlciAuc3RvcmVzIC5jaGVja2JveGVzLWlubGluZSAuY3VzdG9tLWNvbnRyb2wtbGFiZWwge1xuICBmb250LXNpemU6IHZhcigtLWRlZmF1bHQtdGV4dCk7XG4gIGZvbnQtZmFtaWx5OiBtb250c2VycmF0cmVndWxhcjtcbn1cbi5uZXctZmlsdGVyIC5zdG9yZXMgLmNoZWNrYm94ZXMtaW5saW5lIC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgYm9yZGVyLWNvbG9yOiAjODBiZGZmO1xufVxuXG4ub3JkZXJzLWxpc3Qge1xuICBwYWRkaW5nOiAxNXB4IDIwcHg7XG59XG4ub3JkZXJzLWxpc3QgLnRpdGxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6IHZhcigtLXRpdGxlKTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM3NXB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm9yZGVycy1saXN0IC50aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5vcmRlcnMtbGlzdCAub3B0aW9ucyB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgLm9yZGVycy1saXN0IC5vcHRpb25zIC5mb3JtLWdyb3VwOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBtYXJnaW46IDAgMC41cmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm9yZGVycy1saXN0IC5vcHRpb25zIC5jdXN0b20tcmFkaW8ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMC41cmVtIDA7XG4gIH1cbn1cbi5vcmRlcnMtbGlzdCAub3B0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IG1vbnRzZXJyYXRyZWd1bGFyO1xufVxuLm9yZGVycy1saXN0IC5vcHRpb25zIGxhYmVsIHtcbiAgbWFyZ2luOiAwIDAgMCA1cHg7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc3ViLXRleHQpO1xuICBjb2xvcjogIzlCOUE5QTtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG59XG4ub3JkZXJzLWxpc3QgLm9wdGlvbnMgLmlucHV0LWdyb3VwID4gLmZvcm0tY29udHJvbDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgYm9yZGVyLXJpZ2h0OiAwO1xufVxuLm9yZGVycy1saXN0IC5vcHRpb25zIC5pbnB1dC1ncm91cCA+IC5pbnB1dC1ncm91cC1hcHBlbmQgPiAuYnRuIHtcbiAgYm9yZGVyLWxlZnQ6IDA7XG59XG4ub3JkZXJzLWxpc3QgLm9wdGlvbnMgLnNlY29uZGFyeTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmU6Zm9jdXMge1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG4ub3JkZXJzLWxpc3QgLm9wdGlvbnMgLmZvcm0tZ3JvdXA6bm90KDpsYXN0LWNoaWxkKSB7XG4gIHdpZHRoOiAxMjBweDtcbn1cbi5vcmRlcnMtbGlzdCAub3B0aW9ucyAuZm9ybS1jb250cm9sIHtcbiAgZm9udC1zaXplOiB2YXIoLS1zdWItdGV4dCkgIWltcG9ydGFudDtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpICFpbXBvcnRhbnQ7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xufVxuLm9yZGVycy1saXN0IC5vcHRpb25zIC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgYm9yZGVyOiAjY2VkNGRhIHNvbGlkIDFweDtcbn1cbi5vcmRlcnMtbGlzdCAub3B0aW9ucyAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Zm9jdXMgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4ub3JkZXJzLWxpc3QgLm9wdGlvbnMgLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XG4gIGJvcmRlcjogM3B4IHNvbGlkICNmZmY7XG4gIHBhZGRpbmc6IDZweDtcbn1cbi5vcmRlcnMtbGlzdCAub3B0aW9ucyAuY3VzdG9tLXJhZGlvIC5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjphZnRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcGFkZGluZzogOHB4O1xufVxuLm9yZGVycy1saXN0IC5vcHRpb25zIC5jdXN0b20tc2VsZWN0IHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZm9udC1zaXplOiB2YXIoLS1zdWItdGV4dCk7XG4gIGNvbG9yOiAjMzMzMzMzO1xufVxuLm9yZGVycy1saXN0IC5vcHRpb25zIC5jdXN0b20tc2VsZWN0OmZvY3VzIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi5vcmRlcnMtbGlzdCAub3B0aW9ucyAuZm9ybS1jb250cm9sOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICNjZWQ0ZGE7XG59XG4ub3JkZXJzLWxpc3QgLm9wdGlvbnMgLmJ0bi5jYWxlbmRhciB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc3ViLXRleHQpICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogI2NlZDRkYTtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcbn1cbi5vcmRlcnMtbGlzdCAub3B0aW9ucyAuYnRuLmNhbGVuZGFyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4ub3JkZXJzLWxpc3QgLm9wdGlvbnMgLmJ0bi5jYWxlbmRhciBlbSB7XG4gIGNvbG9yOiAjYzdjN2M3O1xufVxuLm9yZGVycy1saXN0IC5vcHRpb25zIC5idG4tb3V0bGluZS1zZWNvbmRhcnk6Zm9jdXMge1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzNzVweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5vcmRlcnMtbGlzdCAubGlzdC10b3RhbCB7XG4gICAgb3JkZXI6IDE7XG4gIH1cbiAgLm9yZGVycy1saXN0IC5hcHItcmVwIHtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAxcmVtIDA7XG4gIH1cbiAgLm9yZGVycy1saXN0IC5hcHItcmVwIC5idG4tY3VzdG9tIHtcbiAgICBmb250LXNpemU6IDAuN3JlbSAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAxM3B4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5vcmRlcnMtbGlzdCAubGlzdCAubGlzdC1jb250cm9sIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbjogMTBweCAwO1xufVxuLm9yZGVycy1saXN0IC5saXN0IC5saXN0LWNvbnRyb2wgLmxpc3QtdG90YWwge1xuICBmb250LXNpemU6IHZhcigtLWRlZmF1bHQtdGV4dCk7XG4gIGNvbG9yOiAjMzMzMzMzO1xufVxuLm9yZGVycy1saXN0IC5saXN0IC5saXN0LWNvbnRyb2wgLmFwci1yZXAge1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG4ub3JkZXJzLWxpc3QgLmxpc3QgLmxpc3QtY29udHJvbCAuYXByLXJlcCAuYnRuLWN1c3RvbTpmaXJzdC1jaGlsZCxcbi5vcmRlcnMtbGlzdCAubGlzdCAubGlzdC1jb250cm9sIC5hcHItcmVwIC5idG4tY3VzdG9tOmxhc3QtY2hpbGQge1xuICBmb250LXNpemU6IDAuN3JlbTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBtYXJnaW46IDAgMC41cmVtO1xufVxuLm9yZGVycy1saXN0IC5saXN0IC5saXN0LWNvbnRyb2wgLmFwci1yZXAgLmJ0bi1jdXN0b206Zmlyc3QtY2hpbGQ6Zm9jdXMsXG4ub3JkZXJzLWxpc3QgLmxpc3QgLmxpc3QtY29udHJvbCAuYXByLXJlcCAuYnRuLWN1c3RvbTpsYXN0LWNoaWxkOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi5vcmRlcnMtbGlzdCAubGlzdCAubGlzdC1jb250cm9sIC5hcHItcmVwIC5idG4tY3VzdG9tOmZpcnN0LWNoaWxkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VjY2Vzcyk7XG59XG4ub3JkZXJzLWxpc3QgLmxpc3QgLmxpc3QtY29udHJvbCAuYXByLXJlcCAuYnRuLWN1c3RvbTpsYXN0LWNoaWxkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFuZ2VyKTtcbn1cbi5vcmRlcnMtbGlzdCAubGlzdCB0YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG4gIGJvcmRlci1zcGFjaW5nOiAwIDNweDtcbiAgYm9yZGVyOiAwO1xufVxuLm9yZGVycy1saXN0IC5saXN0IHRhYmxlIHRoZWFkIHRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2NTk4MDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiBtb250c2VycmF0cmVndWxhcjtcbiAgZm9udC1zaXplOiB2YXIoLS1zdWItdGV4dCk7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbn1cbi5vcmRlcnMtbGlzdCAubGlzdCB0YWJsZSAuZmEtc2VhcmNoIHtcbiAgcGFkZGluZzogNHB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY29sb3I6ICMyNjU5ODA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm9yZGVycy1saXN0IC5saXN0IHRhYmxlIHRib2R5IHRyOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm9yZGVycy1saXN0IC5saXN0IHRhYmxlIHRib2R5IHRkIHtcbiAgZm9udC1mYW1pbHk6IG1vbnRzZXJyYXRyZWd1bGFyO1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiB2YXIoLS1saW5rKTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5vcmRlcnMtbGlzdCAubGlzdCB0YWJsZSB0Ym9keSB0ZCAuY2xpZW50IHtcbiAgbWF4LXdpZHRoOiAxODBweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4ub3JkZXJzLWxpc3QgLmxpc3QgdGFibGUgLmN1c3RvbS1jaGVja2JveCB7XG4gIG1pbi1oZWlnaHQ6IHVuc2V0O1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG4ub3JkZXJzLWxpc3QgLmxpc3QgdGFibGUgLmN1c3RvbS1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtbGFiZWwge1xuICB2ZXJ0aWNhbC1hbGlnbjogLXdlYmtpdC1iYXNlbGluZS1taWRkbGU7XG59XG4ub3JkZXJzLWxpc3QgLmxpc3QgdGFibGUgLmN1c3RvbS1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIHBvc2l0aW9uOiB1bnNldDtcbn1cbi5vcmRlcnMtbGlzdCAubGlzdCB0YWJsZSAuY3VzdG9tLWNoZWNrYm94IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YWZ0ZXIge1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG4ub3JkZXJzLWxpc3QgLmxpc3QgdGFibGUgYSB7XG4gIGZvbnQtZmFtaWx5OiBDb3JlUmhpbm82NWJvbGQgIWltcG9ydGFudDtcbiAgY29sb3I6ICMwOTg2RTQgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuLm9yZGVycy1saXN0IC5saXN0IHRhYmxlIC5iYWRnZSB7XG4gIHBhZGRpbmc6IDAuMXJlbSAwLjZyZW07XG4gIG1hcmdpbi1yaWdodDogMC4yNXJlbTtcbn1cbi5vcmRlcnMtbGlzdCAubGlzdCB0YWJsZSAuYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzc1cHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAub3JkZXJzLWxpc3QgLmxpc3QgdGFibGUgLmFjdGlvbnMgLnNlbmQsXG4ub3JkZXJzLWxpc3QgLmxpc3QgdGFibGUgLmFjdGlvbnMgLmV4Y2x1ZGUge1xuICAgIG1hcmdpbjogMCAwLjVyZW07XG4gIH1cbiAgLm9yZGVycy1saXN0IC5saXN0IHRhYmxlIC5hY3Rpb25zIC5zZW5kIHNwYW4sXG4ub3JkZXJzLWxpc3QgLmxpc3QgdGFibGUgLmFjdGlvbnMgLmV4Y2x1ZGUgc3BhbiB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG4ub3JkZXJzLWxpc3QgLmxpc3QgdGFibGUgLmFjdGlvbnMgLnNlbmQsXG4ub3JkZXJzLWxpc3QgLmxpc3QgdGFibGUgLmFjdGlvbnMgLmV4Y2x1ZGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ub3JkZXJzLWxpc3QgLmxpc3QgdGFibGUgLmFjdGlvbnMgLnNlbmQgYSxcbi5vcmRlcnMtbGlzdCAubGlzdCB0YWJsZSAuYWN0aW9ucyAuZXhjbHVkZSBhIHtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cbi5vcmRlcnMtbGlzdCAubGlzdCB0YWJsZSAuYWN0aW9ucyAuc2VuZCBzcGFuLFxuLm9yZGVycy1saXN0IC5saXN0IHRhYmxlIC5hY3Rpb25zIC5leGNsdWRlIHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogIzMzMzMzMztcbn1cbi5vcmRlcnMtbGlzdCAubGlzdCB0YWJsZSAuYWN0aW9ucyAuc2VuZCBlbSB7XG4gIGNvbG9yOiAjNEJEMzdCO1xufVxuLm9yZGVycy1saXN0IC5saXN0IHRhYmxlIC5hY3Rpb25zIC5leGNsdWRlIGVtIHtcbiAgY29sb3I6IHZhcigtLWRhbmdlcik7XG59XG4ub3JkZXJzLWxpc3QgLmxpc3QgLmNvbHVtbiB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLm9yZGVycy1saXN0IC5saXN0IC5jb2x1bW4gLmNvbnRyb2wge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5vcmRlcnMtbGlzdCAubGlzdCAuY29sdW1uIGlucHV0IHtcbiAgbWF4LXdpZHRoOiA0MHB4O1xuICBwYWRkaW5nOiAwLjI1cmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCAjQzRDNEM0O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/main/representative/orders/order-init/order-init.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/main/representative/orders/order-init/order-init.component.ts ***!
  \*******************************************************************************/
/*! exports provided: OrderInitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderInitComponent", function() { return OrderInitComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var src_shared_functions_form_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/functions/form-functions */ "./src/shared/functions/form-functions.ts");
/* harmony import */ var _new_filter_new_filter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../new-filter/new-filter.component */ "./src/app/main/representative/orders/new-filter/new-filter.component.ts");
/* harmony import */ var _invoice_detail_invoice_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../invoice-detail/invoice-detail.component */ "./src/app/main/representative/orders/invoice-detail/invoice-detail.component.ts");
/* harmony import */ var _order_details_order_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../order-details/order-details.component */ "./src/app/main/representative/orders/order-details/order-details.component.ts");
/* harmony import */ var _orders__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../orders */ "./src/app/main/representative/orders/orders.ts");
/* harmony import */ var _stores__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../stores */ "./src/app/main/representative/orders/stores.ts");










let OrderInitComponent = class OrderInitComponent {
    constructor(modalService, router, route) {
        this.modalService = modalService;
        this.router = router;
        this.route = route;
        this.orderListQtd = Object.keys(_orders__WEBPACK_IMPORTED_MODULE_8__["ordersData"]).length;
        this.orderControls = [
            { title: 'visualizar 10 resultados por página', value: 10 },
            { title: 'visualizar 20 resultados por página', value: 20 }
        ];
        this.optionalConfig = {
            maxSize: 5,
            directionLinks: true,
            autoHide: true,
            responsive: true
        };
        this.config = {
            id: 'server',
            itemsPerPage: 10,
            currentPage: 1
        };
        Object.assign(this, { ordersData: _orders__WEBPACK_IMPORTED_MODULE_8__["ordersData"], storesData: _stores__WEBPACK_IMPORTED_MODULE_9__["storesData"] });
    }
    ngOnInit() {
        this.customFilter = this.storesData[0].filter;
    }
    stopPropagation(e) {
        e.stopPropagation();
    }
    selectType(e) {
        this.customFilter = e.target.value;
    }
    regex(e) {
        const input = e.target;
        input.value = Object(src_shared_functions_form_functions__WEBPACK_IMPORTED_MODULE_4__["dateMask"])(input.value);
    }
    onPageChange(numbers) {
        this.config.currentPage = numbers;
    }
    onPageBoundsCorrection(numbers) {
        this.config.currentPage = numbers;
    }
    jumpToPage(e) {
        const input = e.target.value;
        this.config.currentPage = input;
    }
    changePaginationSize(e) {
        const select = e.target.value;
        this.config.itemsPerPage = select;
    }
    openInvoiceDetailModal(order, e) {
        e.stopImmediatePropagation();
        const modalRef = this.modalService.open(_invoice_detail_invoice_detail_component__WEBPACK_IMPORTED_MODULE_6__["InvoiceDetailComponent"], { size: 'xl', centered: true, scrollable: true });
        modalRef.componentInstance.invoiceDetail = order;
    }
    openOrderDetailsModal(order, e) {
        e.stopImmediatePropagation();
        const modalRef = this.modalService.open(_order_details_order_details_component__WEBPACK_IMPORTED_MODULE_7__["OrderDetailsComponent"], { size: 'xl', centered: true, scrollable: true });
        modalRef.componentInstance.orderDetail = order;
    }
    openFilterAddModal() {
        this.modalService.open(_new_filter_new_filter_component__WEBPACK_IMPORTED_MODULE_5__["NewFilterComponent"], { centered: true, scrollable: true });
    }
    goToNewOrder() {
        this.router.navigate(['novopedido'], { relativeTo: this.route });
    }
};
OrderInitComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
OrderInitComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'elgin-order-init',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./order-init.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/representative/orders/order-init/order-init.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./order-init.component.scss */ "./src/app/main/representative/orders/order-init/order-init.component.scss")).default]
    })
], OrderInitComponent);



/***/ }),

/***/ "./src/app/main/representative/orders/orders-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/main/representative/orders/orders-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: OrdersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersRoutingModule", function() { return OrdersRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _order_init_order_init_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-init/order-init.component */ "./src/app/main/representative/orders/order-init/order-init.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _new_order_new_order_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new-order/new-order.component */ "./src/app/main/representative/orders/new-order/new-order.component.ts");
/* harmony import */ var _new_order_nacional_selling_nacional_selling_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-order/nacional-selling/nacional-selling.component */ "./src/app/main/representative/orders/new-order/nacional-selling/nacional-selling.component.ts");






const routes = [
    { path: '', component: _order_init_order_init_component__WEBPACK_IMPORTED_MODULE_1__["OrderInitComponent"] },
    {
        path: 'novopedido', component: _new_order_new_order_component__WEBPACK_IMPORTED_MODULE_4__["NewOrderComponent"],
        children: [
            { path: 'vendanacional', component: _new_order_nacional_selling_nacional_selling_component__WEBPACK_IMPORTED_MODULE_5__["NacionalSellingComponent"] }
        ]
    }
];
let OrdersRoutingModule = class OrdersRoutingModule {
};
OrdersRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], OrdersRoutingModule);



/***/ }),

/***/ "./src/app/main/representative/orders/orders.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/main/representative/orders/orders.module.ts ***!
  \*************************************************************/
/*! exports provided: OrdersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersModule", function() { return OrdersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _order_init_order_init_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-init/order-init.component */ "./src/app/main/representative/orders/order-init/order-init.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
/* harmony import */ var ng_image_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-image-slider */ "./node_modules/ng-image-slider/__ivy_ngcc__/fesm2015/ng-image-slider.js");
/* harmony import */ var angular2_draggable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular2-draggable */ "./node_modules/angular2-draggable/__ivy_ngcc__/fesm2015/angular2-draggable.js");
/* harmony import */ var src_shared_services_datepickeradapter_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/shared/services/datepickeradapter.service */ "./src/shared/services/datepickeradapter.service.ts");
/* harmony import */ var src_shared_pipes_stores_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/shared/pipes/stores.pipe */ "./src/shared/pipes/stores.pipe.ts");
/* harmony import */ var _invoice_detail_invoice_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./invoice-detail/invoice-detail.component */ "./src/app/main/representative/orders/invoice-detail/invoice-detail.component.ts");
/* harmony import */ var _new_filter_new_filter_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./new-filter/new-filter.component */ "./src/app/main/representative/orders/new-filter/new-filter.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _new_order_new_order_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./new-order/new-order.component */ "./src/app/main/representative/orders/new-order/new-order.component.ts");
/* harmony import */ var _new_order_nacional_selling_nacional_selling_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./new-order/nacional-selling/nacional-selling.component */ "./src/app/main/representative/orders/new-order/nacional-selling/nacional-selling.component.ts");
/* harmony import */ var _new_order_nacional_selling_representative_change_representative_change_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./new-order/nacional-selling/representative-change/representative-change.component */ "./src/app/main/representative/orders/new-order/nacional-selling/representative-change/representative-change.component.ts");
/* harmony import */ var src_app_layouts_layouts_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/layouts/layouts.module */ "./src/app/layouts/layouts.module.ts");
/* harmony import */ var _order_details_order_details_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./order-details/order-details.component */ "./src/app/main/representative/orders/order-details/order-details.component.ts");
/* harmony import */ var _new_order_nacional_selling_add_order_add_order_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./new-order/nacional-selling/add-order/add-order.component */ "./src/app/main/representative/orders/new-order/nacional-selling/add-order/add-order.component.ts");
/* harmony import */ var _orders_routing_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./orders-routing.module */ "./src/app/main/representative/orders/orders-routing.module.ts");
/* harmony import */ var _new_order_nacional_selling_add_order_product_comparative_product_comparative_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./new-order/nacional-selling/add-order/product-comparative/product-comparative.component */ "./src/app/main/representative/orders/new-order/nacional-selling/add-order/product-comparative/product-comparative.component.ts");
/* harmony import */ var _new_order_nacional_selling_add_order_finish_order_finish_order_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./new-order/nacional-selling/add-order/finish-order/finish-order.component */ "./src/app/main/representative/orders/new-order/nacional-selling/add-order/finish-order/finish-order.component.ts");























let OrdersModule = class OrdersModule {
};
OrdersModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _order_init_order_init_component__WEBPACK_IMPORTED_MODULE_1__["OrderInitComponent"],
            src_shared_pipes_stores_pipe__WEBPACK_IMPORTED_MODULE_10__["FilterPipe"],
            _invoice_detail_invoice_detail_component__WEBPACK_IMPORTED_MODULE_11__["InvoiceDetailComponent"],
            _new_filter_new_filter_component__WEBPACK_IMPORTED_MODULE_12__["NewFilterComponent"],
            _new_order_new_order_component__WEBPACK_IMPORTED_MODULE_14__["NewOrderComponent"],
            _new_order_nacional_selling_nacional_selling_component__WEBPACK_IMPORTED_MODULE_15__["NacionalSellingComponent"],
            _new_order_nacional_selling_representative_change_representative_change_component__WEBPACK_IMPORTED_MODULE_16__["RepresentativeChangeComponent"],
            _order_details_order_details_component__WEBPACK_IMPORTED_MODULE_18__["OrderDetailsComponent"],
            _new_order_nacional_selling_add_order_add_order_component__WEBPACK_IMPORTED_MODULE_19__["AddOrderComponent"],
            _new_order_nacional_selling_add_order_product_comparative_product_comparative_component__WEBPACK_IMPORTED_MODULE_21__["ProductComparativeComponent"],
            _new_order_nacional_selling_add_order_finish_order_finish_order_component__WEBPACK_IMPORTED_MODULE_22__["FinishOrderComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDatepickerModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["NgxPaginationModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbNavModule"],
            src_app_layouts_layouts_module__WEBPACK_IMPORTED_MODULE_17__["LayoutsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTypeaheadModule"],
            ng_image_slider__WEBPACK_IMPORTED_MODULE_7__["NgImageSliderModule"],
            _orders_routing_module__WEBPACK_IMPORTED_MODULE_20__["OrdersRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCollapseModule"],
            angular2_draggable__WEBPACK_IMPORTED_MODULE_8__["AngularDraggableModule"]
        ],
        entryComponents: [
            _invoice_detail_invoice_detail_component__WEBPACK_IMPORTED_MODULE_11__["InvoiceDetailComponent"],
            _new_filter_new_filter_component__WEBPACK_IMPORTED_MODULE_12__["NewFilterComponent"],
            _new_order_nacional_selling_representative_change_representative_change_component__WEBPACK_IMPORTED_MODULE_16__["RepresentativeChangeComponent"],
            _order_details_order_details_component__WEBPACK_IMPORTED_MODULE_18__["OrderDetailsComponent"]
        ],
        providers: [
            { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDateParserFormatter"], useClass: src_shared_services_datepickeradapter_service__WEBPACK_IMPORTED_MODULE_9__["CustomDateParserFormatter"] }
        ]
    })
], OrdersModule);



/***/ }),

/***/ "./src/app/main/representative/orders/orders.ts":
/*!******************************************************!*\
  !*** ./src/app/main/representative/orders/orders.ts ***!
  \******************************************************/
/*! exports provided: ordersData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ordersData", function() { return ordersData; });
const ordersData = [
    {
        data: '10/FEV',
        cliente: 'ELGIN INDUSTRIAL',
        cnpj: '14.200.166/0001-66',
        representate: 'ELGIN S/A (EL02)',
        area: 'Elgin',
        canal: 'Suprimentos',
        up: 1234567,
        pedido: [
            { notaFiscal: '012345664646425', status: 'faturado' },
            { notaFiscal: '012345664646426', status: 'entregue' },
            { notaFiscal: '012345664646427', status: 'em carteira' },
            { notaFiscal: '012345664646428', status: 'faturado' },
            { notaFiscal: '012345664646429', status: 'reprovado' },
            { notaFiscal: '012345664646430', status: 'em análise' },
            { notaFiscal: '012345664646431', status: 'reprovado' }
        ],
        nfQtd: 7,
        valor: 10230,
        sap: '1234567'
    },
    {
        data: '10/FEV',
        cliente: 'ELGIN INDUSTRIAL',
        cnpj: '14.200.166/0001-66',
        representate: 'ELGIN S/A (EL02)',
        area: 'Elgin',
        canal: 'Suprimentos',
        up: 1234567,
        pedido: [
            {
                notaFiscal: '012345664646425',
                status: 'faturado parcela'
            }
        ],
        nfQtd: 0,
        valor: 10230,
        sap: '1234567'
    },
    {
        data: '10/FEV',
        cliente: 'ELGIN INDUSTRIAL',
        cnpj: '14.200.166/0001-66',
        representate: 'ELGIN S/A (EL02)',
        area: 'Elgin',
        canal: 'Suprimentos',
        up: 1234567,
        pedido: [
            {
                notaFiscal: '012345664646425',
                status: 'faturado parcela'
            }
        ],
        nfQtd: 23,
        valor: 10230,
        sap: '1234567'
    },
    {
        data: '10/FEV',
        cliente: 'ELGIN INDUSTRIAL',
        cnpj: '14.200.166/0001-66',
        representate: 'ELGIN S/A (EL02)',
        area: 'Elgin',
        canal: 'Suprimentos',
        up: 1234567,
        pedido: [
            {
                notaFiscal: '012345664646425',
                status: 'rascunho'
            }
        ],
        nfQtd: 38,
        valor: 10230,
        sap: '1234567'
    },
    {
        data: '10/FEV',
        cliente: 'ELGIN INDUSTRIAL',
        cnpj: '14.200.166/0001-66',
        representate: 'ELGIN S/A (EL02)',
        area: 'Elgin',
        canal: 'Suprimentos',
        up: 1234567,
        pedido: [
            {
                notaFiscal: '012345664646425',
                status: 'orçamento'
            }
        ],
        nfQtd: 0,
        valor: 10230,
        sap: '1234567'
    },
    {
        data: '10/FEV',
        cliente: 'ELGIN INDUSTRIAL',
        cnpj: '14.200.166/0001-66',
        representate: 'ELGIN S/A (EL02)',
        area: 'Elgin',
        canal: 'Suprimentos',
        up: 1234567,
        pedido: [
            {
                notaFiscal: '012345664646425',
                status: 'em carteira'
            }
        ],
        nfQtd: 0,
        valor: 10230,
        sap: '1234567'
    },
    {
        data: '10/FEV',
        cliente: 'ELGIN INDUSTRIAL',
        cnpj: '14.200.166/0001-66',
        representate: 'ELGIN S/A (EL02)',
        area: 'Elgin',
        canal: 'Suprimentos',
        up: 1234567,
        pedido: [
            {
                notaFiscal: '012345664646425',
                status: 'orçamento'
            }
        ],
        nfQtd: 0,
        valor: 10230,
        sap: '1234567'
    },
    {
        data: '10/FEV',
        cliente: 'ELGIN INDUSTRIAL',
        cnpj: '14.200.166/0001-66',
        representate: 'ELGIN S/A (EL02)',
        area: 'Elgin',
        canal: 'Suprimentos',
        up: 1234567,
        pedido: [
            {
                notaFiscal: '012345664646425',
                status: 'orçamento'
            }
        ],
        nfQtd: 0,
        valor: 10230,
        sap: '1234567'
    },
    {
        data: '10/FEV',
        cliente: 'ELGIN INDUSTRIAL',
        cnpj: '14.200.166/0001-66',
        representate: 'ELGIN S/A (EL02)',
        area: 'Elgin',
        canal: 'Suprimentos',
        up: 1234567,
        pedido: [
            {
                notaFiscal: '012345664646425',
                status: 'excluído'
            }
        ],
        nfQtd: 0,
        valor: 10230,
        sap: '1234567'
    },
    {
        data: '10/FEV',
        cliente: 'ELGIN INDUSTRIAL',
        cnpj: '14.200.166/0001-66',
        representate: 'ELGIN S/A (EL02)',
        area: 'Elgin',
        canal: 'Suprimentos',
        up: 1234567,
        pedido: [
            {
                notaFiscal: '012345664646425',
                status: 'em análise'
            }
        ],
        nfQtd: 0,
        valor: 10230,
        sap: '1234567'
    },
    {
        data: '10/FEV',
        cliente: 'ELGIN INDUSTRIAL',
        cnpj: '14.200.166/0001-66',
        representate: 'ELGIN S/A (EL02)',
        area: 'Elgin',
        canal: 'Suprimentos',
        up: 1234567,
        pedido: [
            {
                notaFiscal: '012345664646425',
                status: 'em análise'
            }
        ],
        nfQtd: 0,
        valor: 10230,
        sap: '1234567'
    },
    {
        data: '10/FEV',
        cliente: 'ELGIN INDUSTRIAL',
        cnpj: '14.200.166/0001-66',
        representate: 'ELGIN S/A (EL02)',
        area: 'Elgin',
        canal: 'Suprimentos',
        up: 1234567,
        pedido: [
            {
                notaFiscal: '012345664646425',
                status: 'faturado parcela'
            }
        ],
        nfQtd: 7,
        valor: 10230,
        sap: '1234567'
    },
    {
        data: '10/FEV',
        cliente: 'ELGIN INDUSTRIAL',
        cnpj: '14.200.166/0001-66',
        representate: 'ELGIN S/A (EL02)',
        area: 'Elgin',
        canal: 'Suprimentos',
        up: 1234567,
        pedido: [
            {
                notaFiscal: '012345664646425',
                status: 'faturado parcela'
            }
        ],
        nfQtd: 0,
        valor: 10230,
        sap: '1234567'
    },
    {
        data: '10/FEV',
        cliente: 'ELGIN INDUSTRIAL',
        cnpj: '14.200.166/0001-66',
        representate: 'ELGIN S/A (EL02)',
        area: 'Elgin',
        canal: 'Suprimentos',
        up: 1234567,
        pedido: [
            {
                notaFiscal: '012345664646425',
                status: 'faturado parcela'
            }
        ],
        nfQtd: 23,
        valor: 10230,
        sap: '1234567'
    },
    {
        data: '10/FEV',
        cliente: 'ELGIN INDUSTRIAL',
        cnpj: '14.200.166/0001-66',
        representate: 'ELGIN S/A (EL02)',
        area: 'Elgin',
        canal: 'Suprimentos',
        up: 1234567,
        pedido: [
            {
                notaFiscal: '012345664646425',
                status: 'rascunho'
            }
        ],
        nfQtd: 38,
        valor: 10230,
        sap: '1234567'
    },
    {
        data: '10/FEV',
        cliente: 'ELGIN INDUSTRIAL',
        cnpj: '14.200.166/0001-66',
        representate: 'ELGIN S/A (EL02)',
        area: 'Elgin',
        canal: 'Suprimentos',
        up: 1234567,
        pedido: [
            {
                notaFiscal: '012345664646425',
                status: 'orçamento'
            }
        ],
        nfQtd: 0,
        valor: 10230,
        sap: '1234567'
    },
    {
        data: '10/FEV',
        cliente: 'ELGIN INDUSTRIAL',
        cnpj: '14.200.166/0001-66',
        representate: 'ELGIN S/A (EL02)',
        area: 'Elgin',
        canal: 'Suprimentos',
        up: 1234567,
        pedido: [
            {
                notaFiscal: '012345664646425',
                status: 'em carteira'
            }
        ],
        nfQtd: 0,
        valor: 10230,
        sap: '1234567'
    },
    {
        data: '10/FEV',
        cliente: 'ELGIN INDUSTRIAL',
        cnpj: '14.200.166/0001-66',
        representate: 'ELGIN S/A (EL02)',
        area: 'Elgin',
        canal: 'Suprimentos',
        up: 1234567,
        pedido: [
            {
                notaFiscal: '012345664646425',
                status: 'orçamento'
            }
        ],
        nfQtd: 0,
        valor: 10230,
        sap: '1234567'
    },
    {
        data: '10/FEV',
        cliente: 'ELGIN INDUSTRIAL',
        cnpj: '14.200.166/0001-66',
        representate: 'ELGIN S/A (EL02)',
        area: 'Elgin',
        canal: 'Suprimentos',
        up: 1234567,
        pedido: [
            {
                notaFiscal: '012345664646425',
                status: 'orçamento'
            }
        ],
        nfQtd: 0,
        valor: 10230,
        sap: '1234567'
    },
    {
        data: '10/FEV',
        cliente: 'ELGIN INDUSTRIAL',
        cnpj: '14.200.166/0001-66',
        representate: 'ELGIN S/A (EL02)',
        area: 'Elgin',
        canal: 'Suprimentos',
        up: 1234567,
        pedido: [
            {
                notaFiscal: '012345664646425',
                status: 'excluído'
            }
        ],
        nfQtd: 0,
        valor: 10230,
        sap: '1234567'
    },
    {
        data: '10/FEV',
        cliente: 'ELGIN INDUSTRIAL',
        cnpj: '14.200.166/0001-66',
        representate: 'ELGIN S/A (EL02)',
        area: 'Elgin',
        canal: 'Suprimentos',
        up: 1234567,
        pedido: [
            {
                notaFiscal: '012345664646425',
                status: 'faturado'
            }
        ],
        nfQtd: 0,
        valor: 10230,
        sap: '1234567'
    },
    {
        data: '10/FEV',
        cliente: 'ELGIN INDUSTRIAL',
        cnpj: '14.200.166/0001-66',
        representate: 'ELGIN S/A (EL02)',
        area: 'Elgin',
        canal: 'Suprimentos',
        up: 1234567,
        pedido: [
            {
                notaFiscal: '012345664646425',
                status: 'faturado'
            }
        ],
        nfQtd: 0,
        valor: 10230,
        sap: '1234567'
    }
];


/***/ }),

/***/ "./src/app/main/representative/orders/stores.ts":
/*!******************************************************!*\
  !*** ./src/app/main/representative/orders/stores.ts ***!
  \******************************************************/
/*! exports provided: storesData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storesData", function() { return storesData; });
const storesData = [
    {
        filter: 'representanteGeral',
        stores: [
            'Casas Bahia',
            'Ponto Frio',
            'Elgin Industrial Amazonia LTDA',
            'Elgin SA 02',
            'Magazine Luiza',
            'Lojas Americanas',
            'Pernambucanas'
        ]
    },
    {
        filter: 'varejo',
        stores: [
            'Casas Bahia',
            'Ponto Frio',
            'Elgin Industrial Amazonia LTDA'
        ]
    }
];


/***/ }),

/***/ "./src/app/main/representative/products/products-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/main/representative/products/products-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: ProductsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsRoutingModule", function() { return ProductsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products.component */ "./src/app/main/representative/products/products.component.ts");




const routes = [
    { path: '', component: _products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"] },
];
let ProductsRoutingModule = class ProductsRoutingModule {
};
ProductsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ProductsRoutingModule);



/***/ }),

/***/ "./src/app/main/representative/products/products.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/main/representative/products/products.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media screen and (max-width: 768px) {\n  section {\n    padding-left: 0px !important;\n  }\n}\nsection {\n  padding-left: 55px;\n}\n.navigation {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px;\n  background-color: #FBFBFB;\n}\n.navigation .title {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n}\n.navigation .title em {\n  font-size: 26px;\n  color: #dcdcdc;\n  margin-right: 15px;\n}\n.navigation .title span {\n  font-size: 26px;\n  color: var(--title);\n  font-weight: lighter;\n}\n@media screen and (max-width: 425px) {\n  .types-button {\n    justify-content: start !important;\n  }\n}\n.types-button {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  padding: 10px;\n  background-color: var(--primary);\n  font-family: montserratregular;\n}\n.types-button .btn-item {\n  width: 10%;\n  text-align: center;\n  color: #fff;\n}\n.types-button .btn-item em {\n  display: block;\n  font-size: 27px;\n}\n.types-button .btn-item span {\n  display: block;\n  font-size: 0.6rem;\n  text-transform: capitalize;\n  margin-top: 3px;\n}\n@media screen and (max-width: 768px) {\n  .types-button .btn-item {\n    width: 33.33%;\n  }\n}\n.types-button .btn-item.active em,\n.types-button .btn-item.active span {\n  color: var(--water-green);\n}\n.breadcrumb {\n  background-color: #fff;\n  font-family: montserratregular;\n  font-size: 0.75rem;\n}\n.breadcrumb .breadcrumb-item {\n  color: var(--blue);\n}\n.breadcrumb .breadcrumb-item:last-child {\n  color: #6c757d;\n}\n.breadcrumb .breadcrumb-item:not(:last-child) {\n  cursor: pointer;\n}\n.breadcrumb .breadcrumb-item:not(:last-child):hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9yZXByZXNlbnRhdGl2ZS9wcm9kdWN0cy9DOlxcRWxnaW5VcDNcXGZyb250LWVsZ2luLTMuMFxcRlJPTlQtRUxHSU5VUC0zLjAvc3JjXFxhcHBcXG1haW5cXHJlcHJlc2VudGF0aXZlXFxwcm9kdWN0c1xccHJvZHVjdHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vcmVwcmVzZW50YXRpdmUvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtJQUNJLDRCQUFBO0VDQ047QUFDRjtBREVBO0VBQ0ksa0JBQUE7QUNBSjtBREdBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FDQUo7QURFSTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNBUjtBREVRO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0FaO0FER1E7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQ0RaO0FETUE7RUFDSTtJQUNJLGlDQUFBO0VDSE47QUFDRjtBRE1BO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLDhCQUFBO0FDSko7QURNSTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNKUjtBRE1RO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUNKWjtBRE9RO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FDTFo7QURVSTtFQUVJO0lBQ0ksYUFBQTtFQ1RWO0FBQ0Y7QURjUTs7RUFFSSx5QkFBQTtBQ1paO0FEa0JBO0VBQ0ksc0JBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FDZko7QURpQkk7RUFDSSxrQkFBQTtBQ2ZSO0FEaUJRO0VBQ0ksY0FBQTtBQ2ZaO0FEa0JRO0VBQ0ksZUFBQTtBQ2hCWjtBRGtCWTtFQUNJLDBCQUFBO0FDaEJoQiIsImZpbGUiOiJzcmMvYXBwL21haW4vcmVwcmVzZW50YXRpdmUvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIHNlY3Rpb24ge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuc2VjdGlvbiB7XG4gICAgcGFkZGluZy1sZWZ0OiA1NXB4O1xufVxuXG4ubmF2aWdhdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGQkZCO1xuXG4gICAgLnRpdGxlIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIGVtIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICAgICAgICAgIGNvbG9yOiAjZGNkY2RjO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGl0bGUpO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gICAgLnR5cGVzLWJ1dHRvbiB7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3RhcnQgIWltcG9ydGFudDtcbiAgICB9XG59XG5cbi50eXBlcy1idXR0b24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICBmb250LWZhbWlseTogbW9udHNlcnJhdHJlZ3VsYXI7XG5cbiAgICAuYnRuLWl0ZW0ge1xuICAgICAgICB3aWR0aDogMTAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuXG4gICAgICAgIGVtIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyN3B4O1xuICAgICAgICB9XG5cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC42cmVtO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG5cbiAgICAgICAgLmJ0bi1pdGVtIHtcbiAgICAgICAgICAgIHdpZHRoOiAzMy4zMyU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuYnRuLWl0ZW0uYWN0aXZlIHtcblxuICAgICAgICBlbSxcbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0td2F0ZXItZ3JlZW4pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi5icmVhZGNydW1iIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGZvbnQtZmFtaWx5OiBtb250c2VycmF0cmVndWxhcjtcbiAgICBmb250LXNpemU6IDAuNzVyZW07XG5cbiAgICAuYnJlYWRjcnVtYi1pdGVtIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWJsdWUpO1xuXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBjb2xvcjogIzZjNzU3ZDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIHNlY3Rpb24ge1xuICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbnNlY3Rpb24ge1xuICBwYWRkaW5nLWxlZnQ6IDU1cHg7XG59XG5cbi5uYXZpZ2F0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQkZCRkI7XG59XG4ubmF2aWdhdGlvbiAudGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubmF2aWdhdGlvbiAudGl0bGUgZW0ge1xuICBmb250LXNpemU6IDI2cHg7XG4gIGNvbG9yOiAjZGNkY2RjO1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG4ubmF2aWdhdGlvbiAudGl0bGUgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgY29sb3I6IHZhcigtLXRpdGxlKTtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gIC50eXBlcy1idXR0b24ge1xuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQgIWltcG9ydGFudDtcbiAgfVxufVxuLnR5cGVzLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGZvbnQtZmFtaWx5OiBtb250c2VycmF0cmVndWxhcjtcbn1cbi50eXBlcy1idXR0b24gLmJ0bi1pdGVtIHtcbiAgd2lkdGg6IDEwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbn1cbi50eXBlcy1idXR0b24gLmJ0bi1pdGVtIGVtIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMjdweDtcbn1cbi50eXBlcy1idXR0b24gLmJ0bi1pdGVtIHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAwLjZyZW07XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBtYXJnaW4tdG9wOiAzcHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAudHlwZXMtYnV0dG9uIC5idG4taXRlbSB7XG4gICAgd2lkdGg6IDMzLjMzJTtcbiAgfVxufVxuLnR5cGVzLWJ1dHRvbiAuYnRuLWl0ZW0uYWN0aXZlIGVtLFxuLnR5cGVzLWJ1dHRvbiAuYnRuLWl0ZW0uYWN0aXZlIHNwYW4ge1xuICBjb2xvcjogdmFyKC0td2F0ZXItZ3JlZW4pO1xufVxuXG4uYnJlYWRjcnVtYiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiBtb250c2VycmF0cmVndWxhcjtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xufVxuLmJyZWFkY3J1bWIgLmJyZWFkY3J1bWItaXRlbSB7XG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcbn1cbi5icmVhZGNydW1iIC5icmVhZGNydW1iLWl0ZW06bGFzdC1jaGlsZCB7XG4gIGNvbG9yOiAjNmM3NTdkO1xufVxuLmJyZWFkY3J1bWIgLmJyZWFkY3J1bWItaXRlbTpub3QoOmxhc3QtY2hpbGQpIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmJyZWFkY3J1bWIgLmJyZWFkY3J1bWItaXRlbTpub3QoOmxhc3QtY2hpbGQpOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/main/representative/products/products.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/main/representative/products/products.component.ts ***!
  \********************************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let ProductsComponent = class ProductsComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
        this.typeItems = [
            { icon: 'fas fa-plus', title: 'inclusão', id: 0 },
            { icon: 'fas fa-search', title: 'consulta', id: 1 },
            { icon: 'fas fa-server', title: 'estrutura de linha', id: 2 },
            { icon: 'far fa-object-group', title: 'grupos de produtos', id: 3 },
            { icon: 'fas fa-tags', title: 'custo de produtos', id: 4 },
        ];
    }
    ngOnInit() { }
    navigate(index) {
        this.selectedItem = index;
        this.routeId = this.typeItems[this.selectedItem].id;
        // if (this.routeId === 0) {
        //   this.router.navigate(['vendanacional'], { relativeTo: this.route });
        // } else {
        //   this.router.navigate(['novopedido']);
        // }
    }
    hasRoute(route) {
        return this.router.url.includes(route);
    }
};
ProductsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
ProductsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'elgin-products',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./products.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/representative/products/products.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./products.component.scss */ "./src/app/main/representative/products/products.component.scss")).default]
    })
], ProductsComponent);



/***/ }),

/***/ "./src/app/main/representative/products/products.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/main/representative/products/products.module.ts ***!
  \*****************************************************************/
/*! exports provided: ProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModule", function() { return ProductsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _products_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products-routing.module */ "./src/app/main/representative/products/products-routing.module.ts");
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./products.component */ "./src/app/main/representative/products/products.component.ts");





let ProductsModule = class ProductsModule {
};
ProductsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _products_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProductsRoutingModule"]
        ],
        declarations: [_products_component__WEBPACK_IMPORTED_MODULE_4__["ProductsComponent"]],
        exports: [_products_component__WEBPACK_IMPORTED_MODULE_4__["ProductsComponent"]]
    })
], ProductsModule);



/***/ }),

/***/ "./src/app/main/representative/representative-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/main/representative/representative-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: RepresentativeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepresentativeRoutingModule", function() { return RepresentativeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const routes = [
    {
        path: 'inicio',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./home/home.module */ "./src/app/main/representative/home/home.module.ts")).then(m => m.HomeModule)
    },
    {
        path: 'pedidos',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./orders/orders.module */ "./src/app/main/representative/orders/orders.module.ts")).then(m => m.OrdersModule)
    },
    {
        path: 'produtos',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./products/products.module */ "./src/app/main/representative/products/products.module.ts")).then(m => m.ProductsModule)
    }
];
let RepresentativeRoutingModule = class RepresentativeRoutingModule {
};
RepresentativeRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], RepresentativeRoutingModule);



/***/ }),

/***/ "./src/app/main/representative/representative.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/main/representative/representative.module.ts ***!
  \**************************************************************/
/*! exports provided: RepresentativeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepresentativeModule", function() { return RepresentativeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _orders_orders_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orders/orders.module */ "./src/app/main/representative/orders/orders.module.ts");
/* harmony import */ var src_app_layouts_layouts_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/layouts/layouts.module */ "./src/app/layouts/layouts.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _representative_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./representative-routing.module */ "./src/app/main/representative/representative-routing.module.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.module */ "./src/app/main/representative/home/home.module.ts");
/* harmony import */ var _products_products_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./products/products.module */ "./src/app/main/representative/products/products.module.ts");








let RepresentativeModule = class RepresentativeModule {
};
RepresentativeModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            src_app_layouts_layouts_module__WEBPACK_IMPORTED_MODULE_2__["LayoutsModule"],
            _representative_routing_module__WEBPACK_IMPORTED_MODULE_5__["RepresentativeRoutingModule"],
            _home_home_module__WEBPACK_IMPORTED_MODULE_6__["HomeModule"],
            _orders_orders_module__WEBPACK_IMPORTED_MODULE_1__["OrdersModule"],
            _products_products_module__WEBPACK_IMPORTED_MODULE_7__["ProductsModule"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], RepresentativeModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: true,
    //PORTAL_API: 'http://api.novosite.elgin.com.br/api',
    //PORTAL_API:   'http://172.19.65.10:2126/api',
    //PORTAL_API: 'https://apisiteelgin.elgin.com.br:2126/api',
    //PORTAL_API: 'http://10.20.100.61:3090/api',
    //PORTAL_API: 'http://10.20.100.61:3094/api',
    PORTAL_API: 'https://localhost:44382/api',
    FERIADOS_API: 'https://api.calendario.com.br/?json=true&token=dmZpbmF0aUBlcnNvZnQuY29tLmJyJmhhc2g9ODg4MjE5MDE&ano='
};


/***/ }),

/***/ "./src/environments/environments.ts":
/*!******************************************!*\
  !*** ./src/environments/environments.ts ***!
  \******************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: true,
    //PORTAL_API: 'http://api.novosite.elgin.com.br/api',
    //PORTAL_API:   'http://172.19.65.10:2126/api',
    //PORTAL_API: 'https://apisiteelgin.elgin.com.br:2126/api',
    //PORTAL_API: 'http://10.20.100.61:3090/api',
    //PORTAL_API: 'http://10.20.100.61:3094/api',
    // PORTAL_API: 'https://localhost:44382/api',
    PORTAL_API: 'http://10.20.100.61:8030/api',
    FERIADOS_API: 'https://api.calendario.com.br/?json=true&token=dmZpbmF0aUBlcnNvZnQuY29tLmJyJmhhc2g9ODg4MjE5MDE&ano='
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "./src/shared/functions/form-functions.ts":
/*!************************************************!*\
  !*** ./src/shared/functions/form-functions.ts ***!
  \************************************************/
/*! exports provided: dateMask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateMask", function() { return dateMask; });
function dateMask(input) {
    return input.replace(/(\d{2})(\d{2})(\d{4})/g, '\$1/\$2/\$3');
}


/***/ }),

/***/ "./src/shared/pipes/stores.pipe.ts":
/*!*****************************************!*\
  !*** ./src/shared/pipes/stores.pipe.ts ***!
  \*****************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let FilterPipe = class FilterPipe {
    transform(items, customFilter) {
        if (!items) {
            return [];
        }
        if (!customFilter) {
            return items;
        }
        customFilter = customFilter.toLowerCase();
        return items.filter(it => {
            return it.filter.toLowerCase().indexOf(customFilter.toString().toLowerCase());
        });
    }
};
FilterPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filter'
    })
], FilterPipe);



/***/ }),

/***/ "./src/shared/services/datepickeradapter.service.ts":
/*!**********************************************************!*\
  !*** ./src/shared/services/datepickeradapter.service.ts ***!
  \**********************************************************/
/*! exports provided: CustomAdapter, CustomDateParserFormatter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomAdapter", function() { return CustomAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomDateParserFormatter", function() { return CustomDateParserFormatter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");



/**
 * This Service handles how the date is represented in scripts i.e. ngModel.
 */
let CustomAdapter = class CustomAdapter extends _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDateAdapter"] {
    constructor() {
        super(...arguments);
        this.DELIMITER = '-';
    }
    fromModel(value) {
        if (value) {
            const date = value.split(this.DELIMITER);
            return {
                day: parseInt(date[0], 10),
                month: parseInt(date[1], 10),
                year: parseInt(date[2], 10)
            };
        }
        return null;
    }
    toModel(date) {
        return date ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year : null;
    }
};
CustomAdapter = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], CustomAdapter);

/**
 * This Service handles how the date is rendered and parsed from keyboard i.e. in the bound input field.
 */
let CustomDateParserFormatter = class CustomDateParserFormatter extends _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDateParserFormatter"] {
    constructor() {
        super(...arguments);
        this.DELIMITER = '/';
    }
    parse(value) {
        if (value) {
            const date = value.split(this.DELIMITER);
            return {
                day: parseInt(date[0], 10),
                month: parseInt(date[1], 10),
                year: parseInt(date[2], 10)
            };
        }
        return null;
    }
    format(date) {
        return date ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year : '';
    }
};
CustomDateParserFormatter = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], CustomDateParserFormatter);



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\ElginUp3\front-elgin-3.0\FRONT-ELGINUP-3.0\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map