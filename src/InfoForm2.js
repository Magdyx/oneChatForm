import React, {Component} from 'react';
import { InfoForm } from './components/InfoPanel';

export default class InfoForm2 extends Component {
  render() {
    const branch = {
      name: 'Zara',
      password: 'password',
      location: '123, Shawky St., Mostafa Kamel - sidi gabr , Alexandria , Egypt ',
      position: {
          lng: 29.91,
          lat: 31.21
      },
      qrCode: 'http://bluelightningusa.com/wp-content/uploads/2014/11/BLMREWARDS.jpeg'
    }

    return (
        <div style={{width: '30%', height: '50%'}}>
            <InfoForm
                width="130"
                height="390"
                left="0"
                top="0"
                branch={branch}
            />

        </div>

    );
  }
}
