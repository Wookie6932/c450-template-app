export default {
  name: 'item-detail-page-component',
  setup() {
    const itemsStore = Vue.inject('itemsStore');
    const route = VueRouter.useRoute();

    const selectedItem = Vue.computed(() =>
      itemsStore.items.find((item) => item.id === route.params.id)
    );

    return { itemsStore, selectedItem };
  },

  template: /* html */ `
    <section class="container py-4">
      <router-link to="/items" class="btn btn-link ps-0 mb-3">
        ← Back to collection
      </router-link>

      <div
        v-if="itemsStore.isLoading"
        class="alert alert-secondary"
        role="status">
        Loading comic details...
      </div>

      <div
        v-else-if="itemsStore.error"
        class="alert alert-danger"
        role="alert">
        {{ itemsStore.error }}
      </div>

      <div
        v-else-if="!selectedItem"
        class="alert alert-warning"
        role="alert">
        Comic not found. Return to the collection to choose another comic.
      </div>

      <article v-else class="card shadow-sm">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              v-if="selectedItem.image_url"
              :src="selectedItem.image_url"
              :alt="selectedItem.title + ' issue ' + selectedItem.issue_number + ' cover'"
              class="item-detail-image w-100"
              @error="selectedItem.image_url = ''">

            <div
              v-else
              class="item-detail-image d-flex align-items-center justify-content-center bg-light text-muted">
              No cover available
            </div>
          </div>

          <div class="col-md-8 card-body p-4">
            <h1>
              {{ selectedItem.title }} #{{ selectedItem.issue_number }}
            </h1>

            <dl class="row mt-3">
              <dt class="col-sm-4">Publisher</dt>
              <dd class="col-sm-8">{{ selectedItem.publisher }}</dd>

              <dt class="col-sm-4">Character</dt>
              <dd class="col-sm-8">{{ selectedItem.character }}</dd>

              <dt class="col-sm-4">Issue number</dt>
              <dd class="col-sm-8">{{ selectedItem.issue_number }}</dd>

              <dt class="col-sm-4">Year</dt>
              <dd class="col-sm-8">{{ selectedItem.year }}</dd>

              <dt class="col-sm-4">Comic ID</dt>
              <dd class="col-sm-8">{{ selectedItem.id }}</dd>
            </dl>

            <h2 class="h5">Description</h2>
            <p>{{ selectedItem.description }}</p>
          </div>
        </div>
      </article>
    </section>
  `,
};
