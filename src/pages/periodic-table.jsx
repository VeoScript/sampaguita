/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import NavBar from '~/components/NavBar'
import AddElement from '~/components/AddElement'

export default function PeriodicTable() {
  return (
    <>
      <Head>
        <title>Periodic Table</title>
      </Head>
      <div className="flex flex-col w-full h-screen">
        <NavBar />
        <div className="flex flex-col w-full">
          <div className="flex flex-col w-full bg-gradient-to-r from-gray-600 to-blue-500">
            <div className="flex flex-row items-center justify-between px-10 py-3">
              <span className="font-normal text-base">List of Elements</span>
              <AddElement />
            </div>
          </div>
          <div className="overflow-x-auto px-3 py-3">
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
                <tr>
                  <th>
                    <img className="w-10 h-10 object-cover rounded-full bg-gray-700" src="https://www.sciencenewsforstudents.org/wp-content/uploads/2019/11/860_main_lemelson_silver.png" alt="image" />
                  </th> 
                  <td>Silver</td> 
                  <td>47</td> 
                  <td>Ag</td> 
                  <td>Transition Metal</td>
                  <td>
                    <div className="btn-group">
                      <button className="btn btn-xs capitalize hover:bg-blue-500">View</button> 
                      <button className="btn btn-xs capitalize hover:bg-green-500">Update</button> 
                      <button className="btn btn-xs capitalize hover:bg-red-500">Delete</button> 
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <img className="w-10 h-10 object-cover rounded-full bg-gray-700" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzo5NK0dXgCoECZOs5ZwXgPwLHZEvq9PIjLQ&usqp=CAU" alt="image" />
                  </th>
                  <td>Silicon</td> 
                  <td>14</td> 
                  <td>Si</td> 
                  <td>Metalliod</td>
                  <td>
                    <div className="btn-group">
                      <button className="btn btn-xs capitalize hover:bg-blue-500">View</button> 
                      <button className="btn btn-xs capitalize hover:bg-green-500">Update</button> 
                      <button className="btn btn-xs capitalize hover:bg-red-500">Delete</button> 
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <img className="w-10 h-10 object-cover rounded-full bg-gray-700" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPOs341G0UaskaYJJnm8q4i4--hmwKovn7AUpQvXy-h9SlmVjNWY3BRbkaCm6flC941Yo&usqp=CAU" alt="image" />
                  </th>
                  <td>Lead</td> 
                  <td>82</td> 
                  <td>Pb</td> 
                  <td>Post-Transition Metal</td>
                  <td>
                    <div className="btn-group">
                      <button className="btn btn-xs capitalize hover:bg-blue-500">View</button> 
                      <button className="btn btn-xs capitalize hover:bg-green-500">Update</button> 
                      <button className="btn btn-xs capitalize hover:bg-red-500">Delete</button> 
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <img className="w-10 h-10 object-cover rounded-full bg-gray-700" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJgGwfcJHkn2APLR9i7n11x8FkYcnGvE_NV-twsdP_6jXjaL78JE2nlbYU_ILxE9-WnEk&usqp=CAU" alt="image" />
                  </th>
                  <td>Krypton</td> 
                  <td>36</td> 
                  <td>Kr</td> 
                  <td>Noble Gas</td>
                  <td>
                    <div className="btn-group">
                      <button className="btn btn-xs capitalize hover:bg-blue-500">View</button> 
                      <button className="btn btn-xs capitalize hover:bg-green-500">Update</button> 
                      <button className="btn btn-xs capitalize hover:bg-red-500">Delete</button> 
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <img className="w-10 h-10 object-cover rounded-full bg-gray-700" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEqSsrLd4966Mcvom32yd3Bzka7l5MRiJpkvTKFAMMJ0YLCpjr-uy_vrYqOEjzoBGq4VM&usqp=CAU" alt="image" />
                  </th> 
                  <td>Potassium</td> 
                  <td>19</td> 
                  <td>K</td> 
                  <td>Alkali Metal</td>
                  <td>
                    <div className="btn-group">
                      <button className="btn btn-xs capitalize hover:bg-blue-500">View</button> 
                      <button className="btn btn-xs capitalize hover:bg-green-500">Update</button> 
                      <button className="btn btn-xs capitalize hover:bg-red-500">Delete</button> 
                    </div>
                  </td>
                </tr>
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