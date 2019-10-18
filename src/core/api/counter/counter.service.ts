import {Injectable} from '@angular/core';
import {AbstractHttpClient} from '@api/base/abstract-http-client.service';
import {HttpConfig} from '@api/mockServer/http-config.model';
import {repositoryConfig} from '@api/mockServer/repositories.config';

@Injectable({
  providedIn: 'root',
})
class CounterService extends AbstractHttpClient {
  configUrl: HttpConfig = repositoryConfig.counter;
}

export {CounterService};
