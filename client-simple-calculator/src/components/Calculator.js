import React from "react"
import {render} from "react-dom"
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as CalcActions from '../actions/index'

class Calculator extends React.Component{

       state={
        operand1:"",
        operand2:"",
        operation:"+"
        }

    render(){
        var operations = ['+','-','x','/'];
        

        return(
            <div className="display-flex justify-content-md-center ">
                <div className="col-md-6 form-border mt30">
                    <form className="">
                        <div>
                            <h1 className="input-type">Calculator</h1>
                        </div>
                        <hr/>
                        <hr/>
                        <div className="row ml45">
                        <div className="input-type">
                            <label>Operand1</label><br/>
                            <input
                                className="form-control"
                                type="number"
                                label="result"
                                value={this.state.operand1}
                                onChange={(event) => {
                                    this.setState({
                                       operand1 : event.target.value
                                    });
                                }}

                            />
                        </div>
                            <div className="input-type">
                                <label>Operation:</label><br/>
                        <select onChange={(event) => {
                            this.setState({
                                operation : event.target.value
                            });
                        }}>
                            <option value="+">Add (+)</option>
                            <option value="-">Subtract (-)</option>
                            <option value="*">Multiply (*)</option>
                            <option value="/">Divide (/)</option>
                        </select>
                            </div>
                        <div className="input-type">
                            <label>Operand2:</label><br/>
                            <input
                                className="form-control"
                                type="number"
                                label="result"
                                value={this.state.operand2}
                                onChange={(event) => {
                                    this.setState({
                                        operand2 : event.target.value
                                    });
                                }}

                            />
                        </div>
                        </div>
                        <div className="input-type row">
                            <label className="col-md-3">Result : </label>
                            <input
                                className="form-control col-md-6"
                                type="text"
                                label="result"
                                value={this.props.operands.data.result}
                                disabled
                            />
                        </div>
                        <button className="btn btn-primary input-type" type="button" onClick={() => this.props.calculateValue(this.state)}>Calculate</button>
                    </form>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        operands : state.operands
};
}

function matchDispatchToProps(dispatch){
    return bindActionCreators(CalcActions,dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(Calculator);