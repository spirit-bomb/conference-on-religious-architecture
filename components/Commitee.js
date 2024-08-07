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
const OlList=({items})=>{
    return(
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
    )
}
function Commitee() {
  return (
    <div className='flex flex-col'>
        <p className='text-2xl pt-3 pb-6'>
            Committee:
        </p>
        <div className='flex flex-col pb-3'>
            <p>
                <span className='font-semibold'>Patron: </span>Prof. (Dr.) P. K. Jain, Director, National Institute of Technology Patna
            </p>
            <p>
                <span className='font-semibold'>Chairman: </span>Prof. (Dr.) Fulena Rajak, Head, Department of Architecture & Planning, National Institute of Technology Patna
            </p>
        </div>
        <p className='pb-3 text-xl'>
            Convenors:
        </p>
        <div className='pb-3'>
            <OlList items={['Dr. B. K. Das, Associate Professor, Department of Architecture & Planning, National Institute of Technology Patna',
                            'Dr. Ajay Kumar, Associate Professor, Department of Architecture & Planning, National Institute of Technology Patna',
                            'Dr. Ravish Kumar, Assistant Professor, Department of Architecture & Planning, National Institute of Technology Patna',
                            'Ar. Sandeep Kumar, Assistant Professor, Department of Architecture & Planning, National Institute of Technology Patna',
                        ]}/>
        </div>
        <p className='pb-3 text-xl'>
           Organizing Committee
        </p>
        <div>
            <List items={['Prof. (Dr.) Manoj Kumar, Professor',
                        'Dr. Kamini Sinha, Associate Professor',
                        'Dr. Shailendra K. Mandal, Associate Professor',
                        'Dr. Mazharul Haque, Associate Professor',
                        'Dr. Anjali Sharma, Assistant Professor',
                        'Dr. Md. Danish, Assistant Professor',
                        'Ar. Anushri Barman, Assistant Professor',
                        'Ar. Abhishek Kumar Bittu, Assistant Professor',
                        'Ar. Kranti Kumar Maurya, Assistant Professor',
                        'Ar. Supriya Kumari, Assistant Professor',
                        'Ar. Rakesh Kumar, Assistant Professor',
                        'Ar. Preksha Gupta, Assistant Professor',
                        'Ar. Shubham Meena, Assistant Professor',
                        'Ar. Milind Ashok Kamble, Assistant Professor',
                        'Ar. Pradeep Kr. Kori, Assistant Professor',
                    ]}/>
        </div>
    </div>
  )
}

export default Commitee