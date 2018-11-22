var slideIn = true

function getId (_id) {
    return document.getElementById(_id)
}
function init () {
    let height = Math.floor(document.body.clientHeight / 8)
    let li = getId('liWrapper').children
    for (let i = 0; i < li.length; i++) {
        li[i].style.height = height + 'px'
        li[i].style.lineHeight = height + 'px'
    }
}
init()
getId('nav').addEventListener('click', function (e) {
    if (slideIn) {
        getId('drawer').classList.remove('slide-out')
        getId('drawer').classList.add('slide-in')
        slideIn = false
    }
}, true)

getId('close').addEventListener('click', function () {
    getId('drawer').classList.remove('slide-in')
    getId('drawer').classList.add('slide-out')
    setTimeout(function () {
        getId('drawer').classList.remove('slide-out')
        slideIn = true
    }, 450)
}, false)

getId('check').addEventListener('click', function () {
    getId('luckyContainer').style.display = 'block'
}, false)

getId('luckyClose').addEventListener('click', function () {
    getId('luckyContainer').style.display = 'none'
}, false)

getId('liWrapper').addEventListener('click', function (e) {
    var e = window.event || e
    var bol = ''
    var text = ''
    if (e.target.tagName.toLowerCase() === 'a') {
        if (e.target.innerText === '特等奖1名') {
            text = '特等奖'
            bol = setStorage(getId('awards').innerText)
        } else if (e.target.innerText === '一等奖2名') {
            text = '一等奖'
            bol = setStorage(getId('awards').innerText)
        } else if (e.target.innerText === '二等奖3名') {
            text = '二等奖'
            bol = setStorage(getId('awards').innerText)
        } else if (e.target.innerText === '三等奖4名') {
            text = '三等奖'
            bol = setStorage(getId('awards').innerText)
        } else if (e.target.innerText === '随机1名') {
            text = '随机'
            bol = setStorage(getId('awards').innerText)
        }
    }
    if (bol) {
        return true
    }
    getId('awards').innerText = text
    getId('drawer').classList.remove('slide-in')
    getId('drawer').classList.add('slide-out')
    setTimeout(function () {
        getId('drawer').classList.remove('slide-out')
        slideIn = true
    }, 450)

}, false)

// 本地存储
function setStorage (text) {
    let lotteryArr = []
    if (localStorage.getItem('lotteryType')) {
        let lotteryArr = JSON.parse(localStorage.getItem('lotteryType'))
        if (lotteryArr.indexOf(text) < 0) {
            lotteryArr.push(text)
            localStorage.setItem('lotteryType', JSON.stringify(lotteryArr))
        } else {
            alert('该奖项已经抽取完毕，请选择下一奖项！')
            return true
        }
    } else {
        lotteryArr.push(text)
        localStorage.setItem('lotteryType', JSON.stringify(lotteryArr))
    }
}
