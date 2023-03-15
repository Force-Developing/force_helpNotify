Funcs = {};

Funcs.ShowHelpNoti = function(text)
    SendNUIMessage({
        action = "ShowMenu",
        data = text
    })
    if not hasPlayedSound then
        PlaySoundFrontend(-1, "SELECT", "HUD_MINI_GAME_SOUNDSET", 1)
        hasPlayedSound = true
    end
end

Funcs.HideHelpNoti = function(text)
    SendNUIMessage({
        action = "CloseMenu"
    })
    hasPlayedSound = false
end

exports('ShowHelpNotification', Funcs.ShowHelpNoti)
exports('HideHelpNotification', Funcs.HideHelpNoti)