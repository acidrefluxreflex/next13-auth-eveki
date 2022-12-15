import { TypeAnimation } from "react-type-animation";

export default function TypingText() {



  return (
    <div className="flex text-white text-7xl font-bold mx-auto px-4">
      <TypeAnimation
        sequence={[
          "Character", // Types 'One'
          2000, // Waits 1s
          "Celebrity", // Deletes 'One' and types 'Two'
          2000, // Waits 2s
          "Hero", // Types 'Three' without deleting 'Two'
          () => {
            console.log("Done typing!"); // Place optional callbacks anywhere in the array
          },
        ]}
        wrapper="div"
        cursor={true}
        repeat={Infinity}
      />
     
    </div>
  );
}
