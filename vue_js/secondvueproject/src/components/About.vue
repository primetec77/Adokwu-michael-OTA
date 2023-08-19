<template>
  
    <div class=" mt-2">
        <h1 class="mt-3">Adokwu Michael Adiga</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, dolor?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, itaque!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga excepturi nisi molestias.</p>
    </div>
    <!-- dynamic buttons</template> -->
    <Button msg="Home" />
    <Button msg="About Us" />
    <Button msg="Contact Us" />
</template>

<script>

    // importing the button  component into the About component
    import Button from '@/components/Button.vue'
    // exporting or sending the About component to App.vue
    export default {
      name:'AboutComponent',

      components:{
      Button
    }
    }

</script>


<style>



</style>

