module.exports = function (app) {

    var pokemonController = require('../controller/pokemonController');
    var userController = require('../controller/userController');



    app.route('/pokemon/list').get(pokemonController.getAll);
    app.route('/pokemon/list/:token').get(pokemonController.getCardsOfUser);
    app.route('/pokemon/:id').get(pokemonController.getCardsOfPokemon);
    app.route('/pokemon/booster/:generation/:token').get(pokemonController.getBooster);
    app.route('/pokemon/exchange').get(pokemonController.getExchange);
    app.route('/pokemon/exchange/new').post(pokemonController.postExchange);
    app.route('/pokemon/exchange').post(pokemonController.postExchangeAccept);

    app.route('/user').post(userController.newUser);
    app.route('/user/:token').get(userController.connectUser);


}