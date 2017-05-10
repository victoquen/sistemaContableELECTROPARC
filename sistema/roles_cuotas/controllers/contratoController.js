
app.controller('contrato', ['$scope', '$http', '$location', 'myProvider', '$localStorage', function ($scope, $http, $location, myProvider, $localStorage) {

    $scope.id_contrato;

    $scope.tipconcodigo='Mensual';
    $scope.estconcodigo='Vigente';
    $scope.venid='';
    $scope.idcliente='';
    $scope.connumero='';
    $scope.concedulacliente='';
    $scope.connombrescompletoscliente='';
    $scope.conciudadcliente='';
    $scope.condirecciondomiciliocliente='';

    $scope.concasapropiaarrendadacliente='';
  
    $scope.concaracteristicasdomiciliocliente='';
    $scope.conreferenciadomiciliocliente='';
    $scope.contelefonodomiciliocliente='';
    $scope.concelularcliente='';
    $scope.conlugartrabajocliente='';
    $scope.concargotrabajocliente='';
    $scope.contiempolugartrabajocliente='';
    $scope.condirecciontrabajocliente='';
    $scope.contelefonostrabajocliente='';
    $scope.conreferencialugartrabajocliente='';
    $scope.concedulagaranteconyugue='';
    $scope.connombrescompletosgaranteconyugue='';
    $scope.conciudadgaranteconyugue='';
    $scope.condirecciondomiciliogaranteconyugue='';
    $scope.concaracteristicasdomiciliogaranteconyugue='';

    $scope.concasapropiaarrendadagaranteconyugue='';
    $scope.conreferenciadomiciliogaranteconyugue='';
    $scope.contelefonocasagaranteconyugue='';
    $scope.concelulargaranteconyugue='';
    $scope.conlugartrabajogaranteconyugue='';
    $scope.concargotrabajogaranteconyugue='';
    $scope.contiempolugartrabajogaranteconyugue='';
    $scope.condirecciontrabajogaranteconyugue='';
    $scope.contelefonostrabajogaranteconyugue='';
    $scope.concedulareferenciapersonal='';
    $scope.connombrescompletosreferenciapersonal='';
    $scope.condirecciondomicilioreferenciapersonal='';
    $scope.concaracteristicasdomicilioreferenciapersonal='';

    $scope.concasapropiaarrendadareferenciapersonal='';
    $scope.conreferenciadomicilioreferenciapersonal='';
    $scope.contelefonocasareferenciapersonal='';
    $scope.concelularreferenciapersonal='';
    $scope.conlugartrabajoreferenciapersonal='';
    $scope.concargotrabajoreferenciapersonal='';
    $scope.contiempolugartrabajoreferenciapersonal='';
    $scope.condirecciontrabajoreferenciapersonal='';
    $scope.contelefonostrabajoreferenciapersonal='';
    $scope.concedulareferenciaestudiantil='';
    $scope.connombrescompletosreferenciaestudiantil='';
    $scope.conparentescoreferenciaestudiantil='';
    $scope.coninstitucionreferenciaestudiantil='';
    $scope.connivelreferenciaestudiantil='';
    $scope.conplazocredito='';
    $scope.confechacontrato='';
    $scope.coninterescredito=3;
    $scope.coninteresmora=1.5;
    $scope.concuotainicial='';
    $scope.conentradapendiente='';
    $scope.concostocuota='';


    $scope.totalCompra=1000;

    $scope.test=false;




    $scope.imprimir = function () {

        $http.get("http://localhost/testAngular/class/imprimir_contrato.php")
            .then(function (response) {

                $scope.listEmpleados = response.data;

            }, function errorCallback(response) {

                console.log(response);
            });


    };

    $scope.inicio = function () {
        $scope.local1 = window.localStorage.getItem('idCliente');
        $scope.local2 = window.localStorage.getItem('idFactura');
        $scope.local3 = window.localStorage.getItem('totalFactura');
        
        $scope.id_contrato;

        $scope.tipconcodigo = 'Mensual';
        $scope.estconcodigo = 'Vigente';
        $scope.venid = $scope.local2;
        $scope.idcliente = $scope.local1;
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
        $scope.confechacontrato = '';
        $scope.coninterescredito = 3;
        $scope.coninteresmora = 1.5;
        $scope.concuotainicial = '';
        $scope.conentradapendiente = '';
        $scope.concostocuota = '';

        $scope.totalCompra = $scope.local3;

        $scope.test = false;
        document.getElementById('datepicker').value = '';





    }

    $scope.calculos = function () {
        $scope.confechacontrato = document.getElementById('datepicker').value;
        $scope.vec1 = $scope.confechacontrato.split('/');

        $scope.formatedDate = $scope.vec1[2] + '-' + $scope.vec1[1] + '-' + $scope.vec1[0];
        console.log($scope.formatedDate);
        if ($scope.conplazocredito <= 4) {

            $scope.coninterescredito = 0;
            $scope.costoCuota = parseFloat(fixedNumbers(($scope.totalCompra - $scope.concuotainicial) / $scope.conplazocredito));
            $scope.concostocuota = parseFloat(fixedNumbers(($scope.totalCompra) ));
            console.log($scope.concostocuota);

        } else {
            $scope.coninterescredito = parseFloat(fixedNumbers($scope.coninterescredito / 100));
           
          
            $scope.total1 = fixedNumbers((($scope.totalCompra - $scope.concuotainicial) / $scope.conplazocredito) * ($scope.coninterescredito + 1));
            //console.log($scope.total1);
            $scope.costoCuota = parseFloat($scope.total1);
            $scope.concostocuota = fixedNumbers($scope.concuotainicial + ($scope.totalCompra - $scope.concuotainicial) * ($scope.coninterescredito + 1));
            console.log($scope.concostocuota);
        }


    }







    $scope.guardar = function () {

        $scope.confechacontrato = document.getElementById('datepicker').value;

        $scope.vec1 = $scope.confechacontrato.split('/');

        $scope.formatedDate = $scope.vec1[2] + '-' + $scope.vec1[1] + '-' + $scope.vec1[0];
     
        //$scope.confechacontrato = document.getElementById('datepicker').value;
        //$scope.vec1 = $scope.confechacontrato.split('/');

        //$scope.formatedDate = $scope.vec1[2] + '-' + $scope.vec1[1] + '-' + $scope.vec1[0];
        console.log($scope.formatedDate);

        if ($scope.conplazocredito <= 4) {

            $scope.coninterescredito = 0;
            $scope.costoCuota = parseFloat(fixedNumbers(($scope.totalCompra - $scope.concuotainicial) / $scope.conplazocredito));
            $scope.concostocuota = parseFloat(fixedNumbers(($scope.totalCompra)));
           // console.log($scope.concostocuota);

        } else {
            $scope.coninterescreditoAux = parseFloat(fixedNumbers($scope.coninterescredito / 100));


            $scope.total1 = fixedNumbers((($scope.totalCompra - $scope.concuotainicial) / $scope.conplazocredito) * ($scope.coninterescreditoAux + 1));
            //console.log($scope.total1);
            $scope.costoCuota = parseFloat($scope.total1);
            $scope.concostocuota = fixedNumbers($scope.concuotainicial+($scope.totalCompra - $scope.concuotainicial) * ($scope.coninterescredito + 1));
           // console.log($scope.costoCuota);
        }
      




            $http({
                method: 'POST',
                url: myProvider.getAllContratosActiMod(),
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                    tipconcodigo: $scope.tipconcodigo,
                    estconcodigo: $scope.estconcodigo,
                    venid: $scope.venid,
                    idcliente: /* $scope.idcliente*/1723,
                 
                    concasapropiaarrendadacliente: $scope.concasapropiaarrendadacliente,
          
                    concaracteristicasdomiciliocliente: $scope.concaracteristicasdomiciliocliente,
                    conreferenciadomiciliocliente: $scope.conreferenciadomiciliocliente,
                    contelefonodomiciliocliente: $scope.contelefonodomiciliocliente,
                    concelularcliente: $scope.concelularcliente,
                    conlugartrabajocliente: $scope.conlugartrabajocliente,
                    concargotrabajocliente: $scope.concargotrabajocliente,
                    contiempolugartrabajocliente: $scope.contiempolugartrabajocliente,
                    condirecciontrabajocliente: $scope.condirecciontrabajocliente,
                    contelefonostrabajocliente: $scope.contelefonostrabajocliente,
                    conreferencialugartrabajocliente: $scope.conreferencialugartrabajocliente,
                    concedulagaranteconyugue: $scope.concedulagaranteconyugue,
                    connombrescompletosgaranteconyugue: $scope.connombrescompletosgaranteconyugue,
                    conciudadgaranteconyugue: $scope.conciudadgaranteconyugue,
                    condirecciondomiciliogaranteconyugue: $scope.condirecciondomiciliogaranteconyugue,
                    concaracteristicasdomiciliogaranteconyugue: $scope.concaracteristicasdomiciliogaranteconyugue,
                  
                    concasapropiaarrendadagaranteconyugue: $scope.concasapropiaarrendadagaranteconyugue,
                    conreferenciadomiciliogaranteconyugue: $scope.conreferenciadomiciliogaranteconyugue,
                    contelefonocasagaranteconyugue: $scope.contelefonocasagaranteconyugue,
                    concelulargaranteconyugue: $scope.concelulargaranteconyugue,
                    conlugartrabajogaranteconyugue: $scope.conlugartrabajogaranteconyugue,
                    concargotrabajogaranteconyugue: $scope.concargotrabajogaranteconyugue,
                    contiempolugartrabajogaranteconyugue: $scope.contiempolugartrabajogaranteconyugue,
                    condirecciontrabajogaranteconyugue: $scope.condirecciontrabajogaranteconyugue,
                    contelefonostrabajogaranteconyugue: $scope.contelefonostrabajogaranteconyugue,
                    concedulareferenciapersonal: $scope.concedulareferenciapersonal,
                    connombrescompletosreferenciapersonal: $scope.connombrescompletosreferenciapersonal,
                    condirecciondomicilioreferenciapersonal: $scope.condirecciondomicilioreferenciapersonal,
                    concaracteristicasdomicilioreferenciapersonal: $scope.concaracteristicasdomicilioreferenciapersonal,
                
                    concasapropiaarrendadareferenciapersonal: $scope.concasapropiaarrendadareferenciapersonal,
                    conreferenciadomicilioreferenciapersonal: $scope.conreferenciadomicilioreferenciapersonal,
                    contelefonocasareferenciapersonal: $scope.contelefonocasareferenciapersonal,
                    concelularreferenciapersonal: $scope.concelularreferenciapersonal,
                    conlugartrabajoreferenciapersonal: $scope.conlugartrabajoreferenciapersonal,
                    concargotrabajoreferenciapersonal: $scope.concargotrabajoreferenciapersonal,
                    contiempolugartrabajoreferenciapersonal: $scope.contiempolugartrabajoreferenciapersonal,
                    condirecciontrabajoreferenciapersonal: $scope.condirecciontrabajoreferenciapersonal,
                    contelefonostrabajoreferenciapersonal: $scope.contelefonostrabajoreferenciapersonal,
                    concedulareferenciaestudiantil: $scope.concedulareferenciaestudiantil,
                    connombrescompletosreferenciaestudiantil: $scope.connombrescompletosreferenciaestudiantil,
                    conparentescoreferenciaestudiantil: $scope.conparentescoreferenciaestudiantil,
                    coninstitucionreferenciaestudiantil: $scope.coninstitucionreferenciaestudiantil,
                    connivelreferenciaestudiantil: $scope.connivelreferenciaestudiantil,
                    conplazocredito: $scope.conplazocredito,
                    confechacontrato: $scope.formatedDate,
                    coninterescredito: $scope.coninterescredito,
                    coninteresmora: $scope.coninteresmora,
                    concuotainicial: $scope.concuotainicial,
                    conentradapendiente: $scope.conentradapendiente,
                    concostocuota: $scope.concostocuota,
                    conobservacion: $scope.conobservacion


                }


            })
            .then(function (response) {

                $scope.id_contrato = response.data;
                console.log(response.data);





                $scope.auxDate;
                $scope.flag = false;
                $scope.confechacontrato = document.getElementById('datepicker').value;
                $scope.vec1 = $scope.confechacontrato.split('/');
         
                var auxStr = $scope.vec1[1];
                $scope.vec1[1] = parseInt( auxStr.substring(1));
              //  console.log($scope.vec1[1]);
               // $scope.formatedDate = $scope.vec1[2] + '-' + $scope.vec1[1] + '-' + $scope.vec1[0];
                for (var i = 0; i < $scope.conplazocredito; i++) {

                  //  var 
                    
                    console.log($scope.vec1[1]);
                    switch ($scope.vec1[1])

                    {

                        case 1: $scope.vec1[1]+=1;
                            if ($scope.vec1[0]>30){
                                $scope.vec1[0] = 30;
                            }
                            break;
                        case 2: 
                          
                                $scope.vec1[1]+=1;
                               // $scope.vec1[1] = 29;
                                //  console.log($scope.totalDiasMes);
                                if ($scope.vec1[0] > 28) {
                                    $scope.auxDate = $scope.vec1[0];
                                    $scope.vec1[0] = 28;
                                    $scope.flag = true;
                                }
                           
                                 
                                //  console.log($scope.totalDiasMes);
                            
                            break;
                        case 3: $scope.vec1[1]=+1;
                            if ($scope.vec1[0] > 30) {
                                $scope.vec1[0] = 30;
                            }
                            break;
                        case 4: $scope.vec1[1]+=1;
                            if ($scope.vec1[0] > 30) {
                                $scope.vec1[0] = 30;
                            }
                            break;
                        case 5: $scope.vec1[1]+=1;
                            if ($scope.vec1[0] > 30) {
                                $scope.vec1[0] = 30;
                            }
                            break;
                        case 6: $scope.vec1[1]+=1;
                            if ($scope.vec1[0] > 30) {
                                $scope.vec1[0] = 30;
                            }
                            break;
                        case 7: $scope.vec1[1]+=1;
                            if ($scope.vec1[0] > 30) {
                                $scope.vec1[0] = 30;
                            }
                            break;
                        case 8: $scope.vec1[1]+=1;
                            if ($scope.vec1[0] > 30) {
                                $scope.vec1[0] = 30;
                            }
                            break;
                        case 9: $scope.vec1[1]+=1;
                            if ($scope.vec1[0] > 30) {
                                $scope.vec1[0] = 30;
                            }
                            break;
                        case 10: $scope.vec1[1]+=1;
                            if ($scope.vec1[0] > 30) {
                                $scope.vec1[0] = 30;
                            }
                            break;
                        case 11: $scope.vec1[1]+=1;
                            if ($scope.vec1[0] > 30) {
                                $scope.vec1[0] = 30;
                            }
                            break;
                        case 12: $scope.vec1[1] = 1;
                                $scope.vec1[2]++;
                            if ($scope.vec1[0] > 30) {
                                $scope.vec1[0] = 30;
                            }
                            break;

                    }



                    $scope.formatedDate1 = $scope.vec1[2] + '-' + $scope.vec1[1] + '-' + $scope.vec1[0];
                    if ($scope.flag) {

                        $scope.vec[0] = $scope.auxDate;
                    }
                    console.log($scope.formatedDate1);
                    var url2 = myProvider.getCuotas() 
                        
                    console.log(url2);

                    $http({
                        method: 'POST',
                        url: url2,
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        data: {
                            id_contrato:  $scope.id_contrato,
                            descripcion_pago:'cuota N' + (i + 1) ,
                            fecha_maxima: $scope.formatedDate1 ,
                            estado:1,
                            valor: $scope.costoCuota
                            


                        }


                    })
                       .then(function (response) {
                       //    console.log(i+ 'numero de indicador');
                         /*  if (i + 1 == $scope.conplazocredito) {
                               $scope.inicio();
                           }*/
                          // console.log(url2);
                        }, function errorCallback(response) {
                           // console.log(url2);
                            //console.log(response.data);
                        })
                        .then(function(){
                            localStorage.removeItem('idCliente');
                            localStorage.removeItem('idFactura');
                            localStorage.removeItem('totalFactura');
                            window.location = '../facturas_cliente/index.php';
                             })
                        ;
                }
          


            }, function errorCallback(response) {

             //   console.log(response.data);

                });


    }

    fixedNumbers = function (cal) {

        var constant100 = 100;
        var resp = (Math.floor(cal * constant100) / constant100).toFixed(2);
     //   console.log(resp);
        return (resp);
    }

}]);