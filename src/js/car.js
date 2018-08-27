/* 
* @Author: Marte
* @Date:   2018-08-24 14:37:11
* @Last Modified by:   Marte
* @Last Modified time: 2018-08-25 17:44:33
*/

require(['config'],function(){

    require(['jquery','common'],function($){


        var goodslist = Cookie.get('goodslist'); 

         if(goodslist==''){
            goodslist = [];
        }else{
            goodslist = JSON.parse(goodslist);
        }
       // console.log(goodslist)
        //写入页面
        render();

        //封装写入页面
        function render(){
            //根据数据生成结构
           

            //计算总价
            var total =0;
            var content = goodslist.map(function(goods,idx){
                //计算金额小计
                total = goods.price*goods.qty*1;
                return `<tr>
                            <td><input type="checkbox" /></td>
                            <td width="97" class="clearfix">
                                <img src="${goods.imgurl}" alt="" />
                                <a class="name">${goods.name}</a>
                                <p class="size"><span class="color">颜色：玫瑰金色</span><span class="size">尺码：60号</span></p>
                            </td>
                            <td><span>中国香港</span></td>
                            <td>
                            <span class="price">￥<i>${goods.price}</i></span>
                            </td>
                            <td>
                                <input min="1" type="number" value="${goods.qty*1}" class="cao"/>
                            </td>
                            <td>
                                <span class="tr_total">￥<i>${total}</i>元</span>
                            </td>
                            <td class="del">
                                <a class="btn-close">删除</a>
                            </td>
                        </tr>`;
            }).join('\n');

            $('tbody').html(content)

        
        }

        // 改变购物车商品数量每行计算总价
        $('.cao').on('input',function(){
            var num = $(this).val();
            var price = $('.price i').html();
           $(this).closest('tr').find('.tr_total i').html(num*price*1);
        })

        console.log(goodslist)

        //删除单个商品
        // * 找出删除的商品 -> 从数组中移除 -> 重写cookie -> 渲染页面
        $('tr').on('click','.btn-close',function(e){

            var idx=$(this).index();

            $(e.target).closest('tr').remove();
            
            goodslist.splice(idx,1);

            // 得到当前时间
            var date = new Date();
            // 在当前的基础上+7天
            date.setDate(date.getDate()+7);

            //把修改后的写入cookie
            document.cookie = 'goodslist=' + JSON.stringify(goodslist) + ';expires=' + date.toUTCString();

            // 把修改后的购物车数量存入cookie
            document.cookie = 'goodsNumber=' + JSON.stringify(goodslist.length) + ';expires=' + date.toUTCString() + ';path=' + '/';

            
        });
        
        
        var $checkboxs = $(':checkbox').not('.all');
        var $trs = $('tbody tr');

        // 全选
        $('.all').on('click',function(){
            $checkboxs.prop('checked',this.checked);
            $trs[this.checked ? 'addClass' : 'removeClass']('selected');
            $('.all').prop('checked',this.checked);
            
            if($('.all').checked){
                var res = 0;
                $('.tr_total i').each(function(idx,item){
                    return res += $(item).html()*1;
                })
                
                $('.total').html(res);
            }else{
                $('.total').html('0');
            }
            
        })

        //封装函数检测全选框
        function checkedAll(){
            let $checked = $checkboxs.filter(':checked');
            $('.all').prop('checked',$checked.length===$checkboxs.length);
        }

        $checkboxs.on('click',function(){
            let $currentTr = $(this).closest('tr');
            $currentTr.toggleClass('selected');
            $currentTr.find(':checkbox').prop('checked',$currentTr.hasClass('selected'));

            checkedAll();
            if($currentTr.hasClass('selected')){
                var res = 0;
                $currentTr.find('.tr_total i').each(function(idx,item){
                    return res += $(item).html()*1;
                })
                
                $('.total').html(res);
            }else{
                $('.total').html('0')
            }
           
        })

        












    });



});