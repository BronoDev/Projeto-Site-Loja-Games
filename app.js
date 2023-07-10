function login() {
    var user = document.getElementById('usuario')
    var password = document.getElementById('senha')

    if (user.value.length == 0 || password.value.length == 0) {
        window.alert(`[ERRO] Verifique os dados e tente novamente!`)
    }
}