import React, {useState} from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Input from '@mui/material/Input';
import './App.css';

function App() {
  const [dateValue,setDateValue] = React.useState<Dayjs | null>(dayjs('2024-04-12'));
  const [startTimeValue,setStartTimeValue] = React.useState<Dayjs | null>(dayjs('2022-04-17T15:30'));
  const [endTimeValue,setEndTimeValue] = React.useState<Dayjs | null>(dayjs('2022-04-17T15:30'));
  const [carType,setCarType] = React.useState('');
  const [carYear,setCarYear] = React.useState('');
  const [firstName,setFirstName] = React.useState('');
  const [lastName,setLastName] = React.useState('');
  const [email,setEmail] = useState('');
  const [telNumber,setTelNumber] = React.useState('');
  const handleChange = (event: SelectChangeEvent) => {setCarType(event.target.value as string)};

  return (
    <>
      <div className={'dateWrapper'}>
        <Accordion defaultExpanded>
          <AccordionSummary>
            Choose Date
          </AccordionSummary>
          <AccordionDetails>
            <div className={"calendarContainer"}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DateCalendar', 'DateCalendar']}>
                  <DemoItem>
                    <DateCalendar value={dateValue} onChange={(newValue) => setDateValue(newValue)} />
                  </DemoItem>
                </DemoContainer>
              </LocalizationProvider>
            </div>
            <div className={"timePickerContainer"}>
              <div className={"timePicker"}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['TimePicker', 'TimePicker']}>
                    <TimePicker
                        label="Select your start time"
                        value={startTimeValue}
                        onChange={(newValue) => setStartTimeValue(newValue)}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </div>
              <div className={"timePicker"}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['TimePicker', 'TimePicker']}>
                    <TimePicker
                        label="Select your end time"
                        value={endTimeValue}
                        onChange={(newValue) => setEndTimeValue(newValue)}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>


      <div className={'informationWrapper'}>
        <Accordion>
          <AccordionSummary>
            Your information
          </AccordionSummary>
          <AccordionDetails>
            <div className={'textInputContainer'}>
              <Input defaultValue={''} placeholder={"First Name"} required={true} onChange={(event)=>setFirstName(event.target.value)}></Input>
              <Input defaultValue={''} placeholder={'Last Name'} required={true} onChange={(event)=>setLastName(event.target.value)}></Input>
              <Input defaultValue={''} placeholder={'example@example.com'} type={'email'} required={true} onChange={(event)=>setEmail(event.target.value)}></Input>
              <Input defaultValue={''} placeholder={'+123456789'} type={'tel'} required={true} onChange={(event)=>setTelNumber(event.target.value as string)}></Input>
            </div>
            <div className={"dropDownContainer"}>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Type of you Porsche</InputLabel>
                  <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={carType}
                      label="Type of your Porsche"
                      onChange={(event)=>{handleChange(event);}}
                  >
                    <MenuItem value={'911'}>911</MenuItem>
                    <MenuItem value={'gt3'}>GT3</MenuItem>
                    <MenuItem value={'992'}>992</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
            <div className={'inputYear'}>
              <Input type={'year'} defaultValue={''} required={true} onChange={(event) => setCarYear(event.target.value as string)}></Input>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>

      <div>
        <Accordion>
          <AccordionSummary>
            Summary
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <Button onClick={()=>{console.log(dateValue,startTimeValue,endTimeValue,carType,carYear,firstName,lastName,email,telNumber)}}>Confirm</Button>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>


      <Accordion>
        <AccordionSummary>
          Google Calendar
        </AccordionSummary>
        <AccordionDetails>
          <div className={"googleCalendarContainer"}>
            <iframe title={""} className={"googleCalendar"} src={"https://calendar.google.com/calendar/embed?src=maruszki.levente%40gmail.com&ctz=Europe%2FBudapest"}></iframe>
          </div>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default App;
