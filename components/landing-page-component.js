export default {
  name: 'landing-page-component',
  template: /* html */ `
    <section class="container py-4">
      <h1>Comic Collection Manager</h1>
      <p class="lead">Keep your comic collection in one place.</p>
      <p>Browse the collection, search for an issue, or filter by title, publisher, character, issue number, and year.</p>
      <router-link to="/items" class="btn btn-primary">View collection</router-link>
    </section>
  `,
};
