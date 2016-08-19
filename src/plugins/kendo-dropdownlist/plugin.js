/*!
 * jQuery QueryBuilder Bootstrap Selectpicker
 * Applies Bootstrap Select on filters and operators combo-boxes.
 */

/**
 * @throws ConfigError
 */
QueryBuilder.define('kendo-dropdownlist', function (options) {
    //noinspection JSUnresolvedVariable
    if (!$.fn.kendoDropDownList) {
        Utils.error('MissingLibrary', 'Kendo UI is required to use "kendo-dropdownlist" plugin.');
    }

    // init kendoDropDownList
    this.on('afterCreateRuleFilters', function (e, rule) {
        //noinspection JSUnresolvedFunction
        rule.$el.find(Selectors.rule_filter)
            .removeClass('form-control')
            .css({
                'width': '250px'
            }).kendoDropDownList(options);
    });

    this.on('afterCreateRuleOperators', function (e, rule) {
        //noinspection JSUnresolvedFunction
        rule.$el.find(Selectors.rule_operator)
            .removeClass('form-control')
            .css({
                'width': '250px'
            }).kendoDropDownList(options);
    });

    // update kendoDropDownList on change
    this.on('afterUpdateRuleFilter', function (e, rule) {
        //noinspection JSUnresolvedFunction
        rule.$el.find(Selectors.rule_filter).kendoDropDownList(options);
    });

    this.on('afterUpdateRuleOperator', function (e, rule) {
        //noinspection JSUnresolvedFunction
        rule.$el.find(Selectors.rule_operator).kendoDropDownList(options);
    });

    this.on('afterCreateRuleInput', function (e, rule) {
        var localOptions = {};
        if (rule.filter.input == 'select') {
            if (rule.filter.plugin_config) {
                localOptions = rule.filter.plugin_config;
            } else {
                localOptions = options;
            }

            //noinspection JSUnresolvedFunction
            rule.$el.find(Selectors.rule_value)
                .removeClass('form-control')
                .css({
                    'width': '250px'
                }).kendoDropDownList(localOptions);
        }
    });
});
