export default `<div class="enter-form {{class}}">
    <h1 class="enter-form__title">Вход</h1>
    <form class="enter-form__form" onsubmit="chat.form.submit(this);return false;">
         {{content}}
         <button class=" enter-form__button button">Авторизоваться</button>
    </form>
      {{link}}
</div>`.trim()