<!--
Student: Talha Farid - M00795345
Description: game.php (contains game canvas along with the score count)
-->

<?php
    // including the common.php file to make use of it's php functions
    include('common.php');

    // calling the function for the page header
    add_head('Game');

    // calling the function for the page navbar
    nav_bar();
?>

<!-- page body -->
<body>

    <!-- background video -->
    <video muted loop autoplay id="myvideo">
        <source src="assests/vidbg.mp4" type="video/mp4">
    </video>

    <div class="inst-container">
        <div class="title">
            <h1 style="font-family: 'Roboto', sans-serif; font-weight: 100; color:white; font-size: 4rem; font-weight: bold;">HungryMan</h1>
        </div>
        <div class="scrCnt">
            <h1>Score: <span id="scores"></span></h1>
        </div>
        <div class="lvsCnt">
            <h1>Lives: <span id="lives"></span></h1>
        </div>

        <div id="DaBox">

            <!-- game box -->
            <canvas id="gameFrame">
                <img src="Sprites/board/gameboard.png" id="board">
                <img src="Sprites/chubby/Idle001.png" id="fatman">
                <img src="Sprites/Food/cheeseburger.png" id="food1">
                <img src="Sprites/Food/chicken.png" id="food2">
                <img src="Sprites/Food/pizza.png" id="food3">
                <img src="Sprites/killerFood/rottenCheeseburger.png" id="rottenFood1">
                <img src="Sprites/killerFood/rottenpizza.png" id="rottenFood2">
                <img src="Sprites/killerFood/blowfishL.png" id="killerFish1">
                <img src="Sprites/killerFood/blowfishR.png" id="killerFish2">
            </canvas>


        </div>
    </div>
    <script src="js/food.js"></script>
    <script src="js/sumo.js"></script>
    <script src="js/index.js"></script>


<?php
    // calling the footer function
    my_foot('HungrySumo');

?>
