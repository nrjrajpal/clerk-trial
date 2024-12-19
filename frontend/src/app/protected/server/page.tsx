import { currentUser } from "@clerk/nextjs/server"

export default async function Page(){
    const user = await currentUser()
    

    return(
        <section className="py-24">
            <div className="container">
                <h1 className="text-3xl font-bold">Protected server side page</h1>
                <p className="mt-4">
                    Welcome,  { user?.primaryEmailAddress?.emailAddress }!
 
                </p>
            </div>
        </section>
    )
}