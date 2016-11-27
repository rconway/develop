
(function() {

var app = angular.module("tableapp", []);

app.controller("TableCtrl", function() {
  var self = this;

  self.requests = [];
  for (var i = 1; i <= 10; ++i) {
    var status;
    switch (i % 3) {
      case 0:
        status = "Completed";
        break;
      case 1:
        status = "In Progress";
        break;
      case 2:
      default:
        status = "Failed";
        break;
    };
    self.requests.push({
      id: uuid.v4(), desc: "some data #" + i, date: Date.now() - (i*5000), status: status, result: "http://www.bbc.co.uk"
    });
  }
  
  self.haveRequests = function() {
    return (self.requests.length > 0);
  }

  /*
  self.statusFilter = {
    "All": true,
    "Completed": false,
    "Failed": false,
    "In Progress": false
  };
  */
  self.toggleStatusFilter = function(filterVal) {
    if (self.statusFilter[filterVal] === undefined) {
      self.statusFilter[filterVal] = false;
    }
    self.statusFilter[filterVal] = !self.statusFilter[filterVal];
    
    if (filterVal === "All") {
      self.statusFilter["Completed"] = false;
      self.statusFilter["Failed"] = false;
      self.statusFilter["In Progress"] = false;
    }
    else {
      self.statusFilter["All"] = false;
    }
  }
  self.statusFilter = {};
  self.toggleStatusFilter("All");
  
  self.filterByStatus = function(value) {
    return (self.statusFilter["All"] || self.statusFilter[value.status]);
  }
});
    
})();
