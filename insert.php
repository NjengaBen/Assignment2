<?php
$first_name = $_POST['first-name'];
$last_name = $_POST['last-name'];
$email = $_POST['email'];
$password = $_POST['password'];
$hashed_password = password_hash($password, PASSWORD_DEFAULT);
$confirm_password = $_POST['confirm-password'];

if(!empty($first_name) || !empty($last_name) || !empty($email) || !empty($hashed_password) || !empty($confirm_password)){
    $host = "localhost";
    $dbUsername = "root";
    $dbPassword = "";
    $dbname = "assignmentdb";

    $conn = new mysqli($host, $dbUsername, $dbPassword, $dbname);
    if(mysqli_connect_errno()){
        die('Connect Error: '. mysqli_connect_error());
    }else{
        $SELECT = "SELECT email From sweet_delight_bakery Where email = ? Limit 1";
        $INSERT = "INSERT Into sweet_delight_bakery(first_name, last_name, email, password) values(?, ?, ?, ?)";
        $stmt = $conn->prepare($SELECT);
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $stmt->bind_result($email);
        $stmt->store_result();
        $rnum = $stmt->num_rows;

        if($rnum == 0){
            $stmt->close();
            $stmt = $conn->prepare($INSERT);
            $stmt->bind_param("ssss", $first_name, $last_name, $email, $hashed_password);
            $stmt->execute();
            echo "New record inserted sucessfully";
        }else{
            echo "Someone already register using this email";
            die();
        }
        $stmt->close();
        $conn->close();
    }
} else{
    echo "All fields are required";
    die();
}
?>