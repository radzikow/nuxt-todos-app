<template>
  <li class="todo">
    <div>
      <h2 :class="{ done: todo.completed }">{{ todo.title }}</h2>
      <p>{{ todo.user }}</p>
    </div>
    <div @click="changeTodoStatus(todo)">
      <CheckIcon />
    </div>
  </li>
</template>

<script>
import CheckIcon from '~/components/icons/CheckIcon'

export default {
  name: 'CompleatedTodoItem',
  components: {
    CheckIcon
  },
  props: ['todo'],
  methods: {
    changeTodoStatus(todo) {
        this.$emit('change-todo-status', todo);
    }
  }
}
</script>

<style scoped lang="scss">
@import "~/assets/scss/_variables.scss";

.todo {
  padding: 5px;
  margin: 7px 3px 7px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: $background-light-gray;
  border-radius: 4px;
  padding: 12px 10px;

  @media only screen and (min-width: 768px) {
    margin: 7px 3px 7px 7px;
  }
  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
  
  h2 {
    font-size: 16px;
    color: $text-dark-gray;
    margin-bottom: 2px;
  }

  p {
    color: $text-light-gray;
    margin-bottom: 0;
    font-size: 13px;
  }

  svg {
    cursor: pointer;
    display: inline-block;
    width: 26px;
    height: 26px;
    color: $primary-green;
  }
}
</style>
