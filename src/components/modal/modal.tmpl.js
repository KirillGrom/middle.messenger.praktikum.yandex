export default `
  <div class="modal" hidden>
    <div class="modal__inner">
      {{#each contentList}}
        <div class="modal__content" data-id="{{this.id}}" hidden>
          {{this.content}}
        </div>
      {{/each}}
    </div>
  </div>
`.trim()