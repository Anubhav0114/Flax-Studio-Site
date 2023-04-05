<script setup lang='ts'>
import AboutApp from '../components/AboutApp.vue';
import AppLanding from '../components/AppLanding.vue';
import AppFeatures from '../components/AppFeatures.vue';
import AppsAndGames from '../components/AppsAndGames.vue';
import AppPrivacyCard from '../components/AppPrivacyCard.vue';
import { AppDetail, AppsAndGamesData, FeaturesData } from '../data-class';


const allApps = Array<AppDetail>()
allApps.push(new AppDetail('../draw-on.png', "../draw-on", "Draw On", "A simple drawing app to draw your needs. It will help in showing your art."))
allApps.push(new AppDetail('../word-search.png', "../word-search", "Word Search", "A simple word search game in which you have to find the words before you ran out of time."))
// add more apps here...

const releasedAppsData = new AppsAndGamesData("Our Apps & Games", "See our apps and games which is available on Play store", allApps)

const bigPara = "Looking for a fun and challenging word search puzzle game? Look no further than our app!. With infinite levels to play, you'll never run out of new and exciting challenges to tackle. Simply swipe your finger across the grid of letters to form words and earn points. But watch out - the clock is ticking! Race against time to find as many words as you can before the clock runs out."


</script>
<template>
    <AppLanding :app-name="'Word Search: Infinite Puzzle'" :small-para="'A simple word search game in which you have to find the words before you ran out of time.'"
        :big-para="bigPara" :app-link="'https://play.google.com/store/apps/details?id=com.flaxstudio.wordsearch'"
        :app-images-link="'phone-image.png'" :privacy-link="'/word-search/privacy'" />

    <AboutApp :app-paragraphs="[
        'Looking for a fun and challenging word search puzzle game? Look no further than our app!',
        'With infinite levels to play, you\'ll never run out of new and exciting challenges to tackle. Simply swipe your finger across the grid of letters to form words and earn points. But watch out - the clock is ticking! Race against time to find as many words as you can before the clock runs out.',
        'Our app is also highly customizable, allowing you to tailor the experience to your liking. Choose from a variety of themes and color schemes to personalize the look and feel of the game. Plus, you can adjust the difficulty level to suit your preferences - from easy for beginners to hard for the most experienced word search players.',
        'First of all, our app is designed to be intuitive and user-friendly. The interface is easy to navigate, with large, clear letters and simple swipe gestures for selecting words. You can also choose to use a **pen tool** to circle the words you find, or simply tap on the first and last letters of each word.',
        'In terms of difficulty levels, we have options for everyone - from easy for beginners to hard for experienced word search enthusiasts. You can choose to play with or without a timer, and there are different word lists to choose from depending on your interests or level of challenge.',
        'Overall, our word search puzzle game is a fun, addictive, and customizable way to test and improve your word search skills. Whether you\'re looking for a quick and easy distraction or a more challenging mental workout, our app has something for everyone.'
    ]" />
    <AppFeatures :details="[
        new FeaturesData('Infinite Levels', 'Infinite levels of challenging word search puzzles'),
        new FeaturesData('Adjustable', 'We can easily adjust difficulty levels'),
        new FeaturesData('Simple & Easy', 'This game will gives a simple & easy-to-use interface'),
        new FeaturesData('Fun & Addictive', 'The game ensure that to provide fun and addictive gameplay'),
        new FeaturesData('50+ Categories', '50+ different word categories to play'),
        new FeaturesData('No Ads', 'This game will not show you ads between games')
    ]"
        :ending="'Download our game today and start sharpening your word search skills!'" />

    <AppsAndGames :data="releasedAppsData" />
    <AppPrivacyCard :privacy-link="'./word-search/privacy'"/>

</template>
<style scoped></style>