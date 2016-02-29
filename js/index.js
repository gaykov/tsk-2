(function (root) {
    var map = root.maze.MAZE_21;

    document.querySelector('.outer').appendChild(
        root.maze.render(map, null)
    );

    document.getElementById('run').onclick = function() {
        visualize(root.maze.solution(map, 1, 0), 0);
    };

    for (var i = 0, radios = document.radios.radio; i < radios.length; ++i) {
        radios[i].onclick = function(e) {
            changeMaze(e.srcElement.defaultValue);
        }
    }

    function visualize(path, index) {
        var cellToHighlight = path[index];
        var cell = document.getElementById(cellToHighlight[0] + '-' + cellToHighlight[1]);
        cell.className += ' maze__cell_path';

        if(index === path.length - 1) return;

        setTimeout(function() {visualize(path, index + 1)}, 50);
    }

    function changeMaze(newMaze) {
        switch (newMaze) {
            case '21':
                map = root.maze.MAZE_21;
                break;
            case '31':
                map = root.maze.MAZE_31;
                break;
            case '51':
                map = root.maze.MAZE_51;
                break;
            default:
                map = root.maze.MAZE_Y;
        }

        var outer = document.querySelector('.outer');
        outer.innerHTML = '';
        outer.appendChild(
            root.maze.render(map, null)
        );
    }

})(this);
