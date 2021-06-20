export default `
	<label class="profile-field">
		<span class="profile-field__name">{{label}}</span>
		{{#if disabled}}
		<input type="{{type}}" class="profile-field__input {{class}}"  value="{{value}}" disabled>
		{{else}}
		<input type="{{type}}" class="profile-field__input {{class}}"  value="{{value}}" >
		{{/if}}
	</label>
`.trim();
