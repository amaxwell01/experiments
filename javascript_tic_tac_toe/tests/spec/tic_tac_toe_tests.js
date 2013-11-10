describe('Tic Tac Toe', function() {

    beforeEach(function() {
        ticTacToe.clearBoard( ticTacToe.buttons );
    });

    it('Set Mark X', function() {
        var space = $(ticTacToe.buttons[0]);

        ticTacToe.currentUser = 0;
        ticTacToe.setMark( space, ticTacToe.players[ ticTacToe.currentUser ] );
        expect( space.text() ).toEqual( 'X' );
    });

    it('Set Mark O', function() {
        var space = $(ticTacToe.buttons[0]);

        ticTacToe.currentUser = 1;
        ticTacToe.setMark( space, ticTacToe.players[ ticTacToe.currentUser ] );
        expect( space.text() ).toEqual( 'O' );
    });

    it('Check Winner - X (0,0) - No Winner', function() {
        var posX = 0;
        var posY = 0;
        var player = 'X';
        var space = $(ticTacToe.buttons[0]);

        ticTacToe.currentUser = 0;
        ticTacToe.setMark( space, ticTacToe.players[ ticTacToe.currentUser ] );

        var winner = ticTacToe.checkWinner( posX, posY, player );

        expect( winner ).toEqual( false );
    });

    it('Check Winner - X (0,0)(0,1) - No Winner', function() {
        var posX = 1;
        var posY = 0;
        var player = 'X';
        var space0 = $(ticTacToe.buttons[0]);
        var space1 = $(ticTacToe.buttons[1]);

        ticTacToe.currentUser = 0;
        ticTacToe.setMark( space0, ticTacToe.players[ ticTacToe.currentUser ] );
        ticTacToe.setMark( space1, ticTacToe.players[ ticTacToe.currentUser ] );

        var winner = ticTacToe.checkWinner( posX, posY, player );

        expect( winner ).toEqual( false );
    });

    it('Check Winner - X (0,0)(0,1)(0,2) - Winner', function() {
        var posX = 2;
        var posY = 0;
        var player = 'X';
        var space0 = $(ticTacToe.buttons[0]);
        var space1 = $(ticTacToe.buttons[1]);
        var space2 = $(ticTacToe.buttons[2]);

        ticTacToe.currentUser = 0;
        ticTacToe.setMark( space0, ticTacToe.players[ ticTacToe.currentUser ] );
        ticTacToe.setMark( space1, ticTacToe.players[ ticTacToe.currentUser ] );
        ticTacToe.setMark( space2, ticTacToe.players[ ticTacToe.currentUser ] );

        var winner = ticTacToe.checkWinner( posX, posY, player);

        expect( winner ).toEqual( true );
    });
});
