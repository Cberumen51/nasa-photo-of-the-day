import React, {useState, useEffect} from "react";
import axios from "axios";
import {Card, CardImg, CardBody, CardTitle, CardText, CardSubtitle, } from 'reactstrap';
import {ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';

export default function NasaPictures(props) {
    const [pictures, setPicture] = useState([]);
    const [dropdownOpen, setOpen] = useState(false);
    const toggle = () => setOpen(!dropdownOpen)

    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=CrsnI78WQatOUMY9c8ercInZdi1icvs0ifef2wx3`)
        .then(res => {
            console.log(res)
            setPicture(res.data)
        })
        .catch(err => {
            console.log("There data was not returned", err);
        })
    }, []);
    console.log(pictures);

    return (
    <div className="picture">
         {/* <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret>
                    Button
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>Nav</DropdownItem>
                    <DropdownItem>Action</DropdownItem>
                </DropdownMenu>
            </ButtonDropdown> */}
        <Card>
            <CardTitle>{pictures.title}</CardTitle>
            <CardSubtitle>{pictures.copyright}  {pictures.date}</CardSubtitle>
            <CardBody>
            <CardImg alt="NASA POTD" src={pictures.url}/>
            <CardText>{pictures.explanation}</CardText>
            </CardBody>
        </Card>
    </div>
    )
}

