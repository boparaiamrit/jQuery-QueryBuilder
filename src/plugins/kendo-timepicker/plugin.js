/*!
 * jQuery QueryBuilder Kendo Datepicker
 * Applies Bootstrap Select on filters and operators combo-boxes.
 */

/**
 * @throws ConfigError
 */
QueryBuilder.define('kendo-timepicker', function(options) {
    if (!$.fn.kendoTimePicker) {
        Utils.error('MissingLibrary', 'Bootstrap Select is required to use "kendoTimePicker" plugin. Get it here: http://silviomoreto.github.io/bootstrap-select');
    }

    this.on('afterCreateRuleInput', function (e, rule) {

        if (rule.filter.input == 'time') {
            rule.$el.find(Selectors.rule_value)
                .removeClass('form-control')
                .addClass('k-input')
                .css({
                    'width': '250px'
                }).kendoTimePicker(options);
        }
    })
});
