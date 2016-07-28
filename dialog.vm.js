ko.bindingHandlers.modal = {
    init: function (element, valueAccessor) {
        $(element).modal({
            show: false
        });

        var value = valueAccessor();
        if (typeof value === 'function') {
            $(element).on('hide.bs.modal', function() {
               value(false);
            });
        }
        ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
           $(element).modal("destroy");
        });

    },
    update: function (element, valueAccessor) {
        var value = valueAccessor();
        if (ko.utils.unwrapObservable(value)) {
            $(element).modal('show');
        } else {
            $(element).modal('hide');
        }
    }
}

function PopupViewModel() {
    var self = this;
    this.showDialog = ko.observable(false);
    this.description = ko.observable("");
        this.important = ko.observable("");

    this.add = function()
    {

    }
    this.cancel = function()
    {

    }


    this.submit = function () {
        console.log("hurrah" + this.description());
        self.showDialog(false);
    }
}

ko.applyBindings(new PopupViewModel());
