<template>
  <div class="list-wrapper">
    <p class="list-title">Gotowe</p>
    <ul class="todos scroller">
      <CompleatedTodoItem 
        v-for="todo in todos"
        :key="todo.id"
        v-on:change-todo-status="changeTodoStatus"
        :todo="todo"
      />
    </ul>
  </div>
</template>

<script>
import CheckIcon from '~/components/icons/CheckIcon'
import CompleatedTodoItem from '~/components/CompleatedTodoItem'

export default {
  name: 'CompletedTodosList',
  components: {
    CheckIcon,
    CompleatedTodoItem
  },
  props: ['todos'],
  methods: {
    changeTodoStatus(todo) {
        this.$emit('change-todo-status', todo)
    }
  }
}
</script>

<style scoped lang="scss">
@import "~/assets/scss/_variables.scss";

.list-wrapper {
  .list-title {
    margin-bottom: 6px;
    color: $text-light-gray;
    font-weight: lighter;
    margin-left: 7px;
  }

  .todos {
    list-style-type: none;
    padding: 0;
    overflow-y: auto;
    max-height: 450px;

    @media only screen and (min-width: 768px) {
      max-height: 300px;
    }
  }

  .scroller {
    overflow-y: scroll;
    scrollbar-color: $primary-green transparent;
    scrollbar-width: 6px;
  }

  .scroller::-webkit-scrollbar {
    width: 6px;
  }
  
  .scroller::-webkit-scrollbar-thumb {
    background-color: $primary-green;
    border-radius: 25px;
  }
}
</style>
