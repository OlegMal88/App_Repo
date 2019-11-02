import { FieldConfig } from '@shared/interfaces/field.interface';
import { Validators } from '@angular/forms';

const personalInfoFormConfig: FieldConfig[] = [
    {
      type: "input",
      label: "First Name",
      inputType: "text",
      name: "firstName",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Name Required"
        },
      ]
    },
    {
      type: "input",
      label: "Middle Initial",
      inputType: "text",
      name: "middleInitial",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Middle Initial Required"
        },
      ]
    },
    {
        type: "input",
        label: "Last Name",
        inputType: "text",
        name: "lastName",
        validations: [
            {
            name: "required",
            validator: Validators.required,
            message: "Last Name Required"
            },
        ]
    },
    {
        type: "input",
        label: "Other Last Name",
        inputType: "text",
        name: "otherLastName",
        validations: [
          {
            name: "required",
            validator: Validators.required,
            message: "Other Last Name Required"
          },
        ]
    },
    {
        type: "input",
        label: "SSN",
        inputType: "text",
        name: "ssn",
        validations: [
          {
            name: "required",
            validator: Validators.required,
            message: "SSN Required"
          },
        ]
    },
    {
        type: "input",
        label: "Date Of Birth",
        inputType: "text",
        name: "dateOfBirth",
        validations: [
          {
            name: "required",
            validator: Validators.required,
            message: "Date Of Birth Required"
          },
        ]
    },
    {
        type: "input",
        label: "Street Adress",
        inputType: "text",
        name: "streetAdress",
        validations: [
          {
            name: "required",
            validator: Validators.required,
            message: "Street Adress Required"
          },
        ]
    },
    {
        type: "input",
        label: "City",
        inputType: "text",
        name: "city",
        validations: [
          {
            name: "required",
            validator: Validators.required,
            message: "City Required"
          },
        ]
    },
    {
      type: "select",
      label: "State",
      name: "state",
      value: "Washington",
      options: [
        'Washington',
        'Taxes',
        'Florida',
      ],
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "State Required"
        },
      ]
    },
    {
        type: "input",
        label: "Zip Code",
        inputType: "text",
        name: "zipCode",
        validations: [
          {
            name: "required",
            validator: Validators.required,
            message: "Zip Code Required"
          },
        ]
    },
    {
      type: "button",
      label: "Next"
    },
  ];

  export {
    personalInfoFormConfig,
  }