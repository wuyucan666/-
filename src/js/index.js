/* 

*/
require(['config'],function(){

    require(['jquery','zllunbo','common'],function($){
   
        // 轮播图
        $('#banner').lunbo({
            type:'fade',
            width:1200,
            height:500,
            src:['img/banner1.jpg','img/banner2.jpg','img/banner3.jpg','img/banner4.jpg','img/banner5.jpg','img/banner6.jpg','img/banner7.jpg','img/banner8.jpg']
        });

        
        var $topBox = $('.fuwu-box');
        var $sanjiao = $('.icon-plus-select-down');
        $('.fuwu').on('mouseenter',function(){
            
            $topBox.css({

                display:'block'

            });

            if($sanjiao.hasClass('icon-plus-select-down')){
                $sanjiao.removeClass('icon-plus-select-down');
                $sanjiao.addClass('icon-plus-select-up');
                $sanjiao.css('color','#F8A120');
            }
            
            
        });

        $topBox.mouseleave(function(){

            $topBox.css({

                display:'none'

            });

            if($sanjiao.hasClass('icon-plus-select-up')){
                $sanjiao.removeClass('icon-plus-select-up');
                $sanjiao.addClass('icon-plus-select-down');
            }


        });

        // 读取根目录购物车数量cookie（goodsNumber）
        var goodsNumber = Cookie.get('goodsNumber'); //'[{},{}]' 

         if(goodsNumber==''){
            //如果goodslist得到一个空字符串变成空数组
            goodsNumber = [];
        }else{
            //如果goodslist得到一个json字符串变成数组
            goodsNumber = JSON.parse(goodsNumber);
        }

        // 写入头部购物车位置
        $('.car_num').html(goodsNumber);


        // 跳转操作
        $('#nav a').not('.shouye').on('click',function(){
            location.href = 'html/list.html';
            return false;
        })

        $('#banner img').on('click',function(){
            location.href = 'html/list.html';
             return false;
        })

        $('.main-t img').on('click',function(){
            location.href = 'html/list.html';
             return false;
        })









    });

});