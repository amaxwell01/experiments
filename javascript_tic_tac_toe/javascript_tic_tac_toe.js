// Tic Tac Toe
var ticTacToe = {
    buttons: [],
    currentUser: 0,
    players: ['X', 'O'],
    isGameOver: false,

    checkDraw: function( spaces ) {
        var spacesLength = spaces.length;
        var i;
        
        for ( i = 0; i < spacesLength; i += 1 ) {
            if ( $(spaces[i]).text().length === 0 ) {
                return false;
            }
        }

        return true;
    },

    // Check to see who the winner is
    checkWinner: function( spaces, player ) {
        if ( $(spaces[0]).text() === player &&
             $(spaces[1]).text() === player &&
             $(spaces[2]).text() === player ) {
            return true;
        }

        if ( $(spaces[3]).text() === player &&
             $(spaces[4]).text() === player &&
             $(spaces[5]).text() === player ) {
            return true;
        }

        if ( $(spaces[6]).text() === player &&
             $(spaces[7]).text() === player &&
             $(spaces[8]).text() === player ) {
            return true;
        }

        if ( $(spaces[0]).text() === player &&
             $(spaces[3]).text() === player &&
             $(spaces[6]).text() === player ) {
            return true;
        }

        if ( $(spaces[1]).text() === player &&
             $(spaces[4]).text() === player &&
             $(spaces[7]).text() === player ) {
            return true;
        }

        if ( $(spaces[2]).text() === player &&
             $(spaces[5]).text() === player &&
             $(spaces[8]).text() === player ) {
            return true;
        }

        if ( $(spaces[0]).text() === player &&
             $(spaces[4]).text() === player &&
             $(spaces[8]).text() === player ) {
            return true;
        }

        if ( $(spaces[2]).text() === player &&
             $(spaces[4]).text() === player &&
             $(spaces[6]).text() === player ) {
            return true;
        }
    },

    clearBoard: function( buttons ) {
        var buttonLength = buttons.length;
        var i;

        ticTacToe.showMessage('');
        ticTacToe.currentUser = 0;
        ticTacToe.isGameOver = false;

        for ( i = 0; i < buttonLength; i += 1 ) {
            $(ticTacToe.buttons[i]).text('');
        }
    },

    // Initialize the object
    init: function() {
        $('#clear_game').on('click', function() {
            ticTacToe.clearBoard(ticTacToe.buttons);
        });

        ticTacToe.buttons = $('button.space');
        ticTacToe.buttons.on('click', ticTacToe.selectGamePiece );
    },

    // Validate if the move is valid
    isValidMove: function( space ) {
        return space.text().length;
    },

    // Select the game piece by the current user
    selectGamePiece: function() {
        ticTacToe.showMessage('');

        if ( ticTacToe.isValidMove($(this)) ) {
            ticTacToe.showMessage( 'Location already played!' );
            return;
        }

        ticTacToe.setMark( $(this), ticTacToe.players[ ticTacToe.currentUser ] );

        if ( !ticTacToe.isGameOver ) {
            ticTacToe.isGameOver = !!(ticTacToe.checkWinner( ticTacToe.buttons, ticTacToe.players[ticTacToe.currentUser] ));
        }

        if ( ticTacToe.isGameOver ) {
            ticTacToe.showMessage( 'Game Over: Player ' + ticTacToe.players[ ticTacToe.currentUser ] + ' won!' );
            return;
        }

        if ( ticTacToe.checkDraw( ticTacToe.buttons ) ) {
            ticTacToe.showMessage( 'Game is a draw!' );
        }

        ticTacToe.currentUser += 1;
        if ( ticTacToe.currentUser > 1 ) {
            ticTacToe.currentUser = 0;
        }
    },

    setMark: function( square, mark ) {
        square.text( mark );
    },

    // Show a message to the user
    showMessage: function( message ) {
        var messageBox = $('#message');
        messageBox.text( message );
    }
};

ticTacToe.init();
