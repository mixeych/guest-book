var socket = io.connect('http://localhost:3000');

socket.on("newmessage", function (data){
    $("#chat ul").append("<li>"+data+"</li>");
});
$(document).ready(function(){
    // socket.on('connect', function(){
    //     $("#chat p").text('connection is established');
    // });
    // socket.on('disconnect', function(){
    //     $("#chat p").text('connection is failed');
    // });
    $("form.form-horizontal").submit(function(e){
        e.preventDefault();
        var message = $("#enter-message").val();
        var email = $("#enter-email").val();
        var name = $("#enter-name").val();
        socket.emit("message", message, function(data){
            $("#chat ul").append("<li>"+message+"</li>");
            console.log(data);
        });

    })
});
