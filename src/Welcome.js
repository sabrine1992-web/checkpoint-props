 

    export const Welcome = props => {
        console.log(`props:`, props.name);
        return (
            <button onClick={() => props.alertMyInput("my name is sabrine saada")}>
            ClickMe
          </button>
        );
       };