'use client'

import Link from "next/link";
import logoImage from '@/assets/logo.png'
import classes from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "@/components/main-header/main-header-bg";
import {usePathname} from "next/navigation";

export default function MainHeader() {
    const path = usePathname();

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
                            <Link href='/meals' className={path.startsWith('/meals') ? classes.active : undefined}>
                                Browse Meals
                            </Link>
                        </li>
                        <li>
                            <Link href='/community' className={path.startsWith('/community') ? classes.active : undefined}>
                                Foodies Community
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
