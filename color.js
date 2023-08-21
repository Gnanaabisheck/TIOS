window.onload=function(){
    let color=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
    let body=document.getElementById("body")
    let display=document.getElementById("display")
    let button=document.getElementById("button")
    button.addEventListener('click',col)
    function col(){
        let c='#'
        for(let i=1;i<=6;i++)
        {
            c = c + r()
        }   
        display.innerHTML=c
        body.style.backgroundColor = c
        
    
    }




    // for random color codes
    function r(){
        let a=Math.floor(Math.random()*color.length)
        return color[a]
    }
    
}