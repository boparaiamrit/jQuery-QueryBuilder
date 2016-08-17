/*!
 * jQuery QueryBuilder Bootstrap Selectpicker
 * Applies Bootstrap Select on filters and operators combo-boxes.
 */

/**
 * @throws ConfigError
 */
QueryBuilder.define('kendo-input', function () {
    this.on('afterCreateRuleInput', function (e, rule) {
        if (rule.filter.input == 'text') {
            rule.$el.find(Selectors.rule_value)
                .removeClass('form-control')
                .addClass('k-textbox')
                .css({
                    'width': '300px',
                });
        }
    });
});
