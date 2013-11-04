// Tic Tac Toe
var ticTacToe = {
    buttons: [],
    currentUser: 0,
    players: ['X', 'O'],
    isGameOver: false,
    gameBoardSize: 3,
    moveCount: 0,
    positionState: {
        posX: [],
        posY: []
    },

    // Check to see who the winner is
    checkWinner: function( posX, posY, player ) {
        var i;
        var j;
        var k;
        var l;

        ticTacToe.moveCount += 1;

        var gameBoard = $('.game_board');
        var gameBoardX = gameBoard.find('div[data-row="' + posX + '"]');
        var gameBoardY = gameBoard.find('.space');

        // Check Row
        for ( i = 0; i < ticTacToe.gameBoardSize; i += 1 ) {
            if ( $(gameBoardX.find('.space')[i]).text() !== player ) {
                break;
            } else {
                if ( i === (ticTacToe.gameBoardSize - 1) ) {
                    ticTacToe.showMessage( 'Game Over: Player ' + ticTacToe.players[ ticTacToe.currentUser ] + ' won!' );
                }
            }
        }

        // Check Column
        for ( j = 0; j < ticTacToe.gameBoardSize; j += 1 ) {
            if ( $(gameBoard.find('div[data-row="' + j + '"]').find('.space')[posY]).text() !== player ) {
                break;
            } else {
                if ( j === ticTacToe.gameBoardSize - 1 ) {
                    ticTacToe.showMessage( 'Game Over: Player ' + ticTacToe.players[ ticTacToe.currentUser ] + ' won!' );
                }
            }
        }

        // Check Diagonal
        if( posX === posY ) {

            //we're on a diagonal
            for ( k = 0; k < ticTacToe.gameBoardSize; k += 1 ) {
                if ( $(gameBoard.find('div[data-row="' + k + '"]').find('.space')[k]).text() !== player ) {
                    break;
                } else {
                    if( k === ticTacToe.gameBoardSize - 1 ) {
                        ticTacToe.showMessage( 'Game Over: Player ' + ticTacToe.players[ ticTacToe.currentUser ] + ' won!' );
                    }
                }
            }
        }
        
        // Check Reverse Diagonal
        for( l = 0; l < ticTacToe.gameBoardSize; l += 1 ){
            if ( $(gameBoard.find('div[data-row="' + l + '"]').find('.space')[ (ticTacToe.gameBoardSize - 1) - l ]).text() !== player ) {
                break;
            } else {
                if( l === ticTacToe.gameBoardSize - 1 ) {
                    ticTacToe.showMessage( 'Game Over: Player ' + ticTacToe.players[ ticTacToe.currentUser ] + ' won!' );
                    return;
                }
            }
        }

        //check draw
        if ( ticTacToe.moveCount === ( Math.pow(ticTacToe.gameBoardSize, 2) - 1) ){
            ticTacToe.showMessage( 'Game is a draw!' );
            return;
        }
    },

    clearBoard: function( buttons ) {
        var buttonLength = buttons.length;
        var i;

        ticTacToe.showMessage('');
        ticTacToe.currentUser = 0;
        ticTacToe.isGameOver = false;
        ticTacToe.isGameOver = false;
        ticTacToe.moveCount = 0;
        ticTacToe.positionState = {
            posX: [],
            posY: [],

        };

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
        ticTacToe.buttons.on('click', function() {
            var row = parseInt($(this).parent().attr('data-row'), 10);
            var column = parseInt( $(this).parent().find('.space').index( $(this) ), 10 );
            ticTacToe.selectGamePiece( row, column, $(this) );
        });
    },

    // Validate if the move is valid
    isValidMove: function( space ) {
        return space.text().length;
    },

    // Select the game piece by the current user
    selectGamePiece: function( posX, posY, space ) {
        ticTacToe.positionState.posX = posX;
        ticTacToe.positionState.posY = posY;
        ticTacToe.showMessage('');

        if ( ticTacToe.isValidMove( space ) ) {
            ticTacToe.showMessage( 'Location already played!' );
            return;
        }

        ticTacToe.setMark( space, ticTacToe.players[ ticTacToe.currentUser ] );
        ticTacToe.checkWinner( posX, posY, ticTacToe.players[ticTacToe.currentUser] );
        
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
