# Notification App


## Project Setup

- `npm install`
- `nodemon app.js`

## Architecture and Design 

The proposed solution is through the use of the Strategy Design Pattern.

This way the extension of new categories becomes easy, you just need to add a new Notification Class and add this reference in NotificationStrategy.

I tried to avoid over engineering as much as possible to do the task in the stipulated time.
This way the improvements that can be made in later stages in terms of Architecture and Design.

The proposed strategy consists of using the Controllers layer as the application's gateway, where it presents all the access routes of the application as well as possible validations of the request body.

There is a Controller for each Domain that uses Services and Models to execute the proposed Use Case.

## Routes

- [GET] `/api/users`
- [POST] `/api/messages` -> Body `category` and `message`
- [GET] `/api/messages`
- [GET] `/api/messages/categories`

