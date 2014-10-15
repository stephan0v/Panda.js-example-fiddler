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
            logo.position.set(100, 200);
            //or alternatively:
            //logo.position.x=100;
            //logo.position.y=200;
            this.stage.addChild(logo);
         }
    });
});
