# Front End Developer Tasks

There are two main styles of binding within Angular.
For this Angular application we are using Angular Reactive Forms. Also try to keep the styling & theme consistent throughout the application and use Bootstrap to style your controls. You can use no colors or any colors. Style is entirely up to you.

## Step 1: get everything up and running and verify your environment
1. Follow the README to get your environment and the project up and running
1. Verify it's running back opening Google Chrome and going to http://localhost:4200
1. Open app.routes.ts, this is where the routing configuration is located
1. Try to navigate to both of these in the browser and make sure they work. For edit-customer you will need to replace ":id" with "1"

## Step 2: write a new component to list the Customers and all their fields
1. Use Angular-CLI to generate a new component named: customers.
1. Update the app.routes.ts  to have a new route for the customers component.
1. Create a new component to display the list of customer objects returned from the Customer Service. In order to understand how to inject the Customer Service into the new component see EditCustomerComponent.
1. Make sure each customer row displays a link to modify the the customer row. Hint you will use an anchor tag with an routerLink attribute

## Step 3: modify the existing edit-customer component to display the other fields

## See also
You may want to read the following resources if you get stuck.

https://angular.io/guide/reactive-forms

https://angular.io/tutorial/toh-pt1
