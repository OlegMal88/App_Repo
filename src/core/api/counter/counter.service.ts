import { Injectable } from '@angular/core';
import { BaseHttpService } from '@api/base/base-http.service';
import { HttpConfig } from '@api/mockServer/http-config.model';
import { repositoryConfig } from '@api/mockServer/repositories.config';

@Injectable({
  providedIn: 'root',
})
class CounterService extends BaseHttpService {
  configUrl: HttpConfig = repositoryConfig.counter;
}

export { CounterService };
