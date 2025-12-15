import type { HttpClient } from '../http/http-client';

export abstract class BaseResource {
  constructor(protected http: HttpClient) {}
}
