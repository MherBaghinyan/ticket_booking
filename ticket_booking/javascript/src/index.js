var viewModel = function(){
        // These are the initial options
        this.fromCity = ko.observableArray(['Yerevan', 'Tbilisi', 'Gyumri']);
        this.selectedFromCity = ko.observable();
		this.targetCity = ko.observableArray(['Moscow', 'Dubai', 'Berlin']);
        this.selectedTargetCity = ko.observable();
		this.ticketType = ko.observableArray(['One Way', 'Roundtrip', 'Transit']);
        this.selectedType =  ko.observable();
		this.ticketClass = ko.observableArray(['Business', 'Economy', 'VIP']);
        this.selectedClass  =  ko.observable();
		this.availableDate = ko.observableArray(['11/11/2014', '11/11/2014', '11/11/2014']);
        this.destination = ko.computed(function() {
            return this.selectedFromCity() + " - " + this.selectedTargetCity();
        }, this);

        this.saveDataAndContinue = function(){
        
        }
    };
 
ko.applyBindings(new viewModel()); // This makes Knockout get to work
