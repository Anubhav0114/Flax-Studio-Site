<script setup lang="ts">
import Developers from '../components/Developers.vue';
import HomeLanding from '../components/HomeLanding.vue';
import AppsAndGames from '../components/AppsAndGames.vue';
import { AppDetail, AppsAndGamesData, ProfileDetail, ProfileData } from '../DataType'
import Features from '../components/Features.vue';

// ------------------- Data sources ------------------

const allApps = Array<AppDetail>()
allApps.push({imageUrl:'draw-on.png', pageUrl:"draw-on", title:"Draw On", description:"A simple drawing app to draw your needs. It will help in showing your art."})
allApps.push({imageUrl:'word-search.png', pageUrl:"word-search", title:"Word Search", description:"A simple word search game in which you have to find the words before you ran out of time."})
// add more apps here...

const releasedAppsData = {heading:"Our Apps & Games", description:"See our apps and games which is available on Play store", apps:allApps}

const upcomingApps = Array<AppDetail>()
upcomingApps.push({imageUrl:'draw-on.png', pageUrl:"music-on", title:"Music On", description:"A Simple music app for managing and playing your audio files."})
// add more apps here...

const upcomingAppsData: AppsAndGamesData = {heading:"Upcoming Apps & Games", description:"Our upcoming Apps & Games will be coming soon", apps:upcomingApps}

const profiles = Array<ProfileDetail>()
profiles.push({imageUrl:'nitesh.png', pageUrl:"profile-nitesh", name:"Nitesh kr", about:"Hello, i am an intermediate android developer. I am thanking to work here."})
profiles.push({imageUrl:'nitesh.png', pageUrl:"profile-sayam", name:"Sayam kr", about:"Hello, i am an intermediate android developer. I am thanking to work here."})
profiles.push({imageUrl:'nitesh.png', pageUrl:"profile-anubhab", name:"Anubhab kr", about:"Hello, i am an intermediate android developer. I am thanking to work here."})
// add more profile here...

const profileData: ProfileData = {heading:"Developers", description:"We are giving thanks to all our developers who have worked together to make such kind of apps and game.", profiles:profiles}



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
