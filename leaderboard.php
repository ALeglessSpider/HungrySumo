<!--
Student: Talha Farid - M00795345
Description: leaderboard.php (this page consists of a table that displays user high scores)
-->

<?php

// including the common.php file to make use of it's php functions
include('common.php');

// calling the function for the page header
add_head('Leaderboard');

// calling the function for the page navbar
nav_bar();
?>

<!-- page body -->
<body>

    <!-- background video -->
    <video muted loop autoplay id="myvideo">
        <source src="assests/vidbg.mp4" type="video/mp4">
    </video>

    <div class="score-container">

        <h1 style="text-align: center; font-family: 'Roboto', sans-serif; font-weight: 100; color:white; font-size: 4rem; font-weight: bold;">Scoreboard</h1>

        <div class="scoreboard">

        <!-- table for high scores -->
            <table id="scoreTable" cellpadding="5">
                <thead>
                    <tr>
                        <th> USERNAME</th>
                        <th>HIGHSCORE</th>
                    </tr>
                </thead>

            </table>

        </div>


    </div>

    <?php

    // calling the footer function
    my_foot('HungrySumo');

    ?>

    <script src="js/leaderboard.js"></script>