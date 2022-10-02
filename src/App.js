import React, {Component} from 'react';
import InputsMaximum from "./components/input-max";
import InputsMinimum from "./components/input-min";
import InputStep from "./components/input-step";


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            isDecreaseButtonDisabled: true,
            isIncreaseButtonDisabled: false,
            maximum: 10,
            minimum: 0,
            step: 1,
        }



    }

    componentDidUpdate(prevProps, prevState) {

        const { count, maximum, minimum,step } = this.state;


        if( prevState.count !== count ) {

            if(count + step > maximum){

                this.setState({

                    isIncreaseButtonDisabled:true

                    }
                )
            }

            if ( count === minimum ) {

                this.setState({
                    isDecreaseButtonDisabled: true,
                    //isIncreaseButtonDisabled:true
                })
            }


            if ( count === maximum ) {

                this.setState({
                    isIncreaseButtonDisabled: true,
                })
            }
        }
    }

    componentDidMount() {
        const { count } = this.state;
        if (count <= 0) {

            this.setState({

                isDecreaseButtonDisabled: true
            })
        }
    }


    increaseCount = () => {
        const { count, step } = this.state;
        this.setState({
                count: count + step,
                isDecreaseButtonDisabled: false,
               // isIncreaseButtonDisabled: false,
        })

    }

    decreaseCount = () => {
        const { count, step } = this.state;

        if ( count <= 1 ) {
            this.setState({
                isDecreaseButtonDisabled: true
            })
        } else {
            this.setState({
                count: count - step,
               // isDecreaseButtonDisabled: false,
                isIncreaseButtonDisabled: false
            })
        }
    }

    resetCount = () => {
        this.form = document.getElementById('myForm');
        this.form.reset();
        this.setState({
            count: 0,
            isDecreaseButtonDisabled: true,
            isIncreaseButtonDisabled: false,
            maximum: 10,
            minimum: 0,
            step: 1
        })
    }


    setMaximum = ( event ) => {
        const { count, minimum ,} = this.state;
        const inputValue = Number( event.target.value );

        if ( count > inputValue && inputValue ) {
            this.setState({
                count: minimum,
                maximum: inputValue,
            })
        } else {
            this.setState({
                maximum: inputValue,
                isIncreaseButtonDisabled: false,
            })
        }

    }

    setMinimum =  ( event ) => {
        const { count } = this.state;
        const inputValue = Number( event.target.value );

        if (count < inputValue) {
            const minValue = inputValue || count;

            this.setState({
                count: minValue,
                minimum: minValue,
            })
        } else {
            const minValue = Number(event.target.value);

            this.setState({
                minimum: minValue,
            })
        }
    }

    setStep = (event) => {
        this.setState({
          step:Number(event.target.value)
        })
    }



    render() {
        const { count, isDecreaseButtonDisabled, isIncreaseButtonDisabled } = this.state;
        const { increaseCount, setSettings, decreaseCount, resetCount, setMaximum, setMinimum, setStep  } = this;

        return (
            <div className = { 'generalButton image' }>\

                <div className = { 'countChange' } >
                    <h1 >COUNT CHANGE </h1>
                </div>
                <h1 className={ 'count' }> { count } </h1>
                <button  className = { 'handleAdd' } disabled={ isIncreaseButtonDisabled } onClick={ increaseCount }> Add </button>



                <button className = { 'handleSub' } disabled = { isDecreaseButtonDisabled } onClick={ decreaseCount }> Sub </button>

                <hr/>

                <form id={'myForm'} action="">
                    <InputsMaximum   setMaximum = { setMaximum } />
                    <InputsMinimum setMinimum = { setMinimum } />
                    <InputStep setStep =  { setStep }  />

                    <hr/>
                    <button  type ={'button'} className = { 'reset' } onClick = { resetCount  }> Reset </button>
                </form>
            </div>
        );
    }
}


export default App;