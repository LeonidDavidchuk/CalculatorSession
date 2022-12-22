


function gifapears(){
    var s=0;
    var kc=0;
    var v=0;
    v=Number(document.getElementById("floatingInput").value);
    var select = document.getElementById("slroad");
    var value1 = select.value;
    if(value1=="1")
    {
        kc=0.8;
    }
    else if(value1=="2")
    {
        kc=0.55;

    }
    else if(value1=="3")
    {
        kc=0.4;

    }
    else if(value1=="4")
    {
        kc=0.25;

    }

    s=Math.pow(v,2)/(254* parseFloat(kc));
    document.getElementById('bar_block').style.display='flex';
    document.getElementById('resullabel').textContent=`Тормозной путь:${Math.round(s)}м`;

}