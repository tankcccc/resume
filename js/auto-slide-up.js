!function(){
    window.onscroll=function(x){
        var topnavbar = document.getElementById('topNavBar')
        if (scrollY>0) {
          topnavbar.classList.add('sticky')
        } else {
          topnavbar.classList.remove('sticky')
        }
        //高亮
        let specialTags=document.querySelectorAll('[data-x]')
        let minIndex=0
        for(let i=1;i<specialTags.length;i++){
          if (Math.abs(specialTags[i].offsetTop-window.scrollY)<Math.abs(specialTags[minIndex].offsetTop-window.scrollY)){
            minIndex=i
          }
        }
        // 亮之外的可以删除
        for(let i=0;i<specialTags.length;i++){
          specialTags[i].classList.remove('active')
        }
        specialTags[minIndex].classList.add('active')
        let id = specialTags[minIndex].id
        let a = document.querySelector('a[href="#'+id+'"]')
        let li = a.parentNode
        let brothersAndMe=li.parentNode.children
        for(let i=0;i<brothersAndMe.length;i++){
          brothersAndMe[i].classList.remove('active')
        }
        li.classList.add('active')
      }
}.call()


