import DashBoard from './views/DashBoard.js';
import Posts from './views/Posts.js';
import Settings from './views/Settings.js';

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const router = async () => {
  const routes = [
    { path: '/', view: DashBoard },
    { path: '/posts', view: Posts },
    { path: '/settings', view: Settings },
  ];

  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      isMatch: location.pathname === route.path,
    };
  });

  //console.log(potentialMatches);

  let match = potentialMatches.find(
    (potentialMatches) => potentialMatches.isMatch
  );

  console.log(match);

  if (!match) {
    match = {
      route: routes[0],
      isMatch: true,
    };
  }

  const view = new match.route.view();

  console.log(view);
  document.querySelector('#app').innerHTML = await view.getHtml();
};

//뒤로가기
window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', (e) => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });
  router();
});
