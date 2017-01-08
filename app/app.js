/**
 * Created with JetBrains WebStorm.
 * User: Mide
 * Date: 1/5/17
 * Time: 7:08 PM
 * To change this template use File | Settings | File Templates.
 */
// app.js file list of all the components and modules injected into the app through requireJS

define(["./js/services/loanService","./js/components/loanAmountModule", "./js/components/interestRateModule", "./js/components/monthlyAmountModule", "./js/components/monthlyPaymentModule" ], function(loanService, loanAmountModule, interestRateModule, monthlyAmountModule, monthlyPaymentModule){

//var app = angular.boostrap(document, ['app'])
angular.module('app', ['rzModule', 'loanService'])
    .component('loanAmount',loanAmountModule)
    .component('interestRate', interestRateModule)
    .component('monthlyAmount', monthlyAmountModule)
    .component('monthlyPayment', monthlyPaymentModule)
});
