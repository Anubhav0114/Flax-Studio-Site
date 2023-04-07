<script setup lang="ts">
import Developers from '../components/Developers.vue';
import HomeLanding from '../components/HomeLanding.vue';
import AppsAndGames from '../components/AppsAndGames.vue';
import Features from '../components/Features.vue';
import { releasedAppsData, upcomingAppsData, profileData } from '../data/CommonData';

</script>

<template>
  <div>
    <HomeLanding />
    <Developers :data="profileData"/>
    <AppsAndGames :data="releasedAppsData"/>
    <AppsAndGames :data="upcomingAppsData"/>
    <Features/>

  </div>
</template>

<style scoped></style>
