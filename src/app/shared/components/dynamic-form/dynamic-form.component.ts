import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ComponentFactoryResolver,
  ViewContainerRef
} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { FieldConfig, Validator } from '@shared/interfaces/field.interface';
import { PersonalInfoFieldsName } from '@shared/interfaces/personal-info.interface';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styles: []
})
export class DynamicFormComponent implements OnInit {
  @Input() fields: FieldConfig[] = [];

  @Output() save: EventEmitter<any> = new EventEmitter<any>();
  @Output() emitHandler: EventEmitter<any> = new EventEmitter<any>();

  form: FormGroup;

  get value(): PersonalInfoFieldsName {
    return this.form.value;
  }

  constructor(
    private fb: FormBuilder,
    public resolver: ComponentFactoryResolver,
    public container: ViewContainerRef
  ) {
  }

  ngOnInit() {
    this.form = this.createControls();
  }

  onSubmit(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.form.valid) {
      this.save.emit(this.form.value);
    } else {
      this.validateAllFormFields(this.form);
    }
  }

  private createControls(): FormGroup {
    return this.fb.group(this.fields.reduce((acc: FormBuilder, field: FieldConfig) => {
      const control = this.createControl(field);
      return { ...acc, ...control };
    }, {}));
  }

  private createControl(field: FieldConfig): {[key: string]: FormControl} {
    if (field.type === 'button') {
      return;
    }
    const control: FormControl = this.fb.control(
      field.value,
      this.bindValidations(field.validations || [])
    );
    return { [field.name]: control };
  }

  private bindValidations(validations: Validator[]): Validators {
    if (!validations.length) {
      return null;
    }

    const validList = validations.map(valid => valid.validator);
    return Validators.compose(validList);
  }

  private validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((field: any) => {
      const control = formGroup.get(field);
      control.markAsTouched({ onlySelf: true });
    });
  }
}
