import { createReducer } from "@reduxjs/toolkit";

// Define action types
const GET_USER_REQUEST = "GET_USER_REQUEST";
const GET_USER_SUCCESS = "GET_USER_SUCCESS";
const GET_USER_FAILURE = "GET_USER_FAILURE";
const CLEAR_ERRORS = "CLEAR_ERRORS";

const LOGIN_REQUEST = "LOGIN_REQUEST";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAILURE = "LOGIN_FAILURE";
const LOAD_USER_REQUEST = "LOAD_USER_REQUEST";
const LOAD_USER_SUCCESS = "LOAD_USER_SUCCESS";
const LOAD_USER_FAILURE = "LOAD_USER_FAILURE";
const LOGOUT_REQUEST = "LOGOUT_REQUEST";
const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
const LOGOUT_FAILURE = "LOGOUT_FAILURE";
const CLEAR_MESSAGE = "CLEAR_MESSAGE";

const UPDATE_USER_REQUEST = "UPDATE_USER_REQUEST";
const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
const UPDATE_USER_FAILURE = "UPDATE_USER_FAILURE";
const ADD_TIMELINE_REQUEST = "ADD_TIMELINE_REQUEST";
const ADD_TIMELINE_SUCCESS = "ADD_TIMELINE_SUCCESS";
const ADD_TIMELINE_FAILURE = "ADD_TIMELINE_FAILURE";
const DELETE_TIMELINE_REQUEST = "DELETE_TIMELINE_REQUEST";
const DELETE_TIMELINE_SUCCESS = "DELETE_TIMELINE_SUCCESS";
const DELETE_TIMELINE_FAILURE = "DELETE_TIMELINE_FAILURE";
const ADD_YOUTUBE_REQUEST = "ADD_YOUTUBE_REQUEST";
const ADD_YOUTUBE_SUCCESS = "ADD_YOUTUBE_SUCCESS";
const ADD_YOUTUBE_FAILURE = "ADD_YOUTUBE_FAILURE";
const DELETE_YOUTUBE_REQUEST = "DELETE_YOUTUBE_REQUEST";
const DELETE_YOUTUBE_SUCCESS = "DELETE_YOUTUBE_SUCCESS";
const DELETE_YOUTUBE_FAILURE = "DELETE_YOUTUBE_FAILURE";
const ADD_PROJECT_REQUEST = "ADD_PROJECT_REQUEST";
const ADD_PROJECT_SUCCESS = "ADD_PROJECT_SUCCESS";
const ADD_PROJECT_FAILURE = "ADD_PROJECT_FAILURE";
const DELETE_PROJECT_REQUEST = "DELETE_PROJECT_REQUEST";
const DELETE_PROJECT_SUCCESS = "DELETE_PROJECT_SUCCESS";
const DELETE_PROJECT_FAILURE = "DELETE_PROJECT_FAILURE";
const CONTACT_US_REQUEST = "CONTACT_US_REQUEST";
const CONTACT_US_SUCCESS = "CONTACT_US_SUCCESS";
const CONTACT_US_FAILURE = "CONTACT_US_FAILURE";

const initialState = {
  loading: true,
  isAuthenticated: false,
  user: null,
  error: null,
  message: null,
};

export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(GET_USER_REQUEST, (state) => {
      state.loading = true;
    })
    .addCase(GET_USER_SUCCESS, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    })
    .addCase(GET_USER_FAILURE, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(CLEAR_ERRORS, (state) => {
      state.error = null;
    });
});

export const loginReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(LOGIN_REQUEST, (state) => {
      state.loading = true;
      state.isAuthenticated = false;
    })
    .addCase(LOGIN_SUCCESS, (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.message = action.payload;
    })
    .addCase(LOGIN_FAILURE, (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    })
    .addCase(LOAD_USER_REQUEST, (state) => {
      state.loading = true;
      state.isAuthenticated = false;
    })
    .addCase(LOAD_USER_SUCCESS, (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    })
    .addCase(LOAD_USER_FAILURE, (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    })
    .addCase(LOGOUT_REQUEST, (state) => {
      state.loading = true;
    })
    .addCase(LOGOUT_SUCCESS, (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.message = action.payload;
    })
    .addCase(LOGOUT_FAILURE, (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.error = action.payload;
    })
    .addCase(CLEAR_MESSAGE, (state) => {
      state.message = null;
    });
});

export const updateReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(UPDATE_USER_REQUEST, (state) => {
      state.loading = true;
    })
    .addCase(UPDATE_USER_SUCCESS, (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase(UPDATE_USER_FAILURE, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(ADD_TIMELINE_REQUEST, (state) => {
      state.loading = true;
    })
    .addCase(ADD_TIMELINE_SUCCESS, (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase(ADD_TIMELINE_FAILURE, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(DELETE_TIMELINE_REQUEST, (state) => {
      state.loading = true;
    })
    .addCase(DELETE_TIMELINE_SUCCESS, (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase(DELETE_TIMELINE_FAILURE, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(ADD_YOUTUBE_REQUEST, (state) => {
      state.loading = true;
    })
    .addCase(ADD_YOUTUBE_SUCCESS, (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase(ADD_YOUTUBE_FAILURE, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(DELETE_YOUTUBE_REQUEST, (state) => {
      state.loading = true;
    })
    .addCase(DELETE_YOUTUBE_SUCCESS, (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase(DELETE_YOUTUBE_FAILURE, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(ADD_PROJECT_REQUEST, (state) => {
      state.loading = true;
    })
    .addCase(ADD_PROJECT_SUCCESS, (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase(ADD_PROJECT_FAILURE, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(DELETE_PROJECT_REQUEST, (state) => {
      state.loading = true;
    })
    .addCase(DELETE_PROJECT_SUCCESS, (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase(DELETE_PROJECT_FAILURE, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(CONTACT_US_REQUEST, (state) => {
      state.loading = true;
    })
    .addCase(CONTACT_US_SUCCESS, (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase(CONTACT_US_FAILURE, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(CLEAR_ERRORS, (state) => {
      state.error = null;
    })
    .addCase(CLEAR_MESSAGE, (state) => {
      state.message = null;
    });
});
