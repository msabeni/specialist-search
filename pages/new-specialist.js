import React, { useState } from "react"
import Select from 'react-select'
import styles from '../styles/NewSpecialistForm.module.css'

const options = [
    { value: 'ONCOLOGY', label: 'ONCOLOGY' },
    { value: 'DERMATOLOGY', label: 'DERMATOLOGY' },
    { value: 'NEPHROLOGY', label: 'NEPHROLOGY' },
    { value: 'PATHOLOGY', label: 'PATHOLOGY'},
    { value: 'CARDIOLOGY', label: 'CARDIOLOGY'},
    { value: 'HEMATOLOGY', label: 'HEMATOLOGY'}
  ] 

function NewSpecialistForm(props) {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [hospital, setHospital] = useState("")
    const [address, setAddress] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [specialties, setSpecialties] = useState([])

    async function onSubmit(event){
        event.preventDefault();
        const data = {
            firstName,
            lastName,
            hospital,
            address,
            email,
            phone,
            specialties
        }
        await fetch('/api/specialists', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        location.href = '/'
        return false;
    }
    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <div>
                <label>
                    First Name
            </label>

                <input type="text" name="first_name" value={firstName} onChange={e => setFirstName(e.target.value)} />
            </div>

            <div>
                <label>
                    Last Name
            </label>
                <input type="text" name="last_name" value={lastName} onChange={e => setLastName(e.target.value)} />
            </div>

            <div>
                <label>
                    Hospital
            </label>
                <input type="text" name="hospital" value={hospital} onChange={e => setHospital(e.target.value)} />
            </div>

            <div>
                <label>
                    email
                    </label>
                <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
                
            </div>

            <div>
                <label>
                    Address
            </label>
                <input type="text" name="adress" value={address} onChange={e => setAddress(e.target.value)} />
            </div>

            <div>
                <label>
                    Phone
            </label>
                <input type="phone" name="phone" value={phone} onChange={e => setPhone(e.target.value)} />
            </div>

            <div>
                <label>
                    Specialties
            </label>
                <Select options={options} value={specialties} isMulti onChange={value => setSpecialties(value)}/>
            </div>
            <div>
                <button type="submit">SUBMIT</button>
            </div>
        </form>
    )
}

export default NewSpecialistForm