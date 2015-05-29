BloggyApp.factory('AlertService',[function(){

  var alerts = [];

  return {
    clear: function(){
      //clear all alerts
      console.log('called alert clear')
      alerts = [];
    },
    add: function(type,text){
      //add an alert
      alerts.push({type:type,text:text});
    },
    get: function(){
      //get list of alerts
      return alerts;
    },
    remove: function(index){
      //remove an alert by index
      alerts.splice(index,1);
    }
  }

}])