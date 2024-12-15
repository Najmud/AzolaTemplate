import { useState } from "react"
import PrimaryButton from "../../ui/primaryButton"

export default function ContactForm() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [note, setNote] = useState('')

    const contactFormObject = { firstName, lastName, email, phoneNumber, note }

    const handleContactForm = (event) => {
        event.preventDefault()

        console.log(contactFormObject)
    }

    return (
        <div className="">

            {/* <h1>Contact us</h1> */}
            <form onSubmit={handleContactForm} className="space-y-4  rounded w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-zinc-100 border-zinc-600">
                    <div className='space-y-1'>

                        <input
                            type="text"
                            id="first-name"
                            value={firstName}
                            onChange={e => setFirstName(e.target.value)}
                            placeholder="First name"
                            className="border w-full p-3 border-zinc-300 dark:bg-zinc-900 dark:border-zinc-700"
                        />
                    </div>
                    <div className='space-y-1'>
                        <input
                            type="text"
                            id="last-name"
                            value={lastName}
                            onChange={e => setLastName(e.target.value)}
                            placeholder="Last name"
                            className="p-3 border w-full border-zinc-300 dark:bg-zinc-900 dark:border-zinc-700"
                        />
                    </div>
                    <div className='space-y-1'>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="example@email.com"
                            className="p-3 border w-full border-zinc-300 dark:bg-zinc-900 dark:border-zinc-700"
                        />
                    </div>
                    <div className='space-y-1'>

                        <input
                            type="phone"
                            id="phone-number"
                            value={phoneNumber}
                            onChange={e => setPhoneNumber(e.target.value)}
                            placeholder="Phone number"
                            className="p-3 w-full border border-zinc-300 dark:bg-zinc-900 dark:border-zinc-700"
                        />
                    </div>

                </div>
                <div className='space-y-1 text-zinc-100'>

                    <textarea
                        value={note}
                        onChange={e => setNote(e.target.value)}
                        id="note" placeholder="Write a note"
                        className="border h-64 w-full p-3 border-zinc-300 dark:bg-zinc-900 dark:border-zinc-700"
                    />
                </div>
                <PrimaryButton className="rounded-sm hover:ring-offset-2">Submit</PrimaryButton>
            </form>

        </div>)

}
