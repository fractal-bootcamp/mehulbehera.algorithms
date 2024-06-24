export default function Navigation() {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">Algorithms Visualizer</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><a href="">Path Planning </a></li>
                    <li>
                        <details>
                            <summary>Searches</summary>
                            <ul className="bg-base-100 rounded-t-none p-2">
                                <li><a href="">Linear</a></li>
                                <li><a href="">Binary</a></li>
                                <li><a href="">Depth-First</a></li>
                                <li><a href="">Breadth-First</a></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Sorting</summary>
                            <ul className="bg-base-100 rounded-t-none p-2">
                                <li><a href="">Bubble</a></li>
                                <li><a href="">Selection</a></li>
                                <li><a href="">Insertion</a></li>
                                <li><a href="">Merge</a></li>
                                <li><a href="">Quick</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>

            </div>

        </div>
    );

}