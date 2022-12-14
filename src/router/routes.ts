import { RouteRecordRaw } from 'vue-router';
import MainLayout from 'src/layouts/MainLayout.vue';
import { LocaleRouteRecord, useLocaleRouter } from './LocaleRouter';

const r: LocaleRouteRecord[] = [
  // dashboard
  {
    pathId: 'home',
    layout: MainLayout,
    page: 'HomePage.vue',
    description: 'home.description',
    name: 'home',
  },
  // about
  // {
  //   pathId: 'about',
  //   layout: MainLayout,
  //   page: 'AboutPage.vue',
  //   title: 'about.title',
  //   description: 'about.description',
  //   name: 'about',
  // },
  // contact
  // {
  //   pathId: 'contact',
  //   layout: MainLayout,
  //   page: 'ContactPage.vue',
  //   title: 'contact.title',
  //   name: 'contact',
  // },
  // imprint & legal
  {
    pathId: 'imprint',
    layout: MainLayout,
    page: 'ImprintPage.vue',
    title: 'imprint.title',
    name: 'imprint',
  },
  {
    pathId: 'privacy',
    layout: MainLayout,
    page: 'PrivacyPage.vue',
    title: 'privacy.title',
    name: 'privacy',
  },
];

const localeRouter = useLocaleRouter();

const routes: RouteRecordRaw[] = [];
r.forEach((record) => {
  routes.push(...localeRouter.createRouteRecord(record));
});

routes.push(
  {
    path: '/:locale(de|en)?/:catchAll(.*)*',
    component: MainLayout,
    children: [{
      path: '',
      component: () => import('src/pages/ErrorNotFound.vue'),
      meta: {},
      props: true,
    }],
  },
);

export default routes;
