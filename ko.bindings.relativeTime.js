ko.bindingHandlers.relativeTime = {
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
