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
function Guidelines() {
  return (
    <div>
        <p className='py-3 text-2xl'>
        Submission Guidelines
        </p>
        <div>
            <p className='text-lg font-medium pb-3'>
            Abstract Submission:
            </p>
            <List
            items={['Submit an original work for consideration at conference.',
                'The abstract should clearly describe the original work being presented.',
                'The abstract should be written in English, one paragraph with a word limit of 200-250 words with keywords.',
                'Include a brief biography of the presenting author.',
                'Submit the abstract in MS Word (.doc or .docx) format.',
                'Submit the abstract and receive acknowledgement of receipt via email.',
                "The title, author's name, and affiliations should be centered, with the presenting author's name underlined.",
            ]}
            />
        </div>
        <div>
            <p className='text-lg font-medium py-3'>
            Full Paper Submission:
            </p>
            <List
            items={["Only for researchers and professionals whose abstracts have been accepted and who have paid the registration fee.",
                "The total number of pages must be 6-8 in double-column format.",
                "The manuscript must be written in English and checked for grammar and language errors.",
                "Tables, figures, and images should be properly named and of high quality.",
                "Keywords should be written in lowercase letters (except for names/scientific names) and separated with commas.",
                "Include names of affiliations, including the country.",
                "The paper should include: Background, Motivation and Objective, Statement of Contribution/Methods, Results, Discussions, and Conclusions.",
                "Submit the full paper after preparing it according to the guidelines."
            ]}
            />
        </div>
    </div>
  )
}

export default Guidelines