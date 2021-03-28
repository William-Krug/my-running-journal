## Production Build

Before pushing to Heroku, run `npm run build` in terminal. This will create a build folder that contains the code Heroku will be pointed at. You can test this build by typing `npm start`. Keep in mind that `npm start` will let you preview the production build but will **not** auto update.

- Start postgres if not running already by using `brew services start postgresql`
- Run `npm start`
- Navigate to `localhost:5000`

## Lay of the Land

There are a few videos linked below that show a walkthrough the client and sever setup to help acclimatize to the boilerplate. Please take some time to watch the videos in order to get a better understanding of what the boilerplate is like.

- [Initial Set](https://vimeo.com/453297271)
- [Server Walkthrough](https://vimeo.com/453297212)
- [Client Walkthrough](https://vimeo.com/453297124)

Directory Structure:

- `src/` contains the React application
- `public/` contains static assets for the client-side
- `build/` after you build the project, contains the transpiled code from `src/` and `public/` that will be viewed on the production site
- `server/` contains the Express App

This code is also heavily commented. We recommend reading through the comments, getting a lay of the land, and becoming comfortable with how the code works before you start making too many changes. If you're wondering where to start, consider reading through component file comments in the following order:

- src/components
  - App/App
  - Footer/Footer
  - Nav/Nav
  - AboutPage/AboutPage
  - InfoPage/InfoPage
  - UserPage/UserPage
  - LoginPage/LoginPage
  - RegisterPage/RegisterPage
  - LogOutButton/LogOutButton
  - ProtectedRoute/ProtectedRoute

## Deployment

1. Create a new Heroku project
1. Link the Heroku project to the project GitHub Repo
1. Create an Heroku Postgres database
1. Connect to the Heroku Postgres database from Postico
1. Create the necessary tables
1. Add an environment variable for `SERVER_SESSION_SECRET` with a nice random string for security
1. In the deploy section, select manual deploy

## Update Documentation

Customize this ReadMe and the code comments in this project to read less like a starter repo and more like a project. Here is an example: https://gist.github.com/PurpleBooth/109311bb0361f32d87a2

(View Raw will give you the markdown that you can copy to your repos!)

![MIT LICENSE](https://img.shields.io/github/license/William-Krug/my-running-journal.svg?style=flat-square)
![REPO SIZE](https://img.shields.io/github/repo-size/William-Krug/my-running-journal.svg?style=flat-square)
![TOP_LANGUAGE](https://img.shields.io/github/languages/top/William-Krug/my-running-journal.svg?style=flat-square)
![FORKS](https://img.shields.io/github/forks/William-Krug/my-running-journal.svg?style=social)

# My Running Journal

## Description

_Duration: 2 Week Sprint_

Directly above this is how long it took you to develop the project. Your project description goes here. What problem did you solve? How did you solve it?

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam at massa in faucibus. Etiam volutpat, risus non mollis convallis, velit nisi pulvinar mi, eu faucibus orci nisi eget nibh. Integer a velit pretium, volutpat arcu eleifend, fringilla elit. Cras erat sapien, convallis venenatis tellus vitae, feugiat dictum felis.

Suspendisse euismod volutpat aliquet. Maecenas vulputate mauris in pellentesque facilisis. Phasellus varius malesuada semper. Cras sollicitudin diam mollis maximus aliquam.

To see the fully functional site, please visit: [DEPLOYED VERSION OF APP](www.heroku.com)

## Screen Shot

Include one or two screen shots of your project here (optional). Remove if unused.

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Nodemon](https://nodemon.io/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Postico](https://eggerapps.at/postico/)
- [Material-UI](https://material-ui.com/)
- [React-Chartjs-2](https://github.com/reactchartjs/react-chartjs-2)
- [Moment.js](https://momentjs.com/)
- [Moment-Duration-Format](https://github.com/jsmreese/moment-duration-format)

## Installation

1. Create a database named `my_running_journal`,
2. The queries in the `database.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries,
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Usage

How does someone use this application? Tell a user story here.

1. xxx
2. xxx
3. xxx
4. xxx
5. xxx
6. xxx

## Built With

- Node.js
- Express.js
- React
- Redux
- Nodemon
- PostrgeSQL
- Postico
- Material-UI
- React-Chartjs-2
- Moment.js
- Moment-Duration-Format

## License

[MIT](https://choosealicense.com/licenses/mit/)

Copyright (c) [2021] [William Krug]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Acknowledgement

Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. My instructors, Edan Schwartz & Chad Smith, and the Cullen cohort for their support and encouragement throughout this intense program. Lastly, and most importantly, a huge thank you to my wife and kids for their understanding and willingness to share my time.

## Support

If you have suggestions or issues, please email me at [william.p.krug@gmail.com](william.p.krug@gmail.com)
