export default `<main data-id="{{_id}}" class="main {{class}}">
 {{#if isEmpty}}
    <p class="main__empty-messages">Выберите чат чтобы отправить сообщение</p>
    {{else}}
    <header class="main__header">
        <v-header/>
      </header>
      <section class="main__content">
        <div class="main__content-inner">
            <v-chatMessages/>
        </div>
      </section>
      <footer class="main__footer">
        <v-footer/>
      </footer>
  {{/if}}
</main>`.trim();
