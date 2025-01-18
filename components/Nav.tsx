import Link from "next/link";

export default function Nav(){
    return(
        <nav>
            <h1>Posts</h1>
            <ul>
                <li>
                    <Link href={'/'}>Home</Link>
                </li>
                <li><Link href={'/Posts'}>Posts</Link></li>
            </ul>
        </nav>
    )
}