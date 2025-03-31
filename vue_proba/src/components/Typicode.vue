<script setup>
import { ref, onMounted } from 'vue'

const posts = ref([]);

const fetchPosts=()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(adat=>posts.value=adat)
    .catch(err=>console.log(err));
}
onMounted(fetchPosts)
</script>



<template>
    <!--<h1 class="text-center">{{posts.length}}</h1>-->
    <div v-for="post in posts" class="flex flex-col items-center bg-green-200">
        <p>{{post.title}}</p>
    </div>
</template>