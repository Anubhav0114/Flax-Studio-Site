<script setup lang='ts'>
import PrivacyLanding from '../../components/PrivacyLanding.vue';

</script>
<template>
    <PrivacyLanding :app-name="'Word Search: Infinite Puzzle'"
        :small-para="'A simple word search game in which you have to find the words before you ran out of time.'"
        :big-para="'Looking for a fun and challenging word search puzzle game? Look no further than our app!. With infinite levels to play, you\'ll never run out of new and exciting challenges to tackle. Simply swipe your finger across the grid of letters to form words and earn points. But watch out - the clock is ticking! Race against time to find as many words as you can before the clock runs out.'"
        :app-link="'https://play.google.com/store/apps/details?id=com.flaxstudio.wordsearch'"
        :app-page-link="'/word-search'" />
    <div class="privacy-content">

        <h2>Word Search - Privacy Policy</h2>
        <p>Flax Studio built the Word Search: Infinite Puzzle app as an Ad Supported app. This SERVICE is provided by Flax
            Studio at no cost and is intended for use as is.</p>
        <p>This page is used to inform visitors regarding my policies with the collection, use, and disclosure of Personal
            Information if anyone decided to use my Service.</p>
        <p>If you choose to use my Service, then you agree to the collection and use of information in relation to this
            policy. The Personal Information that We collect is used for providing and improving the Service. We will not
            use
            or share your information with anyone except as described in this Privacy Policy.</p>
        <p>The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which are accessible
            at Word Search: Infinite Puzzle unless otherwise defined in this Privacy Policy.</p>



        <h3>Information Collection and Use</h3>
        <p>For a better experience, while using our Service, We may require you to provide us with certain personally
            identifiable information. The information that We request will be retained on your device and is not collected
            by
            me in any way.</p>
        <p>The app does use third-party services that may collect information used to identify you.</p>
        <p>Link to the privacy policy of third-party service providers used by the app</p>

        <ul>
            <li><a href="https://www.google.com/policies/privacy/">Google Play Services</a></li>
            <li><a href="https://support.google.com/admob/answer/6128543?hl=en">AdMob</a></li>
        </ul>



        <h3>Log Data</h3>
        <p>We want to inform you that whenever you use my Service, in a case of an error in the app. We collect data and
            information (through third-party products) on your phone called Log Data. This Log Data may include information
            such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration
            of the app when utilizing my Service, the time and date of your use of the Service, and other statistics.</p>


        <h3>Cookies</h3>
        <p>Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are
            sent to your browser from the websites that you visit and are stored on your device's internal memory.</p>
        <p>This Service does not use these <b>cookies</b> explicitly. However, the app may use third-party code and
            libraries
            that use <b>cookies</b> to collect information and improve their services. You have the option to either accept
            or refuse
            these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may
            not be able to use some portions of this Service.</p>



        <h3>Service Providers</h3>
        <p>We may employ third-party companies and individuals due to the following reasons:</p>
        <ul>
            <li>To facilitate our Service;</li>
            <li>To provide the Service on our behalf;</li>
            <li>To perform Service-related services; or</li>
            <li>To assist us in analyzing how our Service is used.</li>
        </ul>
        <p>
            We want to inform users of this Service that these third parties have access to their Personal Information. The
            reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or
            use the information for any other purpose.</p>


        <h3>Security</h3>
        <p>
            We value your trust in providing us your Personal Information, thus we are striving to use commercially
            acceptable means of protecting it. But remember that no method of transmission over the internet, or method of
            electronic storage is 100% secure and reliable, and We cannot guarantee its absolute security.
        </p>

        <h3>Links to Other Sites</h3>
        <p>This Service may contain links to other sites. If you click on a third-party link, you will be directed to that
            site. Note that these external sites are not operated by me. Therefore, We strongly advise you to review the
            Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy
            policies, or practices of any third-party sites or services.
        </p>


        <h3>Children's Privacy</h3>
        <p>These Services do not address anyone under the age of 13. we do not knowingly collect personally identifiable
            information from children under 13 years of age. In the case We discover that a child under 13 has provided me
            with personal information, We immediately delete this from our servers. If you are a parent or guardian and you
            are aware that your child has provided us with personal information, please contact me so that We will be able
            to
            do the necessary actions.</p>


        <h3>Changes to This Privacy Policy</h3>
        <p>We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for
            any changes. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
        <p>This policy is effective as of <i>2025-01-27</i></p>

        <h3>Contact Us</h3>
        <p>If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at
            <b>flaxstudiohelp@gmail.com</b>.
        </p>
    </div>
</template>
<style scoped>
.privacy-content {
    max-width: var(--max-page-width);
    margin: auto;
    padding: 40px var(--page-margin);
    margin-bottom: 100px;
}

.privacy-content h2 {
    color: var(--color-primary-variant);
    font-weight: 600;
    font-size: 30px;
    margin: 30px 0;
}

.privacy-content h3 {
    color: var(--color-primary-variant);
    font-weight: 600;
    font-size: 22px;
    margin: 30px 0;
    margin-top: 60px;
}

.privacy-content p {
    color: var(--color-on-secondary);
    margin: 20px auto;
}

.privacy-content b {
    font-weight: 600;
}

.privacy-content li {
    color: var(--color-on-secondary);
    margin-bottom: 8px;
    font-weight: 600;
}

.privacy-content li a {
    color: var(--color-primary);
    font-weight: 600;
}
</style>