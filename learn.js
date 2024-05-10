import React from 'react'
import ReactDOM from 'react-dom/client'

const heading = <h1>React using jsx</h1>

// jsx is html/ xml like syntax
// parcel transpiles the code before it goes to the browser(JS engine)
// it is transpiled by babel

//react component = function returning a jsx code which is basically a react element

const Title = () => <h1>Title component</h1>

const HeadingComponent = () => <h1>React component</h1>

const elem = <span>YO yo ma</span>

const Header = () => (
    <div id="container">
    {Title() }
    <h2> {elem}This is smaller heading</h2>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Header />)
