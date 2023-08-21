window.onload = function(){
    let a=['A','B','X','G','b','c','z','o',1,5,8,0,7,'@','$','#','@','$','#','@','$','#']
    let display=document.getElementById("display")
    let p
    let button=document.getElementById("button")
    button.addEventListener('click',dis)
// for eight character password
function dis(){
    p=''
    for(let i=1; i<=9;i++)
    {
      p = p + code()
    }
    display.innerHTML=p
    console.log(p)
}
// function for random password generator
function code(){
    let pass=Math.floor(Math.random()*a.length)
    let password=a[pass]
    return password
}
}