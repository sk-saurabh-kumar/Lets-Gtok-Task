import React from 'react';
import { ButtonGroup, Button } from '@material-ui/core';
import Logo from '../Logo.png';
import './navbar.css';

const navbar = () => {
    return (
        <div >
           <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
             <a className="navbar-brand" href="#">
               <img width="40" alt="Logo" src={Logo} className="d-inline-block align-text-top logo"/>
               Lets Gtok
             </a>
             <ButtonGroup variant="text" aria-label="text secondary button group">
                 <Button>
                  <a href="#" className="button" >About</a>
                 </Button>
                 <Button>
                  <a href="#" className="button">Blogs</a>
                 </Button>
                 <Button>
                  <a href="#" className="button">Careers</a>
                 </Button>
                 <Button>
                  <a href="#" className="button">Contact</a>
                 </Button>
             </ButtonGroup>
            </div>
           </nav>
        </div>
    )
}

export default navbar
