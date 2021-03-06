export default `
	<div class="search">
		<label class="search__label">
			<input name="search" class="search__input" />
			<span class="search__placeholder placeholder">
				<svg  class="placeholder__icon"  width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http:www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M11.5922 11.4139C10.1603 12.8458 7.83871 12.8458 6.40679 11.4139C4.97486 9.98193 4.97486 7.66033 6.40679 6.2284C7.83871 4.79648 10.1603 4.79648 11.5922 6.2284C13.0242 7.66033 13.0242 9.98193 11.5922 11.4139ZM12.0326 12.7968C10.0724 14.2962 7.25681 14.1495 5.46398 12.3567C3.51136 10.404 3.51136 7.23822 5.46398 5.28559C7.4166 3.33297 10.5824 3.33297 12.535 5.28559C14.3278 7.07834 14.4746 9.89376 12.9754 11.854L16.5421 15.4207L15.5993 16.3635L12.0326 12.7968Z" fill="#999999"/>
				</svg>
				<span class="placeholder__text">{{text}}</span>
			</span>
		</label>
	</div>
`.trim();
