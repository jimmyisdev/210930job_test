function getPagination(offset, limit, total) {
  //all required answers
  let calcurrentPageValue, calTotalPage, calRenderPages;

  //calculate totalPage
  calTotalPage = Math.ceil(total / limit);

  //calculate currentPage
  let offsetStart = offset + 1;
  if (offsetStart < limit) {
    calcurrentPageValue = 1;
  } else {
    calcurrentPageValue = Math.ceil(offsetStart / limit);
  }

  //calculate renderPages
  calRenderPages = [];
  let n = calcurrentPageValue;
  if (calcurrentPageValue <= 2) {
    calRenderPages = [1, 2, 3, 4, 5];
  } else if (Math.abs(calcurrentPageValue - calTotalPage) < 2) {
    for (let i = calTotalPage - limit + 1; i <= calTotalPage; i++) {
      calRenderPages.push(i);
    }
  } else {
    calRenderPages = [n - 2, n - 1, n, n + 1, n + 2];
  }

  return;
}
