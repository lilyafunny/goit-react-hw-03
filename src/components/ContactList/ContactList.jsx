import Contact from '../Contact/Contact'

const ContactList = ({ numbers }) => {

    return (
        <>
            <ul>
                {numbers.map((number) => (
                    <li key={number.id}>
                        <Contact data={number} />
                    </li>
                ))}
            </ul>
        </>
    )

}

export default ContactList