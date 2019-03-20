let list = document.getElementById('list')
let ulam = document.getElementById('ulam')
let ulamin = document.getElementById('ulamin')
let index = document.getElementById('index')
let indexin = document.getElementById('indexin')
let close = document.getElementById('close')
let closein = document.getElementById('closein')

ulam.addEventListener('click', () => {

    let number = Number(ulamin.value)

    if (!isNaN(number)) {

        while (number != 1) {

            list.innerHTML += `<li class="list-group-item">${number}</li>`

            if (number > 1) {

                if (number % 2 == 0) {
                    number = number / 2
                } else {
                    number = (number * 3) + 1
                }

            }
        }
    }
})

index.addEventListener('click', () => {

    let number = Number(indexin.value)
    let n1 = 0
    let n2 = 1
    let sum = 0
    let i = 1

    let indexnum = 0;

    while (n2 < number) {
        sum = n1 + n2
        n1 = n2
        n2 = sum

        list.innerHTML += `<li class="list-group-item">[${i}] ${n2}</li>`
        i++
    }

})

close.addEventListener('click', () => {
    
    let number = Number(closein.value)
    let n1 = 0
    let n2 = 1
    let sum = 0
    let i = 1

    let indexnum = 0;

    while (n2 < (number-1)) {
        sum = n1 + n2
        n1 = n2

        n2 = sum

        list.innerHTML += `<li class="list-group-item">[${i}] ${n2}</li>`

        i++


    }
})