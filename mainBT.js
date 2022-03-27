var numberList = [];
 

document.getElementById("btnThemSo").onclick = function () {
    var number = document.getElementById("txtNhapSo").value*1;
    // thêm số vào mảng
    numberList.push(number);
    console.log(numberList);

    document.getElementById("footerCard").innerHTML=numberList;
}
//bài 1: tổng các số dương
document.getElementById("btnTongSoDuong").onclick = function () {
    var tongSD=0;
    for(i=0;i<numberList.length; i++) {
        if(numberList[i]>0){
            //tổng số dương
            tongSD=tongSD+numberList[i];
        }
    }
    console.log("tong là: ", tongSD);
    document.getElementById("footerCard").innerHTML="tổng số dương: " + tongSD;
}

//bài 2: Đếm có bao nhiêu số dương trong mảng.
document.getElementById("btnDemDuong").onclick = function () {
    var countDuong=0;
    for ( i=0; i<numberList.length; i++){
        if(numberList[i]>0){
            //đếm số dương
            countDuong++;
        }
    }
    console.log("đếm số dương: ", countDuong);
    document.getElementById("footerCard").innerHTML="đếm số dương: " + countDuong;
}
//bài 3: Tìm số nhỏ nhất trong mảng.
document.getElementById("btnSoNN").onclick = function () {
    var min = numberList[0];
    var min_ind = 0;
    for ( i=0; i<numberList.length; i++){
        if(min > numberList[i]){
            //số nhỏ nhất
            min = numberList[i];
            min_ind = i;
        }
    }
    console.log("số nhỏ nhất: ", min);
    console.log(min_ind);
    document.getElementById("footerCard").innerHTML="số nhỏ nhất: " + min;
}

// bài 4: Tìm số dương nhỏ nhất trong mảng.

document.getElementById("btnSoDNN").onclick = function () {
    var minD = numberList[0];
    var min_inDDuong = 0;
    for ( i=0; i<numberList.length; i++){
        if(minD > numberList[i] && numberList[i] >0 ){
            //số dương nhỏ nhất
            minD = numberList[i];
            min_inDDuong = i;
        }
    }
    console.log("số dương nhỏ nhất: ", minD);
    console.log(min_inDDuong);
    document.getElementById("footerCard").innerHTML="số dương nhỏ nhất: " + minD;
}

//bài 5: tìm số chãn cuối cùng trong mảng


document.getElementById("btnSoCCC").onclick = function () {
    var ketQua = timChan(numberList);
     document.getElementById("footerCard").innerHTML=ketQua;

}

//kiểm tra số chẳn
function checkChan (n){
    // số chẳn thì kiemTrachan=0
    var kiemTrachan;
    if( n % 2==0) {
      kiemTrachan=0;
    }
    return kiemTrachan;
}


function timChan (numberList){
    for (var i = numberList.length -1; i >=0; i--){
        if(checkChan(numberList[i])==0){
            return 'số chẳn cuối cùng trong mảng ' + numberList[i];
        } 
    }
    return 'không có số chẳn cuối cùng trong mảng ' + (-1);
}


//bài 7: sắp xếp mảng tăng dần

document.getElementById("btnSapXepTD").onclick = function () {
    for (i=0; i< numberList.length -1; i++){
        //vòng lắp vòng
        for(j=i+1; j< numberList.length; j++){
            if(numberList[i]> numberList[j]){
                var temp = numberList[i];
                numberList[i] = numberList[j];
                numberList[j] = temp;
            }
        }
        console.log(numberList);
    }
    document.getElementById("footerCard").innerHTML="mảng sắp xếp tăng dần: " + numberList;
}

//bài 8: Tìm số nguyên tố đầu tiên trong mảng. Nếu mảng không có số nguyên tố thì trả về – 1.


document.getElementById("btnSNTD").onclick = function () {
    var soNTDau = timSNT(numberList);
    document.getElementById("footerCard").innerHTML=soNTDau;
   
    };

//kiểm tra số nguyên tố
function kiemTraSNT (n){
    var checkSoNT = true;
    if( n <2 ) {
        checkSoNT=false;
    } else{
        for (var i =2 ; i < n-1;i++){
            if(n %i ==0){
                checkSoNT = false;
                break;
            }
        }
        return checkSoNT;
    }
    console.log(checkSoNT);
    

}
function timSNT (numberList){
    for (var i = 0; i < numberList.length -1; i++){
        if(kiemTraSNT(numberList[i])== true){
            return 'số nguyên tố đầu tiên của mảng ' + numberList[i];
        }       
    }
    return  'mảng không có số nguyên tố' + (-1);
}


//bài 10: so sánh lượng số âm và số dương ?

document.getElementById("btnSSAD").onclick = function () {
    var countDuong=0;
    var countAm= 0;
    for ( i=0; i<numberList.length; i++){
        if(numberList[i]>0){
            //đếm số dương
            countDuong++;
        }else{
            countAm++;
        }
        
    }
    console.log("SL số dương: ", countDuong);
    console.log("SL số âm: ", countAm);
    if(countDuong > countAm){
        document.getElementById("footerCard").innerHTML="số lượng số dương lớn hơn số âm";
    }else if(countDuong < countAm){
        document.getElementById("footerCard").innerHTML="số lượng số dương nhỏ hơn số âm";
    }else{
        document.getElementById("footerCard").innerHTML="số lượng số dương bằng số âm";

}
};


//bài tập 6:

function getEle (id){
    return document.getElementById(id);
}

getEle ("btnDoiVT").onclick = function () {
for (i=0; i< numberList.length -1; i++){
    
}
    var temp = numberList[a];
    numberList[a] = numberList[b]
    numberList[a] = temp;

}


function nhapViTri (){
    getEle("btnDoiVT").onclick = function (){
        var a= getEle('txtNhapvt1').value;
        var b= dgetEle('txtNhapvt2').value;
    }
}
