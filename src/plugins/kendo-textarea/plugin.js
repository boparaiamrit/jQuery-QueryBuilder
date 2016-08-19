/*!
 * jQuery QueryBuilder Textarea with kendo ui
 * Applies Bootstrap Select on filters and operators combo-boxes.
 */

/**
 * @throws ConfigError
 */
QueryBuilder.define('kendo-textarea', function () {
    this.on('afterCreateRuleInput', function (e, rule) {
        if (rule.filter.input == 'textarea') {
            rule.$el.find(Selectors.rule_value)
                .removeClass('form-control')
                .addClass('k-textbox')
                .css({
                    'height': '100px',
                    'width': '250px'
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
    });
});
