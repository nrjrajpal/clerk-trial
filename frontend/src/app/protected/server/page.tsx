import { currentUser } from "@clerk/nextjs/server"
import Link from "next/link"
export default async function Page(){

    const user= await currentUser()
    return(
        <section className="py-24">
            <div className="container">
                <h1 className="text-3xl font-bold">Protected server side page</h1>

                <p className='mt-4'>Welcome, {user?.id}</p>
                <li>
                    <Link href='/api/webhooks/clerk'>Who am I?</Link>
                </li>
            </div>
        </section>
    )
}