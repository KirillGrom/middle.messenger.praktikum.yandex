export default `
  <form class="box-modal {{class}}" onsubmit="chat.form.submit(this);return false;">
    <h2 class="box-modal__title">{{title}}</h2>
    {{#if errorTitle}}<h2 class="box-modal__title box-modal__title--error" hidden>{{errorTitle}}</h2>{{/if}}
    {{#if contentMain}}<div class="box-modal__content">
      {{contentMain}}
    </div>
    {{/if}}
    <div class="box-modal__actions">
      {{contentActions}}
    </div>
  </form>
`.trim()