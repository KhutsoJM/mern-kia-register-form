import FormStepOne from '../components/FormStepOne'
import FormStepTwo from '../components/FormStepTwo'
import FormStepThree from '../components/FormStepThree'

// React Hooks
import { useState } from 'react'

// Packages
import axios from 'axios'

// Material UI
import { Button } from '@mui/material/'


const Form = () => {
    const [page, setPage] = useState(0)
    const [data, setData] = useState({
        name: '',
        surname: '',
        email: '',
        number: '',
        address: '',
        numOfKids: 0,
        learnerName: '',
        learnerSurname: '',
        school: '',
        venue: '',
        startDate: '',
        duration: '',
        rate: 0,
    })

    const titles = ["Step 1", "Step 2", "Step 3"]

    const registerUser = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post('/register', { ...data })
            console.log({ ...response.data.user })
        } catch (e) {
            alert('Registration failed')
            console.log(e.message)
        }
    }

    const pageDisplay = () => {
        if (page === 0) {
            return <FormStepOne data={data} setData={setData} />
        } else if (page === 1) {
            return <FormStepTwo data={data} setData={setData} />
        } else if (page === 2) {
            return <FormStepThree data={data} setData={setData} />
        }
    }

    return (
        <div className='w-full h-full min-h-full-flex flex-col justify-center py-9 sm:px-6 lg:px-8 z-100 mf:h-screen'>
            {/* <div>
                <div>Progress Bar</div>
            </div> */}
            <div className='sm:mx-auto sm:w-full sm:max-w-md'>
                <h1 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900'>
                    {titles[page]}
                </h1>
            </div>
            <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
                <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
                    <div>{pageDisplay()}</div>
                    <div className='flex flex-row gap-3 pt-8'>
                        <Button
                            variant="contained"
                            fullWidth
                            onClick={(e) => {
                                setPage((currPage) => currPage - 1)
                            }}
                            disabled={page === 0}>
                            Previous
                        </Button>
                        <Button
                            variant='contained'
                            fullWidth
                            onClick={(e) => {
                                if (page === titles.length - 1) {
                                    registerUser(e)
                                } else {
                                    setPage((currPage) => currPage + 1)
                                }
                            }}>
                            {page === titles.length - 1 ? 'Submit' : 'Next'}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form