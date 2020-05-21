import React from "react";

const Contact = () => {
    return (
        <div>
            <form action="/action_page.php">
                <label for="fname" />First name:<br></br>
                <input type="text" id="fname" name="fname" placeholder="John" /><br />
                <label for="lname">Last name:</label><br />
                <input type="text" id="lname" name="lname" placeholder="Doe" /><br /><br />
                <input type="submit" value="Submit" />
            </form> 
            <p>If you click the "Submit" button, the form-data will be sent to a page called "/action_page.php".</p>
        </div>
    )
}

export default Contact;
