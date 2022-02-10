<!--
Student: Talha Farid - M00795345
Description: howtoplay.php (contains basic instructions and a tutorial video)
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
        
           <div class="inst-container">

            <h1 style="font-family: 'Roboto', sans-serif; font-weight: 100; color:white; font-size: 4rem; font-weight: bold;">Instructions</h1>

            
            <div class="inst">

                <!-- box for basic instructions -->
                <div class="sec-1">
                    <h2>How To Play?</h2>
                    <div class="inst-set">To gain points, eat fresh food and avoid rotten food. If you come in contact with a pufferfish you lose a life. You lose a life if your score drops below 0 and point if you eat rotten food.</div>
                </div>
                
                <!-- tutorial video box -->
                <iframe class="iframe" width="100%" height="100%" src="https://www.youtube.com/embed/Ah6lG1qrxKI?controls=0&loop=1&rel=0" title="HungrySumo" autoplay=1 frameborder="0"></iframe>
                

                <!-- box for game controls -->
                <div class="sec-3">
                    <h2>Controls</h2>

                    <div class="inst-set">Arrow up: Go up</div>
                    <div class="inst-set">Arrow down: Go down</div>
                    <div class="inst-set">Arrow left: Go left</div>
                    <div class="inst-set">Arrow right: Go right</div>
                    <div class="inst-set">Space: Quit</div>
                    
                </div>

               
                
            </div>


        </div>

<?php
    // calling the footer function
    my_foot('HungrySumo');

?>