import { Params, RouterStateSnapshot } from '@angular/router';
import { RouterNavigationAction, RouterStateSerializer } from '@ngrx/router-store';

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

export {
  DEFAULT_ROUTER_STATE,
  RouterState,
  RouterAction,
  RouterData,
  CustomSerializer
};
