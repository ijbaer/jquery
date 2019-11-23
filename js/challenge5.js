console.log("here");
var imgs = $("img");
var msg = "Hover over an image below."

imgs.each(function(){
    $(this).mouseover(function(){
        console.log('hovering')
        $("#image").css('background-image', "url('"+this.src+"')");
        $("#image").text(this.alt);
    })

    $(this).focus(function(){
        $("#image").css('background-image', "url('"+this.src+"')");
        $("#image").text(this.alt);
    })

    $(this).mouseleave(function(){
        console.log('leaving')
        $("#image").css('background-image', "url('')");
        $("#image").text(msg);
    })

    $(this).blur(function(){
        $("#image").css('background-image', "url('')");
        $("#image").text(msg);
    })
})