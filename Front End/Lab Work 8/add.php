<?php

$servername = "localhost";
$user ="root";
$password = "adminuser";
$dbname = "users";

$conn = new mysqli($servername,$user,$password,$dbname);
$error = $conn->connect_error;

if($error){
    die("Error" . $conn-> connect_error);
}else{

}

$name = $_POST['name'];
$password = $_POST['password'];

// $sql = "select * from `studens` where name like '$name'";
$sql = "select * from `studens` where name like '$name' and password like '$password'";




$result = $conn->query($sql);
 
$count = mysqli_num_rows($result);

if($count>0 ){
    echo ("Already registred");
}else{
    $values = "INSERT INTO `studens`(`name`, `password` ) VALUES ('$name','$password')";
    $conn->query($values);
    echo("Good job");
}

        

?>