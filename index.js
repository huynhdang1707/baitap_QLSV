var dsnv = [];
var viTriSua = -1;
var dataJson = localStorage.getItem("DSNV_LOCAL");
if (dataJson != null) {
  let result = JSON.parse(dataJson);
  // var newDSSV = JSON.parse(dataJson);

  dsnv = result.map(function (item) {
    return new NhanVien(
      item.taiKhoan,
      item.ten,
      item.email,
      item.matKhau,
      item.ngayLam,
      item.luongCB,
      item.chucVu,
      item.gioLam
    );
  });
  renderDsnv(dsnv);
}
function themNv() {
  var _taiKhoan = document.getElementById("tknv").value;
  var _tenNhanVien = document.getElementById("name").value;
  var _email = document.getElementById("email").value;
  var _matKhau = document.getElementById("password").value;
  var _ngayLam = document.getElementById("datepicker").value;
  var _luongCoBan = document.getElementById("luongCB").value * 1;
  var _chucVu = document.getElementById("chucvu").value;
  var _gioLam = document.getElementById("gioLam").value * 1;
  var nv = new NhanVien(
    _taiKhoan,
    _tenNhanVien,
    _email,
    _matKhau,
    _ngayLam,
    _luongCoBan,
    _chucVu,
    _gioLam
  );
  // tạo object
  // var nv = {
  //     taiKhoan: _taiKhoan,
  //     ten: _tenNhanVien,
  //     email: _email,
  //     matKhau:_matKhau,
  //     ngayLam: _ngayLam,
  //     luongCB: _luongCoBan,
  //     chucVu: _chucVu,
  //     gioLam: _gioLam,
  //     tongLuong: function () {
  //               if (this.chucVu=="Sếp"){
  //                 return (tongLuong =this.luongCB *3);
  //               }else if(this.chucVu == "Trưởng phòng"){
  //                 return (tongLuong = this.luongCB *2);
  //               }else {
  //                 return (tongLuong = this.luongCB) ;
  //               }

  //     }
  var isTaiKhoanValid =
    inputTrong(nv.taiKhoan, "tbTKNV") &&
    kiemTraDoDai(nv.taiKhoan, "tbTKNV", 4, 6) &&
    kiemtraTaiKhoanDaTonTai(nv.taiKhoan, "tbTKNV", dsnv);

  dsnv.push(nv);
  var dataJson = JSON.stringify(dsnv);
  localStorage.setItem("DSNV_LOCAL", dataJson);
  renderDsnv(dsnv);
}
// var contentHTML="";
// for (var i = 0 ;i <dsnv.length; i++){
//     var data = dsnv[i];
//     var trString = `<tr>
//     <td>${data.taiKhoan}</td>
//     <td>${data.ten}</td>
//     <td>${data.email}</td>
//     <td>${data.ngayLam}</td>
//     <td>${data.chucVu}</td>
//     <td>${data.tongLuong()}</td>
//     </tr>`
//     contentHTML = contentHTML +trString;
// }
// document.getElementById("tableDanhSach").innerHTML = contentHTML;

// validate

function xoaNv(id) {
  var viTri = dsnv.findIndex(function (item) {
    return item.taiKhoan == id;
    // console.log("item trong findINDEX: ", item);
  });
  dsnv.splice(viTri, 1);
  var dataJson = JSON.stringify(dsnv);
  localStorage.setItem("DSNV_LOCAL", dataJson);
  renderDsnv(dsnv);
}
function suaNv(id) {
  var viTri = dsnv.findIndex(function (item) {
    return item.taiKhoan == id;
  });
  var nv = dsnv[viTri];
  viTriSua = viTri;
  document.getElementById("tknv").value = nv.taiKhoan;
  document.getElementById("name").value = nv.ten;
  document.getElementById("email").value = nv.email;
  document.getElementById("password").value = nv.matKhau;
  document.getElementById("datepicker").value = nv.ngayLam;
  document.getElementById("luongCB").value = nv.luongCB;
  document.getElementById("chucvu").value = nv.chucVu;
  document.getElementById("gioLam").value = nv.gioLam;
}
function capNhatNV() {
  var _taiKhoan = document.getElementById("tknv").value;
  var _tenNhanVien = document.getElementById("name").value;
  var _email = document.getElementById("email").value;
  var _matKhau = document.getElementById("password").value;
  var _ngayLam = document.getElementById("datepicker").value;
  var _luongCoBan = document.getElementById("luongCB").value * 1;
  var _chucVu = document.getElementById("chucvu").value;
  var _gioLam = document.getElementById("gioLam").value * 1;

  if (viTriSua !== -1) {
    var nhanVien1 = new NhanVien(
      _taiKhoan,
      _tenNhanVien,
      _email,
      _matKhau,
      _ngayLam,
      _luongCoBan,
      _chucVu,
      _gioLam
    );

    dsnv[viTriSua] = nhanVien1;

    var dataJson = JSON.stringify(dsnv);
    localStorage.setItem("DSNV_LOCAL", dataJson);
    document.getElementById("btnDong").click();

    renderDsnv(dsnv);
  }
}
