<!--
Student: Talha Farid - M00795345
Description: Common.php (using PHP functions to get rid of redundant code)
-->

<?php



// function for the page header

function add_head ($page1){
    echo '<!DOCTYPE html>';
echo '<html lang="en">';
echo    '<head>';
        echo '<meta charset="UTF-8">';
        echo '<meta name="viewport" content="width=device-width,initial-scale-1.0">';
        echo '<link rel="stylesheet" href="css/style.css">';
        echo '<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap" rel="stylesheet">';
        echo '<link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>';
        echo '<title>'. $page1 .'</title>';
    echo '</head>';
}

// function for the page navbar

function nav_bar () {

    echo '<!-- Nav bar -->';

    echo '<nav class="nav-container">';

     echo '<!-- navbar logo -->';
        echo '<div class="logo-cont">';
            echo '<!-- nav bar logo img -->';
            echo '<a href="index.php"><img src="assests/home.png" alt=""></a>';
            

        echo '</div>';

        echo '<div id="name-of-the-current-user"></div>';

        echo '<div id="log-out"></div>';
        
        echo '<!-- nav bar items container-->';
        echo '<div class="items-cont">';

                echo '<a id="gamePHP" href="game.php">Game</a>';
        
                echo '<!--linking to leaderboard file-->';
                echo '<a href="leaderboard.php">Leaderboard</a>';

                echo '<!--linking to howtoplay file-->';
                echo '<a href="howtoplay.php">How to play?</a>';

        echo '</div>';

    echo '</nav>';
}

// function for the page footer

function my_foot ($foot) {
    
    echo '<footer class="footer">';

            echo '<ul class="li">';
                   echo '<a href="callto:00971525217028" style="font-family: '.'Roboto'.', sans-serif; font-weight: 100; color:white; font-size: 1rem;"><li class="fas fa-phone"></li> +971 525217028</a>';
                   echo '<a href="mailto:talha.farid2@gmail.com"><li class="fas fa-envelope-open" aria-hidden="true"></li></a>';
                   echo '<a href="https://github.com/ALeglessSpider" target="_blank"><li class="fab fa-github"></li></a>';
                   echo '<a href="https://www.instagram.com/__xd_/" target="_blank"><li class="fab fa-instagram"></li></a>';
                 
                echo '</ul>';


        echo '</footer>';
        
    // condition for homepage javascript layout styling    
    

        echo '<script src="js/index.js"></script>';
    
        

        echo '</body>';
    echo '</html>';
}

?>
