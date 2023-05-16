function reqListener() {
    //把.json檔轉成javascript物件
    let youbikedata =JSON.parse(this.responseText); 
    
    //把每一筆資料的站點用for each 抓出來
    for(const youbike of youbikedata)
    {
        console.log(youbike.sna)

    }
}

const windowload = (event) => {
    console.log('網頁已經全部被載入');    
    const req = new XMLHttpRequest();
    req.addEventListener("load", reqListener);
    req.open("GET", "	https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json");
    req.send();
}
window.addEventListener('load', windowload)