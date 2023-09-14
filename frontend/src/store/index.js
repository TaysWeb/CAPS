import { createStore } from 'vuex'
import  axios from 'axios'
const apiURL = "http://localhost:700/" ;
export default createStore({
  state: {
    users: null,
    user: null,
    Movies: null,
    Movie: null,
    Spinner: null,
    token: null,
    selectedMovie: null,
    msg: null,
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setUser(state, user) {
      state.user = user;
    },
    setMovies(state, Movies) {
      state.Movies = Movies;     
    },
    setSelectedMovie(state,selectedMovie ) {
      state.selectedMovie = selectedMovie ;
    },
    setMovie(state, Movie) {
      state.Movie = Movie;
    },
    setSpinner(state, value) {
      state.Spinner = value;
    },
    setToken(state, token) {
      state.token = token;
    },
    setMsg(state, msg) {
      state.msg = msg;
    },
  },
  actions: {
    async fetchUsers(context) {
      try {
        const { data } = await axios.get(`${apiURL}users`);
        context.commit("setUsers", data.results);
      } catch (e) {
        context.commit("setMsg", "An error occurred please hold");
      }
    },
    async fetchUser(context) {
      try {
        const { data } = await axios.get(`${apiURL}user/${req.params.id}`);
        context.commit("setUser", data.results);
      } catch (e) {
        context.commit("setMsg", "An error occurred please hold");
      }
    },
    async Register(context) {
      try{
        const { data } = await axios.post(`${apiURL}register`)
        context.commit("setUser", data.results);
      } catch (e) {
        context.commit("setMsg", "an error occurred please hold");
      }
    },
    async Login(context) {
      try{
        const { data } = await axios.post(`${apiURL}login`)
        context.commit("setUser", data.results);
      } catch (e) {
        context.commit("setMsg", "an error occurred please hold");
      }
    },
    async updateUser(context) {
      try{
        const { data } = await axios.patch(`${apiURL}user/${req.params.id}`)
        context.commit("setUser", data.results);
      } catch (e) {
        context.commit("setMsg", "an error occurred please Hold");
      }
    },
    async deleteUser(context) {
      try{
        const { data } = await axios.delete(`${apiURL}user/${req.params.id}`)
        context.commit("setUser", data.results);
      } catch (e) {
        context.commit("setMsg", "an error occurred please Hold");
      }
    },
    async fetchMovies(context) {
      try{
        let Movies = await (await fetch("http://localhost:700/getAll")).json()
        if (Movies) {
          context.commit ("setMovies", Movies)
        } else {
          alert("error")
        }
      }
      catch(e) {
        console.log(error)
      }
    },

  async updateProduct(context, payload) {
    console.log(payload)
    try {
      const res = await axios.patch(`${apiURL}Movie/${payload.product_id}`, payload);
      const { msg, err } = await res.data;
      console.log(msg, err);
      if (err) {
        console.log("An error occurred: ", err);
        context.commit("setMsg", err);
      }
      if (msg) {
        context.dispatch("fetchMovies")
        context.commit("setMovie", msg);
        context.commit("setMsg", "Successfully updated product.");
      }
    } catch (e) {
      context.commit("setMsg", e);
    }
  },
  async addProduct(context, payload) {                
    console.log("REACHED");
      try {
        const { res } = await axios.post(`${apiURL}Movie`, payload);
        const { results, err } = await res.data;
        if (results) {
          context.commit("set", results[0]);
          context.commit("setSpinner", false);
        } if(!results){
          console.log("An error occurred: ", err);
        }else {
          context.commit("setMsg", msg);
        }
      } catch (e) {
        context.commit("setMsg", "an error occurred");
      }
    },
  }

})
