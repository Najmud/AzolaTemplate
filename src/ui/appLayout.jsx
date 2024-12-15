import Footer from "./footer";
import Header from "./header";
// import Marquee from "./marque";
import { useState } from "react";

export default function AppLayout({ children }) {

    const [isOpen, setIsOpen] = useState(false);

    return <div>
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        {/* <Marquee content={`Welcome to My Website! This is a scrolling text effect created with React and CSS. Enjoy the animation!`} /> */}
        <main onClick={() => setIsOpen(false)}>{children}</main>
        <Footer />
    </div>
}
