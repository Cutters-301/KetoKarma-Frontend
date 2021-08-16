import React, { Component } from 'react';
import ReactPlayer from "react-player";

export class Laptop extends Component {
    render() {
        return (
            <div style={{marginRight:"30%"}}>
                 <div className='container'>
          <div className='mockup mockup-macbook loaded opened'>
            <div className='part top'>
              <img
                src='https://d1xm195wioio0k.cloudfront.net/images/mockup/macbook-top.svg'
                alt=''
                className='top'
              />
              <img
                src='https://d1xm195wioio0k.cloudfront.net/images/mockup/macbook-cover.svg'
                alt=''
                className='cover'
              />
              <div className="contain">
              <ReactPlayer
        url="https://www.youtube.com/watch?v=X6xNr1HSA-A&t=12s"
      />
              </div>
            </div>
            <div className='part bottom'>
              <img
                src='https://d1xm195wioio0k.cloudfront.net/images/mockup/macbook-cover.svg'
                alt=''
                className='cover'
              />
              <img
                src='https://d1xm195wioio0k.cloudfront.net/images/mockup/macbook-bottom.svg'
                alt=''
                className='bottom'
              />
            </div>
          </div>
        </div>
            </div>
        )
    }
}

export default Laptop;
