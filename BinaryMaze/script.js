const arrayOut = document.querySelector('.show-array');
const btnShowArray = document.querySelector('.btn-show');
const matrixSize = document.querySelector('.size');
const result = document.querySelector('.result');

let matrix = [];
let array = [];
let startPoint;
let endPoint;
let path;

function createMatrix(num) {
	for (let i = 0; i < num; i++) {
		array[i] = [];
		for (let j = 0; j < num; j++) {
			let counter = Math.random();
			array[i].push(Math.round(counter));
		}
	}

	startPoint = ([Math.floor(Math.random() * num), Math.floor(Math.random() * num)]);
	endPoint = ([Math.floor(Math.random() * num), Math.floor(Math.random() * num)]);

	if (startPoint[0] === endPoint[0] && startPoint[1] === endPoint[1]){
		startPoint = ([Math.floor(Math.random() * num), Math.floor(Math.random() * num)]);
	}

	matrix = JSON.parse(JSON.stringify(array))
	return array;
}

function drawMatrix(arr, out) {
	arrayOut.innerHTML = '';
	let col = document.createElement('div');
	col.className = 'wrapper';
	out.appendChild(col);
	arr[startPoint[0]][startPoint[1]] = 'S';
	arr[endPoint[0]][endPoint[1]] = 'F';

	for (let i = 0; i < matrixSize.value; i++) {
		let cel = document.createElement('p');
		col.appendChild(cel)
		cel.className = 'row';
		cel.textContent = i + 1;
	}

	for (let i = 0; i < arr.length; i++) {
		let div = document.createElement('div');
		div.className = 'wrapper';
		div.textContent = i + 1;
		out.appendChild(div);

		for (let j = 0; j < arr[i].length; j++) {
			let p = document.createElement('p');
			p.className = 'element';
			p.textContent = arr[i][j];
			div.appendChild(p);
			if (p.textContent == 1)
				p.style.backgroundColor = '#999'

			if (p.textContent == 'S')
				p.style.backgroundColor = 'green'

			if (p.textContent == 'F')
				p.style.backgroundColor = 'red'

			if (p.textContent == 'x')
				p.style.backgroundColor = 'yellow'
		}
	}
}

function showMatrix() {
	if (matrixSize.value < 2) {
		result.textContent = 'Слишком малое значение';
		return
	}
	array = []
	createMatrix(matrixSize.value);
	arrayOut.innerHTML = '';
	result.textContent = '';
	drawMatrix(matrix, arrayOut);
}

function findWay(position, end) {
	const queue = [];
	queue.push([position]);

	while (queue.length > 0) {
		let path = queue.shift();
		let pos = path[path.length - 1];
		const direction = [
			[pos[0] + 1, pos[1]],
			[pos[0], pos[1] + 1],
			[pos[0] - 1, pos[1]],
			[pos[0], pos[1] - 1]
		];

		for (let i = 0; i < direction.length; i++) {
			if (direction[i][0] == end[0] && direction[i][1] == end[1]) {
				return [...path, end];
			}

			if (direction[i][0] < 0 || direction[i][0] >= matrix.length ||
				direction[i][1] < 0 || direction[i][1] >= matrix[0].length ||
				matrix[direction[i][0]][direction[i][1]] != 0) {
				continue;
			}
			matrix[direction[i][0]][direction[i][1]] = 1;
			queue.push([...path, direction[i]]);
		}
	}
}

function drawPath() {
	if (path === undefined) {
		result.textContent = 'Невозможно пройти путь';
		return;
	}
	if (path) {
		result.textContent = `Сделано ходов ${path.length - 1}`;
	}
	for (let i = 0; i < path.length; i++) {
		for (let j = 0; j < path.length; j++) {
			if (array[path[i][0]][path[i][1]] != 'S' && array[path[i][0]][path[i][1]] != 'F') {
				array[path[i][0]][path[i][1]] = 'x'
			}
		}
	}
}

btnShowArray.addEventListener('click', () => {
	showMatrix();
	if(matrixSize.value <2){
		return
	}
	let btnSolve = document.createElement('button');
	result.append(btnSolve);
	btnSolve.textContent = 'Проверить путь';

	btnSolve.addEventListener('click', () => {
		path = findWay(startPoint, endPoint);
		drawPath();
		drawMatrix(array, arrayOut);
	})
})