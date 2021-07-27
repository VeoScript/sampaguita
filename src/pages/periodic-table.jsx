/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import NavBar from '~/components/NavBar'
import AddElement from '~/components/AddElement'
import LoadSpinner from '~/components/LoadSpinner'
import useSWR from 'swr'
import { PrismaClient } from '@prisma/client'

export default function PeriodicTable({ chemElements }) {

  const fetcher = (...args) => fetch(...args).then(res => res.json())

  const { data, error } = useSWR('/api/chemelements', fetcher, { refreshInterval: 1000 })

  if (error) {
    return (
      <div className="flex flex-row items-center justify-center w-full h-screen bg-[#3D4451] text-white">
        Failed to Load... Refresh Page.
      </div>
    )
  }

  if (!data) {
    return (
      <LoadSpinner />
    )
  }

  return (
    <>
      <Head>
        <title>Periodic Table</title>
      </Head>
      <div className="flex flex-col w-full h-screen overflow-hidden bg-[#3D4451]">
        <NavBar />
        <div className="flex flex-col w-full h-full">
          <div className="flex flex-col w-full bg-gradient-to-r from-gray-600 to-blue-500">
            <div className="flex flex-row items-center justify-between px-10 py-3">
              <span className="font-normal text-base">List of Elements</span>
              <div className="form-control w-full max-w-md">
                <input type="text" placeholder="Search" className="input input-sm input-bordered" />
              </div>
              <AddElement
                chemElements={chemElements}
              />
            </div>
          </div>
          <div className="flex flex-col w-full h-full overflow-y-auto px-3 py-3 pb-20">
            <table className="table w-full table-compact">
              <thead>
                <tr>
                  <th>Image</th> 
                  <th>Name</th> 
                  <th>Atomic No.</th> 
                  <th>Symbol</th> 
                  <th>Chemical Group Block</th> 
                  <th>Actions</th>
                </tr>
              </thead> 
              <tbody>
                {data.map((chemElements) => (
                  <tr key={ chemElements.id }>
                    <th>
                      <img className="w-10 h-10 object-cover rounded-full bg-gray-700" src={ chemElements.image } alt={ chemElements.name } />
                    </th> 
                    <td>{ chemElements.name }</td> 
                    <td>{ chemElements.atomic_no }</td> 
                    <td>{ chemElements.symbol }</td> 
                    <td>{ chemElements.cgb }</td>
                    <td>
                      <div className="btn-group">
                        <button className="btn btn-xs capitalize hover:bg-blue-500">View</button> 
                        <button className="btn btn-xs capitalize hover:bg-green-500">Update</button> 
                        <button className="btn btn-xs capitalize hover:bg-red-500">Delete</button> 
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody> 
              <tfoot>
                <tr>
                  <th>Image</th> 
                  <th>Name</th> 
                  <th>Atomic No.</th> 
                  <th>Symbol</th> 
                  <th>Chemical Group Block</th>
                  <th>Actions</th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const prisma = new PrismaClient()
  const chemElements = await prisma.chemElements.findMany()
  return {
    props: {
      chemElements
    },
    revalidate: 10,
  }
}