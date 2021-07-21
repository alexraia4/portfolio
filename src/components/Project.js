import '../css/Project.css'

function Project(props) {
      return (
            <div className = "Project">
                  <a href="https://www.google.com/" className = "Project_link"/>
                  <div className = "Project_content">
                        <p className = "Project_title">{props.title}</p>
                        <p className = "Project_context">{props.context}</p>
                  </div>
            </div>
      );
}

export default Project;