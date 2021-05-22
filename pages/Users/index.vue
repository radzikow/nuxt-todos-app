<template>
  <div class="content-wrapper container-fluid">
    <div class="row">
      <div class="col-12 col-sm-10 offset-sm-1 col-xl-8 offset-xl-2">
        <h1 class="title">Użytkownicy</h1>
        <div class="users-content">
          <div class="list-wrapper">
            <p class="list-title">Dane użytkowników</p>
            <ul class="users">
              <li
                class="user"
                v-for="user in users"
                :key="user.id"
              >
                <div class="user-wrapper">
                  <div class="user-name">
                    <h2>{{ user.name }}</h2>
                    <p>Email: {{ user.email }}</p>
                    <p>Telefon: {{ user.phone }}</p>
                  </div>
                  <div class="user-id-icon">
                    <IdentificationIcon />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
import IdentificationIcon from '~/components/icons/IdentificationIcon'

export default {
  head() {
    return {
      title: 'Users',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Users subpage in todos app'
        }
      ]
    }
  },
  components: {
    IdentificationIcon
  },
  computed: {
    users() {
      return this.allUsers()
    }
  },
  methods: {
    ...mapActions({
      fetchUsers: 'users/fetchUsers'
    }),
    ...mapGetters({
      allUsers: 'users/allUsers'
    }),
    ...mapMutations({
      setUsers: 'users/setUsers'
    })
  },
  created() {
    this.fetchUsers()    
  }
}
</script>

<style scoped lang="scss">
@import "~/assets/scss/_variables.scss";

.users-content {
  display: block;
  height: 85vh;

  @media only screen and (min-width: 768px) {
    display: flex;
    height: 460px;
  }
  .list-wrapper {
    width: 100%;

    .list-title {
      margin-bottom: 6px;
      color: $text-light-gray;
      font-weight: lighter;
    }

    .users {
      list-style-type: none;
      padding: 0;
      overflow-y: auto;
      max-height: 82vh;

      @media only screen and (min-width: 768px) {
        max-height: 300px;
      }

      &::-webkit-scrollbar {
        width: 6px;
      }
      
      &::-webkit-scrollbar-thumb {
        background-color: $primary-green;
        border-radius: 25px;
      }

      .user {
        padding: 5px;
        margin: 7px 3px 7px 0px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: $background-light-gray;
        border-radius: 4px;
        padding: 12px 10px;
        
        &:first-child {
          margin-top: 0;
        }

        &:last-child {
          margin-bottom: 0;
        }
        
        .user-wrapper {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;

          h2 {
            font-size: 17px;
            color: $text-dark-gray;
            margin-bottom: 1px;
          }

          p {
            color: $text-light-gray;
            margin-bottom: 0;
            font-size: 13px;
            opacity: .8;
          }

          .user-id-icon {
            svg {
              width: 30px;
              color: $text-light-gray;
              cursor: pointer;
              opacity: .7;
            }
          }
        }
      }
    }
  }
}
</style>
