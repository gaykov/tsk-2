(function (root) {
    var EMPTY = root.maze.EMPTY;
    var WALL = root.maze.WALL;
    var PATH = root.maze.PATH;
    var CURRENT = root.maze.CURRENT;

    function RecursiveSolver(maze) {
        this.maze = maze;
        this.wasHere = [];
        this.correctPath =[];

        for (var i = 0; i <  maze.length; ++i) {
            var t = [];
            for (var j = 0; j < maze[i].length; ++j) {
                t.push(false);
            }
            this.wasHere.push(t);
        }

        this.solve = function(x, y) {
            if (y == this.maze.length - 1 && this.maze[y][x] == 0) {
                this.correctPath.push([x, y]);
                return true;
            }

            if (this.maze[y][x] == WALL || this.wasHere[y][x]) {
                return false;
            }

            this.wasHere[y][x] = true;

            if (y != this.maze.length - 1) {
                if (this.solve(x, y + 1)) {
                    this.correctPath.push([x, y]);
                    return true;
                }
            }

            if (x != this.maze[0].length - 1) {
                if (this.solve(x + 1, y)) {
                    this.correctPath.push([x, y]);
                    return true;
                }
            }

            if (y != 0) {
                if (this.solve(x, y - 1)) {
                    this.correctPath.push([x, y]);
                    return true;
                }
            }

            if (x != 0) {
                if (this.solve(x - 1, y)) {
                    this.correctPath.push([x, y]);
                    return true;
                }
            }

            return false;
        }
    }

    /**
     * Функция находит путь к выходу и возвращает найденный маршрут
     *
     * @param {number[][]} maze карта лабиринта представленная двумерной матрицей чисел
     * @param {number} x координата точки старта по оси X
     * @param {number} y координата точки старта по оси Y
     * @returns {[number, number][]} маршрут к выходу представленный списоком пар координат
     */
    function solution(maze, x, y) {
        // todo: построить правильный маршрут к выходу
        var t = new RecursiveSolver(maze);
        t.solve(x, y);
        return t.correctPath;
    }

    root.maze.solution = solution;
})(this);
