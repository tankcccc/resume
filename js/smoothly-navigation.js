!function(){
        let liTags=document.getElementsByClassName('menuTigger')
        for(let i=0;i<liTags.length;i++){
        liTags[i].onmouseenter=function(x){
            let li = x.currentTarget
            let brother=li.getElementsByTagName('ul')[0]
            brother.classList.add('active')

        }
        liTags[i].onmouseleave=function(x){
            let li = x.currentTarget
            let brother=li.getElementsByTagName('ul')[0]
            brother.classList.remove('active')
        }
        }
        let aTags=document.querySelectorAll('nav>ul>li>a')
        for(let i=0;i<aTags.length;i++){
        aTags[i].onclick=function(x){
            x.preventDefault()
            let a = x.currentTarget
            let href = a.getAttribute('href') //'#siteAbout'
            let element = document.querySelector(href)
            let top =element.offsetTop
            // window.scrollTo(0, top-80)

            let n=50 //一共多少次
            let t=500/n
            let targetTop=top-80
            let currentTop=window.scrollY
            let s = (targetTop-currentTop)/n
            let i=0
            let id=setInterval(()=>{
                if(i===n){
                clearInterval(id)
                return
                }
                i=i+1
                window.scrollTo(0,currentTop+ s*i)
            },t)
        }
    }
}.call()

