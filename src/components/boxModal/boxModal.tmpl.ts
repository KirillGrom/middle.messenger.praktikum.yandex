export default `
 <div class="modal__content" data-id="{{id}}" hidden>
 <form class="box-modal {{class}}" >
    <h2 class="box-modal__title">{{title}}</h2>
    {{#if errorTitle}}<h2 class="box-modal__title box-modal__title--error" hidden>{{errorTitle}}</h2>{{/if}}
    <div class="box-modal__content">
      <v-enterField/>
    </div>
    <div class="box-modal__actions">
      <v-button/>
    </div>
  </form>    
  </div>

`.trim();
