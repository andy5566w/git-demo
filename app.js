// console.log('11111')
// console.log('22222')
// console.log('33333')
function typeOF(target){
    return Object.prototype.toString.call(target).slice(8, -1).toLowerCase()
}

// console.log(typeOF([]))
// console.log(typeOF({}))
// console.log(typeOF(new Date()))
// console.log(typeOF(null))

function Animal(){
    this.color = ['green', 'grey', 'white']
}

function Dog(){
    this.__proto__.constructor(this)
}
Dog.prototype = new Animal()
Dog.prototype.constructor = Animal

const d = new Dog()
console.log(d.color);

const btn = document.querySelector('.btn')
btn.addEventListener('click',debounce(()=>{
    console.log('click!!')
}))
function debounce(fn) {
    let timer

    return function (){
        const context = this
        const argus = arguments
        clearTimeout(timer)
        timer=   setTimeout(()=>{
            fn.apply(context, argus)
        },1000)
    }
}