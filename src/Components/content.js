import React from 'react';
import './content.css';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';

const content = () => {
    return (
        <div>
         <div className="container-fluid content">
            <div className="card-container">
                <div className="card co">
                    <h5><FavoriteRoundedIcon fontSize="large" className="material-icon" /><strong>Share feelings</strong> without being judged</h5>
                    <button type="button" className="bttn">
                        Share Feelings
                    </button>
                </div>
            </div>
            <h3 className="sentence">Join-Share-Feel Relief</h3>
         </div>
         <div className="box">
             <h3>A community to spread positivity</h3>
             <div className="box-2">
               <div className="box-3">
                  <div className="card-container ca">
                    <div className="card">
                      <p className="head">Current Feeling</p>
                      <br></br>
                      <br></br>
                      <br></br>
                      <p>So excited to finally get my hands on the latest PS5</p>
                      <p><strong>@josh</strong> <br></br> a few seconds ago</p>
                    </div>
                    <div className="card">
                      <p className="head">Current Feeling</p>
                      <br></br>
                      <br></br>
                      <br></br>
                      <p>So excited to finally get my hands on the latest PS5</p>
                      <p><strong>@josh</strong> <br></br> a few seconds ago</p>
                    </div>
                  </div>
                  <p>Share what's on your mind with the community</p>
                  <button type="button" className="bttn">
                        Share Feeling
                  </button>
                </div>  
               <div className="box-3">
                  <div className="card-container ca">
                    <div className="card">
                      <p className="head">Watching</p>
                      <br></br>
                      <br></br>
                      <br></br>
                      <p>The Wolf of Wall Street. A must watch.</p>
                      <p><strong>@lily</strong> <br></br> a few seconds ago</p>
                    </div>
                    <div className="card">
                      <p className="head">Watching</p>
                      <br></br>
                      <br></br>
                      <br></br>
                      <p>The Wolf of Wall Street. A must watch.</p>
                      <p><strong>@lily</strong> <br></br> a few seconds ago</p>
                    </div>
                  </div>
                  <p>Share what's on your mind with the community</p>
                  <button type="button" className="bttn">
                        Share Activity
                  </button>
               </div>
             </div>  
         </div>
         <div className="container-fluid content">
            <div className="card-container-1">
                <div className="card-1">
                    <h4><strong> Why Lets Gtok?</strong></h4>
                    <p>Lets Gtok aims to provide a safe space online for people to share and connect with genuine feelings. Users can share their feelings or activities even without revealing their identity.</p>
                    <button type="button" className="bttn">
                        Learn More
                    </button>
                </div>
         </div>   
        </div>
    </div>    
    )
}

export default content
