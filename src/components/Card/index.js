import React, {Component} from 'react';
import './style.css'

class Card extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isClosed: false,
        }
    }

    handleCardToggle = (id) => {
        this.props.countCounter(id)
        this.setState({
            isClosed: !this.state.isClosed,
        })
    }

    render() {
        const { id, url } =this.props;
        return (
              <>
                    {this.state.isClosed
                            ?
                            <div className={'container-show'}>
                                <button
                                    onClick={ () => this.handleCardToggle(id) }
                                    className={'container-button'}>
                                    Show</button>
                            </div>
                            :
                            <div className={'container'}>

                                <img
                                    src={ url }
                                    className={'container_img'}
                                />

                                <img
                                    onClick={()=> this.handleCardToggle(id) }
                                    className={'container-icon'}
                                    src={'/image/close.png'}
                                    alt={'unmount card'}/>
                            </div>
                      }
              </>
        );
    }
}

export default Card;