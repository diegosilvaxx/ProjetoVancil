function getRoutesFromContext() {
  const routesContext = require.context('../modules', true, /.routes./);
  let routes = [];

  routesContext.keys().forEach(route => {
    routes = [...routes, ...routesContext(route).default];
  });

  return routes;
}

const routes = getRoutesFromContext();

export default routes;
