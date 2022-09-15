import React, { useEffect, useState } from "react";
import EventCard from "../../components/eventCard";
import AddIcon from "../../components/icons/add";
import { EventService } from "../../service/event";
import { Button } from "antd";
import "./style.scss";
import Amodal from "../../components/modal";
import AddEvent from "../../components/addEvent";

export default function Home() {
    const [dataEvent, setDataEvent] = useState([]);
    const fetchDataEvent = async function () {
        try {
          const data = await EventService.getEvent();
    
          setDataEvent(data);
          console.log(data, dataEvent);
        } catch (error) {
          console.log("error", error);
        }
      };

      useEffect(() => {
        fetchDataEvent();
      }, []);
    return(
        <div className="home">
          <div className="header">
            <h1>Liste des évènements</h1>
            {/* <Button>
                <AddIcon/>
            </Button> */}
            <Amodal title="Ajouter un évènement" btn={<AddIcon/>}>
                <AddEvent />
            </Amodal>
          </div>
          <hr className="divider"/>
          <div className="event-list">
              {dataEvent.length > 0 &&
              dataEvent.map((items, index) => (
                  <EventCard data={items} key={index} />
              ))}
          </div>
        </div>
    )
}