
$(document).ready(function () {
    const $logInCompo = $('#logInCompo');
    const $settingCompo = $('#settingCompo');
    const $logInBtn = $('#logInBtn');
    const $logOutBtn = $('#logOutBtn');

    const user = localStorage.getItem("user");
    if (user){
        $logInCompo.hide();
        $settingCompo.show();
    } else {
        $logInCompo.show();
        $settingCompo.hide();
    }

    $logInBtn.on('click', (e) => {
        localStorage.setItem("user", 1);
        $logInCompo.hide();
        $settingCompo.show();
    })

    $logOutBtn.on('click', (e) => {
        localStorage.removeItem("user");
        $logInCompo.show();
        $settingCompo.hide();
    })
})