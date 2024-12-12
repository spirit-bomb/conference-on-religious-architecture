import React from 'react'
const List=({items})=>{
    return(
        <ul>
        {items.map((points,i)=>{
            return(
                <li key={i} className="list-disc text-gray-600
                pb-2">
                   {points}
                </li>
            )
        })}
        </ul>
    )
}
const OlList=({items,title})=>{
    return(
        <div className='mb-2'>
        <p className='pb-2 text-xl'>
            {title}
        </p>
        <ol>
        {items.map((points,i)=>{
            return(
                <li key={i} className="list-decimal text-gray-600
                pb-2">
                   {points}
                </li>
            )
        })}
        </ol>
        </div>
    )
}
function Commitee() {
  return (
    <div className='flex flex-col'>
        <p className='text-2xl pt-3 pb-8 underline mx-auto'>
            Organising Committees
        </p>
        <div className='flex flex-col pb-3 mt-8'>
            <p>
                <span className='font-semibold'>Patron- Prof. (Dr.) P.K. Jain</span> (Director, NIT Patna)
            </p>
            <p>
                <span className='font-semibold'>Chairman- Prof. (Dr.) Fulena Rajak</span> (HoD, Department of Architecture & Planning, NIT Patna)
            </p>
        </div>

        <div className='pb-3'>
            <OlList items={['Dr. B. K. Das',
                            'Dr. Ajay Kumar',
                            'Dr. Ravish Kumar',
                            'Ar. Sandeep Kumar',
                        ]}
                    title={"Secretaries:"} />
            <p className='mb-6'>
                <span className='font-semibold'>Note:</span> Dr. B.K. Das will act as the conference convenor.
            </p>
            <OlList items={['Dr. Kranti Kumar Maurya',
                            'Dr. Sandeep Kumar	',
                            'Ar. Shubham Meena',
                        ]}
                    title={"Research Paper Committee:"} />
            <OlList items={['Ar. Anuhsri Barman',
                            'Ar. Preksha Gupta	',
                            'Ar. Pradeep Kr. Kori',
                        ]}
                    title={"Venue Committee:"} />
            <p className='mb-6'>
                <span className='font-semibold'>Inaugration Venue- Meghnad Saha Hall & Visvesvaraya Hall</span>
            </p>
            <OlList items={['Dr. Mazharul Haque',
                            'Dr. Ravish Kumar	',
                            'Ar. Abhishek Kumar Bittu',
                            'Ar. Supriya Kumari',
                        ]}
                    title={"Decoration Committee and stall management"} />
            <OlList items={['Dr. Shailendra K. Mandal',
                            'Dr. Ajay Kumar',
                            'Ar. Abhishek Kumar Bittu',
                        ]}
                    title={"Food Committee"} />
            <OlList items={['Dr. Anjali Sharma',
                            'Dr. Ravish Kumar	',
                            'Ar. Anushri Barman',
                        ]}
                    title={"Cultural Committee"} />
            <OlList items={['Dr. Md. Danish',
                            'Ar. Rakesh Kumar',
                            'Ar. Milind Ashok Kamble',
                        ]}
                    title={"Accommodation and Transport"} />
            <OlList items={['Prof. Fulena Rajak',
                            'Prof. Manoj Kumar',
                            'Dr. B.K. Das',
                            'Dr. Kamini Sinha',
                        ]}
                    title={"Overall Management"} />
            <OlList items={['Prof.(Dr.) Fulena Rajak',
                            'Sri Mani Shankar Singh',
                            'Dr. Bijay Kumar Das',
                            'Dr. Ajay Kumar',
                        ]}
                    title={"Finance committee"} />
            <OlList items={['Prof. (Dr.) Adam Hardy, Cardiff University, Wales U.K.',
                            'Prof. (Dr.) Janaka Wijesundara, University of Moratuwa, Sri Lanka',
                            'Prof. (Dr.) Amit Kumar, Najing University, China',
                            'Dr. Jayesh Juremalani, Samara University, Ethiopia',
                            'Dr. Sridhar Rajan, Bengaluru',
                            'Prof (Dr) G. Subbaiyan, NIT Tiruchirappalli',
                            'Prof. (Dr.) Dharmesh Juremalani, VNSG University, Surat',
                            'Ar. Anil Kumar, BCD, Bihar Government',
                            'Ar. Dhananjay Kumar, BCD,  Bihar Government',
                            'Dr. Sanjeev Maheshwari, AMU, Aligarh',
                            'Ar. C. S. Sinha, Sinha Associates, Patna',
                            'Ar. Vikash Ranjan, GM (Property and Development, PMRC Patna)',
                            'Prof. (Dr.) Nagendra Narayan, LPU Punjab ',
                            'Dr. Aditya Sanyal, Dept. of Arch. Plan. & Design, IIT BHU',
                            'Ms. Vishi Upadhyay, Bihar Museum, Patna',
                        ]}
                    title={"Advisory Committee"} />
        </div>

    </div>
  )
}

export default Commitee