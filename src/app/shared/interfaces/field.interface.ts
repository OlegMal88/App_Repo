export interface FieldConfig {
  type: string;
  label?: string;
  name?: string;
  inputType?: string;
  options?: string[];
  collections?: any[];
  value?: any;
  validations?: Validator[];
  tooltip?: string;
  colorClass?: string;
  disabled?: boolean;
  placeholder?: string;
  callbackHandler?: CallbackHandlerNames; // TODO: can use any other name of methods
}
export interface Validator {
  name: string;
  validator: any;
  message: string;
}

export type CallbackHandlerNames = 'back';

