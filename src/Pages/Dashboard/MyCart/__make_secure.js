/**
 * ----------------------
 *          BASIC
 * ----------------------
 * 1. do not show the link to them who should not see it
 * 2. only show to the person/types of user who should see it
 * 3. do not allow to visit the link by typing on the url
 * -------------------------
 *      TO SEND DATA IN DB
 * -------------------------
 * 1. Verify jwt token (send authorization token in the header to the the server).if possible use axios to send jwt token by intercepting the request.
 * use AdminRoute that will check whether the user is admin or not id not admin then redirect to any other page.you could logout user and send them to the login page as well.
 * 2. if it is an admin activity.Make sure only admin user is posting data by using verifyAdmin
 * 
 */