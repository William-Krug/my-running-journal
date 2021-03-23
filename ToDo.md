# To Do:

## Setup

- [x] Run `npm install --save react-chartjs-2 chart.js` from the terminal
- [x] Run `npm install @material-ui/core` from the terminal
- [x] Run `npm install @material-ui/icons` from the terminal
- [x] Run `npm install sweetalert --save` from the terminal

## Home Page / Login Page

- [x] Create `<HomePage />` component
- [x] Import `<HomePage />` into `App.js`
  - [x] use protected routes
- [x] `<p>` for app description
- [x] `<img>` for app
- [x] `<button>Login</button>`
  - [x] recognize button click
  - [x] toggle on login form
  - [x] user logged in
  - [x] takes user to user's page
- [x] `<button>Register</button>`
  - [x] recognize button click
  - [x] rerouted to `<Registration />` form
- [x] documentation

## Registration Page

- [x] update `<RegisterForm />`
  - [x] add `first_name` input
  - [x] add `last_name` input
  - [x] add `birthdate` input
  - [x] add `gender` input
  - [x] add `city` input
  - [x] add `state` input
  - [x] add `country` input
- [x] `FETCH_GENDERS`
- [x] `FETCH_STATES`
- [x] verify all data makes it to saga
- [x] verify all data makes it to router
- [x] verify all data makes it to db
- [x] documentation

## User's Personal Page

### Log Run

- [x] Create log container
- [x] create `<LogRunForm />`
  - [x] capture date
  - [x] capture route name
  - [x] capture distance
  - [x] capture time
  - [x] capture notes
- [x] calculate speed
- [x] calculate pace
- [x] `<button>Log Run</button>`
  - [x] captures all data
  - [x] sends data to saga
  - [x] data received by router
  - [x] run saved to db
- [x] documentation

### Dashboard

- [x] Create dashboard container
- [x] create `<RunDetails />` (reusable)
  - [x] display date
  - [x] display route
  - [x] display distance
  - [x] display time
  - [x] display speed
  - [x] display pace
  - [x] display notes
- [x] show most recent run
  - [x] find most recent run (date)
  - [x] send information for `<RunDetails />`
- [x] show longest run
  - [x] function to find longest run (distance)
  - [x] send information for `<RunDetails />`
- [x] show fastest run
  - [x] function to find fastest run (speed)
  - [x] send information for `<RunDetails />`
- [x] documentation

### Metrics

- [x] create metrics container
- [x] create table
- [x] sql queries to get daily averages
- [x] sql queries to get weekly averages
- [x] sql queries to get monthly averages
- [x] sql queries to get yearly averages
- [x] Saga -> router -> saga -> reducer for ^^
- [x] populate table
- [x] create `<LineChart />` (reusable)
- [x] send `props` to `<LineChart />`
- [x] display `<LineChart />`
- [x] documentation

## Profile Page

- [x] create `<ProfilePage />` component
- [x] add link in `<Nav />` to access page
- [x] page returns logged in user's information
- [x] greeting message
- [x] `<button>Edit</button>`
  - [x] switches view to `<RegisterForm />`
  - [x] form populates with user's information
  - [x] for now says update vs. register
  - [x] PUT route to update profile
- [x] `<button>Delete Profile</button>`
  - [x] Sweet alert verification
  - [x] DELETE route to remove user from "users" table
  - [x] takes user to homepage/landing page
- [x] documentation

## Admin Page

### Community Dashboard

- [ ] Props to pass to chart:
  - [ ] `title={}`
  - [ ] `labels={}`
  - [ ] `values={'}`
- [ ] Age Breakdown
- [x] Gender Breakdown
- [x] State Breakdown
- [x] Country Breakdown
- [ ] Distance Breakdown
- [ ] Time Breakdown
- [ ] Speed Breakdown
- [ ] Pace Breakdown
- [ ] documentation
