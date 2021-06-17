export default `<div class=" profile-block {{class}}" data-id="{{_id}}">
 <button  class="profile-block__edit-avatar" onclick="chat.modal.openModal('box-modal-add-file')">
 <v-avatar/>
 <span>Поменять аватар</span>
</button>
 <h2 class="profile-block__name">{{name}}</h2>
 <div class="profile-block__info">
  <ul class="profile-block__list">
       {{#each inputList}}
      <li  class="profile-block__item">
        <label class="profile-field">
            <span class="profile-field__name">{{label}}</span>
            <input type="{{type}}" class="profile-field__input {{class}}"  value="{{value}}" disabled="{{disabled}}">
        </label>
      </li>
    {{/each}}
</ul>
</div>
<ul class="profile-actions">
<li class="profile-actions__item">
<a href="/profileEdit.html" class="profile-actions__link">Изменить данные</a>
</li>
<li class="profile-actions__item">
   <a href="/passwordEdit.html" class="profile-actions__link" >Изменить пароль</a>
</li>
<li class="profile-actions__item">
    <a href="/login.html" class="profile-actions__link  profile-actions__link--red ">Выйти</a>
</li>
</ul>

</div>`;
