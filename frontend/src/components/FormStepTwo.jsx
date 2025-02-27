// Material UI
import { TextField } from '@mui/material/'


const FormStepTwo = ({ data, setData }) => {
    return (
        <div className="space-y-6">
            <div className="mt-1">
                <TextField
                    fullWidth
                    variant='outlined'
                    id='numOfKids' label='# of enrolling kids'
                    onChange={(e) => setData({ ...data, numOfKids: e.target.value })}
                    value={data.numOfKids}
                />
            </div>
            <div className="mt-1">
                <TextField
                    fullWidth
                    variant='outlined'
                    id='learnerName' label='Name'
                    onChange={(e) => setData({ ...data, learnerName: e.target.value })}
                    value={data.learnerName}
                />
            </div>
            <div className="mt-1">
                <TextField
                    fullWidth
                    variant='outlined'
                    id='surname' label='Surname'
                    onChange={(e) => setData({ ...data, learnerSurname: e.target.value })}
                    value={data.learnerSurname}
                />
            </div>
        </div>
    )
}

export default FormStepTwo