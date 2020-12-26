
     function clickFuction(){
        let header = document.getElementById("header");
        // header.setAttribute("style", "overflow:visible");
        let headerHeight = header.clientHeight;
        let isClose = header.clientHeight === headerHeight;
        if( isClose){
            header.style.height = "auto";
        }else{
            header.style.height = null;
        }

     }       
     let header = document.getElementById("header");
    let a_link = document.querySelectorAll('#header .header__nav .header__nav-list .header__nav-item a[href*="#"]');
    for(let i of a_link){
        i.onclick = function(){
            header.style.height = "46px";
        }
    }


    console.log(a_link);
    
     function closeFunction(){
        let header = document.getElementById("header");
        header.setAttribute("style", "overflow:hiden");
     }
