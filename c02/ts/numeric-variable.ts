//建立變數
let price:number;
let quantity:number;
let total:number;

//給變數值
price =5;
quantity=14;

//計算
total=price*quantity;

let cost_div =document.getElementById('cost') as HTMLElement;  //指定變數類型
if(cost_div!= null)
{
cost_div.innerText="$"+total;
}