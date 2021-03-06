var node_type,uids;
function leixing(value) {
    if (value=='人物'){
        node_type=1;
    }else {
        node_type=2;
    }
};
function jiedianbianji() {
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
        $('#crt2lf').bootstrapTable('load',data);
        $('#crt2lf').bootstrapTable({
            //url: influ_url,
            data:data[0],
            search: true,//是否搜索
            pagination: true,//是否分页
            pageSize: 10,//单页记录数
            pageList: [5, 10, 20, 50],//分页步进值
            sidePagination: "client",//服务端分页
            searchAlign: "left",
            searchOnEnterKey: false,//回车搜索
            showRefresh: true,//刷新按钮
            showColumns: true,//列选择按钮
            buttonsAlign: "right",//按钮对齐方式
            locale: "zh-CN",//中文支持
            detailView: false,
            showToggle:true,
            sortName:'bci',
            sortOrder:"desc",
            columns: [
                {
                    title: "序号",//标题
                    field: "",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        return index+1;
                    }
                },
                {
                    title: "节点名称",//标题
                    field: "uname",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        if (row.uname==''||row.uname=='unknown'){
                            return row.uid;
                        }else {
                            return value;
                        }
                    },
                },
                {
                    title: "修改",//标题
                    field: "",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        return "<a class='xiugai'>修改</a>";
                    },
                },
                {
                    title: "删除",//标题
                    field: "",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        return "<a class='delt' data-toggle='modal'>删除</a>";
                    },
                },

            ],
            onClickRow: function (row, tr) {
                // console.log($(tr.context).index());
                if ($(tr.context).index()==2) {
                    //进行你的操作，如弹出新窗口
                    //图片
                    uids=row.uid;
                    if (row.photo_url==''||row.photo_url=='unknown'){
                        $("#join7 .main .topleft img").attr('src','/static/image/pan.jpg');
                    }else {
                        $("#join7 .main .topleft img").attr('src',row.photo_url);
                    };
                    //名字
                    if (row.uname==''||row.uname=='unknown'){
                        $("#join7 .sjmc").val(row.uid);
                    }else {
                        $("#join7 .sjmc").val(row.uname);
                    };
                    //粉丝
                    if (row.fansnum==''||row.fansnum=='unknown'){
                        $("#join7 .fss").val('暂无数据');
                    }else {
                        $("#join7 .fss").val(row.fansnum);
                    };
                    //影响力
                    if (row.influence==''||row.influence=='unknown'){
                        $("#join7 .fssj").val('暂无数据');
                    }else {
                        var n=row.influence;
                        $("#join7 .fssj").val(n.toFixed(2));
                    };
                    //活跃度
                    if (row.activeness==''||row.activeness=='unknown'){
                        $("#join7 .hyd").val('暂无数据');
                    }else {
                        var n=row.activeness;
                        $("#join7 .hyd").val(n.toFixed(2));
                    };
                    //敏感度
                    if (row.statusnum==''||row.statusnum=='unknown'){
                        $("#join7 .mgd").val('暂无数据');
                    }else {
                        var n=row.statusnum;
                        $("#join7 .mgd").val(n.toFixed(2));
                    };
                    //领域
                    if (row.domain==''||row.domain=='unknown'){
                        $("#join7 .ly").append('<option value="暂无数据">暂无数据</option>');
                    }else {
                        $("#join7 .ly").append('<option value="'+row.domain+'">'+row.domain+'</option>');
                    };
                    //注册地
                    if (row.location==''||row.location=='unknown'){
                        $("#join7 .zcd").val("暂无数据");
                    }else {
                        $("#join7 .zcd").val(row.location);
                    };
                    //活跃地
                    if (row.activity_geo==''||row.activity_geo=='unknown'){
                        $("#join7 .hydi").append('<option value="暂无数据">暂无数据</option>');
                    }else {
                        $("#join7 .hydi").append('<option value="'+row.domain+'">'+row.activity_geo.replace(/&/g,' ')+'</option>');
                    };
                    $('#join7').modal("show");
                    
                };
                if ($(tr.context).index()==3) {
                    $('#join1').modal("show");
                }
            },
            onClickCell:function (value,$element,row) {
                if (value=='uname'){
                    var influe,name,huoyue,mingan,tag;
                    if (row.importance=='null'){
                        influe='无';
                    }else {
                        var n=row.importance;
                        influe=n.toFixed(2);
                    };
                    if (row.uname=='null'||row.uname=='unknown'){
                        name='无';
                    }else {
                        name=row.uname;
                    };
                    var m=row.activeness;
                    var huoyue=m.toFixed(2);
                    // if (row.sensitive=='null'||row.sensitive=='unknown'){
                    //     mingan='无';
                    // }else {
                    //     var m=row.sensitive;
                    //     mingan=m.toFixed(2);
                    // };
                    if (row.user_tag=='null'||row.sensitive=='unknown'){
                        tag='无';
                    }else {
                        tag=row.user_tag;
                    };
                    $(".conright .crt3 .crt2rg").append(
                        '<div class="play">'+
                        '<div class="play1">'+
                        '<div class="p11">'+
                        '<span class="xingming" style="color: #000;font-weight: 900;font-size: 18px;margin-left: 15px">'+name+'</span><!--'+
                        '--><img style="margin-left: 15px;" src="/static/image/fensishu.png" alt=""'+
                        'title=\'粉丝数\'><!--'+
                        '--><span class="difang" style="font-size: 8px">'+row.fansnum+'</span><!--'+
                        '--><img class=\'xin\' style="margin-left: 10px;" src="/static/image/heart.png">'+
                        '</div>'+
                        '<div class="p22" style="margin-top: 5px">'+
                        '<img style="margin-left: 10px;" src="/static/image/influence.png" title="重要度">'+
                        '<span class="influence">'+influe+'</span>'+
                        '<img src="/static/image/huoyuedu.png" title="活跃度">'+
                        '<span class="huoyuedu">'+huoyue+'</span>'+
                        '<img src="/static/image/mingan.png" title="敏感度">'+
                        '<span class="mingan">'+mingan+'</span>'+
                        '</div>'+
                        '</div>'+
                        '<img class="play2" src="/static/image/pangzi.png" alt="">'+
                        '<div class="play23" style="margin-left: 15px;">'+
                        '<a href="" class="renzh1">认证类型:<span class="renzh11">'+row.topic_string+'</span></a>'+
                        '<a href="" class="renzh2">领&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;域:<span class="renzh22"></span></a>'+
                        '</div>'+
                        '<div class="play3" style="display:block;margin-top: 10px;vertical-align:bottom;padding-left: 15px">'+
                        '<a class="bus1">业务标签：</a>'+
                        '<a class="bus2">'+tag+'</a>'+
                        '</div>'+
                        '<!--<div class="play4">-->'+
                        '<!--<p class="shuoming">-->'+
                        '<!--徐玉玉接到骗子电话后被骗9900元学费，报案回来的路上心脏骤停，离世。-->'+
                        '<!--</p>-->'+
                        '<!--</div>-->'+
                        '<div class="play5" type="button" data-toggle="modal">'+
                        '<a>加入群体探索</a>'+
                        '</div>'+
                        '</div>'
                    );
                    $(".conright .crt3").css({display:'inline-block',});
                };
            }
        });
    };
    var place=new place();
    function nums(node_type,uid) {
        var url = '/construction/fuzzy_query/?node_type='+node_type+'&uid='+uid;
        place.call_request(url,territory);
    }
    $("#container .conright .crt1 .crt133").on('click',function () {
        var uid=$("#container .conright .crt1 .crt122 .uidcc").val();
        nums(node_type,uid);
    });

    var lingyu,huoyuedi;
    function lingyu(value) {
        lingyu=value;
    };
    function huoyuedi(value) {
        huoyuedi=value;
    };
    function suregai() {
        var name=$("#join7 .sjmc").val();
        var fans=$("#join7 .fss").val();
        var influ=$("#join7 .fssj").val();
        var hyd=$("#join7 .hyd").val();
        var mgd=$("#join7 .mgd").val();
        var lingyu=lingyu;
        var zhucedi=$("#join7 .zcd").val();
        var huoyuedi=huoyuedi;
        var job = {
            "uname":name,"fansnum":fans, "influence":influ, "activeness":hyd,
            "domain":lingyu,"location":zhucedi,"activeness_geo":huoyuedi,
        };
        function boba() {
            //this.ajax_method='GET'; // body...
        }
        boba.prototype= {
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
        function maton(data) {
            var data=eval(data);
            if (data==0){
                $('#fail').modal("show");
            }else {
                $('#succ').modal("show");
            };
        };
        var boba=new boba();
        function nums2() {
            var url = '/construction/update_node/?node_type='+node_type+'&uid='+uids+'&attribute_dict='+job;
            boba.call_request(url,maton);
        }
        nums2();
    };
    function delt() {
        function bmw() {
            //this.ajax_method='GET'; // body...
        }
        bmw.prototype= {
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
        function dte(data) {
            var data=eval(data);
            if (data==0){
                $('#fail2').modal("show");
            }else {
                $('#succ2').modal("show");
            };
        }
        var bmw=new bmw();
        function nums3() {
            var url = '/construction/delete_node/?node_type='+node_type+'&uid='+uids;
            bmw.call_request(url,dte);
        }
        nums3();
    }

};
jiedianbianji();