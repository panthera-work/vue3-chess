<template>

    <div id="overlay"></div>
        <router-view/>
</template>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#overlay {
    position: fixed;
    width: 100%;
    height: 100vh;
}
body[data-overlay='error']  #overlay{
    background: red;
    z-index: 10;
    opacity: .3;
}
</style>
