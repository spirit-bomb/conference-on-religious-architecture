import React from 'react'
const List=({items})=>{
    return(
        <ul>
        {items.map((points,i)=>{
            return(
                <li key={i} className="list-disc
                pb-2">
                   {points}
                </li>
            )
        })}
        </ul>
    )
}
function PaperCall() {

  return (
    <div>
        <p className='py-2 text-2xl'>
        The theme of the conference:
        </p>
        <List items={['Historical Evolution of Religious Architecture',
            	'Urbanism & Religious Architecture',
            	'Public Architecture',
            	'Sacred places & cultural practices',
            	'Contemporary Religious Architecture',
            	'Modern Religious Buildings',
            	'Architecture of multi-faith spaces',
            	'Sustainable Architectural Applications',
            	'Religious architecture in building envelope maintenance',
            	'The philosophy and mathematics of religious architecture',
            	'Anthropology and Ergonomics in Religious Architecture',
            	'Sustainability in Religious Architecture',
            	'Characteristics of religious architecture',
            	'Design construction requirements and options',
            	'Water in Religious Architecture',
            	'Religious Architecture Style',
                'Building Material in Religious Architecture',
                'Construction Technology in Religious Architecture',
                'Planning of Religious complexes',
                'Heritage Conservation',
                'Religion and Architectural Style',
                'Construction Management in Religious Architecture',
                'Religious Tourism',
                'Religious Symbology',
                'Traditional Knowledge System',
                'Thermal Comfort in Religious Structure',
                'Climate Change Impact on Religious Architecture', 
                'Erotic Architecture',
                'Landscape in Religious Architecture',
                'Pilgrimage Corridors',
                'Heritage Corridor',
                'Conservation of Religious Structures',
                'Lighting & Ventilation in Religious Architecture',
                'Vernacular Religious Architecture',
                
        ]}/>

    </div>
  )
}

export default PaperCall