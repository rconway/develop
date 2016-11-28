
(function() {

var app = angular.module("tableapp", []);

app.controller("requestController", function() {
  var self = this;

  // TEST DATA
  self.requests = [];
  for (var i = 1; i <= 10; ++i) {
    var request = {
      requestId: uuid.v4(),
      user: "cdstest",
      submissionDate: Date.now() - (i*5000)
    };
    switch (i % 3) {
      case 0:
        request.status = "completed";
        request.code = 202;
        request.endDate = request.submissionDate + 60000;
        request.results = {
          resultType: "url",
          urlResult: {
            location: "http://www.bbc.co.uk",
            contentType: "application/x-grib",
            contentLength: 123456
          }
        };
        break;
      case 1:
        switch (Math.floor(Math.random()*3)) {
          case 0:
            request.status = "queued";
            break;
          case 1:
            request.status = "submitted";
            break;
          case 2:
          default:
            request.status = "active";
            break;
        };
        request.code = 303;
        request.progress = {
          url: "broker/api/progress",
          retry: 10
        };
        break;
      case 2:
      default:
        request.status = "failed";
        request.code = 501;
        request.errors = {
          errorMessage: "An error occurred during the request",
          url: "broker/api/errorHelp",
          reason: "Something went terribly wrong",
          context: "<error contextual info>"
        };
        break;
    };
    
    self.requests.push(request);
  }
  // .end. TEST DATA
  
  // Boolean indicator for whether there are any requests to display.
  self.haveRequests = function() {
    return (self.requests.length > 0);
  }

  // Toggle the elements of the status filter off/on.
  self.toggleStatusFilter = function(filterVal) {
    // Take undefined to be false.
    if (self.statusFilter[filterVal] === undefined) {
      self.statusFilter[filterVal] = false;
    }
    
    // Toggle the current value.
    self.statusFilter[filterVal] = !self.statusFilter[filterVal];
    
    // Special handling for 'All'
    if (filterVal === "All") {
      self.statusFilter["inprogress"] = false;
      self.statusFilter["completed"] = false;
      self.statusFilter["failed"] = false;
    }
    else {
      self.statusFilter["All"] = false;
    }
    
    // Map the 'inprogress' state to the sub-states
    for (var status of ["queued", "submitted", "active"]) {
      self.statusFilter[status] = self.statusFilter["inprogress"];
    }
  }
  
  // This will initialise the status filter to show all requests.
  self.statusFilter = {};
  self.toggleStatusFilter("All");
  
  // Function to apply the current 'statusFilter' to the list.
  self.filterByStatus = function(value) {
    return (self.statusFilter["All"] || self.statusFilter[value.status]);
  }
});
    
})();
