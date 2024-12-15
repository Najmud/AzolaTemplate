import AppLayout from "../../ui/appLayout";
import Path from "../../ui/Path";
import Address from "./addressCard";
import ContactForm from "./contact-form";


export default function Contact() {
    return (
        <AppLayout>
            <div className="w-full bg-zinc-100 dark:bg-zinc-800" >
                <Path tapName={'Contact'} />
            </div>
            <div className="max-w-7xl   mx-auto lg:grid lg:grid-cols-3 px-8 gap-x-4  py-12">
                <div className="mt-5 col-span-1">
                    <Address />
                </div>
                <div className="mt-5  col-span-2">
                    <ContactForm />
                </div>
            </div>
        </AppLayout>
    )
}