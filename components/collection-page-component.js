export default {
  name: 'collection-page-component',
  setup() {
    const itemsStore = Vue.inject('itemsStore');
    const search = Vue.ref('');
    const filters = Vue.reactive({ title: '', publisher: '', character: '', issue_number: '', year: '' });
    const fields = [
      { key: 'title', label: 'Title' }, { key: 'publisher', label: 'Publisher' },
      { key: 'character', label: 'Character' }, { key: 'issue_number', label: 'Issue number' },
      { key: 'year', label: 'Year' },
    ];

    const options = (key) => [...new Set(itemsStore.items.map((item) => item[key]))]
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

    const filteredItems = Vue.computed(() => {
      const query = search.value.trim().toLowerCase();
      return itemsStore.items.filter((item) => {
        const text = item.title + ' #' + item.issue_number + ' ' + item.publisher + ' ' + item.character + ' ' + item.year + ' ' + item.description;
        return text.toLowerCase().includes(query)
          && fields.every(({ key }) => !filters[key] || item[key] === filters[key]);
      });
    });

    function clearFilters() {
      search.value = '';
      fields.forEach(({ key }) => { filters[key] = ''; });
    }

    return { itemsStore, search, filters, fields, options, filteredItems, clearFilters };
  },

  template: /* html */ `
    <section class="container py-4">
      <h1>Collection</h1>
      <p class="text-muted">Browse your comics or search for a specific issue.</p>

      <div v-if="itemsStore.isLoading" class="alert alert-secondary" role="status">Loading comics...</div>

      <div v-else-if="itemsStore.error" class="alert alert-danger" role="alert">{{ itemsStore.error }}</div>

      <div v-else-if="itemsStore.items.length === 0" class="alert alert-secondary">No comics in the collection yet.</div>

      <template v-else>
        <div class="bg-white border rounded p-3 mb-4">
          <label for="comic-search" class="form-label">Search comics</label>

          <input
            id="comic-search"
            v-model="search"
            type="search"
            class="form-control mb-3"
            placeholder="Title, character, issue number, or keyword">

          <div class="row g-3">
            <div v-for="field in fields" :key="field.key" class="col-12 col-sm-6 col-lg">
              <label :for="'filter-' + field.key" class="form-label">{{ field.label }}</label>

              <select
                :id="'filter-' + field.key"
                v-model="filters[field.key]"
                class="form-select">

                <option value="">All</option>
                <option
                  v-for="value in options(field.key)"
                  :key="value"
                  :value="value">
                  {{ value }}
                </option>
              </select>
            </div>
          </div>

          <button
            type="button"
            class="btn btn-outline-secondary mt-3"
            @click="clearFilters">
            Clear search and filters
          </button>
        </div>

        <p role="status" aria-live="polite">
          {{ filteredItems.length }} of {{ itemsStore.items.length }} comics shown
        </p>

        <p v-if="filteredItems.length === 0" class="alert alert-secondary">
          No comics match your search and filters.
        </p>

        <div v-else class="row g-3">
          <div
            class="col-12 col-md-6 col-lg-4"
            v-for="item in filteredItems"
            :key="item.id">

            <article class="card h-100 shadow-sm">
              <img
                v-if="item.image_url"
                :src="item.image_url"
                :alt="item.title + ' issue ' + item.issue_number + ' cover'"
                class="card-img-top collection-card-image"
                @error="item.image_url = ''">

              <div
                v-else
                class="collection-card-image d-flex align-items-center justify-content-center bg-light text-muted">
                No cover available
              </div>

              <div class="card-body d-flex flex-column">
                <h2 class="h5">{{ item.title }} #{{ item.issue_number }}</h2>

                <p class="text-muted">
                  {{ item.publisher }} · {{ item.year }}
                </p>

                <p class="collection-description flex-grow-1">
                  {{ item.description }}
                </p>

                <router-link
                  :to="'/items/' + encodeURIComponent(item.id)"
                  class="btn btn-outline-primary"
                  :aria-label="'View details for ' + item.title + ' issue ' + item.issue_number">
                  View details
                </router-link>
              </div>
            </article>
          </div>
        </div>
      </template>
    </section>
  `,
};
