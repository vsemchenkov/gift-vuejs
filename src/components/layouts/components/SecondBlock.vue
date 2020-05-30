<template>
    <div class="content">
        <h1>ПОСМОТРЕТЬ ВСЕ ОТЗЫВЫ</h1>
        <div class="slides">
            <div class="slide">
                <img src="https://thumb.tildacdn.com/tild3738-6261-4238-a239-623638666130/-/cover/283x304/center/center/-/format/webp/HIT_-_3_1.jpeg"
                     alt="">
            </div>
            <div class="slide">
                <img src="https://thumb.tildacdn.com/tild3738-6261-4238-a239-623638666130/-/cover/283x304/center/center/-/format/webp/HIT_-_3_1.jpeg"
                     alt="">
            </div>
            <div class="slide">
                <img src="https://thumb.tildacdn.com/tild3738-6261-4238-a239-623638666130/-/cover/283x304/center/center/-/format/webp/HIT_-_3_1.jpeg"
                     alt="">
            </div>
            <div class="slide">
                <img src="https://thumb.tildacdn.com/tild3738-6261-4238-a239-623638666130/-/cover/283x304/center/center/-/format/webp/HIT_-_3_1.jpeg"
                     alt="">
            </div>
            <div class="slide">
                <img src="https://thumb.tildacdn.com/tild3738-6261-4238-a239-623638666130/-/cover/283x304/center/center/-/format/webp/HIT_-_3_1.jpeg"
                     alt="">
            </div>
            <div class="slide">
                <img src="https://thumb.tildacdn.com/tild3738-6261-4238-a239-623638666130/-/cover/283x304/center/center/-/format/webp/HIT_-_3_1.jpeg"
                     alt="">
            </div>
            <div class="slide">
                <img src="https://thumb.tildacdn.com/tild3738-6261-4238-a239-623638666130/-/cover/283x304/center/center/-/format/webp/HIT_-_3_1.jpeg"
                     alt="">
            </div>
            <div class="slide">
                <img src="https://thumb.tildacdn.com/tild3738-6261-4238-a239-623638666130/-/cover/283x304/center/center/-/format/webp/HIT_-_3_1.jpeg"
                     alt="">
            </div>
        </div>
        <div class="for-btn">
            <button class="btn">Кнопка</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SecondBlock"
    }
</script>

