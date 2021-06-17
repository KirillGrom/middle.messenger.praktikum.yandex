export default `
<li  class="chat-list__item">
    <a  href="{{href}}" class="chat-item"  tabindex="1">
        <v-avatar/>
        <div class="chat-item__description">
              <span class="chat-item__name">{{name}}</span>
              <time class="chat-item__datetime">{{datetime}}</time>
            <p class="chat-item__last-message">{{lastMessageText}}</p>
            <span class="chat-item__count-new-message" {{#if isCountNewMessageHidden}}hidden{{/if}}>{{countNewMessage}}</span>
        </div>
    </a>
</li>`.trim();
