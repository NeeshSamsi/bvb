import type { NextPage } from "next"
import Head from "next/head"
// import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | BVB SNS</title>
      </Head>
      <div>
        <h1 className="text-3xl text-gray-900 text-center font-bold">BVB SNS Dashboard</h1>
      </div>
    </>
  )
}

export default Home
