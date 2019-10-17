import { Injectable } from '@angular/core';
import { AbstractHttpClient } from '@api/http/abstract-http-client.service';
import { HttpConfig } from '@api/http/http-config.model';
import { repositoryConfig } from '@api/http/repositories.config';


@Injectable()
export class CounterService extends AbstractHttpClient {
    config: HttpConfig = repositoryConfig.counter;
}
