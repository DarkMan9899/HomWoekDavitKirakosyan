import React, {Component} from 'react';


class InputsMaximum extends Component {
    render() {
        const { setMaximum } = this.props;

        return (
            <div className={'inputMax'}>
                <label htmlFor={'maximum'}>Maximum</label>
                <input  className= 'maxInput' id='maximum' placeholder = 'set maximum...'
                       onChange={ e => setMaximum(e) } type="number"/>
            </div>
        );
    }
}

export default InputsMaximum;