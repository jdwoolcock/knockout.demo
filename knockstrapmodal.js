function ModalExampleViewModel() {

    var self = this;
    self.description = ko.observable('Green Lanes');

    var descriptionTemplate = {
      label: "Description",
      value: ko.observable(''),
    };

    self.modalVisible = ko.observable(false);

    self.show = function() {
        descriptionTemplate.value(self.description())
        self.modalVisible(true);
    };

    self.headerLabel = ko.observable('Edit description');
    self.bodyTemplate = ko.observable('firstModalTemplate');
    self.bodyData = ko.observable(descriptionTemplate);

    self.okText = ko.observable();

    self.save = function() {
        console.log("save");
  
        self.description(descriptionTemplate.value())
        self.modalVisible(false);

    };

}

ko.applyBindings(new ModalExampleViewModel());
