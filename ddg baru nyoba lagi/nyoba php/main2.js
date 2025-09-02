var nama
function sapaPengguna( callback) {
    nama='habaib'
    callback(nama);
}

function setelahSapa(param) {
    console.log(param);
}

function manggilorang(param){
    alert(param)
}
sapaPengguna(setelahSapa)