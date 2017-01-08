/**
 * Created with JetBrains WebStorm.
 * User: Mide
 * Date: 1/6/17
 * Time: 7:40 AM
 * To change this template use File | Settings | File Templates.
 */
//loanService business logic for calculating the monthly payments,
// event handler to watch the form text fields and update the monthly payment
angular.module('loanService',[])
    .service('loanService', function($rootScope){
        var vm = this;
        this.sliderValue = 40;
        this.loanMonth = 40;
        this.loanAmount = 100000;
        this.payment = 1200;
        this.interest = 3.25;
        this.updateMonth = function(month){
            vm.month = month
            this.sliderValue = month;
        }
        this.updateAmount = function(amount){
            vm.amount = amount;
        }

        this.updateInterest = function(interest){
            vm.interest = interest;
        }

        $rootScope.$on('loanDataChange', function(event, data){
            if(data.amount){
                vm.amount = parseInt(data.amount);
            }
            if(data.interest){
                vm.interest = parseInt(data.interest);
            }
            if(data.month){
                vm.month = data.month;
            }

            var amount =  parseInt(vm.amount);
            var month =   parseInt(vm.month);
            var interest =   ((Number(vm.interest).toFixed(2))/1200) + 1;
            var subtotal = Math.pow( interest, month);
            subtotal = parseFloat(subtotal);

            this.payment = amount *((subtotal - 1) /(subtotal * interest));

            $rootScope.$broadcast('displayLoan', {amount: this.payment});

        })
        function reCalculateLoan(event, data){
            if(data.amount){
                vm.amount = data.amount;
            }
            if(data.month){
                vm.month = data.month;
            }

            var amount =  parseInt(vm.amount);
            var month =   parseInt(data.month);
            this.payment = month + amount;
            $rootScope.$broadcast('displayLoan', {amount: this.payment});
        }
    })
