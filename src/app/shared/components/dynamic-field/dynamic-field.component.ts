import {
    ComponentFactoryResolver,
    Input,
    OnInit,
    ViewContainerRef,
    Output,
    EventEmitter,
    Component
  } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FieldConfig } from '@shared/interfaces/field.interface';
import { componentMapper } from './form-components';


@Component({
  selector: 'app-dynamic-field',
  template: '',
})
export class DynamicFieldComponent implements OnInit {
  @Input() field: FieldConfig;
  @Input() group: FormGroup;

  @Output() emitHandler: EventEmitter<any> = new EventEmitter();

  componentRef: any;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef,
  ) {}

  ngOnInit() {
    this.dynamicCreateComponent();
    this.subscriberForEmitHandler();
  }

  private dynamicCreateComponent() {
    if (!componentMapper[this.field.type]) {
      return;
    }

    const factory = this.resolver.resolveComponentFactory(
      componentMapper[this.field.type]
    );

    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.field = this.field;
    this.componentRef.instance.group = this.group;
  }

  private subscriberForEmitHandler() {
    if (this.componentRef.instance && !this.componentRef.instance.emitHandler) {
      return;
    }

    this.componentRef.instance.emitHandler
      .subscribe((event) => {
        this.emitHandler.emit(event);
      });
  }
}
