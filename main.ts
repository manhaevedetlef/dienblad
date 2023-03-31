//variabelen
let opDienblad = false;
let drankje;
let tolerantie = 500;

basic.forever(function () {
    basic.showString("3-2-1 GO");//toon het aftellen
    drankje = game.createSprite(2, 2)//plaatsing van het led dien brand
    opDienblad = true;
    while (opDienblad) {
        //bij het schuinhouden van de micro bit zal de led anders oplichten
        if (input.acceleration(Dimension.X) > tolerantie) {
            //rehts bewegen
            if (drankje.get(LedSpriteProperty.X) < 4) {
                drankje.change(LedSpriteProperty.X, 1);
            }
            else {
                opDienblad = false;//einde spel
            }
        }
        if (input.acceleration(Dimension.X) < -tolerantie) {
            if (drankje.get(LedSpriteProperty.X) > 0) {
                drankje.change(LedSpriteProperty.X, -1);
            }
            else {
                opDienblad = false;
            }
        }

        if (input.acceleration(Dimension.Y) > tolerantie) {
            //naar boven
            if (drankje.get(LedSpriteProperty.Y) < 4) {
                drankje.change(LedSpriteProperty.Y, 1);
            }
            else {
                opDienblad = false;//einde spel
            }
        }
        if (input.acceleration(Dimension.Y) < -tolerantie) {
            if (drankje.get(LedSpriteProperty.Y) > 0) {
                drankje.change(LedSpriteProperty.Y, -1);
            }
            else {
                opDienblad = false;
            }
        }

        basic.pause(250);
        basic.clearScreen();
        basic.pause(50);
    }

    drankje.delete();
    basic.showString("GAME OVER");
    basic.pause(500);
})








