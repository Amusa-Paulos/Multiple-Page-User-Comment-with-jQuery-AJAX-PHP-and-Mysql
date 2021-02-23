<?php

$host = "localhost";
$db = "multipleComment";
$user = "root";
$pwd = "";

$conn = mysqli_connect($host, $user, $pwd, $db);
if (!$conn) {
    die("Hops!, Could not connect to the database, because " . mysqli_error($conn));
}

if(isset($_POST["main-comment"])){
    $userName = mysqli_real_escape_string($conn, filter_var(strip_tags($_POST["name"]), FILTER_SANITIZE_STRING));
    $userEmail = mysqli_real_escape_string($conn, filter_var(strip_tags($_POST["email"]), FILTER_SANITIZE_STRING));
    $userComment = mysqli_real_escape_string($conn, filter_var(strip_tags($_POST["message"]), FILTER_SANITIZE_STRING));
    $pageName = mysqli_real_escape_string($conn, filter_var(strip_tags($_POST["pageName"]), FILTER_SANITIZE_STRING));

    $date = date("Y-m-d H:i:s", strtotime("now"));
    $commentType = "main";

    $sql = "INSERT INTO comments (name, email, comment, page, commentType, date)VALUES(?, ?, ?, ?, ?, ?)";

    $stmt = mysqli_stmt_init($conn); // initialize
    mysqli_stmt_prepare($stmt, $sql);

    mysqli_stmt_bind_param($stmt, "ssssss", $userName, $userEmail, $userComment, $pageName, $commentType, $date);
    if(mysqli_stmt_execute($stmt)){
        echo json_encode(["status"=>0, "msg"=>"Comment Saved Successfully"]);
        exit();
    }else{
        echo json_encode(["status"=>1, "msg"=>"Comment not Saved, please try again!"]);
        exit();

    }


}

// reply comment
if(isset($_POST["commentId"])){
    $userName = mysqli_real_escape_string($conn, filter_var(strip_tags($_POST["name"]), FILTER_SANITIZE_STRING));
    $userEmail = mysqli_real_escape_string($conn, filter_var(strip_tags($_POST["email"]), FILTER_SANITIZE_STRING));
    $userComment = mysqli_real_escape_string($conn, filter_var(strip_tags($_POST["message"]), FILTER_SANITIZE_STRING));
    $pageName = mysqli_real_escape_string($conn, filter_var(strip_tags($_POST["pageName"]), FILTER_SANITIZE_STRING));
    $commentId = mysqli_real_escape_string($conn, filter_var(strip_tags($_POST["commentId"]), FILTER_SANITIZE_STRING));

    $date = date("Y-m-d H:i:s", strtotime("now"));
    $commentType = "reply";

    $sql = "INSERT INTO comments (name, email, comment, page, commentId, commentType, date)VALUES(?, ?, ?, ?, ?, ?, ?)";

    $stmt = mysqli_stmt_init($conn); // initialize
    mysqli_stmt_prepare($stmt, $sql);

    mysqli_stmt_bind_param($stmt, "sssssss", $userName, $userEmail, $userComment, $pageName, $commentId, $commentType, $date);
    if(mysqli_stmt_execute($stmt)){
        echo json_encode(["status"=>0, "msg"=>"Comment Saved Successfully"]);
        exit();
    }else{
        echo json_encode(["status"=>1, "msg"=>"Comment not Saved, please try again!"]);
        exit();

    }


}