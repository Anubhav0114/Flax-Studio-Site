<script setup lang="ts">
import Developers from '../components/Developers.vue';
import HomeLanding from '../components/HomeLanding.vue';
import AppsAndGames from '../components/AppsAndGames.vue';
import { AppDetail, AppsAndGamesData } from '../data-class';

// ------------------- Data sources ------------------

const allApps = Array<AppDetail>()
allApps.push(new AppDetail('/src/assets/draw-on.png', "#", "Draw On", "A simple drawing app to draw your needs. It will help in showing your art."))
allApps.push(new AppDetail('/src/assets/word-search.png', "#", "Word Search", "A simple word search game in which you have to find the words before you ran out of time."))
// add more apps here...

const releasedAppsData = new AppsAndGamesData("Our Apps & Games", "See our apps and games which is available on Play store", allApps)

const upcomingApps = Array<AppDetail>()
upcomingApps.push(new AppDetail('/src/assets/draw-on.png', "#", "Music On", "A Simple music app for managing and playing your audio files."))

const upcomingAppsData = new AppsAndGamesData("Upcoming Apps & Games", "Our upcoming Apps & Games will be coming soon", upcomingApps)





</script>

<template>
  <div>
    <HomeLanding />
    <Developers />
    <AppsAndGames :data="releasedAppsData"/>
    <AppsAndGames :data="upcomingAppsData"/>

  </div>
</template>

<style scoped></style>
