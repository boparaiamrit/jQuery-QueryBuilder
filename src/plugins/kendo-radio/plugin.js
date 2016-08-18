/*!
 * jQuery QueryBuilder Radio Buttons with kendo ui
 * Applies Bootstrap Select on filters and operators combo-boxes.
 */

/**
 * @throws ConfigError
 */
QueryBuilder.define('kendo-radio', function () {
    this.on('afterCreateRuleInput', function (e, rule) {
        if (rule.filter.input == 'radio') {
            rule.$el.find(Selectors.rule_value)
                .removeClass('form-control')
                .addClass('k-radio');
            rule.$el.find(Selectors.rule_value).siblings().addClass('k-radio-label');
            rule.$el.find(Selectors.rule_value).siblings().css({
                'padding-left': '25px',
                'margin-right': '10px'
            });

        }
    });
});
