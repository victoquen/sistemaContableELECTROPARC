<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html" charset="UTF-8" />
        <title>Principal</title>
        <link href="../estilos/estilos.css" type="text/css" rel="stylesheet">
       
        <script type="text/javascript" src="../js/validar.js"></script>
        <script language="javascript">

        function cancelar() {
                location.href="index.php";
        }

        var cursor;
        if (document.all) {
        // Está utilizando EXPLORER
        cursor='hand';
        } else {
        // Está utilizando MOZILLA/NETSCAPE
        cursor='pointer';
        }

        function limpiar() {
                document.getElementById("formulario").reset();
        }

        </script>
    </head>
    <body>
        <div id="pagina">
            <div id="zonaContenido">
                <div align="center">
                    <div id="tituloForm" class="header">INSERTAR CODIGO RETENCION</div>
                    <div id="frmBusqueda">
                        <form id="formulario" name="formulario" method="post" action="save_codretencion.php">
                            <table class="fuente8" width="98%" cellspacing=0 cellpadding=3 border=0>                                
                                <tr>
                                    <td width="15%">Codigo</td>
                                    <td width="43%"><input NAME="Acodigo" type="text" class="cajaPequena" id="nombre" size="45" maxlength="45"></td>									
                                    <td width="42%" rowspan="8" align="left" valign="top"><ul id="lista-errores"></ul></td>
                                </tr>  
								<tr>
									<td width="15%">Nombre</td>
                                    <td width="43%"><input NAME="Anombre" type="text" class="cajaGrande" id="nombre" size="250" maxlength="250"></td>
								</tr>
								<tr>
                                    <td width="15%">Porcentaje</td>
                                    <td width="43%"><input NAME="Qporcentaje" type="text" class="cajaPequena" id="porcentaje" size="45" maxlength="45" value=0></td>									                                    
                                </tr>
								<tr>
                                    <td width="15%">Tipo</td>
									<td>
									<select id="Acbotipos" name="Acbotipos" class="comboGrande">
										<option value="">Seleccione un Tipo</option>
										<option value="RENTA">Retenci&oacute;n a la fuente</option>
										<option value="IVA">Retenci&oacute;n IVA</option>
									</select>
									</td>
								</tr>
                            </table>
                    </div>

                    <div id="botonBusqueda">
                        <img src="../img/botonaceptar.jpg" width="85" height="22" onClick="validar(formulario,true)" border="1" onMouseOver="style.cursor=cursor">
                        <img src="../img/botonlimpiar.jpg" width="69" height="22" onClick="limpiar()" border="1" onMouseOver="style.cursor=cursor">
                        <img src="../img/botoncancelar.jpg" width="85" height="22" onClick="cancelar()" border="1" onMouseOver="style.cursor=cursor">
                        <input id="accion" name="accion" value="alta" type="hidden">
                        <input id="id" name="Zid" value="" type="hidden">
                    </div>
            </form>
            </div>
            </div>
        </div>
    </body>
</html>