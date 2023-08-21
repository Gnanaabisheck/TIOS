window.onload=function(){
    let quote=['Doing what you like is freedom. Liking what you do is happiness ',
'Be happy with what you have. Be excited about what you want.',
'Life is a journey, and if you fall in love with the journey, you will be in love forever.',
'We forge the chains we wear in life.',
'There is no such thing as a problem without a gift for you in its hands. You seek problems because you need their gifts.',
'Tension is who you think you should be, relaxation is who you are.',
'You never regret being kind.',
'They who can give up essential liberty to obtain a little temporary safety, deserve neither liberty nor safety.',
'In the midst of movement and chaos, keep stillness inside of you.',
'He who lives in harmony with himself lives in harmony with the universe.',
'If you want others to be happy, practice compassion. If you want to be happy, practice compassion.',
'Happiness is not having what you want. It is appreciating what you have.',
'There is no stress in the world, only people thinking stressful thoughts and then acting on them.',
'There is only one thing more painful than learning from experience and that is not learning from experience.',
'Once you do something you love, you never have to work again.',
'Happiness is where we find it, but very rarely where we seek it.']
// condition
let d
let display= document.getElementById("display")
let button=document.getElementById("button")
button.addEventListener('click',gene)
function gene(){
    d = random()
    display.innerHTML= random()
}

// for generating random quotes

function random(){
    let q=Math.floor(Math.random()*quote.length)
    return quote[q]
}
console.log(random())
}