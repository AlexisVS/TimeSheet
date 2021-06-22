import React, { Component } from 'react';

class Timesheet extends Component {
    render () {
        return (
            <div className="timesheet">
    
                <div className="timesheet-left">
                    <p>00h00</p>
                    <p>01h00</p>
                    <p>02h00</p>
                    <p>03h00</p>
                    <p>04h00</p>
                    <p>05h00</p>
                    <p>06h00</p>
                    <p>07h00</p>
                    <p>08h00</p>
                    <p>09h00</p>
                    <p>10h00</p>
                    <p>11h00</p>
                    <p>12h00</p>
                    <p>13h00</p>
                    <p>14h00</p>
                    <p>15h00</p>
                    <p>16h00</p>
                    <p>17h00</p>
                    <p>18h00</p>
                    <p>19h00</p>
                    <p>20h00</p>
                    <p>21h00</p>
                    <p>22h00</p>
                    <p>23h00</p>
                </div>
                <div className="timesheet-right">
                    <div className="timesheet-right-header">
                        <p className="timesheet-right-header-text">Lundi</p>
                        <p className="timesheet-right-header-text">Mardi</p>
                        <p className="timesheet-right-header-text">Mercredi</p>
                        <p className="timesheet-right-header-text">Jeudi</p>
                        <p className="timesheet-right-header-text">Vendredi</p>
                        <p className="timesheet-right-header-text">Samedi</p>
                        <p className="timesheet-right-header-text">Dimanche</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Timesheet;