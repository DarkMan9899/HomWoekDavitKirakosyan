import React, {Component} from 'react';

class InputMinimum extends Component {
    render() {
        const { setMinimum } = this.props;

        return (
            <div className={'input-piece'}>
                <label htmlFor="minimum">Minimum</label>
                <input id='minimum' placeholder = 'set minimum...'
                       onChange={ e => setMinimum(e) } type="number"/>
            </div>
        );
    }
}

export default InputMinimum;