const getSpiralMatrix = (col, row, arr, dir) => {
   let endCol = col - 1;
   let startCol = col - 1;
   let endRow = row - 1;
   let startRow = row - 1;
   let counter = 0;
   const res = [];
   const arrLength = [].concat(...arr);

   while (arrLength.length != res.length) {
      const left = () => {
         for (let i = 0; i <= counter; i++) {
            if (endRow < 0 || startCol - i < 0 || endRow > arr.length - 1 || startCol - i > arr[0].length - 1) {
               continue;
            } else {
               res.push(arr[endRow][startCol - i]);
            }
         }
         endCol--;
      };

      const up = () => {
         for (let i = 0; i <= counter; i++) {
            if (endRow - i < 0 || endCol < 0 || endRow - i > arr.length - 1 || endCol > arr[0].length - 1) {
               continue;
            } else {
               res.push(arr[endRow - i][endCol]);
            }
         }
         startRow--;
      };

      const right = () => {
         for (let i = 0; i <= counter; i++) {
            if (startRow < 0 || endCol + i < 0 || startRow > arr.length - 1 || endCol + i > arr[0].length - 1) {
               continue;
            } else {
               res.push(arr[startRow][endCol + i]);
            }
         }
         startCol++;
      };

      const down = () => {
         for (let i = 0; i <= counter; i++) {
            if (startRow + i < 0 || startCol < 0 || startRow + i > arr.length - 1 || startCol > arr[0].length - 1) {
               continue;
            } else {
               res.push(arr[startRow + i][startCol]);
            }
         }
         endRow++;
      };

      if (dir === 'left') {
         left();
         up();
         counter++;
         right();
         down();
         counter++;
      } else if (dir === 'right') {
         right();
         down();
         counter++;
         left();
         up();
         counter++;
      } else if (dir === 'up') {
         up();
         right();
         counter++;
         down();
         left();
         counter++;
      } else if (dir === 'down') {
         down();
         left();
         counter++;
         up();
         right();
         counter++;
      } else {
         left();
         up();
         counter++;
         right();
         down();
         counter++;
      }
   };
   return res;
};

const getArray = (col, row) => {
   const matrix = [];
   let counter = 1;
   for (let i = 0; i < row; i++) {
      matrix[i] = [];
      for (let j = 0; j < col; j++) {
         matrix[i].push(counter);
         counter++;
      }
   }
   return matrix;
};

const getResult = (col, row, startcol, startRow, dir) => {
   const matrix = getArray(col, row);
   const result = getSpiralMatrix(startcol, startRow, matrix, dir);
   return result;
};

const form = document.querySelector('.form');
form.addEventListener('submit', e => {
   e.preventDefault();

   let row = document.querySelector('.rows').value
   let col = document.querySelector('.columns').value
   let startCol = document.querySelector('.startColumn').value
   let startRow = document.querySelector('.startRow').value
   let dir = document.querySelector('.direction').value

   const matrix = document.querySelector('.array');
   matrix.innerHTML = '';

   function showArray(col, row) {
      if (row <= 0 || col <= 0) {
         matrix.innerHTML = `
         <p>Numbers must be more than 0 </br>
         Please enter valid numbers
         </p>
         `
      }

      let counter = 1;
      for (let i = 0; i < row; i++) {
         let div = document.createElement('div');
         div.className = 'wrapper'
         matrix.appendChild(div);
         for (let j = 0; j < col; j++) {
            let p = document.createElement('p');
            p.className = 'element'
            p.textContent = counter;
            div.appendChild(p);
            counter++;
         }
         matrix.appendChild(div)
      }
      
   };

   showArray(col, row);

   document.querySelector('.result').textContent = getResult(col, row, startCol, startRow, dir).join(', ');
});