<template>
  <nav class="nav-wrapper">
    <div class="logo-wrapper">
      <NuxtLink to="/">
        <img src="https://nuxtjs.org/logos/nuxt.svg" alt="NuxtJS Logo">
      </NuxtLink>
    </div>
    <div class="links-wrapper">
      <ul>
        <li class="link">
          <NuxtLink to="/contact">
            <MailIcon />
          </NuxtLink>
        </li>
        <li class="link">
          <NuxtLink to="/todos">
            <CollectionIcon />
          </NuxtLink>
        </li>
        <li class="link">
          <NuxtLink to="/users">
            <UserIcon />
          </NuxtLink>
        </li>
        <li class="link">
          <NuxtLink to="/schedule">
            <CalendarIcon />
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import MailIcon from '~/components/icons/MailIcon'
import UserIcon from '~/components/icons/UserIcon'
import CollectionIcon from '~/components/icons/CollectionIcon'
import CalendarIcon from '~/components/icons/CalendarIcon'

export default {
  name: 'Navigation',
  components: {
    MailIcon,
    UserIcon,
    CollectionIcon,
    CalendarIcon
  }
}
</script>

<style scoped lang="scss">
@import "~/assets/scss/_variables.scss";

.nav-wrapper {
  height: 100vh;
  top: 0;
  padding: 0;
  width: 90px;
  background-color: $background-light-gray;
  color: #bbbec4;
  position: sticky;
  position: -webkit-sticky;
  z-index: 100;

  .logo-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90px;

    img  {
      display: inline-block;
      height: 30px;
      width: auto;
    }
  }

  .links-wrapper {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: calc(100vh - 90px);
    padding-bottom: 90px;

    ul {
      list-style-type: none;
      padding: 0;
      margin: auto;
      display: flex;
      flex-direction: column;
      align-items: center;

      .link {
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 70px;
        box-sizing: border-box;
        margin-bottom: 8px;
        height: 40px;

        a {
          width: 86%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 3px;
          transition: all .2s;

          @media only screen and (min-width: 768px) {
            width: 100%;
          }

          svg {
            display: inline-block;
            height: 24px;
            width: 24px;
            color: $text-dark-gray;
          }

          &.nuxt-link-active {
              background-color: $background-dark-gray;

            svg {
              transition: all .2s;
              color: $primary-green;
            }
          }
        }
      }
    }
  }
}
</style>
