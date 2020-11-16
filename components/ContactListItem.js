import styles from '../styles/ContactListItem.module.css'
export default function ContactListItem({ 
    first_name, 
    last_name, address, phone, email, specialties, verified, updated_at, updated_by, hospital }) {
    return (
        <div className={styles.container}>
            <div className={styles.title}>{first_name} {last_name}</div>
    <div>{address}</div>
    <div>{phone}</div>
    <div>{email}</div>
        </div>
    )
}