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

    var stopScroll = function (element) {
        //noinspection JSUnresolvedVariable
        if (window.stopScroll && typeof window.stopScroll == 'function') {
            var widget = element.data("kendoDropDownList");
            //noinspection JSUnresolvedFunction
            window.stopScroll(widget.ul.parent());
        }
    };

    // init kendoDropDownList
    this.on('afterCreateRuleFilters', function (e, rule) {
        //noinspection JSUnresolvedFunction
        var $el = rule.$el.find(Selectors.rule_filter)
            .removeClass('form-control')
            .css({
                'width': '250px'
            }).kendoDropDownList(options);

        stopScroll($el);
    });

    this.on('afterCreateRuleOperators', function (e, rule) {
        //noinspection JSUnresolvedFunction
        var $el = rule.$el.find(Selectors.rule_operator)
            .removeClass('form-control')
            .css({
                'width': '250px'
            }).kendoDropDownList(options);

        stopScroll($el);
    });

    // update kendoDropDownList on change
    this.on('afterUpdateRuleFilter', function (e, rule) {
        var $el = rule.$el.find(Selectors.rule_filter);

        var dropdownList = $el.data("kendoDropDownList");

        if (dropdownList._old == '-1') {
            //noinspection JSUnresolvedFunction
            $el.kendoDropDownList(options);
        } else {
            dropdownList.refresh();
        }

    });

    this.on('afterUpdateRuleOperator', function (e, rule) {
        var $el = rule.$el.find(Selectors.rule_operator);

        var dropdownList = $el.data("kendoDropDownList");

        $el.kendoDropDownList(options);
    });

    this.on('afterCreateRuleInput', function (e, rule) {
        var localOptions = {};
        var $el = rule.$el.find(Selectors.rule_value);

        if (rule.filter.input == 'select') {
            if (rule.filter.plugin_config) {
                localOptions = rule.filter.plugin_config;

                localOptions.dataSource.filter = [];
                localOptions.dataSource.value = '';

                setTimeout(function () {
                    if (rule.value !== undefined) {
                        localOptions.dataSource.filter = [{
                            "field": "_id",
                            "operator": "eq",
                            "value": rule.value
                        }];

                        localOptions.value = rule.value;
                    }

                    //noinspection JSUnresolvedFunction
                    $el.removeClass('form-control')
                        .css({
                            'width': '250px'
                        }).kendoDropDownList(localOptions);

                    stopScroll($el);
                }, 100);
            } else {
                //noinspection JSUnresolvedFunction
                $el.kendoDropDownList(options);
                stopScroll($el);
            }
        }
    });
});
