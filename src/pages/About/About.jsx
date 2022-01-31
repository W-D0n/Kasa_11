// import { useEffect } from "react";

// const ProgressBar = (props) => {
//   const [progress, setProgress] = useState(props.init);
// }

// const ProgressBar2 = (props) => {
//   const [progress, setProgress] = useState(props.init);

//   useEffect(() => {
//     setProgress(props.init);
//   }, [props.init]);
// }
import Header from '../../components/Header/Header';

export default function About() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <Header activeItem="About" />
      <h2>About</h2>
    </main>
  );
}