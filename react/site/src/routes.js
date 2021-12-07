import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Lista from './pages/lista/index.js'


export default function routes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Lista/>} />
            </Routes>
        </BrowserRouter>
    )
}


