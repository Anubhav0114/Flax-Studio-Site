<script setup lang='ts'>
import ProfileMembers from '../../components/ProfileMembers.vue';
import { userProfiles } from '../../data/CommonData';

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
                    <img src="../../assets/profiles/anubhav.png" alt="nitesh">
                    <div>
                        <h2>Anubhav Pathak</h2>
                        <p class="info">Intermediate Android developer</p>
                        <p class="small-info">Also like to be called as Kabir Pathak. An intermediate-level Android
                            developer
                            with a deep passion for mobile development. With a keen interest in technology, startups,
                            business, psychology, and Indian polity.</p>
                        <a href="mailto:pathakanubhav0127@gmail.com">Contact</a>
                    </div>
                </div>
                <div class="right">
                    <div class="info">
                        <p>Availability:</p>
                        <p>Full-time</p>
                    </div>
                    <div class="info">
                        <p>Age:</p>
                        <p>20</p>
                    </div>
                    <div class="info">
                        <p>Location:</p>
                        <p>Surat, Gujarat</p>
                    </div>
                    <div class="info">
                        <p>Experience:</p>
                        <p>6 months</p>
                    </div>
                    <div class="profile-icons">
                        <a href="https://github.com/Anubhav0114"><img src="../../assets/extra/github.svg" alt="github"></a>
                        <a href="https://twitter.com/KabirPathak14"><img src="../../assets/extra/twitter.svg"
                                alt="twitter"></a>
                        <a href="https://www.instagram.com/kabir_0.1.2.7/"><img src="../../assets/extra/instagram.svg"
                                alt="instagram"></a>
                        <a href="https://www.linkedin.com/in/anubhav-pathak-a945721a9/"><img
                                src="../../assets/extra/linkedin.svg" alt="linkedin"></a>
                        <a href="https://www.facebook.com/kabir.pathak.794/"><img src="../../assets/extra/facebook.svg"
                                alt="facebook"></a>
                    </div>
                </div>
            </div>
        </div>

        <div class="profile-detail-container">
            <div class="profile-detail">
                <div class="profile-about">
                    <h2 id="about">About</h2>
                    <p>I believe that mobile technology is changing the way we live our lives and the way we do business.
                        That's why I'm dedicated to creating innovative and user-friendly mobile applications that make
                        people's lives easier and more efficient.
                    </p>
                    <p>In addition to my technical skills, I have a strong understanding of business and entrepreneurship.
                        I'm always on the lookout for new and exciting ideas that have the potential to change the world.
                        When I'm not coding,
                        you can find me reading up on the latest tech news or following the latest developments in Indian
                        politics. I believe that having a broad range of interests and knowledge is essential for being a
                        well-rounded individual and a successful developer.
                    </p>
                    <p>I'm excited about the possibilities that the future holds for mobile technology, and I'm eager to be
                        a part of shaping it. If you're
                        looking for a passionate and dedicated developer who brings a unique perspective to the table, look
                        no further than Anubhav Pathak.
                    </p>

                    <hr>
                    <h2>Skills</h2>
                    <div class="chip-container">
                        <span>JAVA</span>
                        <span>Android</span>
                        <span>Kotlin</span>
                        <span>Figma</span>
                        <span>HTML</span>
                        <span>Digital Marketing</span>
                    </div>

                    <hr>
                    <h2>Languages</h2>
                    <div class="chip-container">
                        <span>Maithili</span>
                        <span>Hindi</span>
                        <span>English</span>
                        <span>Gujarati</span>
                    </div>

                </div>
                <ProfileMembers :user-profiles="userProfiles"/>
            </div>
        </div>
    </div>
</template>
