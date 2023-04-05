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

const bigPara = "Draw On is a versatile drawing app that lets you create stunning illustrations and designs with ease. With its intuitive interface and powerful tools, you can draw rectangles, lines, circles, curves, and more with just a few taps and swipes."


</script>
<template>
    <AppLanding :app-name="'Draw On'" :small-para="'A simple & easy drawing app to show your creativity.'"
        :big-para="bigPara" :app-link="'https://play.google.com/store/apps/details?id=com.flaxstudio.drawon'"
        :app-images-link="'phone-image.png'" :privacy-link="'/draw-on/privacy'" />

    <AboutApp :app-paragraphs="[
        '**Draw On** is a versatile drawing app that lets you create stunning illustrations and designs with ease. With its intuitive interface and powerful tools, you can draw **rectangles, lines, circles, curves**, and more with just a few taps and swipes.',
        'Whether you\'re a **professional artist**, a **hobbyist**, or a **student**, Draw On has everything you need to unleash your creativity. You can choose from a wide range of **colors, brush sizes**, and textures to bring your ideas to life. You can also **save** your drawings and create a favorite list for easy access.',
        'With its simple yet powerful features, Draw On is perfect for anyone who loves to draw, doodle, or sketch on the go. So why wait? Download Draw On today and **start creating beautiful art!**'
    ]" />
    <AppFeatures :details="[
        new FeaturesData('Drawing Tools', 'The app should offer a variety of drawing tools such as a pen, pencil, brush, eraser, and more. Users should be able to easily switch between tools and customize the thickness and color of each.'),
        new FeaturesData('Shapes', 'The app should allow users to draw different shapes like rectangles, circles, and triangles, as well as free-form shapes like curves and lines. Users should be able to easily adjust the size and position of these shapes.'),
        new FeaturesData('Export & Import', 'The app should allow users to export their drawings in different formats like PNG, JPG, or SVG, and share them via email, social media, or other apps. It should also allow users to import images or photos to use as a reference or as a part of their drawing. '),
        new FeaturesData('Undo & Redo', 'The app should offer the ability to undo and redo actions, giving users the freedom to experiment and make changes without fear of losing their work.'),
        new FeaturesData('Save & Favorites', 'The app should allow users to save their drawings and create a favorite list for easy access.'),
        new FeaturesData('User-friendly Interface', 'The app should have a user-friendly interface, with easy-to-use tools and clear instructions to help users get started quickly and efficiently. It should also be optimized for different screen sizes and orientations.')
    ]"
        :ending="'By incorporating these features, your Draw On app can provide users with a powerful and enjoyable drawing experience.'" />

    <AppsAndGames :data="releasedAppsData" />
    <AppPrivacyCard :privacy-link="'./draw-on/privacy'"/>
</template>
<style scoped></style>