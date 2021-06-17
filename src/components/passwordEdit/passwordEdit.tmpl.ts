export default `<div class=" profile-block password-edit  {{class}}">
 <v-avatar/>
 <div class="profile-block__info password-edit__wrapper">
    <form action="" class="profile-edit__form">
           {{#each inputList}}
          <div  class="profile-block__item password-edit__item">
            <label class="profile-field">
                <span class="profile-field__name">{{label}}</span>
                <input type="{{type}}" name="{{name}}" class="profile-field__input {{class}}"  value="{{value}}" {{disabled}}">
            </label>
          </div>
        {{/each}}
        <button class="button profile-edit__button">Сохранить</button>
    </form>
</div>

</div>`;
