const team = {
    _players: [
        {
            firstName: 'Tom',
            lastName: 'Schrier',
            age: 20
        },
        {
            firstName: 'Cornelius',
            lastName: 'Ottar',
            age: 23
        },
        {
            firstName: 'Ingunn',
            lastName: 'Andreassen',
            age: 24
        }
    ],
    _games: [],

    get players() {
        return this._players
    },
    get games() {
        return this._games
    },
    addPlayer(firstName, lastName, age) {
        let player = {
            firstName: firstName,
            lastName: lastName,
            age: age
        };

        this._players.push(player);
    },

    addGame(opponentName, teamPoints, opponentPoint) {
        let game = {
            opponentName: opponentName,
            teamPoints: teamPoints,
            opponentPoint: opponentPoint
        };

        this._games.push(game);
    }
};

team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("Bugs", "Bunny", 76);

console.log(team._players);

team.addGame("test", 4, 5);
team.addGame("test2", 1, 6);
team.addGame("test3", 5, 8);

console.log(team._games);