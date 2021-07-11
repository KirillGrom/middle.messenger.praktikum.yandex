export default `
	<button> 
		{{#if addButton}}
			<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http:www.w3.org/2000/svg">
				<circle cx="11" cy="11" r="10.25" stroke="#3369F3" stroke-width="1.5"/>
				<line x1="11" y1="5.5" x2="11" y2="16.5" stroke="#3369F3" stroke-width="1.5"/>
				<line x1="5.5" y1="11" x2="16.5" y2="11" stroke="#3369F3" stroke-width="1.5"/>
			</svg>
		{{else if deleteButton}}
			<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http:www.w3.org/2000/svg">
				<circle cx="11" cy="11" r="10.25" stroke="#3369F3" stroke-width="1.5"/>
				<line x1="7.1109" y1="7.11103" x2="14.8891" y2="14.8892" stroke="#3369F3" stroke-width="1.5"/>
				<line x1="7.11078" y1="14.8891" x2="14.889" y2="7.11093" stroke="#3369F3" stroke-width="1.5"/>
			</svg>
		{{else if deleteChat}}
			<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http:www.w3.org/2000/svg">
				<circle cx="11" cy="11" r="10.25" stroke="#3369F3" stroke-width="1.5"/>
				<line x1="7.1109" y1="7.11103" x2="14.8891" y2="14.8892" stroke="#3369F3" stroke-width="1.5"/>
				<line x1="7.11078" y1="14.8891" x2="14.889" y2="7.11093" stroke="#3369F3" stroke-width="1.5"/>
			</svg>
		{{/if}}
		{{buttonText}}
	</button>
`.trim();
