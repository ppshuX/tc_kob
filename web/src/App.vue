<template>
  <NavBar />
  <router-view/>
</template>

<script>
import NavBar from './components/NavBar.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
//import $ from 'jquery'

export default {
  name: 'App',
  components: {
    NavBar,
  },
  // setup() {
    // $.ajax({
    //   url: "http://127.0.0.1:3000/user/account/token/",
    //   type: "POST",
    //   data: {
    //     username: 'wendy',
    //     password: '1234567',
    //   },
    //   success(resp) {
    //     console.log(resp);
    //   },
    //   error(resp) {
    //     console.log(resp);
    //   }
    // });

    // $.ajax({
    //   url: "http://127.0.0.1:3000/user/account/info/",
    //   type: "GET",
    //   headers: {
    //     Authorization: "Bearer " + "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJiZGUzOWRkNmRhYmE0YzMyYmUwNjZhYzFkZjlmZDdmNSIsInN1YiI6IjEiLCJpc3MiOiJzZyIsImlhdCI6MTc1ODg1ODA2NSwiZXhwIjoxNzYwMDY3NjY1fQ.28BocS5MyHI0GH0T46aglubKT8tESDp98I8QkuXtVD8",
    //   },
    //   success(resp) {
    //     console.log(resp);
    //   },
    //    error(resp) {
    //     console.log(resp);
    //   },
    // });

    // $.ajax({
    //   url: "http://127.0.0.1:3000/user/account/register/",
    //   type: "POST",
    //   data: {
    //     username: "wendy2",
    //     password: "1234567",
    //     confirmedPassword: "1234567",
    //   },
    //   success(resp) {
    //     console.log(resp);
    //   },
    //    error(resp) {
    //     console.log(resp);
    //   },
    // })
  // }


}
</script>

<style>
body {
  background-image: url('./assets/images/background.png');
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
