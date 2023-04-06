<script setup lang='ts'>
</script>
<template>
    <div class="profile-container">
        <header>
            <div class="header">
                <h2><a href="./">Flax Studio</a></h2>
                <div>
                    <a href="./">Home</a>
                    <a href="#features" class="hide-responsive">Features</a>
                    <a href="#" class="hide-responsive">Privacy</a>
                </div>
            </div>
        </header>

        <div class="profile-parent">
            <div class="profile-bio">
                <div class="left">
                    <img src="nitesh.png" alt="nitesh">
                    <div>
                        <h2>Nitesh Kumar</h2>
                        <p class="info">Full stack web developer</p>
                        <p class="small-info">Hello myself Nitesh and I am a full stack android developer.</p>
                        <a href="#">Contact</a>
                    </div>
                </div>
                <div class="right">
                    <div class="info">
                        <p>Availability:</p>
                        <p>Full-time</p>
                    </div>
                    <div class="info">
                        <p>Age:</p>
                        <p>19</p>
                    </div>
                    <div class="info">
                        <p>Location:</p>
                        <p>India, Bihar</p>
                    </div>
                    <div class="info">
                        <p>Years experience:</p>
                        <p>2</p>
                    </div>
                    <div class="profile-icons">
                        <a href="#"><img src="../../assets/github.svg" alt="github"></a>
                        <a href="#"><img src="../../assets/twitter.svg" alt="twitter"></a>
                        <a href="#"><img src="../../assets/instagram.svg" alt="instagram"></a>
                        <a href="#"><img src="../../assets/linkedin.svg" alt="linkedin"></a>
                        <a href="#"><img src="../../assets/facebook.svg" alt="facebook"></a>
                    </div>
                </div>
            </div>
        </div>

        <div class="profile-detail-container">
            <div class="profile-detail">
                <div class="profile-about">
                    <h2>About</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                        leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                        leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                        leap into electronic typesetting, remaining essentially unchanged.
                    </p>

                    <hr>
                    <h2>Skills</h2>
                    <div class="chip-container">
                        <span>Python</span>
                        <span>Android</span>
                        <span>Javascript</span>
                        <span>Figma</span>
                        <span>C++</span>
                        <span>Kotlin</span>
                    </div>

                    <hr>
                    <h2>Languages</h2>
                    <div class="chip-container">
                        <span>English</span>
                        <span>Hindi</span>
                    </div>

                </div>

                <div class="members">
                    <h3>Members</h3>
                    <div>
                        <img src="../../assets/no_image.png" alt="no image">
                        <div>
                            <h4>Nitesh kr</h4>
                            <p>Android developer</p>
                        </div>
                    </div>
                    <div>
                        <img src="../../assets/no_image.png" alt="no image">
                        <div>
                            <h4>Nitesh kr</h4>
                            <p>Android developer</p>
                        </div>
                    </div>
                    <div>
                        <img src="../../assets/no_image.png" alt="no image">
                        <div>
                            <h4>Nitesh kr</h4>
                            <p>Android developer</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>
.profile-container {
    background-color: var(--surface-color);
}

header {
    width: 100%;
    height: 60px;
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
    font-size: 24px;
    margin-left: var(--page-margin);
    font-weight: 600;
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

.profile-parent {
    margin-top: 100px;
    margin-bottom: 100px;
    background-color: white;
}

.profile-bio {
    padding: 40px 24px;
    max-width: var(--max-page-width);
    margin: 0 auto;
    display: grid;
    gap: 30px;
    grid-template-columns: 1fr 350px;
}

.profile-bio .left {
    display: grid;
    grid-template-columns: max-content 1fr;
    gap: 24px;
}


.profile-bio .left img {
    height: 120px;
    border-radius: 50%;
}

.profile-bio .left h2 {
    color: var(--color-on-secondary);
    margin-bottom: 8px;
}

.profile-bio .left .info {
    margin-bottom: 16px;
    color: var(--color-primary-variant);
}

.profile-bio .left a {
    padding: 8px 24px;
    background-color: var(--color-primary-variant);
    color: white;
    text-decoration: none;
    border-radius: 4px;
    margin-top: 24px;
    display: inline-block;
}

.profile-bio .right .info {
    display: grid;
    grid-template-columns: 2.5fr 3fr;
    gap: 20px;
    margin-bottom: 8px;
}

.profile-bio .right .info p:first-child {
    font-weight: 600;
}

.profile-bio .right .profile-icons {
    margin-top: 40px;
    display: flex;
    gap: 24px;
    align-items: center;
}

.profile-bio .right .profile-icons img {
    display: flex;
}


.profile-detail {
    max-width: var(--max-page-width);
    margin: auto;
    display: grid;
    grid-template-columns: auto 300px;
    gap: 24px;
    padding-bottom: 100px;

}

.profile-detail .profile-about {
    border-radius: var(--default-border-radius);
    margin-left: 16px;
    background-color: white;
    padding: 24px;

}


.profile-about p {
    margin: 24px 0;
}

.profile-about h2 {
    color: var(--color-primary-variant);
}

.profile-about hr {
    margin: 24px 0;
    border: none;
    border-bottom: 1px solid rgb(219, 219, 219);
}

.profile-about .chip-container {
    margin-top: 24px;
    margin-bottom: 50px;
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
}

.profile-about .chip-container span {
    border-radius: var(--default-border-radius);
    font-size: 18px;
    border: 1px solid rgb(136, 136, 136);
    padding: 4px 24px;
}


.profile-detail .members {
    margin-right: 16px;
    background-color: white;
    border-radius: var(--default-border-radius);
    min-height: 200px;
    height: max-content;
}

.members>div {
    padding: 16px;
    display: grid;
    grid-template-columns: 40px 1fr;
    gap: 12px;
    align-items: center;
    border-top: 1px solid rgb(233, 233, 233);
    cursor: pointer;

}

.members img {
    width: 40px;
    border-radius: 50%;
}

.members h3 {
    margin: 16px;
}

.members h4 {
    font-size: 16px;
}

.members p {
    font-size: 14px;
}


@media only screen and (max-width: 900px) {
    .profile-bio {
        gap: 60px;
        grid-template-columns: 100%;
    }

    .profile-bio .left {
        grid-template-columns: 100%;
    }

    .profile-bio .left img{
        margin: auto;
    }

    .profile-bio .left *{
        text-align: center;
    }

    .profile-bio .right .info p:first-child{
        text-align: right;
    }

    .profile-bio .right .info{
        grid-template-columns: 1fr 1fr;
    }

    .profile-detail {
        grid-template-columns: 100%;
        gap: 24px;
    }

    .profile-icons{
        justify-content: center;
    }

    .profile-detail .profile-about {
        margin-right: 16px;
    }

    .profile-detail .members {
        margin-left: 16px;
    }

    .members>div {
        padding: 16px 24px;

    }

    .members h3 {
        margin: 24px;
    }
}

@media only screen and (max-width: 400px) {
    .hide-responsive {
        display: none;
    }
}
</style>