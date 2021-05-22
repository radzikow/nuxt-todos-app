import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/users'

export const state = () => ({
  list: []
})

export const getters = {
  allUsers: state => state.list
}

export const actions = {
  async fetchUsers({ commit }) {
    const res = await axios.get(url)
    commit('setUsers', res.data)
  }
}

export const mutations = {
  setUsers: (state, users) => state.list = users
}
