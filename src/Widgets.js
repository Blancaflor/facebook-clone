import React from 'react';
import "./Widgets.css";

function Widgets() {
    return (
        <div className="widgets">

            <iframe src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fwww.facebook.com%2Fgroups%2F1544766869154968%2F&layout=button_count&size=large&width=340&height=1500&appId"
                width="340"
                height="100"
                title="widget"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameborder="0"
                allowTransparency="true"
                allow="encrypted-media"
            ></iframe>


        </div>
    )
}

export default Widgets
