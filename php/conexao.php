<?php 
$dsn='Microsoft SQL Server Management Studio 18:host=localhost;dbname=userdb';
$user = 'root';
$pass ='123';
try{

    $pdo = new PDO($dsn, $user, $pass);
    
}