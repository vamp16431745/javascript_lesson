"use strict";
//建立變數
let price;
let quantity;
let total;
//給變數值
price = 5;
quantity = 14;
//計算
total = price * quantity;
let cost_div = document.getElementById('cost'); //指定變數類型
if (cost_div != null) {
    cost_div.innerText = "$" + total;
}
