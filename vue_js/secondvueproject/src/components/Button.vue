<template>
    <div class="mt-2 mb-3">
        <button class="btn btn-primary">{{ msg }}</button>
    </div>
</template>


<script>
export default {
    name: 'ButtonComponent',
    // Adding props to make the button dynamic
    props: {
        msg: String
    }
}
</script>

<style>




</style>