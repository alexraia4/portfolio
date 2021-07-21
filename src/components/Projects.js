import '../css/Projects.css'
import Project from '../components/Project'

function Projects() {
      return (
            <div className="Projects">
                  <Project title = "Timeline Generator" context = "For this project, I set out to create an app that lets users store historical data into timelines. This app lets user pick a length of time and it automatically generates the years. Users are then able to add events to each year which can be very helpful to track anything from important dates in history to a log of one's personel life moments."/>
            </div>
      );
}

export default Projects;