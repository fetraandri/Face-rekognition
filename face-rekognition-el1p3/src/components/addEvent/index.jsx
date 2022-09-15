import React from "react";
import AntInput from "../input";
import { Button } from "antd";

export default function AddEvent() {
    return(
        <div>
            <AntInput label="Nom de l'évènement" name="event_name"></AntInput>
            <AntInput label="Nom du responsable" name="id_responsible"></AntInput>
            <AntInput label="Date de début" name="start_event"></AntInput>
            <AntInput label="Date de fin" name="end_event"></AntInput>
            <AntInput label="Type de l'évènement" name="end_event"></AntInput>
            <AntInput label="Lieu" name="end_event"></AntInput>
            <AntInput label="Groupe" name="end_event"></AntInput>
            <Button type="primary" htmlType="submit">
                Terminer
            </Button>
        </div>
    )
}