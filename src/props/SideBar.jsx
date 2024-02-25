import Infos from './Infos';
import ProgressBar from './ProgressBar';

export function InfoContainer({ cvValue, setCvValue }) {
  return (
    <>
      <ProgressBar setCvValue={setCvValue} cvValue={cvValue} />
      <div className="info-container">
        <Infos setCvValue={setCvValue} cvValue={cvValue} />
      </div>
    </>
  );
}

export default function SideBar({ cvValue, setCvValue }) {
  return (
    <div className="sidebar-container">
      <h1 className="sidebar-title">CV GENERATOR</h1>
      <InfoContainer setCvValue={setCvValue} cvValue={cvValue} />
    </div>
  );
}
