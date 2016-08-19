/*!
 * jQuery QueryBuilder Kendo Datepicker
 * Applies Bootstrap Select on filters and operators combo-boxes.
 */

/**
 * @throws ConfigError
 */
QueryBuilder.define('kendo-colorpicker', function (options) {
    //noinspection JSUnresolvedVariable
    if (!$.fn.kendoColorPicker) {
        Utils.error('MissingLibrary', 'Kendo UI is required to use "kendoColorPicker" plugin.');
    }

    this.on('afterCreateRuleInput', function (e, rule) {
        if (rule.filter.input == 'color') {
            //noinspection JSUnresolvedFunction
            rule.$el.find(Selectors.rule_value)
                .removeClass('form-control')
                .css({
                    'width': '250px'
                }).kendoColorPicker(options);
        }
    })
});
