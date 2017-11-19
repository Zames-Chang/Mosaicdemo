$(function () {
    $("#info-button").click(function () {
        $.ajax({
            async: false,
            cache: false,
            contentType: false,
            processData: false,
            data: new FormData($('#profile-form')[0]),
            type: "POST",
            url: "/upload.php",
            success: function (data) {
                data = data.replace(/http:\/\//, "");
                $("#url").val(data);
            }
        });
    });
});
