// var uid=1765891182;
function guanlianrenwu() {
    function place() {
        //this.ajax_method='GET'; // body...
    }
    place.prototype= {
        call_request:function(url,callback) {
            $.ajax({
                url: url,
                type: 'GET',
                dataType: 'json',
                async: true,
                success:callback
            });
        },
    };
    function territory(data) {
        var data=eval(data);
        console.log(data);
        var str='',str1='',str2='',str3='';
        var name,name1,name2,name3,picture,picture1,picture2,picture3;
        if (!data.friend){
            $("#container .associat .assleft .assleft2 .often .oftenimg").text('<span style="text-align: center">暂无数据~~</span>');
        }else {
            $.each(data.friend,function (index,item) {
                if (item[1]==''||item[1]=='unknown'){
                    name=item[0];
                }else {
                    name=item[1];
                };
                if (item[2]==''||item[2]=='unknown'){
                    picture='/static/image/pangzi.png';
                }else {
                    picture=item[2];
                };
                str+='<dl style="width: 55px;margin-right: 15px;display: inline-block;">'+
                    '<dt><img src="'+picture+'" title="'+name+'"></dt>'+
                    '<dd style="width: 55px;white-space:nowrap;overflow:hidden;text-overflow: ellipsis;text-align: center;' +
                    'font-size: 8px;margin-top: 5px">'+name+'</dd>'+
                    '</dl>';
            });
            $("#container .associat .assleft .assleft2 .often .oftenimg").append(str);
        };
        if (!data.social){
            $("#container .associat .assleft .assleft2 .social .oftenimg").append('<span style="text-align: center">暂无数据~~</span>');
        }else {
            $.each(data.social,function (index,item) {
                if (item[1]==''){
                    name1=item[0];
                }else {
                    name1=item[1];
                };
                if (item[2]==''){
                    picture1='/static/image/pangzi.png';
                }else {
                    picture1=item[2];
                };
                str1+='<dl style="width: 55px;margin-right: 15px;display: inline-block;">'+
                    '<dt><img src="'+picture1+'" title="'+name1+'"></dt>'+
                    '<dd style="width: 55px;white-space:nowrap;overflow:hidden;text-overflow: ellipsis;text-align: center;' +
                    'font-size: 8px;margin-top: 5px">'+name1+'</dd>'+
                    '</dl>';
            });
            $("#container .associat .assleft .assleft2 .social .oftenimg").append(str1);
        }

    }
    var place=new place();
    function nums() {
        var url = '/index/person_detail_people/?uid='+uid;
        place.call_request(url,territory);
    }
    nums();
};
guanlianrenwu();

