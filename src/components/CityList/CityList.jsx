import React from 'react';
import { Form, ListGroup } from 'react-bootstrap';
import cities from '../../city.list.json';

const CityList = () => {

    console.log(cities);

    return (
        <>
            <Form>  
                <Form.Control type="text" placeholder="Поиск" />
            </Form>

            {/*<ListGroup>
                {cities.map((city, i) => {
                    if (i < 1000) {
                        return (
                            <ListGroup.Item key={i}>{city.name}</ListGroup.Item>
                        )
                    }

                })}
            </ListGroup>*/}
        </>
    )
}

export default CityList;