# HungrySumo
 Coursework 1 - Web Applications and Databases
 
 You can view it at https://hungrysumo.herokuapp.com/
 
 Description
In Hungry Sumo you play as a fat man, and your main goal is to eat your way to victory. You have four lives at your disposal. The user can move the fat man up, down, left and right using the arrow keys on the keyboard. The game starts with the fat man being spawned on the mat. Fresh and rotten food sprites and pufferfish randomly spawn and move in straight lines across the screen. To acquire more score, the user must consume fresh foods—consumption of rotten food results in score loss. The user must avoid the deadly pufferfish at all costs as upon colliding with the fish the user loses a life. The random spawning and fast movement of the food and the pufferfish sprites make the game quite challenging thus always keeping the user indulged and wanting to score more. 
Hungry Sumo is an endless game. To quit the game user can just let the sumo die or just sign out. 
The user starts from score: 0, if the score goes any lower than that, upon eating rotten food, the user loses a life.

Item	Description
![image](https://user-images.githubusercontent.com/74849680/153723571-6e4d7a0c-5bd5-48c5-be78-e0ad57df4967.png)

![image](https://user-images.githubusercontent.com/74849680/153723580-879dd906-162a-4c81-8128-991608373606.png)


 Sample Image:
 ![image](https://user-images.githubusercontent.com/74849680/153723236-0b7b324e-5665-4385-8a87-000ed44f9157.png)

The Website

Features:
•	Has a minimalistic design that is easy to navigate.
•	Has a navigation bar which allows user to navigate between different pages.
•	Has a footer which contains the contact information and the social media handles.
•	Has many pages where the user can learn how to play, see the top scores, and play the game.
•	The website allows users to create an account, sign in, to play the game.
•	The website stores user information in the localStorage and the information of the currently logged in user in the sessionStorage.
•	The website uses the stored information to display a leaderboard which shows the top scores of users sorted by the amount of score.

The Index Page:

![image](https://user-images.githubusercontent.com/74849680/153723273-0d8b6c32-77c6-4d55-922d-23d3ed247519.png)

![image](https://user-images.githubusercontent.com/74849680/153723282-878d3618-f01d-4afd-8d74-c9daea6772d2.png)

![image](https://user-images.githubusercontent.com/74849680/153723289-770e4dd8-3932-48e1-b153-5ff8a06e1e83.png)

The homepage consists of the Registration and the Login forms along with a YouTube video that shows the game in action (check Figure 1 and 2). The registration form allows user to create an account. The page will prompt user to fill in the fields if left empty or filled wrong. Validations included make sure that each user has a unique username.
When logged in the registration and login forms are no longer available to the user and a greeting message with the logged in user’s username appears in the navbar along with the Logout button and the game button (check Figure 3). Upon clicking on the Game button, the user will be taken to the game page where he/she can play the game, upon clicking on the home button the user will be able to quit the game. To play the game again the user can click on the game button in the navbar to restart it. Upon clicking on the Logout the button the user is logged out. The homepage has a link to the "how to play" page that teaches the user how to play the game and a link to the "leaderboard" page that shows all the high scores. The footer at the bottom of the page shows my contact information and my social media handles.

The Leaderboard page:

![image](https://user-images.githubusercontent.com/74849680/153723315-8a6ceba7-de04-49dc-af81-d819f367ced7.png)

The Leaderboard page shows a table where the users with the highest scores are listed according to their high score. User with the highest score is appears on top on the table whereas the one’s with the lower scores appear lower.

How To Play page:

![image](https://user-images.githubusercontent.com/74849680/153723331-c5e11347-a062-46bd-b74f-2070a494a5dd.png)

The How to Play page consists of all the information about controls and other instructions required for the user to understand the game's rules. The page also contains a YouTube video that shows the basic instructions.

Game page:

![image](https://user-images.githubusercontent.com/74849680/153723349-e97d612c-c1bb-4eab-b2a6-e02eabfaa909.png)

This page consists of the game itself and the score count along with the player lives. On this page the user can start playing the game just by using the given control keys. When the user runs out of lives the game stops and the user score is recorded and stored. The recorded score if higher than the previously recorded score is then stored displayed in the leaderboard table along with the username.

Difficulties:

While working on the coursework I came across many problems with animations and figuring out how to make and sort the leaderboard. Password validation was another issue which required JavaScript validation as it wasn’t working with HTML5 validation. I had initially planned on adding a YouTube video on one or two of my pages, later I had problems removing the video controls and adding auto play to the embed video. Later I was able to remove the video controls using “control=0” but unfortunately I couldn’t enable auto play as most of the chromium based browsers don’t allow that. Most of these were successfully resolved by doing thorough research on the web. While doing the initial research I also gained a lot of knowledge about JavaScript game libraries like Kaboom.js which I really wanted to use for this coursework, but I didn’t have enough time to completely figure that out. Also I wasn’t able to fix an issue where the upon opening how to play game is accessible to users even if they’re not logged in.


Conclusion:

At the end of the day, the coursework was quite helpful as it allowed me to develop a front-end game with relative ease. While working on it I learned my way around HTML, CSS, PHP, and JavaScript. I also came across useful JavaScript game libraries like Kaboom.js and Three.js which I’ll try to use for my future projects.


 
 
The project can be viewed at https://hungrysumo.herokuapp.com/
