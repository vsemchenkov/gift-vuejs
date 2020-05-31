<template>
    <div class="content">
        <h1>Выберите свой тип</h1>
        <h5>У нас 5 вариантов исполнения бортиков</h5>
        <div class="content-items">
            <div>
                <div class="content-item">
                    <div></div>
                    <h3>Комплекты в кроватку</h3>
                    <button>Смотреть каталог</button>
                </div>
            </div>
            <div>
                <div class="content-item">
                    <div></div>
                    <h3>Комплекты в кроватку</h3>
                    <button>Смотреть каталог</button>
                </div>
            </div>
            <div>
                <div class="content-item">
                    <div></div>
                    <h3>Комплекты в кроватку</h3>
                    <button>Смотреть каталог</button>
                </div>
            </div>
            <div>
                <div class="content-item">
                    <div></div>
                    <h3>Комплекты в кроватку</h3>
                    <button>Смотреть каталог</button>
                </div>
            </div>
            <div>
                <div class="content-item">
                    <div></div>
                    <h3>Комплекты в кроватку</h3>
                    <button>Смотреть каталог</button>
                </div>
            </div>
            <div>
                <div class="content-item">
                    <div></div>
                    <h3>Комплекты в кроватку</h3>
                    <button>Смотреть каталог</button>
                </div>
            </div>
            <div>
                <div class="content-item">
                    <div></div>
                    <h3>Комплекты в кроватку</h3>
                    <button>Смотреть каталог</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CFourBlock"
    }
</script>

