# Editable info Form



## Usage:

1. import { InfoForm } from path './components/InfoPanel' or wherever you put the InfoPanel folder to get started

2. specify _width_, _height_, _left_ (x-coordinate), _top_ (y-coordinate)

3. bring in some branch informaiion from your database like this
```
const branch = {
      name: 'Zara',
      password: 'password',
      location: '123, Shawky St., Mostafa Kamel',
      position: {
          lng: 29.91,
          lat: 31.21
      },
      qrCode: 'http://bluelightningusa.com/wp-content/uploads/2014/11/BLMREWARDS.jpeg'
    }
```
4. pass all the parameters in 2 and 3
```
<InfoForm
    width="130"
    height="390"
    left="0"
    top="0"
    branch={branch}
/>
```

## Notice:
Don't forget to include the following lines in your index.html file

```
<script src="//cdn.muicss.com/mui-0.9.21/react/mui-react.js"></script>
<link href="//cdn.muicss.com/mui-0.9.21/css/mui.css" rel="stylesheet" type="text/css" />
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
<script src="https://maps.googleapis.com/maps/api/js?v=3.27&libraries=places,geometry&key=AIzaSyAbdtKOfJeEdfvR6Q6Rg_COAadNZ8nIehA"></script>
```

## demo

```
import React, {Component} from 'react';
import { InfoForm } from './components/InfoPanel';

export default class InfoFormExample extends Component {
  render() {
    const branch = {
      name: 'Zara',
      password: 'password',
      location: '123, Shawky St., Mostafa Kamel',
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
```