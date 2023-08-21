<?php
$destino="SV73889671@idat.edu.pe";
$nombres=$_POST["nombres"];
$correo=$_POST["correo"];
$celular=$_POST["celular"];
$comentarios=$_POST["comentarios"];

$contenido="Nombres y Apellidos: ".$nombres."\nCorreo: ".$correo.
"\nCelular: ".$celular."\nComentarios: ".$comentarios;
mail($destino,"Mensaje",$contenido);
echo"<script>alert('Gracias por su mensake')</script>";
echo"<script>window.location.href=('index.html')</script>";
?>