# Our Precious Pond

Our Precious Pond is a MERN stack application all about the almighty duck. With a focus on conservation, this application informs the user about their duck alter-ego upon completion of a set of questions to (lightly) gauge the user's personality. Following this is information about the calculated duck alter-ego species, as well as the opportunity to view other ducks within the database serving the app. Duck-related conservation resources are also available on the app.

The conscious decision has been made to ensure that all ducks featured in the app are of some level of concern in terms of conservation - this felt like an important angle to the project and creates a powerful and compelling contrast of emotion to ultimately score ducks and duck conservation issues a more prominent place in people's hearts.

In true MERN style, this app is built out on the front with React (and some Redux for good measure), the database is handled by MongoDB, and the back end is in charge of Node and Express.

I make use of local React state when the user is entering their answers to questions, which are then dispatched to a Redux store on submission of the quiz. I then use a reducer to compare the personality scores of ducks within the database to the newly generated scores from the user's answers. This reducer creates an object with the names of ducks and their count in terms of how often their score for a characteristic  

This was a really stimulating build, and featured me reminding myself how to use React and Redux, as well as learning new features such as hooks within React. Having less experience with back end builds also meant this was a challenging area for me, but I really enjoyed the process. Many a bug, as is to be expected, but it was all worth it in the end. For now I have a tool to spread my love of ducks!

Some screenshots are attached below so you can get a flavour of the app.

** at time of writing, I am yet to get the deployment to the web sorted so don't expect much yet, soon to be complete **

You can find Our Precious Pond live [here](https://vixhez.github.io/best-foot-forward).


## Run Our Precious Pond locally

In the terminal...

1. Navigate to the location that you would like the project to be saved in

2. Run `git clone {git@github.com:vixhez/our-precious-pond.git}`

3. Run `npm install` to install all required packages to your machine

4. Start the app by running `npm start`

5. Head to (http://localhost:3000/) to view the app

![Quiz](https://github.com/vixhez/our-precious-pond/blob/main/app-screenshot-quiz.png)
![Alter-ego](https://github.com/vixhez/our-precious-pond/blob/main/app-screenshot-alterego.png)
![Alter-ego](https://github.com/vixhez/our-precious-pond/blob/main/app-screenshot-alterego-2.png)
![Alter-ego](https://github.com/vixhez/our-precious-pond/blob/main/app-screenshot-alterego-3.png)
![Duck directory](https://github.com/vixhez/our-precious-pond/blob/main/app-screenshot-directory.png)
