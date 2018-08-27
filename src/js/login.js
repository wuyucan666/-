/* 

*/

;(function(){

    jQuery(function($){
        
        $('#login_top').load('register.html #header');


        $('#login_footer').load('01footer.html');
    })

})();


;(function(){
    document.addEventListener('DOMContentLoaded',function(){

        let name = document.querySelector('#login_name');
        let psd = document.querySelector('#login_password ');
        let code = document.querySelector('#login_code');
        let code1 = document.querySelector('.login_code');
        let change = document.querySelector('.to');
        let btn = document.querySelector('.go');
        let error = document.querySelector('.error');
        let num = document.querySelector('.num');
        // 点击登录
        btn.onclick = ()=>{

            let _name = name.value;
            let _psd = psd.value;
            let _code = code.value;
            let _code1 = code1.innerText;

            let xhr = new XMLHttpRequest();
            let status = [200,304];
            xhr.onload = ()=>{
                if(status.indexOf(xhr.status)>=0){
                    if(xhr.responseText==='success'){
                        location.href = 'list.html';
                    }else if(xhr.responseText === 'fail'){
                        error.style.display = 'block';
                        error.innerHTML = '用户名或密码不正确';
                    }
                }
            }

            xhr.open('post','../api/login.php',true);
            // 设置请求头，以便后端接收post数据
            xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');


            if(_name==''){
                error.style.display = 'block';
                name.parentNode.style.borderColor = '#ccc';
                name.parentNode.style.color = '#ccc';
            }else{
                   
                    name.parentNode.style.color = '#F8A120';
                    if(_psd==''){
                        error.innerHTML = '请输入密码';
                        error.style.display = 'block';
                        }else{
                                psd.parentNode.style.color = '#F8A120';
                                if(_code==''){
                                    error.style.display = 'block';
                                    error.innerHTML = '请输入验证码';
                                }else{

                                    if(_code!==_code1){
                                        error.style.display = 'block';
                                        error.innerHTML = '验证码错误';
                                        randomCode();
                                    }else{
                                         xhr.send(`name=${_name}&psd=${_psd}`);
                                    }
                                }
                    }
            } 

        }




         // 随机生成4位随机数
         function randomCode(){
            var res = '';
            for(var i=0;i<4;i++){
                res += parseInt(Math.random()*10);
            }
            code1.innerHTML = res;
        }
        randomCode();
        change.onclick = randomCode;
        code1.onclick = randomCode;
        // 用户名框聚焦
        name.onfocus = ()=>{
            name.parentNode.style.borderColor = '#F8A120';
            name.parentNode.style.color = '#F8A120';
            error.style.display = 'none';
        }
        //用户名框失去焦点 
        name.onblur =()=>{
            name.parentNode.style.borderColor = '#ccc';
            name.parentNode.style.color = '#ccc';
        }
       // 密码框聚焦
        psd.onfocus = ()=>{
            psd.parentNode.style.borderColor = '#F8A120';
            psd.parentNode.style.color = '#F8A120';
            error.style.display = 'none';
            num.style.display = 'block';
        }
        // 密码框失去焦点
        psd.onblur = ()=>{
            psd.parentNode.style.borderColor = '#ccc';
            psd.parentNode.style.color = '#ccc';
        }
        // 验证码聚焦
        code.onfocus = ()=>{
            code.style.borderColor = '#F8A120';
            error.style.display = 'none';
        }
        // 验证码失去焦点
        code.onblur = ()=>{
            code.style.borderColor = '#ccc';
        }



        
    });

        









})();