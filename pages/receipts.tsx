import Head from "next/head"
import Link from "next/link"

const receipts = () => {
  return (
    <>
      <Head>
        <title>Receipts | BVB SNS</title>
      </Head>

      <div className="py-4">
        <Link href="/receipt/new">
          <a className="inline-block bg-blue-700 text-white font-bold px-4 py-2 rounded">
            New Receipt
          </a>
        </Link>
      </div>
      <h1 className="text-3xl text-gray-800">Show All Receipts</h1>
    </>
  )
}

export default receipts
