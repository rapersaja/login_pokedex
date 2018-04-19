var myweb =angular.module("myweb",[]);
myweb.controller("login",function($scope){
    {alert ("Usted esta entrando a una pagina de pokemon")}
    $scope.validar = function(usuario, clave){
    	$scope.usuario= "Poke";
    	$scope.clave= "poke";
    	if (usuario== $scope.usuario && clave== $scope.clave){
    		window.open("index.html","_parent")
    	}else {alert ("Usuario o clave incorrecta")}
    }
});