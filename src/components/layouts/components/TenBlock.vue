<template>
    <div class="content">
        <div class="content-image">
            <img width="100%" src="https://static.tildacdn.com/tild3063-6330-4631-b461-303863303662/_MG_0423-2.jpg"
                 alt="">
        </div>
        <div class="content-form">
            <h1>Напишите нам</h1>
            <h2>Письмо от клиента - это всегда счастье :)</h2>
            <form action="">
                <input type="text" name="Email" placeholder="Введите E-mail">
                <input type="text" name="Name" placeholder="Введите Имя">
                <textarea name="Textarea" placeholder="Напишите сообщение" rows="3" spellcheck="false"></textarea>
                <button type="submit">Отправить</button>
            </form>
            <p>Нажимая на кнопку, Вы даете согласие на обработку своих персональных данных и соглашаетесь c
                <a href="#">"Политикой конфиденциальности"</a>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TenBlock"
    }
</script>

<style scoped>


    @media screen and (min-width: 1200px) {
        .content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            width: 100%;

            background: white;
        }

        .content-img {
            width: 50%;
        }

        .content-form {
            padding: 10%;
        }

        .content-form > h1 {
            font-size: 42px;
            line-height: 1.23;
            padding-bottom: 20px;
            font-family: 'IskraCYR', Arial, sans-serif;
            font-weight: 600;
            color: #4a4949;
        }

        .content-form > h2 {
            font-size: 20px;
            line-height: 1.55;
            padding-bottom: 30px;
            font-family: 'IskraCYR', Arial, sans-serif;
            font-weight: 300;
            color: #4a4949;
        }

        .content-form > form {
            position: relative;
        }

        .content-form > form > input {
            outline: none;
            padding-left: 0 !important;
            padding-right: 0 !important;
            border-top: 0 !important;
            border-right: 0 !important;
            border-left: 0 !important;
            background-color: transparent !important;
            border-radius: 0 !important;
            border-bottom: 1px solid #b3b3b3;

            margin: 0;
            font-family: 'IskraCYR', Arial, sans-serif;
            height: 60px;
            font-size: 16px;
            line-height: 1.33;
            width: 100%;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            -webkit-appearance: none;

        }

        .content-form > form > textarea {
            color: #000000;
            border: 1px solid #b3b3b3;
            height: 102px;
            padding-top: 17px;
            outline: none;
            padding-left: 0 !important;
            padding-right: 0 !important;
            border-top: 0 !important;
            border-right: 0 !important;
            border-left: 0 !important;
            background-color: transparent !important;
            border-radius: 0 !important;


            font-family: 'IskraCYR', Arial, sans-serif;
            font-size: 16px;
            line-height: 1.33;
            width: 100%;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            outline: none;
            -webkit-appearance: none;
            border-radius: 0;
        }

        .content-form > form > button {
            color: #ffffff;
            background-color: #d4b6b6;
            border-radius: 30px;
            -moz-border-radius: 30px;
            -webkit-border-radius: 30px;
            margin-top: 20px;

            outline: none;
            border: none;
            padding: 20px;
            width: 200px;
        }

        .content-form > p {
            padding: 20px 0px 0px 0px;
        }

        .content-form > p >  a {
            text-decoration: none;
            list-style: none;
            color: #d17171 !important;
        }
    }

    @media screen and (min-width: 981px) and (max-width: 1200px) {
        .content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            width: 100%;

            background: white;
        }

        .content-img {
            width: 50%;
        }

        .content-form {
            padding: 10%;
        }

        .content-form > h1 {
            font-size: 42px;
            line-height: 1.23;
            padding-bottom: 20px;
            font-family: 'IskraCYR', Arial, sans-serif;
            font-weight: 600;
            color: #4a4949;
        }

        .content-form > h2 {
            font-size: 20px;
            line-height: 1.55;
            padding-bottom: 30px;
            font-family: 'IskraCYR', Arial, sans-serif;
            font-weight: 300;
            color: #4a4949;
        }

        .content-form > form {
            position: relative;
        }

        .content-form > form > input {
            outline: none;
            padding-left: 0 !important;
            padding-right: 0 !important;
            border-top: 0 !important;
            border-right: 0 !important;
            border-left: 0 !important;
            background-color: transparent !important;
            border-radius: 0 !important;
            border-bottom: 1px solid #b3b3b3;

            margin: 0;
            font-family: 'IskraCYR', Arial, sans-serif;
            height: 60px;
            font-size: 16px;
            line-height: 1.33;
            width: 100%;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            -webkit-appearance: none;

        }

        .content-form > form > textarea {
            color: #000000;
            border: 1px solid #b3b3b3;
            height: 102px;
            padding-top: 17px;
            outline: none;
            padding-left: 0 !important;
            padding-right: 0 !important;
            border-top: 0 !important;
            border-right: 0 !important;
            border-left: 0 !important;
            background-color: transparent !important;
            border-radius: 0 !important;


            font-family: 'IskraCYR', Arial, sans-serif;
            font-size: 16px;
            line-height: 1.33;
            width: 100%;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            outline: none;
            -webkit-appearance: none;
            border-radius: 0;
        }

        .content-form > form > button {
            color: #ffffff;
            background-color: #d4b6b6;
            border-radius: 30px;
            -moz-border-radius: 30px;
            -webkit-border-radius: 30px;
            margin-top: 20px;

            outline: none;
            border: none;
            padding: 20px;
            width: 200px;
        }

    }

    @media screen and (min-width: 641px) and (max-width: 980px) {
        .content {
            display: grid;
            grid-template-columns: 1fr;
            width: 100%;

            background: white;
        }

        .content-img {
            width: 50%;
        }

        .content-form {
            padding: 10%;
        }

        .content-form > h1 {
            font-size: 42px;
            line-height: 1.23;
            padding-bottom: 20px;
            font-family: 'IskraCYR', Arial, sans-serif;
            font-weight: 600;
            color: #4a4949;
        }

        .content-form > h2 {
            font-size: 20px;
            line-height: 1.55;
            padding-bottom: 30px;
            font-family: 'IskraCYR', Arial, sans-serif;
            font-weight: 300;
            color: #4a4949;
        }

        .content-form > form {
            position: relative;
        }

        .content-form > form > input {
            outline: none;
            padding-left: 0 !important;
            padding-right: 0 !important;
            border-top: 0 !important;
            border-right: 0 !important;
            border-left: 0 !important;
            background-color: transparent !important;
            border-radius: 0 !important;
            border-bottom: 1px solid #b3b3b3;

            margin: 0;
            font-family: 'IskraCYR', Arial, sans-serif;
            height: 60px;
            font-size: 16px;
            line-height: 1.33;
            width: 100%;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            -webkit-appearance: none;

        }

        .content-form > form > textarea {
            color: #000000;
            border: 1px solid #b3b3b3;
            height: 102px;
            padding-top: 17px;
            outline: none;
            padding-left: 0 !important;
            padding-right: 0 !important;
            border-top: 0 !important;
            border-right: 0 !important;
            border-left: 0 !important;
            background-color: transparent !important;
            border-radius: 0 !important;


            font-family: 'IskraCYR', Arial, sans-serif;
            font-size: 16px;
            line-height: 1.33;
            width: 100%;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            outline: none;
            -webkit-appearance: none;
            border-radius: 0;
        }

        .content-form > form > button {
            color: #ffffff;
            background-color: #d4b6b6;
            border-radius: 30px;
            -moz-border-radius: 30px;
            -webkit-border-radius: 30px;
            margin-top: 20px;

            outline: none;
            border: none;
            padding: 20px;
            width: 200px;
        }

    }

    @media screen and (min-width: 481px) and (max-width: 640px) {
        .content {
            display: grid;
            grid-template-columns: 1fr;
            width: 100%;

            background: white;
        }

        .content-img {
            width: 50%;
        }

        .content-form {
            padding: 10%;
        }

        .content-form > h1 {
            font-size: 42px;
            line-height: 1.23;
            padding-bottom: 20px;
            font-family: 'IskraCYR', Arial, sans-serif;
            font-weight: 600;
            color: #4a4949;
        }

        .content-form > h2 {
            font-size: 20px;
            line-height: 1.55;
            padding-bottom: 30px;
            font-family: 'IskraCYR', Arial, sans-serif;
            font-weight: 300;
            color: #4a4949;
        }

        .content-form > form {
            position: relative;
        }

        .content-form > form > input {
            outline: none;
            padding-left: 0 !important;
            padding-right: 0 !important;
            border-top: 0 !important;
            border-right: 0 !important;
            border-left: 0 !important;
            background-color: transparent !important;
            border-radius: 0 !important;
            border-bottom: 1px solid #b3b3b3;

            margin: 0;
            font-family: 'IskraCYR', Arial, sans-serif;
            height: 60px;
            font-size: 16px;
            line-height: 1.33;
            width: 100%;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            -webkit-appearance: none;

        }

        .content-form > form > textarea {
            color: #000000;
            border: 1px solid #b3b3b3;
            height: 102px;
            padding-top: 17px;
            outline: none;
            padding-left: 0 !important;
            padding-right: 0 !important;
            border-top: 0 !important;
            border-right: 0 !important;
            border-left: 0 !important;
            background-color: transparent !important;
            border-radius: 0 !important;


            font-family: 'IskraCYR', Arial, sans-serif;
            font-size: 16px;
            line-height: 1.33;
            width: 100%;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            outline: none;
            -webkit-appearance: none;
            border-radius: 0;
        }

        .content-form > form > button {
            color: #ffffff;
            background-color: #d4b6b6;
            border-radius: 30px;
            -moz-border-radius: 30px;
            -webkit-border-radius: 30px;
            margin-top: 20px;

            outline: none;
            border: none;
            padding: 20px;
            width: 200px;
        }
        .content-form > p {
            padding-top: 20px;
        }


    }

    @media screen and (min-width: 321px) and (max-width: 480px) {
        .content {
            display: grid;
            grid-template-columns: 1fr;
            width: 100%;

            background: white;
        }

        .content-img {
            width: 50%;
        }

        .content-form {
            padding: 10%;
        }

        .content-form > h1 {
            font-size: 42px;
            line-height: 1.23;
            padding-bottom: 20px;
            font-family: 'IskraCYR', Arial, sans-serif;
            font-weight: 600;
            color: #4a4949;
        }

        .content-form > h2 {
            font-size: 20px;
            line-height: 1.55;
            padding-bottom: 30px;
            font-family: 'IskraCYR', Arial, sans-serif;
            font-weight: 300;
            color: #4a4949;
        }

        .content-form > form {
            position: relative;
        }

        .content-form > form > input {
            outline: none;
            padding-left: 0 !important;
            padding-right: 0 !important;
            border-top: 0 !important;
            border-right: 0 !important;
            border-left: 0 !important;
            background-color: transparent !important;
            border-radius: 0 !important;
            border-bottom: 1px solid #b3b3b3;

            margin: 0;
            font-family: 'IskraCYR', Arial, sans-serif;
            height: 60px;
            font-size: 16px;
            line-height: 1.33;
            width: 100%;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            -webkit-appearance: none;

        }

        .content-form > form > textarea {
            color: #000000;
            border: 1px solid #b3b3b3;
            height: 102px;
            padding-top: 17px;
            outline: none;
            padding-left: 0 !important;
            padding-right: 0 !important;
            border-top: 0 !important;
            border-right: 0 !important;
            border-left: 0 !important;
            background-color: transparent !important;
            border-radius: 0 !important;


            font-family: 'IskraCYR', Arial, sans-serif;
            font-size: 16px;
            line-height: 1.33;
            width: 100%;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            outline: none;
            -webkit-appearance: none;
            border-radius: 0;
        }

        .content-form > form > button {
            color: #ffffff;
            background-color: #d4b6b6;
            border-radius: 30px;
            -moz-border-radius: 30px;
            -webkit-border-radius: 30px;
            margin-top: 20px;

            outline: none;
            border: none;
            padding: 20px;
            width: 200px;
        }
        .content-form > p {
            padding-top: 20px;
        }

    }
</style>
