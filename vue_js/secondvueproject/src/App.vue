<template>
  <Header />
  <div class="container mt-5 mb-3">
    <!-- Declaration of all component here -->
   
    <About />
    <Contact />
  </div>
  
</template>

<script>
import Header from '@/components/Header.vue'
import About from '@/components/About.vue'
import Contact from '@/components/Contact.vue'

export default {
  name:'App',
  
  // Registering all component hee
  components:{
   Header, About, Contact
  }
}
</script>

<style>

</style>
