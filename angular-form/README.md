# Angular Forms Experiment
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

## Forms with Animation
As the progress of this project, I just can't help trying out something new. So I add different kinds of 
animation for each form including:

1. States and transitions in `ConfigFormComponent`,`TypeFormComponet` and `TreatmentFormComponet`.
2. Entering and leaving in `TreatmentFormComponet`.
3. Automatic property calculation. 
4. Animation timing in `ConfigFormComponent`, `TypeFormComponet` and `TreatmentFormComponet`.
5. Parallel animation groups in `TreatmentFormComponet`.
 
## Hierarchical Forms (Component Communication)
Moreover, the `TreatmentFormComponet` is make up of `TreatmentComponent`s. So we need a way to communicate 
between the parent component and its children components. This experiment covers the following ways of communication:

1. Pass data from parent to child with input binding
2. Parent listens for child event
3. Parent and children communicate via a service

Moreover, it's worth noting that `ConfigFormComponent`, `TypeFormComponet` and `TreatmentFormComponet` 
are brothers and I link them by two services: `FormDataService` and `FormStateService`. 
