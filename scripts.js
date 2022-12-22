


function gifapears(){
    var s=0;
    var kc=0;
    var v=0;
    v=Number(document.getElementById("enter").textContent);
    var select = document.getElementById("slroad");
    var value = select.value;
    if(value=="Сухой асфальт")
    {
        kc=0.8;
    }
    else if(value=="Мокрая дорога")
    {
        kc=0.55;

    }
    else if(value=="Снег")
    {
        kc=0.4;

    }
    else if(value=="Гололёд")
    {
        kc=0.25;

    }

    s=Math.pow(v,2)/(254* parseFloat(kc));
    document.getElementById('bar_block').style.display='flex';
    document.getElementById('resullabel').textContent=`Тормозной путь:${s}м`;

}