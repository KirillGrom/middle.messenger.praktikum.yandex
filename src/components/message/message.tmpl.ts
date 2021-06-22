export default `
	{{#if isDataTime }}
		<div class="message-item message-item--data">
			<div class="message-item__wrapper">
				<time class="message-item__date-time">{{time}}</time>
			</div>
		</div>
	{{else}}
		<div class="message-item message-item--{{type}}">
			<div class="message-item__wrapper">
				<p class="message-item__text">{{message}}</p>
				<time class="message-item__time">{{time}}</time>
			</div>
		</div>
	{{/if}}
`.trim();
