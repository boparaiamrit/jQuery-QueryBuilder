/*!
 * jQuery QueryBuilder Slider Buttons with kendo ui
 * Applies Bootstrap Select on filters and operators combo-boxes.
 */

/**
 * @throws ConfigError
 */
QueryBuilder.define('kendo-checkbox', function () {
    this.on('afterCreateRuleInput', function (e, rule) {
        if (rule.filter.input == 'checkbox') {
            rule.$el.find(Selectors.rule_value)
                .removeClass('form-control')
                .addClass('k-checkbox');
            rule.$el.find(Selectors.rule_value).siblings().addClass('k-checkbox-label');
            rule.$el.find(Selectors.rule_value).siblings().css({
                'padding-left': '25px',
                'margin-right': '10px'
            });
            rule.$el.find(Selectors.value_container).css({
                'width': '330px'
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
