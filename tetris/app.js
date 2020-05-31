document.addEventListener('DOMContentLoaded', () =>{
    const grid = document.querySelector('.grid');
    let squares = Array.from(document.querySelectorAll('.grid div'));
    const ScoreDisplay = document.querySelector('#score');
    const StartBtn = document.querySelector('#start-button');
    const width = 10;


    //The Tetrominoes
    const lTetromino = [
        [1, width+1, width*2+1, 2],
        [width, width+1, width+2, width*2+2],
        [1, width+1, width*2+1, width*2],
        [width, width*2, width*2+1, width*2+2]
    ]

    const zTetromino = [
        [width*2, width+1, width*2+1, width+2],
        [0, width, width+1, width*2+1],
        [width*2, width+1, width*2+1, width+2],
        [0, width, width+1, width*2+1]
    ]

    const tTetromino = [
        [width, width+1, width*2+1, width+2],
        [0, width, width+1, width*2],
        [width*2,width*2+1,width+1,width*2+2],
        [width, 1, width+1, width*2+1]
    ]

    const sTetromino = [
        [0, 1, width, width+1],
        [0, 1, width, width+1],
        [0, 1, width, width+1],
        [0, 1, width, width+1]
    ]

    const iTetromino = [
        [0, width, width*2, width*3],
        [0, 1, 2, 3],
        [0, width, width*2, width*3],
        [0, 1, 2, 3]
]
})