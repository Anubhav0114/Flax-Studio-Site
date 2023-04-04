<script setup lang="ts">
import Developers from '../components/Developers.vue';
import HomeLanding from '../components/HomeLanding.vue';
import AppsAndGames from '../components/AppsAndGames.vue';
import { AppDetail, AppsAndGamesData, ProfileDetail, ProfileData } from '../data-class';
import Features from '../components/Features.vue';

// ------------------- Data sources ------------------

const allApps = Array<AppDetail>()
allApps.push(new AppDetail('draw-on.png', "draw-on", "Draw On", "A simple drawing app to draw your needs. It will help in showing your art."))
allApps.push(new AppDetail('word-search.png', "word-search", "Word Search", "A simple word search game in which you have to find the words before you ran out of time."))
// add more apps here...

const releasedAppsData = new AppsAndGamesData("Our Apps & Games", "See our apps and games which is available on Play store", allApps)

const upcomingApps = Array<AppDetail>()
upcomingApps.push(new AppDetail('draw-on.png', "#", "Music On", "A Simple music app for managing and playing your audio files."))
// add more apps here...

const upcomingAppsData = new AppsAndGamesData("Upcoming Apps & Games", "Our upcoming Apps & Games will be coming soon", upcomingApps)

const profiles = Array<ProfileDetail>()
profiles.push(new ProfileDetail('nitesh.png', "#", "Nitesh kr", "Hello, i am an intermediate android developer. I am thanking to work here."))
profiles.push(new ProfileDetail('nitesh.png', "#", "Nitesh kr", "Hello, i am an intermediate android developer. I am thanking to work here."))
// add more profile here...

const profileData = new ProfileData("Developers", "We are giving thanks to all our developers who have worked together to make such kind of apps and game.", profiles)



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
