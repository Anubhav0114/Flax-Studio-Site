<script setup lang='ts'>

</script>

<template>
    <div class="developers-container">
        <h2>Developers</h2>
        <p>We are giving thanks to all our developers who have worked together to make such kind of apps and game.</p>
        <div class="cards-container">
            <div class="profile-card">
                <img src="../assets/nitesh.png" alt="nitesh profile image">
                <h3>Nitesh Kr</h3>
                <p>Hello, i am an intermediate android developer. I am thanking to work here.</p>
            </div>
            <div class="profile-card">
                <img src="../assets/nitesh.png" alt="nitesh profile image">
                <h3>Nitesh Kr</h3>
                <p>Hello, i am an intermediate android developer. I am thanking to work here.</p>
            </div>
            <div class="profile-card">
                <img src="../assets/nitesh.png" alt="nitesh profile image">
                <h3>Nitesh Kr</h3>
                <p>Hello, i am an intermediate android developer. I am thanking to work here.</p>
            </div>

        </div>
    </div>
</template>

<style scoped>
.developers-container {
    max-width: var(--max-page-width);
    margin: auto;
    padding: 40px var(--page-margin);

}

.developers-container>h2 {
    color: var(--color-on-secondary);
    font-weight: 600;
    font-size: 30px;
    margin: 30px 0;
    text-align: center;

}

.developers-container>p {
    color: var(--color-on-secondary);
    max-width: 600px;
    margin: 20px auto;
    text-align: center;
}

.cards-container{
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
}

.profile-card{
    width: 200px;
    height: 300px;
    background-color: white;
    border-radius: 6px;
    box-shadow: 0px 4px 26px rgba(115, 64, 188, 0.2);
}

.profile-card img{
    display: block;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 20px auto;
}

.profile-card h3{
    font-weight: 600;
    font-size: 18px;
    text-align: center;
    color: var(--color-on-secondary);
}

.profile-card p{
    text-align: center;
    color: var(--color-on-secondary);
    margin: 8px;
    font-size: 16px;
}
</style>