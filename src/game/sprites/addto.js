game.module(
    'game.main'
)
.require(
    'engine.core'
)
.body(function(){

    game.addAsset('logo1.png');

    game.createScene('Main', {
        init: function() {
            var logo = new game.Sprite('logo1.png');
            this.stage.addChild(logo);
            //Alternatively you could do:
            //logo.addTo(this.stage);
         }
    });
});
