<?php
    // 引入connect.php
    include 'connect.php';

    /*
        接口功能：用户注册
            * 写入数据库
        所需参数：
            * username
            * password
     */
    
    $username = isset($_POST['username']) ? $_POST['username'] : null; 
    $password = isset($_POST['password']) ? $_POST['password'] : null; 

  
    // 写入数据库
    $sql = "insert into user(username,password) values('$username','$password')";

    // 执行sql语句
    $result = $conn->query($sql);


    if($result){
        echo "success";
    }else{
        echo "fail";
    }

?>