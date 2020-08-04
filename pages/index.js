import * as React from "react"
import { Form, TextBox } from "react-forms-typescript"

const Step1 = (state, setState) => {
  return (
    <>
      <h1>Simple Counter Example</h1>
      <p>{state || 0}</p>
      <button
        onClick={(e) => {
          const c = state || 0
          setState(c + 1)
        }}
      >
        Counter
      </button>
    </>
  )
}
const Step2 = (state, setState) => {
  return (
    <>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <Form
        formProps={{
          heading: "Personal Information",
          submitForm: (_, plainJson) => {
            setState(plainJson)
          },
        }}
      >
        <TextBox
          textBoxProps={{
            id: "txt-name",
            name: "txt-name",
            placeholder: "Enter name...",
            label: "Name : ",
          }}
        />
        <div>
          <button>Submit</button>
        </div>
      </Form>
    </>
  )
}

const Step3 = (state, setState) => {
  setInterval(() => setState(new Date()),100)
  return (
    <>
      <h1>Simple Date Time</h1>
      <pre>{(state || new Date()).toString()}</pre>
    </>
  )
}

function Wizard(...components) {
  const [current, setCurrent] = React.useState(0)
  const [hideNext, setHideNext] = React.useState(false)
  const [hidePrevious, setHidePrevious] = React.useState(true)

  const states = []
  components.forEach((_) => states.push(React.useState(null)))

  const navigate = (goto) => {
    let newCurrent = current + goto
    if (newCurrent >= components.length) {
      setHideNext(true)
      setHidePrevious(false)
      return
    } else if (newCurrent <= 0) {
      setHidePrevious(true)
      setHideNext(false)
      newCurrent = 0
    } else {
      setHidePrevious(false)
      setHideNext(false)
    }
    setCurrent(newCurrent)
  }
  const [state, setState] = states[current]
  return (
    <>
      <div>
        {!hidePrevious && (
          <button onClick={(e) => navigate(-1)}>Previous</button>
        )}
        {!hideNext && <button onClick={(e) => navigate(1)}>Next</button>}
      </div>
      {components[current](state, setState)}
    </>
  )
}

const Index = () => {
  return Wizard(Step1, Step2, Step3)
}

export default Index
