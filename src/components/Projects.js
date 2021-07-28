import '../css/Projects.css'
import Project from '../components/Project'
import timeline_pic from '../images/timeline_pic.png'

function Projects() {


      return (
            <div className="Projects">
                  <Project picURL = {`${timeline_pic}`} link = "http://134.209.72.40:3003" title = "Timeline Generator" context = "I created an app that lets users store historical data into timelines. Users pick a length of time and it automatically generates the years into a timeline format. Users then add events to each year to track anything from important dates in history to a log of one's personel life moments. Have fun creating multiple timelines!"/>
                  <Project picURL = {`derp`} link = "" title = "Checkers App" context = "For this application, I worked with a team of 4 using github teams and trello to build a fully functional in-browser checkers game. Using this site, a single checkers game can be played by two users on separate computers. We acomplished this using socketIO which allows users to interact with each other in 'rooms' built automatically on the backend of the aplication."/>
            </div>
      );
}

export default Projects;