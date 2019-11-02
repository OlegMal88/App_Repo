import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from '@shared/interfaces/field.interface';

@Component({
  selector: "app-select",
  templateUrl: './select.component.html',
})
export class SelectComponent {
  field: FieldConfig;
  group: FormGroup;
}