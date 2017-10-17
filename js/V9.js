$(function(){
	//向上滚动页面，商品大图主图被固定一段距离
	var H1=$('header').height()+$('.breadcrumb_tag').outerHeight(true);
	var H2=H1+$('.product>.right').height();
	console.log(H1);// 100+36=136
	console.log(H2);//136+774=880
	$(window).scroll(function(){
		var scrollTop=$(document).scrollTop();
		if(scrollTop>=H1&&scrollTop<=H2-460){
			$('.product>.left').css({
				'position':'fixed',
				'top':0,
                'z-index':2
			});
			$('.product>.right').css({
				marginLeft:450+'px'//.left设置定位之后，脱离了文档流，右边的div就会来到左边，所以设置marginLeft，右边div保持不动
			})
		}else{
			$('.product>.left').css({
				'position':'static',
				// 'marginTop':200+'px'
			});	
            // console.log($('.product>.left').css('top'));
			$('.product>.right').css({
				marginLeft:0
			})		
		}
	})

	//向下滚动页面，商品详情选项卡被固定在顶部
	var H3=$('header').height()+$('.content').height()+$('.relative').height();
    console.log(H3);//100+800+155=1055
    $(window).scroll(function(){
        // 网页卷去的高度:DOM==>document.body.scrollTop
        // console.log(document.body.scrollTop)
        var scrollTop=$(document).scrollTop();
        // console.log(scrollTop)
        // 如果卷去的高度大于头部高度
        if (scrollTop>=H3) {
            $('#tab').css({
                'position':'fixed',
                'top':0,
                'height':50+'px',
                'lineHeight':50+'px',
                'zIndex':9,
                'box-shadow':'0 2px 8px #d6d6d6'
            });
            $('#goToCar').show();
        }else{
            $('#tab').css({
                'position':'static',
                'height':102+'px',
                'lineHeight':102+'px',
                'box-shadow':'none'
            });
            $('#goToCar').hide();
        }
    })

    //回到顶部
    $(window).scroll(function(){
    	var scrollTop=$(document).scrollTop();
    	if(scrollTop>800){
    		$('#toTop').css({
    			"display":'inline-block'
    		})
    	}else{
    		$('#toTop').css({
    			"display":'none'
    		})
    	}
    })

    //已选商品
    var color;
    var color_check;
    var standard;
    var standard_check;
    var product_ram;
    var product_check;
    var product_menu;
    var product_menu_check;
    var product_order;
    var product_order_check;
    //大图队列数组
    var Color0=['img/L_gold01.jpg','img/L_black01.jpg','img/L_blue01.jpg','img/L_red01.jpg'];
    var Color1=['img/L_gold02.jpg','img/L_black02.jpg','img/L_blue02.jpg','img/L_red02.jpg'];
    var Color2=['img/L_gold03.jpg','img/L_black03.jpg','img/L_blue03.jpg','img/L_red03.jpg'];
    var Color3=['img/L_gold04.jpg','img/L_black04.jpg','img/L_blue04.jpg','img/L_red04.jpg'];
    var Color4=['img/L_gold05.jpg','img/L_black05.jpg','img/L_blue05.jpg','img/L_red05.jpg'];
    var Color5=['img/L_gold06.jpg','img/L_black06.jpg','img/L_blue06.jpg','img/L_red06.jpg'];
    var Color6=['img/L_gold07.jpg','img/L_black07.jpg','img/L_blue07.jpg','img/L_red07.jpg'];
    var Color7=['img/L_gold08.jpg','img/L_black08.jpg','img/L_blue08.jpg','img/L_red08.jpg'];
    //小图四组路径数组
    var small_pic1=['img/S_gold01.jpg','img/S_gold02.jpg','img/S_gold03.jpg','img/S_gold04.jpg','img/S_gold05.jpg','img/S_gold06.jpg','img/S_gold07.jpg','img/S_gold08.jpg'];
    var small_pic2=['img/S_black01.jpg','img/S_black02.jpg','img/S_black03.jpg','img/S_black04.jpg','img/S_black05.jpg','img/S_black06.jpg','img/S_black07.jpg','img/S_black08.jpg'];
    var small_pic3=['img/S_blue01.jpg','img/S_blue02.jpg','img/S_blue03.jpg','img/S_blue04.jpg','img/S_blue05.jpg','img/S_blue06.jpg','img/S_blue07.jpg','img/S_blue08.jpg'];
    var small_pic4=['img/S_red01.jpg','img/S_red02.jpg','img/S_red03.jpg','img/S_red04.jpg','img/S_red05.jpg','img/S_red06.jpg','img/S_red07.jpg','img/S_red08.jpg'];
    //获取选择的颜色,并将其边框设为红色，同时变换主大图颜色
    $('.Color').find('a').click(function(){
    	color=$(this).text();//获取点击的颜色
        $('.chosing_color').text(color);//把获取来的颜色文字加到该类中
    	// console.log(color_check.text());
    	$(this).css("border-color",'#ca141d')//自身边框变红，其他变灰
        .parent().siblings().find('a').css("border-color",'#a4a4a4')
    	var index=$(this).parent().index();  //获取所点击的颜色的父级li的索引值，可代表颜色，范围是0-3
    	// alert(index);
        //点击颜色选项后给主图队列赋对应一套颜色的路径 
        $('.mainPic>img').eq(0).attr({
            'src':Color0[index]
        })  
        $('.mainPic>img').eq(1).attr({
            'src':Color1[index]
        })
        $('.mainPic>img').eq(2).attr({
            'src':Color2[index]
        })
        $('.mainPic>img').eq(3).attr({
            'src':Color3[index]
        })
        $('.mainPic>img').eq(4).attr({
            'src':Color4[index]
        })
        $('.mainPic>img').eq(5).attr({
            'src':Color5[index]
        })
        $('.mainPic>img').eq(6).attr({
            'src':Color6[index]
        })
        $('.mainPic>img').eq(7).attr({
            'src':Color7[index]
        })
    	
    	//小图组变换组图
    	switch(index){// 判断获取到的索引值的大小
    		case 0:$('.spic>li').each(function(){
    			$(this).find('img').attr({'src':small_pic1[$(this).index()]})
    		});break;   //若索引值为0，表示铂光金，则遍历小图组所在的li，将li内的img的路径分别从路径数组获取赋值
    		case 1:$('.spic>li').each(function(){
    			$(this).find('img').attr({'src':small_pic2[$(this).index()]})
    		});break;
    		case 2:$('.spic>li').each(function(){
    			$(this).find('img').attr({'src':small_pic3[$(this).index()]})
    		});break;
    		case 3:$('.spic>li').each(function(){
    			$(this).find('img').attr({'src':small_pic4[$(this).index()]})
    		});break;
    	}
    });
    //鼠标滑入，当前选项边框颜色变深(#717171),鼠标移除，当前的变回来,除被选中的选项(红色)
    $('.Color').find('a').mouseenter(function(){
        if($(this).css("border-color")=='rgb(202, 20, 29)'){  //谷歌浏览器颜色判断需要用rgb()的格式
            $(this).css("border-color",'rgb(202, 20, 29)')
        }else{
            $(this).css("border-color",'#717171');
        }
           // console.log($(this));
           // alert($(this).css('borderColor'));
            // alert($(this).css("border-color")=='rgb(202, 20, 29)')
    }).mouseout(function(){
        if($(this).css("border-color")=='rgb(202, 20, 29)'){
            $(this).css("border-color",'rgb(202, 20, 29)')
        }else{
            $(this).css("border-color",'#a4a4a4');
        }
    })

	//获取选择的制式，并将其边框设为红色
	$('.Standard').find('a').click(function(){
    	standard=$(this).text();
        $('.chosing_standard').text(standard);
    	// console.log($('.chosing_standard').text());
    	$(this).css({
    		"border-color":'#ca141d' //自身边框变红，其他变灰
    	}).parent().siblings().find('a').css({
    		"border-color":'#a4a4a4'
    	})
    })
    //鼠标滑入，当前选项边框颜色变深(#717171),鼠标移除，当前的变回来,除被选中的选项(红色)
    $('.Standard').find('a').mouseenter(function(){
        if($(this).css("border-color")=='rgb(202, 20, 29)'){  //谷歌浏览器颜色判断需要用rgb()的格式
            $(this).css("border-color",'rgb(202, 20, 29)')
        }else{
            $(this).css("border-color",'#717171');
        }
    }).mouseout(function(){
        if($(this).css("border-color")=='rgb(202, 20, 29)'){
            $(this).css("border-color",'rgb(202, 20, 29)')
        }else{
            $(this).css("border-color",'#a4a4a4');
        }
    })

	//获取选择的容量，并将其边框设为红色
	$('.product_ram').find('a').filter({'cursor':'not-allowed'}).click(function(){//  过滤掉不能选择的选项{'cursor':'not-allowed'}
    	product_ram=$(this).text();
        $('.product_description>p>span').eq(2).text(product_ram);
    	$(this).css("border-color",'#ca141d')//自身边框变红，其他变灰
        .parent().siblings().find('a').css("border-color",'#a4a4a4')
    })
    //鼠标滑入，当前选项边框颜色变深(#717171),鼠标移除，当前的变回来,除被选中的选项(红色)
    $('.product_ram').find('a').filter({'cursor':'not-allowed'}).mouseenter(function(){
        if($(this).css("border-color")=='rgb(202, 20, 29)'){  //谷歌浏览器颜色判断需要用rgb()的格式
            $(this).css("border-color",'rgb(202, 20, 29)')
        }else{
            $(this).css("border-color",'#717171');
        }
    }).mouseout(function(){
        if($(this).css("border-color")=='rgb(202, 20, 29)'){
            $(this).css("border-color",'rgb(202, 20, 29)')
        }else{
            $(this).css("border-color",'#a4a4a4');
        }
    })

	//获取选择的套餐，并将其边框设为红色
	$('.product_menu').find('a').click(function(){
    	product_menu=$(this).text();
        $('.product_description>p>span').eq(3).text(product_menu);
    	$(this).css("border-color",'#ca141d')//自身边框变红，其他变灰
        .parent().siblings().find('a').css("border-color",'#a4a4a4')
    })
    //鼠标滑入，当前选项边框颜色变深(#717171),鼠标移除，当前的变回来,除被选中的选项(红色)
    $('.product_menu').find('a').mouseenter(function(){
        if($(this).css("border-color")=='rgb(202, 20, 29)'){  //谷歌浏览器颜色判断需要用rgb()的格式
            $(this).css("border-color",'rgb(202, 20, 29)')
        }else{
            $(this).css("border-color",'#717171');
        }
    }).mouseout(function(){
        if($(this).css("border-color")=='rgb(202, 20, 29)'){
            $(this).css("border-color",'rgb(202, 20, 29)')
        }else{
            $(this).css("border-color",'#a4a4a4');
        }
    })

	//获取选择的定制，并将其边框设为红色
	$('.product_order').find('a').click(function(){
    	product_order=$(this).text();
        $('.product_description>p>span').eq(4).text(product_order);
    	$(this).css("border-color",'#ca141d')//自身边框变红，其他变灰
        .parent().siblings().find('a').css("border-color",'#a4a4a4')
    })
    //鼠标滑入，当前选项边框颜色变深(#717171),鼠标移除，当前的变回来,除被选中的选项(红色)
    $('.product_order').find('a').mouseenter(function(){
        if($(this).css("border-color")=='rgb(202, 20, 29)'){  //谷歌浏览器颜色判断需要用rgb()的格式
            $(this).css("border-color",'rgb(202, 20, 29)')
        }else{
            $(this).css("border-color",'#717171');
        }
    }).mouseout(function(){
        if($(this).css("border-color")=='rgb(202, 20, 29)'){
            $(this).css("border-color",'rgb(202, 20, 29)')
        }else{
            $(this).css("border-color",'#a4a4a4');
        }
    })

	//数量按钮
	var sum=parseInt($('.product_quantity>input').val());//获取当前数量
	// alert(typeof(sum));
	$('#add').click(function(){
		sum++;//点击+，数量加1
		$('.product_quantity>input').val(String(sum)); //将sum反过来赋值给input
		$('#del').css({  //减号恢复功能
			'cursor':'pointer',
			'color':'#777'
		})
	})
	$('#del').click(function(){
		sum--;//点击-，数量减1
		$('.product_quantity>input').val(String(sum)); //将sum反过来赋值给input
		if(sum<=1){
			sum=1;
			$('.product_quantity>input').val(String(sum));
			$('#del').css({  //当数量为1时，减号失效
			'cursor':'not-allowed',
			'color':'#c4c4c4'
			})
		}	
	})

    //移入小图，大图对应出现
    $('.spic>li').mouseenter(function(){
        var index=$(this).index();
        // alert(index);
        $(this).addClass('S_check').siblings().removeClass('S_check');
        $('.mainPic>img').eq(index).addClass('active').siblings().removeClass('active');
    })


	// 详情小图轮播图
	var width_li=$('.S_check').outerWidth(true);  //获取一个li的宽度，也就是每次ul要移动的距离
    var number=0; //向左移动li的个数
	// alert($('.S_check').outerWidth(true));  //52
	$('.toright').click(function(){   //ul向左移动
		// $('.spic').append($('.spic>li').eq(0)); //  将第一个li移动到ul的最后去（比较生硬地变换）
        var current_left=parseInt($('.spic').css('left'));//获取ul当前的left值
        if(number<3){
            number++;
            current_left=current_left-52;
            $('.spic>li').eq(number-1).css('visibility','hidden');
            $('.spic>li').eq(number+4).css('visibility','visible');
            $('.spic').animate({left:current_left+'px'});
        }else{
            munber=3;
        }
        console.log(number);
	})

    $('.toleft').click(function(){ //ul向右移动
        var current_left=parseInt($('.spic').css('left'));//获取ul当前的left值
        if(number>0){
            number--;
            current_left=current_left+52;
            $('.spic>li').eq(number).css('visibility','visible');
            $('.spic>li').eq(number+5).css('visibility','hidden');
            $('.spic').animate({left:current_left+'px'});
        }else{
            number=0;
        }
        console.log(number);
    })

    //关联商品
    //移动机制：ul设置宽度将所有的li包含，且不换行，给ul的父级设置只显示4个li的宽度，然后设置overflow:hidden,点击按钮时，ul左右移动，对li不进行任何操作
    var number1=0;  //向左移动的li个数
    $('.rel-display>.right').click(function(){
        var current_left1=parseInt($('.rel_list').css('left'));//获取ul当前的left值
        if(number1<3){
            $('.rel-display>.left').css('cursor','pointer');  //向左移动之后，此按钮就不再是'不能点击'的样式了
            number1++;
            current_left1=current_left1-295;
            $('.rel_list').animate({left:current_left1+'px'});
            console.log(number1)
        }else{
            number=3;
            $(this).css('cursor','not-allowed');
        }
    })
    $('.rel-display>.left').click(function(){
        var current_left1=parseInt($('.rel_list').css('left'));//获取ul当前的left值
        if(number1>0){
            $('.rel-display>.right').css('cursor','pointer') //向右移动之后，此按钮就不再是'不能点击'的样式了
            number1--;
            current_left1=current_left1+295;
            $('.rel_list').animate({left:current_left1+'px'});
            console.log(number1)
        }else{
            number=0;
            $(this).css('cursor','not-allowed')
        }
    })
    //选项卡切换
    $('#tab>li>a').click(function(){
        $(this).addClass('select')
        .parent().siblings().find('a').removeClass('select');
    })
    //选项卡详情板块的剩余部分的显示与隐藏
    //
    //商品详情板块
    $('.hide_pro').click(function(){
        $('.pro_content>p').not($('.pro_content>p').eq(0,1)).css({'display':'none'});
        $(this).css({'display':'none'});
        $('.show_pro').css({'display':'block'});
    })
    $('.show_pro').click(function(){
        $('.pro_content>p').not($('.pro_content>p').eq(0,1)).css({'display':'block'});
        $(this).css({'display':'none'});
        $('.hide_pro').css({'display':'block'});
    })
    //商品参数板块
    $('.hide_para').click(function(){
        $('.spec_content>div').not($('.spec_content>div').eq(0,1,11)).css({'display':'none'});
        $(this).css({'display':'none'});
        $('.show_para').css({'display':'block'});
    })
    $('.show_para').click(function(){
        $('.spec_content>div').not($('.spec_content>div').eq(0,1,11)).css({'display':'block'});
        $(this).css({'display':'none'});
        $('.hide_para').css({'display':'block'});
    })

    //底部友情链接板块的切换
    var num3=0; //向左移动的ol个数
    $('.btn-pre').click(function(){
        var current_left2=parseInt($('.frendslist').css('left')); // 获取当前容器的left
        console.log(current_left2);
        if(num3>0){
            $('.btn-next').css({'cursor':'pointer','background-color':'#b3b3b3'})
            current_left2=current_left2+158;
            num3--;
            $('.frendslist').animate({'left':current_left2+'px'});
            $('.frendslist>ol').eq(num3).css({'visibility':'visible'});
            $('.frendslist>ol').eq(num3+1).css({'visibility':'hidden'});
        }else{
            num3=0;
            $(this).css({'cursor':'not-allowed','background-color':'#ccc'})
        }
        
    })

    $('.btn-next').click(function(){
        var current_left2=parseInt($('.frendslist').css('left')); // 获取当前容器的left
        console.log(current_left2);
        if(num3<8){
            $('.btn-pre').css({'cursor':'pointer','background-color':'#b3b3b3'})
            current_left2=current_left2-158;
            num3++;
            $('.frendslist').animate({'left':current_left2+'px'});
            $('.frendslist>ol').eq(num3-1).css({'visibility':'hidden'});
            $('.frendslist>ol').eq(num3).css({'visibility':'visible'}); 
        }else{
            num3=8;
            $(this).css({'cursor':'not-allowed','background-color':'#ccc'})
        }
       
    })

    //放大镜
    $('.mask').mouseenter(function(){  //鼠标移入mask(图片所在区域)，小区域出现，放大图出现
        $('.float_layer').css({'display':'block'});
        $('.bigger').css({'display':'block'});
    })
    $('.mask').mouseout(function(){  //鼠标移出mask(图片所在区域)，小区域消失，放大图消失
        $('.float_layer').css({'display':'none'});
        $('.bigger').css({'display':'none'});
    })

    $('.mask').mousemove(function(e) { //鼠标在mask内部移动事件
        e = e || window.event;
        // console.log('left：'+e.pageX);  //获取鼠标的x坐标
        // console.log('top：'+e.pageY);  //获取鼠标的Y坐标
        var left_lay=e.pageX-$('.float_layer').width()/2;  //鼠标X坐标减去小区域的坐标的一半，可使得鼠标在其中间带其移动
        var top_lay=e.pageY-146-$('.float_layer').height()/2;  //同上  减去146，是为了减去头部高度
        console.log(left_lay,top_lay);
        //$('.float_layer').css({'left':left_lay+'px','top':top_lay+'px'});//小区域跟随鼠标移动
        //判断边缘移动，不让其超出mask边界
        if(left_lay<0){  //左边不出边界
            left_lay=0;


        }else if(left_lay>$('.mask').width()-$('.float_layer').width()){   //右边不出边界，mask宽度减去小区域的宽度
            left_lay=$('.mask').width()-$('.float_layer').width();
        }
        if(top_lay<0){ //上边不出边界
            top_lay=0;
        }else if(top_lay>$('.mask').height()-$('.float_layer').height()){
            top_lay=$('.mask').height()-$('.float_layer').height();
        }
         $('.float_layer').css({'left':left_lay+'px','top':top_lay+'px'});
        var percentX=left_lay/($('.mask').width()-$('.float_layer').width());
        var percentY=top_lay/($('.mask').height()-$('.float_layer').height());
        // console.log(percentX);
        $('.bigger>img').attr('src',$('.active').attr('src'));  //将当前显示的图片路径传给bigger里面的图
        $('.bigger>img').css({
            'left':percentX*($('.bigger').width()-$('.bigger>img').width())+'px',
            'top':percentY*($('.bigger').height()-$('.bigger>img').height())+'px'
        });
    });

    //搜索框
    $('.text').click(function(){
        $('.key').css({'display':'none'});
    })
})