<?php

require_once("sistema/conexion/conexion.php");
$db = new ServidorBaseDatos();
$idcnx = $db->getConexion();
session_start();
if (!isset($_SESSION['username']) && !isset($_SESSION['userid'])) {
    //if ( $idcnx = sqlsrv_connect( $serverName, $connectionInfo) ){
    if ($idcnx) {

        $aux1 = $_POST['login_username'];
        $aux2 = $_POST['login_userpass'];


        $sql = "SELECT nombre,id_usuario, tipo, id_facturero FROM usuario WHERE nombre='$aux1' AND password='$aux2' AND borrado = '0'";
        $res = mysql_query($sql, $idcnx);
        $num_row = mysql_num_rows($res);
        if ($num_row > 0) {

            $_SESSION['username'] = mysql_result($res, 0, "nombre");
            $_SESSION['userid'] = mysql_result($res, 0, "id_usuario");
            $_SESSION['tipo'] = mysql_result($res, 0, "tipo");
            $_SESSION['id_facturero'] = mysql_result($res, 0, "id_facturero");
            echo 1;

        } else {
            echo 0;
        }


    } else {
        echo 0;
    }
} else {
    echo 0;
}
?>