import { pipe } from 'rxjs';
import { map, pairwise, startWith } from 'rxjs/operators';
import { Params, RouterStateSnapshot } from '@angular/router';
import { RouterNavigationAction, RouterStateSerializer } from '@ngrx/router-store';
import { ofType } from '@ngrx/effects';
import { ROUTER_NAVIGATED, RouterNavigatedAction } from '@ngrx/router-store';

const DEFAULT_ROUTER_STATE = {
  payload: {
    routerState: {
      url: ''
    }
  }
} as RouterNavigationAction<RouterState>;

interface RouterState {
  url: string;
  params?: Params;
}

interface RouterAction { 
  payload: { routerState: RouterState  } 
}

interface RouterData {
  activatedUrl: string;
  deactivateUrl: string;
  activatedParams: any,
  deactivateParams: any,
}

class CustomSerializer implements RouterStateSerializer<RouterState> {
  public serialize(routerState: RouterStateSnapshot): RouterState {
    let route = routerState.root;

    while (route.firstChild) {
      route = route.firstChild;
    }

    const { url } = routerState;
    const { params } = route;

    return { url, params };
  }
}

const routerNavigatedState = pipe(
  ofType<RouterNavigatedAction<RouterState>>(ROUTER_NAVIGATED),
  startWith(DEFAULT_ROUTER_STATE),
  pairwise(),
  map((actions: [RouterAction, RouterAction]) => ({
    deactivateUrl: actions[0].payload.routerState.url,
    deactivateParams: actions[0].payload.routerState.params || {},
    activatedUrl: actions[1].payload.routerState.url,
    activatedParams: actions[1].payload.routerState.params || {},
  }))
);

export {
  DEFAULT_ROUTER_STATE,
  RouterState,
  RouterAction,
  RouterData,
  CustomSerializer,
  routerNavigatedState,
};
