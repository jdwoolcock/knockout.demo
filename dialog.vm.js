var DetailsViewModel = function() {
    this.description = ko.observable("Arse");
    this.ipaddress = ko.observable("Feck");
};


function PopupViewModel() {
    var self = this;
    this.showDialog = ko.observable(new DetailsViewModel());
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
