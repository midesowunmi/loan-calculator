/**
 * Created with JetBrains WebStorm.
 * User: Mide
 * Date: 1/6/17
 * Time: 11:42 AM
 * To change this template use File | Settings | File Templates.
 */
// monthlyPaymentModule display the monthly payment amount in right column
define([], function(app){

    return {
        bindings:{

        },
        template: '<span class="textBigGreen">{{ $ctrl.monthlypay | currency }}</span>',
        controller: function(loanService, $rootScope){
            var vm = this;
            vm.monthlypay = loanService.payment;
            $rootScope.$on('displayLoan', function(event, data){
                vm.monthlypay = data.amount;
            })
        }
    }
})
