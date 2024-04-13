const a=document.querySelectorAll("button");
const b=document.querySelector(".input");
const clr=document.querySelector("#clr");
a.forEach((l)=>{
    let c=l.getAttribute("id");
    l.onclick=()=>{   
        if(c==='='){
         b.value=eval(b.value);
        }else{
            b.value+=c;
        }
    }
    clr.onclick=()=>{
        b.value='';
    }
})

