![MIT LICENSE](https://img.shields.io/github/license/William-Krug/my-running-journal.svg?style=flat-square)
![REPO SIZE](https://img.shields.io/github/repo-size/William-Krug/my-running-journal.svg?style=flat-square)
![TOP_LANGUAGE](https://img.shields.io/github/languages/top/William-Krug/my-running-journal.svg?style=flat-square)
![FORKS](https://img.shields.io/github/forks/William-Krug/my-running-journal.svg?style=social)

# My Running Journal

## Description

_Duration: 2 Week Sprint_

My Running Journal was created to digitally track user runs, and provide metrics on user progress so runner feel more confident and able to tackle their next race.  This full stack app was built with React-Redux front end and a Node.js / Exress.js server.

To see the fully functional site, please visit: [My Running Journal](https://my-running-journal.herokuapp.com/#/home)

## Screen Shot

![Landing Page](https://github.com/William-Krug/my-running-journal/blob/master/src/components/images/my_running_journal_home.png)
![Log Run](https://github.com/William-Krug/my-running-journal/blob/master/src/components/images/my_running_journal_logRun.png)
![Metrics](https://github.com/William-Krug/my-running-journal/blob/master/src/components/images/my_running_journal_metrics.png)

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

1. Current Users use the **Login** functionality from the laning page to access the app.
2. New Users use the **Register** functionality from the landing page to sign up for use.
3. On the User's personal page, a user can:
  - Log a run.
  - View their dashboard of Most Recent Run, Longest Run, and Fastest Run.
  - Review average metrics (broken down daily, weekly, monthly and yearly) on distance, time, speed and pacing.
  - View a timeline chart of all logged runs.  Any plot on the chart can be clicked on to see the details for that specific run.
4. Users have the ability to review and edit their profile by cliking the **Profile** link in the navigation bar.
5. Users also have the ability to delete their account, and all associated runs, upon their discretion from the **Profile** link.
6. Employee and Admin users can access the Admin Page from the **Admin** link in the navigation bar.
7. Inside the Admin Page, community demographics are broken down in pie chart form showing:
  - Age breakdown
  - Gender breakdown
  - State breakdown
  - Distance
  - Time
  - Speed
  - Pace
8. The Admin Page also provides average metrics (broken down daily, weekly, monthly and yearly) on distance, time, speed and pacing for the entire user base.

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
