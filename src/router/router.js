import React from "react";
import { Switch } from "react-router-dom";
import { AppRoute, GuestRoute } from ".";
import { Auth } from "../pages/Auth";
import { Main } from "../pages/Main";
import { NewBook } from "../pages/NewBook";
import { Books } from "../pages/Books";
import { Book } from "../pages/Book";
import { EditBook } from "../pages/EditBook"

function AppRouter() {
  return (
    <Switch>
      <GuestRoute path="/login" exact>
        <Auth isLogin={true} />
      </GuestRoute>
      <GuestRoute path="/signup" exact>
        <Auth />
      </GuestRoute>
      <AppRoute exact path="/books/:bookId">
        <Book />
      </AppRoute>
      <AppRoute exact path="/books">
        <Books />
      </AppRoute>
      <AppRoute exact path="/new-book">
        <NewBook />
      </AppRoute>
      <AppRoute exact path="/books/:bookId/update">
        <EditBook />
      </AppRoute>
      <AppRoute exact path="/">
        <Main />
      </AppRoute>
    </Switch>
  );
}

export default AppRouter;
