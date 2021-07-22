import '../css/Projects.css'
import Project from '../components/Project'

function Projects() {
      return (
            <div className="Projects">
                  <Project link = "http://134.209.72.40:3003" title = "Timeline Generator" context = "This app lets users store historical data into timelines. This app lets user pick a length of time and it automatically generates the years. Users are then able to add events to each year which can be very helpful to track anything from important dates in history to a log of one's personel life moments."/>
            </div>
      );
}

export default Projects;