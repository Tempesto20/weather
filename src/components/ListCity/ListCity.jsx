import React, { Fragment, useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import { Form, ListGroup } from 'react-bootstrap';
import cities1 from '../../city.list.json';
import styles from './ListCity.module.css';

const ListCity = (props) => {

  let cities = cities1;
  const [result, setResult] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log(search)
  }, [search])

  return (
    <Fragment>
      {
        props.toggleCity ? 
        <Form className={styles.form}>
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

          let prepareResult = [];

          for (let i = 0; i < filters.length; i++) {
            if (i < 3) 
              prepareResult.push(filters[i]);
            else 
              break;
          }

          setResult(prepareResult);
          console.log('result: ', result);

        }}></Form.Control>
        <ListGroup>
          {result.map((item, i) => {
            return <ListGroup.Item key={i} active={props.activeCity === item.name ? true : false} onClick={() => {
              props.setActiveCity(item.name);
              props.setToggleCity(false);
            }}>{item.name}</ListGroup.Item>
          })}
        </ListGroup>
      </Form> : ""
      }
      
    </Fragment>
  )
}

ListCity.propTypes = {
  activeCity: PropTypes.string,
  setActiveCity: PropTypes.func,
  toggleCity: PropTypes.bool,
  setToggleCity: PropTypes.func
};

ListCity.defaultProps = {
  activeCity: {},
  setActiveCity: null,
  toggleCity: false,
  setToggleCity: null,
}

export default ListCity;