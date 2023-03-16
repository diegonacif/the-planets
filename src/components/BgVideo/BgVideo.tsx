import bgVideo from '../../assets/space-travel.mp4';
import '../../App.scss';

export const BgVideo = () => {
  return (
    <video id="background-video" loop autoPlay muted>
      <source src={bgVideo} type="video/mp4" />
      <source src={bgVideo} type="video/webm" />
      Your browser does not support the video tag.
    </video>
  )
}
