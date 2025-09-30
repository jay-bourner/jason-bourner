import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import PortfolioView from '../views/PortfolioView.vue'
import ContactView from '../views/ContactView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { 
      title: 'Web Developer West Raynham Norfolk | Jason Bourner Portfolio',
      metaTags: [
        {
          name: 'description',
          content: 'Professional web developer based in West Raynham, Norfolk. Creating responsive websites and web applications for modern technologies.'
        },
        {
          property: 'og:description',
          content: 'Professional web developer based in West Raynham, Norfolk. Creating responsive websites and web applications for modern technologies.'
        }
      ]
    }
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: { 
      title: 'About Jason Bourner | Web Developer West Raynham Norfolk',
      metaTags: [
        {
          name: 'description',
          content: 'Meet Jason Bourner, a Norfolk-based web developer passionate about creating seamless user experiences with modern front-end and back-end tech.'
        },
        {
          property: 'og:description',
          content: 'Meet Jason Bourner, a Norfolk-based web developer passionate about creating seamless user experiences with modern front-end and back-end tech.'
        }
      ]
    }
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: PortfolioView,
    meta: { 
      title: 'Portfolio | Jason Bourner Web Developer Projects Norfolk',
      metaTags: [
        {
          name: 'description',
          content: 'Professional web development portfolio showcasing real-world projects and commercial work. Jason Bourner - Norfolk developer creating quality websites.'
        },
        {
          property: 'og:description',
          content: 'Professional web development portfolio showcasing real-world projects and commercial work. Jason Bourner - Norfolk developer creating quality websites.'
        }
      ]
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
    meta: { 
      title: 'Contact Jason Bourner | Web Developer West Raynham Norfolk',
      metaTags: [
        {
          name: 'description',
          content: 'Get in touch with Jason Bourner, web developer in West Raynham, Norfolk. Available for freelance projects. Contact via email, LinkedIn or GitHub.'
        },
        {
          property: 'og:description',
          content: 'Get in touch with Jason Bourner, web developer in West Raynham, Norfolk. Available for freelance projects. Contact via email, LinkedIn or GitHub.'
        }
      ]
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // e.g., if we have /some/deep/nested/route and /some, /deep, and /nested have titles, only the title of /some will be set.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  
  // If a route with a title was found, set the document (page) title to that value.
  if(nearestWithTitle) document.title = nearestWithTitle.meta.title;

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if(!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    // We use this to track which meta tags we create so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
  // Add the meta tags to the document head.
  .forEach(tag => document.head.appendChild(tag));

  next();
});

export default router
