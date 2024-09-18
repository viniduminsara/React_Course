import Link from "next/link";
import logoImage from '@/assets/logo.png'
import classes from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "@/components/main-header/main-header-bg";

export default function MainHeader() {

    return (
        <>
            <MainHeaderBackground/>
            <header className={classes.header}>
                <Link href='/Section_24-NextJS/02-foodies-starting-project/public' className={classes.logo}>
                    <Image src={logoImage} alt="logo"/>
                    NextLevel Food
                </Link>

                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <Link href='/meals'>Browse Meals</Link>
                        </li>
                        <li>
                            <Link href='/community'>Foodies Community</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
