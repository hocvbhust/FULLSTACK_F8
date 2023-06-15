var courses = [
    {
        id:1,
        name:'Javascript',
        coint:100
    },
    {
        id:1,
        name:'HTML/CSS',
        coint:200
    },
    {
        id:1,
        name:'Python',
        coint:300
    },
    {
        id:1,
        name:'Reactive',
        coint:400
    }
]



var btn = document.querySelector("#btn1")
function event1(){
    console.log('event 1')
}
btn.addEventListener('click', event1)

//Remove event 1 sau 3 giây
setTimeout(function (){
    btn.removeEventListener('click',event1)
},3000)
