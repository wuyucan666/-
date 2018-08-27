<?php
    // 引入connect.php
    include 'connect.php';
    /*
        接口功能：验证邮箱地址是否存在
        所需参数：
            * username
            
     */
    
    $username = isset($_GET['username']) ? $_GET['username'] : null; 
 

    // 查找数据库中是否该邮箱是否已经注册过
    $sql = "select * from user where username='$username'";

    // 执行sql语句
    $result = $conn->query($sql);

    if($result->num_rows>0){
        echo "no";
    }else{
        echo "yes";
    }

?>