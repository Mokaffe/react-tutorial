import React from 'react';
import { createForm, formShape } from 'rc-form'

class FormValidation extends React.Component {

    submit = () => {
        this.props.form.validateFields((error, value) => {
            console.log(error, value);
        });
    }

    render() {
        let errors;

        const { getFileldProps, getFiledError } = this.props.form;

        return (
            <div>
                <input {...getFileldProps('normal')} />
                <input {...getFileldProps('required', {
                    onChange() { console.log("ssssssss") },
                    rules: [{ required: true }],
                })} />
                {(errors = getFiledError('required')) ? errors.join(',') : null}
                <button onClick={this.submit}>submit</button>
            </div>
        );
    }
}

export default createForm()(FormValidation);