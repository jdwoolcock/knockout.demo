
// Class to represent a row in the seat reservations grid
function Item(name) {
    var self = this;
    self.name = name;

    self.lastUpdate = ko.observable("Tue Jul 26 2016 21:53:51 GMT+0100 (BST)");

    this.reset = function() {
       console.log("reset")
        self.lastUpdate(new Date());
    };


}

// Overall viewmodel for this screen, along with initial state
function ListViewModel() {
    var self = this;

    // Non-editable catalog data - would come from the server
    self.items = ko.observableArray();

    self.items.push(new Item("Fred"));



    // Operations
    self.addItem = function() {
        self.items.push(new Item(''));
    }

    self.removeItem = function(item) { self.items.remove(item) }
}

ko.bindingHandlers.myWidget = {
    init: function(element, valueAccessor) {


      var timerHandle = setInterval(function() {
            console.log("set interval " + timerHandle)

            ko.utils.setTextContent(element, new moment(valueAccessor().dateTime).fromNow());
        }, valueAccessor().timer || 60000 );






        ko.utils.domNodeDisposal.addDisposeCallback(element, function() {
            // This will be called when the element is removed by Knockout or
            // if some other part of your code calls ko.removeNode(element)
            console.log("teardown" + timerHandle)
            clearInterval(timerHandle);

        });
    }  ,
    update: function (element, valueAccessor) {
        ko.utils.setTextContent(element, new moment(valueAccessor().dateTime).fromNow());
    }
};


ko.applyBindings(new ListViewModel());
