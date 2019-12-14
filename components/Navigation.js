import Link from 'next/link'

export default () => (
    <nav>
        <div className="nav-wrapper">
            <Link href="/"><a href="#" className="brand-logo">Logo</a></Link>
            <ul id="nav-mobile" className="right">
                <li><Link href="/posts"><a href="/posts">Articles</a></Link></li>
                <li><Link href="/about"><a href="/posts">A propos</a></Link></li>
            </ul>
        </div>
    </nav>
)