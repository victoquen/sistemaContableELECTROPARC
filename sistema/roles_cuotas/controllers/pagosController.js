// JavaScript source code
app.controller('PagosController', ['$scope', '$http', '$location', 'myProvider', '$localStorage', function ($scope, $http, $location, myProvider, $localStorage) {


    $scope.listaContratos = [];
    $scope.listaPagosPendiente = [];
    $scope.listaPagosRealizados = [];
    $scope.cedula;
    $scope.id; 
    $scope.id2; 
    $scope.id3;
    $scope.selectedRow;
    $scope.selectedRow2;
    $scope.selectedRow3;
    $scope.pagar;
    $scope.dateNow;
    $scope.pagar1;
    $scope.iniciar = function () {


    }


    $scope.loadContratos = function () {

        $http({
            method: 'POST',
            url: myProvider.getContratoCred(),
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                cedula: $scope.cedula
              


            }


        })
            .then(function (response) {


                if (response.data.length > 0) {
                    $scope.listaContratos = response.data;
                    console.log($scope.listaContratos);
                } else {
                    alert('La cedula ingresada no tiene un contrato activo');
                }
              
            }, function errorCallback(response) {

                console.log(response);
            });

    }


    $scope.loadPagos = function () {

        console.log($scope.id);


        $http({
            method: 'POST',
            url: myProvider.getCuotasPago(),
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                cont: $scope.id.codigo ,
                estado:1



            }


        })
            .then(function (response) {



                $scope.listaPagosPendiente = response.data;
                console.log($scope.listaPagosPendiente);
            }, function errorCallback(response) {

                console.log(response);
            });

        $http({
            method: 'POST',
            url: myProvider.getCuotasPago(),
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                cont: $scope.id.codigo,
                estado: 2



            }


        })
            .then(function (response) {



                $scope.listaPagosRealizados = response.data;
                console.log($scope.listaPagosRealizados);
            }, function errorCallback(response) {

                console.log(response);
            });

    }


    $scope.setClickedRow = function (index, item) {

        $scope.id = item;
        $scope.selectedRow = index;

        console.log($scope.id);

    }


    $scope.setClickedRow2 = function (index, item) {

        $scope.id2 = item;
        $scope.selectedRow2 = index;
        $scope.pagar = item;
        console.log($scope.id2);

       

    }


    $scope.setClickedRow3 = function (index, item) {

        $scope.id3 = item;
        $scope.selectedRow3 = index;
        $scope.pagar1 = item;
        console.log($scope.id3);

    }


    $scope.pago = function () {




        $http({
            method: 'POST',
            url: myProvider.getUpdatePago(),
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                id: $scope.pagar.id ,
                estado:2 ,
                valor : $scope.pagar.valor, 
                final:  $scope.dateNow



            }


        })
            .then(function (response) {

                console.log('ingreso correcto');
                $scope.loadPagos();
            }, function errorCallback(response) {
                //console.log(url2);
               // console.log(response.data);
            });
        


    } 


    $scope.calcular = function () {

        $scope.vec = $scope.pagar.fecha_maxima.split('-');
        $scope.dateNow = new Date();
        $scope.vec1 = JSON.stringify($scope.dateNow).split('T');

        $scope.dateNow = $scope.vec1[0].substring(1);
        $scope.vec1 = $scope.dateNow.split('-');
        $scope.day1 = parseInt($scope.vec[2]);
        $scope.day2 = parseInt($scope.vec1[2]);
        $scope.month = parseInt($scope.vec[1]);
        $scope.month2 = parseInt($scope.vec1[1]);
        if ($scope.month2 >= $scope.month && $scope.day2 > $scope.day1) {
            $scope.id.coninteresmora = $scope.id.coninteresmora / 100;
            $scope.adicional = parseFloat(fixedNumbers($scope.pagar.valor * $scope.id.coninteresmora));

            $scope.pagar.valor += $scope.adicional;

        }
       // $scope.vec1 
        console.log($scope.pagar.valor);
      /*  if ($scope.vec){
            
        }*/

    }

    fixedNumbers = function (cal) {

        var constant100 = 100;
        var resp = (Math.floor(cal * constant100) / constant100).toFixed(2);
        //   console.log(resp);
        return (resp);
    }

    $scope.modificar = function () {


    }
}]);