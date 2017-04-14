<template>
  <div class="navbar-inner">
  <ul>
  <li><a href="javascript:void(0)" class="logo"><img src="/img/logo.png" alt=""></a></li>
  <li><i class="sidebar-toggle fa fa-navicon" @click="sidebarToggle"></i></li>
  <li><i class="sidebar-hidden fa fa-angle-right" @click="sidebarHidden"></i></li>
  </ul>
  </div>
</template>
<script>

export default {
  name: 'header',
  methods: {
    click () {
      // do nothing
    },
    sidebarToggle (e) {
      e.preventDefault()
      document.body.classList.toggle('sidebar-expanded')
    },
    sidebarHidden (e) {
      e.preventDefault()
      document.body.classList.toggle('sidebar-hidden')
    }
  }
}
</script>
