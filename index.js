'use strict'

function App(props){
    return(
        <div className={'contain-all'}>
	<header>
		<h1>{props.name} Resume</h1>
	</header>
	<main>
		<section className={'information'}>
			<div className={'info'}>
				<h2>Information</h2>
				<div className={'picture'}>
					<img src="https://m.theworlds50best.com/filestore/jpg/Daniela-BFC-19-teaser.jpg" alt="Sally Student Profile Picture" />
                </div>
                <div className={'details'}>
                    <p>
                    <b>Name: </b> {props.name}<br />
                    <b>Email: </b> <a href='mailto:sally.student@gmail.com'>{props.mail}</a><br />
                    <b>Telephone: </b> <a href="tel:+819043880340">{props.pnumber}</a><br />
                    <b>Objective: </b> To find work as a Full Stack Developer
                </p>
                </div>
            </div>
        </section>
        <section className="education">
            <h2>Education</h2>
            <div className="edu1">
                <h3>University of Queensland</h3>
                <ul>
                    <li className="title">Bachelor of Computer Science</li>
                    <li className="location">St. Lucia, Queensland, Australia</li>
                    <li className="years"><em>2001 - 2005</em></li>
                    <li className="description"> Majored in Computing Languages and Cyber Security. 
                        Curabitur sodales leo non suscipit vulputate. Morbi consectetur 
                        tellus nulla, vel egestas ex tempus faucibus. Aenean tristique accumsan nibh, 
                        eget mollis arcu hendrerit eget.</li>
                </ul>
            </div>
            <div className="edu2">
                    <h3>St. John's College</h3>
                    <ul>
                        <li className="title">High School Certificate</li>
                        <li className="location">Brisbane, Queensland, Australia</li>
                        <li className="years"><em>1995 - 2000</em></li>
                        <li className="description">Nam neque enim, gravida non neque vel, placerat ultrices libero. 
                            Vestibulum semper nisl fringilla ex ornare molestie. Aliquam 
                            suscipit velit vehicula, accumsan leo sed, commodo mi. In id est iaculis, 
                            feugiat lacus nec, vehicula mi.</li>
                    </ul>
                </div>
        </section>
        <section className="employment">
                <h2>Employment</h2>
                <div className="job1">
                    <h3>Nishimura Designs</h3>
                    <ul>
                        <li className="title">Full Stack Developer</li>
                        <li className="location">Tokyo, Japan</li>
                        <li className="years"><em>2011 - Present</em></li>
                        <li className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium 
                            voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati 
                            cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est 
                            laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero 
                            tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime 
                            placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. </li>
                    </ul>
                </div>
                <div className="job2">
                        <h3>Mom's and Pop's I.T Solutions</h3>
                        <ul>
                            <li className="title">Web Developer</li>
                            <li className="location">Brisbane, Queensland, Australia</li>
                            <li className="years"><em>2006 - 20010</em></li>
                            <li className="description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
                                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
                                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas 
                                sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione 
                                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, 
                                consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et 
                                dolore magnam aliquam quaerat voluptatem.</li>
                        </ul>
                </div>
        </section>
                <section className="skills">
                        <h2>Skills</h2>
                        <div className="skills-list">
                            <ul id='skills-list-items'>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>jQuery</li>
                             </ul>
                        </div>
                </section>
      </main>
            <footer>
                    <address>
                       2019 <a href='mailto:sally.student@gmail.com'>{props.name}</a>
                    </address>
            </footer>
    </div>
    );
};





ReactDOM.render(
    <App
      name='Sally Stong'
      mail='sally.student@gmail.com'
      pnumber= '+81 (090)4399-0340'
    />,
    document.querySelector('#application-root')
  );