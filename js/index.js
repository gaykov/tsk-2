(function (root) {
    var map = root.maze.MAZE_Y;
    var path = root.maze.solution(map, 1, 0);

    document.querySelector('.outer').appendChild(
        root.maze.render(map, null)
    );

    document.getElementById('run').onclick = function() {
        visualize(0);
    };

    function visualize(index) {
        var cellToHighlight = path[index];
        var cell = document.getElementById(cellToHighlight[0] + '-' + cellToHighlight[1]);
        cell.className += ' maze__cell_path';

        if(index === path.length - 1) return;

        setTimeout(function() {visualize(index + 1)}, 50);
    }

})(this);
