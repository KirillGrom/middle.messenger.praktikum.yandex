export default `
	<div class="main__wrapper">
		{{#if isEmpty}}
			<p class="main__empty-messages">Выберите чат чтобы отправить сообщение</p>
		{{else}}
			<div data-component="header"></div>
			<section class="main__content">
				<div class="main__content-inner">
					<div data-component="chatMessages"></div>
				</div>
			</section>      
		<div data-component="footer"></div>
		{{/if}}
	</div>
`.trim();
