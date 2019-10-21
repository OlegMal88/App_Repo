import {Injectable} from '@angular/core';
import {BaseHttp} from '@api/base/base-http.service';
import {HttpConfig} from '@api/mockServer/http-config.model';
import {repositoryConfig} from '@api/mockServer/repositories.config';

@Injectable()
class CounterService extends BaseHttp {
  configUrl: HttpConfig = repositoryConfig.counter;
}

export {CounterService};
