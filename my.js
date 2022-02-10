$(document).ready(function(){
    $(window).scroll(function(event){
        let s=$(this).scrollTop()
        let w=$(this).outerWidth()
        let h=$('.content').outerHeidht()
        let h_b=$('paralaks').outerHeidht()
        let p=s/h*100
        let p_b=s/h_b*100
        let o=1-1/100*p_b

        let z_1=1+(w/10000*p_b)
        $('.paralax_fog').css('transform','scale('+z_1+')')
    })
})