import { Button } from "antd";
import React from "react";
import AddEvent from "../addEvent";
import Amodal from "../modal";
import './style.scss';

export default function EventCard(props) {
    const {data} = props;
    return(
        <div className="card">
            <div className='card-header'>
                <p className='title'>{data.event_name}</p>
            </div>
            <div className='card-body'>
                <div className='card-body__element'>
                    <p className='property'>Status</p>
                    <p className='value'>{data.event_status}</p>
                </div>
                <div className='card-body__element'>
                    <p className='property'>Date et heure de début</p>
                    <p className='value'>{data.start_event}</p>
                </div>
                <div className='card-body__element'>
                    <p className='property'>Date et heure de fin</p>
                    <p className='value'>{data.end_event}</p>
                </div>
                <div className='card-body__element'>
                    <p className='property'>Responsable</p>
                    <p className='value'>{data.id_responsible}</p>
                </div>
            </div>
            <div className='card-footer'>
                {/* <div className='card-btn-info'>
                    <Button type="primary">Modifier</Button>
                </div> */}
                <Amodal title="Modifier l'évènement" btn="Modifier">
                    <AddEvent />
                </Amodal>
        </div>
            
        </div>
    )
}