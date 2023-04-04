<script setup lang="ts">

</script>

<template>
    <div class="landing-top">
        <div class="header-parent">
            <div class="header">
                <h2><a href="#">Flax Studio</a></h2>
                <div>
                    <a href="#">Home</a>
                    <a href="#">Features</a>
                    <a href="#">About</a>
                    <a href="#">Privacy</a>
                    <a href="#">Join</a>
                </div>
            </div>
        </div>

        <div class="content-parent">
            <div class="content">
                <div class="detail">
                    <h1>We love make things amazing and simple</h1>
                    <p>We are try to creating stuffs for making things easier and simpler to use. Our most of the app is
                        open source. </p>
                    <a href="#">Visit Playstore</a>
                </div>
                <div class="images">
                    <img src="phone-image.png" alt="our apps">
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>
.landing-top {
    width: 100%;
    overflow-y: auto;
    background: linear-gradient(90deg, #6F40BD 0%, #D33396 100%);
}


.header-parent {
    background-color: rgba(255, 255, 255, 0.13);
}

.header {
    max-width: var(--max-page-width);
    margin: auto;
    height: 60px;
    display: grid;
    grid-template-columns: 1fr max-content;
    align-items: center;
}

.header h2 {
    font-size: x-large;
    margin-left: var(--page-margin);
}

.header a {
    color: white;
    text-decoration: none;
}

.header div {
    margin-right: 12px;
}

.header div a {
    color: rgb(255, 255, 255);
    text-decoration: none;
    margin: 0 12px;
    font-size: medium;
}

.header div a:hover {
    text-decoration: underline;
}

.content-parent {
    max-width: var(--max-page-width);
    margin: auto;
}

.content {
    margin: 40px var(--page-margin);
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    color: white;
}

.content h1 {
    font-weight: 600;
    margin-top: 40px;
    font-size: 40px;
}

.content p {
    margin: 24px 0;
}

.content a {
    display: inline-block;
    margin-top: 30px;
    text-decoration: none;
    padding: 8px 24px;
    border-radius: var(--default-border-radius);
    font-size: 18px;
    background-color: transparent;
    border: 2px solid White;
    color: white;
    transition: background-color 200ms;
    font-weight: 600;
}


.content a:hover {
    background-color: white;
    border: 2px solid White;
    color: var(--color-primary);
}

.content img {
    display: block;
    margin: auto;
    margin-top: 30px;
    height: 300px;
    
}



@media only screen and (max-width: 800px) {
  body {
    background-color: lightblue;
  }
}
</style>
