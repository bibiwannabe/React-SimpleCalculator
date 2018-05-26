var str1 = '';
var cal = '';
var str2 = '';

function numberClick(object){
    if(cal=='') {
        var number = object.id;
        str1 += number;
        let result = document.getElementById('result');
        result.innerHTML = '<p>'+str1+'</p>';
    }
    else number2Click(object);
}
function calClick(object) {
    if(cal==''&&str1!=''){
        cal += object.id;
        let result = document.getElementById('result');
        result.innerHTML = '<p>'+cal+'</p>';}
    else {
        alert("不允许输入两个符号,不允许输入负数");
    }
}
function number2Click(object){
    var number = object.id;
    str2 += number;
    let result = document.getElementById('result');
    result.innerHTML = '<p>'+str2+'</p>';
}
function clean() {
    str2 = str2.slice(0,0);
    str1 = str1.slice(0,0);
    cal = cal.slice(0,0);
    let result = document.getElementById('result');
    result.innerHTML='<p>0</p>';
}

function del() {
    let result = document.getElementById('result');
    if(str2!=''&&result.innerText!=''){
        str2 = str2.slice(0,str2.length-1);
        alert(str2);
        result.innerHTML='<p>'+str2+'</p>';
    }
    if(result.innerText!=''&&cal!=''){
        cal = '';
        result.innerHTML='<p>'+cal+'</p>';
    }
    if(str1!=''){
        str1 = str1.slice(0,str1.length-1);
        result.innerHTML='<p>'+str1+'</p>';
    }
}

function getResult() {
    let result = document.getElementById('result');
    var fin;
    if(cal==''&&str1!=''){
        result.innerHTML=str1;
    }
    if(cal!=''&&str2!=''){
        switch (cal){
            case "plus":
                fin= parseInt(str1)+ parseInt(str2);
                break;
            case "minus":
                fin= (parseInt(str1)-parseInt(str2)).toString();
                break;
            case "divide":
                if(str2=='0'){
                    alert("除数不能为零");
                }else
                    fin= (parseInt(str1)/parseInt(str2)).toString();
                break;
            case "multiply":
                fin= (parseInt(str1)*parseInt(str2)).toString();
                break;
        }
        result.innerHTML = '<p>'+fin+'</p>';
    }
    else
        result.innerHTML = '<p>'+str1+'</p>'
}