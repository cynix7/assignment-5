*Project Name- assignment-devstack
*description- It is a react project using typescript.
*Technonoly Used- React,Tailwind CSS,DaisyUI,TypeScript,React-Toastify,JSON,Vite 
*Feature- can add to stack,can remove from stack,shows toastify message when added or removed

1.What is JSX, and why is it used in React?
=> JSX or javascript xml is a syntax that let us write html like code in javascript.
React use JSX because it allows write logic inside it alongwith UI structure.

2.What is the difference between props and state?
=>Props store data that comes from parent component and used to pass data.
  State store component data and used to manage different type of data state.

3.What does the useState hook do, and where did you use it in this project?
=>useState hook store data of component that changes over time.I used useState hook in Technologies component.
 
4.What does the use hook do, and why did you need it to load the JSON data?
=> use hook ressolve a promise and reads it's value..After fetching json data it returns a promise.To resolve promise we use use hook.

5.Why does every item in a .map() list need a unique key prop?
=> Every item in a .map() list need a unique key so react can identify which item is changed or modified when component re-renders.

6.What is conditional rendering? Show one place you used it.
=>Conditional rendering means showing specific UI depending on condition.I used conditional rendering in Technologies component to render selected stack section.

7.How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
=>We use profs to send data from a parent component to a child component.A child can't send something back to the parent because react is unidirectional.