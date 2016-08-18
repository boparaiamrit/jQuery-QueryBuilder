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
                .addClass('k-textarea');
        }
    });
});
