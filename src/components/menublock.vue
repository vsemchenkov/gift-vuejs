<template>
    <div class="content-menu">
        <div class="close" v-on:click="close()">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="content-items">
            <div class="image-cont">
                <img src="https://static.tildacdn.com/tild6134-3030-4562-b332-356530313563/Logo__2.png" alt="">
            </div>
            <div class="menu-items">
                <ul>
                    <li>Главная страница</li>
                    <li>url link</li>
                    <li>url link</li>
                    <li>url link</li>
                    <li>url link</li>
                    <li>url link</li>
                </ul>
            </div>
            <button class="btn">Связаться с нами</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "menublock"
    }
</script>

<style scoped>
    .content-menu {
        display: grid;

        justify-content: center;

        padding: 40px 40px 40px 40px;
    }

    .content-items > .image-cont {
        display: grid;

        justify-content: center;
        align-items: center;

        padding-bottom: 20px;
    }

    .image-cont > img {
        width: 100px;
    }

    .menu-items {
        color: #474343;
        font-size: 24px;
        font-weight: 400;
        text-decoration: none;
        text-align: left;
    }

    .menu-items > ul > li {
        text-decoration: none;
        list-style: none;
        padding-bottom: 15px;
    }

    .close {
        position: absolute;
        right: 0;
        width: 40px;
        height: 40px;
        cursor: pointer;
    }
    .close > span:nth-child(1) {
        display: block;
        position: absolute;
        width: 90%;
        opacity: 1;
        left: 0;
        top: 18px;
        transform: rotate(45deg);
        height: 2px;
        background: black;
    }
    .close > span:nth-child(2) {
        display: block;
        position: absolute;
        width: 90%;
        opacity: 1;
        left: 0;
        top: 18px;
        transform: rotate(135deg);
        height: 2px;
        background: black;
    }
    .content-items {
        text-align: center;
    }
    .content-items > button {
        margin-top: 10px;
        color: #ffffff;
        font-size: 14px;
        font-family: 'IskraCYR',Arial,sans-serif;
        line-height: 1.55;
        font-weight: 100;
        letter-spacing: 0.5px;
        border-width: 2px;
        border-radius: 25px;
        background-color: #dba2a2;
        background-position: center center;
        border-color: #d4b6b6;
        border-style: none;
        transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out, border-color 0.2s ease-in-out;
        padding: 10px;
    }

</style>

<script>
    module.exports = {
        data () {
            return {}
        },
        methods: {
            close: function () {
                let getter = document.getElementById('menu')
                console.log(getter);
                getter.style.display = 'none';
            }
        }
    }
</script>
