var players = [];

class Player {
    constructor(id) {
        this.id = id;
    }

    //Username setter
    set setUsername(new_username) {
        this.username = new_username;
    }

}

module.exports = {
    Player: Player,
}