<style scoped>
    * {
        color: white;
    }

    @media screen and (min-width: 1200px) {
        .content {
            display: grid;
            justify-content: center;
            align-items: center;

            min-height: 980px;
            height: 100%;
            background: rgba(255, 255, 255, 0.6);
        }

        .content > h1 {
            display: grid;
            justify-content: center;
            align-items: center;

            padding-top: 25px;
            text-align: center;
        }

        .content > .for-btn {
            display: grid;

            justify-content: center;
            align-items: center;
        }

        .btn {
            width: 340px;
            margin-bottom: 55px;
        }

        .slides {
            display: grid;

            grid-template-columns: 1fr 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr;

            grid-gap: 15px;
        }

        .for-btn {
            padding: 15px;
        }

        .btn {
            color: #ffffff;
            font-size: 20px;
            font-family: 'IskraCYR', Arial, sans-serif;
            line-height: 1.55;
            font-weight: 600;
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
    }

    @media screen and (min-width: 981px) and (max-width: 1200px) {
        .content {
            display: grid;
            justify-content: center;
            align-items: center;

            min-height: 980px;
            height: 100%;
            background: rgba(255, 255, 255, 0.6);
        }

        .content > h1 {
            display: grid;
            justify-content: center;
            align-items: center;

            padding-top: 25px;
            padding-bottom: 25px;
            text-align: center;
        }

        .content > .for-btn {
            display: grid;

            justify-content: center;
            align-items: center;
        }

        .btn {
            width: 340px;
            margin-bottom: 35px;
            margin-top: 35px;
        }

        .slides {
            display: grid;

            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr;

            grid-gap: 15px;
        }
        .for-btn {
            padding: 15px;
        }

        .btn {
            color: #ffffff;
            font-size: 20px;
            font-family: 'IskraCYR', Arial, sans-serif;
            line-height: 1.55;
            font-weight: 600;
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
    }

    @media screen and (min-width: 641px) and (max-width: 980px) {
        .content {
            display: grid;
            justify-content: center;
            align-items: center;

            min-height: 980px;
            height: 100%;
            background: rgba(255, 255, 255, 0.6);
        }

        .content > h1 {
            display: grid;
            justify-content: center;
            align-items: center;

            padding-top: 25px;
            padding-bottom: 25px;
            text-align: center;
        }

        .content > .for-btn {
            display: grid;

            justify-content: center;
            align-items: center;
        }

        .btn {
            width: 340px;
            margin-bottom: 35px;
            margin-top: 35px;
        }

        .slides {
            display: grid;

            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr 1fr;

            grid-gap: 15px;
        }

        .slide > img {
            width: 250px;
        }
        .for-btn {
            padding: 15px;
        }

        .btn {
            color: #ffffff;
            font-size: 20px;
            font-family: 'IskraCYR', Arial, sans-serif;
            line-height: 1.55;
            font-weight: 600;
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
    }

    @media screen and (min-width: 481px) and (max-width: 640px) {
        .content {
            display: grid;
            justify-content: center;
            align-items: center;

            min-height: 980px;
            height: 100%;
            background: rgba(255, 255, 255, 0.6);
        }

        .content > h1 {
            display: grid;
            justify-content: center;
            align-items: center;

            padding-top: 25px;
            padding-bottom: 25px;
            text-align: center;
        }

        .content > .for-btn {
            display: grid;

            justify-content: center;
            align-items: center;
        }
        .for-btn {
            padding: 15px;
        }

        .btn {
            width: 340px;
            margin-bottom: 35px;
            margin-top: 35px;
        }

        .slides {
            display: grid;

            justify-content: center;
            align-items: center;

            grid-template-columns: 1fr 1fr;
            grid-template-rows: repeat();

            grid-gap: 15px;

            min-width: 100px;
        }

        .slide {
            display: grid;

            justify-content: center;
            align-items: center;
        }

        .slide > img {
            display: grid;
            justify-content: center;
            align-items: center;
            width: 200px;
        }
        .for-btn {
            padding: 15px;
        }

        .btn {
            color: #ffffff;
            font-size: 20px;
            font-family: 'IskraCYR', Arial, sans-serif;
            line-height: 1.55;
            font-weight: 600;
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
    }

    @media screen and (min-width: 321px) and (max-width: 480px) {
        .content {
            display: grid;
            justify-content: center;
            align-items: center;

            min-height: 980px;
            height: 100%;
            background: rgba(255, 255, 255, 0.6);
        }

        .content > h1 {
            display: grid;
            justify-content: center;
            align-items: center;

            padding-top: 25px;
            padding-bottom: 25px;
            text-align: center;
        }

        .content > .for-btn {
            display: grid;

            justify-content: center;
            align-items: center;
        }
        .for-btn {
            padding: 15px;
        }

        .btn {
            width: 340px;
            margin-bottom: 35px;
            margin-top: 35px;
        }

        .slides {
            display: grid;

            justify-content: center;
            align-items: center;

            grid-template-columns: 1fr 1fr;
            grid-template-rows: repeat();

            grid-gap: 15px;

            min-width: 100px;
        }

        .slide {
            display: grid;

            justify-content: center;
            align-items: center;
        }

        .slide > img {
            display: grid;
            justify-content: center;
            align-items: center;
            width: 150px;
        }
        .for-btn {
            padding: 15px;
        }

        .btn {
            color: #ffffff;
            font-size: 20px;
            font-family: 'IskraCYR', Arial, sans-serif;
            line-height: 1.55;
            font-weight: 600;
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
    }
</style>
