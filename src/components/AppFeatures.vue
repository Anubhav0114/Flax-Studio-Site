<script setup lang='ts'>
</script>
<template>
    <div class="features-container">
        <h2>App Features</h2>
        <div class="features">
            <div class="card reveal">
                <h3>Drawing Tools</h3>
                <p>The app should offer a variety of drawing tools such as a pen, pencil, brush, eraser, and more. Users
                    should be able to easily switch between tools and customize the thickness and color of each. </p>
            </div>
            <div class="card reveal">
                <h3>Shapes</h3>
                <p> The app should allow users to draw different shapes like rectangles, circles, and triangles, as well as
                    free-form shapes like curves and lines. Users should be able to easily adjust the size and position of
                    these shapes. </p>
            </div>
            <div class="card reveal">
                <h3>Export and Import</h3>
                <p>The app should allow users to export their drawings in different formats like PNG, JPG, or SVG, and share
                    them via email, social media, or other apps. It should also allow users to import images or photos to
                    use as a reference or as a part of their drawing. </p>
            </div>
            <div class="card reveal">
                <h3>Undo and Redo</h3>
                <p>The app should offer the ability to undo and redo actions, giving users the freedom to experiment and
                    make changes without fear of losing their work.
                </p>
            </div>

            <div class="card reveal">
                <h3>Save and Favorites</h3>
                <p>The app should allow users to save their drawings and create a favorite list for easy access.
                </p>
            </div>

            <div class="card reveal">
                <h3>User-friendly Interface</h3>
                <p>The app should have a user-friendly interface, with easy-to-use tools and clear instructions to help
                    users get started quickly and efficiently. It should also be optimized for different screen sizes and
                    orientations.
                </p>
            </div>
        </div>

        <p>By incorporating these features, your Draw On app can provide users with a powerful and enjoyable drawing experience.</p>
    </div>
</template>
<style scoped>
.features-container {
    max-width: var(--max-page-width);
    margin: 60px auto;
    margin-top: 100px;
    padding: 0 var(--page-margin);
    background-color: White;
}

.features-container h2 {
    color: var(--color-primary);
    font-weight: 600;
    font-size: 30px;
    margin: 30px 0;
    text-align: center;
}

.features-container>p {
    color: var(--color-on-secondary);
    max-width: 600px;
    margin: 40px auto;
    margin-top: 80px;
    text-align: center;
}

.features {
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
}

.features .card {
    padding: 24px 0;
    width: 250px;
    background-color: white;
    border-radius: 6px;
    box-shadow: 0px 4px 26px rgba(115, 64, 188, 0.2);
}


.features .card h3 {
    font-weight: 600;
    font-size: 18px;
    text-align: center;
    color: var(--color-primary-variant);
}

.features .card p {
    text-align: center;
    color: var(--color-on-secondary);
    margin: 8px;
    font-size: 16px;
}</style>