<script setup>
import {RouterLink} from 'vue-router'
</script>

<template>
  <div class="navbar bg-green-400 shadow-sm">
    <div class="flex-1">
      <RouterLink to="/" class="btn btn-ghost text-xl">Vue Test Menu</RouterLink>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <li><RouterLink to="/typicode">Typicode</RouterLink></li>
        <li><RouterLink to="/randomusers">Randomusers</RouterLink></li>
        <li>
          <details>
            <summary>Parent</summary>
            <ul class="bg-base-100 rounded-t-none p-2">
              <li><a>Link 1</a></li>
              <li><a>Link 2</a></li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  </div>
</template>
