/**
 * Created by rubyisapm on 15/12/4.
 */
function Page(ops){
  this.ops=ops;
}

Page.prototype={
  constructor:Page,
  generateArr: function (begin, end) {
    var arr = [];
    for (var i = begin; i < end + 1; i++) {
      arr.push(i);
    }
    return arr;
  },
  init: function () {
    /*
     * {
     *   total:100 总记录数
     *   pageConfig.pageSize:15 页码大小
     *   cur:1 当前页数
     * }*/
    var pages = [],
        more = false,
        visibleNum = 7,
        after = 3,
        data=this.ops,
        pageCount = Math.ceil(data.total / data.pageSize);
    if (visibleNum > pageCount || visibleNum == pageCount) {
      pages = this.generateArr(1, pageCount);
      more = false;
    } else if (pageCount - data.cur < after || pageCount - data.cur == after) {
      pages = this.generateArr(pageCount - visibleNum + 1, pageCount);
      more = false;
    } else if (data.cur + after > visibleNum || data.cur + after == visibleNum) {
      pages = this.generateArr(data.cur + after - visibleNum + 1, data.cur + after);
      more = true;
    } else {
      pages = this.generateArr(1, visibleNum);
      more = true;
    }

    return template('page',{
      pageCount: pageCount,
      total: data.total,
      cur: data.cur,
      pages: pages,
      more: more});
  }
}


