scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    if (levels.length > 0) {
        loadLevel()
    } else {
        game.gameOver(true)
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(extremeModeEnabled && blockSettings.readNumber("extremeModeMapDisabled") == 1)) {
        Render.toggleViewMode()
    } else if (extremeModeEnabled && blockSettings.readNumber("extremeModeMapDisabled") == 0) {
        Render.toggleViewMode()
    } else {
    	
    }
})
function experimentalSettingsMenu () {
    experimentalToggleMenu = miniMenu.createMenu(
    miniMenu.createMenuItem("What is this? >"),
    miniMenu.createMenuItem("Yes"),
    miniMenu.createMenuItem("No"),
    miniMenu.createMenuItem("Back")
    )
    experimentalToggleMenu.onButtonPressed(controller.A, function (selection, selectedIndex) {
        if (selectedIndex == 0) {
            game.showLongText("Experimental features are features that are in development. These features may not be fully complete, or may have bugs. All experimental features are subject to change. You will see new options in the settings menu to enable features individually.", DialogLayout.Full)
        } else if (selectedIndex == 1) {
            game.splash("Experiments enabled")
            blockSettings.writeNumber("experiments", 1)
        } else if (selectedIndex == 2) {
            game.splash("Experiments disabled")
            blockSettings.writeNumber("experiments", 0)
        } else {
            experimentalToggleMenu.close()
            openSettingsMenu()
        }
    })
}
function startGame (difficulty: number) {
    if (difficulty == 0) {
        Render.setViewMode(ViewMode.raycastingView)
        levels = [tilemap`level1`, tilemap`level2`, tilemap`level8`]
        loadLevel()
        info.startCountup()
    } else if (difficulty == 1) {
        Render.setViewMode(ViewMode.raycastingView)
        levels = [tilemap`level13`]
        loadLevel()
        info.startCountup()
    } else if (difficulty == 2) {
        Render.setViewMode(ViewMode.raycastingView)
        levels = [tilemap`level15`]
        loadLevel()
        info.startCountup()
        extremeModeEnabled = 1
    } else {
        game.showLongText("the game ran into an error. please try again. it is not your fault, unless you edited the code.", DialogLayout.Full)
    }
}
function loadLevel () {
    tiles.setCurrentTilemap(levels.shift())
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile`)
}
function experimentsMenu () {
    myMenu2 = miniMenu.createMenu(
    miniMenu.createMenuItem("back"),
    miniMenu.createMenuItem("help"),
    miniMenu.createMenuItem("extreme mode"),
    miniMenu.createMenuItem("extreme mode map")
    )
    myMenu2.onButtonPressed(controller.A, function (selection, selectedIndex) {
        if (selectedIndex == 0) {
            myMenu2.close()
            openSettingsMenu()
        } else if (selectedIndex == 1) {
            myMenu2.close()
            helpMenu()
        } else if (selectedIndex == 2) {
            myMenu2.close()
            if (game.ask("Enable (A)", "Disable (B)")) {
                blockSettings.writeNumber("extremeMode", 1)
                game.splash("Extreme Mode Enabled")
                experimentsMenu()
            } else {
                blockSettings.writeNumber("extremeMode", 0)
                game.splash("Extreme Mode Disabled")
                experimentsMenu()
            }
        } else if (selectedIndex == 3) {
            myMenu2.close()
            if (game.ask("Enable (A)", "Disable (B)")) {
                blockSettings.writeNumber("extremeModeMapDisabled", 0)
                game.splash("Extreme Mode Map Enabled")
                experimentsMenu()
            } else {
                blockSettings.writeNumber("extremeModeMapDisabled", 1)
                game.splash("Extreme Mode Map Disabled")
                experimentsMenu()
            }
        } else {
        	
        }
    })
}
function openMainMenu () {
    myMenu = miniMenu.createMenu(
    miniMenu.createMenuItem("medium"),
    miniMenu.createMenuItem("hard"),
    miniMenu.createMenuItem("extreme"),
    miniMenu.createMenuItem("settings >")
    )
    myMenu.onButtonPressed(controller.A, function (selection, selectedIndex) {
        if (selectedIndex == 0) {
            myMenu.close()
            game.splash("3d Maze", "\"medium\"")
            startGame(0)
        } else if (selectedIndex == 1) {
            myMenu.close()
            game.splash("3d Maze", "\"hard\"")
            startGame(1)
        } else if (selectedIndex == 3) {
            myMenu.close()
            openSettingsMenu()
        } else if (selectedIndex == 2) {
            if (blockSettings.readNumber("experiments") == 0) {
                game.showLongText("This feature has not been implemented yet. Try checking for an experiment to enable it. Keep in mind there may not be an experiment yet.", DialogLayout.Full)
            } else if (blockSettings.readNumber("extremeMode") == 0 && blockSettings.readNumber("experiments") == 1) {
                game.showLongText("Experiments must be enabled individually. After enabling experiments, a new menu appeared in settings. That is where you may enable specific items. Keep in mind there may not be an experiment yet.", DialogLayout.Full)
            } else if (blockSettings.readNumber("extremeMode") == 1) {
                myMenu.close()
                game.splash("3d Maze", "\"extreme\"")
                startGame(2)
            }
        } else {
        	
        }
    })
}
function openSettingsMenu () {
    if (blockSettings.readNumber("experiments") == 1) {
        text_list = [miniMenu.createMenuItem("back"), miniMenu.createMenuItem("enable experiments >"), miniMenu.createMenuItem("experiments >")]
    } else if (blockSettings.readNumber("experiments") == 0) {
        text_list = [miniMenu.createMenuItem("back"), miniMenu.createMenuItem("enable experiments >")]
    }
    settingsMenu = miniMenu.createMenuFromArray(text_list)
    settingsMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.ScrollIndicatorColor, 1)
    settingsMenu.onButtonPressed(controller.A, function (selection, selectedIndex) {
        if (selectedIndex == 0) {
            settingsMenu.close()
            openMainMenu()
        } else if (selectedIndex == 1) {
            settingsMenu.close()
            experimentalSettingsMenu()
        } else if (selectedIndex == 2) {
            settingsMenu.close()
            experimentsMenu()
        } else {
        	
        }
    })
}
function helpMenu () {
    help = miniMenu.createMenu(
    miniMenu.createMenuItem("back"),
    miniMenu.createMenuItem("extreme mode"),
    miniMenu.createMenuItem("extreme mode map")
    )
    help.onButtonPressed(controller.A, function (selection, selectedIndex) {
        if (selectedIndex == 0) {
            help.close()
            experimentsMenu()
        } else if (selectedIndex == 1) {
            game.showLongText("Enables the extreme mode button on the main menu. Default: Disabled", DialogLayout.Center)
        } else if (selectedIndex == 2) {
            game.showLongText("Changes if you can use the 2d map in extreme mode. Default: Disabled", DialogLayout.Center)
        } else {
        	
        }
    })
}
let help: miniMenu.MenuSprite = null
let settingsMenu: miniMenu.MenuSprite = null
let text_list: miniMenu.MenuItem[] = []
let myMenu: miniMenu.MenuSprite = null
let myMenu2: miniMenu.MenuSprite = null
let experimentalToggleMenu: miniMenu.MenuSprite = null
let levels: tiles.TileMapData[] = []
let extremeModeEnabled = 0
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level9`)
mySprite = Render.getRenderSpriteVariable()
tiles.placeOnRandomTile(mySprite, assets.tile`myTile1`)
Render.toggleViewMode()
openMainMenu()
blockSettings.writeNumber("experiments", 0)
blockSettings.writeNumber("extremeMode", 0)
blockSettings.writeNumber("extremeModeMapDisabled", 1)
extremeModeEnabled = 0
