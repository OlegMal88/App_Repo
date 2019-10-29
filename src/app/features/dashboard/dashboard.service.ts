import { Injectable } from '@angular/core';

@Injectable()
class DashboardService {
  processModel(model: any) {
    return {
      ...model,
      newField: 100
    };
  }
}

export { DashboardService };
