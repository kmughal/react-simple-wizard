![CI](https://github.com/kmughal/react-simple-wizard/workflows/CI/badge.svg)

# React Simple wizard

## Introduction

This is a simple stateful react wizard with zero styling. It uses the React hooks and enable you to update the state for each step. You will be able to
access all the states modified in each step. How to use this.

### How to use this

First of all install this using npm or yarn 

```sh
npm i react-stateful-wizard
yarn add react-stateful-wizard
```


```jsx

  import { Wizard, WizardProps, StepsProps } from "react-simple-wizard"


  const Step1: React.FC<StepsProps> = (props) => {
    return <h1>Start</h1>;
  };

  const SimpleWatch: React.FC<StepsProps> = ({ state, setState }) => {
    setInterval(() => setState(new Date()), 100);

    return (
      <>
        <h2>A simple digital clock</h2>
        <p>{(state ?? new Date()).toLocaleTimeString()}</p>
      </>
    );
  };

  const wizardProps: WizardProps = {
    showNavigationOrientation: 'bottom',
    showNavigationLinks: true,
    steps: [
    Step1,
    SimpleWatch,
      (props) => {
        return (
          <>
            <h1>Step 1</h1>
            <pre>{JSON.stringify(props.getAllStates(), null, 2)}</pre>
          </>
        );
      },
      (props) => {
        return (
          <>
            <h1>Step 2</h1>
            <pre>{JSON.stringify(props.getAllStates(), null, 2)}</pre>
          </>
        );
      },

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

    <Wizard wizardProps={wizardProps} />

```

### Components properties and details

#### Wizard Properties (WizardProps)

| Property                  | Type                                    | Description                                                               |
| ------------------------- | --------------------------------------- | ------------------------------------------------------------------------- |
| steps                     | Array<React.FC<StepsProps>> ( Required) | Collection of steps                                                       |
| showNavigationLinks       | boolean (Optional)                      | If you want to display the next and previous link backed in the component |
| showNavigationOrientation | "top" or "bottom" (Optional)            | Orientation of the navigation buttons                                     |
| showHeading               | boolean (Optional)                      | A h1 heading will appear on each step                                     |
| heading                   | text (Optional)                         | Heading text                                                              |

#### StepsProps

| Property         | Type                                      | Description                                                                           |
| ---------------- | ----------------------------------------- | ------------------------------------------------------------------------------------- |
| state            | any                                       | Represent current step state object                                                   |
| setState         | React.Dispatch<React.SetStateAction<any>> | Allows you to change the current step state                                           |
| goToStep         | (stepIndex: number) => void               | Allows you to navigate to any step                                                    |
| getAllStates     | () => Array<Record<string, any>>;         | Retruns all states                                                                    |
| goToNextStep     | () => void;                               | Allows you to move to next step (if you want to make your own navigation buttons)     |
| goToPreviousStep | () => void;                               | Allows you to move to previous step (if you want to make your own navigation buttons) |

### Url Navigation

As it is a single page application you can navigate to any step by using the HTML5 single page naviagtion. Consider below example

```jsx

  const Step1 = (props) => {
    return <h1>Step 1</h1>
  }

  const Step2 = (props) => {
    return <h1>Step 2</h1>
  }

  const wizardProps : WizardProps = { steps = [Step1,Step2]}
  <Wizard wizardProps={wizardProps} />

```

Now if you are on the Step2 then in the address bar if you type 

````html

http://localhost:1234/#/Step1 

````

This will take you to Step 1. In next release my aim is to improve this!

