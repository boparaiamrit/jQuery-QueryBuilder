/*!
 * jQuery QueryBuilder Kendo Datepicker
 * Applies Bootstrap Select on filters and operators combo-boxes.
 */

/**
 * @throws ConfigError
 */
QueryBuilder.define('kendo-datetimepicker', function (options) {
    //noinspection JSUnresolvedVariable
    if (!$.fn.kendoDateTimePicker) {
        Utils.error('MissingLibrary', 'Kendo UI is required to use "kendoDateTimePicker" plugin.');
    }

    this.on('afterCreateRuleInput', function (e, rule) {

        if (rule.filter.input == 'datetime') {
            //noinspection JSUnresolvedFunction
            rule.$el.find(Selectors.rule_value)
                .removeClass('form-control')
                .css({
                    'width': '250px'
                }).kendoDateTimePicker(options);

            rule.$el.find(Selectors.rule_value)
                .parents('.k-datetimepicker')
                .css({
                    'display': 'block'
                });

            rule.$el.find(Selectors.filter_container).css({
                'vertical-align': 'top'
            });

            rule.$el.find(Selectors.operator_container).css({
                'vertical-align': 'top'
            });
            rule.$el.find(Selectors.drag_handle).css({
                'vertical-align': 'top',
                'position': 'relative',
                'top': '10px'
            });
        }
    })
});
