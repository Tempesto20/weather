import React, { Component } from 'react'
import Select from 'react-select'
import cities from '../../city.list.json';

const options = [

]

const ListCity = () => (
  <Select options={options} />
)

export default ListCity;