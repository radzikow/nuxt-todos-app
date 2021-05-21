<template>
  <div class="content-wrapper container-fluid">
    <div class="row">
      <div class="col-12 col-sm-10 offset-sm-1 col-xl-8 offset-xl-2">
        <h1 class="title">Zadania</h1>
        <div class="content">
          <div class="todos-column uncompleted-todos">
            <UncompletedTodosList v-on:change-todo-status="changeTodoStatus" :todos="uncompletedTodos" />
          </div>
          <div class="todos-column completed-todos">
            <CompletedTodosList v-on:change-todo-status="changeTodoStatus" :todos="completedTodos" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
import  UncompletedTodosList from '~/components/UncompletedTodosList'
import  CompletedTodosList from '~/components/CompletedTodosList'

export default {
  name: 'Todos',
  components: {
    UncompletedTodosList,
    CompletedTodosList
  },
  head() {
    return {
      title: "Todos",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "List of todos"
        }
      ]
    }
  },
  computed: {
    todos() {
      return this.allTodos()
    },
    users() {
      return this.allUsers()
    },
    todosWithNames() {
      let todosList = []
      this.allTodos().forEach(todo => {
        this.allUsers().forEach(user => {
          if (todo.userId === user.id) {
            let singleUser = {
              userId: todo.userId,
              id: todo.id,
              title: todo.title,
              completed: todo.completed,
              user: user.name
            }
            todosList.push(singleUser)
          }
        })
      })
      return todosList
    },
    completedTodos() {
      return this.todosWithNames.filter(todo => {
        return todo.completed === true
      })
    },
    uncompletedTodos() {
      return this.todosWithNames.filter(todo => {
        return todo.completed === false
      })
    }
  },
  methods: {
    ...mapActions({
      fetchTodos: 'todos/fetchTodos',
      updateTodo: 'todos/updateTodo',
      fetchUsers: 'users/fetchUsers'
    }),
    ...mapGetters({
      allTodos: 'todos/allTodos',
      allUsers: 'users/allUsers'
    }),
    ...mapMutations({
      setTodos: 'todos/setTodos'
    }),
    changeTodoStatus(todo) {
      const updatedTodo = {
        userId: todo.userId,
        id: todo.id,
        title: todo.title,
        completed: !todo.completed
      }
      this.updateTodo(updatedTodo)
    }
  },
  created() {
    this.fetchTodos(),
    this.fetchUsers()
  }
}
</script>

<style scoped lang="scss">
  .todos-column {
    flex: 6;
  }
</style>
