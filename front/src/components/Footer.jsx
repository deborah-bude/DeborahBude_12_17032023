import bike from "../assets/bike.svg";
import meditation from "../assets/meditation.svg";
import musculation from "../assets/musculation.svg";
import swim from "../assets/swim.svg";
export default function Footer() {
    return <footer>
        <ul><li><img src={bike}/>
            </li><li><img src={meditation}/>
            </li><li><img src={musculation}/>
            </li><li><img src={swim}/>
            </li></ul>
        <p>Copyright, SportSee 2020</p>
    </footer>
}