function guanlianshijian() {
    function touch() {
        //this.ajax_method='GET'; // body...
    }
    touch.prototype= {
        call_request:function(url,callback) {
            $.ajax({
                url: url,
                type: 'GET',
                dataType: 'json',
                async: true,
                success:callback
            });
        },
    };
    function things(data) {
        var data=eval(data);
        var str='';
        function getLocalTime(nS) {
            return new Date(parseInt(nS) * 1000).toLocaleString().substr(0,18);
        };
        var weizhi,biaoqian,shuoming,photo,cwidth;
        $.each(data,function (index,item) {
            if (item.location=='null'){
                weizhi='未知';
            }else {
                weizhi=item.location;
            };
            if (item.photo_url=='null'){
                photo='/static/image/xuyuyu.png';
            }else {
                photo=item.photo_url;
            };
            if (item.user_tag=='null'){
                biaoqian='暂无';
            }else {
                biaoqian=item.user_tag;
            };
            if (item.description=='null'){
                shuoming ='暂无数据';
            }else {
                shuoming=item.user_tag;
            };
            str+='<div class="play">'+
                '<div class="play1">'+
                '<div class="p11">'+
                '<span class="xingming" style="color: #000;font-weight: 900;font-size: 18px">'+item.name+'</span><!--'+
                '--><img src="/static/image/dingwei.png" title="位置"><!--'+
                '--><span class="difang" style="font-size: 8px">'+weizhi+'</span><!--'+
                '--><img class="xin" src="/static/image/heart.png" alt="">'+
                '</div>'+
                '<div class="p22">'+
                '<span class="fasheng" style="font-weight: bold">发生时间：</span>'+
                '<span class="riqi">'+getLocalTime(item.start_ts)+'</span>'+
                '</div>'+
                '</div>'+
                '<img class="play2" src="'+photo+'" alt="">'+
                '<div class="play3" style="display: inline-block;margin-top: 10px;vertical-align:bottom;">'+
                '<a class="bus1">业务标签：</a>'+
                '<a class="bus2">'+biaoqian+'</a>'+
                '</div>'+
                '<div class="play4">'+
                '<p class="shuoming">'+
                shuoming+
                '</p>'+
                '</div>'+
                '<!-- <div class="play5" type="button" data-toggle="modal">'+
                '<a>加入专题</a>'+
                '</div> -->'+
                '</div>';
        });
        if (data.length% 2 == 0){
            cwidth=(data.length*490)/4;
        }else {
            cwidth=(data.length*490)/4 + 490;
        }

        $("#container .associat .assright .assright2 #case #crmid").width(cwidth);
        $("#container .associat .assright .assright2 #case #crmid #run").append(str);
        //卡片效果
        var heart=$(".play .play1 .p11 .xin");
        $.each(heart,function(index,item){
            var chan=1;
            $(item).on('click',function(){
                if (chan==1) {
                    $(this).attr('src','/static/image/focus.png');
                    chan=2;
                }else {
                    $(this).attr('src','/static/image/heart.png');
                    chan=1;
                }
            })
        });
        $.each($('.xingming'),function(index,item){
            $(item).on('click',function(){
                window.open('/index/search_result/?t_uid='+$(this).html());
            })
        });
    };
    var touch=new touch();
    function nums(point) {
        var url = '/index/person_detail_event/?uid='+uid+'&layer='+point;
        touch.call_request(url,things);
    }
    nums('all');
    $.each($("#container .associat .xuan input"),function (index,item) {
        $(item).on('click',function () {
            if (index==0){
                nums(1);
            }else if (index==1){
                nums(2);
            }else {
                maths='all';
                nums(maths);
            }
        });

    });
};
guanlianshijian();

