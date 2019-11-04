import {
    ComponentFactoryResolver,
    Directive,
    Input,
    OnInit,
    ViewContainerRef,
    Output,
    EventEmitter,
    OnDestroy
  } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ButtonComponent } from '@shared/components/button/button.component';
import { SelectComponent } from '@shared/components/select/select.component';
import { InputComponent } from '@shared/components/input/input.component';
import { FieldConfig } from '@shared/interfaces/field.interface';

const componentMapper = {
  input: InputComponent,
  button: ButtonComponent,
  select: SelectComponent,
};

@Directive({
  selector: '[dynamicField]'
})
export class DynamicFieldDirective implements OnInit, OnDestroy {
  @Input() field: FieldConfig;
  @Input() group: FormGroup;

  @Output() emitHandler: EventEmitter<any> = new EventEmitter();

  destroy$: Subject<boolean> = new Subject<boolean>();
  componentRef: any;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) {}

  ngOnInit() {
    const factory = this.resolver.resolveComponentFactory(
      componentMapper[this.field.type]
    );
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.field = this.field;
    this.componentRef.instance.group = this.group;

    if (this.componentRef.instance.emitHandler) {
      this.componentRef.instance.emitHandler
        .pipe(
          takeUntil(this.destroy$)
        )
        .subscribe((event) => {
          this.emitHandler.emit(event);
        });
    }
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
