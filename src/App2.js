import React, {Component} from 'react';
import Card from "./components/Card";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: [],
            isReported: false
        }
    }


    countCounter = (id) => {
        const cards = this.state.cards.map(count => {
            if (count.id === id) {
                count.count++;
            }

            return count;
        })

        this.setState({
            cards
        })
    }

    componentDidMount() {
        fetch('/data/cards.json')
            .then(res => res.json())
            .then(cards => this.setState({ cards }))
    }

    getReport = () => {
        this.setState({
            isReported: !this.state.isReported
        })
    }

    render() {
        return (
            <>
                <div className={'cards-container'}>
                    {
                        this.state.cards.map( card => <Card
                            handleRemoveCard = { this.handleRemoveCard }
                            countCounter={ this.countCounter}
                            key = { card.id }
                            id = { card.id }
                            url = { card.url }
                        />)
                    }
                </div>
                <button className={ 'cards-container_button' } onClick = { this.getReport }> Get report </button>

                {this.state.isReported
                    ?
                    this.state.cards.map( card =>
                        <p
                                className = { 'cards-container_p' }

                                key = { card.id }> Card number

                                { card.id }

                                unmounted {Math.ceil(card.count/2)}

                                {card.count <= 2

                                    ? 'time' : 'times' }
                        </p>) : ''
                }
            </>
        );
    }
}

export default App;