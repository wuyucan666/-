/* 
* @Author: Marte
* @Date:   2018-08-21 09:13:21
* @Last Modified by:   Marte
* @Last Modified time: 2018-08-27 15:54:00
*/

require(['config'],function(){

    require(['jquery','common'],function($){
        // 引入头部底部
        $('#header').load('common.html #top');
        $('#nav').load('common.html #nav');
        $('#footer').load('common.html #footer')

        // 品牌图片效果
        $('.smallList li').on('mouseenter',function(){
            $(this).css('borderColor','#000');
            $(this).find('img').css('display','none');
            $(this).find('i').css('display','block');
        }).on('mouseleave',function(){
            $(this).css('borderColor','#ccc');
            $(this).find('img').css('display','block');
            $(this).find('i').css('display','none');
        })

        // 选项下拉收起功能
        var a = true;
        $('#more').on('click',function(){
            if(a){
                $('.address').css({
                display:'block'
                });

                $(this).html('收起^');
                a = false;
            }else{
                 $('.address').css({
                display:'none'
                });

                $(this).html('更多选项 v');
                a = true;
            }

        })
       
        // 发起请求数据库数据生成页面结构
        $.ajax({         
            url:'../api/list.php',
            dataType:'json',
            success:function(data){
                console.log(data);



                // 执行封装函数，将data传过去
                render(data);
            
                // 点击收藏效果
                $('.goodslist').on('click',function(e){
                    if(e.target.className=='shoucang'){
                        if(a){
                            $(e.target).css('color','#e93b39');
                            a = false;
                        }else{
                            $(e.target).css('color','#999');
                            a = true;
                        }
                    }
                })

                // 价格排序
                $('.xiding_price').on('click',function(){
                    $('.xiding_num').css({
                        backgroundColor:'#fff',
                        color:'#000'
                    });
                    if(a){
                        var arr = priceup(data);console.log(arr)
                        render(arr);
                        $(this.children[0]).html('⬆');
                        $(this).css({
                            backgroundColor:'#e93b39',
                            color:'#fff'
                        });
                        a = false;
                        return false;
                    }else{
                        var arr = pricedown(data);
                        render(arr);
                        $(this.children[0]).html('⬇');
                        $(this).css({
                            backgroundColor:'#e93b39',
                            color:'#fff'
                        });
                        a = true;
                        return false;
                    }
                })

                // 销量排序
                $('.xiding_num').on('click',function(){
                    $('.xiding_price').css({
                        backgroundColor:'#fff',
                        color:'#000'
                    });
                    if(a){
                        var arr = savesup(data);
                        render(arr);
                        $(this.children[0]).html('⬆');
                        $(this).css({
                            backgroundColor:'#e93b39',
                            color:'#fff'
                        });
                        a = false;
                        return false;
                    }else{
                        var arr = savesdown(data);
                        render(arr);
                        $(this.children[0]).html('⬇');
                        $(this).css({
                            backgroundColor:'#e93b39',
                            color:'#fff'
                        });
                        a = true;
                        return false;
                    }
                })

                

                // 点击商品跳转到详情页面
                $('.goodslist').on('click',function(e){
                    if(e.target.tagName.toLowerCase()==='img' || e.target.className==='name'){
                        location.href = `detail.html?${$(e.target).closest('li').find('img').attr('src')}=${$(e.target).closest('li').find('.name').html()}=${$(e.target).closest('li').find('.price i').html()}`;
                    }
                })


                // 点击添加到购物车
                $('.goodslist').on('click',function(e){
                    if(e.target.className=='add_car'){
                        
                        // 添加购物车操作
                        var goodslist = Cookie.get('goodslist');//'[{},{}]' /[]
                        if(goodslist === ''|| goodslist===[]){
                            //如果goodslist得到一个空字符串变成空数组
                             goodslist = [];

                        }else{
                            //如果goodslist得到一个json字符串变成数组
                             goodslist = JSON.parse(goodslist);
                           
                        }
                        var imgurl = $(e.target).closest('li').find('img').attr('src');
                        var name = $(e.target).closest('li').find('.name').html();
                        var price = $(e.target).closest('li').find('.price i').html();
                        //获取商品信息
                        var goods = {
                            imgurl:imgurl,
                            name:name,
                            price:price,
                            qty:1
                        }
                        console.log(goods);
                        
                         //添加商品到数组
                        goodslist.push(goods);

                        // 得到当前时间
                        var date = new Date();
                        
                        // 在当前的基础上+7天
                        date.setDate(date.getDate()+7);

                        // 把数据更新到添加到购物车
                        $('.car_num').html(goodslist.length);

                        //写入cookie
                        document.cookie = 'goodslist=' + JSON.stringify(goodslist) + ';expires=' + date.toUTCString();

                    }
                });















            
            }

        });
   







        // 封装函数用于生成结构渲染页面
        function render(data){
            var $content=data.map(function(item){
                return `  
                        <li data-guid="${item.id}">
                            <img src="../img/${item.url}"/>
                            <p class="first"><span class="diqu">香港</span><span class="xiajiang">直降</span></p>
                            <a  class="name">${item.name}</a>
                            <p class="two"><span class="price">￥<i>${item.price}</i></span><span class="xiaoliang">销量：<i>${item.saves}</i>件</span></p>
                            <p class="three"><span class="add_car">添加购物车</span><span class="shoucang"><i>❤</i>收藏</span></p>
                        </li>`;
            }).join('');

            // 写入页面
            $('.goodslist').html('');
            $('<ul>').html($content).appendTo('.goodslist');
        }
        
        
        // 封装价格由低到高排序
        function priceup (arr){
                         
           for(var  i=0;i<arr.length-1;i++){
                    
                 for(var j=i+1;j<arr.length;j++){
                           
                    if(arr[i].price*1>arr[j].price*1){
                        var newobj=Object.assign({},arr[i]);
                        var newobj1=Object.assign({},arr[j]);
                        arr[i]={};
                        arr[j]={};
                        arr[i]=Object.assign({},newobj1);
                        arr[j]=Object.assign({},newobj);
                    }
                 }
           }

           return arr;
        }

        //封装价格由高到低排序
        function pricedown (arr){
                         
           for(var  i=0;i<arr.length-1;i++){
                    
                 for(var j=i+1;j<arr.length;j++){
                           
                    if(arr[i].price*1<arr[j].price*1){
                        var newobj=Object.assign({},arr[i]);
                        var newobj1=Object.assign({},arr[j]);
                        arr[i]={};
                        arr[j]={};
                        arr[i]=Object.assign({},newobj1);
                        arr[j]=Object.assign({},newobj);
                    }
                 }
           }

           return arr;
        }

        // 封装销量由低到高排序
        function savesup (arr){
                         
           for(var  i=0;i<arr.length-1;i++){
                    
                 for(var j=i+1;j<arr.length;j++){
                           
                    if(arr[i].saves*1>arr[j].saves*1){
                        var newobj=Object.assign({},arr[i]);
                        var newobj1=Object.assign({},arr[j]);
                        arr[i]={};
                        arr[j]={};
                        arr[i]=Object.assign({},newobj1);
                        arr[j]=Object.assign({},newobj);
                    }
                 }
           }

           return arr;
        }

        //封装销量由高到低排序
        function savesdown (arr){
                         
           for(var  i=0;i<arr.length-1;i++){
                    
                 for(var j=i+1;j<arr.length;j++){
                           
                    if(arr[i].saves*1<arr[j].saves*1){
                        var newobj=Object.assign({},arr[i]);
                        var newobj1=Object.assign({},arr[j]);
                        arr[i]={};
                        arr[j]={};
                        arr[i]=Object.assign({},newobj1);
                        arr[j]=Object.assign({},newobj);
                    }
                 }
           }

           return arr;
        }


        // // 读取根目录购物车数量cookie（goodsNumber）
        // var goodsNumber = Cookie.get('goodsNumber'); //'[{},{}]' 

        //  if(goodsNumber==''){
        //     //如果goodslist得到一个空字符串变成空数组
        //     goodsNumber = [];
        // }else{
        //     //如果goodslist得到一个json字符串变成数组
        //     goodsNumber = JSON.parse(goodsNumber);
        // }

        // // 写入头部购物车位置
        // $('.car_num').html(goodsNumber);



















    });



});