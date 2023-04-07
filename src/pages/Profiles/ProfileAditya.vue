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
                    <img src="../../assets/profiles/aditya.jpeg" alt="nitesh">
                    <div>
                        <h2>Aditya Singh</h2>
                        <p class="info">Intermediate UI/UX and Web developer</p>
                        <p class="small-info">Hello myself Aaditya and I am a front and devloper and designer</p>
                        <a href="mailto:aadityasingh396@gmail.com">Contact</a>
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
                        <p>Surat, Gujarat</p>
                    </div>
                    <div class="info">
                        <p>Experience:</p>
                        <p>6 months</p>
                    </div>
                    <div class="profile-icons">
                        <a href="https://github.com/Aadirajput04"><img src="../../assets/extra/github.svg" alt="github"></a>
                        <a href="https://twitter.com/aaditya22141489/"><img src="../../assets/extra/twitter.svg"
                                alt="twitter"></a>
                        <a href="https://www.instagram.com/aaditya_rajput_04/"><img src="../../assets/extra/instagram.svg"
                                alt="instagram"></a>
                        <!-- <a href="#"><img
                                src="../../assets/extra/linkedin.svg" alt="linkedin"></a> -->
                        <a href="https://www.facebook.com/aaditya.rajput.54772"><img src="../../assets/extra/facebook.svg"
                                alt="facebook"></a>
                    </div>
                </div>
            </div>
        </div>

        <div class="profile-detail-container">
            <div class="profile-detail">
                <div class="profile-about">
                    <h2 id="about">About</h2>
                    <p>
                        I was born in  Bihar where creativity and innovation were valued above all else.
                         Even as a child, I was drawn to the world of design and technology. 
                         I was fascinated by how the digital world could bring people together and make our lives easier and more fulfilling.
                    </p>
                    <p>
                        As I grew up, I found myself increasingly drawn to the field of web design and development. I loved the idea of creating digital experiences that were both beautiful and functional, and I spent hours teaching myself the basics of HTML, CSS, and JavaScript.
                    </p>
                    <p>
                        As I gained more experience, I began to specialize in UI/UX design. I was fascinated by the psychology of user experience and the art of designing interfaces that were both aesthetically pleasing and easy to use.

Over the years, I've worked on a variety of exciting projects, from small business websites to complex web applications. I've collaborated with teams of developers, designers, and stakeholders to create digital products that meet the needs of users and businesses alike.

But even as my career has grown and evolved, I've never lost sight of my passion for design and technology. I'm always exploring new trends, learning new tools and techniques, and pushing myself to create better, more innovative solutions for my clients.

Today, as an experienced UI/UX designer and front-end web developer, I'm proud of the work I've done and excited about the work still to come. I believe that the digital world has the power to transform our lives and our communities, and I'm committed to using my skills and expertise to make that vision a reality.
                    </p>

                    <hr>
                    <h2>Skills</h2>
                    <div class="chip-container">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>Js</span>
                        <span>Figma</span>
                        <span>Adobe XD</span>
                        <span>Adobe Photoshop</span>
                        <span>Adobe Illustrator</span>
                        <span>Adobe After Effects</span>
                        <span>Adobe Premiere Pro</span>
                        <span>Adobe Lightroom</span>
                        <span>Adobe InDesign</span>
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
