<!--
Student: Talha Farid - M00795345
Description: index.php (home page that contains the register form and login form, and a game video from youtube along with some PHP functions)
-->


<?php

// including the common.php file to make use of it's php functions
include('common.php');

// calling the function for the page header
add_head('HungrySumo');

// calling the function for the page navbar
nav_bar();

?>

<!-- page body -->
<body>

        <!-- background video -->
        <video muted loop autoplay id="myvideo">
            <source src="assests/vidbg.mp4" type="video/mp4">
        </video>


            <div class="form-container">

                <!-- for registration -->
                <form class="register-form" id="register" onsubmit="registER()">

                    <h2>REGISTER</h2>

                    <input type="text" name="usrName" id="usrName" placeholder="Username" maxlength="16" minlength="4" required />
                    <input type="email" name="email" id="email" placeholder="Email" required />
                    <input type="tel" name="pNumber" id="pNumber" placeholder="Phone Number" pattern="[0-9]{10}"  required />
                    <input type="text" name="address" id="address" placeholder="Address"  required />
                    <input type="text" name="fName" id="fName" placeholder="Full Name" required />
                    <input type="password" name="passwrd" id="passwrd" placeholder="Password" maxlength="12" minlength="4" required />
                    <input type="password" name="passwrd2" id="passwrd2" placeholder="Confirm Password" maxlength="12" minlength="4" required onchange="COnfirm()" />


                    <button type="submit" href=""  class="btn-link">Register</button>
                    <!-- <a href="" type="submit" onclick="registER()" class="btn-link">Register</a> -->

                    <div class="changeForm">
                        <p>Have an account? <a href="" class="btn-reg">Login</a></p>
                    </div>


                </form>

                <!-- game video box -->

                <div class="video" id="vid">
                    <iframe class="iframe" width="100%" height="100%" src="https://www.youtube.com/embed/j42gMyc2ngQ?controls=0&loop=1&rel=0" title="HungrySumo" autoplay=1 frameborder="0"></iframe>
                </div>


                <!-- for logging in -->

                <form class="form" id="login" onsubmit="signIn()">

                    <h2>LOGIN</h2>

                    <input type="text" name="Username" id="usrName1" placeholder="Username" maxlength="16" minlength="4" required>
                    <input type="password" name="Password" id="passwrd1" placeholder="Password" maxlength="12" minlength="4" required>
                    
                    <button type="submit" href="./index.php" class="btn-link">Login</button>
                    
                    <!-- <a href="./index.php" type="SUBMIT" onclick="signIn()" class="btn-link">Login</a> -->

                    <div class="changeForm">
                        <p>Need an Account? <a href="" class="btn-log">Register</a></p>
                    </div>


                </form>

            </div>

            <?php

            // calling the footer funcion
            my_foot('HungrySumo');

            ?>
