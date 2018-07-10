const connection = new signalR.HubConnectionBuilder()
    .withUrl("/MagicPaste")
    .build();

connection.start();

$("#btnPublish").click(function () {
    var msg = $("#inputData").val();
    if (msg.length > 0) {
        connection.invoke("SendData", msg).catch(err => console.error(err.toString()));   
        $("#inputData").val('');
    }
});

connection.on("ReceiveData", (msg) => {
    $("#messagesList").append($("<li class='list-group-item list-group-item-info'>").html(msg));
});

$('#inputData').keypress(function (event) {
    if (event.keyCode == 13) {
        $('#btnPublish').click();
    }
});