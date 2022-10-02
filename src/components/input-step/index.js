import React, {Component} from 'react';


class InputStep extends Component {



    render() {
        const { setStep } = this.props;

        return (

            <div className='inputStep'>
                <label htmlFor="step"> Step </label>

                <input className='stepInput'
                       id='step'
                       placeholder = 'Set Step...'
                       type="number"
                       onChange={ e => setStep(e) }
                />
            </div>
        );
    }
}

export default InputStep;