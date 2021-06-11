import React, { Component, useEffect, useState } from 'react'
import { Form, ListGroup } from 'react-bootstrap';
import Select from 'react-select'
import cities1 from '../../city.list.json';

const ListCity = () => {


  let cities = cities1;//[{name: "Магнитогорск"},{name: "Краснодар"},{name: "Красноярск"}];
  const [result, setResult] = useState([]);
  const [search, setSearch] = useState("");
  // const [cities, setCities] = useState([]);

  useEffect(() => {
    console.log(search)
  }, [search])

  return (
    <Form>
      <Form.Control type="text" value={search} onChange={(e) => {
        setSearch(e.target.value);

        if (e.target.value === "") {
          setResult([]);
          return;
        }

        let ruCity = cities.filter((city) => city.country === 'RU');
        console.log(ruCity);

        let filters = ruCity.filter((city) => {
          return city.name.indexOf(search) > -1;
        });

        setResult(filters);

        console.log('result: ', result);

      }}></Form.Control>
      <ListGroup>
        {result.map((item, i) => {
          return <ListGroup.Item key={i}>{item.name}</ListGroup.Item>
        })}
      </ListGroup>
    </Form>
  )
}

export default ListCity;