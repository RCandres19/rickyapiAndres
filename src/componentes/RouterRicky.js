import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import RickyList from './RickyList'
import Notfound from './Notfound'
import Rickyindividual from './Rickyindividual'

export default function RouterRicky () {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path= "*" element= {<Notfound />}/>
                    <Route exact path = "/index" element = {<RickyList />} />
                    <Route exact path= "/individual/:id" element= {<Rickyindividual/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
