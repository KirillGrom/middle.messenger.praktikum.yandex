export default `
	<label class="enter-field__label">
		{{label}}
		<input  name="{{name}}" type="{{type}}" class="enter-field__input {{class}}"  value=""  />
		{{#if errorText}}
		<span class="enter-field__error">{{errorText}}</span>
		{{/if}}
	</label>
`.trim();
