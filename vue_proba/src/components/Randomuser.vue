<script setup>
defineProps({
    user: Object
});
</script>

<template>
  <div class="card card-side bg-green-800 shadow-sm">
    <figure>
      <img
        v-bind:src="user.picture.large"
        alt="UserPicture"
      />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{user.name.first}} {{user.name.last}}</h2>
      <p>{{user.email}}</p>
    </div>
  </div>
</template>
