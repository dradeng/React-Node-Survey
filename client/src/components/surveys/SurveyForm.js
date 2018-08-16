import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField'

class SurveyForm extends Component {
  renderFields() {
    return (
      <div>
        <Field
          type="text"
          label="Survey Title"
          name="title"
          component={SurveyField}
        />
        <Field
          type="text"
          label="Subject Line"
          name="title"
          component={SurveyField}
        />
        <Field
          type="text"
          label="Email Body"
          name="title"
          component={SurveyField}
        />
        <Field
          type="text"
          label="Recipient"
          name="title"
          component={SurveyField}
        />
      </div>
    )
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields()}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyForm);
