function chuyedoi() {
    let dauvao = document.getElementById("dauvao").value;
    let money1 = document.getElementById('money1').value;
    let money2 = document.getElementById('money2').value;
  let tyle= money1/money2;
  let ketqua =dauvao*tyle;
  document.getElementById("ketqua").innerText= ketqua;
}