export interface FieldConfig {
  type: string;
  label?: string;
  name?: string;
  inputType?: string;
  options?: string[];
  collections?: any;
  value?: any;
  validations?: Validator[];
  tooltip?: string;
  colorClass?: string;
  disabled?: boolean;
  placeholder?: string;
  callbackHandler?: (name: string, arg: any[]) => any;
}
export interface Validator {
  name: string;
  validator: any;
  message: string;
}
