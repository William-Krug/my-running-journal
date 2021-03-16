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

- [ ] Create log container
- [ ] create `<LogRunForm />`
  - [ ] capture date
  - [ ] capture route name
  - [ ] capture distance
  - [ ] capture time
  - [ ] capture notes
- [ ] calculate speed
- [ ] calculate pace
- [ ] `<button>Log Run</button>`
  - [ ] captures all data
  - [ ] sends data to saga
  - [ ] data received by router
  - [ ] run saved to db
- [ ] documentation

### Dashboard

- [ ] documentation

### Metrics

- [ ] documentation

## Profile Page

- [ ] documentation

## Admin Page

- [ ] documentation
