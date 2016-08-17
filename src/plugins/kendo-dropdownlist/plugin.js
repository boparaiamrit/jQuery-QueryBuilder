/*!
 * jQuery QueryBuilder Bootstrap Selectpicker
 * Applies Bootstrap Select on filters and operators combo-boxes.
 */

/**
 * @throws ConfigError
 */
QueryBuilder.define('kendo-dropdownlist', function (options) {
    if (!$.fn.kendoDropDownList) {
        Utils.error('MissingLibrary', 'Kendo Dropdownlist is required to use "kendo-dropdownlist" plugin.');
    }

    // init kendoDropDownList
    this.on('afterCreateRuleFilters', function (e, rule) {
        rule.$el.find(Selectors.rule_filter)
            .removeClass('form-control')
            .addClass('k-textbox')
            .css({
                'width': '300px',
            }).kendoDropDownList(options);
    });

    this.on('afterCreateRuleOperators', function (e, rule) {
        rule.$el.find(Selectors.rule_operator)
            .removeClass('form-control')
            .addClass('k-textbox')
            .css({
                'width': '300px',
            }).kendoDropDownList(options);
    });

    // update kendoDropDownList on change
    this.on('afterUpdateRuleFilter', function (e, rule) {
        rule.$el.find(Selectors.rule_filter).kendoDropDownList(options);
    });

    this.on('afterUpdateRuleOperator', function (e, rule) {
        rule.$el.find(Selectors.rule_operator).kendoDropDownList(options);
    });

    this.on('afterCreateRuleInput', function (e, rule) {
        if (rule.filter.input == 'select') {
            rule.$el.find(Selectors.rule_value)
                .removeClass('form-control')
                .addClass('k-textbox')
                .css({
                    'width': '300px',
                }).kendoDropDownList(options);
        }
    });
});
