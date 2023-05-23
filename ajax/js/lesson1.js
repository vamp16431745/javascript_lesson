let sarea_array = []
let sareaElement = document.getElementById('sarea');
let areaNameElement = document.getElementById('areaName')
let tbodyElement = document.getElementById('tbody')
let dialogElement = document.getElementById('dialog')
let mapElement = document.getElementById('map')
let exitElement = document.getElementById('exit')
let inlineMapElement = document.querySelector('#inlineMap')
let youbikedata;// 把區域改成全域變數

//下拉式選單被選取
sareaElement.addEventListener('change', (event) => {
    let selectedIndex = sareaElement.selectedIndex;
    selectedValue = sareaElement.options[selectedIndex].value
    if (sarea_array.includes(selectedValue)) {
        //console.log(`行政區:${selectedValue}`)
        areaNameElement.innerText = selectedValue
        let trHTML = ""  //行政區內的html資訊
        youbikedata.forEach(element => {


            if (element.sarea == selectedValue) {
                let status
                if (element.act == "1") {
                    status = "營業中"
                }
                else {
                    status = "維護中"
                }
                trHTML += "<tr>"
                trHTML += "<td>" + element.sna.slice(11) + "</td>"
                trHTML += "<td>" + element.ar + "</td>"
                trHTML += "<td>" + element.tot + "</td>"
                trHTML += "<td>" + element.sbi + "</td>"
                trHTML += "<td>" + element.bemp + "</td>"
                trHTML += "<td>" + element.updateTime + "</td>"
                trHTML += "<td>" + status + "</td>"
                trHTML += `<td><a class="map" href='#' data-sno=${element.sno}>更多</a></td>`
                trHTML += "</tr>"
            }


        });

        tbodyElement.innerHTML = trHTML

        //取得所有的a元素
        //a元素加入click事件
        //取出a元素的data-sno的屬性值
        //跳出<div class="map">對話欄

        let aElements = document.querySelectorAll('.map')
        aElements.forEach((element) => {
            element.addEventListener('click', (event => {
                event.preventDefault()
                let aElement = event.currentTarget
                console.log(aElement.dataset.sno)
                mapElement.className = 'overlay'
                //在主控台顯示站點的經緯度
                youbikedata.forEach(site => {
                    //open('https://www.google.com/maps/place/'+ site.lat +','+site.lng)
                        //var url = 'https://www.google.com/maps/place/'+ site.lat +','+site.lng + "&output=embed";
                        inlineMapElement.src = "https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik"
                        //window.location.replace(url);

                })
            }))


        })

    }
});

//xmlhttpRequest的listener
function reqListener() {



    youbikedata = JSON.parse(this.responseText)
    for (const youbike of youbikedata) {
        sarea_array.push(youbike.sarea)
    }
    sarea_array = [...new Set(sarea_array)]
    let optionElement = document.createElement('option')
    optionElement.textContent = '請選擇行政區'
    sareaElement.appendChild(optionElement)
    for (const area of sarea_array) {
        let optionElement = document.createElement('option')
        optionElement.textContent = area
        optionElement.setAttribute('value', area)
        sareaElement.appendChild(optionElement)
    }
}

//監聽下載完成的http status
function reqReadyChange() {
    if (this.readyState == 4) {
        if (this.status != 200) {
            dialogElement.show()
        }
    }
}

//window被載入的事件
const windowload = (event) => {
    console.log('網頁已經全部被載入');
    const req = new XMLHttpRequest();
    req.addEventListener("load", reqListener);
    req.addEventListener("readystatechange", reqReadyChange)  //try catch  js的寫法
    //eq.open("GET", "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json");
    /*模擬錯誤的網頁*/
    //req.open("GET", "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v1/youbike_immediate.json");

    req.open("GET", "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json");
    req.send();
}

window.addEventListener('load', windowload)

//map內的離開click事件
exitElement.addEventListener('click', event => {
    mapElement.className = 'close'

})
