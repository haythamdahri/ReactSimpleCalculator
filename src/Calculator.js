import React, { Component } from 'react';
import Swal from 'sweetalert2';
import $ from 'jquery';

export default class Calculator extends Component {
    constructor(props) {
        super(props);
    }

    handleChange = (event) => {
        event.preventDefault();
        $(event.target).removeClass('is-invalid');
        $(event.target).prev().html('FIRST NUMBER: '+event.target.value);
        console.log("Name: "+event.target.name+" Value: "+event.target.value);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let passed = true;

        if( $("#NO1").val() === "" ){
            passed = false;
            $("#NO1").addClass('is-invalid');
        }

        if( $("#NO2").val() === "" ){
            passed = false;
            $("#NO2").addClass('is-invalid');
        }

        if( !passed ){
            Swal.fire({
                title: '<i class="fas fa-exclamation-triangle"></i> Error!',
                text: 'Please fill form fields correctly: ',
                type: 'error',
                confirmButtonText: 'Ok'
              });
        }else{
            var NO1 = $("#NO1").val();
            var NO2 = $("#NO2").val();
            switch($("#operator").val()){
                case "+": {$("#results").text(parseFloat(NO1)+parseFloat(NO2)); break;}
                case "-": {$("#results").text(parseFloat(NO1)-parseFloat(NO2)); break;}
                case "*": {$("#results").text(parseFloat(NO1)*parseFloat(NO2)); break;}
                case "/": {$("#results").text(parseFloat(NO1)/parseFloat(NO2)); break;}
                default: {console.log("No value provided")}
            }
        }
    }

    render() {
        return (
            <div className="container">
                <form id="calculator-form">
                    <div className="form-group">
                        <label htmlFor="NO1">FIRST NUMBER</label>
                        <input type="number" onChange={this.handleChange} className="form-control" name="NO1" id="NO1" placeholder="First Number" />
                        <small id="emailHelp" className="form-text text-muted">First desired number.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="NO2">SECOND NUMBER</label>
                        <input type="number" onChange={this.handleChange} className="form-control" name="NO2" id="NO2" placeholder="Second Number" />
                        <small id="emailHelp" className="form-text text-muted">Second desired number.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1">Operator</label>
                        <select className="form-control" name="operator" id="operator">
                            <option value="+">+</option>
                            <option value="-">-</option>
                            <option value="*">*</option>
                            <option value="/">/</option>
                        </select>
                    </div>
                    <button type="submit" onClick={this.handleSubmit} className="btn btn-primary">Calculate</button>
                </form>
                <h1 id="results"></h1>
            </div>
        );
    }
}