import { TextField } from '@mui/material/'
import { InputAdornment } from '@mui/material'
import { Search } from '@mui/icons-material'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import NumbersIcon from '@mui/icons-material/Numbers';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';

const FormStepOne = ({ data, setData }) => {
    return (
        <div className="space-y-6">
            <div className="mt-1">
                <TextField
                    fullWidth
                    variant='outlined'
                    id='name' label='Name'
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                    value={data.name}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <PersonIcon />
                            </InputAdornment>
                        )
                    }}
                />
            </div>
            <div className="mt-1">
                <TextField
                    fullWidth
                    variant='outlined'
                    id='surname' label='Surname'
                    onChange={(e) => setData({ ...data, surname: e.target.value })}
                    value={data.surname}
                />
            </div>
            <div className="mt-1">
                <TextField
                    fullWidth
                    variant='outlined'
                    placeholder='example@gmail.com' id='email' label='Email'
                    onChange={(e) => setData({ ...data, email: e.target.value })}
                    value={data.email}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <AlternateEmailIcon />
                            </InputAdornment>
                        )
                    }}
                />
            </div>
            <div className="mt-1">
                <TextField
                    fullWidth
                    variant='outlined'
                    id='number' label='Number'
                    onChange={(e) => setData({ ...data, number: e.target.value })}
                    value={data.number}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <NumbersIcon />
                            </InputAdornment>
                        )
                    }}
                />
            </div>
            <div className="mt-1">
                <TextField
                    fullWidth
                    variant='outlined'
                    id='address' label='Address'
                    onChange={(e) => setData({ ...data, address: e.target.value })}
                    value={data.address}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <HomeIcon />
                            </InputAdornment>
                        )
                    }}
                />
            </div>
        </div>
    )
}

export default FormStepOne