'use client'
import { useUser } from '@clerk/nextjs'

export default function Page(){
    
    const { isLoaded, isSignedIn, user } = useUser()

    if (!isLoaded || !isSignedIn) {
        return null
    }

    return(
        <section className="py-24">
            <div className="container">
                <h1 className="text-3xl font-bold">Protected client side page</h1>
                <p className="mt-4">
                    Welcome,  { user?.primaryEmailAddress?.emailAddress }!
                </p>
            </div>
        </section>
    )
}