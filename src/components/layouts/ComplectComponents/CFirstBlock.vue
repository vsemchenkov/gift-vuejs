<template>
    <div class="content">
        <div class="content-items">
            <h1>Бортики в кроватку</h1>
            <p>Более 100 расцветок ткани
                под любой интерьер комнаты, по вашим размерам</p>
        </div>
        <svg class="t-cover__arrow-svg" style="fill:#ffffff;" x="0px" y="0px" width="38.417px" height="18.592px" viewBox="0 0 38.417 18.592"><g><path d="M19.208,18.592c-0.241,0-0.483-0.087-0.673-0.261L0.327,1.74c-0.408-0.372-0.438-1.004-0.066-1.413c0.372-0.409,1.004-0.439,1.413-0.066L19.208,16.24L36.743,0.261c0.411-0.372,1.042-0.342,1.413,0.066c0.372,0.408,0.343,1.041-0.065,1.413L19.881,18.332C19.691,18.505,19.449,18.592,19.208,18.592z"></path></g></svg>
    </div>
</template>

<script>
    export default {
        name: "CFirstBlock"
    }
</script>

<style scoped>
    @media screen and (min-width: 1200px) {
        .content {
            position: relative;
            display: grid;
            justify-content: end;
            align-items: center;
            height: 100vh;
            width: 100%;
            background-image: url("https://thumb.tildacdn.com/tild3766-3037-4437-b864-626437643034/-/format/webp/llnatill_2.jpg");
            background-position: center center;
            background-size: 100%;
        }
        .content-items {
            display: grid;

            justify-content: center;
            align-items: center;
        }
        .content-items > h1 {
            color: #fff;
            padding: 20px 0 20px 0;
            letter-spacing: .3px;
            font-size: 52px;
            line-height: 1.23;
            padding-bottom: 40px;
            text-align: center;
            padding-right: 20%;
        }
        .content-items > p {

            color: #fff;

            font-size: 22px;
            text-align: center;
            padding-right: 20%;
        }
        .content > svg {
            bottom: 40px;
            right: 0;
            left: 0;
            position: absolute;
            margin: auto;

            animation-name: arrowUpDown;
            animation-duration: 1s;
            animation-iteration-count: infinite;

            cursor: pointer;
        }
        @keyframes arrowUpDown {
            0% {
                bottom: 30px;
            }
            50% {
                bottom: 40px;
            }
            100% {
                bottom: 30px;
            }
        }
    }

    @media screen and (min-width: 981px) and (max-width: 1200px) {
        .content {
            position: relative;
            display: grid;
            justify-content: end;
            align-items: center;
            height: 100vh;
            width: 100%;
            background-image: url("https://thumb.tildacdn.com/tild3766-3037-4437-b864-626437643034/-/format/webp/llnatill_2.jpg");
            background-position: center center;
            background-size: 100%;
        }
        .content-items {
            display: grid;

            justify-content: center;
            align-items: center;
        }
        .content-items > h1 {
            color: #fff;
            padding: 20px 0 20px 0;
            letter-spacing: .3px;
            font-size: 52px;
            line-height: 1.23;
            padding-bottom: 40px;
            text-align: center;
            padding-right: 20%;
        }
        .content-items > p {

            color: #fff;

            font-size: 22px;
            text-align: center;
            padding-right: 20%;
        }
        .content > svg {
            bottom: 40px;
            right: 0;
            left: 0;
            position: absolute;
            margin: auto;

            animation-name: arrowUpDown;
            animation-duration: 1s;
            animation-iteration-count: infinite;
            cursor: pointer;
        }
        @keyframes arrowUpDown {
            0% {
                bottom: 30px;
            }
            50% {
                bottom: 40px;
            }
            100% {
                bottom: 30px;
            }
        }
    }

    @media screen and (min-width: 641px) and (max-width: 980px) {
        .content {
            position: relative;
            display: grid;
            justify-content: center;
            align-items: center;
            height: 100vh;
            width: 100%;
            background-image: url("https://thumb.tildacdn.com/tild3766-3037-4437-b864-626437643034/-/format/webp/llnatill_2.jpg");
            background-position: center center;
            background-size: auto;
        }
        .content-items {
            display: grid;

            justify-content: center;
            align-items: center;
        }
        .content-items > h1 {
            color: #fff;
            padding: 20px 0 20px 0;
            letter-spacing: .3px;
            font-size: 52px;
            line-height: 1.23;
            padding-bottom: 40px;
            text-align: center;
        }
        .content-items > p {

            color: #fff;

            font-size: 22px;
            text-align: center;
        }
        .content > svg {
            bottom: 40px;
            right: 0;
            left: 0;
            position: absolute;
            margin: auto;

            animation-name: arrowUpDown;
            animation-duration: 1s;
            animation-iteration-count: infinite;
            cursor: pointer;
        }
        @keyframes arrowUpDown {
            0% {
                bottom: 30px;
            }
            50% {
                bottom: 40px;
            }
            100% {
                bottom: 30px;
            }
        }

    }

    @media screen and (min-width: 481px) and (max-width: 640px) {
        .content {
            position: relative;
            display: grid;
            justify-content: center;
            align-items: center;
            height: 100vh;
            width: 100%;
            background-image: url("https://thumb.tildacdn.com/tild3766-3037-4437-b864-626437643034/-/format/webp/llnatill_2.jpg");
            background-position: center center;
            background-size: auto;
        }
        .content-items {
            display: grid;

            justify-content: center;
            align-items: center;
        }
        .content-items > h1 {
            color: #fff;
            padding: 20px 0 20px 0;
            letter-spacing: .3px;
            font-size: 52px;
            line-height: 1.23;
            padding-bottom: 40px;
            text-align: center;
        }
        .content-items > p {

            color: #fff;

            font-size: 22px;
            text-align: center;
        }
        .content > svg {
            bottom: 40px;
            right: 0;
            left: 0;
            position: absolute;
            margin: auto;

            animation-name: arrowUpDown;
            animation-duration: 1s;
            animation-iteration-count: infinite;
            cursor: pointer;
        }
        @keyframes arrowUpDown {
            0% {
                bottom: 30px;
            }
            50% {
                bottom: 40px;
            }
            100% {
                bottom: 30px;
            }
        }
    }

    @media screen and (min-width: 321px) and (max-width: 480px) {
        .content {
            position: relative;
            display: grid;
            justify-content: center;
            align-items: center;
            height: 100vh;
            width: 100%;
            background-image: url("https://thumb.tildacdn.com/tild3766-3037-4437-b864-626437643034/-/format/webp/llnatill_2.jpg");
            background-position: center center;
            background-size: auto;
        }
        .content-items {
            display: grid;

            justify-content: center;
            align-items: center;
        }
        .content-items > h1 {
            color: #fff;
            padding: 20px 0 20px 0;
            letter-spacing: .3px;
            font-size: 52px;
            line-height: 1.23;
            padding-bottom: 40px;
            text-align: center;
        }
        .content-items > p {

            color: #fff;

            font-size: 22px;
            text-align: center;
        }
        .content > svg {
            bottom: 40px;
            right: 0;
            left: 0;
            position: absolute;
            margin: auto;

            animation-name: arrowUpDown;
            animation-duration: 1s;
            animation-iteration-count: infinite;

            cursor: pointer;
        }
        @keyframes arrowUpDown {
            0% {
                bottom: 30px;
            }
            50% {
                bottom: 40px;
            }
            100% {
                bottom: 30px;
            }
        }
    }
</style>
