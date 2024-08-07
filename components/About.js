import React from 'react'
import Link from 'next/link'
function About() {
  return (
    <div className='w-fit flex flex-col'>
        <div>
            <p className='text-xl lg:text-2xl pt-3 pb-2'>
            The International Research Conference Aims and Objectives
            </p>
            <p className='text-justify text-gray-600 text-sm lg:text-base'>
            The objective of the International Conference on Religious Architecture is to convene distinguished academic scientists, researchers, research scholars, and students (PG/UG) to communicate and disseminate their research findings and experiences regarding all aspects of Religious Architecture. It also offers a prominent interdisciplinary forum for researchers, practitioners, and educators to present and discuss the most recent innovations, trends, and concerns, as well as practical challenges encountered and solutions adopted in the field of Religious Architecture. 
            </p>
        </div>
        <div>
          <p className='text-xl lg:text-2xl pt-3 pb-2'>
          Call for Contributions
          </p>
          <p className='text-justify text-gray-600 text-sm lg:text-base'>
          Authors are urged to contribute to the conference by submitting their research abstracts, papers, and e-posters. We accept high-quality research presentations that describe novel and unpublished results of conceptual, creative, empirical, experimental, or theoretical work in all fields of Religious Architecture for presentation at the conference. The conference invites abstracts, papers, and e-posters that discuss the conference&apos;s themes. 
          </p>
        </div>
        <div>
          <p className='text-xl lg:text-2xl pt-3 pb-2'>
          Guidelines for Authors
          </p>
          <p className='text-justify text-gray-600 text-sm lg:text-base'>
          Please ensure your submission meets the conference&apos;s strict guidelines for accepting scholarly papers. Downloadable versions of the checklist for <Link target="_blank" className='text-blue-500' href="https://shorturl.at/JX4ju">Full-Text Papers</Link>  and <Link target="_blank" href="https://shorturl.at/ZKBgm" className='text-blue-500'>Abstract Papers</Link>.
          Please refer to the Paper Submission Guideline, Abstract Submission Guideline, and Author Information before submitting your paper.
          </p>
        </div>
        <div>
          <p className='text-xl lg:text-2xl pt-3 pb-2'>
          Conference Proceedings
          </p>
          <p className='text-justify text-gray-600 text-sm lg:text-base'>
          All submitted conference papers will be blind peer-reviewed by three competent reviewers. The peer-reviewed conference proceedings will be published with ISBN.
          </p>
        </div>
        <div>
          <p className='text-xl lg:text-2xl pt-3 pb-2'>
          Conference Sponsor and Exhibitor Opportunities
          </p>
          <p className='text-justify text-gray-600 text-sm lg:text-base'>
          The Conference offers the opportunity to become a conference sponsor or exhibitor. To participate as a sponsor or exhibitor, please download and complete the Conference Sponsorship Request Form.
          Application Forms
          Paper Submission
          Author Registration
          Sponsorship and Exhibition

          </p>
        </div>
    </div>
  )
}

export default About