export default `<div class=" profile-block  profile-edit {{class}}">
 {{avatar}}
 <div class="profile-block__info">
 <form action="" class="profile-edit__form" onsubmit="chat.form.submit(this);return false;">
       {{#each inputList}}
      <div  class="profile-block__item">
        <label class="profile-field">
            <span class="profile-field__name">{{label}}</span>
            <input type="{{type}}"  name="{{name}}" class="profile-field__input {{class}}"  value="{{value}}" {{disabled}}">
        </label>
      </div>
    {{/each}}
<button class="button profile-edit__button">Сохранить</button>
</form>
</div>

</div>`