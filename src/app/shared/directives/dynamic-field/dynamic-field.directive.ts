import {
    ComponentFactoryResolver,
    Directive,
    Input,
    OnInit,
    ViewContainerRef
  } from "@angular/core";
  import { FormGroup } from "@angular/forms";
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
    selector: "[dynamicField]"
})
export class DynamicFieldDirective implements OnInit {
    @Input() field: FieldConfig;
    @Input() group: FormGroup;
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

        console.log(this.componentRef.instance.group)
    }
}
  