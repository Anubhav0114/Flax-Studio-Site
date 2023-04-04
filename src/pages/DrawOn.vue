<script setup lang='ts'>
import AboutApp from '../components/AboutApp.vue';
import AppLanding from '../components/AppLanding.vue';
import AppFeatures from '../components/AppFeatures.vue';
import AppsAndGames from '../components/AppsAndGames.vue';
import AppPrivacyCard from '../components/AppPrivacyCard.vue';
import { AppDetail, AppsAndGamesData } from '../data-class';


const allApps = Array<AppDetail>()
allApps.push(new AppDetail('../draw-on.png', "../draw-on", "Draw On", "A simple drawing app to draw your needs. It will help in showing your art."))
allApps.push(new AppDetail('../word-search.png', "../word-search", "Word Search", "A simple word search game in which you have to find the words before you ran out of time."))
// add more apps here...

const releasedAppsData = new AppsAndGamesData("Our Apps & Games", "See our apps and games which is available on Play store", allApps)


</script>
<template>
    <AppLanding/>
    <AboutApp/>
    <AppFeatures/>
    <AppsAndGames :data="releasedAppsData"/>
    <AppPrivacyCard/>
</template>
<style scoped>
</style>