function getLocalTime(nS) {
    return new Date(parseInt(nS) * 1000).toLocaleString().substr(0,20);
};
function gaoyingxiangliweibo() {
    function place() {
        //this.ajax_method='GET'; // body...
    }
    place.prototype= {
        call_request:function(url,callback) {
            $.ajax({
                url: url,
                type: 'GET',
                dataType: 'json',
                async: true,
                success:callback
            });
        },
    };
    function territory(data) {
        var data=eval(data);
        Draw_weibo_table(data);
    };
    var place=new place();

    function nums(s) {
        var url;
        if (s==1) {
            url = '/index/event_weibo/?uid='+uid+'&weibo_type=retweeted';
        }else {
            url = '/index/event_weibo/?uid='+uid+'&weibo_type=sensitive';
        };
        place.call_request(url,territory);
    }
    nums(1);
    $("#container .correlation .twleft .lfone").on('click',function () {
        // $("#container #total .twright").empty();
        nums(1);
    });
    $("#container .correlation .twleft .lftwo").on('click',function () {
        // $("#container #total .twright").empty();
        nums(2);
    });
    function Draw_weibo_table(data){
        $('#group_emotion_loading').css('display', 'none');
        $('#input-table').show();
        var dataArray = data;
        var PageNo=document.getElementById('PageNo');                   //设置每页显示行数
        var InTb=document.getElementById('input-table');               //表格
        var Fp=document.getElementById('F-page');                      //首页
        var Nep=document.getElementById('Nex-page');                  //下一页
        var Prp=document.getElementById('Pre-page');                  //上一页
        var Lp=document.getElementById('L-page');                     //尾页
        var S1=document.getElementById('s1');                         //总页数
        var S2=document.getElementById('s2');                         //当前页数
        var currentPage;                                              //定义变量表示当前页数
        var SumPage;

        if(PageNo.value!="")                                       //判断每页显示是否为空
        {
            InTb.innerHTML='';                                     //每次进来都清空表格
            S2.innerHTML='';                                        //每次进来清空当前页数
            currentPage=1;                                          //首页为1
            S2.appendChild(document.createTextNode(currentPage));
            S1.innerHTML='';                                        //每次进来清空总页数
            if(dataArray.length%PageNo.value==0)                    //判断总的页数
            {
                SumPage=parseInt(dataArray.length/PageNo.value);
            }
            else
            {
                SumPage=parseInt(dataArray.length/PageNo.value)+1
            }
            S1.appendChild(document.createTextNode(SumPage));
            var oTBody=document.createElement('tbody');               //创建tbody
            oTBody.setAttribute('class','In-table');                   //定义class
            InTb.appendChild(oTBody);
            //将创建的tbody添加入table
            var html_c = '';
            if(dataArray==''){
                html_c = "<div style='width:100%;'><span><img src='/static/img/pencil-icon.png' style='height:12px;width:12px;margin:0px;margin-right:8px;float:left;'>用户未发布任何微博</span></div>";
                oTBody.innerHTML = html_c;
            }else{

                for(i=0;i<parseInt(PageNo.value);i++)
                {                                                          //循环打印数组值
                    oTBody.insertRow(i);
                    var name;
                    if (dataArray[i].uname==''||dataArray[i].uname=='unknown') {
                        name=dataArray[i].uid;
                    }else {
                        name=dataArray[i].uname;
                    };
                    html_c = '<div class="twr1">'+
                        '                        <p class="master">'+
                        '                            微博内容：'+
                        '                            <span class="master1">'+
                        dataArray[i].text+
                        '                            </span>'+
                        '                        </p>'+
                        '                        <p class="time">'+
                        '                            <span class="time1">来自微博用户：</span>&nbsp;&nbsp;'+
                        '                            <a class="time2">'+name+'</a>&nbsp;&nbsp;&nbsp;&nbsp;'+
                        '                            <span class="time3">发表于&nbsp;&nbsp;<i>'+
                        getLocalTime(dataArray[i].timestamp)+'</i></span>'+
                        '<span style="display: inline-block;float:right;">'+
                        '                            <span class="time4">转发数（'+dataArray[i].retweeted+'）</span>|&nbsp;'+
                        '                            <span class="time5">评论数（'+dataArray[i].comment+'）</span>|&nbsp;'+
                        '                            <span class="time6">言论敏感度（'+dataArray[i].sensitive+'）</span></span>'+
                        '                        </p>'+
                        '                    </div>';
                    oTBody.rows[i].insertCell(0);
                    oTBody.rows[i].cells[0].innerHTML = html_c;
                }
            }
        }
        Fp.onclick=function()
        {

            if(PageNo.value!="")                                       //判断每页显示是否为空
            {
                InTb.innerHTML='';                                     //每次进来都清空表格
                S2.innerHTML='';                                        //每次进来清空当前页数
                currentPage=1;                                          //首页为1
                S2.appendChild(document.createTextNode(currentPage));
                S1.innerHTML='';                                        //每次进来清空总页数
                if(dataArray.length%PageNo.value==0)                    //判断总的页数
                {
                    SumPage=parseInt(dataArray.length/PageNo.value);
                }
                else
                {
                    SumPage=parseInt(dataArray.length/PageNo.value)+1
                }
                S1.appendChild(document.createTextNode(SumPage));
                var oTBody=document.createElement('tbody');               //创建tbody
                oTBody.setAttribute('class','In-table');                   //定义class
                InTb.appendChild(oTBody);                                     //将创建的tbody添加入table
                var html_c = '';

                if(dataArray==''){
                    html_c = "<div style='width:100%;'><span style='margin-left:20px;'>用户未发布任何微博</span></div>";
                    oTBody.rows[0].cells[0].innerHTML = html_c;
                }else{

                    for(i=0;i<parseInt(PageNo.value);i++)
                    {                                                          //循环打印数组值
                        oTBody.insertRow(i);
                        var name;
                        if (dataArray[i].uname==''||dataArray[i].uname=='unknown') {
                            name=dataArray[i].uid;
                        }else {
                            name=dataArray[i].uname;
                        };
                        html_c = '<div class="twr1">'+
                            '                        <p class="master">'+
                            '                            微博内容：'+
                            '                            <span class="master1">'+
                            dataArray[i].text+
                            '                            </span>'+
                            '                        </p>'+
                            '                        <p class="time">'+
                            '                            <span class="time1">来自微博用户：</span>&nbsp;&nbsp;'+
                            '                            <a class="time2">'+name+'</a>&nbsp;&nbsp;&nbsp;&nbsp;'+
                            '                            <span class="time3">发表于&nbsp;&nbsp;<i>'+
                            getLocalTime(dataArray[i].timestamp)+'</i></span>'+
                            '<span style="display:inline-block;float:right;">'+
                            '                            <span class="time4">转发数（'+dataArray[i].retweeted+'）</span>|&nbsp;'+
                            '                            <span class="time5">评论数（'+dataArray[i].comment+'）</span>|&nbsp;'+
                            '                            <span class="time6">言论敏感度（'+dataArray[i].sensitive+'）</span></span>'+
                            '                        </p>'+
                            '                    </div>';
                        oTBody.rows[i].insertCell(0);
                        oTBody.rows[i].cells[0].innerHTML = html_c;
                    }
                }
            }
        }
        Nep.onclick=function()
        {
            if(currentPage<SumPage)                                 //判断当前页数小于总页数
            {
                InTb.innerHTML='';
                S1.innerHTML='';
                if(dataArray.length%PageNo.value==0)
                {
                    SumPage=parseInt(dataArray.length/PageNo.value);
                }
                else
                {
                    SumPage=parseInt(dataArray.length/PageNo.value)+1
                }
                S1.appendChild(document.createTextNode(SumPage));
                S2.innerHTML='';
                currentPage=currentPage+1;
                S2.appendChild(document.createTextNode(currentPage));
                var oTBody=document.createElement('tbody');
                oTBody.setAttribute('class','In-table');
                InTb.appendChild(oTBody);
                var a;                                                 //定义变量a
                a=PageNo.value*(currentPage-1);                       //a等于每页显示的行数乘以上一页数
                var c;                                                  //定义变量c
                if(dataArray.length-a>=PageNo.value)                  //判断下一页数组数据是否小于每页显示行数
                {
                    c=PageNo.value;
                }
                else
                {
                    c=dataArray.length-a;
                }
                for(i=0;i<c;i++)
                {
                    oTBody.insertRow(i);
                    var name;
                    if (dataArray[i].uname==''||dataArray[i].uname=='unknown') {
                        name=dataArray[i].uid;
                    }else {
                        name=dataArray[i].uname;
                    };
                    oTBody.rows[i].insertCell(0);
                    html_c = '<div class="twr1">'+
                        '                        <p class="master">'+
                        '                            微博内容：'+
                        '                            <span class="master1">'+
                        dataArray[i+a].text+
                        '                            </span>'+
                        '                        </p>'+
                        '                        <p class="time">'+
                        '                            <span class="time1">来自微博用户：</span>&nbsp;&nbsp;'+
                        '                            <a class="time2">'+name+'</a>&nbsp;&nbsp;&nbsp;&nbsp;'+
                        '                            <span class="time3">发表于&nbsp;&nbsp;<i>'+
                        getLocalTime(dataArray[i+a].timestamp)+'</i></span>'+
                        '<span style="float:right;display:inline-block;">'+
                        '                            <span class="time4">转发数（'+dataArray[i+a].retweeted+'）</span>|&nbsp;'+
                        '                            <span class="time5">评论数（'+dataArray[i+a].comment+'）</span>|&nbsp;'+
                        '                            <span class="time6">言论敏感度（'+dataArray[i+a].sensitive+'）</span></span>'+
                        '                        </p>'+
                        '                    </div>';
                    oTBody.rows[i].cells[0].innerHTML = html_c;
                    //数组从第i+a开始取值
                }
            }
        }

        Prp.onclick=function()
        {
            if(currentPage>1)                        //判断当前是否在第一页
            {
                InTb.innerHTML='';
                S1.innerHTML='';
                if(dataArray.length%PageNo.value==0)
                {
                    SumPage=parseInt(dataArray.length/PageNo.value);
                }
                else
                {
                    SumPage=parseInt(dataArray.length/PageNo.value)+1
                }
                S1.appendChild(document.createTextNode(SumPage));
                S2.innerHTML='';
                currentPage=currentPage-1;
                S2.appendChild(document.createTextNode(currentPage));
                var oTBody=document.createElement('tbody');
                oTBody.setAttribute('class','In-table');
                InTb.appendChild(oTBody);
                var a;
                a=PageNo.value*(currentPage-1);
                for(i=0;i<parseInt(PageNo.value);i++)
                {
                    oTBody.insertRow(i);
                    var name;
                    if (dataArray[i].uname==''||dataArray[i].uname=='unknown') {
                        name=dataArray[i].uid;
                    }else {
                        name=dataArray[i].uname;
                    };
                    oTBody.rows[i].insertCell(0);
                    html_c = '<div class="twr1">'+
                        '                        <p class="master">'+
                        '                            微博内容：'+
                        '                            <span class="master1">'+
                        dataArray[i+a].text+
                        '                            </span>'+
                        '                        </p>'+
                        '                        <p class="time">'+
                        '                            <span class="time1">来自微博用户：</span>&nbsp;&nbsp;'+
                        '                            <a class="time2">'+name+'</a>&nbsp;&nbsp;&nbsp;&nbsp;'+
                        '                            <span class="time3">发表于&nbsp;&nbsp;<i>'+
                        getLocalTime(dataArray[i+a].timestamp)+'</i></span>'+
                        '<span style="float:right;display:inline-block;">'+
                        '                            <span class="time4">转发数（'+dataArray[i+a].retweeted+'）</span>|&nbsp;'+
                        '                            <span class="time5">评论数（'+dataArray[i+a].comment+'）</span>|&nbsp;'+
                        '                            <span class="time6">言论敏感度（'+dataArray[i+a].sensitive+'）</span></span>'+
                        '                        </p>'+
                        '                    </div>';
                    oTBody.rows[i].cells[0].innerHTML = html_c;
                }
            }
        }

        Lp.onclick=function()
        {
            InTb.innerHTML='';
            S1.innerHTML='';
            if(dataArray.length%PageNo.value==0)
            {
                SumPage=parseInt(dataArray.length/PageNo.value);
            }
            else
            {
                SumPage=parseInt(dataArray.length/PageNo.value)+1
            }
            S1.appendChild(document.createTextNode(SumPage));
            S2.innerHTML='';
            currentPage=SumPage;
            S2.appendChild(document.createTextNode(currentPage));
            var oTBody=document.createElement('tbody');
            oTBody.setAttribute('class','In-table');
            InTb.appendChild(oTBody);
            var a;
            a=PageNo.value*(currentPage-1);
            var c;
            if(dataArray.length-a>=PageNo.value)
            {
                c=PageNo.value;
            }
            else
            {
                c=dataArray.length-a;
            }
            for(i=0;i<c;i++)
            {
                oTBody.insertRow(i);
                var name;
                if (dataArray[i].uname==''||dataArray[i].uname=='unknown') {
                    name=dataArray[i].uid;
                }else {
                    name=dataArray[i].uname;
                };
                oTBody.rows[i].insertCell(0);
                html_c = '<div class="twr1">'+
                    '                        <p class="master">'+
                    '                            微博内容：'+
                    '                            <span class="master1">'+
                    dataArray[i+a].text+
                    '                            </span>'+
                    '                        </p>'+
                    '                        <p class="time">'+
                    '                            <span class="time1">来自微博用户：</span>&nbsp;&nbsp;'+
                    '                            <a class="time2">'+name+'</a>&nbsp;&nbsp;&nbsp;&nbsp;'+
                    '                            <span class="time3">发表于&nbsp;&nbsp;<i>'+
                    getLocalTime(dataArray[i+a].timestamp)+'</i></span>'+
                    '<span style="display:inline-block;float:right;">'+
                    '                            <span class="time4">转发数（'+dataArray[i+a].retweeted+'）</span>|&nbsp;'+
                    '                            <span class="time5">评论数（'+dataArray[i+a].comment+'）</span>|&nbsp;'+
                    '                            <span class="time6">言论敏感度（'+dataArray[i+a].sensitive+'）</span></span>'+
                    '                        </p>'+
                    '                    </div>';
                oTBody.rows[i].cells[0].innerHTML = html_c;
            }
        }

    }
};
gaoyingxiangliweibo();