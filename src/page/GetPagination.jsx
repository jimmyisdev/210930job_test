import {useEffect, useState} from 'react'

export default function GetPagination() {
  const [ offset, setOffset] = useState(0)
  const [ limit, setLimit] = useState(5)
  const [ total, setTotal] = useState(33)
  const [ values, setValues ] = useState({ currentPage: 0, totalPage: 0, renderPages: [] })

  function getPagination(offset, limit, total){
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
    if (calcurrentPageValue <= 2 ){
      calRenderPages = [1, 2, 3, 4, 5];
    }else if (Math.abs(calcurrentPageValue - calTotalPage) < 2) {
      for(let i = calTotalPage - limit + 1  ; i <= calTotalPage; i++){
        calRenderPages.push(i)
      }
    } else {
      calRenderPages = [n - 2, n - 1, n, n + 1, n + 2];
    }
    setValues({
      currentPage: calcurrentPageValue,
      totalPage: calTotalPage,
      renderPages: calRenderPages,
    });
    return;
  }




    useEffect(() => {
      console.log(values);
    }, [values]);

    return (
      <section>
        <div className="box_title">
          <h1>Pagination</h1>
          <p>
            取得分頁資訊的 function,根據輸入的offset
            (資料開始位置)、limit(資料擷取長度)、total (總資料筆數),取得
            currentPage (當下頁籤)、totalPage (頁面總數量)、renderPages
            (顯示的頁籤範圍一次顯示五個頁籤)。
          </p>
        </div>
        <div className="box_content">
          <label htmlFor="offset">Offset</label>
          <input
            type="number"
            name="offset"
            onChange={(e) => setOffset(Math.abs(e.target.value))}
            value={offset}
          />
          <label htmlFor="limit">limit</label>
          <input
            type="number"
            name="limit"
            onChange={(e) => setLimit(Math.abs(e.target.value))}
            value={limit}
          />
          <label htmlFor="total">total</label>
          <input
            type="number"
            name="total"
            onChange={(e) => setTotal(Math.abs(e.target.value))}
            value={total}
          />
          <button onClick={() => getPagination(offset, limit, total)}>
            Confirm
          </button>
        </div>

      </section>
    );
  }




// 實作 getPagination
// 參考右圖範例實作可以取得分頁資訊的 function,根據輸入的
// offset (資料開始位置)、limit(資料擷取長度)、total (總資料筆
// 數),取得 currentPage (當下頁籤)、totalPage (頁面總數量)、
// renderPages (顯示的頁籤範圍一次顯示五個頁籤)。
// const { currentPage, totalPage, renderPages } = getPagination(offset, limit, total)

// getPagination(0, 5, 33) // { currentPage: 1, totalPage: 7, renderPages: [1,2,3,4,5] }
// getPagination(5, 5, 33) // { currentPage: 2, totalPage: 7, renderPages: [1,2,3,4,5] }
// getPagination(10, 5, 33) // { currentPage: 3, totalPage: 7, renderPages: [1,2,3,4,5] }
// getPagination(15, 5, 33) // { currentPage: 4, totalPage: 7, renderPages: [2,3,4,5,6] }
// getPagination(20, 5, 33) // { currentPage: 5, totalPage: 7, renderPages: [3,4,5,6,7] }
// getPagination(25, 5, 33) // { currentPage: 6, totalPage: 7, renderPages: [3,4,5,6,7] }
// getPagination(30, 5, 33) // { currentPage: 7, totalPage: 7, renderPages: [3,4,5,6,7] }
