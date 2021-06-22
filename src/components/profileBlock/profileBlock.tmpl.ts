export default `
	<div class="profile-block">
		<div class="profile-block__wrapper">
			<button  class="profile-block__edit-avatar">
				<div data-component="avatar"></div>
				<span>Поменять аватар</span>
			</button>
			<h2 class="profile-block__name">{{name}}</h2>
			<div class="profile-block__info">
				<ul class="profile-block__list">
					<div data-component="profileBlockItem"></div>
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
		</div>
	</div>
`.trim();
