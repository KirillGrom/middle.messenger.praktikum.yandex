export default `<main class="main {{class}}">
 {{#if isEmpty}}
    <p class="main__empty-messages">Выберите чат чтобы отправить сообщение</p>
    {{else}}
    <header class="main__header">
        {{contentHeader}}
      </header>
      <section class="main__content">
        <div class="main__content-inner">
            {{contentMain}}
        </div>
      </section>
      <footer class="main__footer">
        {{contentFooter}}
      </footer>
  {{/if}}
</main>`.trim()