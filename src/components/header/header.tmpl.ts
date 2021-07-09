export default `
	<header class="header main__header">
		<div class="header__wrapper">
			<div class="header__info">
				<div data-component="avatar"></div>
				<span class="header__name">{{name}}</span>
			</div>
			<div class="header__actions actions">
				<button class="header__button actions__button">
					<svg width="3" height="16" viewBox="0 0 3 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<circle cx="1.5" cy="2" r="1.5"/>
						<circle cx="1.5" cy="8" r="1.5" />
						<circle cx="1.5" cy="14" r="1.5"/>
					</svg>
				</button>
				<div class="actions__wrapper">
					<ul class="actions__list">
				<li class="actions__item"> 
					<div data-component="buttonAdd"></div>
				</li>
				<li class="actions__item">
					<div data-component="buttonRemove"></div>
				</li>
				<li class="actions__item">
					<div data-component="buttonRemoveChat"></div>
				</li>
			</ul>
				</div>
			</div>
		</div>
		<div data-component="modalAddUser"></div>
		<div data-component="modalRemoveUser"></div>
	</header>
`.trim();
