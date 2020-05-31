<template>
    <section class="row">
        <div class="left-wrapper">
            <div class="topcase_menu" v-on:click="openMenu()">
                <div class="out-cirlce">
                    <div class="topcase_menu-circle">
                        <span style="background-color:#ffffff;"></span>
                        <span style="background-color:#ffffff;"></span>
                        <span style="background-color:#ffffff;"></span>
                    </div>
                </div>
            </div>
            <img src="https://static.tildacdn.com/tild3964-6137-4766-b131-363465623235/__tiny.png" alt="">
        </div>
        <div class="right-wrapper">
            <ul>
                <li>
                    <router-link to="/">
                    Главная
                    </router-link>
                </li>
                <li>Наши приемущества</li>
                <li>
                    <router-link to="/">
                        Каталог
                    </router-link>
                    <ul>
                        <li><router-link to="/mobile">Mobile</router-link></li>
                        <li><router-link to="/complect">Complect</router-link></li>
                        <li>catalog 3</li>
                        <li>catalog 4</li>
                    </ul>
                </li>
                <li>Уход за изделиями</li>
                <li>Доставка</li>
                <li>Контакты</li>
            </ul>
        </div>
    </section>
</template>

<script>

    export default {
        name: "HeaderLayout",
        components: {},
        data() {
            return {}
        },
        methods: {
            openMenu: function () {
                let getter = document.getElementById('menu')
                console.log(getter);
                getter.style.display = 'grid';
            }
        }

    }
</script>

