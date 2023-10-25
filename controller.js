function renderDsnv(dsnv){
    var contentHTML="";
    for (var i = 0 ;i <dsnv.length; i++){
        var data = dsnv[i];
        var trString = `<tr>
        <td>${data.taiKhoan}</td>
        <td>${data.ten}</td>
        <td>${data.email}</td>
        <td>${data.ngayLam}</td>
        <td>${data.chucVu}</td>
        <td>${data.tongLuong()}</td>
        <td>${data.xepLoai()}</td>
        <td> 
       <button onclick="xoaNv('${data.taiKhoan}')" class="btn btn-danger">Xóa</button>
       <button onclick="suaNv('${data.taiKhoan}')" class="btn btn-warning">Sửa</button></td>
        </tr>`
        contentHTML = contentHTML +trString;
    }
    document.getElementById("tableDanhSach").innerHTML = contentHTML;
}