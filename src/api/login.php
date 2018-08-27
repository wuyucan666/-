<?php
    // 引入connect.php
    include 'connect.php';

    /*
        接口功能：用户登录
            * 查找数据库
        所需参数：
            * name
            * psd
     */
    
    $username = isset($_POST['name']) ? $_POST['name'] : null; 
    $password = isset($_POST['psd']) ? $_POST['psd'] : null; 

   
    
    // 查找数据库中的用户与密码
   $sql = "select * from user where username='$username' and password='$password'";

    // 执行sql语句
    $result = $conn->query($sql);



    if($result->num_rows>0){
        echo "success";
    }else{
        echo "fail";
    }

?>