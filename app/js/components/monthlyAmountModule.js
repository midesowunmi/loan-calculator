/**
 * Created with JetBrains WebStorm.
 * User: Mide
 * Date: 1/6/17
 * Time: 11:14 AM
 * To change this template use File | Settings | File Templates.
 */
define([], function(app){
    return {

        template: [
            '<div class="col-md-6 col-xs-6">Pay it off in</div>',
            '<div class="col-md-6">',
            '<span class="col-md-8 col-xs-4">',
            '<input type="text"class="form-control" ng-model="$ctrl.slider_text" ng-change="$ctrl.updateSlider($ctrl.slider_text)"/>',
            '</span>',
            '<span class="col-sm-4 col-xs-2">months</span>',
            '</div>',
            '<div class="slider-wrapper">',
            '<rzslider rz-slider-model="$ctrl.slider_toggle.value" rz-slider-options="$ctrl.slider_toggle.options"></rzslider>',
            '</div>'


        ].join(''),

        controller: function(loanService, $rootScope){
            var vm = this;
            this.$onInit = function(){
                loanService.updateMonth(loanService.loanMonth);
            }
            this.updateSlider = function (month){

                this.slider_toggle.value = parseInt(month);
                $rootScope.$broadcast('loanDataChange', {month: this.slider_toggle.value});
            }
            this.slider_toggle = {
                value: loanService.loanMonth,
                options: {
                    showSelectionBar: true,
                    floor: 6,
                    ceil: 72,
                    onChange: function(sliderId, modelValue, highValue, pointerType){
                        vm.slider_text = modelValue;
                        $rootScope.$broadcast('loanDataChange', {month:modelValue});
                        loanService.updateMonth(modelValue);
                    }
                }
            };
            this.slider_text = this.slider_toggle.value;
        }
    }
})
