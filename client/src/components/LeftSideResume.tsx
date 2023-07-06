import { URLi } from "../App";
interface EducationProps {
  school: string;
  yearRange: string;
}
interface WorkExperienceProps {
  company: string;
  jobTitle: string;
  jobDate: string;
  jobResponsibilities: string[];
}
interface CertificationsProps {
  certificationTitle: string;
  certificationRange: string;
}
interface CharacterReferencesProps {
  characterName: string;
  characterTitle: string;
  characterCompany: string;
  characterPhone: string;
  characterEmail: string;
}
export interface Props {
  resumeInfo: {
    [key: string]:
      | string
      | string[]
      | EducationProps[]
      | WorkExperienceProps[]
      | CertificationsProps[]
      | CharacterReferencesProps[];
    fullname: string;
    course: string;
    userPicture: string;
    profileDescription: string;
    phone: string;
    email: string;
    skills: string[];
    strengths: string[];
    education: EducationProps[];
    workExperience: WorkExperienceProps[];
    certifications: CertificationsProps[];
    characterReferences: CharacterReferencesProps[];
  } | null;
}
const LeftSideResume = ({ resumeInfo }: Props) => {
  const userPicture = `${URLi}/Uploads/${resumeInfo?.userPicture}`;
  return (
    <div
      style={{
        backgroundColor: "lightgray",
        width: "85%",
        padding: "10px 0px",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <img src={userPicture} width="50%" alt="resume picture"></img>
      </div>
      <div style={{ margin: "10px 30px" }}>
        <h4 style={{ marginBottom: "10px" }}>PROFILE</h4>
        <p style={{ textAlign: "justify", marginBottom: "0px" }}>
          {resumeInfo?.profileDescription}
        </p>
        <h4 style={{ marginBottom: "10px" }}>CONTACT</h4>
        <h6 style={{ marginBottom: "0px" }}>PHONE:</h6>
        <p style={{ marginBottom: "0px" }}>{resumeInfo?.phone}</p>
        <h6 style={{ marginBottom: "0px" }}>EMAIL:</h6>
        <p style={{ marginBottom: "0px" }}>{resumeInfo?.email}</p>
        <h4 style={{ marginBottom: "10px" }}>SKILLS</h4>
        {resumeInfo?.skills.map((e) => {
          return (
            <ul key={e} style={{ marginBottom: "0px" }}>
              <li style={{ marginBottom: "0px" }}>{e}</li>
            </ul>
          );
        })}
        <h4 style={{ marginBottom: "10px" }}>STRENGTHS</h4>
        {resumeInfo?.strengths.map((e) => {
          return (
            <ul key={e} style={{ marginBottom: "0px" }}>
              <li style={{ marginBottom: "0px" }}>{e}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default LeftSideResume;
