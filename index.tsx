import * as React from 'react';

// import { Form, TextBox } from 'react-forms-typescript';
// import { Wizard } from '../bin/index';
// import StepsProps from '../bin/Steps.Props';
// const Step1: React.FC<StepsProps> = (props) => {
//   const { state, setState } = props;
//   return (
//     <>
//       <h1>Simple Counter Example</h1>
//       <p>{state || 0}</p>
//       <button
//         onClick={(e) => {
//           const c = state || 0;
//           setState(c + 1);
//         }}
//       >
//         Counter
//       </button>
//     </>
//   );
// };

// const Step2: React.FC<StepsProps> = (props) => {
//   const { state, setState } = props;
//   return (
//     <>
//       <pre>{JSON.stringify(state, null, 2)}</pre>
//       <Form
//         formProps={{
//           heading: 'Personal Information',
//           submitForm: (_, plainJson) => {
//             setState(plainJson);
//           },
//         }}
//       >
//         <TextBox
//           textBoxProps={{
//             id: 'txt-name',
//             name: 'txt-name',
//             placeholder: 'Enter name...',
//             label: 'Name : ',
//           }}
//         />
//         <div>
//           <button>Submit</button>
//         </div>
//       </Form>
//     </>
//   );
// };

// const Step3: React.FC<StepsProps> = (props) => {
//   const { state, setState } = props;
//   setInterval(() => setState(new Date()), 100);
//   return (
//     <>
//       <h1>Simple Date Time</h1>
//       <pre>{(state || new Date()).toString()}</pre>
//     </>
//   );
// };

const Index = () => {
  // const steps = new Array<React.FC<StepsProps>>();
  // steps.push(Step1, Step2, Step3);

  // return Wizard(steps);
  return <h1>Hello</h1>;
};

export default Index;
