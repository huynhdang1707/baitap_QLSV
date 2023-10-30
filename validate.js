function inputTrong(input, thongbao) {
  console.log(input, thongbao);

  if (input === "") {
    console.log("hello");
    document.getElementById(thongbao).innerText = "Không được bỏ trống";
    return false;
  } else {
    document.getElementById(thongbao).innerText = " ";
    return true;
  }
}
function kiemTraDoDai(value, idErr, min, max) {
  var length = value.length;
  if (length > 0) {
    if (min <= length && length <= max) {
      document.getElementById(idErr).innerText = "";
      return true;
    } else {
      document.getElementById(
        idErr
      ).innerText = `Độ dài phải từ ${min} đến ${max} kí tự`;
      return false;
    }
  }
}
function kiemtraTaiKhoanDaTonTai(value, idErr, dssv) {
  const taiKhoanTonTai = Boolean(dssv.find((nv) => nv.tk === value));
  if (taiKhoanTonTai) {
    document.getElementById(idErr).innerText = `Tài khoản đã tồn tại!`;
    return false;
  }
  document.getElementById(idErr).innerText = "";
  return true;
}
