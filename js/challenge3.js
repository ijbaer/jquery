$('input[type="submit"]').click(function() {
    if($('input[name="fruit"]').is(":checked")) {
        console.log('fruit checked');
        return true;
    }
    else if($(this).is(":not(:checked)")) {
        console.log('fruit unchecked');
        alert("You must pick a fruit!");
        return false;
    }
})
        
$('input[type="submit"]').click(function() {
    if($('input[name="standing"]').is(":checked")) {
        console.log('grade checked');
        return true;
    }
    else if($(this).is(":not(:checked)")) {
        console.log('grade unchecked');
        alert("You must pick a grade!");
        return false;
    }
})