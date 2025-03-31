<script setup>
import { ref, onMounted } from 'vue'
import Randomuser from './Randomuser.vue'

const users = ref([]);

const fetchUsers=()=>{
    fetch('https://randomuser.me/api/?results=50')
    .then(res=>res.json())
    .then(adat=>users.value=adat.results)
    .catch(err=>console.log(err));
}
onMounted(fetchUsers)
</script>


<template>
        <!-- <div class="flex flex-row flex-wrap items-center justify-center m-5">
            <div v-for="user in users" class="m-5">
                <Randomuser :user="user" />
            </div>
        </div> -->
    <div class="gird grid-cols-3">
        <div v-for="user in users" class="m-5">
                <Randomuser :user="user" />
        </div>
    </div>
</template>