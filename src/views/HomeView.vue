<template>
  <main class="home">
    <HeroSection />
    <CorePillars />
    <MasterpieceEditions />
    <LocationSection />
    <NewsletterSection />
  </main>
</template>

<script setup>
import HeroSection from '../components/HeroSection.vue'
import CorePillars from '../components/CorePillars.vue'
import MasterpieceEditions from '../components/MasterpieceEditions.vue'
import LocationSection from '../components/LocationSection.vue'
import NewsletterSection from '../components/NewsletterSection.vue'
</script>

<style scoped>
.home {
  padding-top: 5rem; /* offset for fixed navbar */
  flex: 1;
}
</style>
