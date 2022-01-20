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
                        <td>This is a pros and cons table</td>
                        <td>This can be useful for blof posts or reviews</td>
                    </tr>
                    <tr>
                        <td>This is a very simple example</td>
                        <td>Will make more compled version in the future</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}