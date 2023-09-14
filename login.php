<?php
session_start();
if($_SERVER["REQUEST_METHOD"]=='POST'){
    $login_email = $_POST['email'];
    $login_password =$_POST['password'];

    $host = "localhost";
    $username = "root";
    $password = "";
    $dbname = "assignmentdb";

    $conn = new mysqli($host, $username, $password, $dbname);
    if(mysqli_connect_errno()){
        die('Connect Error: '. mysqli_connect_error());
    }else{
        $SELECT = "SELECT email, password, first_name, last_name From sweet_delight_bakery Where email = ? LIMIT = 1";
        $stmt = $conn->prepare($SELECT);
        $stmt -> bind_param("s", $login_email);
        $stmt -> execute();
        $stmt -> bind_result($email, $hashed_password, $first_name, $last_name);
        $stmmt -> fetch();

        if(password_verify($login_password, $hashed_password)){
            $_SESSION['email']=$login_email;
            echo "Success. Welcome ".$first_name." ".$last_name;
        }else{
            echo "Invalid email or password";
        }
        $stmt->close();
        $conn->close();
    }
}
?>