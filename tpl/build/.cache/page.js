/*TMODJS:{"version":2,"md5":"779ad56e1e43aeae87546f93ffaca59d"}*/
template('page',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,total=$data.total,$escape=$utils.$escape,pageCount=$data.pageCount,cur=$data.cur,$each=$utils.$each,pages=$data.pages,$value=$data.$value,$index=$data.$index,more=$data.more,$out='';if(total>0){
$out+=' <div class="page mt20 tc" data-pagecount="';
$out+=$escape(pageCount);
$out+='" data-total="';
$out+=$escape(total);
$out+='"> ';
if(cur==1 ){
$out+=' <span class="first disabled">首页</span> ';
}else{
$out+=' <span class="first">首页</span> ';
}
$out+=' ';
if(cur>1 ){
$out+=' <span class="prev">上一页</span> ';
}else{
$out+=' <span class="prev disabled">上一页</span> ';
}
$out+=' ';
$each(pages,function($value,$index){
$out+=' ';
if($value==cur ){
$out+=' <span class="current">';
$out+=$escape($value);
$out+='</span> ';
}else{
$out+=' <span class="every">';
$out+=$escape($value);
$out+='</span> ';
}
$out+=' ';
});
$out+=' ';
if(more ){
$out+=' <span class="more">...</span> ';
}
$out+=' ';
if(cur==pageCount ){
$out+=' <span class="next disabled">下一页</span> <span class="last disabled">尾页</span> ';
}else{
$out+=' <span class="next">下一页</span> <span class="last">尾页</span> ';
}
$out+=' ';
if(pageCount>1){
$out+=' <div class="jump"> <input type="text" id="specialPage"/><span class="goPage">跳过去</span> </div> ';
}
$out+=' <span class="total">';
$out+=$escape(pageCount);
$out+='页/';
$out+=$escape(total);
$out+='条</span> </div> ';
}
$out+=' ';
return new String($out);
});