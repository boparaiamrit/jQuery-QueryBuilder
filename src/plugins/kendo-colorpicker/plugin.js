/*!
 * jQuery QueryBuilder Kendo Datepicker
 * Applies Bootstrap Select on filters and operators combo-boxes.
 */

/**
 * @throws ConfigError
 */
QueryBuilder.define('kendo-colorpicker', function(options) {
    if (!$.fn.kendoColorPicker) {
        Utils.error('MissingLibrary', 'Bootstrap Select is required to use "kendoColorPicker" plugin. Get it here: http://silviomoreto.github.io/bootstrap-select');
    }


    this.on('afterCreateRuleInput', function (e, rule) {
        if (rule.filter.input == 'color') {
            rule.$el.find(Selectors.rule_value)
                .removeClass('form-control')
                .addClass('k-input')
                .css({
                    'width': '250px'
                }).kendoColorPicker(options);
        }
    })
});
