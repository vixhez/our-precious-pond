import Mallard from '../assets/ducks/general-imagery/mallard_transparent.png';

export default function Header() {
    return (
        <div class="app-header">
            <img src={Mallard} alt="" />
            <h1>Our Precious Pond</h1>
            <span>✧</span>
        </div>
    )
}