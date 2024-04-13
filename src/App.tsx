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
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import './App.css';

function App() {
  const [dateValue,setDateValue] = React.useState<Dayjs | null>(dayjs('2024-04-13'));
  const [startTimeValue,setStartTimeValue] = React.useState<Dayjs | null>(dayjs('2022-04-17T15:30'));
  const [endTimeValue,setEndTimeValue] = React.useState<Dayjs | null>(dayjs('2022-04-17T15:30'));
  const [carType,setCarType] = React.useState('');
  const [carYear,setCarYear] = React.useState('');
  const [firstName,setFirstName] = React.useState('');
  const [lastName,setLastName] = React.useState('');
  const [email,setEmail] = useState('');
  const [telNumber,setTelNumber] = React.useState('');
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  function handleAccordClick(panel:string) {
    if(expanded === panel) setExpanded("")
    if(expanded !== panel) setExpanded(panel)
  }

  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const handleChange = (event: SelectChangeEvent) => {setCarType(event.target.value as string)};

  return (
    <>
      <div className={'dateWrapper'}>
        <Accordion defaultExpanded expanded={expanded === 'panel1'}>
          <AccordionSummary>
            Choose Date
          </AccordionSummary>
          <AccordionDetails>
            <Box sx={{ minWidth: 120 }}>
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
              <div className={'buttonContainer'}>
                <Button variant={'outlined'} onClick={()=>handleAccordClick('panel2')}>Continue</Button>
              </div>
            </Box>
          </AccordionDetails>
        </Accordion>
      </div>


      <div className={'informationWrapper'}>
        <Accordion expanded={expanded === 'panel2'}>
          <AccordionSummary>
            Your information
          </AccordionSummary>
          <AccordionDetails>
            <div className={'textInputContainer'}>
              <Box
                  component="form"
                  sx={{
                    '& > :not(style)': { minWidth: 120 },
                  }}
                  noValidate
                  autoComplete="off"
              >
                <FormControl>
                  <div className={'textFieldContainer'}>
                    <TextField id="outlined-basic" label="First Name" variant="outlined" required
                               onChange={(event) => setFirstName(event.target.value)}/>
                  </div>
                  <div className={'textFieldContainer'}><TextField id="outlined-basic" label="Last Name" variant="outlined" required
                                                                   onChange={(event) => setLastName(event.target.value)}/>
                  </div>
                  <div className={'textFieldContainer'}>
                    <TextField id="outlined-basic" label="Email" variant="outlined" required type="email"
                               onChange={(event) => setEmail(event.target.value)}/>
                  </div>
                  <div className={'textFieldContainer'}>
                    <TextField id="outlined-basic" label="Phone Number" variant="outlined" required type="tel"
                               onChange={(event) => setTelNumber(event.target.value)}/>
                  </div>
                </FormControl>
              </Box>
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
                  <div className={'textFieldContainer'}>
                    <TextField type="number" label={"Year of making"} required variant="outlined" onChange={(event)=>setCarYear(event.target.value)}></TextField>
                  </div>
                </FormControl>
                <Button variant='outlined' onClick={()=>handleAccordClick('panel3')}>Continue</Button>
              </Box>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>

      <div className={'summaryWrapper'}>
        <Accordion expanded={expanded === 'panel3'}>
          <AccordionSummary>
            Summary
          </AccordionSummary>
          <AccordionDetails>
            <div className={'summaryTextContainer'}>
              <label>Date</label>
              <div className={'summaryTextContainerDate'}>
                <InputLabel>Date</InputLabel>
                <Input readOnly value={dayjs(dateValue).format().substring(0, 10)}></Input>
                <InputLabel>Start of appointment</InputLabel>
                <Input readOnly
                       value={dayjs(startTimeValue).toDate().getHours() + ':' + dayjs(startTimeValue).toDate().getMinutes()}></Input>
                <InputLabel>End of appointment</InputLabel>
                <Input readOnly
                       value={dayjs(endTimeValue).toDate().getHours() + ':' + dayjs(endTimeValue).toDate().getMinutes()}></Input>
              </div>
              <label>Personal information</label>
              <div className={'summaryTextContainerPersInf'}>
                <InputLabel>First name</InputLabel>
                <Input readOnly value={firstName}></Input>
                <InputLabel>Last name</InputLabel>
                <Input readOnly value={lastName}></Input>
                <InputLabel>Email</InputLabel>
                <Input readOnly value={email}></Input>
                <InputLabel>Phone number</InputLabel>
                <Input readOnly value={telNumber}></Input>
                <InputLabel>Type of Porsche</InputLabel>
                <Input readOnly value={carType.toUpperCase()}></Input>
                <InputLabel>Year of making</InputLabel>
                <Input readOnly value={carYear}></Input>
              </div>
            </div>
            <div className={'summaryButtonContainer'}>
              <div className={'summaryButton'}>
                <Button variant={'outlined'} onClick={() => handleAccordClick('panel1')}>Back to date selection</Button>
              </div>
              <div className={'summaryButton'}>
                <Button variant={'outlined'} onClick={() => handleAccordClick('panel2')}>Back to personal
                  information</Button>
              </div>
              <div className={'summaryButton'}>
                <Button variant={'contained'} onClick={handleOpenModal}>Confirm</Button>
                <Modal
                    open={openModal}
                    onClose={handleCloseModal}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <h1>Thanks for making an appointment</h1>
                    <h2>Here is a summary of the details</h2>
                    <h3>Date of appointment</h3>
                    <div className={'summaryTextContainerDate'}>
                      <InputLabel>Date</InputLabel>
                      <Input readOnly value={dayjs(dateValue).format().substring(0, 10)}></Input>
                      <InputLabel>Start of appointment</InputLabel>
                      <Input readOnly
                             value={dayjs(startTimeValue).toDate().getHours() + ':' + dayjs(startTimeValue).toDate().getMinutes()}></Input>
                      <InputLabel>End of appointment</InputLabel>
                      <Input readOnly
                             value={dayjs(endTimeValue).toDate().getHours() + ':' + dayjs(endTimeValue).toDate().getMinutes()}></Input>
                    </div>
                    <h3>Personal information</h3>
                    <div className={'summaryTextContainerPersInf'}>
                      <InputLabel>First name</InputLabel>
                      <Input readOnly value={firstName}></Input>
                      <InputLabel>Last name</InputLabel>
                      <Input readOnly value={lastName}></Input>
                      <InputLabel>Email</InputLabel>
                      <Input readOnly value={email}></Input>
                      <InputLabel>Phone number</InputLabel>
                      <Input readOnly value={telNumber}></Input>
                      <InputLabel>Type of Porsche</InputLabel>
                      <Input readOnly value={carType.toUpperCase()}></Input>
                      <InputLabel>Year of making</InputLabel>
                      <Input readOnly value={carYear}></Input>
                      <div className={'modalButton'}>
                        <Button variant={'contained'} onClick={handleCloseModal}>Close</Button>
                      </div>
                    </div>
                  </Box>
                </Modal>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>

      <Accordion>
        <AccordionSummary>
          Google Calendar (Admin only)
        </AccordionSummary>
        <AccordionDetails>
          <div className={"googleCalendarContainer"}>
            <iframe title={""} className={"googleCalendar"}
                    src={"https://calendar.google.com/calendar/embed?src=maruszki.levente%40gmail.com&ctz=Europe%2FBudapest"}></iframe>
          </div>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default App;
