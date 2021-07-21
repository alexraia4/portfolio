import '../css/Projects.css'

function Projects() {
      return (
            <div className="Projects">
                  <div className = "Projects_timeline">
                        <a href="https://www.w3schools.com" className = "Projects_timeline_link"/>
                        <div className = "Projects_timeline_content">
                              <p className = "Projects_timeline_title">Timeline Generator</p>
                              <p className = "Projects_timeline_context">For this project, I set out to create an app that lets users store historical data into timelines. This app lets user pick a length of time and it automatically generates the years. Users are then able to add events to each year which can be very helpful to track anything from important dates in history to a log of one's personel life moments.</p>
                        </div>
                  </div>           
            </div>
      );
}

export default Projects;