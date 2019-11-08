import {
    ComponentFactoryResolver,
    Input,
    OnInit,
    ViewContainerRef,
    Output,
    EventEmitter,
    OnDestroy,
    Component
  } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { FieldConfig } from '@shared/interfaces/field.interface';
import { componentMapper } from './form-components';


@Component({
  selector: 'app-dynamic-field',
  template: '',
})
export class DynamicFieldComponent implements OnInit, OnDestroy {
  @Input() field: FieldConfig;
  @Input() group: FormGroup;

  @Output() emitHandler: EventEmitter<any> = new EventEmitter();

  destroy$: Subject<boolean> = new Subject<boolean>();
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
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe((event) => {
        this.emitHandler.emit(event);
      });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
