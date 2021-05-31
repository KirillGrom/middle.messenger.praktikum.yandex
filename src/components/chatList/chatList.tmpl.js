export default `
  <ul class="chat-list">
    {{#each contentList}}
      <li  class="chat-list__item">
        {{this}}
      </li>
    {{/each}}
  </ul>
`.trim()