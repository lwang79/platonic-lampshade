// define maze structure

const maze = {
	height: 5,
	width: 5,
	walls: [
		{x:1, y: 0 },
		{x:1, y: 1},
		{x: 3, y: 2}
	],
	start: {x: 0, y: 0},
	end: {x: 4, y: 4}
};

function encodeMaze(maze) {
	return JSON.stringify(maze);
}

function decodeMaze(encodedString) {
	return JSON.parse(encodedString)
}

const encodedMaze = encodeMaze(maze)
console.log(encodedMaze)

const originalMaze = decodeMaze(encodedMaze)

console.log(originalMaze)

console.log(originalMaze === maze)