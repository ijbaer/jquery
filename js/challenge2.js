$("#useBilling").click(function(){
    var home = $("#home");
    var billing = $("#billing");
    if(this.checked) {
        console.log("checked");
        home.val(billing.val());
        home.prop('disabled', true);
    }
    else {
        console.log("unchecked")
        home.val('');
        home.prop('disabled', false)
    }
})
