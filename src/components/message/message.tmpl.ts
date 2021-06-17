export default `<li data-id="{{_id}}" class="message-item {{class}}">
<div class="message-item__wrapper">
 {{#if isDataTime }}
   <time class="message-item__date-time">{{time}}</time>
 {{else}}
    <p class="message-item__text">{{message}}</p>
    <time class="message-item__time">{{time}}</time>
</div>
  {{/if}}
</li>`;
