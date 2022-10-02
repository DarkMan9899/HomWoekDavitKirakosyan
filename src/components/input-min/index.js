import React, {Component} from 'react';

class InputsMinimum extends Component {

    render() {

        const { setMinimum } = this.props;

        return (

            <div className='inputMin'>

                <label htmlFor="minimum"> Minimum </label>

                <input  className='minInput'
                        id='minimum'
                        placeholder = 'Set Minimum...'
                       onChange={ e => setMinimum(e) }
                        type="number"
                />
            </div>
        );
    }
}

export default InputsMinimum;
