/* 
* @Author: Marte
* @Date:   2018-08-19 09:37:18
* @Last Modified by:   Marte
* @Last Modified time: 2018-08-20 22:03:09
*/
;(function(){

    jQuery(function($){
        
        $('#footer').load('01footer.html');

    });

})();




;(function(){

    document.addEventListener('DOMContentLoaded',function(){

    // 验证用户是否已注册
    let username = document.querySelector('#username');
    let password = document.querySelector('#password');
    let confirm = document.querySelector('#cr_psd');
    let res = document.querySelector('.userContent');
    let _username;
    let _password;
    let isok;
    let _code;
    let span2;
    let _confirm;
    let status = [200,304];

    //用户名框失去焦点时触发
    username.onblur = ()=>{
        _username = username.value;
        let xhr = new XMLHttpRequest();
        xhr.onload = ()=>{
            if(status.indexOf(xhr.status)>= 0){
                if(xhr.responseText === 'no'){
                    alert('用户名：' +_username +'已经被注册了');
                    res.innerText = '请更换用户注册';
                    res.style.color = '#f00';
                }else{
                    // 可以注册用户名的时候，边框颜色，默认提示信息消失消失，
                    res.innerText = '';
                    username.style.borderColor = '#ccc';
                    //验证码div出现
                    let div = document.createElement('div');
                    let span1 = document.createElement('span');
                    let input = document.createElement('input');
                    span2 = document.createElement('span');
                    let span3 = document.createElement('span');

                    div.className = 'showCode';
                    span1.innerHTML = '验证码：';
                    span3.innerHTML = '换一换';

                    div.appendChild(span1);
                    div.appendChild(input);
                    div.appendChild(span2);
                    div.appendChild(span3);

                    let hezi = document.querySelector('.hezi');
                    hezi.innerHTML = '';
                    hezi.appendChild(div);
                    //生成随机4位验证码
                    randomCode();
                    function randomCode(){
                        var res = '';
                        for(var i=0;i<4;i++){
                            res += parseInt(Math.random()*10);
                        }
                        span2.innerHTML = res;
                    }
                    //点击验证码更新
                    span2.onclick = randomCode;
                    // 点击换一换更新
                    span3.onclick = randomCode;

                    //验证框聚焦变大红色
                    input.onfocus = ()=>{
                        input.style.borderColor = '#900';
                    }
                    //验证框失去焦点
                    input.onblur = ()=>{
                        _code = input.value;
                        if(_code===span2.innerText){
                            // 验证码正确时
                             input.style.borderColor = '#ccc';
                             res.innerText = '';
                             // 跳到密码框
                             password.focus();
                        }else if(_code===''){
                            // 验证码错误
                            input.style.borderColor = '#f00';
                            res.innerText = '请输入邮箱验证码'
                            res.style.color = '#f00';
                        }else{
                            input.style.borderColor = '#f00';
                            res.innerText = '请输入正确的邮箱验证码'
                            res.style.color = '#f00';
                        }
                    }

               

                }
            }
        }

        xhr.open('get','../api/check.php?username='+_username,true);
        
        // 如果用户名电话或邮箱格式不合法
        var reg_email = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
        var reg_phone = /^(13[0-9]|15[012356789]|18[0-9]|17[678]|14[57])[0-9]{8}$/;
        isok = reg_email.test(_username) || reg_phone.test(_username);
        //格式不正确时不发送请求,正确才发送验证
        if(!isok){
            // 格式不正确时，边框变红
            username.style.borderColor = '#f00';
            //提示信息更新
            res.innerText = '请输入正确的手机号或者邮箱';
            //信息颜色变红
            res.style.color = '#f00';
        }else{
            // 格式正确时发送请求验证
            xhr.send();
            // 格式正确的时候清空提示信息
            res.innerText = '';
        }
 
        
    }
        
    //用户名框光标聚焦时触发
    username.onfocus = ()=>{
        // 边框变大红
        username.style.borderColor = '#900';
        // 提示信息恢复默认
        res.innerText = '请输入手机号或者邮箱';
        // 颜色恢复默认
        res.style.color = '#999';
    }

    // 密码框光标聚焦时
    // 获取密码提示信息对应的span
    let psd_1 = document.querySelector('.mimaContent');
    password.onfocus = ()=>{
        // 边框变大红
        password.style.borderColor = '#900';
        // 信息隐藏
        psd_1.innerText = '';
    }

    // 密码框光标失去焦点时
    password.onblur = ()=>{
        // 判断密码长度为6-25
         _password = password.value;
        
        if(_password===''){
            password.style.borderColor = '#f00';
            psd_1.innerText = '请输入密码！';
            psd_1.style.color = '#f00';
        }else if(!/^\S{6,25}$/.test(_password)){
            password.style.borderColor = '#f00';
            psd_1.innerText = '密码长度只能在6-25位之间！';
            psd_1.style.color = '#f00';
        }else{
            // 密码格式正确时，
            psd_1.innerText = '';
            password.style.borderColor = '#ccc';
            //跳到确认密码框
            confirm.focus();
        }
       
    }


    // 确认密码框光标聚焦时
    // 获取确认密码框提示信息对应的span 
    let psd_2 = document.querySelector('.confirmContent');
    confirm.onfocus = ()=>{
        // 边框变大红
        confirm.style.borderColor = '#900';
        psd_2.innerText = '';
    }


    // 确认密码框光标失去焦点时
    confirm.onblur = ()=>{
        _confirm = confirm.value;
        if(_confirm===''){
            confirm.style.borderColor = '#f00';
            psd_2.innerText = '请再次确认密码！';
            psd_2.style.color = '#f00';
        }else if(_confirm!==_password){
            confirm.style.borderColor = '#f00';
            psd_2.innerText = '两次输入不一致！';
            psd_2.style.color = '#f00';
        }else{
            //确认密码框正确
            psd_2.innerText = '';
            confirm.style.borderColor = '#ccc';
            // 跳到勾选邀请码
            
        }
    }

    //勾选邀请码
    let guibin = document.querySelector('#guibin');
    let guibin_div = document.querySelector('#code');
    guibin.onclick = function(){
        guibin_div.style.display = guibin.checked ? 'block' : 'none';
    }

    // 获取勾选协议
    let xieyi = document.querySelector('#xieyi');




    //点击注册
    let btn_reg = document.querySelector('.btn_reg');
    btn_reg.onclick = ()=>{

        let xhr = new XMLHttpRequest();
        xhr.onload = ()=>{
            if(status.indexOf(xhr.status) >= 0){
                console.log(xhr.responseText);
                alert('注册成功');
                location.href = 'login.html';
            }
        }
        xhr.open('post','../api/register.php',true);

        // 设置请求头，以便后端接收post数据
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');

        // 如果用户名是否为空
        if(_username==undefined){
            username.focus();
            username.style.borderColor = '#f00';
            res.innerText = '请输入正确的手机号或者邮箱';
            res.style.color = '#f00';   
        }else if(isok){
            // 判断用户名格式是否正确
            username.style.borderColor = '#ccc';
            if(_code==span2.innerHTML){
                // 判断验证码是否正确
                if(_password!== undefined){   
                    // 判断密码是否为空
                    if(/^\S{6,25}$/.test(_password)){
                         //判断密码是否为6-25位的格式 
                        if(_confirm==_password){
                            // 判断两次密码是否一致
                            if(xieyi.checked){
                                // 同意协议即可发起注册请求
                                xhr.send(`username=${_username}&password=${_password}`); 
                            }else{
                                alert('请勾选同意协议！');
                            }

                        }
                        
                    }
                    
                }
            }
        } 
     
    }
        

        

    

          













    });





})();