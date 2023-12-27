$(document).ready(function () {
    $('#go').click(function () {
        var name = $('#myName').val();
        if (name.trim() !== "") {
            $('#nameToDisplay').html(name);
            $('#prompt').addClass("hidden");
            $('#result').removeClass("hidden");
        }
        else {
            alert("Please enter your name");
        }
    });

});