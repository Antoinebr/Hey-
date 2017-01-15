/**
*
* Permet d'ajouter un like
*
*/
var audio = null;
app.directive('sound',function($http){
  return{
    restrict: "E",
    controller : function(){


      this.play = function(url){
        if(audio !== null) audio.pause();
        audio = new Audio(url);
        console.log(url);
        audio.play();
      };
      //lightaction ng-click="lightCtrl.togglePower(device.id)"

    },
    controllerAs : 'soundCtrl',

  };
});
