export default `
	<div class="modal__content"  hidden>
		<form class="box-modal {{class}}" >
			<h2 class="box-modal__title">{{title}}</h2>
			{{#if errorTitle}}
				<h2 class="box-modal__title box-modal__title--error" hidden>{{errorTitle}}</h2>
			{{/if}}
			<div class="box-modal__content">
				<div data-component="enterField"></div>
			</div>
			<div class="box-modal__actions">
				<div data-component="button"></div>
			</div>
		</form>    
	</div>
`.trim();
