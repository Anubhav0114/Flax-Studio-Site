<script setup lang='ts'>
let year = new Date().getFullYear()
</script>
<template>
    <div id="copyright-container">
        <p>Copyright © {{ year }}. All Rights Reserved</p>
    </div>
</template>
<style scoped>
#copyright-container {
    border-top: 1px solid rgb(235, 235, 235);
}

#copyright-container p {
    margin-top: 32px;
    margin-bottom: 32px;
    font-size: 14px;
    color: var(--color-on-secondary);
    text-align: center;
}
</style>