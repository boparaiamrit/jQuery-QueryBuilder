/*!
 * jQuery QueryBuilder Kendo Datepicker
 * Applies Bootstrap Select on filters and operators combo-boxes.
 */

/**
 * @throws ConfigError
 */
QueryBuilder.define('kendo-datetimepicker', function(options) {
    if (!$.fn.kendoDateTimePicker) {
        Utils.error('MissingLibrary', 'Bootstrap Select is required to use "kendoDateTimePicker" plugin. Get it here: http://silviomoreto.github.io/bootstrap-select');
    }

    this.on('afterCreateRuleInput', function (e, rule) {

        if (rule.filter.input == 'datetime') {
            rule.$el.find(Selectors.rule_value)
                .removeClass('form-control')
                .addClass('k-input')
                .css({
                    'width': '250px'
                }).kendoDateTimePicker(options);
        }
    })
});