<style scoped>
    @media screen and (min-width: 1200px) {
        .content {
            display: grid;
            justify-content: center;
            align-items: center;

            padding-left: 10%;
            padding-right: 10%;
            padding-bottom: 10%;
        }

        .content > h1 {
            font-size: 42px;
            text-align: center;
            color: #6b6b6b;
            padding: 40px;
        }

        .content > h5 {
            font-size: 24px;
            text-align: center;
            color: #6b6b6b;
            padding-bottom: 80px;
        }

        .content-items {
            display: grid;
            justify-content: center;
            align-items: center;

            grid-template-columns: 1fr 1fr 1fr 1fr;
            grid-gap: 20px;
        }

        .content-item {
            display: grid;
            position: relative;
            justify-content: center;
            align-items: start;
            text-align: center;
            width: 260px;
            height: 260px;
            background: url("https://static.tildacdn.com/tild6566-3530-4431-a134-356431356235/komplekt-v-krovatku.jpeg") no-repeat;
            background-size: 260px 260px;
            background-position: center;
            cursor: pointer;
            transition: 0.2s linear;
        }

        .content-item:hover {
            background-size: 280px 280px;
            background-position: center;
        }

        .content-item > div {
            position: absolute;
            width: 260px;
            height: 260px;
            background-image: -moz-linear-gradient(top, rgba(15, 15, 15, 0.0), rgba(0, 0, 0, 0.30));
            background-image: -webkit-linear-gradient(top, rgba(15, 15, 15, 0.0), rgba(0, 0, 0, 0.30));
            background-image: -o-linear-gradient(top, rgba(15, 15, 15, 0.0), rgba(0, 0, 0, 0.30));
            background-image: -ms-linear-gradient(top, rgba(15, 15, 15, 0.0), rgba(0, 0, 0, 0.30));
        }

        .content-item:hover > h3 {
            top: 80px;
            transition: 0.2s linear;
        }

        .content-item > h3 {
            position: relative;
            top: 120px;
            font-size: 22px;
            color: white;
            transition: 0.2s linear;
        }

        .content-item:hover > button {
            display: block;
            opacity: 1;
            cursor: pointer;
            top: 30px;
            transition: 0.2s linear;
        }

        .content-item > button {
            display: block;
            position: relative;
            color: #ffffff;
            font-size: 14px;
            font-family: 'IskraCYR', Arial, sans-serif;
            line-height: 1.55;
            font-weight: 600;
            letter-spacing: 0.5px;
            border-radius: 25px;
            border: 1px solid white;
            background: transparent;
            padding: 10px;
            opacity: 0;
            transition: 0.2s linear;
            top: 10px;
            cursor: pointer;
        }
    }

    @media screen and (min-width: 981px) and (max-width: 1200px) {
        .content {
            display: grid;
            justify-content: center;
            align-items: center;

            padding-left: 10%;
            padding-right: 10%;
            padding-bottom: 10%;
        }

        .content > h1 {
            font-size: 42px;
            text-align: center;
            color: #6b6b6b;
            padding: 40px;
        }

        .content > h5 {
            font-size: 24px;
            text-align: center;
            color: #6b6b6b;
            padding-bottom: 80px;
        }

        .content-items {
            display: grid;
            justify-content: center;
            align-items: center;

            grid-template-columns: 1fr 1fr 1fr;
            grid-gap: 20px;
        }

        .content-item {
            display: grid;
            position: relative;
            justify-content: center;
            align-items: start;
            text-align: center;
            width: 260px;
            height: 260px;
            background: url("https://static.tildacdn.com/tild6566-3530-4431-a134-356431356235/komplekt-v-krovatku.jpeg") no-repeat;
            background-size: 260px 260px;
            background-position: center;
            cursor: pointer;
            transition: 0.2s linear;
        }

        .content-item:hover {
            background-size: 280px 280px;
            background-position: center;
        }

        .content-item > div {
            position: absolute;
            width: 260px;
            height: 260px;
            background-image: -moz-linear-gradient(top, rgba(15, 15, 15, 0.0), rgba(0, 0, 0, 0.30));
            background-image: -webkit-linear-gradient(top, rgba(15, 15, 15, 0.0), rgba(0, 0, 0, 0.30));
            background-image: -o-linear-gradient(top, rgba(15, 15, 15, 0.0), rgba(0, 0, 0, 0.30));
            background-image: -ms-linear-gradient(top, rgba(15, 15, 15, 0.0), rgba(0, 0, 0, 0.30));
        }

        .content-item:hover > h3 {
            top: 80px;
            transition: 0.2s linear;
        }

        .content-item > h3 {
            position: relative;
            top: 120px;
            font-size: 22px;
            color: white;
            transition: 0.2s linear;
        }

        .content-item:hover > button {
            display: block;
            opacity: 1;
            cursor: pointer;
            top: 30px;
            transition: 0.2s linear;
        }

        .content-item > button {
            display: block;
            position: relative;
            color: #ffffff;
            font-size: 14px;
            font-family: 'IskraCYR', Arial, sans-serif;
            line-height: 1.55;
            font-weight: 600;
            letter-spacing: 0.5px;
            border-radius: 25px;
            border: 1px solid white;
            background: transparent;
            padding: 10px;
            opacity: 0;
            transition: 0.2s linear;
            top: 10px;
            cursor: pointer;
        }
    }

    @media screen and (min-width: 641px) and (max-width: 980px) {
        .content {
            display: grid;
            justify-content: center;
            align-items: center;

            padding-left: 10%;
            padding-right: 10%;
            padding-bottom: 10%;
        }

        .content > h1 {
            font-size: 42px;
            text-align: center;
            color: #6b6b6b;
            padding: 40px;
        }

        .content > h5 {
            font-size: 24px;
            text-align: center;
            color: #6b6b6b;
            padding-bottom: 80px;
        }

        .content-items {
            display: grid;
            justify-content: center;
            align-items: center;

            grid-template-columns: 1fr 1fr;
            grid-gap: 20px;
        }

        .content-item {
            display: grid;
            position: relative;
            justify-content: center;
            align-items: start;
            text-align: center;
            width: 260px;
            height: 260px;
            background: url("https://static.tildacdn.com/tild6566-3530-4431-a134-356431356235/komplekt-v-krovatku.jpeg") no-repeat;
            background-size: 260px 260px;
            background-position: center;
            cursor: pointer;
            transition: 0.2s linear;
        }

        .content-item:hover {
            background-size: 280px 280px;
            background-position: center;
        }

        .content-item > div {
            position: absolute;
            width: 260px;
            height: 260px;
            background-image: -moz-linear-gradient(top, rgba(15, 15, 15, 0.0), rgba(0, 0, 0, 0.30));
            background-image: -webkit-linear-gradient(top, rgba(15, 15, 15, 0.0), rgba(0, 0, 0, 0.30));
            background-image: -o-linear-gradient(top, rgba(15, 15, 15, 0.0), rgba(0, 0, 0, 0.30));
            background-image: -ms-linear-gradient(top, rgba(15, 15, 15, 0.0), rgba(0, 0, 0, 0.30));
        }

        .content-item:hover > h3 {
            top: 80px;
            transition: 0.2s linear;
        }

        .content-item > h3 {
            position: relative;
            top: 120px;
            font-size: 22px;
            color: white;
            transition: 0.2s linear;
        }

        .content-item:hover > button {
            display: block;
            opacity: 1;
            cursor: pointer;
            top: 30px;
            transition: 0.2s linear;
        }

        .content-item > button {
            display: block;
            position: relative;
            color: #ffffff;
            font-size: 14px;
            font-family: 'IskraCYR', Arial, sans-serif;
            line-height: 1.55;
            font-weight: 600;
            letter-spacing: 0.5px;
            border-radius: 25px;
            border: 1px solid white;
            background: transparent;
            padding: 10px;
            opacity: 0;
            transition: 0.2s linear;
            top: 10px;
            cursor: pointer;
        }
    }

    @media screen and (min-width: 481px) and (max-width: 640px) {
        .content {
            display: grid;
            justify-content: center;
            align-items: center;

            padding-left: 10%;
            padding-right: 10%;
            padding-bottom: 10%;
        }

        .content > h1 {
            font-size: 42px;
            text-align: center;
            color: #6b6b6b;
            padding: 40px;
        }

        .content > h5 {
            font-size: 24px;
            text-align: center;
            color: #6b6b6b;
            padding-bottom: 80px;
        }

        .content-items {
            display: grid;
            justify-content: center;
            align-items: center;

            grid-template-columns: 1fr;
            grid-gap: 20px;
        }

        .content-items > div {
            display: grid;
            justify-content: center;
            align-items: center;
        }

        .content-item {
            display: grid;
            position: relative;
            justify-content: center;
            align-items: start;
            text-align: center;
            width: 260px;
            height: 260px;
            background: url("https://static.tildacdn.com/tild6566-3530-4431-a134-356431356235/komplekt-v-krovatku.jpeg") no-repeat;
            background-size: 260px 260px;
            background-position: center;
            cursor: pointer;
            transition: 0.2s linear;
        }

        .content-item:hover {
            background-size: 280px 280px;
            background-position: center;
        }

        .content-item > div {
            position: absolute;
            width: 260px;
            height: 260px;
            background-image: -moz-linear-gradient(top, rgba(15, 15, 15, 0.0), rgba(0, 0, 0, 0.30));
            background-image: -webkit-linear-gradient(top, rgba(15, 15, 15, 0.0), rgba(0, 0, 0, 0.30));
            background-image: -o-linear-gradient(top, rgba(15, 15, 15, 0.0), rgba(0, 0, 0, 0.30));
            background-image: -ms-linear-gradient(top, rgba(15, 15, 15, 0.0), rgba(0, 0, 0, 0.30));
        }

        .content-item:hover > h3 {
            top: 80px;
            transition: 0.2s linear;
        }

        .content-item > h3 {
            position: relative;
            top: 120px;
            font-size: 22px;
            color: white;
            transition: 0.2s linear;
        }

        .content-item:hover > button {
            display: block;
            opacity: 1;
            cursor: pointer;
            top: 30px;
            transition: 0.2s linear;
        }

        .content-item > button {
            display: block;
            position: relative;
            color: #ffffff;
            font-size: 14px;
            font-family: 'IskraCYR', Arial, sans-serif;
            line-height: 1.55;
            font-weight: 600;
            letter-spacing: 0.5px;
            border-radius: 25px;
            border: 1px solid white;
            background: transparent;
            padding: 10px;
            opacity: 0;
            transition: 0.2s linear;
            top: 10px;
            cursor: pointer;
        }
    }

    @media screen and (min-width: 321px) and (max-width: 480px) {
        .content {
            display: grid;
            justify-content: center;
            align-items: center;

            padding-left: 10%;
            padding-right: 10%;
            padding-bottom: 10%;
        }

        .content > h1 {
            font-size: 42px;
            text-align: center;
            color: #6b6b6b;
            padding: 40px;
        }

        .content > h5 {
            font-size: 24px;
            text-align: center;
            color: #6b6b6b;
            padding-bottom: 80px;
        }

        .content-items {
            display: grid;
            justify-content: center;
            align-items: center;

            grid-template-columns: 1fr;
            grid-gap: 20px;
        }
        .content-items > div {
            display: grid;
            justify-content: center;
            align-items: center;
        }

        .content-item {
            display: grid;
            position: relative;
            justify-content: center;
            align-items: start;
            text-align: center;
            width: 260px;
            height: 260px;
            background: url("https://static.tildacdn.com/tild6566-3530-4431-a134-356431356235/komplekt-v-krovatku.jpeg") no-repeat;
            background-size: 260px 260px;
            background-position: center;
            cursor: pointer;
            transition: 0.2s linear;
        }

        .content-item:hover {
            background-size: 280px 280px;
            background-position: center;
        }

        .content-item > div {
            position: absolute;
            width: 260px;
            height: 260px;
            background-image: -moz-linear-gradient(top, rgba(15, 15, 15, 0.0), rgba(0, 0, 0, 0.30));
            background-image: -webkit-linear-gradient(top, rgba(15, 15, 15, 0.0), rgba(0, 0, 0, 0.30));
            background-image: -o-linear-gradient(top, rgba(15, 15, 15, 0.0), rgba(0, 0, 0, 0.30));
            background-image: -ms-linear-gradient(top, rgba(15, 15, 15, 0.0), rgba(0, 0, 0, 0.30));
        }

        .content-item:hover > h3 {
            top: 80px;
            transition: 0.2s linear;
        }

        .content-item > h3 {
            position: relative;
            top: 120px;
            font-size: 22px;
            color: white;
            transition: 0.2s linear;
        }

        .content-item:hover > button {
            display: block;
            opacity: 1;
            cursor: pointer;
            top: 30px;
            transition: 0.2s linear;
        }

        .content-item > button {
            display: block;
            position: relative;
            color: #ffffff;
            font-size: 14px;
            font-family: 'IskraCYR', Arial, sans-serif;
            line-height: 1.55;
            font-weight: 600;
            letter-spacing: 0.5px;
            border-radius: 25px;
            border: 1px solid white;
            background: transparent;
            padding: 10px;
            opacity: 0;
            transition: 0.2s linear;
            top: 10px;
            cursor: pointer;
        }
    }
</style>
