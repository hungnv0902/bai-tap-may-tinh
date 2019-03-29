function Output(input){
    document.getElementById('out').value += input;

};

function tinhtoan(){
    var tt = document.getElementById('out').value;
    var resul = eval(tt);
    document.getElementById('out').value = resul;

};

function xoa(){

    document.getElementById('out').value = null;
}