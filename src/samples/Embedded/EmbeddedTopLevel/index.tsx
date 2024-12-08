// import { useState, useEffect } from "react"
// import { render } from "react-dom"
// import Profile from "../../../components/Profile"
import Gallery from "../../../components/Gallery"
import { jsx as _jsx} from "react/jsx-runtime";


export default function EmbeddedTopLevel() {
    return (
        _jsx('div',{children:_jsx('article',{children:<Gallery/>})})
       
    )
};