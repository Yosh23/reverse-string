import React, {Component, Fragment} from 'react'

export default class extends Component {
    state = {
        string: 'hello',
    }


    revString = (str) => {
        if(str.length === 0){
            str = 'olleh'
        }
        let newString = "";
        for (var i = str.length - 1; i >= 0; i--) {
            newString += str[i];
        }
        return newString;
    };




    render() {
        return (
            <Fragment>
              <form>
                <input type="text" placeholder="enter string" onChange={ event => {this.setState({string: event.target.value})}}/>
              </form>
                <h2>Reverse String: {this.revString(this.state.string)} </h2>
            </Fragment>
        )
    }


}

