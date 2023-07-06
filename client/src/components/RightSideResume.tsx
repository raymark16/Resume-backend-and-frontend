import { Props } from "./LeftSideResume";

const RightSideResume = ({ resumeInfo }: Props) => {
  return (
    <div style={{ padding: "10px 80px 0px 0px" }}>
      <h1 style={{ fontSize: "6rem", marginBottom: "20px" }}>
        {resumeInfo?.fullname}
      </h1>
      <p style={{ fontSize: "1rem", marginBottom: "10px" }}>
        {resumeInfo?.course}
      </p>
      <h6 style={{ marginBottom: "0px" }}>EDUCATION</h6>
      <hr style={{ margin: "0px" }}></hr>
      {resumeInfo?.education.map((e) => {
        return (
          <div key={e.yearRange}>
            <p style={{ fontSize: ".8rem", marginBottom: "0px" }}>{e.school}</p>
            <p style={{ fontSize: ".8rem", marginBottom: "0px" }}>
              {e.yearRange}
            </p>
          </div>
        );
      })}

      <h6 style={{ margin: "10px 0 0 0" }}>WORK EXPERIENCE</h6>
      <hr style={{ margin: "0px" }}></hr>
      {resumeInfo?.workExperience.map((e) => {
        return (
          <div key={e.jobDate}>
            <h6
              style={{
                fontSize: ".8rem",
                marginBottom: "0px",
                fontWeight: "bold",
              }}
            >
              {e.company}-{e.jobTitle}
            </h6>
            <h6 style={{ fontSize: ".8rem", marginBottom: "0px" }}>
              {e.jobDate}
            </h6>
            <h6
              style={{
                fontSize: ".8rem",
                marginBottom: "0px",
                fontWeight: "bold",
              }}
            >
              Job Description
            </h6>

            <h6 style={{ fontSize: ".8rem", marginBottom: "0px" }}>
              Responsibilities
            </h6>
            {e.jobResponsibilities.map((el) => {
              return (
                <ul key={el} style={{ fontSize: ".8rem", marginBottom: "0px" }}>
                  <li style={{ marginBottom: "0px" }}>{el}</li>
                </ul>
              );
            })}
          </div>
        );
      })}
      <h6 style={{ margin: "10px 0 0 0" }}>CERTIFICATIONS</h6>
      <hr style={{ margin: "0px" }}></hr>
      {resumeInfo?.certifications.map((e) => {
        return (
          <div key={e.certificationTitle}>
            <h6 style={{ fontSize: ".9rem", margin: "5px" }}>
              {e.certificationTitle}
            </h6>
            <h6 style={{ fontSize: ".8rem", margin: "5px", color: "gray" }}>
              {e.certificationRange}
            </h6>
          </div>
        );
      })}
      <h6 style={{ margin: "10px 0 0 0" }}>CHARACTER REFERENCES</h6>
      <hr style={{ margin: "0px" }}></hr>
      {resumeInfo?.characterReferences.map((e) => {
        return (
          <div key={e.characterEmail}>
            <h6 style={{ fontSize: ".8rem", marginBottom: "0px" }}>
              {e.characterName} - {e.characterTitle}, {e.characterCompany}
            </h6>
            <h6 style={{ fontSize: ".8rem", marginBottom: "0px" }}>
              {e.characterPhone} - {e.characterEmail}
            </h6>
          </div>
        );
      })}
    </div>
  );
};

export default RightSideResume;
