/**
 * Created with JetBrains WebStorm.
 * User: Mide
 * Date: 1/6/17
 * Time: 10:50 AM
 * To change this template use File | Settings | File Templates.
 */
//loanAmountModule form input for total mortgage amount, formatted for currency
define([], function(app){
    return {

        controller: function(loanService, $rootScope){
            var vm = this;
            vm.loan =  loanService.loanAmount;
            this.$onInit = function(){
                loanService.updateAmount(loanService.loanAmount);
            };
            this.changeAmount = function(amount){
                console.log("amount change " + amount);
                amount = parseFloat(amount);
                $rootScope.$broadcast('loanDataChange', {amount:amount});
                loanService.updateAmount(amount);
            };

            vm.loan =  loanService.loanAmount;
        },

        template: '<div class="input-currency"><input type="text" class="form-control" ng-model="$ctrl.loan" ng-change="$ctrl.changeAmount($ctrl.loan)" /></div>'
    }
})

