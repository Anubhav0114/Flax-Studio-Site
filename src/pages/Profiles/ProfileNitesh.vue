<script setup lang='ts'>
import { userProfiles } from '../../data/CommonData';
import ProfileMembers from '../../components/ProfileMembers.vue';
import './profile.css'

</script>
<template>
    <div class="profile-container">
        <header>
            <div class="header">
                <h2><a href="./">Flax Studio</a></h2>
                <div>
                    <a href="./">Home</a>
                    <a href="#about" class="hide-responsive">About</a>
                </div>
            </div>
        </header>

        <div class="profile-parent">
            <div class="profile-bio">
                <div class="left">
                    <img src="../../assets/profiles/nitesh.png" alt="nitesh">
                    <div>
                        <h2>Nitesh Kumar</h2>
                        <p class="info">Android & Web developer</p>
                        <p class="small-info">As an intermediate developer, I recognize that there is always room for
                            improvement and growth. I am constantly seeking out new challenges and opportunities to expand
                            my skillset and knowledge base.</p>
                        <a href="mailto:niteshdev547@gmail.com">Contact</a>
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
                        <p>Experience:</p>
                        <p>1.5 years</p>
                    </div>
                <div class="profile-icons">
                        <a href="https://github.com/nitesh-dev/"><img src="../../assets/extra/github.svg" alt="github"></a>
                        <a href="https://twitter.com/niteshdev547"><img src="../../assets/extra/twitter.svg"
                                alt="twitter"></a>
                        <!-- <a href="#"><img src="../../assets/extra/instagram.svg" alt="instagram"></a> -->
                        <!-- <a href="#"><img src="../../assets/extra/linkedin.svg" alt="linkedin"></a>
                            <a href="#"><img src="../../assets/extra/facebook.svg" alt="facebook"></a> -->
                    </div>
                </div>
            </div>
        </div>

        <div class="profile-detail-container">
            <div class="profile-detail">
                <div class="profile-about">
                    <h2 id="about">About</h2>
                    <p>As an intermediate Android, game, and web developer, I am constantly honing my skills and expanding
                        my knowledge in the ever-evolving world of digital technology. I have always been fascinated by the
                        ability of technology to connect people and empower them to accomplish incredible things, and that
                        is what motivates me every day.</p>
                    <p>In my journey as a developer, I have gained a solid foundation in developing mobile applications for
                        the Android operating system. I have learned how to build applications that leverage the full
                        potential of the platform, from designing intuitive user interfaces to implementing complex features
                        that enhance user engagement and interactivity.</p>
                    <p>As a game developer, I have been able to express my creativity and imagination through designing
                        immersive gaming experiences. I enjoy the challenge of crafting compelling gameplay mechanics,
                        creating visually stunning graphics, and incorporating new technologies and trends to make my games
                        stand out.</p>
                    <p>In addition to my Android and game development skills, I have also developed proficiency in web
                        development. I have learned how to create responsive and user-friendly websites that deliver an
                        exceptional user experience across multiple devices and platforms.</p>
                    <p>As an intermediate developer, I recognize that there is always room for improvement and growth. I am
                        constantly seeking out new challenges and opportunities to expand my skillset and knowledge base. I
                        am excited to continue on this journey of exploration and discovery, pushing the limits of what I
                        can achieve as a developer and contributing to the digital world in meaningful ways.</p>

                    <hr>
                    <h2>Skills</h2>
                    <div class="chip-container">
                        <span>Python</span>
                        <span>Android</span>
                        <span>Javascript</span>
                        <span>Typescript</span>
                        <span>Figma</span>
                        <span>C++</span>
                        <span>Kotlin</span>
                        <span>Mysql</span>
                        <span>HTML</span>
                        <span>Unity</span>
                        <span>Vue</span>
                    </div>

                    <hr>
                    <h2>Languages</h2>
                    <div class="chip-container">
                        <span>English</span>
                        <span>Hindi</span>
                    </div>

                </div>


                <ProfileMembers :user-profiles="userProfiles" />
            </div>
        </div>

    </div></template>
