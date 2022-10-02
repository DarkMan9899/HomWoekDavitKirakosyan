import React, {Component} from 'react';

class InputMaximum extends Component {
    render() {
        const { setMaximum } = this.props;

        return (
            <div className={'input-piece'}>
                <label htmlFor="maximum">Maximum</label>
                <input id='maximum' placeholder = 'set maximum...'
                       onChange={ e => setMaximum(e) } type="number"/>
            </div>
        );
    }
}

export default InputMaximum;