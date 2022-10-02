import React, {Component} from 'react';
import './index.css'

class Countries extends Component {
    render() {
        const {icon, id, name} = this.props;

        return (
            <div className={'country-img-icon'}>
                <img className={'country-icon'} src={ icon } alt="country icon"/>
                <p>{ name }</p>
            </div>
        )
    }
}

export default Countries;