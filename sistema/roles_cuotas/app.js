'use strict';

// Declare app level module which depends on views, and components
var app = angular.module("myApp", ['ngStorage', 'ngRoute', 'angularUtils.directives.dirPagination'])


var ApiUrl= function(){

    this.getEmpleados=function(){
        return 'http://localhost:8080/electroparc/sistemaContableELECTROPARC/sistema/roles_cuotas/selectEmpleado.php';
    }
    this.getContrato=function(){
        return 'http://localhost:8080/electroparc/sistemaContableELECTROPARC/sistema/roles_cuotas/selecContrato.php';
    }
    this.getRol=function(){
        return 'http://localhost:8080/electroparc/sistemaContableELECTROPARC/sistema/roles_cuotas/addOne.php';
    }
    this.getModRol=function(){
        return 'http://localhost:8080/electroparc/sistemaContableELECTROPARC/sistema/roles_cuotas/modificar.php';
    }
    this.getContratoIns=function(){
        return 'http://localhost:8080/electroparc/sistemaContableELECTROPARC/sistema/roles_cuotas/insertContrato.php';
    }
    this.getCuotas=function(){
        return 'http://localhost:8080/electroparc/sistemaContableELECTROPARC/sistema/roles_cuotas/addPagos.php';
    }
    this.getContratoCred=function(){
        return 'http://localhost:8080/electroparc/sistemaContableELECTROPARC/sistema/roles_cuotas/getContratosActivos.php';
    }
    this.getCuotasPago=function(){
        return 'http://localhost:8080/electroparc/sistemaContableELECTROPARC/sistema/roles_cuotas/getCuotas.php';
    }
    this.getUpdatePago=function(){
        return 'http://localhost:8080/electroparc/sistemaContableELECTROPARC/sistema/roles_cuotas/updatePago.php';
    }
    this.getAllRoles1=function(){
        return 'http://localhost:8080/electroparc/sistemaContableELECTROPARC/sistema/roles_cuotas/selectAll.php';
    }
    this.getAllRoles2 = function () {
        return 'http://localhost:8080/electroparc/sistemaContableELECTROPARC/sistema/roles_cuotas/selectAll.php';
    }
    this.getAllContratosActi = function () {
        return 'http://localhost:8080/electroparc/sistemaContableELECTROPARC/sistema/roles_cuotas/getAllContratos.php';
    }
    this.getAllContratosActiMod1 = function () {
        return 'http://localhost:8080/electroparc/sistemaContableELECTROPARC/sistema/roles_cuotas/modifyCont.php';
    }
    this.getUsr = function () {
        return 'http://localhost:8080/electroparc/sistemaContableELECTROPARC/sistema/roles_cuotas/getUsr.php';
    }
    this.getUpdatePagoDelete = function () {
        return 'http://localhost:8080/electroparc/sistemaContableELECTROPARC/sistema/roles_cuotas/updatePagoDelete.php';
    }
 
}

app.factory("myProvider",function(){
   // console.log("factory function");
    return new ApiUrl();

});

    app.config (function($routeProvider ,$provide){
   //$locationProvider.html5Mode(true);
    $routeProvider.when("/",{templateUrl:"/tesisSaludOcupacional/Client/Administrator/inicio.html", controller:'LoginController'});
    $routeProvider.when("/newEmpresa",{templateUrl:"/tesisSaludOcupacional/Client/Administrator/Empresa/ingresarEmpresa.html", controller:'EmpresaController'});
    $routeProvider.when("/newHistory",{templateUrl:"/tesisSaludOcupacional/Client/Administrator/HistoriaClinica/newClinicHistory.html", controller:'HistoriaClinicaController'});
    $routeProvider.when("/first",{templateUrl:"/tesisSaludOcupacional/Client/Administrator/HistoriaClinica/first.html", controller:'HistoriaClinicaController'});
    $routeProvider.when("/second",{templateUrl:"/tesisSaludOcupacional/Client/Administrator/HistoriaClinica/second.html", controller:'HistoriaClinicaController'});

        /*$provide.factory("ApiUrl", function () {
            return {
                urlUsuarios: 'http://192.168..1.118:3000/api/usuarios'
            };
        })*/

        //$provide.value('urlUsuarios', 'http://192.168..1.118:3000/api/usuarios');




});



//('urlUsuarios', 'http://192.168..1.118:3000/api/usuarios');



    /*app.config(['$routeProvider', function ($routeProvider) {

        $routeProvider.when('/newEmpresa', { templateUrl: '/tesisSaludOcupacional/Client/Administrator/newEmpresa.html', controller: 'EmpresaController' });
        $routeProvider.when('/', { templateUrl: '/indexAdmin.html' });
        $routeProvider.otherwise({ redirectTo: '/error' });

    }]);*/

