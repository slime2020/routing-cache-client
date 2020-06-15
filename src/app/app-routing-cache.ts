import {
  RouteReuseStrategy,
  DefaultUrlSerializer,
  ActivatedRouteSnapshot,
  DetachedRouteHandle
} from '@angular/router';

export class AppRoutingCache implements RouteReuseStrategy {

  public static handlers: { [key: string]: DetachedRouteHandle } = {};

  private getKey(route: ActivatedRouteSnapshot) {
    // tslint:disable-next-line: no-string-literal
    return route['_routerState'].url;
    // const routePath = route.routeConfig.path.replace(/\//g, '_');
    // // tslint:disable-next-line: no-string-literal
    // const routeUrl = route['_routerState'].url.replace(/\//g, '_');
    // return routePath + '_' + routeUrl;
  }

  public shouldDetach(route: ActivatedRouteSnapshot): boolean {
    const key = this.getKey(route);
    console.log('shouldDetach> key:',
      key,
      !route.routeConfig,
      '||',
      !!route.routeConfig.loadChildren);
    if (!route.routeConfig || !!route.routeConfig.loadChildren) {
      return false;
    }
    return true;
  }

  public store(
    route: ActivatedRouteSnapshot,
    handle: DetachedRouteHandle
  ): void {
    const key = this.getKey(route);
    console.log('store> key:', key, 'handler', AppRoutingCache.handlers);
    if (!history.state.shouldNotCache) {
      if (!handle) {
        return;
      }
      AppRoutingCache.handlers[key] = handle;
    } else {
      // tslint:disable-next-line: no-string-literal
      const partOfKey: string = route['_routerState'].url.replace(/\//g, '_');
      Object.keys(AppRoutingCache.handlers).map((item) => {
        // console.log('item:', item);
        if (item.includes(partOfKey)) {
          AppRoutingCache.handlers[item] = null;
          delete AppRoutingCache.handlers[item];
          console.log('removed:', item);
        }
      });
    }
  }

  public shouldAttach(route: ActivatedRouteSnapshot): boolean {
    const key = this.getKey(route);
    const handler = AppRoutingCache.handlers[key];
    console.log('shouldAttach> key:',
      key, !!route.routeConfig,
      '&&',
      !!AppRoutingCache.handlers[key],
      'route:', route.routeConfig,
      'handler:', handler);
    return !!route.routeConfig && !!handler;
  }

  public retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {

    if (!route.routeConfig || route.routeConfig.loadChildren) {
      const keyNotFound = this.getKey(route);
      console.log('retrieve> keyA:', keyNotFound, 'handler', AppRoutingCache.handlers);
      return null;
    }
    const key = this.getKey(route);
    console.log('retrieve> keyB:', key, 'handler', AppRoutingCache.handlers);
    return AppRoutingCache.handlers[key];
  }

  public shouldReuseRoute(
    future: ActivatedRouteSnapshot,
    current: ActivatedRouteSnapshot
  ): boolean {
    console.log('shouldReuseRoute> ',
      future.routeConfig, '->', current.routeConfig,
      future.routeConfig === current.routeConfig,
      '&&',
      JSON.stringify(future.params) === JSON.stringify(current.params));
    return (
      future.routeConfig === current.routeConfig &&
      JSON.stringify(future.params) === JSON.stringify(current.params)
    );
  }
}
