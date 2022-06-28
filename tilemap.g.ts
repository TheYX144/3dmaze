// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`1400140003010300000300000000000000030000000000000300030000030000000000000003000000000000030003000003000000000000000300030000000003000300000303030300030000030003030303000300030303030300030003000003000303000000030000000000030003000300000300030000000003000000000003030303030003030003030303030300000300000000000000000300000000000000030000030303030300000000000003030300000003000000000300030000000000000300030000000300000000030003000000030303030003000000030303030303000300000000000000000300000000030300000000030300000300000303030303000000000000000003030000030000030000000300000303030303030303000003000303000000030000030300030000000000000300000300000003000003030003000000030000030303030000000300000000000303030303000000000000000000030000000000000000000300000000000000000003000000000000030300000000000000000000000302`, img`
2.2..2.......2......
2.2..2.......2......
2.2..2.......2.2....
2.2..2222.2..2.2222.
2.22222.2.2..2.22...
2.....2.2.2..2.2....
2.....22222.22.22222
2..2........2.......
2..22222......222...
2....2.2......2.2...
2....2.2...2222.2...
222222.2........2...
.22....22..2..22222.
.......22..2..2...2.
.22222222..2.22...2.
.22.2......2..2...2.
.22.2...2..2222...2.
....22222.........2.
........2.........2.
.....22...........2.
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,sprites.builtin.brick], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
