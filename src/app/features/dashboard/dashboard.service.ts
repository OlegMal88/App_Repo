import { Injectable } from '@angular/core';

@Injectable()
class DashboardService {
  processModel(model: object) {
    return {
      ...model,
      newField: 100
    };
  }
}

export { DashboardService };
