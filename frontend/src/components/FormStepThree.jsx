import { TextField } from "@mui/material"
import { InputAdornment } from '@mui/material'
import SchoolIcon from '@mui/icons-material/School';
import PlaceIcon from '@mui/icons-material/Place';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TimelapseIcon from '@mui/icons-material/Timelapse';


const FormStepThree = ({ data, setData }) => {
    return (
        <div className="space-y-6">
            <div className="mt-1">
                <TextField
                    fullWidth
                    variant='outlined'
                    id='school' label='School'
                    onChange={(e) => setData({ ...data, school: e.target.value })}
                    value={data.school}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <SchoolIcon />
                            </InputAdornment>
                        )
                    }}
                />
            </div>
            <div className="mt-1">
                <TextField
                    fullWidth
                    variant='outlined'
                    id='venue' label='Venue'
                    onChange={(e) => setData({ ...data, venue: e.target.value })}
                    value={data.venue}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <PlaceIcon />
                            </InputAdornment>
                        )
                    }}
                />
            </div>
            <div className="mt-1">
                <TextField
                    fullWidth
                    variant='outlined'
                    id='startDate' label='Start date'
                    onChange={(e) => setData({ ...data, startDate: e.target.value })}
                    value={data.startDate}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <CalendarMonthIcon />
                            </InputAdornment>
                        )
                    }}
                />
            </div>
            <div className="mt-1">
                <TextField
                    fullWidth
                    variant='outlined'
                    id='duration' label='Duration'
                    onChange={(e) => setData({ ...data, duration: e.target.value })}
                    value={data.duration}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <TimelapseIcon />
                            </InputAdornment>
                        )
                    }}
                />
            </div>
            <div className="mt-1">
                <TextField
                    fullWidth
                    variant='outlined'
                    id='rate' label='Rate'
                    onChange={(e) => setData({ ...data, rate: e.target.value })}
                    value={data.rate}
                />
            </div>
        </div>
        
    )
}

export default FormStepThree