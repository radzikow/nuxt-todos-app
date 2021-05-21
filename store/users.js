import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/users'

export const state = () => ({
  list: [],
  selectedUser: []
})

export const getters = {
  allUsers: state => state.list,
  selectedUser: state => state.selectedUser
}

export const actions = {
  // Get all users
  async fetchUsers({ commit }) {
    const res = await axios.get(url + '?limit=100')
    commit('setUsers', res.data)
  },
  // Get user by id
  async getUserById({ commit }, id) {
    const res = await axios.get(url + '/' + id)
    console.log(res.data)
    commit('getUser', res.data)
  }
}

export const mutations = {
  setUsers: (state, users) => state.list = users,
  getUser: (state, user) => state.selectedUser = user
}
