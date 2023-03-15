$(document).ready(function() {
    window.addEventListener("message", function(event) {
        let data = event.data
        let action = data.action

        if (action == "ShowMenu") {
            OpenMenu(data.data)
        }

        if (action == "CloseMenu") {
            CloseMenu()
        }

    })

    $(document).keydown(function(key) {
        if (key.keyCode == 27) {
            CloseQuestMenu()
        }
    })
})

function OpenMenu(data) {
    $(".wrapper .container p").text(data)
    $(".wrapper").fadeIn(200)
}

function CloseMenu() {
    $(".wrapper").fadeOut(200)
}

function PostMessage(event, data) {
    $.post("https://force_helpNotify/EventHandler", JSON.stringify({event : event, data : data}))
}

function PostFetch(event, data, cb) {
    fetch("https://force_helpNotify/EventHandler", {
        method : "POST",
        body : JSON.stringify({
            event : event,
            data : data || {}
        })
    })
    .then(response => response.json())
    .then(response => cb(response))
}