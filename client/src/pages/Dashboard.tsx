import axios from "axios";
import { URLi } from "../App";
import { useEffect, useState } from "react";
import LeftSideResume from "../components/LeftSideResume";
import RightSideResume from "../components/RightSideResume";

const Dashboard = () => {
  const [resumeInfo, setResumeInfo] = useState(null);
  const getResumeInfo = async () => {
    const res = await axios.get(`${URLi}/api/get/user/resume-info`);
    setResumeInfo(res.data.result);
  };
  useEffect(() => {
    getResumeInfo();
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center", height: "100vh" }}>
      <div
        style={{
          width: "30vw",
          borderLeft: "1px solid black",
          borderTop: "1px solid black",
          borderBottom: "1px solid black",
          display: "flex",
          justifyContent: "center",
          margin: "30px 0px",
        }}
      >
        <LeftSideResume resumeInfo={resumeInfo} />
      </div>
      <div
        style={{
          width: "40vw",
          borderRight: "1px solid black",
          borderTop: "1px solid black",
          borderBottom: "1px solid black",
          margin: "30px 0px",
        }}
      >
        <RightSideResume resumeInfo={resumeInfo} />
      </div>
    </div>
  );
};

export default Dashboard;
