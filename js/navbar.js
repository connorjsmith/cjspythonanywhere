$(document).ready(function (){
    $('.leftnav').hide();
    $('a:not(".navbar-brand,.dropdown-hover,.dropmenu")').hover(function(){ /*excludes the main icon and hover menus*/
        $('i:not("#item")',this).show();
        $(this).css ({
            "padding-top":"10px",
            "padding-bottom":"10px"
        });
        $('div',this).hide();
    }, function(){
        $('i:not("#item")',this).hide();
        $('div',this).fadeIn(200);
        $(this).css({
            "padding-top":"auto",
            "padding-bottom":"auto"
        });
    });
});