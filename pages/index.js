import { signIn, signOut, useSession } from 'next-auth/react'

export default function Home() {
  const { data: session } = useSession()

  return (
    <>
      {session ? (
        <>
          <p>Welcome: {session.user.name}</p>
          <button onClick={() => signOut()}>
              Logout
          </button>
        </>
      ) : (
        <button onClick={() => signIn('google')} >
          Sign In
        </button>
      )}
    </>
  )
}
