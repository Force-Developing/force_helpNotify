-- An example

if dst < 1.0 then
    -- ESX.ShowHelpNotification('Tryck på ~p~E ~w~för att öppna garaget.');
    exports["force_notify"]:ShowHelpNotification("[E] öppna garaget")

    if IsControlJustReleased(0, 38) then
        Garages.OpenGarage(i);
    end
else
    exports["force_notify"]:HideHelpNotification()
end