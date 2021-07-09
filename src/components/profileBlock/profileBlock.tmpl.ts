export default `
	<div class="profile-block">
		<div class="profile-block__wrapper">
			<div data-component="buttonAvatar"></div>
			<h2 class="profile-block__name">{{name}}</h2>
			<div class="profile-block__info">
				<ul class="profile-block__list">
					<div data-component="profileBlockItem"></div>
				</ul>
			</div>
			<ul class="profile-actions">
				<li class="profile-actions__item"> 
					<div class="profile-actions__link">
						<div data-component="linkProfileEdit"></div>
					</div>
				</li>
				<li class="profile-actions__item">
					<div class="profile-actions__link">
						<div data-component="linkPasswordEdit"></div>
					</div>
				</li>
				<li class="profile-actions__item">
					<div class="profile-actions__link profile-actions__link--red">
						<div data-component="linkLogout"></div>
					</div>
				</li>
			</ul>
		</div>
		<div data-component="modal"></div>
	</div>
`.trim();
