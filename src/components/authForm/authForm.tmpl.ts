export default `<div class="enter-form {{class}}" data-id="{{_id}}">
    <h1 class="enter-form__title">Вход</h1>
    <form class="enter-form__form" >
         <v-enterField/>
         <button class=" enter-form__button button">Авторизоваться</button>
    </form>
     <v-link/>
</div>`.trim();
