function changeClass(num) {
    const devices = document.querySelector(".devices_input").value
    switch (num) {
        case 1:
            document.querySelector(".second").classList.remove("period_btn_active")
            document.querySelector(".third").classList.remove("period_btn_active")
            document.querySelector(".first").classList.toggle("period_btn_active")
            calc(devices,7, 0.15)
            break;
        case 2:
            document.querySelector(".first").classList.remove("period_btn_active")
            document.querySelector(".third").classList.remove("period_btn_active")
            document.querySelector(".second").classList.toggle("period_btn_active")
            calc(devices,30, 2.74)
            break;
        case 3:
            document.querySelector(".first").classList.remove("period_btn_active")
            document.querySelector(".second").classList.remove("period_btn_active")
            document.querySelector(".third").classList.toggle("period_btn_active")
            calc(devices,365, 32.57)
            break;
    }
}

function calc(devices, period, percent) {
    const elem = document.querySelector(".income_amount");
    const investUSD = document.querySelector(".invest_usd");
    const investRUB = document.querySelector(".invest_rub");
    const incomePercent = document.querySelector(".income_percent");
    investUSD.textContent = `${devices * 11900}`
    investRUB.textContent = `${devices * 1076236}`
    incomePercent.textContent = `${percent} %`
    elem.textContent = `${devices * period} $`
}