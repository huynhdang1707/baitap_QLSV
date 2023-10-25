function NhanVien(_taiKhoan,_tenNhanVien,_email,_matKhau,_ngayLam,_luongCoBan,_chucVu,_gioLam){
    this.taiKhoan =_taiKhoan;
    this.ten = _tenNhanVien;
    this.email=_email;
    this.matKhau = _matKhau;
    this.ngayLam = _ngayLam;
    this.luongCB = _luongCoBan;
    this.chucVu=_chucVu;
    this.gioLam = _gioLam;
    this.tongLuong = function () {
        if (this.chucVu=="Sếp"){
          return (tongLuong =(this.luongCB *3));
        }else if(this.chucVu == "Trưởng phòng"){
          return (tongLuong = this.luongCB *2);
        }else {
          return (tongLuong = this.luongCB) ;
        }
    };
    this.xepLoai = function () {
        if (this.gioLam>=192){
          return (xepLoai = "NHÂN VIÊN XUẤT SẮC");
        }else if(this.gioLam >=176 && this.gioLam < 192){
          return (xepLoai = "NHÂN VIÊN GIỎI");
        }else if (this.gioLam >= 160 && this.gioLam <175){
          return (xepLoai = "NHÂN VIÊN KHÁ") ;
        } else {
            return(xepLoai = "NHÂN VIÊN TRUNG BÌNH");
        }
    };
}

