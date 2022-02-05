import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";
import { ButtonGroup, FormControlLabel, TextField } from '@mui/material';
import { Checkbox } from '@mui/material';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AcUnitIconOutlined from '@mui/icons-material/AcUnit';




function CheckBoxExample() {
  const [checked, setChecked] = React.useState(false)
  return(
    <div>
      <FormControlLabel control={<Checkbox
        icon={<AcUnitIcon/>}
        checkedIcon={<AcUnitIconOutlined />}
        size ="large"
        color = "primary"
        checked={checked}
        onChange={(e)=> setChecked(e.target.checked)}
      />}label="Check this!" />
      
    </div>
  )
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TextField 
          
        />
        <CheckBoxExample />
        <ButtonGroup style={{
            fontSize:40 
            }}
            size="large"
            onClick={()=>alert('Salut!')}
            href="#" variant="contained" 
            >
          <Button
            startIcon={<SaveIcon />}
            color="primary">
              Save
          </Button>
          <Button
            startIcon={<DeleteIcon />}
            color="error">
              Discard
          </Button>
        </ButtonGroup>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
