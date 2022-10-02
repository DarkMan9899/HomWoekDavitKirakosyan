import React, {Component} from 'react';

class InputStep extends Component {

    render() {
        const { setStep } = this.props;

        return (
            <div className={'input-piece'}>
                <label htmlFor="step">Step</label>
                <input id='step' placeholder = 'set step...'
                       onChange ={ e => setStep(e) }
                       type="number"/>
            </div>
        );
    }
}

export default InputStep;



