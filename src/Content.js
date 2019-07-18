import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Basket from './pages/Basket/BasketPage';
import NotFound from './pages/NotFound/NotFound';

const Content = () => (
  <div>
    <Switch>
      <Route exact path="/" render={() => <Basket />} />
      <Route exact path="/coco" render={() => <QuestionList />} />
      <Route
        exact
        path="/questions/:id"
        render={({ match }) => <QuestionDetail question_id={match.params.id} />}
      />
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default Content;
