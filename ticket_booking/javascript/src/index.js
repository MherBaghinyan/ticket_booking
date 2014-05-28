// Constructor for an object with two properties

var viewModel = function () {

    var self = this;
    // These are the initial options
    self.fromCity = ko.observableArray(['Yerevan', 'Tbilisi', 'Gyumri']);
    self.selectedFromCity = ko.observable();
    self.targetCity = ko.observableArray(['Moscow', 'Dubai', 'Berlin']);
    self.selectedTargetCity = ko.observable();
    self.ticketType = ko.observableArray(['One Way', 'Roundtrip', 'Transit']);
    self.selectedType = ko.observable();
    self.ticketClass = ko.observableArray(['Business', 'Economy', 'VIP']);
    self.selectedClass = ko.observable();
    self.availableDate = ko.observableArray(['11/11/2014', '11/11/2014', '11/11/2014']);
    self.destination = ko.computed(function () {
        return self.selectedFromCity() + " - " + self.selectedTargetCity();
    }, self);

    self.saveDataAndContinue = function () {
        if(!getData("flight")) {
            writeData("flight", new Flight(initialFlightNumber, self));
        } else {
            updateData("flight", new Flight(initialFlightNumber, self));
        }

        window.location = "seat_booking.html";
    }
};

ko.applyBindings(new viewModel()); // This makes Knockout get to work
