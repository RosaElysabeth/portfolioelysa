import React from 'react'
import Project from '../layouts/Project'
import { formations, experiences, partages, divers, section3Title, section4Title, section5Title, section6Title } from '../../profile'

const Works = () => {
    return (
        <>
            <div data-aos="zoom-in-up" data-aos-once="true" className="third">
                <>
                    <div className="pp-head-line mx-auto text-center">
                        <h1 id="formations" className="red-line pp-head">{section3Title}</h1>
                    </div>
                </>
                <div className="row">
                {formations && formations.map((x) => 
                <Project key={x.id} id={x.id} url={x.url} name={x.name} skills={x.skills}/>
                )}
                </div>
            </div>

            <div className="third">
                <>
                    <div className="pp-head-line mx-auto text-center">
                        <h1 id="formations" className="red-line pp-head">{section4Title}</h1>
                    </div>
                </>
                <div className="row">
                    {experiences && experiences.map((x) => 
                    <Project key={x.id} id={x.id} url={x.url} name={x.name} skills={x.skills}/>
                    )}
                </div>
            </div>

             <div className="third">
                <>
                    <div className="pp-head-line mx-auto text-center">
                        <h1 id="formations" className="red-line pp-head">{section5Title}</h1>
                    </div>
                </>
                <div className="row">
                    {partages && partages.map((x) => 
                    <Project key={x.id} id={x.id} url={x.url} name={x.name} skills={x.skills} />
                    )}
                </div>
            </div>

             <div className="third">
                <>
                    <div className="pp-head-line mx-auto text-center">
                        <h1 id="formations" className="red-line pp-head">{section6Title}</h1>
                    </div>
                </>
                <div className="row">
                    {divers && divers.map((x) => 
                    <Project key={x.id} id={x.id} url={x.url} name={x.name} skills={x.skills} />
                    )}
                </div>
            </div>
        </>
    )
}

export default Works
