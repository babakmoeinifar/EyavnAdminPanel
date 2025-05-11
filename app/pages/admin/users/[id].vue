<template>
  <div>
    <h1>User ID: {{ params.id }}</h1>
  </div>
</template>

<script setup lang="ts">
const params = useRoute().params

const { data: user } = await useFetch(`/api/users/${params.id}`)

if(!user.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'کاربر پیدا نشد'
  })
}

</script>