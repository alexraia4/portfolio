import '../css/Projects.css'
import Project from '../components/Project'

function Projects() {
      return (
            <div className="Projects">
                  <Project link = "http://134.209.72.40:3003" title = "Timeline Generator" context = "I created an app that lets users store historical data into timelines. Users pick a length of time and it automatically generates the years into a timeline format. Users then add events to each year to track anything from important dates in history to a log of one's personel life moments. Have fun creating multiple timelines!"/>
            </div>
      );
}

export default Projects;