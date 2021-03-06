#Angular
This best way to learn something is to reorganise it and then teach it

##This repository holds my AngularJs 2 experiments codes 
angular-tour-of-hero is an introductory level experiment of AngularJs 2, which discovers core fundamentals of AngularJs 2.
The rest of experiments goes into different parts of Angular in details. 

* [1. Overview Experiment](#Overview)

* [2. Forms Experiment](#Forms)

    * [2.1  Form with Animation](#FormAnimation)
	
    * [2.2 Hierarchical Forms and Component Communication](#Communication)

* [3. Http Experiment](#Http)

<h2 id='Overview'> Angular Overview Experiment </h2> 
It contains subjects such as :

1. Templates
2. Directives
3. Components
4. Multiple Components
5. Services
6. Routings
7. Http

These are the the core fundamentals of AngularJs 2. 

We can use built-in directives to show/hide elements and display lists of hero data. We can create a component to display hero details and another to show an array of heroes. We can use one-way data binding for read-only data. We can add editable fields to update a model with two-way data binding. We can bind component methods to user events like key strokes and clicks. We can select a hero from a master list and edit that hero in the details view. We can format data with pipes. We can create a shared service to assemble our heroes. And we can use routing to navigate among different views and their components. 

This experiment covers a lot of ground at an introductory level but other experiment will take us in greater depth.

<h2 id='Forms'>Angular Forms Experiment</h2> 
A form creates a cohesive, effective, and compelling data entry experience. 
An Angular form coordinates a set of data-bound user controls, 
tracks changes, validates input, and presents errors.

Initial goal of this experiment is to cover the following Angular form topics:

1. build an Angular form with a component and template
2. two-way data bind with `[(ngModel)]` syntax for reading and writing values to input controls
3. track the change state and validity of form controls using `ngModel` in combination with a form
4. provide strong visual feedback using special CSS classes that track the state of the controls
5. display validation errors to users and enable/disable form controls
6. use template reference variables for sharing information among HTML elements

<h4 id='FormAnimation'> Form with Animation</h4>
As the progress of this project, I just can't help trying out something new. So I add different kinds of 
animation for each form including:

1. States and transitions in `ConfigFormComponent`,`TypeFormComponet` and `TreatmentFormComponet`.
2. Entering and leaving in `TreatmentFormComponet`.
3. Automatic property calculation. 
4. Animation timing in `ConfigFormComponent`, `TypeFormComponet` and `TreatmentFormComponet`.
5. Parallel animation groups in `TreatmentFormComponet`.
 
<h4 id='Communication'> Hierarchical Forms & Component Communication </h4>
Moreover, the `TreatmentFormComponet` is make up of `TreatmentComponent`s. So we need a way to communicate 
between the parent component and its children components. This experiment covers the following ways of communication:

1. Pass data from parent to child with input binding
2. Parent listens for child event
3. Parent and children communicate via a service

Moreover, it's worth noting that `ConfigFormComponent`, `TypeFormComponet` and `TreatmentFormComponet` 
are brothers and I link them by two services: `FormDataService` and `FormStateService`. 


<h2 id='Http'>Angular Http Experiment</h2> 
HTTP is the primary protocol for browser/server communication.

Modern browsers support two HTTP-based APIs: XMLHttpRequest (XHR) and JSONP. A few browsers also support Fetch.

The Angular HTTP library simplifies application programming with the XHR and JSONP APIs.

This experiment covers angular http in details of the following topics:

1. A HTTP client demo.
2. Fetch data with http.get.
3. RxJS library.
4. Enable RxJS operators.
5. Process the response object.
6. Handle errors.
7. Send data to the server.
8. Fall back to promises.
9. Cross-Origin Requests: Wikipedia example.
10. Search parameters.
11. Observables.
12. in-memory web api.


