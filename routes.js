import facebook from './facebook';
import site from './site';

const Router = (app) => {
  app.use('/facebook', facebook);
  app.use('/', site);
};

export default Router;