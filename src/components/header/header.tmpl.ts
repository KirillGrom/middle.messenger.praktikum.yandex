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
					<button> 
						<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="11" cy="11" r="10.25" stroke="#3369F3" stroke-width="1.5"/>
							<line x1="11" y1="5.5" x2="11" y2="16.5" stroke="#3369F3" stroke-width="1.5"/>
							<line x1="5.5" y1="11" x2="16.5" y2="11" stroke="#3369F3" stroke-width="1.5"/>
						</svg>
						Добавить пользователя
					</button>
				</li>
				<li class="actions__item">
					<button>
						<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="11" cy="11" r="10.25" stroke="#3369F3" stroke-width="1.5"/>
							<line x1="7.1109" y1="7.11103" x2="14.8891" y2="14.8892" stroke="#3369F3" stroke-width="1.5"/>
							<line x1="7.11078" y1="14.8891" x2="14.889" y2="7.11093" stroke="#3369F3" stroke-width="1.5"/>
						</svg>
						Удалить пользователя
					</button>
				</li>
				<li class="actions__item">
					<button >
						<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle cx="11" cy="11" r="10.25" stroke="#3369F3" stroke-width="1.5"/>
							<line x1="7.1109" y1="7.11103" x2="14.8891" y2="14.8892" stroke="#3369F3" stroke-width="1.5"/>
							<line x1="7.11078" y1="14.8891" x2="14.889" y2="7.11093" stroke="#3369F3" stroke-width="1.5"/>
						</svg>
						Удалить чат
					</button>
				</li>
			</ul>
				</div>
			</div>
		</div>
	</header>
`.trim();
