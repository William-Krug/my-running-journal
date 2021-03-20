const userReducer = (
  state = {
    id: 0,
    first_name: '',
    last_name: '',
    birthdate: '',
    gender: 0,
    city: '',
    state: 0,
    country: '',
    username: '',
    password: '',
    authLevel: '',
  },
  action
) => {
  switch (action.type) {
    case 'SET_USER':
      return action.payload;
    case 'UNSET_USER':
      return {
        id: 0,
        first_name: '',
        last_name: '',
        birthdate: '',
        gender: 0,
        city: '',
        state: 0,
        country: '',
        username: '',
        password: '',
        authLevel: '',
      };
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default userReducer;
