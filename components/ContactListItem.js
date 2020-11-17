import styles from '../styles/ContactListItem.module.css'
export default function ContactListItem({ 
    firstName, 
    lastName, address, phone, email, specialties, verified, updatedAt, updatedBy, hospital }) {
    return (
        <div className={styles.container}>
            <div className={styles.title}>{firstName} {lastName}</div>
    <div>{address}</div>
    <div>{phone}</div>
    <div>{email}</div>
        </div>
    )
}