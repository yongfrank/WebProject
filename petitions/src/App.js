/*
 * @Author: Frank Chu
 * @Date: 2023-01-31 14:55:57
 * @LastEditors: Frank Chu
 * @LastEditTime: 2023-01-31 23:57:19
 * @FilePath: /WebProject/petitions/src/App.js
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name}, All Rights Reserved. 
 */
import './App.css';
import { useState, useEffect, useRef } from 'react'
import petitionsJSON from './petitions.json'
import petitionsTopRated from './petitions-2.json'
import SegmentedControl from './components/SegmentedControl';

function App() {
  const [petitions, setPetitions] = useState([])
  const [filterString, setFilterString] = useState('')
  const [selectedValue, setSelectedValue] = useState("mostRecent")
  
  const getPetitions = () => {
    selectedValue === 'mostRecent' ? setPetitions(petitionsJSON.results) : setPetitions(petitionsTopRated.results)
  }

  useEffect(getPetitions, [selectedValue])

  useEffect(getPetitions, [])

  const filterForPetitions = (petition) => {
    return petition.title.toLowerCase().includes(filterString.toLowerCase())
  }

  const filtered = filterString === '' ? petitions : petitions.filter(filterForPetitions)
  
  const handleChange = (event) => {
    setFilterString(event.target.value)
  }

  return (
    <div className='App'>
      <h1>Petitions @wh.gov</h1>
      <div>
        find petitions
        <input value={filterString} onChange={handleChange}>
        </input>
        <button onClick={() => setFilterString('')}>Clear Filter</button>
      </div>
      <SegmentedControl 
        name='group'
        callback={(value) => setSelectedValue(value)}
        controlRef={useRef()}
        segments={[
          {
            label: "Most Recent",
            value: "mostRecent",
            ref: useRef()
          }, 
          {
            label: "Top Rated",
            value: "topRated",
            ref: useRef()
          }
        ]
        }
      />
      <PetitionsList 
        petitions={filtered}
        setFilterString={setFilterString}
      />
      <Footer />
    </div>
  );
}

const PetitionsList = ({ petitions, setFilterString }) => {
  if (petitions.length === 0) {
    return <div>No matches, specify some other filter</div>
  }
  if (petitions.length > 1) {
    return (
      <div>
        <ol>
        {petitions.map((petition) => {
            return (
                <li key={petition.id}>
                  {petition.title.replace('&amp;', '&')}
                  <button onClick={() => setFilterString(petition.title)}>show</button>
                </li>
            )
          })
        }
        </ol>
      </div>
    )
  }

  return <Petition petition={petitions[0]}/>
}

const Petition = ({petition}) => {
  
  return (
    <div className='Petition'>
      <h2>{petition.title}</h2>
      <p>{petition.body}</p>
    </div>
  )
}

const Footer = () => {
  const footerStyle = {
    color: 'green',
    fontStyle: 'italic',
    fontSize: 16,
    margin: 10,
  }
  return (
    <div style={footerStyle}>
      end of petitions
      <button onClick={() => alert('Data comes from "We The People API" of the Whitehouse')}>Credit</button>
    </div>
  )
}
export default App;
