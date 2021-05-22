<template>
  <div class="list-wrapper">
    <p class="list-title">Do zrobienia</p>
    <ul class="todos scroller">
      <UncompleatedTodoItem 
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo" />
    </ul>
  </div>
</template>

<script>
import CheckIcon from '~/components/icons/CheckIcon'

export default {
  name: 'UncompletedTodosList',
  components: {
    CheckIcon
  },
  props: ['todos']
}
</script>

<style lang="scss">
@import "~/assets/scss/_variables.scss";

.list-wrapper {  
  .list-title {
    margin-bottom: 6px;
    color: $text-light-gray;
    font-weight: lighter;
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
