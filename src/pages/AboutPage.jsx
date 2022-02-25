import Card from "../components/shared/Card";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About this Project</h1>
        <p>A react app to leave a feedback for a prodcut pr service</p>
        <p>Version: 1.0.0</p>
        <p>
          <Link to="/">Back to main page</Link>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
