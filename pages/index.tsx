import React from 'react';
import { WizardProps } from '../bin';
import StepsProps from '../bin/Steps.Props';
import Wizard from '../bin/Wizard';

import BaseComponentProps, {
  BaseValidatorProps,
  Form,
  FormProps,
  MultilineTextBox,
  MultilineTextBoxProps,
  PlainMarkup,
  PlainMarkupProps,
  RadioButton,
  RadioButtonOption,
  RadioButtonProps,
  RequiredValidator,
  ShowIf,
  ShowIfProps,
  TextBox,
} from 'react-forms-typescript';

const Step1: React.FC<StepsProps> = (props) => {
  return <h1>Start</h1>;
};

const Step2: React.FC<StepsProps> = ({ state, setState }) => {
  return (
    <>
      <h2>A simple counter {state ?? 0}</h2>
      <button
        onClick={(e) => {
          setState(1 + (state ?? 0));
        }}
      >
        +
      </button>
    </>
  );
};

const Step3: React.FC<StepsProps> = ({ state, setState }) => {
  const formProps: FormProps = {
    name: 'test-form',
    enableInlineValidation: true,
    heading: '',
    submitForm: (_, plainJson) => {
      setState(plainJson);
    },
    showValidationSummary: true,
  };

  const requiredValidator: BaseValidatorProps = { name: 'name_required' };
  const commentsRequiredValidator: BaseValidatorProps = {
    name: 'comments_required',
  };

  const streetTextBoxProps: BaseComponentProps = {
    id: 'street',
    name: 'street',
    label: 'Street / House number',
    placeholder: 'Street address',
    value: state?.street ?? '',
    showIfCallback: ({ data }) => data === 'give_details',
  };

  const showDetailsInputBox: ShowIfProps = {
    id: 'user_decided_to_give_details',
  };

  const nameTextBoxProps: BaseComponentProps = {
    id: 'name',
    label: 'Name :',
    placeholder: 'Provide name ....',
    validationMessage: 'Please provide the name',
    name: 'name',
    value: state?.name ?? '',
    showIfCallback: ({ data }) => data === 'give_details',
  };

  const multilineTextBoxProps: MultilineTextBoxProps = {
    id: 'comments',
    name: 'comments',
    label: 'Comments',
    placeholder: 'Enter comments',
    rows: 10,
    columns: 20,
    validationMessage: 'Please provide the comments',
    value: state?.comments ?? 'NA',
  };

  const radioButtonProps: RadioButtonProps = {
    legend: 'About your personal information',
    name: 'choice_detail',
    radioButtonOptions: [
      new RadioButtonOption('Provide your details', 'give_details'),
      new RadioButtonOption('No I dont want to give my details', 'no_details'),
    ],
    label: 'choice_deetail',
    id: 'choice_detail',
  };

  const plainMarkupProps: PlainMarkupProps = {
    id: 'plain_markup_prop',
    parentElementValue: (data) => {
      if (data) {
        const value = data.data;
        return (
          <p>
            You have entered : {value} / Characters : {value.length}
          </p>
        );
      }
    },
  };

  return (
    <>
      <h1>Step 2</h1>
      <div className="form-container">
        <Form formProps={formProps}>
          <RequiredValidator requiredValidatorProps={commentsRequiredValidator}>
            <MultilineTextBox multilineTextBoxProps={multilineTextBoxProps}>
              <PlainMarkup plainMarkupProps={plainMarkupProps} />
            </MultilineTextBox>
          </RequiredValidator>

          <RequiredValidator
            requiredValidatorProps={{ name: 'options_required' }}
          >
            <RadioButton radioButtonProps={radioButtonProps}>
              <ShowIf showIfProps={showDetailsInputBox}>
                <RequiredValidator requiredValidatorProps={requiredValidator}>
                  <TextBox textBoxProps={nameTextBoxProps} />
                </RequiredValidator>
                <TextBox textBoxProps={streetTextBoxProps} />
              </ShowIf>
            </RadioButton>
          </RequiredValidator>

          <button>Submit Form</button>
        </Form>
      </div>
    </>
  );
};

const IndexPage = () => {
  const wizardProps: WizardProps = {
    showNavigationOrientation: 'bottom',
    showNavigationLinks: true,
    steps: [
      Step1,
      Step2,
      Step3,

      (props) => {
        return (
          <>
            <h1>Complete your review</h1>
            <pre>{JSON.stringify(props.getAllStates(), null, 2)}</pre>
          </>
        );
      },
    ],
  };
  return (
    <>
      <h1>Simple Stateful Wizard Example</h1>
      <Wizard wizardProps={wizardProps} />
    </>
  );
};

export default IndexPage;
