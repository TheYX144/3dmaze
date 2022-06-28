scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.over(true)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Render.toggleViewMode()
})
let mySprite = Render.getRenderSpriteVariable()
tiles.setCurrentTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile`)
info.startCountup()
