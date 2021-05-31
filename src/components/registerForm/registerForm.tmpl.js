export default `<div class="enter-form {{class}}">
    <h1 class="enter-form__title">Регистрация</h1>
    <form action="" class="enter-form__form" onsubmit="chat.form.submit(this);return false;">
         {{content}}
         <button class=" enter-form__button button">Зарегистрироваться</button>
    </form>
      {{link}}
</div>`.trim()