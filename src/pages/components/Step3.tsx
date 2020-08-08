import React from 'react';
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
import { StepsProps } from '../../../bin';

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
  const choice =
    state && state.choice_detail ? state.choice_detail : 'give_details';
  const radioButtonProps: RadioButtonProps = {
    legend: 'About your personal information',
    name: 'choice_detail',
    radioButtonOptions: [
      new RadioButtonOption(
        'Provide your details',
        'give_details',
        choice === 'give_details'
      ),
      new RadioButtonOption(
        'No I dont want to give my details',
        'no_details',
        choice === 'no_details'
      ),
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

export default Step3;
