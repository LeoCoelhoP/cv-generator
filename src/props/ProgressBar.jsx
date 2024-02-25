export default function ProgressBar({ cvValue }) {
  const len = cvValue.progress;
  let progressBar;
  let percentage;
  if (len <= 5 && len > 0) {
    percentage = 20 * len;
    progressBar = document.querySelector('.first-bar');
    progressBar.setAttribute(
      'style',
      `background-image: linear-gradient(90deg, #fff ${percentage}%, #909090 ${percentage}%)`,
    );
  }

  if (len <= 8 && len > 5) {
    percentage = 33.33 * (len - 5);

    progressBar = document.querySelector('.second-bar');
    progressBar.setAttribute(
      'style',
      `background-image: linear-gradient(90deg, #fff ${percentage}%, #909090 ${percentage}%)`,
    );
  }

  if (len <= 12 && len > 8) {
    percentage = 25 * (len - 8);
    progressBar = document.querySelector('.third-bar');
    progressBar.setAttribute(
      'style',
      `background-image: linear-gradient(90deg, #fff ${percentage}%, #909090 ${percentage}%)`,
    );
  }

  if (len <= 14 && len > 12) {
    percentage = 50 * (len - 12);
    progressBar = document.querySelector('.forth-bar');
    progressBar.setAttribute(
      'style',
      `background-image: linear-gradient(90deg, #fff ${percentage}%, #909090 ${percentage}%)`,
    );
  }

  if (len <= 18 && len > 14) {
    percentage = 25 * (len - 14);
    progressBar = document.querySelector('.fifth-bar');
    progressBar.setAttribute(
      'style',
      `background-image: linear-gradient(90deg, #fff ${percentage}%, #909090 ${percentage}%)`,
    );
  }

  return (
    <div className="progress-bar">
      <div className="big-bar"></div>
      <div className="first-marker mark active">1</div>
      <div className="first-bar bar"></div>
      <div className={`second-marker mark ${len >= 5 ? 'active' : ''}`}>2</div>
      <div className="second-bar bar"></div>
      <div className={`third-marker mark ${len >= 8 ? 'active' : ''}`}>3</div>
      <div className="third-bar bar"></div>
      <div className={`forth-marker mark ${len >= 12 ? 'active' : ''}`}>4</div>
      <div className="forth-bar bar"></div>
      <div className={`fifth-marker mark ${len >= 14 ? 'active' : ''}`}>5</div>
      <div className="fifth-bar bar"></div>
      <div className={`sixth-marker mark ${len >= 18 ? 'active' : ''}`}>6</div>
    </div>
  );
}
