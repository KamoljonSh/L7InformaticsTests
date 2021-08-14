
let grid = [['x', 'c', 'a'], 
            ['d', 'y', 't'],
            ['o', 'g', 'z']];
let word = 'xzy';
   



function findWord (grid, word) {
    
    for (let row=0; row < grid.length; row++) {
        
        for (let column=0; column < grid[row].length; column++) {
            
            if (grid[row][column] === word.charAt(0) &&
                depthFirstSearch(grid, row, column, 0, word)
            ) {
                
                return true;
            }
        }
    }
    
    
    return false;
}


const depthFirstSearch  = (grid, row, column, charIdx, word) => {
   
    if (charIdx === word.length) 
    return true;
    
   
    if (row < 0 || row > grid.length-1 ||
        column < 0 || column > grid[row].length-1 ||
        grid[row][column] !== word.charAt(charIdx)
    ) {
       
        return false;
    }
    
    
    const temporaryVar = grid[row][column]
    grid[row][column] = " "

    let foundedWord = depthFirstSearch(grid, row+1, column, charIdx+1, word) ||
                depthFirstSearch(grid, row-1, column, charIdx+1, word) ||
                depthFirstSearch(grid, row, column+1, charIdx+1, word) ||
                depthFirstSearch(grid, row, column-1, charIdx+1, word)
    
    
    grid[row][column] = temporaryVar;
    
    
    return foundedWord;
}

let output = findWord (grid, word);
console.log(output);