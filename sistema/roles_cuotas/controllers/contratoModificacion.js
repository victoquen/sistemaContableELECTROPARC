app.controller('contratoMod', ['$scope', '$http', '$location', 'myProvider', '$localStorage', function ($scope, $http, $location, myProvider, $localStorage) {

    $scope.id_contrato;

    $scope.tipconcodigo = 'Mensual';
    $scope.estconcodigo = 'Vigente';
    $scope.venid = 1;
    $scope.idcliente = 4052;
    $scope.connumero = '';
    $scope.concedulacliente = '';
    $scope.connombrescompletoscliente = '';
    $scope.conciudadcliente = '';
    $scope.condirecciondomiciliocliente = '';

    $scope.concasapropiaarrendadacliente = '';

    $scope.concaracteristicasdomiciliocliente = '';
    $scope.conreferenciadomiciliocliente = '';
    $scope.contelefonodomiciliocliente = '';
    $scope.concelularcliente = '';
    $scope.conlugartrabajocliente = '';
    $scope.concargotrabajocliente = '';
    $scope.contiempolugartrabajocliente = '';
    $scope.condirecciontrabajocliente = '';
    $scope.contelefonostrabajocliente = '';
    $scope.conreferencialugartrabajocliente = '';
    $scope.concedulagaranteconyugue = '';
    $scope.connombrescompletosgaranteconyugue = '';
    $scope.conciudadgaranteconyugue = '';
    $scope.condirecciondomiciliogaranteconyugue = '';
    $scope.concaracteristicasdomiciliogaranteconyugue = '';

    $scope.concasapropiaarrendadagaranteconyugue = '';
    $scope.conreferenciadomiciliogaranteconyugue = '';
    $scope.contelefonocasagaranteconyugue = '';
    $scope.concelulargaranteconyugue = '';
    $scope.conlugartrabajogaranteconyugue = '';
    $scope.concargotrabajogaranteconyugue = '';
    $scope.contiempolugartrabajogaranteconyugue = '';
    $scope.condirecciontrabajogaranteconyugue = '';
    $scope.contelefonostrabajogaranteconyugue = '';
    $scope.concedulareferenciapersonal = '';
    $scope.connombrescompletosreferenciapersonal = '';
    $scope.condirecciondomicilioreferenciapersonal = '';
    $scope.concaracteristicasdomicilioreferenciapersonal = '';

    $scope.concasapropiaarrendadareferenciapersonal = '';
    $scope.conreferenciadomicilioreferenciapersonal = '';
    $scope.contelefonocasareferenciapersonal = '';
    $scope.concelularreferenciapersonal = '';
    $scope.conlugartrabajoreferenciapersonal = '';
    $scope.concargotrabajoreferenciapersonal = '';
    $scope.contiempolugartrabajoreferenciapersonal = '';
    $scope.condirecciontrabajoreferenciapersonal = '';
    $scope.contelefonostrabajoreferenciapersonal = '';
    $scope.concedulareferenciaestudiantil = '';
    $scope.connombrescompletosreferenciaestudiantil = '';
    $scope.conparentescoreferenciaestudiantil = '';
    $scope.coninstitucionreferenciaestudiantil = '';
    $scope.connivelreferenciaestudiantil = '';
    $scope.conplazocredito = '';

    $scope.coninterescredito = 3;
    $scope.coninteresmora = 1.5;
    $scope.concuotainicial = '';
    $scope.conentradapendiente = '';
    $scope.concostocuota = '';
    $scope.mod1 = '';
    $scope.obj;

    $scope.totalCompra = 1000;

    $scope.test = false;


    $scope.iniciar = function () {


        $scope.mod1 = window.localStorage.getItem('mod1');
        console.log($scope.mod1);

        if ($scope.mod1 != undefined && $scope.mod1 != '') {

            $scope.obj = JSON.parse($scope.mod1);
            console.log($scope.obj);
            console.log($scope.obj.codigo);
            console.log($scope.obj.id_venta);
           
        }

    }


    $scope.guardar = function () {
        $http({
            method: 'POST',
            url: myProvider.getAllContratosActiMod1(),
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                id: $scope.obj.codigo,
                tipconcodigo: $scope.obj.tipconcodigo,
                estconcodigo: $scope.obj.estconcodigo,
                venid: $scope.obj.id_venta,
                idcliente:  $scope.obj.id_cliente,

                concasapropiaarrendadacliente: $scope.obj.concasapropiaarrendadacliente,

                concaracteristicasdomiciliocliente: $scope.obj.concaracteristicasdomiciliocliente,
                conreferenciadomiciliocliente: $scope.obj.conreferenciadomiciliocliente,
                contelefonodomiciliocliente: $scope.obj.contelefonodomiciliocliente,
                concelularcliente: $scope.obj.concelularcliente,
                conlugartrabajocliente: $scope.obj.conlugartrabajocliente,
                concargotrabajocliente: $scope.obj.concargotrabajocliente,
                contiempolugartrabajocliente: $scope.obj.contiempolugartrabajocliente,
                condirecciontrabajocliente: $scope.obj.condirecciontrabajocliente,
                contelefonostrabajocliente: $scope.obj.contelefonostrabajocliente,
                conreferencialugartrabajocliente: $scope.obj.conreferencialugartrabajocliente,
                concedulagaranteconyugue: $scope.obj.concedulagaranteconyugue,
                connombrescompletosgaranteconyugue: $scope.obj.connombrescompletosgaranteconyugue,
                conciudadgaranteconyugue: $scope.obj.conciudadgaranteconyugue,
                condirecciondomiciliogaranteconyugue: $scope.obj.condirecciondomiciliogaranteconyugue,
                concaracteristicasdomiciliogaranteconyugue: $scope.obj.concaracteristicasdomiciliogaranteconyugue,

                concasapropiaarrendadagaranteconyugue: $scope.obj.concasapropiaarrendadagaranteconyugue,
                conreferenciadomiciliogaranteconyugue: $scope.obj.conreferenciadomiciliogaranteconyugue,
                contelefonocasagaranteconyugue: $scope.obj.contelefonocasagaranteconyugue,
                concelulargaranteconyugue: $scope.obj.concelulargaranteconyugue,
                conlugartrabajogaranteconyugue: $scope.obj.conlugartrabajogaranteconyugue,
                concargotrabajogaranteconyugue: $scope.obj.concargotrabajogaranteconyugue,
                contiempolugartrabajogaranteconyugue: $scope.obj.contiempolugartrabajogaranteconyugue,
                condirecciontrabajogaranteconyugue: $scope.obj.condirecciontrabajogaranteconyugue,
                contelefonostrabajogaranteconyugue: $scope.obj.contelefonostrabajogaranteconyugue,
                concedulareferenciapersonal: $scope.obj.concedulareferenciapersonal,
                connombrescompletosreferenciapersonal: $scope.obj.connombrescompletosreferenciapersonal,
                condirecciondomicilioreferenciapersonal: $scope.obj.condirecciondomicilioreferenciapersonal,
                concaracteristicasdomicilioreferenciapersonal: $scope.obj.concaracteristicasdomicilioreferenciapersonal,

                concasapropiaarrendadareferenciapersonal: $scope.obj.concasapropiaarrendadareferenciapersonal,
                conreferenciadomicilioreferenciapersonal: $scope.obj.conreferenciadomicilioreferenciapersonal,
                contelefonocasareferenciapersonal: $scope.obj.contelefonocasareferenciapersonal,
                concelularreferenciapersonal: $scope.obj.concelularreferenciapersonal,
                conlugartrabajoreferenciapersonal: $scope.obj.conlugartrabajoreferenciapersonal,
                concargotrabajoreferenciapersonal: $scope.obj.concargotrabajoreferenciapersonal,
                contiempolugartrabajoreferenciapersonal: $scope.obj.contiempolugartrabajoreferenciapersonal,
                condirecciontrabajoreferenciapersonal: $scope.obj.condirecciontrabajoreferenciapersonal,
                contelefonostrabajoreferenciapersonal: $scope.obj.contelefonostrabajoreferenciapersonal,
                concedulareferenciaestudiantil: $scope.obj.concedulareferenciaestudiantil,
                connombrescompletosreferenciaestudiantil: $scope.obj.connombrescompletosreferenciaestudiantil,
                conparentescoreferenciaestudiantil: $scope.obj.conparentescoreferenciaestudiantil,
                coninstitucionreferenciaestudiantil: $scope.obj.coninstitucionreferenciaestudiantil,
                connivelreferenciaestudiantil: $scope.obj.connivelreferenciaestudiantil
               


            }


        })
            .then(function (response) {
                console.log(response.data);
                localStorage.removeItem('mod1');
                window.location = 'tableContrato.html';

            },


            function errorCallback(response) {

                   console.log(response.data);

            });



    }

    $scope.regresar = function () {
        localStorage.removeItem('mod1');
        window.location = 'tableContrato.html';
    }
}]);