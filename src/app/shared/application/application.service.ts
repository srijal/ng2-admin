import { Injectable } from '@angular/core';

@Injectable()
export class ApplicationService {

  public hideThemePanel = true;
  public hideSidebar = true;

  public getConfiguration() {}

  /* private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  } */
}