<style scoped>
    * {
        font-size: 20px;
        font-weight: 500;
        font-family: 'IskraCYR';
    }

    @media screen and (min-width: 1200px) {

        section.row {
            display: grid;
            grid-template-columns: 4fr 15fr;

            justify-content: center;
            align-content: center;

            background-color: rgba(189, 151, 151, 0.60);
            color: white;
            z-index: 3;
        }

        .left-wrapper {
            display: grid;

            grid-template-columns: auto;
            position: relative;
            padding-left: 40px;
        }

        .left-wrapper > img {
            width: 240px;
        }

        .right-wrapper {
            display: grid;

            grid-template-columns: auto;
            align-content: center;
            justify-content: center;
        }

        .right-wrapper > ul {
            display: grid;

            justify-content: center;
            align-content: center;
            grid-template-columns: repeat(6, 1fr);
            height: 80px;
        }

        .right-wrapper > ul > li {
            display: grid;

            justify-content: center;
            align-content: center;
            position: relative;

            height: 80px;
            cursor: pointer;
        }
        .right-wrapper > ul > li > a {
            text-decoration: none;
            color: white;
        }
        .right-wrapper > ul > li > ul  {
            display: none;
            position: inherit;
        }
        .right-wrapper > ul > li:hover > ul   {
            display: block;
            position: absolute;
            top: 80px;
            text-decoration: none;
            list-style: none;

            color: #6b6b6b;

            background-color: #ffffff;
            text-align: left;
            max-width: 250px;
            border-radius: 3px;
            padding: 15px;
            box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.20);
        }

        .right-wrapper > ul > li > ul > li {
            font-size: 14px;
            color: #222;
            width: 200px;
            letter-spacing:1.5px;
            padding-bottom: 5px;
        }
        .right-wrapper > ul > li > ul > li > a {
            font-size: 14px;
            color: #222;
            width: 200px;
            letter-spacing:1.5px;
            padding-bottom: 5px;
            text-decoration: none;
        }

        .t794__arrow::after {
            content: ' ';
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 4px 3px 0 3px;
            position: absolute;
            top: 45%;
            left: 0;
            -moz-transform: translateY(-50%);
            -ms-transform: translateY(-50%);
            -webkit-transform: translateY(-50%);
            -o-transform: translateY(-50%);
            transform: translateY(-50%);
            border-color: transparent transparent transparent transparent;
            border-top-color: inherit;
        }

    }

    @media screen and (min-width: 981px) and (max-width: 1200px) {
        section.row {
            display: grid;
            grid-template-columns: 4fr 15fr;

            justify-content: center;
            align-content: center;

            background-color: rgba(189, 151, 151, 0.60);
            color: white;
        }

        .left-wrapper {
            position: relative;
            padding-left: 20px;
        }

        .left-wrapper > img {
            width: 240px;
        }

        .right-wrapper {
            display: grid;

            grid-template-columns: auto;
            align-content: center;
            justify-content: center;
        }

        .right-wrapper > ul {
            display: grid;

            justify-content: center;
            align-content: center;
            grid-template-columns: repeat(6, 1fr);
            height: 80px;
        }

        .right-wrapper > ul > li {
            display: grid;

            position: relative;
            justify-content: center;
            align-content: center;
            height: 80px;
        }
        .right-wrapper > ul > li > a {
            text-decoration: none;
            color: white;
        }

        .right-wrapper > ul > li > ul  {
            display: none;
            position: inherit;
        }
        .right-wrapper > ul > li:hover > ul   {
            display: block;
            position: absolute;
            top: 80px;
            text-decoration: none;
            list-style: none;

            color: #6b6b6b;

            background-color: #ffffff;
            text-align: left;
            max-width: 250px;
            border-radius: 3px;
            padding: 15px;
            box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.20);
        }

        .right-wrapper > ul > li > ul > li {
            font-size: 14px;
            color: #222;
            width: 200px;
            letter-spacing:1.5px;
            padding-bottom: 5px;
        }
        .right-wrapper > ul > li > ul > li > a {
            font-size: 14px;
            color: #222;
            width: 200px;
            letter-spacing:1.5px;
            padding-bottom: 5px;
            text-decoration: none;
        }


        .t794__arrow::after {
            content: ' ';
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 4px 3px 0 3px;
            position: absolute;
            top: 45%;
            left: 0;
            -moz-transform: translateY(-50%);
            -ms-transform: translateY(-50%);
            -webkit-transform: translateY(-50%);
            -o-transform: translateY(-50%);
            transform: translateY(-50%);
            border-color: transparent transparent transparent transparent;
            border-top-color: inherit;
        }

    }

    @media screen and (min-width: 641px) and (max-width: 980px) {
        .topcase_menu {
            position: fixed;
            top: 10px;
            right: 0;
            bottom: 0;
            left: 10px;
            width: 48px;
            height: 48px;
            cursor: pointer;
        }

        .out-cirlce {
            display: grid;
            width: 48px;
            height: 48px;

            justify-content: center;
            align-content: center;

            border-radius: 50%;
            background-color: #d9a5a5;
            opacity: 0.60;
            padding-top: 5px;
            box-sizing: border-box;
        }

        .topcase_menu-circle {
            display: grid;
            position: relative;


            justify-content: center;

            width: 24px;
            height: 15px;
        }

        .topcase_menu-circle > span {
            height: 2px;
            background: white;
            padding-left: 10px;
            padding-right: 10px;
        }

        section.row {
            display: grid;
            grid-template-rows: auto;

            justify-content: center;
            align-content: center;

            height: auto;

            background-color: rgba(189, 151, 151, 1);
            color: white;
        }

        .left-wrapper {
            padding: 20px;
        }

        .left-wrapper > img {
            width: 240px;
        }

        .right-wrapper {
            display: grid;

            grid-template-rows: auto;
            align-content: center;
            justify-content: center;

            padding: 20px 0;
        }

        .right-wrapper > ul {
            display: grid;

            justify-content: center;
            align-content: center;
            grid-template-rows: auto;
        }

        .right-wrapper > ul > li {
            display: grid;

            justify-content: center;
            align-content: center;
            padding: 10px;
        }
        .right-wrapper > ul > li > a {
            text-decoration: none;
            color: white;
        }
        .right-wrapper > ul > li > ul  {
            display: none;
            position: inherit;
        }
        .right-wrapper > ul > li:hover > ul   {
            display: none;
            position: absolute;
            top: 80px;
            text-decoration: none;
            list-style: none;

            color: #6b6b6b;

            background-color: #ffffff;
            text-align: left;
            max-width: 250px;
            border-radius: 3px;
            padding: 15px;
            box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.20);
        }

        .right-wrapper > ul > li > ul > li {
            font-size: 14px;
            color: #222;
            width: 200px;
            letter-spacing:1.5px;
            padding-bottom: 5px;
        }
        .right-wrapper > ul > li > ul > li > a {
            font-size: 14px;
            color: #222;
            width: 200px;
            letter-spacing:1.5px;
            padding-bottom: 5px;
            text-decoration: none;
        }


        .t794__arrow::after {
            content: ' ';
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 4px 3px 0 3px;
            position: absolute;
            top: 45%;
            left: 0;
            -moz-transform: translateY(-50%);
            -ms-transform: translateY(-50%);
            -webkit-transform: translateY(-50%);
            -o-transform: translateY(-50%);
            transform: translateY(-50%);
            border-color: transparent transparent transparent transparent;
            border-top-color: inherit;
        }

    }

    @media screen and (min-width: 481px) and (max-width: 640px) {
        .topcase_menu {
            position: fixed;
            top: 10px;
            right: 0;
            bottom: 0;
            left: 10px;
            width: 48px;
            height: 48px;
            cursor: pointer;

        }

        .out-cirlce {
            display: grid;
            width: 48px;
            height: 48px;

            justify-content: center;
            align-content: center;

            border-radius: 50%;
            background-color: #d9a5a5;
            opacity: 0.60;
            padding-top: 5px;
            box-sizing: border-box;
        }

        .topcase_menu-circle {
            display: grid;
            position: relative;


            justify-content: center;

            width: 24px;
            height: 15px;
        }

        .topcase_menu-circle > span {
            height: 2px;
            background: white;
            padding-left: 10px;
            padding-right: 10px;
        }

        section.row {
            display: grid;
            grid-template-rows: auto;

            justify-content: center;
            align-content: center;

            height: auto;

            background-color: rgba(189, 151, 151, 1);
            color: white;
        }

        .left-wrapper {
            padding: 20px;
        }

        .left-wrapper > img {
            width: 240px;
        }

        .right-wrapper {
            display: grid;

            grid-template-rows: auto;
            align-content: center;
            justify-content: center;

            padding: 20px 0;
        }

        .right-wrapper > ul {
            display: grid;

            justify-content: center;
            align-content: center;
            grid-template-rows: auto;
        }

        .right-wrapper > ul > li {
            display: grid;

            justify-content: center;
            align-content: center;
            padding: 10px;
        }
        .right-wrapper > ul > li > a {
            text-decoration: none;
            color: white;
        }
        .right-wrapper > ul > li > ul  {
            display: none;
            position: inherit;
        }
        .right-wrapper > ul > li:hover > ul   {
            display: none;
            position: absolute;
            top: 80px;
            text-decoration: none;
            list-style: none;

            color: #6b6b6b;

            background-color: #ffffff;
            text-align: left;
            max-width: 250px;
            border-radius: 3px;
            padding: 15px;
            box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.20);
        }

        .right-wrapper > ul > li > ul > li {
            font-size: 14px;
            color: #222;
            width: 200px;
            letter-spacing:1.5px;
            padding-bottom: 5px;
        }
        .right-wrapper > ul > li > ul > li > a {
            font-size: 14px;
            color: #222;
            width: 200px;
            letter-spacing:1.5px;
            padding-bottom: 5px;
            text-decoration: none;
        }


        .t794__arrow::after {
            content: ' ';
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 4px 3px 0 3px;
            position: absolute;
            top: 45%;
            left: 0;
            -moz-transform: translateY(-50%);
            -ms-transform: translateY(-50%);
            -webkit-transform: translateY(-50%);
            -o-transform: translateY(-50%);
            transform: translateY(-50%);
            border-color: transparent transparent transparent transparent;
            border-top-color: inherit;
        }


    }

    @media screen and (min-width: 321px) and (max-width: 480px) {
        .topcase_menu {
            position: fixed;
            top: 10px;
            right: 0;
            bottom: 0;
            left: 10px;
            width: 48px;
            height: 48px;
            cursor: pointer;
        }

        .out-cirlce {
            display: grid;
            width: 48px;
            height: 48px;

            justify-content: center;
            align-content: center;

            border-radius: 50%;
            background-color: #d9a5a5;
            opacity: 0.60;
            padding-top: 5px;
            box-sizing: border-box;
        }

        .topcase_menu-circle {
            display: grid;
            position: relative;


            justify-content: center;

            width: 24px;
            height: 15px;
        }

        .topcase_menu-circle > span {
            height: 2px;
            background: white;
            padding-left: 10px;
            padding-right: 10px;
        }

        section.row {
            display: grid;
            grid-template-rows: auto;

            justify-content: center;
            align-content: center;

            height: auto;

            background-color: rgba(189, 151, 151, 1);
            color: white;
        }

        .left-wrapper {
            padding: 20px;
        }

        .left-wrapper > img {
            width: 240px;
        }

        .right-wrapper {
            display: grid;

            grid-template-rows: auto;
            align-content: center;
            justify-content: center;

            padding: 20px 0;
        }

        .right-wrapper > ul {
            display: grid;

            justify-content: center;
            align-content: center;
            grid-template-rows: auto;
        }

        .right-wrapper > ul > li {
            display: grid;

            justify-content: center;
            align-content: center;
            padding: 10px;
        }
        .right-wrapper > ul > li > a {
            text-decoration: none;
            color: white;
        }
        .right-wrapper > ul > li > ul  {
            display: none;
            position: inherit;
        }
        .right-wrapper > ul > li:hover > ul   {
            display: none;
            position: absolute;
            top: 80px;
            text-decoration: none;
            list-style: none;

            color: #6b6b6b;

            background-color: #ffffff;
            text-align: left;
            max-width: 250px;
            border-radius: 3px;
            padding: 15px;
            box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.20);
        }

        .right-wrapper > ul > li > ul > li {
            font-size: 14px;
            color: #222;
            width: 200px;
            letter-spacing:1.5px;
            padding-bottom: 5px;
        }
        .right-wrapper > ul > li > ul > li > a {
            font-size: 14px;
            color: #222;
            width: 200px;
            letter-spacing:1.5px;
            padding-bottom: 5px;
            text-decoration: none;
        }


        .t794__arrow::after {
            content: ' ';
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 4px 3px 0 3px;
            position: absolute;
            top: 45%;
            left: 0;
            -moz-transform: translateY(-50%);
            -ms-transform: translateY(-50%);
            -webkit-transform: translateY(-50%);
            -o-transform: translateY(-50%);
            transform: translateY(-50%);
            border-color: transparent transparent transparent transparent;
            border-top-color: inherit;
        }

    }


</style>
