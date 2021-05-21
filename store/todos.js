import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/todos'
const usersUrl = 'https://jsonplaceholder.typicode.com/users'

export const state = () => ({
  list: []
})

export const getters = {
  allTodos: state => state.list
}

export const actions = {
  // Get all todos
  async fetchTodos({ commit }) {
    try {
      const res = await axios.get(url)
      commit('setTodos', res.data)
    } catch (err) {
      console.log(err)
    }
  },
  // Update todo's status
  async updateTodo({ commit }, updatedTodo) {
    try {
      const res = await axios.put(url + '/' + updatedTodo.id, updatedTodo)
      commit('changeTodo', res.data)
    } catch (err) {
      console.log(err)
    }
  }
}

export const mutations = {
  setTodos: (state, todos) => state.list = todos,
  changeTodo: (state, updatedTodo) => {
    const index = state.list.findIndex(todo => todo.id == updatedTodo.id)
    if (index !== -1) {
      state.list.splice(index, 1, updatedTodo)
    }
  }
}
