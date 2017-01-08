/**
 * Created with JetBrains WebStorm.
 * User: Mide
 * Date: 1/6/17
 * Time: 11:06 AM
 * To change this template use File | Settings | File Templates.
 */
define([], function(app){
    return {
        template: '<div class="input-percent"><input type="text"  class="form-control" ng-model="$ctrl.interest" ng-change="$ctrl.changeInterest($ctrl.interest)" /></div>',
        controller: function(loanService, $rootScope){
            var vm = this;
            vm.interest = loanService.interest;
            this.$onInit = function(){
                loanService.updateInterest(loanService.interest);
            };
            this.changeInterest = function(interest){

                interest = parseFloat(interest);
                interest = Number(interest).toFixed(2);
                $rootScope.$broadcast('loanDataChange', {interest:interest});
                loanService.updateInterest(interest);
            };

        }
    };
})
