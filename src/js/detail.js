/* 
* @Author: Marte
* @Date:   2018-08-22 16:50:29
* @Last Modified by:   Marte
* @Last Modified time: 2018-08-27 12:43:04
*/

require(['config'],function(){

    require(['jquery','lxzoom','common'],function($){
        
        // 引入头部底部
        $('#header').load('common.html #top');
        $('#nav').load('common.html #nav');
        $('#footer').load('common.html #footer');
       
         
          // 放大镜插件
        $('.goods').lxzoom({
            width:400,
            height:400,
        });


        // 小图点击事件
        $('.small').on('click','img',function(){
            $('.goods img').attr({
                'src':this.src,
                'data-big':this.dataset.big
            });
        })

        // 小图移入事件
        $('.small').on('mouseover','img',function(){
            this.style.border = '1px solid #f00';
        }).on('mouseout','img',function(){
            this.style.border = '1px solid #fff';
        })
        
        // 颜色小图样式
        var a = true;
        $('.yanse').on('click',function(){
            if(a){
                $(this).css({
                borderColor:'#f00'
                });
                a = false;
            }else{
                 $(this).css({
                borderColor:'#7e68b3'
                });
                a = true;
            }
        })



        // 截取URL参数
        var params = decodeURI(location.search.slice(1));
        
        params = params.split('=');console.log(params)
       
        // 传送数据过来就用它，否则用默认的图片信息
        if(params.length!==1){

            // 根据参数写入title文字信息
            $('.title').html(params[1]);
            
           
            // 根据参数更换小图
            $('.small .one img').attr({
                'src':params[0],
                'data-big':params[0]
            });

             // 根据参数更换大图
            $('.goods img').attr({
                'src':params[0],
                'data-big':params[0]
            });
            
            // 根据参数写入name
            $('.name h2').html(params[1]);

            // 根据参数写入price 
            $('.price i').html(params[2]);

            // 根据参数写入颜色对应的小图片
            $('.yanse').attr('src',params[0]);

        }




        // 添加购物车操作
        var goodslist = Cookie.get('goodslist');//'[{},{}]' /[]
        if(goodslist === ''|| goodslist===[]){
            //如果goodslist得到一个空字符串变成空数组
             goodslist = [];

        }else{
            //如果goodslist得到一个json字符串变成数组
             goodslist = JSON.parse(goodslist);
           
        }
        
        var imgurl = $('.small .one img').attr('src');
        var name = $('.name h2').html();
        var price = $('.price i').html();
        var qty = $('.number').val();

        $('.number').on('change',function(){
            qty = $(this).val();
        })

        // 点击添加购物车
        $('.addcar').on('click',function(){

            //获取商品信息
            var goods = {
                
                imgurl:imgurl,
                name:name,
                price:price,
                qty:qty    
            }
           
            console.log(goods);
            
             //添加商品到数组
            goodslist.push(goods);

            // 得到当前时间
            var date = new Date();
            // 在当前的基础上+7天
            date.setDate(date.getDate()+7);

            // // // 把数据更新到添加到购物车
            $('.car_num').html(goodslist.length);

            //写入cookie
            document.cookie = 'goodslist=' + JSON.stringify(goodslist) + ';expires=' + date.toUTCString();

            
            // 把购物车数量存入cookie
            document.cookie = 'goodsNumber=' + JSON.stringify(goodslist.length) + ';expires=' + date.toUTCString() + ';path=' + '/';

        });


        // // 读取购物车数量的cookie
        // var goodsNumber = Cookie.get('goodsNumber'); //'[{},{}]' 

        //  if(goodsNumber==''){
        //     //如果goodslist得到一个空字符串变成空数组
        //     goodsNumber = [];
        // }else{
        //     //如果goodslist得到一个json字符串变成数组
        //       goodsNumber=goodsNumber;
        // }

        // // 写入头部购物车位置
        // $('.car_num').html(goodsNumber);
        



        






       
      










    })





})