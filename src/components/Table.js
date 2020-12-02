import React from "react";

export function Table() {
    return (
        <div className="table">
            <table>
                <thead>
                    <tr>
                        <th>Pros</th>
                        <th>Cons</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>JSX</td>
                        <td>Learning Curve</td>
                    </tr>
                    <tr>
                        <td>VirtualDOM</td>
                        <td>Documentation</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}