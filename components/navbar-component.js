export default {
  name: 'navbar-component',
  template: /* html */ `
    <nav class="navbar bg-white border-bottom px-3 gap-2" aria-label="Main navigation">
      <router-link class="navbar-brand" to="/">Comic Collection Manager</router-link>
      <div class="d-flex flex-wrap gap-2">
        <router-link class="btn btn-outline-primary" exact-active-class="active" to="/">Home</router-link>
        <router-link class="btn btn-outline-primary" active-class="active" to="/items">Collection</router-link>
        <router-link class="btn btn-outline-primary" active-class="active" to="/about">About</router-link>
      </div>
    </nav>
  `,
};
