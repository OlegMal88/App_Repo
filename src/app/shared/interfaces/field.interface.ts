export interface FieldConfig {
    type: string;
    label?: string;
    name?: string;
    inputType?: string;
    options?: string[];
    collections?: any;
    value?: any;
    validations?: Validator[];
}
export interface Validator {
    name: string;
    validator: any;
    message: string;
  }
