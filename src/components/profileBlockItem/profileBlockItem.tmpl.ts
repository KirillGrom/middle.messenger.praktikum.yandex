export default `
	<div class="profile-block__item">
		<label class="profile-field">
			<span class="profile-field__name">{{label}}</span>
			{{#if disabled}}
			<input type="{{type}}"  name="{{name}}" class="profile-field__input {{class}}"  value="{{value}}" disabled>
			{{else}}
			<input type="{{type}}" name="{{name}}"  class="profile-field__input {{class}}"  value="{{value}}" >
			{{/if}}
		</label>
	</div>
`.trim();
