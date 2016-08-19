/*!
 * jQuery QueryBuilder Kendo Datepicker
 * Applies Bootstrap Select on filters and operators combo-boxes.
 */

/**
 * @throws ConfigError
 */
QueryBuilder.define('kendo-datepicker', function (options) {
    //noinspection JSUnresolvedVariable
    if (!$.fn.kendoDatePicker) {
        Utils.error('MissingLibrary', 'Kendo UI is required to use "kendoDatePicker" plugin.');
    }

    this.on('afterCreateRuleInput', function (e, rule) {
        if (rule.filter.input == 'date') {
            //noinspection JSUnresolvedFunction
            rule.$el.find(Selectors.rule_value)
                .removeClass('form-control')
                .css({
                    'width': '250px'
                }).kendoDatePicker(options);
        }
    })
});
