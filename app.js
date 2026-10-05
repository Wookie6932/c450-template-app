import LandingPageComponent from './components/landing-page-component.js';
import AboutPageComponent from './components/about-page-component.js';
import NavbarComponent from './components/navbar-component.js';
import CollectionPageComponent from './components/collection-page-component.js';
import ItemDetailPageComponent from './components/item-detail-page-component.js';

const routes = [
  {
    path: '/',
    component: LandingPageComponent,
  },
  {
    path: '/about',
    component: AboutPageComponent,
  },
  {
    path: '/items',
    component: CollectionPageComponent,
  },
  {
    path: '/items/:id',
    component: ItemDetailPageComponent,
  },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

const app = Vue.createApp({
  setup() {
    const itemsStore = Vue.reactive({
      items: [],
      isLoading: true,
      error: '',
    });

    fetch('items-template.csv')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Could not load CSV data file.');
        }
        return response.text();
      })
      .then((csvText) => {
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: ({ data, errors, meta }) => {
            const fields = ['id', 'title', 'issue_number', 'publisher', 'character', 'year', 'description', 'image_url'];
            const comics = data.map((row) => Object.fromEntries(
              fields.map((field) => [field, String(row[field] || '').trim()])
            ));
            const invalid = !fields.every((field) => meta.fields?.includes(field))
              || new Set(comics.map((comic) => comic.id)).size !== comics.length
              || comics.some((comic) => fields.some((field) => field !== 'image_url' && !comic[field])
                || !/^\d+$/.test(comic.issue_number) || !/^\d{4}$/.test(comic.year));
            itemsStore.error = errors.length || invalid
              ? 'The comic collection could not be read. Check the collection data and try again.' : '';
            itemsStore.items = itemsStore.error ? [] : comics;
            itemsStore.isLoading = false;
          },
          error: () => {
            itemsStore.error = 'The comic collection could not be read. Please refresh and try again.';
            itemsStore.items = [];
            itemsStore.isLoading = false;
          },
        });
      })
      .catch(() => {
        itemsStore.error = 'The comic collection could not be loaded. Please refresh and try again.';
        itemsStore.items = [];
        itemsStore.isLoading = false;
      });

    Vue.provide('itemsStore', itemsStore);

    return {};
  },
});

app.component('navbar-component', NavbarComponent);

app.use(router);
app.mount('#app');
